"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateDRTLogBucketCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.AssociateDRTLogBucket";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDRTLogBucketRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDRTLogBucketCommand = serializeAws_json1_1AssociateDRTLogBucketCommand;
async function serializeAws_json1_1AssociateDRTRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.AssociateDRTRole";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDRTRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDRTRoleCommand = serializeAws_json1_1AssociateDRTRoleCommand;
async function serializeAws_json1_1CreateProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.CreateProtection";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProtectionCommand = serializeAws_json1_1CreateProtectionCommand;
async function serializeAws_json1_1CreateSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.CreateSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSubscriptionCommand = serializeAws_json1_1CreateSubscriptionCommand;
async function serializeAws_json1_1DeleteProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DeleteProtection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProtectionCommand = serializeAws_json1_1DeleteProtectionCommand;
async function serializeAws_json1_1DeleteSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DeleteSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSubscriptionCommand = serializeAws_json1_1DeleteSubscriptionCommand;
async function serializeAws_json1_1DescribeAttackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DescribeAttack";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAttackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAttackCommand = serializeAws_json1_1DescribeAttackCommand;
async function serializeAws_json1_1DescribeDRTAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DescribeDRTAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDRTAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDRTAccessCommand = serializeAws_json1_1DescribeDRTAccessCommand;
async function serializeAws_json1_1DescribeEmergencyContactSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShield_20160616.DescribeEmergencyContactSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEmergencyContactSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEmergencyContactSettingsCommand = serializeAws_json1_1DescribeEmergencyContactSettingsCommand;
async function serializeAws_json1_1DescribeProtectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DescribeProtection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProtectionCommand = serializeAws_json1_1DescribeProtectionCommand;
async function serializeAws_json1_1DescribeSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DescribeSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSubscriptionCommand = serializeAws_json1_1DescribeSubscriptionCommand;
async function serializeAws_json1_1DisassociateDRTLogBucketCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DisassociateDRTLogBucket";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDRTLogBucketRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateDRTLogBucketCommand = serializeAws_json1_1DisassociateDRTLogBucketCommand;
async function serializeAws_json1_1DisassociateDRTRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.DisassociateDRTRole";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDRTRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateDRTRoleCommand = serializeAws_json1_1DisassociateDRTRoleCommand;
async function serializeAws_json1_1GetSubscriptionStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.GetSubscriptionState";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSubscriptionStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSubscriptionStateCommand = serializeAws_json1_1GetSubscriptionStateCommand;
async function serializeAws_json1_1ListAttacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.ListAttacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAttacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAttacksCommand = serializeAws_json1_1ListAttacksCommand;
async function serializeAws_json1_1ListProtectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.ListProtections";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProtectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProtectionsCommand = serializeAws_json1_1ListProtectionsCommand;
async function serializeAws_json1_1UpdateEmergencyContactSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.UpdateEmergencyContactSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEmergencyContactSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEmergencyContactSettingsCommand = serializeAws_json1_1UpdateEmergencyContactSettingsCommand;
async function serializeAws_json1_1UpdateSubscriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShield_20160616.UpdateSubscription";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSubscriptionCommand = serializeAws_json1_1UpdateSubscriptionCommand;
async function deserializeAws_json1_1AssociateDRTLogBucketCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDRTLogBucketCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDRTLogBucketResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDRTLogBucketResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDRTLogBucketCommand = deserializeAws_json1_1AssociateDRTLogBucketCommand;
async function deserializeAws_json1_1AssociateDRTLogBucketCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitsExceededException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#LimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAssociatedRoleException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#NoAssociatedRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1AssociateDRTRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDRTRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDRTRoleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDRTRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDRTRoleCommand = deserializeAws_json1_1AssociateDRTRoleCommand;
async function deserializeAws_json1_1AssociateDRTRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProtectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProtectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProtectionCommand = deserializeAws_json1_1CreateProtectionCommand;
async function deserializeAws_json1_1CreateProtectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidResourceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitsExceededException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#LimitsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSubscriptionCommand = deserializeAws_json1_1CreateSubscriptionCommand;
async function deserializeAws_json1_1CreateSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceAlreadyExistsException":
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
async function deserializeAws_json1_1DeleteProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProtectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProtectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProtectionCommand = deserializeAws_json1_1DeleteProtectionCommand;
async function deserializeAws_json1_1DeleteProtectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSubscriptionCommand = deserializeAws_json1_1DeleteSubscriptionCommand;
async function deserializeAws_json1_1DeleteSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LockedSubscriptionException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#LockedSubscriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeAttackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAttackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAttackResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAttackResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAttackCommand = deserializeAws_json1_1DescribeAttackCommand;
async function deserializeAws_json1_1DescribeAttackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDRTAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDRTAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDRTAccessResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDRTAccessResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDRTAccessCommand = deserializeAws_json1_1DescribeDRTAccessCommand;
async function deserializeAws_json1_1DescribeDRTAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeEmergencyContactSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEmergencyContactSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEmergencyContactSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = deserializeAws_json1_1DescribeEmergencyContactSettingsCommand;
async function deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeProtectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProtectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProtectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProtectionCommand = deserializeAws_json1_1DescribeProtectionCommand;
async function deserializeAws_json1_1DescribeProtectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSubscriptionCommand = deserializeAws_json1_1DescribeSubscriptionCommand;
async function deserializeAws_json1_1DescribeSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisassociateDRTLogBucketCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateDRTLogBucketCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDRTLogBucketResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateDRTLogBucketResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateDRTLogBucketCommand = deserializeAws_json1_1DisassociateDRTLogBucketCommand;
async function deserializeAws_json1_1DisassociateDRTLogBucketCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoAssociatedRoleException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#NoAssociatedRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisassociateDRTRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateDRTRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDRTRoleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateDRTRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateDRTRoleCommand = deserializeAws_json1_1DisassociateDRTRoleCommand;
async function deserializeAws_json1_1DisassociateDRTRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetSubscriptionStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSubscriptionStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSubscriptionStateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSubscriptionStateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSubscriptionStateCommand = deserializeAws_json1_1GetSubscriptionStateCommand;
async function deserializeAws_json1_1GetSubscriptionStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAttacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAttacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAttacksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAttacksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAttacksCommand = deserializeAws_json1_1ListAttacksCommand;
async function deserializeAws_json1_1ListAttacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListProtectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProtectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProtectionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProtectionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProtectionsCommand = deserializeAws_json1_1ListProtectionsCommand;
async function deserializeAws_json1_1ListProtectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateEmergencyContactSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEmergencyContactSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEmergencyContactSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = deserializeAws_json1_1UpdateEmergencyContactSettingsCommand;
async function deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateSubscriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSubscriptionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSubscriptionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSubscriptionCommand = deserializeAws_json1_1UpdateSubscriptionCommand;
async function deserializeAws_json1_1UpdateSubscriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LockedSubscriptionException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#LockedSubscriptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OptimisticLockException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
    const contents = Object.assign({ name: "AccessDeniedForDependencyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
    const contents = Object.assign({ name: "InvalidPaginationTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceException(body, context);
    const contents = Object.assign({ name: "InvalidResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitsExceededException(body, context);
    const contents = Object.assign({ name: "LimitsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LockedSubscriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LockedSubscriptionException(body, context);
    const contents = Object.assign({ name: "LockedSubscriptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoAssociatedRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAssociatedRoleException(body, context);
    const contents = Object.assign({ name: "NoAssociatedRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OptimisticLockExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OptimisticLockException(body, context);
    const contents = Object.assign({ name: "OptimisticLockException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_json1_1AssociateDRTLogBucketRequest = (input, context) => {
    const bodyParams = {};
    if (input.LogBucket !== undefined) {
        bodyParams["LogBucket"] = input.LogBucket;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateDRTRoleRequest = (input, context) => {
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProtectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DeleteProtectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProtectionId !== undefined) {
        bodyParams["ProtectionId"] = input.ProtectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeAttackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttackId !== undefined) {
        bodyParams["AttackId"] = input.AttackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDRTAccessRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeEmergencyContactSettingsRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeProtectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProtectionId !== undefined) {
        bodyParams["ProtectionId"] = input.ProtectionId;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DisassociateDRTLogBucketRequest = (input, context) => {
    const bodyParams = {};
    if (input.LogBucket !== undefined) {
        bodyParams["LogBucket"] = input.LogBucket;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateDRTRoleRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1EmergencyContact = (input, context) => {
    const bodyParams = {};
    if (input.EmailAddress !== undefined) {
        bodyParams["EmailAddress"] = input.EmailAddress;
    }
    return bodyParams;
};
const serializeAws_json1_1EmergencyContactList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EmergencyContact(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetSubscriptionStateRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ListAttacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = serializeAws_json1_1TimeRange(input.EndTime, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArns !== undefined) {
        bodyParams["ResourceArns"] = serializeAws_json1_1ResourceArnFilterList(input.ResourceArns, context);
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = serializeAws_json1_1TimeRange(input.StartTime, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListProtectionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceArnFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TimeRange = (input, context) => {
    const bodyParams = {};
    if (input.FromInclusive !== undefined) {
        bodyParams["FromInclusive"] = Math.round(input.FromInclusive.getTime() / 1000);
    }
    if (input.ToExclusive !== undefined) {
        bodyParams["ToExclusive"] = Math.round(input.ToExclusive.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEmergencyContactSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EmergencyContactList !== undefined) {
        bodyParams["EmergencyContactList"] = serializeAws_json1_1EmergencyContactList(input.EmergencyContactList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSubscriptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoRenew !== undefined) {
        bodyParams["AutoRenew"] = input.AutoRenew;
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedForDependencyException = (output, context) => {
    let contents = {
        __type: "AccessDeniedForDependencyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AssociateDRTLogBucketResponse = (output, context) => {
    let contents = {
        __type: "AssociateDRTLogBucketResponse"
    };
    return contents;
};
const deserializeAws_json1_1AssociateDRTRoleResponse = (output, context) => {
    let contents = {
        __type: "AssociateDRTRoleResponse"
    };
    return contents;
};
const deserializeAws_json1_1AttackDetail = (output, context) => {
    let contents = {
        __type: "AttackDetail",
        AttackCounters: undefined,
        AttackId: undefined,
        AttackProperties: undefined,
        EndTime: undefined,
        Mitigations: undefined,
        ResourceArn: undefined,
        StartTime: undefined,
        SubResources: undefined
    };
    if (output.AttackCounters !== undefined && output.AttackCounters !== null) {
        contents.AttackCounters = deserializeAws_json1_1SummarizedCounterList(output.AttackCounters, context);
    }
    if (output.AttackId !== undefined && output.AttackId !== null) {
        contents.AttackId = output.AttackId;
    }
    if (output.AttackProperties !== undefined &&
        output.AttackProperties !== null) {
        contents.AttackProperties = deserializeAws_json1_1AttackProperties(output.AttackProperties, context);
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.Mitigations !== undefined && output.Mitigations !== null) {
        contents.Mitigations = deserializeAws_json1_1MitigationList(output.Mitigations, context);
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.SubResources !== undefined && output.SubResources !== null) {
        contents.SubResources = deserializeAws_json1_1SubResourceSummaryList(output.SubResources, context);
    }
    return contents;
};
const deserializeAws_json1_1AttackProperties = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttackProperty(entry, context));
};
const deserializeAws_json1_1AttackProperty = (output, context) => {
    let contents = {
        __type: "AttackProperty",
        AttackLayer: undefined,
        AttackPropertyIdentifier: undefined,
        TopContributors: undefined,
        Total: undefined,
        Unit: undefined
    };
    if (output.AttackLayer !== undefined && output.AttackLayer !== null) {
        contents.AttackLayer = output.AttackLayer;
    }
    if (output.AttackPropertyIdentifier !== undefined &&
        output.AttackPropertyIdentifier !== null) {
        contents.AttackPropertyIdentifier = output.AttackPropertyIdentifier;
    }
    if (output.TopContributors !== undefined && output.TopContributors !== null) {
        contents.TopContributors = deserializeAws_json1_1TopContributors(output.TopContributors, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = output.Total;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1AttackSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttackSummary(entry, context));
};
const deserializeAws_json1_1AttackSummary = (output, context) => {
    let contents = {
        __type: "AttackSummary",
        AttackId: undefined,
        AttackVectors: undefined,
        EndTime: undefined,
        ResourceArn: undefined,
        StartTime: undefined
    };
    if (output.AttackId !== undefined && output.AttackId !== null) {
        contents.AttackId = output.AttackId;
    }
    if (output.AttackVectors !== undefined && output.AttackVectors !== null) {
        contents.AttackVectors = deserializeAws_json1_1AttackVectorDescriptionList(output.AttackVectors, context);
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AttackVectorDescription = (output, context) => {
    let contents = {
        __type: "AttackVectorDescription",
        VectorType: undefined
    };
    if (output.VectorType !== undefined && output.VectorType !== null) {
        contents.VectorType = output.VectorType;
    }
    return contents;
};
const deserializeAws_json1_1AttackVectorDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttackVectorDescription(entry, context));
};
const deserializeAws_json1_1Contributor = (output, context) => {
    let contents = {
        __type: "Contributor",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1CreateProtectionResponse = (output, context) => {
    let contents = {
        __type: "CreateProtectionResponse",
        ProtectionId: undefined
    };
    if (output.ProtectionId !== undefined && output.ProtectionId !== null) {
        contents.ProtectionId = output.ProtectionId;
    }
    return contents;
};
const deserializeAws_json1_1CreateSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "CreateSubscriptionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteProtectionResponse = (output, context) => {
    let contents = {
        __type: "DeleteProtectionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "DeleteSubscriptionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAttackResponse = (output, context) => {
    let contents = {
        __type: "DescribeAttackResponse",
        Attack: undefined
    };
    if (output.Attack !== undefined && output.Attack !== null) {
        contents.Attack = deserializeAws_json1_1AttackDetail(output.Attack, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDRTAccessResponse = (output, context) => {
    let contents = {
        __type: "DescribeDRTAccessResponse",
        LogBucketList: undefined,
        RoleArn: undefined
    };
    if (output.LogBucketList !== undefined && output.LogBucketList !== null) {
        contents.LogBucketList = deserializeAws_json1_1LogBucketList(output.LogBucketList, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeEmergencyContactSettingsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEmergencyContactSettingsResponse",
        EmergencyContactList: undefined
    };
    if (output.EmergencyContactList !== undefined &&
        output.EmergencyContactList !== null) {
        contents.EmergencyContactList = deserializeAws_json1_1EmergencyContactList(output.EmergencyContactList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProtectionResponse = (output, context) => {
    let contents = {
        __type: "DescribeProtectionResponse",
        Protection: undefined
    };
    if (output.Protection !== undefined && output.Protection !== null) {
        contents.Protection = deserializeAws_json1_1Protection(output.Protection, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "DescribeSubscriptionResponse",
        Subscription: undefined
    };
    if (output.Subscription !== undefined && output.Subscription !== null) {
        contents.Subscription = deserializeAws_json1_1Subscription(output.Subscription, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateDRTLogBucketResponse = (output, context) => {
    let contents = {
        __type: "DisassociateDRTLogBucketResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateDRTRoleResponse = (output, context) => {
    let contents = {
        __type: "DisassociateDRTRoleResponse"
    };
    return contents;
};
const deserializeAws_json1_1EmergencyContact = (output, context) => {
    let contents = {
        __type: "EmergencyContact",
        EmailAddress: undefined
    };
    if (output.EmailAddress !== undefined && output.EmailAddress !== null) {
        contents.EmailAddress = output.EmailAddress;
    }
    return contents;
};
const deserializeAws_json1_1EmergencyContactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EmergencyContact(entry, context));
};
const deserializeAws_json1_1GetSubscriptionStateResponse = (output, context) => {
    let contents = {
        __type: "GetSubscriptionStateResponse",
        SubscriptionState: undefined
    };
    if (output.SubscriptionState !== undefined &&
        output.SubscriptionState !== null) {
        contents.SubscriptionState = output.SubscriptionState;
    }
    return contents;
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenException = (output, context) => {
    let contents = {
        __type: "InvalidPaginationTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceException = (output, context) => {
    let contents = {
        __type: "InvalidResourceException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Limit = (output, context) => {
    let contents = {
        __type: "Limit",
        Max: undefined,
        Type: undefined
    };
    if (output.Max !== undefined && output.Max !== null) {
        contents.Max = output.Max;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Limits = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Limit(entry, context));
};
const deserializeAws_json1_1LimitsExceededException = (output, context) => {
    let contents = {
        __type: "LimitsExceededException",
        Limit: undefined,
        Type: undefined,
        message: undefined
    };
    if (output.Limit !== undefined && output.Limit !== null) {
        contents.Limit = output.Limit;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListAttacksResponse = (output, context) => {
    let contents = {
        __type: "ListAttacksResponse",
        AttackSummaries: undefined,
        NextToken: undefined
    };
    if (output.AttackSummaries !== undefined && output.AttackSummaries !== null) {
        contents.AttackSummaries = deserializeAws_json1_1AttackSummaries(output.AttackSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListProtectionsResponse = (output, context) => {
    let contents = {
        __type: "ListProtectionsResponse",
        NextToken: undefined,
        Protections: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Protections !== undefined && output.Protections !== null) {
        contents.Protections = deserializeAws_json1_1Protections(output.Protections, context);
    }
    return contents;
};
const deserializeAws_json1_1LockedSubscriptionException = (output, context) => {
    let contents = {
        __type: "LockedSubscriptionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LogBucketList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Mitigation = (output, context) => {
    let contents = {
        __type: "Mitigation",
        MitigationName: undefined
    };
    if (output.MitigationName !== undefined && output.MitigationName !== null) {
        contents.MitigationName = output.MitigationName;
    }
    return contents;
};
const deserializeAws_json1_1MitigationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Mitigation(entry, context));
};
const deserializeAws_json1_1NoAssociatedRoleException = (output, context) => {
    let contents = {
        __type: "NoAssociatedRoleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OptimisticLockException = (output, context) => {
    let contents = {
        __type: "OptimisticLockException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Protection = (output, context) => {
    let contents = {
        __type: "Protection",
        Id: undefined,
        Name: undefined,
        ResourceArn: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    return contents;
};
const deserializeAws_json1_1Protections = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Protection(entry, context));
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
const deserializeAws_json1_1SubResourceSummary = (output, context) => {
    let contents = {
        __type: "SubResourceSummary",
        AttackVectors: undefined,
        Counters: undefined,
        Id: undefined,
        Type: undefined
    };
    if (output.AttackVectors !== undefined && output.AttackVectors !== null) {
        contents.AttackVectors = deserializeAws_json1_1SummarizedAttackVectorList(output.AttackVectors, context);
    }
    if (output.Counters !== undefined && output.Counters !== null) {
        contents.Counters = deserializeAws_json1_1SummarizedCounterList(output.Counters, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1SubResourceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SubResourceSummary(entry, context));
};
const deserializeAws_json1_1Subscription = (output, context) => {
    let contents = {
        __type: "Subscription",
        AutoRenew: undefined,
        EndTime: undefined,
        Limits: undefined,
        StartTime: undefined,
        TimeCommitmentInSeconds: undefined
    };
    if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
        contents.AutoRenew = output.AutoRenew;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.Limits !== undefined && output.Limits !== null) {
        contents.Limits = deserializeAws_json1_1Limits(output.Limits, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.TimeCommitmentInSeconds !== undefined &&
        output.TimeCommitmentInSeconds !== null) {
        contents.TimeCommitmentInSeconds = output.TimeCommitmentInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1SummarizedAttackVector = (output, context) => {
    let contents = {
        __type: "SummarizedAttackVector",
        VectorCounters: undefined,
        VectorType: undefined
    };
    if (output.VectorCounters !== undefined && output.VectorCounters !== null) {
        contents.VectorCounters = deserializeAws_json1_1SummarizedCounterList(output.VectorCounters, context);
    }
    if (output.VectorType !== undefined && output.VectorType !== null) {
        contents.VectorType = output.VectorType;
    }
    return contents;
};
const deserializeAws_json1_1SummarizedAttackVectorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SummarizedAttackVector(entry, context));
};
const deserializeAws_json1_1SummarizedCounter = (output, context) => {
    let contents = {
        __type: "SummarizedCounter",
        Average: undefined,
        Max: undefined,
        N: undefined,
        Name: undefined,
        Sum: undefined,
        Unit: undefined
    };
    if (output.Average !== undefined && output.Average !== null) {
        contents.Average = output.Average;
    }
    if (output.Max !== undefined && output.Max !== null) {
        contents.Max = output.Max;
    }
    if (output.N !== undefined && output.N !== null) {
        contents.N = output.N;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Sum !== undefined && output.Sum !== null) {
        contents.Sum = output.Sum;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1SummarizedCounterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SummarizedCounter(entry, context));
};
const deserializeAws_json1_1TopContributors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Contributor(entry, context));
};
const deserializeAws_json1_1UpdateEmergencyContactSettingsResponse = (output, context) => {
    let contents = {
        __type: "UpdateEmergencyContactSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateSubscriptionResponse = (output, context) => {
    let contents = {
        __type: "UpdateSubscriptionResponse"
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