"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateBudgetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateBudget";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBudgetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBudgetCommand = serializeAws_json1_1CreateBudgetCommand;
async function serializeAws_json1_1CreateNotificationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateNotification";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNotificationCommand = serializeAws_json1_1CreateNotificationCommand;
async function serializeAws_json1_1CreateSubscriberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.CreateSubscriber";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSubscriberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSubscriberCommand = serializeAws_json1_1CreateSubscriberCommand;
async function serializeAws_json1_1DeleteBudgetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteBudget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBudgetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBudgetCommand = serializeAws_json1_1DeleteBudgetCommand;
async function serializeAws_json1_1DeleteNotificationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteNotification";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNotificationCommand = serializeAws_json1_1DeleteNotificationCommand;
async function serializeAws_json1_1DeleteSubscriberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DeleteSubscriber";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubscriberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSubscriberCommand = serializeAws_json1_1DeleteSubscriberCommand;
async function serializeAws_json1_1DescribeBudgetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DescribeBudget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBudgetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBudgetCommand = serializeAws_json1_1DescribeBudgetCommand;
async function serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand;
async function serializeAws_json1_1DescribeBudgetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.DescribeBudgets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBudgetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBudgetsCommand = serializeAws_json1_1DescribeBudgetsCommand;
async function serializeAws_json1_1DescribeNotificationsForBudgetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSBudgetServiceGateway.DescribeNotificationsForBudget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNotificationsForBudgetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeNotificationsForBudgetCommand = serializeAws_json1_1DescribeNotificationsForBudgetCommand;
async function serializeAws_json1_1DescribeSubscribersForNotificationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSBudgetServiceGateway.DescribeSubscribersForNotification";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscribersForNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSubscribersForNotificationCommand = serializeAws_json1_1DescribeSubscribersForNotificationCommand;
async function serializeAws_json1_1UpdateBudgetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateBudget";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBudgetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateBudgetCommand = serializeAws_json1_1UpdateBudgetCommand;
async function serializeAws_json1_1UpdateNotificationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateNotification";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNotificationCommand = serializeAws_json1_1UpdateNotificationCommand;
async function serializeAws_json1_1UpdateSubscriberCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSBudgetServiceGateway.UpdateSubscriber";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSubscriberRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSubscriberCommand = serializeAws_json1_1UpdateSubscriberCommand;
async function deserializeAws_json1_1CreateBudgetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBudgetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBudgetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBudgetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBudgetCommand = deserializeAws_json1_1CreateBudgetCommand;
async function deserializeAws_json1_1CreateBudgetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreationLimitExceededException":
        case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRecordException":
        case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
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
async function deserializeAws_json1_1CreateNotificationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNotificationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNotificationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNotificationCommand = deserializeAws_json1_1CreateNotificationCommand;
async function deserializeAws_json1_1CreateNotificationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreationLimitExceededException":
        case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRecordException":
        case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateSubscriberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSubscriberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSubscriberResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSubscriberResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSubscriberCommand = deserializeAws_json1_1CreateSubscriberCommand;
async function deserializeAws_json1_1CreateSubscriberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CreationLimitExceededException":
        case "com.amazonaws.awsbudgetservicegateway#CreationLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRecordException":
        case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteBudgetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBudgetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBudgetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBudgetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBudgetCommand = deserializeAws_json1_1DeleteBudgetCommand;
