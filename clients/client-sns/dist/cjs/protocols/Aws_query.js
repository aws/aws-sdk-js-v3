"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryAddPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryAddPermissionInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "AddPermission", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryAddPermissionCommand = serializeAws_queryAddPermissionCommand;
async function serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCheckIfPhoneNumberIsOptedOutInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CheckIfPhoneNumberIsOptedOut", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand;
async function serializeAws_queryConfirmSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryConfirmSubscriptionInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ConfirmSubscription", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryConfirmSubscriptionCommand = serializeAws_queryConfirmSubscriptionCommand;
async function serializeAws_queryCreatePlatformApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreatePlatformApplicationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreatePlatformApplication", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreatePlatformApplicationCommand = serializeAws_queryCreatePlatformApplicationCommand;
async function serializeAws_queryCreatePlatformEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreatePlatformEndpointInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreatePlatformEndpoint", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreatePlatformEndpointCommand = serializeAws_queryCreatePlatformEndpointCommand;
async function serializeAws_queryCreateTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateTopicInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateTopic", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateTopicCommand = serializeAws_queryCreateTopicCommand;
async function serializeAws_queryDeleteEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteEndpointInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteEndpoint", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteEndpointCommand = serializeAws_queryDeleteEndpointCommand;
async function serializeAws_queryDeletePlatformApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeletePlatformApplicationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeletePlatformApplication", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeletePlatformApplicationCommand = serializeAws_queryDeletePlatformApplicationCommand;
async function serializeAws_queryDeleteTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteTopicInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteTopic", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteTopicCommand = serializeAws_queryDeleteTopicCommand;
async function serializeAws_queryGetEndpointAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetEndpointAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetEndpointAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetEndpointAttributesCommand = serializeAws_queryGetEndpointAttributesCommand;
async function serializeAws_queryGetPlatformApplicationAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetPlatformApplicationAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetPlatformApplicationAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetPlatformApplicationAttributesCommand = serializeAws_queryGetPlatformApplicationAttributesCommand;
async function serializeAws_queryGetSMSAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetSMSAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetSMSAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSMSAttributesCommand = serializeAws_queryGetSMSAttributesCommand;
async function serializeAws_queryGetSubscriptionAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetSubscriptionAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetSubscriptionAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetSubscriptionAttributesCommand = serializeAws_queryGetSubscriptionAttributesCommand;
async function serializeAws_queryGetTopicAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryGetTopicAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "GetTopicAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryGetTopicAttributesCommand = serializeAws_queryGetTopicAttributesCommand;
async function serializeAws_queryListEndpointsByPlatformApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListEndpointsByPlatformApplicationInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListEndpointsByPlatformApplication", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListEndpointsByPlatformApplicationCommand = serializeAws_queryListEndpointsByPlatformApplicationCommand;
async function serializeAws_queryListPhoneNumbersOptedOutCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPhoneNumbersOptedOutInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPhoneNumbersOptedOut", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPhoneNumbersOptedOutCommand = serializeAws_queryListPhoneNumbersOptedOutCommand;
async function serializeAws_queryListPlatformApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListPlatformApplicationsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListPlatformApplications", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListPlatformApplicationsCommand = serializeAws_queryListPlatformApplicationsCommand;
async function serializeAws_queryListSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListSubscriptionsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListSubscriptions", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListSubscriptionsCommand = serializeAws_queryListSubscriptionsCommand;
async function serializeAws_queryListSubscriptionsByTopicCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListSubscriptionsByTopicInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListSubscriptionsByTopic", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListSubscriptionsByTopicCommand = serializeAws_queryListSubscriptionsByTopicCommand;
async function serializeAws_queryListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTagsForResourceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTagsForResource", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
async function serializeAws_queryListTopicsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryListTopicsInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "ListTopics", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListTopicsCommand = serializeAws_queryListTopicsCommand;
async function serializeAws_queryOptInPhoneNumberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryOptInPhoneNumberInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "OptInPhoneNumber", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryOptInPhoneNumberCommand = serializeAws_queryOptInPhoneNumberCommand;
async function serializeAws_queryPublishCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryPublishInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "Publish", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryPublishCommand = serializeAws_queryPublishCommand;
async function serializeAws_queryRemovePermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryRemovePermissionInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "RemovePermission", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryRemovePermissionCommand = serializeAws_queryRemovePermissionCommand;
async function serializeAws_querySetEndpointAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetEndpointAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetEndpointAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetEndpointAttributesCommand = serializeAws_querySetEndpointAttributesCommand;
async function serializeAws_querySetPlatformApplicationAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetPlatformApplicationAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetPlatformApplicationAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetPlatformApplicationAttributesCommand = serializeAws_querySetPlatformApplicationAttributesCommand;
async function serializeAws_querySetSMSAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetSMSAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetSMSAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetSMSAttributesCommand = serializeAws_querySetSMSAttributesCommand;
async function serializeAws_querySetSubscriptionAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetSubscriptionAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetSubscriptionAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetSubscriptionAttributesCommand = serializeAws_querySetSubscriptionAttributesCommand;
async function serializeAws_querySetTopicAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySetTopicAttributesInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "SetTopicAttributes", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySetTopicAttributesCommand = serializeAws_querySetTopicAttributesCommand;
async function serializeAws_querySubscribeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_querySubscribeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "Subscribe", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_querySubscribeCommand = serializeAws_querySubscribeCommand;
async function serializeAws_queryTagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryTagResourceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "TagResource", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryTagResourceCommand = serializeAws_queryTagResourceCommand;
async function serializeAws_queryUnsubscribeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUnsubscribeInput(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "Unsubscribe", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUnsubscribeCommand = serializeAws_queryUnsubscribeCommand;
async function serializeAws_queryUntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUntagResourceRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UntagResource", Version: "2010-03-31" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUntagResourceCommand = serializeAws_queryUntagResourceCommand;
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
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse(data.CheckIfPhoneNumberIsOptedOutResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CheckIfPhoneNumberIsOptedOutResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand;
async function deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazon.cloudcast.onlines#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryConfirmSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryConfirmSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfirmSubscriptionResponse(data.ConfirmSubscriptionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConfirmSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryConfirmSubscriptionCommand = deserializeAws_queryConfirmSubscriptionCommand;
async function deserializeAws_queryConfirmSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazon.cloudcast.onlines#FilterPolicyLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionLimitExceededException":
        case "com.amazon.cloudcast.onlines#SubscriptionLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreatePlatformApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreatePlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePlatformApplicationResponse(data.CreatePlatformApplicationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePlatformApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreatePlatformApplicationCommand = deserializeAws_queryCreatePlatformApplicationCommand;
async function deserializeAws_queryCreatePlatformApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreatePlatformEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreatePlatformEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateEndpointResponse(data.CreatePlatformEndpointResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreatePlatformEndpointCommand = deserializeAws_queryCreatePlatformEndpointCommand;
async function deserializeAws_queryCreatePlatformEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryCreateTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTopicResponse(data.CreateTopicResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTopicResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateTopicCommand = deserializeAws_queryCreateTopicCommand;
async function deserializeAws_queryCreateTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentAccessException":
        case "com.amazon.cloudcast.onlines#ConcurrentAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleTagException":
        case "com.amazon.cloudcast.onlines#StaleTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazon.cloudcast.onlines#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.cloudcast.onlines#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TopicLimitExceededException":
        case "com.amazon.cloudcast.onlines#TopicLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTopicLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteEndpointCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteEndpointCommand = deserializeAws_queryDeleteEndpointCommand;
async function deserializeAws_queryDeleteEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeletePlatformApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeletePlatformApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeletePlatformApplicationCommand = deserializeAws_queryDeletePlatformApplicationCommand;
async function deserializeAws_queryDeletePlatformApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryDeleteTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteTopicCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteTopicCommand = deserializeAws_queryDeleteTopicCommand;
async function deserializeAws_queryDeleteTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentAccessException":
        case "com.amazon.cloudcast.onlines#ConcurrentAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleTagException":
        case "com.amazon.cloudcast.onlines#StaleTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.cloudcast.onlines#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetEndpointAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetEndpointAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetEndpointAttributesResponse(data.GetEndpointAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEndpointAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetEndpointAttributesCommand = deserializeAws_queryGetEndpointAttributesCommand;
async function deserializeAws_queryGetEndpointAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetPlatformApplicationAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetPlatformApplicationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPlatformApplicationAttributesResponse(data.GetPlatformApplicationAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPlatformApplicationAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetPlatformApplicationAttributesCommand = deserializeAws_queryGetPlatformApplicationAttributesCommand;
async function deserializeAws_queryGetPlatformApplicationAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetSMSAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSMSAttributesResponse(data.GetSMSAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSMSAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSMSAttributesCommand = deserializeAws_queryGetSMSAttributesCommand;
async function deserializeAws_queryGetSMSAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazon.cloudcast.onlines#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetSubscriptionAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetSubscriptionAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSubscriptionAttributesResponse(data.GetSubscriptionAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSubscriptionAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetSubscriptionAttributesCommand = deserializeAws_queryGetSubscriptionAttributesCommand;
async function deserializeAws_queryGetSubscriptionAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryGetTopicAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryGetTopicAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTopicAttributesResponse(data.GetTopicAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTopicAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryGetTopicAttributesCommand = deserializeAws_queryGetTopicAttributesCommand;
async function deserializeAws_queryGetTopicAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListEndpointsByPlatformApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListEndpointsByPlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListEndpointsByPlatformApplicationResponse(data.ListEndpointsByPlatformApplicationResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEndpointsByPlatformApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListEndpointsByPlatformApplicationCommand = deserializeAws_queryListEndpointsByPlatformApplicationCommand;
async function deserializeAws_queryListEndpointsByPlatformApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPhoneNumbersOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPhoneNumbersOptedOutResponse(data.ListPhoneNumbersOptedOutResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPhoneNumbersOptedOutResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPhoneNumbersOptedOutCommand = deserializeAws_queryListPhoneNumbersOptedOutCommand;
async function deserializeAws_queryListPhoneNumbersOptedOutCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazon.cloudcast.onlines#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListPlatformApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListPlatformApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPlatformApplicationsResponse(data.ListPlatformApplicationsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPlatformApplicationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListPlatformApplicationsCommand = deserializeAws_queryListPlatformApplicationsCommand;
async function deserializeAws_queryListPlatformApplicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSubscriptionsResponse(data.ListSubscriptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSubscriptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListSubscriptionsCommand = deserializeAws_queryListSubscriptionsCommand;
async function deserializeAws_queryListSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListSubscriptionsByTopicCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListSubscriptionsByTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSubscriptionsByTopicResponse(data.ListSubscriptionsByTopicResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSubscriptionsByTopicResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListSubscriptionsByTopicCommand = deserializeAws_queryListSubscriptionsByTopicCommand;
async function deserializeAws_queryListSubscriptionsByTopicCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTagsForResourceResponse(data.ListTagsForResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
async function deserializeAws_queryListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentAccessException":
        case "com.amazon.cloudcast.onlines#ConcurrentAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.cloudcast.onlines#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.cloudcast.onlines#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryListTopicsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListTopicsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTopicsResponse(data.ListTopicsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTopicsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListTopicsCommand = deserializeAws_queryListTopicsCommand;
async function deserializeAws_queryListTopicsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryOptInPhoneNumberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryOptInPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptInPhoneNumberResponse(data.OptInPhoneNumberResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "OptInPhoneNumberResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryOptInPhoneNumberCommand = deserializeAws_queryOptInPhoneNumberCommand;
async function deserializeAws_queryOptInPhoneNumberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazon.cloudcast.onlines#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryPublishCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryPublishCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPublishResponse(data.PublishResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PublishResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryPublishCommand = deserializeAws_queryPublishCommand;
async function deserializeAws_queryPublishCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EndpointDisabledException":
        case "com.amazon.cloudcast.onlines#EndpointDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryEndpointDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazon.cloudcast.onlines#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSAccessDeniedException":
        case "com.amazon.cloudcast.onlines#KMSAccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSAccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSDisabledException":
        case "com.amazon.cloudcast.onlines#KMSDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.cloudcast.onlines#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSNotFoundException":
        case "com.amazon.cloudcast.onlines#KMSNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSOptInRequired":
        case "com.amazon.cloudcast.onlines#KMSOptInRequired":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSOptInRequiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSThrottlingException":
        case "com.amazon.cloudcast.onlines#KMSThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryKMSThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformApplicationDisabledException":
        case "com.amazon.cloudcast.onlines#PlatformApplicationDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryPlatformApplicationDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetEndpointAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetEndpointAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetEndpointAttributesCommand = deserializeAws_querySetEndpointAttributesCommand;
async function deserializeAws_querySetEndpointAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetPlatformApplicationAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetPlatformApplicationAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetPlatformApplicationAttributesCommand = deserializeAws_querySetPlatformApplicationAttributesCommand;
async function deserializeAws_querySetPlatformApplicationAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetSMSAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSMSAttributesResponse(data.SetSMSAttributesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetSMSAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySetSMSAttributesCommand = deserializeAws_querySetSMSAttributesCommand;
async function deserializeAws_querySetSMSAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottledException":
        case "com.amazon.cloudcast.onlines#ThrottledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetSubscriptionAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetSubscriptionAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetSubscriptionAttributesCommand = deserializeAws_querySetSubscriptionAttributesCommand;
async function deserializeAws_querySetSubscriptionAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazon.cloudcast.onlines#FilterPolicyLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySetTopicAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySetTopicAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_querySetTopicAttributesCommand = deserializeAws_querySetTopicAttributesCommand;
async function deserializeAws_querySetTopicAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_querySubscribeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_querySubscribeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySubscribeResponse(data.SubscribeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SubscribeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_querySubscribeCommand = deserializeAws_querySubscribeCommand;
async function deserializeAws_querySubscribeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazon.cloudcast.onlines#FilterPolicyLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SubscriptionLimitExceededException":
        case "com.amazon.cloudcast.onlines#SubscriptionLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryTagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryTagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagResourceResponse(data.TagResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryTagResourceCommand = deserializeAws_queryTagResourceCommand;
async function deserializeAws_queryTagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentAccessException":
        case "com.amazon.cloudcast.onlines#ConcurrentAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.cloudcast.onlines#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleTagException":
        case "com.amazon.cloudcast.onlines#StaleTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazon.cloudcast.onlines#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.cloudcast.onlines#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUnsubscribeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUnsubscribeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_queryUnsubscribeCommand = deserializeAws_queryUnsubscribeCommand;
async function deserializeAws_queryUnsubscribeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazon.cloudcast.onlines#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSecurityException":
        case "com.amazon.cloudcast.onlines#InvalidSecurityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.cloudcast.onlines#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_queryUntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUntagResourceResponse(data.UntagResourceResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUntagResourceCommand = deserializeAws_queryUntagResourceCommand;
async function deserializeAws_queryUntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazon.cloudcast.onlines#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentAccessException":
        case "com.amazon.cloudcast.onlines#ConcurrentAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.cloudcast.onlines#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.cloudcast.onlines#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StaleTagException":
        case "com.amazon.cloudcast.onlines#StaleTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazon.cloudcast.onlines#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.cloudcast.onlines#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_queryAuthorizationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationErrorException(body.Error, context);
    const contents = Object.assign({ name: "AuthorizationErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryConcurrentAccessExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentAccessException(body.Error, context);
    const contents = Object.assign({ name: "ConcurrentAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryEndpointDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointDisabledException(body.Error, context);
    const contents = Object.assign({ name: "EndpointDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryFilterPolicyLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryFilterPolicyLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "FilterPolicyLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalErrorException(body.Error, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterException(body.Error, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidSecurityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSecurityException(body.Error, context);
    const contents = Object.assign({ name: "InvalidSecurityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSAccessDeniedException(body.Error, context);
    const contents = Object.assign({ name: "KMSAccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSDisabledException(body.Error, context);
    const contents = Object.assign({ name: "KMSDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSInvalidStateException(body.Error, context);
    const contents = Object.assign({ name: "KMSInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "KMSNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSOptInRequiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSOptInRequired(body.Error, context);
    const contents = Object.assign({ name: "KMSOptInRequired", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryKMSThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSThrottlingException(body.Error, context);
    const contents = Object.assign({ name: "KMSThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryPlatformApplicationDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPlatformApplicationDisabledException(body.Error, context);
    const contents = Object.assign({ name: "PlatformApplicationDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryStaleTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStaleTagException(body.Error, context);
    const contents = Object.assign({ name: "StaleTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_querySubscriptionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "SubscriptionLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "TagLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagPolicyException(body.Error, context);
    const contents = Object.assign({ name: "TagPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryThrottledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryThrottledException(body.Error, context);
    const contents = Object.assign({ name: "ThrottledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryTopicLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTopicLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "TopicLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAddPermissionInput = (input, context) => {
    const entries = {};
    if (input.AWSAccountId !== undefined) {
        const memberEntries = serializeAws_queryDelegatesList(input.AWSAccountId, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AWSAccountId.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.ActionName !== undefined) {
        const memberEntries = serializeAws_queryActionsList(input.ActionName, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ActionName.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Label !== undefined) {
        entries["Label"] = input.Label;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryCheckIfPhoneNumberIsOptedOutInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber !== undefined) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const serializeAws_queryConfirmSubscriptionInput = (input, context) => {
    const entries = {};
    if (input.AuthenticateOnUnsubscribe !== undefined) {
        entries["AuthenticateOnUnsubscribe"] = input.AuthenticateOnUnsubscribe;
    }
    if (input.Token !== undefined) {
        entries["Token"] = input.Token;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryCreatePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Platform !== undefined) {
        entries["Platform"] = input.Platform;
    }
    return entries;
};
const serializeAws_queryCreatePlatformEndpointInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.CustomUserData !== undefined) {
        entries["CustomUserData"] = input.CustomUserData;
    }
    if (input.PlatformApplicationArn !== undefined) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.Token !== undefined) {
        entries["Token"] = input.Token;
    }
    return entries;
};
const serializeAws_queryCreateTopicInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryTopicAttributesMap(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Name !== undefined) {
        entries["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDelegatesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteEndpointInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn !== undefined) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const serializeAws_queryDeletePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_queryDeleteTopicInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryGetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn !== undefined) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const serializeAws_queryGetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_queryGetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes !== undefined) {
        const memberEntries = serializeAws_queryListString(input.attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryGetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn !== undefined) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const serializeAws_queryGetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryListEndpointsByPlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.PlatformApplicationArn !== undefined) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_queryListPhoneNumbersOptedOutInput = (input, context) => {
    const entries = {};
    if (input.nextToken !== undefined) {
        entries["nextToken"] = input.nextToken;
    }
    return entries;
};
const serializeAws_queryListPlatformApplicationsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListString = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListSubscriptionsByTopicInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryListSubscriptionsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const serializeAws_queryListTopicsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryMapStringToString = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageAttributeMap = (input, context) => {
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
const serializeAws_queryMessageAttributeValue = (input, context) => {
    const entries = {};
    if (input.BinaryValue !== undefined) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.DataType !== undefined) {
        entries["DataType"] = input.DataType;
    }
    if (input.StringValue !== undefined) {
        entries["StringValue"] = input.StringValue;
    }
    return entries;
};
const serializeAws_queryOptInPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber !== undefined) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const serializeAws_queryPublishInput = (input, context) => {
    const entries = {};
    if (input.Message !== undefined) {
        entries["Message"] = input.Message;
    }
    if (input.MessageAttributes !== undefined) {
        const memberEntries = serializeAws_queryMessageAttributeMap(input.MessageAttributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `MessageAttributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.MessageStructure !== undefined) {
        entries["MessageStructure"] = input.MessageStructure;
    }
    if (input.PhoneNumber !== undefined) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.Subject !== undefined) {
        entries["Subject"] = input.Subject;
    }
    if (input.TargetArn !== undefined) {
        entries["TargetArn"] = input.TargetArn;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryRemovePermissionInput = (input, context) => {
    const entries = {};
    if (input.Label !== undefined) {
        entries["Label"] = input.Label;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_querySetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.EndpointArn !== undefined) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const serializeAws_querySetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.PlatformApplicationArn !== undefined) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_querySetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes !== undefined) {
        const memberEntries = serializeAws_queryMapStringToString(input.attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_querySetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    if (input.SubscriptionArn !== undefined) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const serializeAws_querySetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_querySubscribeInput = (input, context) => {
    const entries = {};
    if (input.Attributes !== undefined) {
        const memberEntries = serializeAws_querySubscriptionAttributesMap(input.Attributes, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Attributes.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.Endpoint !== undefined) {
        entries["Endpoint"] = input.Endpoint;
    }
    if (input.Protocol !== undefined) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.ReturnSubscriptionArn !== undefined) {
        entries["ReturnSubscriptionArn"] = input.ReturnSubscriptionArn;
    }
    if (input.TopicArn !== undefined) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_querySubscriptionAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        entries["Value"] = input.Value;
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
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.keys(memberEntries).forEach(key => {
            entries[`member.${counter}.${key}`] = memberEntries[key];
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Tags.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryTopicAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input).forEach(key => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryUnsubscribeInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn !== undefined) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const serializeAws_queryUntagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TagKeys.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const deserializeAws_queryAuthorizationErrorException = (output, context) => {
    let contents = {
        __type: "AuthorizationErrorException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse = (output, context) => {
    let contents = {
        __type: "CheckIfPhoneNumberIsOptedOutResponse",
        isOptedOut: undefined
    };
    if (output["isOptedOut"] !== undefined) {
        contents.isOptedOut = output["isOptedOut"] == "true";
    }
    return contents;
};
const deserializeAws_queryConcurrentAccessException = (output, context) => {
    let contents = {
        __type: "ConcurrentAccessException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfirmSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "ConfirmSubscriptionResponse",
        SubscriptionArn: undefined
    };
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    return contents;
};
const deserializeAws_queryCreateEndpointResponse = (output, context) => {
    let contents = {
        __type: "CreateEndpointResponse",
        EndpointArn: undefined
    };
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = output["EndpointArn"];
    }
    return contents;
};
const deserializeAws_queryCreatePlatformApplicationResponse = (output, context) => {
    let contents = {
        __type: "CreatePlatformApplicationResponse",
        PlatformApplicationArn: undefined
    };
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = output["PlatformApplicationArn"];
    }
    return contents;
};
const deserializeAws_queryCreateTopicResponse = (output, context) => {
    let contents = {
        __type: "CreateTopicResponse",
        TopicArn: undefined
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        Attributes: undefined,
        EndpointArn: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_queryMapStringToString(wrappedItem, context);
    }
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = output["EndpointArn"];
    }
    return contents;
};
const deserializeAws_queryEndpointDisabledException = (output, context) => {
    let contents = {
        __type: "EndpointDisabledException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryFilterPolicyLimitExceededException = (output, context) => {
    let contents = {
        __type: "FilterPolicyLimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGetEndpointAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetEndpointAttributesResponse",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_queryMapStringToString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetPlatformApplicationAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetPlatformApplicationAttributesResponse",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_queryMapStringToString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetSMSAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetSMSAttributesResponse",
        attributes: undefined
    };
    if (output.attributes === "") {
        contents.attributes = {};
    }
    if (output["attributes"] !== undefined &&
        output["attributes"]["entry"] !== undefined) {
        const wrappedItem = output["attributes"]["entry"] instanceof Array
            ? output["attributes"]["entry"]
            : [output["attributes"]["entry"]];
        contents.attributes = deserializeAws_queryMapStringToString(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetSubscriptionAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetSubscriptionAttributesResponse",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_querySubscriptionAttributesMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryGetTopicAttributesResponse = (output, context) => {
    let contents = {
        __type: "GetTopicAttributesResponse",
        Attributes: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_queryTopicAttributesMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryInternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSecurityException = (output, context) => {
    let contents = {
        __type: "InvalidSecurityException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSAccessDeniedException = (output, context) => {
    let contents = {
        __type: "KMSAccessDeniedException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSDisabledException = (output, context) => {
    let contents = {
        __type: "KMSDisabledException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSInvalidStateException = (output, context) => {
    let contents = {
        __type: "KMSInvalidStateException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSNotFoundException = (output, context) => {
    let contents = {
        __type: "KMSNotFoundException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSOptInRequired = (output, context) => {
    let contents = {
        __type: "KMSOptInRequired",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSThrottlingException = (output, context) => {
    let contents = {
        __type: "KMSThrottlingException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListEndpointsByPlatformApplicationResponse = (output, context) => {
    let contents = {
        __type: "ListEndpointsByPlatformApplicationResponse",
        Endpoints: undefined,
        NextToken: undefined
    };
    if (output.Endpoints === "") {
        contents.Endpoints = [];
    }
    if (output["Endpoints"] !== undefined &&
        output["Endpoints"]["member"] !== undefined) {
        const wrappedItem = output["Endpoints"]["member"] instanceof Array
            ? output["Endpoints"]["member"]
            : [output["Endpoints"]["member"]];
        contents.Endpoints = deserializeAws_queryListOfEndpoints(wrappedItem, context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListOfEndpoints = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryEndpoint(entry, context));
    });
    return contents;
};
const deserializeAws_queryListOfPlatformApplications = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryPlatformApplication(entry, context));
    });
    return contents;
};
const deserializeAws_queryListPhoneNumbersOptedOutResponse = (output, context) => {
    let contents = {
        __type: "ListPhoneNumbersOptedOutResponse",
        nextToken: undefined,
        phoneNumbers: undefined
    };
    if (output["nextToken"] !== undefined) {
        contents.nextToken = output["nextToken"];
    }
    if (output.phoneNumbers === "") {
        contents.phoneNumbers = [];
    }
    if (output["phoneNumbers"] !== undefined &&
        output["phoneNumbers"]["member"] !== undefined) {
        const wrappedItem = output["phoneNumbers"]["member"] instanceof Array
            ? output["phoneNumbers"]["member"]
            : [output["phoneNumbers"]["member"]];
        contents.phoneNumbers = deserializeAws_queryPhoneNumberList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListPlatformApplicationsResponse = (output, context) => {
    let contents = {
        __type: "ListPlatformApplicationsResponse",
        NextToken: undefined,
        PlatformApplications: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.PlatformApplications === "") {
        contents.PlatformApplications = [];
    }
    if (output["PlatformApplications"] !== undefined &&
        output["PlatformApplications"]["member"] !== undefined) {
        const wrappedItem = output["PlatformApplications"]["member"] instanceof Array
            ? output["PlatformApplications"]["member"]
            : [output["PlatformApplications"]["member"]];
        contents.PlatformApplications = deserializeAws_queryListOfPlatformApplications(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListSubscriptionsByTopicResponse = (output, context) => {
    let contents = {
        __type: "ListSubscriptionsByTopicResponse",
        NextToken: undefined,
        Subscriptions: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    if (output["Subscriptions"] !== undefined &&
        output["Subscriptions"]["member"] !== undefined) {
        const wrappedItem = output["Subscriptions"]["member"] instanceof Array
            ? output["Subscriptions"]["member"]
            : [output["Subscriptions"]["member"]];
        contents.Subscriptions = deserializeAws_querySubscriptionsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListSubscriptionsResponse = (output, context) => {
    let contents = {
        __type: "ListSubscriptionsResponse",
        NextToken: undefined,
        Subscriptions: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    if (output["Subscriptions"] !== undefined &&
        output["Subscriptions"]["member"] !== undefined) {
        const wrappedItem = output["Subscriptions"]["member"] instanceof Array
            ? output["Subscriptions"]["member"]
            : [output["Subscriptions"]["member"]];
        contents.Subscriptions = deserializeAws_querySubscriptionsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        const wrappedItem = output["Tags"]["member"] instanceof Array
            ? output["Tags"]["member"]
            : [output["Tags"]["member"]];
        contents.Tags = deserializeAws_queryTagList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryListTopicsResponse = (output, context) => {
    let contents = {
        __type: "ListTopicsResponse",
        NextToken: undefined,
        Topics: undefined
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.Topics === "") {
        contents.Topics = [];
    }
    if (output["Topics"] !== undefined &&
        output["Topics"]["member"] !== undefined) {
        const wrappedItem = output["Topics"]["member"] instanceof Array
            ? output["Topics"]["member"]
            : [output["Topics"]["member"]];
        contents.Topics = deserializeAws_queryTopicsList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryMapStringToString = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryNotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptInPhoneNumberResponse = (output, context) => {
    let contents = {
        __type: "OptInPhoneNumberResponse"
    };
    return contents;
};
const deserializeAws_queryPhoneNumberList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryPlatformApplication = (output, context) => {
    let contents = {
        __type: "PlatformApplication",
        Attributes: undefined,
        PlatformApplicationArn: undefined
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined &&
        output["Attributes"]["entry"] !== undefined) {
        const wrappedItem = output["Attributes"]["entry"] instanceof Array
            ? output["Attributes"]["entry"]
            : [output["Attributes"]["entry"]];
        contents.Attributes = deserializeAws_queryMapStringToString(wrappedItem, context);
    }
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = output["PlatformApplicationArn"];
    }
    return contents;
};
const deserializeAws_queryPlatformApplicationDisabledException = (output, context) => {
    let contents = {
        __type: "PlatformApplicationDisabledException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPublishResponse = (output, context) => {
    let contents = {
        __type: "PublishResponse",
        MessageId: undefined
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySetSMSAttributesResponse = (output, context) => {
    let contents = {
        __type: "SetSMSAttributesResponse"
    };
    return contents;
};
const deserializeAws_queryStaleTagException = (output, context) => {
    let contents = {
        __type: "StaleTagException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscribeResponse = (output, context) => {
    let contents = {
        __type: "SubscribeResponse",
        SubscriptionArn: undefined
    };
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    return contents;
};
const deserializeAws_querySubscription = (output, context) => {
    let contents = {
        __type: "Subscription",
        Endpoint: undefined,
        Owner: undefined,
        Protocol: undefined,
        SubscriptionArn: undefined,
        TopicArn: undefined
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = output["Owner"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_querySubscriptionAttributesMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_querySubscriptionLimitExceededException = (output, context) => {
    let contents = {
        __type: "SubscriptionLimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySubscription(entry, context));
    });
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagLimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTag(entry, context));
    });
    return contents;
};
const deserializeAws_queryTagPolicyException = (output, context) => {
    let contents = {
        __type: "TagPolicyException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_queryThrottledException = (output, context) => {
    let contents = {
        __type: "ThrottledException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTopic = (output, context) => {
    let contents = {
        __type: "Topic",
        TopicArn: undefined
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryTopicAttributesMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryTopicLimitExceededException = (output, context) => {
    let contents = {
        __type: "TopicLimitExceededException",
        message: undefined
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTopicsList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryTopic(entry, context));
    });
    return contents;
};
const deserializeAws_queryUntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
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