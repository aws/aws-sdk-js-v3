"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1DeleteScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DeleteScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteScalingPolicyCommand = serializeAws_json1_1DeleteScalingPolicyCommand;
async function serializeAws_json1_1DeleteScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DeleteScheduledAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScheduledActionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteScheduledActionCommand = serializeAws_json1_1DeleteScheduledActionCommand;
async function serializeAws_json1_1DeregisterScalableTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DeregisterScalableTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterScalableTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterScalableTargetCommand = serializeAws_json1_1DeregisterScalableTargetCommand;
async function serializeAws_json1_1DescribeScalableTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalableTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScalableTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScalableTargetsCommand = serializeAws_json1_1DescribeScalableTargetsCommand;
async function serializeAws_json1_1DescribeScalingActivitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalingActivities";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScalingActivitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScalingActivitiesCommand = serializeAws_json1_1DescribeScalingActivitiesCommand;
async function serializeAws_json1_1DescribeScalingPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalingPolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScalingPoliciesCommand = serializeAws_json1_1DescribeScalingPoliciesCommand;
async function serializeAws_json1_1DescribeScheduledActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScheduledActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScheduledActionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScheduledActionsCommand = serializeAws_json1_1DescribeScheduledActionsCommand;
async function serializeAws_json1_1PutScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.PutScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutScalingPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutScalingPolicyCommand = serializeAws_json1_1PutScalingPolicyCommand;
async function serializeAws_json1_1PutScheduledActionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.PutScheduledAction";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutScheduledActionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutScheduledActionCommand = serializeAws_json1_1PutScheduledActionCommand;
async function serializeAws_json1_1RegisterScalableTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AnyScaleFrontendService.RegisterScalableTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterScalableTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterScalableTargetCommand = serializeAws_json1_1RegisterScalableTargetCommand;
async function deserializeAws_json1_1DeleteScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteScalingPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteScalingPolicyCommand = deserializeAws_json1_1DeleteScalingPolicyCommand;
async function deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteScheduledActionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteScheduledActionCommand = deserializeAws_json1_1DeleteScheduledActionCommand;
async function deserializeAws_json1_1DeleteScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeregisterScalableTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterScalableTargetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterScalableTargetCommand = deserializeAws_json1_1DeregisterScalableTargetCommand;
async function deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeScalableTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScalableTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScalableTargetsCommand = deserializeAws_json1_1DescribeScalableTargetsCommand;
async function deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeScalingActivitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScalingActivitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScalingActivitiesCommand = deserializeAws_json1_1DescribeScalingActivitiesCommand;
async function deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScalingPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScalingPoliciesCommand = deserializeAws_json1_1DescribeScalingPoliciesCommand;
async function deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FailedResourceAccessException":
        case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeScheduledActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScheduledActionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScheduledActionsCommand = deserializeAws_json1_1DescribeScheduledActionsCommand;
async function deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutScalingPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutScalingPolicyCommand = deserializeAws_json1_1PutScalingPolicyCommand;
async function deserializeAws_json1_1PutScalingPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FailedResourceAccessException":
        case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutScheduledActionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutScheduledActionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutScheduledActionCommand = deserializeAws_json1_1PutScheduledActionCommand;