async function deserializeAws_json1_1DeleteBudgetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteNotificationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNotificationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteNotificationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNotificationCommand = deserializeAws_json1_1DeleteNotificationCommand;
async function deserializeAws_json1_1DeleteNotificationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSubscriberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSubscriberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSubscriberResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSubscriberResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSubscriberCommand = deserializeAws_json1_1DeleteSubscriberCommand;
async function deserializeAws_json1_1DeleteSubscriberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeBudgetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBudgetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBudgetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBudgetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBudgetCommand = deserializeAws_json1_1DescribeBudgetCommand;
async function deserializeAws_json1_1DescribeBudgetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBudgetPerformanceHistoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand;
async function deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeBudgetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBudgetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBudgetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBudgetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBudgetsCommand = deserializeAws_json1_1DescribeBudgetsCommand;
async function deserializeAws_json1_1DescribeBudgetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeNotificationsForBudgetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNotificationsForBudgetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeNotificationsForBudgetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeNotificationsForBudgetCommand = deserializeAws_json1_1DescribeNotificationsForBudgetCommand;
async function deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSubscribersForNotificationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscribersForNotificationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSubscribersForNotificationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSubscribersForNotificationCommand = deserializeAws_json1_1DescribeSubscribersForNotificationCommand;
async function deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#ExpiredNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateBudgetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateBudgetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBudgetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateBudgetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateBudgetCommand = deserializeAws_json1_1UpdateBudgetCommand;
async function deserializeAws_json1_1UpdateBudgetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateNotificationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNotificationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNotificationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNotificationCommand = deserializeAws_json1_1UpdateNotificationCommand;
async function deserializeAws_json1_1UpdateNotificationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRecordException":
        case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateSubscriberCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSubscriberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSubscriberResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSubscriberResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSubscriberCommand = deserializeAws_json1_1UpdateSubscriberCommand;
async function deserializeAws_json1_1UpdateSubscriberCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.awsbudgetservicegateway#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DuplicateRecordException":
        case "com.amazonaws.awsbudgetservicegateway#DuplicateRecordException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalErrorException":
        case "com.amazonaws.awsbudgetservicegateway#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsbudgetservicegateway#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.awsbudgetservicegateway#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1CreationLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CreationLimitExceededException(body, context);
    const contents = Object.assign({ name: "CreationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicateRecordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRecordException(body, context);
    const contents = Object.assign({ name: "DuplicateRecordException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
    const contents = Object.assign({ name: "ExpiredNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Budget = (input, context) => {
    const bodyParams = {};
    if (input.BudgetLimit !== undefined) {
        bodyParams["BudgetLimit"] = serializeAws_json1_1Spend(input.BudgetLimit, context);
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.BudgetType !== undefined) {
        bodyParams["BudgetType"] = input.BudgetType;
    }
    if (input.CalculatedSpend !== undefined) {
        bodyParams["CalculatedSpend"] = serializeAws_json1_1CalculatedSpend(input.CalculatedSpend, context);
    }
    if (input.CostFilters !== undefined) {
        bodyParams["CostFilters"] = serializeAws_json1_1CostFilters(input.CostFilters, context);
    }
    if (input.CostTypes !== undefined) {
        bodyParams["CostTypes"] = serializeAws_json1_1CostTypes(input.CostTypes, context);
    }
    if (input.LastUpdatedTime !== undefined) {
        bodyParams["LastUpdatedTime"] = Math.round(input.LastUpdatedTime.getTime() / 1000);
    }
    if (input.PlannedBudgetLimits !== undefined) {
        bodyParams["PlannedBudgetLimits"] = serializeAws_json1_1PlannedBudgetLimits(input.PlannedBudgetLimits, context);
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1TimePeriod(input.TimePeriod, context);
    }
    if (input.TimeUnit !== undefined) {
        bodyParams["TimeUnit"] = input.TimeUnit;
    }
    return bodyParams;
};
const serializeAws_json1_1CalculatedSpend = (input, context) => {
    const bodyParams = {};
    if (input.ActualSpend !== undefined) {
        bodyParams["ActualSpend"] = serializeAws_json1_1Spend(input.ActualSpend, context);
    }
    if (input.ForecastedSpend !== undefined) {
        bodyParams["ForecastedSpend"] = serializeAws_json1_1Spend(input.ForecastedSpend, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CostFilters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1DimensionValues(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1CostTypes = (input, context) => {
    const bodyParams = {};
    if (input.IncludeCredit !== undefined) {
        bodyParams["IncludeCredit"] = input.IncludeCredit;
    }
    if (input.IncludeDiscount !== undefined) {
        bodyParams["IncludeDiscount"] = input.IncludeDiscount;
    }
    if (input.IncludeOtherSubscription !== undefined) {
        bodyParams["IncludeOtherSubscription"] = input.IncludeOtherSubscription;
    }
    if (input.IncludeRecurring !== undefined) {
        bodyParams["IncludeRecurring"] = input.IncludeRecurring;
    }
    if (input.IncludeRefund !== undefined) {
        bodyParams["IncludeRefund"] = input.IncludeRefund;
    }
    if (input.IncludeSubscription !== undefined) {
        bodyParams["IncludeSubscription"] = input.IncludeSubscription;
    }
    if (input.IncludeSupport !== undefined) {
        bodyParams["IncludeSupport"] = input.IncludeSupport;
    }
    if (input.IncludeTax !== undefined) {
        bodyParams["IncludeTax"] = input.IncludeTax;
    }
    if (input.IncludeUpfront !== undefined) {
        bodyParams["IncludeUpfront"] = input.IncludeUpfront;
    }
    if (input.UseAmortized !== undefined) {
        bodyParams["UseAmortized"] = input.UseAmortized;
    }
    if (input.UseBlended !== undefined) {
        bodyParams["UseBlended"] = input.UseBlended;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBudgetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.Budget !== undefined) {
        bodyParams["Budget"] = serializeAws_json1_1Budget(input.Budget, context);
    }
    if (input.NotificationsWithSubscribers !== undefined) {
        bodyParams["NotificationsWithSubscribers"] = serializeAws_json1_1NotificationWithSubscribersList(input.NotificationsWithSubscribers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNotificationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Subscribers !== undefined) {
        bodyParams["Subscribers"] = serializeAws_json1_1Subscribers(input.Subscribers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSubscriberRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Subscriber !== undefined) {
        bodyParams["Subscriber"] = serializeAws_json1_1Subscriber(input.Subscriber, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBudgetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNotificationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSubscriberRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Subscriber !== undefined) {
        bodyParams["Subscriber"] = serializeAws_json1_1Subscriber(input.Subscriber, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1TimePeriod(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBudgetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBudgetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeNotificationsForBudgetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSubscribersForNotificationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DimensionValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Notification = (input, context) => {
    const bodyParams = {};
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.NotificationState !== undefined) {
        bodyParams["NotificationState"] = input.NotificationState;
    }
    if (input.NotificationType !== undefined) {
        bodyParams["NotificationType"] = input.NotificationType;
    }
    if (input.Threshold !== undefined) {
        bodyParams["Threshold"] = input.Threshold;
    }
    if (input.ThresholdType !== undefined) {
        bodyParams["ThresholdType"] = input.ThresholdType;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationWithSubscribers = (input, context) => {
    const bodyParams = {};
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.Subscribers !== undefined) {
        bodyParams["Subscribers"] = serializeAws_json1_1Subscribers(input.Subscribers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationWithSubscribersList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1NotificationWithSubscribers(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlannedBudgetLimits = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1Spend(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1Spend = (input, context) => {
    const bodyParams = {};
    if (input.Amount !== undefined) {
        bodyParams["Amount"] = input.Amount;
    }
    if (input.Unit !== undefined) {
        bodyParams["Unit"] = input.Unit;
    }
    return bodyParams;
};
const serializeAws_json1_1Subscriber = (input, context) => {
    const bodyParams = {};
    if (input.Address !== undefined) {
        bodyParams["Address"] = input.Address;
    }
    if (input.SubscriptionType !== undefined) {
        bodyParams["SubscriptionType"] = input.SubscriptionType;
    }
    return bodyParams;
};
const serializeAws_json1_1Subscribers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Subscriber(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TimePeriod = (input, context) => {
    const bodyParams = {};
    if (input.End !== undefined) {
        bodyParams["End"] = Math.round(input.End.getTime() / 1000);
    }
    if (input.Start !== undefined) {
        bodyParams["Start"] = Math.round(input.Start.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateBudgetRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.NewBudget !== undefined) {
        bodyParams["NewBudget"] = serializeAws_json1_1Budget(input.NewBudget, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNotificationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.NewNotification !== undefined) {
        bodyParams["NewNotification"] = serializeAws_json1_1Notification(input.NewNotification, context);
    }
    if (input.OldNotification !== undefined) {
        bodyParams["OldNotification"] = serializeAws_json1_1Notification(input.OldNotification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSubscriberRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.BudgetName !== undefined) {
        bodyParams["BudgetName"] = input.BudgetName;
    }
    if (input.NewSubscriber !== undefined) {
        bodyParams["NewSubscriber"] = serializeAws_json1_1Subscriber(input.NewSubscriber, context);
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1Notification(input.Notification, context);
    }
    if (input.OldSubscriber !== undefined) {
        bodyParams["OldSubscriber"] = serializeAws_json1_1Subscriber(input.OldSubscriber, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Budget = (output, context) => {
    let contents = {
        __type: "Budget",
        BudgetLimit: undefined,
        BudgetName: undefined,
        BudgetType: undefined,
        CalculatedSpend: undefined,
        CostFilters: undefined,
        CostTypes: undefined,
        LastUpdatedTime: undefined,
        PlannedBudgetLimits: undefined,
        TimePeriod: undefined,
        TimeUnit: undefined
    };
    if (output.BudgetLimit !== undefined && output.BudgetLimit !== null) {
        contents.BudgetLimit = deserializeAws_json1_1Spend(output.BudgetLimit, context);
    }
    if (output.BudgetName !== undefined && output.BudgetName !== null) {
        contents.BudgetName = output.BudgetName;
    }
    if (output.BudgetType !== undefined && output.BudgetType !== null) {
        contents.BudgetType = output.BudgetType;
    }
    if (output.CalculatedSpend !== undefined && output.CalculatedSpend !== null) {
        contents.CalculatedSpend = deserializeAws_json1_1CalculatedSpend(output.CalculatedSpend, context);
    }
    if (output.CostFilters !== undefined && output.CostFilters !== null) {
        contents.CostFilters = deserializeAws_json1_1CostFilters(output.CostFilters, context);
    }
    if (output.CostTypes !== undefined && output.CostTypes !== null) {
        contents.CostTypes = deserializeAws_json1_1CostTypes(output.CostTypes, context);
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.PlannedBudgetLimits !== undefined &&
        output.PlannedBudgetLimits !== null) {
        contents.PlannedBudgetLimits = deserializeAws_json1_1PlannedBudgetLimits(output.PlannedBudgetLimits, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1TimePeriod(output.TimePeriod, context);
    }
    if (output.TimeUnit !== undefined && output.TimeUnit !== null) {
        contents.TimeUnit = output.TimeUnit;
    }
    return contents;
};
const deserializeAws_json1_1BudgetPerformanceHistory = (output, context) => {
    let contents = {
        __type: "BudgetPerformanceHistory",
        BudgetName: undefined,
        BudgetType: undefined,
        BudgetedAndActualAmountsList: undefined,
        CostFilters: undefined,
        CostTypes: undefined,
        TimeUnit: undefined
    };
    if (output.BudgetName !== undefined && output.BudgetName !== null) {
        contents.BudgetName = output.BudgetName;
    }
    if (output.BudgetType !== undefined && output.BudgetType !== null) {
        contents.BudgetType = output.BudgetType;
    }
    if (output.BudgetedAndActualAmountsList !== undefined &&
        output.BudgetedAndActualAmountsList !== null) {
        contents.BudgetedAndActualAmountsList = deserializeAws_json1_1BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context);
    }
    if (output.CostFilters !== undefined && output.CostFilters !== null) {
        contents.CostFilters = deserializeAws_json1_1CostFilters(output.CostFilters, context);
    }
    if (output.CostTypes !== undefined && output.CostTypes !== null) {
        contents.CostTypes = deserializeAws_json1_1CostTypes(output.CostTypes, context);
    }
    if (output.TimeUnit !== undefined && output.TimeUnit !== null) {
        contents.TimeUnit = output.TimeUnit;
    }
    return contents;
};
const deserializeAws_json1_1BudgetedAndActualAmounts = (output, context) => {
    let contents = {
        __type: "BudgetedAndActualAmounts",
        ActualAmount: undefined,
        BudgetedAmount: undefined,
        TimePeriod: undefined
    };
    if (output.ActualAmount !== undefined && output.ActualAmount !== null) {
        contents.ActualAmount = deserializeAws_json1_1Spend(output.ActualAmount, context);
    }
    if (output.BudgetedAmount !== undefined && output.BudgetedAmount !== null) {
        contents.BudgetedAmount = deserializeAws_json1_1Spend(output.BudgetedAmount, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1TimePeriod(output.TimePeriod, context);
    }
    return contents;
};
const deserializeAws_json1_1BudgetedAndActualAmountsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BudgetedAndActualAmounts(entry, context));
};
const deserializeAws_json1_1Budgets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Budget(entry, context));
};
const deserializeAws_json1_1CalculatedSpend = (output, context) => {
    let contents = {
        __type: "CalculatedSpend",
        ActualSpend: undefined,
        ForecastedSpend: undefined
    };
    if (output.ActualSpend !== undefined && output.ActualSpend !== null) {
        contents.ActualSpend = deserializeAws_json1_1Spend(output.ActualSpend, context);
    }
    if (output.ForecastedSpend !== undefined && output.ForecastedSpend !== null) {
        contents.ForecastedSpend = deserializeAws_json1_1Spend(output.ForecastedSpend, context);
    }
    return contents;
};
const deserializeAws_json1_1CostFilters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1DimensionValues(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1CostTypes = (output, context) => {
    let contents = {
        __type: "CostTypes",
        IncludeCredit: undefined,
        IncludeDiscount: undefined,
        IncludeOtherSubscription: undefined,
        IncludeRecurring: undefined,
        IncludeRefund: undefined,
        IncludeSubscription: undefined,
        IncludeSupport: undefined,
        IncludeTax: undefined,
        IncludeUpfront: undefined,
        UseAmortized: undefined,
        UseBlended: undefined
    };
    if (output.IncludeCredit !== undefined && output.IncludeCredit !== null) {
        contents.IncludeCredit = output.IncludeCredit;
    }
    if (output.IncludeDiscount !== undefined && output.IncludeDiscount !== null) {
        contents.IncludeDiscount = output.IncludeDiscount;
    }
    if (output.IncludeOtherSubscription !== undefined &&
        output.IncludeOtherSubscription !== null) {
        contents.IncludeOtherSubscription = output.IncludeOtherSubscription;
    }
    if (output.IncludeRecurring !== undefined &&
        output.IncludeRecurring !== null) {
        contents.IncludeRecurring = output.IncludeRecurring;
    }
    if (output.IncludeRefund !== undefined && output.IncludeRefund !== null) {
        contents.IncludeRefund = output.IncludeRefund;
    }
    if (output.IncludeSubscription !== undefined &&
        output.IncludeSubscription !== null) {
        contents.IncludeSubscription = output.IncludeSubscription;
    }
    if (output.IncludeSupport !== undefined && output.IncludeSupport !== null) {
        contents.IncludeSupport = output.IncludeSupport;
    }
    if (output.IncludeTax !== undefined && output.IncludeTax !== null) {
        contents.IncludeTax = output.IncludeTax;
    }
    if (output.IncludeUpfront !== undefined && output.IncludeUpfront !== null) {
        contents.IncludeUpfront = output.IncludeUpfront;
    }
    if (output.UseAmortized !== undefined && output.UseAmortized !== null) {
        contents.UseAmortized = output.UseAmortized;
    }
    if (output.UseBlended !== undefined && output.UseBlended !== null) {
        contents.UseBlended = output.UseBlended;
    }
    return contents;
};
const deserializeAws_json1_1CreateBudgetResponse = (output, context) => {
    let contents = {
        __type: "CreateBudgetResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateNotificationResponse = (output, context) => {
    let contents = {
        __type: "CreateNotificationResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateSubscriberResponse = (output, context) => {
    let contents = {
        __type: "CreateSubscriberResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreationLimitExceededException = (output, context) => {
    let contents = {
        __type: "CreationLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteBudgetResponse = (output, context) => {
    let contents = {
        __type: "DeleteBudgetResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteNotificationResponse = (output, context) => {
    let contents = {
        __type: "DeleteNotificationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSubscriberResponse = (output, context) => {
    let contents = {
        __type: "DeleteSubscriberResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = (output, context) => {
    let contents = {
        __type: "DescribeBudgetPerformanceHistoryResponse",
        BudgetPerformanceHistory: undefined,
        NextToken: undefined
    };
    if (output.BudgetPerformanceHistory !== undefined &&
        output.BudgetPerformanceHistory !== null) {
        contents.BudgetPerformanceHistory = deserializeAws_json1_1BudgetPerformanceHistory(output.BudgetPerformanceHistory, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeBudgetResponse = (output, context) => {
    let contents = {
        __type: "DescribeBudgetResponse",
        Budget: undefined
    };
    if (output.Budget !== undefined && output.Budget !== null) {
        contents.Budget = deserializeAws_json1_1Budget(output.Budget, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeBudgetsResponse = (output, context) => {
    let contents = {
        __type: "DescribeBudgetsResponse",
        Budgets: undefined,
        NextToken: undefined
    };
    if (output.Budgets !== undefined && output.Budgets !== null) {
        contents.Budgets = deserializeAws_json1_1Budgets(output.Budgets, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeNotificationsForBudgetResponse = (output, context) => {
    let contents = {
        __type: "DescribeNotificationsForBudgetResponse",
        NextToken: undefined,
        Notifications: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Notifications !== undefined && output.Notifications !== null) {
        contents.Notifications = deserializeAws_json1_1Notifications(output.Notifications, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSubscribersForNotificationResponse = (output, context) => {
    let contents = {
        __type: "DescribeSubscribersForNotificationResponse",
        NextToken: undefined,
        Subscribers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Subscribers !== undefined && output.Subscribers !== null) {
        contents.Subscribers = deserializeAws_json1_1Subscribers(output.Subscribers, context);
    }
    return contents;
};
const deserializeAws_json1_1DimensionValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DuplicateRecordException = (output, context) => {
    let contents = {
        __type: "DuplicateRecordException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ExpiredNextTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    let contents = {
        __type: "InternalErrorException",
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
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Notification = (output, context) => {
    let contents = {
        __type: "Notification",
        ComparisonOperator: undefined,
        NotificationState: undefined,
        NotificationType: undefined,
        Threshold: undefined,
        ThresholdType: undefined
    };
    if (output.ComparisonOperator !== undefined &&
        output.ComparisonOperator !== null) {
        contents.ComparisonOperator = output.ComparisonOperator;
    }
    if (output.NotificationState !== undefined &&
        output.NotificationState !== null) {
        contents.NotificationState = output.NotificationState;
    }
    if (output.NotificationType !== undefined &&
        output.NotificationType !== null) {
        contents.NotificationType = output.NotificationType;
    }
    if (output.Threshold !== undefined && output.Threshold !== null) {
        contents.Threshold = output.Threshold;
    }
    if (output.ThresholdType !== undefined && output.ThresholdType !== null) {
        contents.ThresholdType = output.ThresholdType;
    }
    return contents;
};
const deserializeAws_json1_1Notifications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Notification(entry, context));
};
const deserializeAws_json1_1PlannedBudgetLimits = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1Spend(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1Spend = (output, context) => {
    let contents = {
        __type: "Spend",
        Amount: undefined,
        Unit: undefined
    };
    if (output.Amount !== undefined && output.Amount !== null) {
        contents.Amount = output.Amount;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1Subscriber = (output, context) => {
    let contents = {
        __type: "Subscriber",
        Address: undefined,
        SubscriptionType: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.SubscriptionType !== undefined &&
        output.SubscriptionType !== null) {
        contents.SubscriptionType = output.SubscriptionType;
    }
    return contents;
};
const deserializeAws_json1_1Subscribers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Subscriber(entry, context));
};
const deserializeAws_json1_1TimePeriod = (output, context) => {
    let contents = {
        __type: "TimePeriod",
        End: undefined,
        Start: undefined
    };
    if (output.End !== undefined && output.End !== null) {
        contents.End = new Date(Math.round(output.End * 1000));
    }
    if (output.Start !== undefined && output.Start !== null) {
        contents.Start = new Date(Math.round(output.Start * 1000));
    }
    return contents;
};
const deserializeAws_json1_1UpdateBudgetResponse = (output, context) => {
    let contents = {
        __type: "UpdateBudgetResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateNotificationResponse = (output, context) => {
    let contents = {
        __type: "UpdateNotificationResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateSubscriberResponse = (output, context) => {
    let contents = {
        __type: "UpdateSubscriberResponse"
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