async function deserializeAws_json1_1PutScheduledActionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ObjectNotFoundException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RegisterScalableTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterScalableTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterScalableTargetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterScalableTargetCommand = deserializeAws_json1_1RegisterScalableTargetCommand;
async function deserializeAws_json1_1RegisterScalableTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentUpdateException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentUpdateException(body, context);
    const contents = Object.assign({ name: "ConcurrentUpdateException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FailedResourceAccessException(body, context);
    const contents = Object.assign({ name: "FailedResourceAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ObjectNotFoundException(body, context);
    const contents = Object.assign({ name: "ObjectNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CustomizedMetricSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Dimensions !== undefined) {
        bodyParams["Dimensions"] = serializeAws_json1_1MetricDimensions(input.Dimensions, context);
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Namespace !== undefined) {
        bodyParams["Namespace"] = input.Namespace;
    }
    if (input.Statistic !== undefined) {
        bodyParams["Statistic"] = input.Statistic;
    }
    if (input.Unit !== undefined) {
        bodyParams["Unit"] = input.Unit;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteScalingPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteScheduledActionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ScheduledActionName !== undefined) {
        bodyParams["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterScalableTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScalableTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceIds !== undefined) {
        bodyParams["ResourceIds"] = serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context);
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScalingActivitiesRequest = (input, context) => {
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
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScalingPoliciesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PolicyNames !== undefined) {
        bodyParams["PolicyNames"] = serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context);
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScheduledActionsRequest = (input, context) => {
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
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ScheduledActionNames !== undefined) {
        bodyParams["ScheduledActionNames"] = serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context);
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricDimension = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricDimensions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MetricDimension(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PredefinedMetricSpecification = (input, context) => {
    const bodyParams = {};
    if (input.PredefinedMetricType !== undefined) {
        bodyParams["PredefinedMetricType"] = input.PredefinedMetricType;
    }
    if (input.ResourceLabel !== undefined) {
        bodyParams["ResourceLabel"] = input.ResourceLabel;
    }
    return bodyParams;
};
const serializeAws_json1_1PutScalingPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyType !== undefined) {
        bodyParams["PolicyType"] = input.PolicyType;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    if (input.StepScalingPolicyConfiguration !== undefined) {
        bodyParams["StepScalingPolicyConfiguration"] = serializeAws_json1_1StepScalingPolicyConfiguration(input.StepScalingPolicyConfiguration, context);
    }
    if (input.TargetTrackingScalingPolicyConfiguration !== undefined) {
        bodyParams["TargetTrackingScalingPolicyConfiguration"] = serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(input.TargetTrackingScalingPolicyConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutScheduledActionRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ScalableTargetAction !== undefined) {
        bodyParams["ScalableTargetAction"] = serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context);
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.ScheduledActionName !== undefined) {
        bodyParams["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterScalableTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MinCapacity !== undefined) {
        bodyParams["MinCapacity"] = input.MinCapacity;
    }
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    if (input.ScalableDimension !== undefined) {
        bodyParams["ScalableDimension"] = input.ScalableDimension;
    }
    if (input.ServiceNamespace !== undefined) {
        bodyParams["ServiceNamespace"] = input.ServiceNamespace;
    }
    if (input.SuspendedState !== undefined) {
        bodyParams["SuspendedState"] = serializeAws_json1_1SuspendedState(input.SuspendedState, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceIdsMaxLen1600 = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ScalableTargetAction = (input, context) => {
    const bodyParams = {};
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MinCapacity !== undefined) {
        bodyParams["MinCapacity"] = input.MinCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1StepAdjustment = (input, context) => {
    const bodyParams = {};
    if (input.MetricIntervalLowerBound !== undefined) {
        bodyParams["MetricIntervalLowerBound"] = input.MetricIntervalLowerBound;
    }
    if (input.MetricIntervalUpperBound !== undefined) {
        bodyParams["MetricIntervalUpperBound"] = input.MetricIntervalUpperBound;
    }
    if (input.ScalingAdjustment !== undefined) {
        bodyParams["ScalingAdjustment"] = input.ScalingAdjustment;
    }
    return bodyParams;
};
const serializeAws_json1_1StepAdjustments = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StepAdjustment(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StepScalingPolicyConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AdjustmentType !== undefined) {
        bodyParams["AdjustmentType"] = input.AdjustmentType;
    }
    if (input.Cooldown !== undefined) {
        bodyParams["Cooldown"] = input.Cooldown;
    }
    if (input.MetricAggregationType !== undefined) {
        bodyParams["MetricAggregationType"] = input.MetricAggregationType;
    }
    if (input.MinAdjustmentMagnitude !== undefined) {
        bodyParams["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
    }
    if (input.StepAdjustments !== undefined) {
        bodyParams["StepAdjustments"] = serializeAws_json1_1StepAdjustments(input.StepAdjustments, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SuspendedState = (input, context) => {
    const bodyParams = {};
    if (input.DynamicScalingInSuspended !== undefined) {
        bodyParams["DynamicScalingInSuspended"] = input.DynamicScalingInSuspended;
    }
    if (input.DynamicScalingOutSuspended !== undefined) {
        bodyParams["DynamicScalingOutSuspended"] = input.DynamicScalingOutSuspended;
    }
    if (input.ScheduledScalingSuspended !== undefined) {
        bodyParams["ScheduledScalingSuspended"] = input.ScheduledScalingSuspended;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CustomizedMetricSpecification !== undefined) {
        bodyParams["CustomizedMetricSpecification"] = serializeAws_json1_1CustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
    }
    if (input.DisableScaleIn !== undefined) {
        bodyParams["DisableScaleIn"] = input.DisableScaleIn;
    }
    if (input.PredefinedMetricSpecification !== undefined) {
        bodyParams["PredefinedMetricSpecification"] = serializeAws_json1_1PredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
    }
    if (input.ScaleInCooldown !== undefined) {
        bodyParams["ScaleInCooldown"] = input.ScaleInCooldown;
    }
    if (input.ScaleOutCooldown !== undefined) {
        bodyParams["ScaleOutCooldown"] = input.ScaleOutCooldown;
    }
    if (input.TargetValue !== undefined) {
        bodyParams["TargetValue"] = input.TargetValue;
    }
    return bodyParams;
};
const deserializeAws_json1_1Alarm = (output, context) => {
    let contents = {
        __type: "Alarm",
        AlarmARN: undefined,
        AlarmName: undefined
    };
    if (output.AlarmARN !== undefined && output.AlarmARN !== null) {
        contents.AlarmARN = output.AlarmARN;
    }
    if (output.AlarmName !== undefined && output.AlarmName !== null) {
        contents.AlarmName = output.AlarmName;
    }
    return contents;
};
const deserializeAws_json1_1Alarms = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Alarm(entry, context));
};
const deserializeAws_json1_1ConcurrentUpdateException = (output, context) => {
    let contents = {
        __type: "ConcurrentUpdateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CustomizedMetricSpecification = (output, context) => {
    let contents = {
        __type: "CustomizedMetricSpecification",
        Dimensions: undefined,
        MetricName: undefined,
        Namespace: undefined,
        Statistic: undefined,
        Unit: undefined
    };
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1MetricDimensions(output.Dimensions, context);
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Namespace !== undefined && output.Namespace !== null) {
        contents.Namespace = output.Namespace;
    }
    if (output.Statistic !== undefined && output.Statistic !== null) {
        contents.Statistic = output.Statistic;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1DeleteScalingPolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteScalingPolicyResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteScheduledActionResponse = (output, context) => {
    let contents = {
        __type: "DeleteScheduledActionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterScalableTargetResponse = (output, context) => {
    let contents = {
        __type: "DeregisterScalableTargetResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeScalableTargetsResponse = (output, context) => {
    let contents = {
        __type: "DescribeScalableTargetsResponse",
        NextToken: undefined,
        ScalableTargets: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScalableTargets !== undefined && output.ScalableTargets !== null) {
        contents.ScalableTargets = deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeScalingActivitiesResponse = (output, context) => {
    let contents = {
        __type: "DescribeScalingActivitiesResponse",
        NextToken: undefined,
        ScalingActivities: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScalingActivities !== undefined &&
        output.ScalingActivities !== null) {
        contents.ScalingActivities = deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeScalingPoliciesResponse = (output, context) => {
    let contents = {
        __type: "DescribeScalingPoliciesResponse",
        NextToken: undefined,
        ScalingPolicies: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScalingPolicies !== undefined && output.ScalingPolicies !== null) {
        contents.ScalingPolicies = deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeScheduledActionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeScheduledActionsResponse",
        NextToken: undefined,
        ScheduledActions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScheduledActions !== undefined &&
        output.ScheduledActions !== null) {
        contents.ScheduledActions = deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context);
    }
    return contents;
};
const deserializeAws_json1_1FailedResourceAccessException = (output, context) => {
    let contents = {
        __type: "FailedResourceAccessException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1MetricDimension = (output, context) => {
    let contents = {
        __type: "MetricDimension",
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
const deserializeAws_json1_1MetricDimensions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricDimension(entry, context));
};
const deserializeAws_json1_1ObjectNotFoundException = (output, context) => {
    let contents = {
        __type: "ObjectNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PredefinedMetricSpecification = (output, context) => {
    let contents = {
        __type: "PredefinedMetricSpecification",
        PredefinedMetricType: undefined,
        ResourceLabel: undefined
    };
    if (output.PredefinedMetricType !== undefined &&
        output.PredefinedMetricType !== null) {
        contents.PredefinedMetricType = output.PredefinedMetricType;
    }
    if (output.ResourceLabel !== undefined && output.ResourceLabel !== null) {
        contents.ResourceLabel = output.ResourceLabel;
    }
    return contents;
};
const deserializeAws_json1_1PutScalingPolicyResponse = (output, context) => {
    let contents = {
        __type: "PutScalingPolicyResponse",
        Alarms: undefined,
        PolicyARN: undefined
    };
    if (output.Alarms !== undefined && output.Alarms !== null) {
        contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
    }
    if (output.PolicyARN !== undefined && output.PolicyARN !== null) {
        contents.PolicyARN = output.PolicyARN;
    }
    return contents;
};
const deserializeAws_json1_1PutScheduledActionResponse = (output, context) => {
    let contents = {
        __type: "PutScheduledActionResponse"
    };
    return contents;
};
const deserializeAws_json1_1RegisterScalableTargetResponse = (output, context) => {
    let contents = {
        __type: "RegisterScalableTargetResponse"
    };
    return contents;
};
const deserializeAws_json1_1ScalableTarget = (output, context) => {
    let contents = {
        __type: "ScalableTarget",
        CreationTime: undefined,
        MaxCapacity: undefined,
        MinCapacity: undefined,
        ResourceId: undefined,
        RoleARN: undefined,
        ScalableDimension: undefined,
        ServiceNamespace: undefined,
        SuspendedState: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
        contents.MinCapacity = output.MinCapacity;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.ScalableDimension !== undefined &&
        output.ScalableDimension !== null) {
        contents.ScalableDimension = output.ScalableDimension;
    }
    if (output.ServiceNamespace !== undefined &&
        output.ServiceNamespace !== null) {
        contents.ServiceNamespace = output.ServiceNamespace;
    }
    if (output.SuspendedState !== undefined && output.SuspendedState !== null) {
        contents.SuspendedState = deserializeAws_json1_1SuspendedState(output.SuspendedState, context);
    }
    return contents;
};
const deserializeAws_json1_1ScalableTargetAction = (output, context) => {
    let contents = {
        __type: "ScalableTargetAction",
        MaxCapacity: undefined,
        MinCapacity: undefined
    };
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
        contents.MinCapacity = output.MinCapacity;
    }
    return contents;
};
const deserializeAws_json1_1ScalableTargets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScalableTarget(entry, context));
};
const deserializeAws_json1_1ScalingActivities = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScalingActivity(entry, context));
};
const deserializeAws_json1_1ScalingActivity = (output, context) => {
    let contents = {
        __type: "ScalingActivity",
        ActivityId: undefined,
        Cause: undefined,
        Description: undefined,
        Details: undefined,
        EndTime: undefined,
        ResourceId: undefined,
        ScalableDimension: undefined,
        ServiceNamespace: undefined,
        StartTime: undefined,
        StatusCode: undefined,
        StatusMessage: undefined
    };
    if (output.ActivityId !== undefined && output.ActivityId !== null) {
        contents.ActivityId = output.ActivityId;
    }
    if (output.Cause !== undefined && output.Cause !== null) {
        contents.Cause = output.Cause;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Details !== undefined && output.Details !== null) {
        contents.Details = output.Details;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ScalableDimension !== undefined &&
        output.ScalableDimension !== null) {
        contents.ScalableDimension = output.ScalableDimension;
    }
    if (output.ServiceNamespace !== undefined &&
        output.ServiceNamespace !== null) {
        contents.ServiceNamespace = output.ServiceNamespace;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.StatusCode !== undefined && output.StatusCode !== null) {
        contents.StatusCode = output.StatusCode;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    return contents;
};
const deserializeAws_json1_1ScalingPolicies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScalingPolicy(entry, context));
};
const deserializeAws_json1_1ScalingPolicy = (output, context) => {
    let contents = {
        __type: "ScalingPolicy",
        Alarms: undefined,
        CreationTime: undefined,
        PolicyARN: undefined,
        PolicyName: undefined,
        PolicyType: undefined,
        ResourceId: undefined,
        ScalableDimension: undefined,
        ServiceNamespace: undefined,
        StepScalingPolicyConfiguration: undefined,
        TargetTrackingScalingPolicyConfiguration: undefined
    };
    if (output.Alarms !== undefined && output.Alarms !== null) {
        contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.PolicyARN !== undefined && output.PolicyARN !== null) {
        contents.PolicyARN = output.PolicyARN;
    }
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    if (output.PolicyType !== undefined && output.PolicyType !== null) {
        contents.PolicyType = output.PolicyType;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ScalableDimension !== undefined &&
        output.ScalableDimension !== null) {
        contents.ScalableDimension = output.ScalableDimension;
    }
    if (output.ServiceNamespace !== undefined &&
        output.ServiceNamespace !== null) {
        contents.ServiceNamespace = output.ServiceNamespace;
    }
    if (output.StepScalingPolicyConfiguration !== undefined &&
        output.StepScalingPolicyConfiguration !== null) {
        contents.StepScalingPolicyConfiguration = deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context);
    }
    if (output.TargetTrackingScalingPolicyConfiguration !== undefined &&
        output.TargetTrackingScalingPolicyConfiguration !== null) {
        contents.TargetTrackingScalingPolicyConfiguration = deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(output.TargetTrackingScalingPolicyConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1ScheduledAction = (output, context) => {
    let contents = {
        __type: "ScheduledAction",
        CreationTime: undefined,
        EndTime: undefined,
        ResourceId: undefined,
        ScalableDimension: undefined,
        ScalableTargetAction: undefined,
        Schedule: undefined,
        ScheduledActionARN: undefined,
        ScheduledActionName: undefined,
        ServiceNamespace: undefined,
        StartTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ScalableDimension !== undefined &&
        output.ScalableDimension !== null) {
        contents.ScalableDimension = output.ScalableDimension;
    }
    if (output.ScalableTargetAction !== undefined &&
        output.ScalableTargetAction !== null) {
        contents.ScalableTargetAction = deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context);
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.ScheduledActionARN !== undefined &&
        output.ScheduledActionARN !== null) {
        contents.ScheduledActionARN = output.ScheduledActionARN;
    }
    if (output.ScheduledActionName !== undefined &&
        output.ScheduledActionName !== null) {
        contents.ScheduledActionName = output.ScheduledActionName;
    }
    if (output.ServiceNamespace !== undefined &&
        output.ServiceNamespace !== null) {
        contents.ServiceNamespace = output.ServiceNamespace;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ScheduledActions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScheduledAction(entry, context));
};
const deserializeAws_json1_1StepAdjustment = (output, context) => {
    let contents = {
        __type: "StepAdjustment",
        MetricIntervalLowerBound: undefined,
        MetricIntervalUpperBound: undefined,
        ScalingAdjustment: undefined
    };
    if (output.MetricIntervalLowerBound !== undefined &&
        output.MetricIntervalLowerBound !== null) {
        contents.MetricIntervalLowerBound = output.MetricIntervalLowerBound;
    }
    if (output.MetricIntervalUpperBound !== undefined &&
        output.MetricIntervalUpperBound !== null) {
        contents.MetricIntervalUpperBound = output.MetricIntervalUpperBound;
    }
    if (output.ScalingAdjustment !== undefined &&
        output.ScalingAdjustment !== null) {
        contents.ScalingAdjustment = output.ScalingAdjustment;
    }
    return contents;
};
const deserializeAws_json1_1StepAdjustments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StepAdjustment(entry, context));
};
const deserializeAws_json1_1StepScalingPolicyConfiguration = (output, context) => {
    let contents = {
        __type: "StepScalingPolicyConfiguration",
        AdjustmentType: undefined,
        Cooldown: undefined,
        MetricAggregationType: undefined,
        MinAdjustmentMagnitude: undefined,
        StepAdjustments: undefined
    };
    if (output.AdjustmentType !== undefined && output.AdjustmentType !== null) {
        contents.AdjustmentType = output.AdjustmentType;
    }
    if (output.Cooldown !== undefined && output.Cooldown !== null) {
        contents.Cooldown = output.Cooldown;
    }
    if (output.MetricAggregationType !== undefined &&
        output.MetricAggregationType !== null) {
        contents.MetricAggregationType = output.MetricAggregationType;
    }
    if (output.MinAdjustmentMagnitude !== undefined &&
        output.MinAdjustmentMagnitude !== null) {
        contents.MinAdjustmentMagnitude = output.MinAdjustmentMagnitude;
    }
    if (output.StepAdjustments !== undefined && output.StepAdjustments !== null) {
        contents.StepAdjustments = deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context);
    }
    return contents;
};
const deserializeAws_json1_1SuspendedState = (output, context) => {
    let contents = {
        __type: "SuspendedState",
        DynamicScalingInSuspended: undefined,
        DynamicScalingOutSuspended: undefined,
        ScheduledScalingSuspended: undefined
    };
    if (output.DynamicScalingInSuspended !== undefined &&
        output.DynamicScalingInSuspended !== null) {
        contents.DynamicScalingInSuspended = output.DynamicScalingInSuspended;
    }
    if (output.DynamicScalingOutSuspended !== undefined &&
        output.DynamicScalingOutSuspended !== null) {
        contents.DynamicScalingOutSuspended = output.DynamicScalingOutSuspended;
    }
    if (output.ScheduledScalingSuspended !== undefined &&
        output.ScheduledScalingSuspended !== null) {
        contents.ScheduledScalingSuspended = output.ScheduledScalingSuspended;
    }
    return contents;
};
const deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (output, context) => {
    let contents = {
        __type: "TargetTrackingScalingPolicyConfiguration",
        CustomizedMetricSpecification: undefined,
        DisableScaleIn: undefined,
        PredefinedMetricSpecification: undefined,
        ScaleInCooldown: undefined,
        ScaleOutCooldown: undefined,
        TargetValue: undefined
    };
    if (output.CustomizedMetricSpecification !== undefined &&
        output.CustomizedMetricSpecification !== null) {
        contents.CustomizedMetricSpecification = deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context);
    }
    if (output.DisableScaleIn !== undefined && output.DisableScaleIn !== null) {
        contents.DisableScaleIn = output.DisableScaleIn;
    }
    if (output.PredefinedMetricSpecification !== undefined &&
        output.PredefinedMetricSpecification !== null) {
        contents.PredefinedMetricSpecification = deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context);
    }
    if (output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null) {
        contents.ScaleInCooldown = output.ScaleInCooldown;
    }
    if (output.ScaleOutCooldown !== undefined &&
        output.ScaleOutCooldown !== null) {
        contents.ScaleOutCooldown = output.ScaleOutCooldown;
    }
    if (output.TargetValue !== undefined && output.TargetValue !== null) {
        contents.TargetValue = output.TargetValue;
    }
    return contents;
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
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