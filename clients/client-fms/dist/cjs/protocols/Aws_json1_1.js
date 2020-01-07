"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateAdminAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.AssociateAdminAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateAdminAccountCommand = serializeAws_json1_1AssociateAdminAccountCommand;
async function serializeAws_json1_1DeleteNotificationChannelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.DeleteNotificationChannel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNotificationChannelCommand = serializeAws_json1_1DeleteNotificationChannelCommand;
async function serializeAws_json1_1DeletePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.DeletePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePolicyCommand = serializeAws_json1_1DeletePolicyCommand;
async function serializeAws_json1_1DisassociateAdminAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.DisassociateAdminAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateAdminAccountCommand = serializeAws_json1_1DisassociateAdminAccountCommand;
async function serializeAws_json1_1GetAdminAccountCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.GetAdminAccount";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAdminAccountCommand = serializeAws_json1_1GetAdminAccountCommand;
async function serializeAws_json1_1GetComplianceDetailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.GetComplianceDetail";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetComplianceDetailCommand = serializeAws_json1_1GetComplianceDetailCommand;
async function serializeAws_json1_1GetNotificationChannelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.GetNotificationChannel";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNotificationChannelCommand = serializeAws_json1_1GetNotificationChannelCommand;
async function serializeAws_json1_1GetPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.GetPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPolicyCommand = serializeAws_json1_1GetPolicyCommand;
async function serializeAws_json1_1GetProtectionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.GetProtectionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProtectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetProtectionStatusCommand = serializeAws_json1_1GetProtectionStatusCommand;
async function serializeAws_json1_1ListComplianceStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.ListComplianceStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListComplianceStatusCommand = serializeAws_json1_1ListComplianceStatusCommand;
async function serializeAws_json1_1ListMemberAccountsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.ListMemberAccounts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMemberAccountsCommand = serializeAws_json1_1ListMemberAccountsCommand;
async function serializeAws_json1_1ListPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.ListPolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPoliciesCommand = serializeAws_json1_1ListPoliciesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutNotificationChannelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.PutNotificationChannel";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutNotificationChannelCommand = serializeAws_json1_1PutNotificationChannelCommand;
async function serializeAws_json1_1PutPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.PutPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutPolicyCommand = serializeAws_json1_1PutPolicyCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSFMS_20180101.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1AssociateAdminAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateAdminAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateAdminAccountCommand = deserializeAws_json1_1AssociateAdminAccountCommand;
async function deserializeAws_json1_1AssociateAdminAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteNotificationChannelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNotificationChannelCommand = deserializeAws_json1_1DeleteNotificationChannelCommand;
async function deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeletePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePolicyCommand = deserializeAws_json1_1DeletePolicyCommand;
async function deserializeAws_json1_1DeletePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisassociateAdminAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateAdminAccountCommand = deserializeAws_json1_1DisassociateAdminAccountCommand;
async function deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetAdminAccountCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAdminAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAdminAccountResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAdminAccountCommand = deserializeAws_json1_1GetAdminAccountCommand;
async function deserializeAws_json1_1GetAdminAccountCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetComplianceDetailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetComplianceDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetComplianceDetailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetComplianceDetailCommand = deserializeAws_json1_1GetComplianceDetailCommand;
async function deserializeAws_json1_1GetComplianceDetailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetNotificationChannelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNotificationChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNotificationChannelResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNotificationChannelCommand = deserializeAws_json1_1GetNotificationChannelCommand;
async function deserializeAws_json1_1GetNotificationChannelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPolicyCommand = deserializeAws_json1_1GetPolicyCommand;
async function deserializeAws_json1_1GetPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetProtectionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetProtectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetProtectionStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetProtectionStatusCommand = deserializeAws_json1_1GetProtectionStatusCommand;
async function deserializeAws_json1_1GetProtectionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListComplianceStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListComplianceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListComplianceStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListComplianceStatusCommand = deserializeAws_json1_1ListComplianceStatusCommand;
async function deserializeAws_json1_1ListComplianceStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListMemberAccountsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMemberAccountsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMemberAccountsCommand = deserializeAws_json1_1ListMemberAccountsCommand;
async function deserializeAws_json1_1ListMemberAccountsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPoliciesCommand = deserializeAws_json1_1ListPoliciesCommand;
async function deserializeAws_json1_1ListPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.roshi.customerapi.v20180101#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutNotificationChannelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutNotificationChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutNotificationChannelCommand = deserializeAws_json1_1PutNotificationChannelCommand;
async function deserializeAws_json1_1PutNotificationChannelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutPolicyCommand = deserializeAws_json1_1PutPolicyCommand;
async function deserializeAws_json1_1PutPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.roshi.customerapi.v20180101#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.roshi.customerapi.v20180101#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
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
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = Object.assign({ name: "InternalErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTypeException(body, context);
    const contents = Object.assign({ name: "InvalidTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AssociateAdminAccountRequest = (input, context) => {
    const bodyParams = {};
    if (input.AdminAccount !== undefined) {
        bodyParams["AdminAccount"] = input.AdminAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1CustomerPolicyScopeIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CustomerPolicyScopeMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1CustomerPolicyScopeIdList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1DeleteNotificationChannelRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DeletePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeleteAllPolicyResources !== undefined) {
        bodyParams["DeleteAllPolicyResources"] = input.DeleteAllPolicyResources;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateAdminAccountRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetAdminAccountRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetComplianceDetailRequest = (input, context) => {
    const bodyParams = {};
    if (input.MemberAccount !== undefined) {
        bodyParams["MemberAccount"] = input.MemberAccount;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetNotificationChannelRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetProtectionStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MemberAccountId !== undefined) {
        bodyParams["MemberAccountId"] = input.MemberAccountId;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListComplianceStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMemberAccountsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPoliciesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Policy = (input, context) => {
    const bodyParams = {};
    if (input.ExcludeMap !== undefined) {
        bodyParams["ExcludeMap"] = serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context);
    }
    if (input.ExcludeResourceTags !== undefined) {
        bodyParams["ExcludeResourceTags"] = input.ExcludeResourceTags;
    }
    if (input.IncludeMap !== undefined) {
        bodyParams["IncludeMap"] = serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context);
    }
    if (input.PolicyId !== undefined) {
        bodyParams["PolicyId"] = input.PolicyId;
    }
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyUpdateToken !== undefined) {
        bodyParams["PolicyUpdateToken"] = input.PolicyUpdateToken;
    }
    if (input.RemediationEnabled !== undefined) {
        bodyParams["RemediationEnabled"] = input.RemediationEnabled;
    }
    if (input.ResourceTags !== undefined) {
        bodyParams["ResourceTags"] = serializeAws_json1_1ResourceTags(input.ResourceTags, context);
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.ResourceTypeList !== undefined) {
        bodyParams["ResourceTypeList"] = serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context);
    }
    if (input.SecurityServicePolicyData !== undefined) {
        bodyParams["SecurityServicePolicyData"] = serializeAws_json1_1SecurityServicePolicyData(input.SecurityServicePolicyData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutNotificationChannelRequest = (input, context) => {
    const bodyParams = {};
    if (input.SnsRoleName !== undefined) {
        bodyParams["SnsRoleName"] = input.SnsRoleName;
    }
    if (input.SnsTopicArn !== undefined) {
        bodyParams["SnsTopicArn"] = input.SnsTopicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1PutPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = serializeAws_json1_1Policy(input.Policy, context);
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceTag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceTags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceTag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ResourceTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SecurityServicePolicyData = (input, context) => {
    const bodyParams = {};
    if (input.ManagedServiceData !== undefined) {
        bodyParams["ManagedServiceData"] = input.ManagedServiceData;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagList !== undefined) {
        bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1ComplianceViolator = (output, context) => {
    let contents = {
        __type: "ComplianceViolator",
        ResourceId: undefined,
        ResourceType: undefined,
        ViolationReason: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.ViolationReason !== undefined && output.ViolationReason !== null) {
        contents.ViolationReason = output.ViolationReason;
    }
    return contents;
};
const deserializeAws_json1_1ComplianceViolators = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComplianceViolator(entry, context));
};
const deserializeAws_json1_1CustomerPolicyScopeIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CustomerPolicyScopeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1CustomerPolicyScopeIdList(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    let contents = {
        __type: "EvaluationResult",
        ComplianceStatus: undefined,
        EvaluationLimitExceeded: undefined,
        ViolatorCount: undefined
    };
    if (output.ComplianceStatus !== undefined &&
        output.ComplianceStatus !== null) {
        contents.ComplianceStatus = output.ComplianceStatus;
    }
    if (output.EvaluationLimitExceeded !== undefined &&
        output.EvaluationLimitExceeded !== null) {
        contents.EvaluationLimitExceeded = output.EvaluationLimitExceeded;
    }
    if (output.ViolatorCount !== undefined && output.ViolatorCount !== null) {
        contents.ViolatorCount = output.ViolatorCount;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EvaluationResult(entry, context));
};
const deserializeAws_json1_1GetAdminAccountResponse = (output, context) => {
    let contents = {
        __type: "GetAdminAccountResponse",
        AdminAccount: undefined,
        RoleStatus: undefined
    };
    if (output.AdminAccount !== undefined && output.AdminAccount !== null) {
        contents.AdminAccount = output.AdminAccount;
    }
    if (output.RoleStatus !== undefined && output.RoleStatus !== null) {
        contents.RoleStatus = output.RoleStatus;
    }
    return contents;
};
const deserializeAws_json1_1GetComplianceDetailResponse = (output, context) => {
    let contents = {
        __type: "GetComplianceDetailResponse",
        PolicyComplianceDetail: undefined
    };
    if (output.PolicyComplianceDetail !== undefined &&
        output.PolicyComplianceDetail !== null) {
        contents.PolicyComplianceDetail = deserializeAws_json1_1PolicyComplianceDetail(output.PolicyComplianceDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1GetNotificationChannelResponse = (output, context) => {
    let contents = {
        __type: "GetNotificationChannelResponse",
        SnsRoleName: undefined,
        SnsTopicArn: undefined
    };
    if (output.SnsRoleName !== undefined && output.SnsRoleName !== null) {
        contents.SnsRoleName = output.SnsRoleName;
    }
    if (output.SnsTopicArn !== undefined && output.SnsTopicArn !== null) {
        contents.SnsTopicArn = output.SnsTopicArn;
    }
    return contents;
};
const deserializeAws_json1_1GetPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetPolicyResponse",
        Policy: undefined,
        PolicyArn: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
    }
    if (output.PolicyArn !== undefined && output.PolicyArn !== null) {
        contents.PolicyArn = output.PolicyArn;
    }
    return contents;
};
const deserializeAws_json1_1GetProtectionStatusResponse = (output, context) => {
    let contents = {
        __type: "GetProtectionStatusResponse",
        AdminAccountId: undefined,
        Data: undefined,
        NextToken: undefined,
        ServiceType: undefined
    };
    if (output.AdminAccountId !== undefined && output.AdminAccountId !== null) {
        contents.AdminAccountId = output.AdminAccountId;
    }
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = output.Data;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ServiceType !== undefined && output.ServiceType !== null) {
        contents.ServiceType = output.ServiceType;
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
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTypeException = (output, context) => {
    let contents = {
        __type: "InvalidTypeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IssueInfoMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
const deserializeAws_json1_1ListComplianceStatusResponse = (output, context) => {
    let contents = {
        __type: "ListComplianceStatusResponse",
        NextToken: undefined,
        PolicyComplianceStatusList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PolicyComplianceStatusList !== undefined &&
        output.PolicyComplianceStatusList !== null) {
        contents.PolicyComplianceStatusList = deserializeAws_json1_1PolicyComplianceStatusList(output.PolicyComplianceStatusList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListMemberAccountsResponse = (output, context) => {
    let contents = {
        __type: "ListMemberAccountsResponse",
        MemberAccounts: undefined,
        NextToken: undefined
    };
    if (output.MemberAccounts !== undefined && output.MemberAccounts !== null) {
        contents.MemberAccounts = deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListPoliciesResponse",
        NextToken: undefined,
        PolicyList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PolicyList !== undefined && output.PolicyList !== null) {
        contents.PolicyList = deserializeAws_json1_1PolicySummaryList(output.PolicyList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        TagList: undefined
    };
    if (output.TagList !== undefined && output.TagList !== null) {
        contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
    }
    return contents;
};
const deserializeAws_json1_1MemberAccounts = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Policy = (output, context) => {
    let contents = {
        __type: "Policy",
        ExcludeMap: undefined,
        ExcludeResourceTags: undefined,
        IncludeMap: undefined,
        PolicyId: undefined,
        PolicyName: undefined,
        PolicyUpdateToken: undefined,
        RemediationEnabled: undefined,
        ResourceTags: undefined,
        ResourceType: undefined,
        ResourceTypeList: undefined,
        SecurityServicePolicyData: undefined
    };
    if (output.ExcludeMap !== undefined && output.ExcludeMap !== null) {
        contents.ExcludeMap = deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context);
    }
    if (output.ExcludeResourceTags !== undefined &&
        output.ExcludeResourceTags !== null) {
        contents.ExcludeResourceTags = output.ExcludeResourceTags;
    }
    if (output.IncludeMap !== undefined && output.IncludeMap !== null) {
        contents.IncludeMap = deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context);
    }
    if (output.PolicyId !== undefined && output.PolicyId !== null) {
        contents.PolicyId = output.PolicyId;
    }
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    if (output.PolicyUpdateToken !== undefined &&
        output.PolicyUpdateToken !== null) {
        contents.PolicyUpdateToken = output.PolicyUpdateToken;
    }
    if (output.RemediationEnabled !== undefined &&
        output.RemediationEnabled !== null) {
        contents.RemediationEnabled = output.RemediationEnabled;
    }
    if (output.ResourceTags !== undefined && output.ResourceTags !== null) {
        contents.ResourceTags = deserializeAws_json1_1ResourceTags(output.ResourceTags, context);
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.ResourceTypeList !== undefined &&
        output.ResourceTypeList !== null) {
        contents.ResourceTypeList = deserializeAws_json1_1ResourceTypeList(output.ResourceTypeList, context);
    }
    if (output.SecurityServicePolicyData !== undefined &&
        output.SecurityServicePolicyData !== null) {
        contents.SecurityServicePolicyData = deserializeAws_json1_1SecurityServicePolicyData(output.SecurityServicePolicyData, context);
    }
    return contents;
};
const deserializeAws_json1_1PolicyComplianceDetail = (output, context) => {
    let contents = {
        __type: "PolicyComplianceDetail",
        EvaluationLimitExceeded: undefined,
        ExpiredAt: undefined,
        IssueInfoMap: undefined,
        MemberAccount: undefined,
        PolicyId: undefined,
        PolicyOwner: undefined,
        Violators: undefined
    };
    if (output.EvaluationLimitExceeded !== undefined &&
        output.EvaluationLimitExceeded !== null) {
        contents.EvaluationLimitExceeded = output.EvaluationLimitExceeded;
    }
    if (output.ExpiredAt !== undefined && output.ExpiredAt !== null) {
        contents.ExpiredAt = new Date(Math.round(output.ExpiredAt * 1000));
    }
    if (output.IssueInfoMap !== undefined && output.IssueInfoMap !== null) {
        contents.IssueInfoMap = deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context);
    }
    if (output.MemberAccount !== undefined && output.MemberAccount !== null) {
        contents.MemberAccount = output.MemberAccount;
    }
    if (output.PolicyId !== undefined && output.PolicyId !== null) {
        contents.PolicyId = output.PolicyId;
    }
    if (output.PolicyOwner !== undefined && output.PolicyOwner !== null) {
        contents.PolicyOwner = output.PolicyOwner;
    }
    if (output.Violators !== undefined && output.Violators !== null) {
        contents.Violators = deserializeAws_json1_1ComplianceViolators(output.Violators, context);
    }
    return contents;
};
const deserializeAws_json1_1PolicyComplianceStatus = (output, context) => {
    let contents = {
        __type: "PolicyComplianceStatus",
        EvaluationResults: undefined,
        IssueInfoMap: undefined,
        LastUpdated: undefined,
        MemberAccount: undefined,
        PolicyId: undefined,
        PolicyName: undefined,
        PolicyOwner: undefined
    };
    if (output.EvaluationResults !== undefined &&
        output.EvaluationResults !== null) {
        contents.EvaluationResults = deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context);
    }
    if (output.IssueInfoMap !== undefined && output.IssueInfoMap !== null) {
        contents.IssueInfoMap = deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context);
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.MemberAccount !== undefined && output.MemberAccount !== null) {
        contents.MemberAccount = output.MemberAccount;
    }
    if (output.PolicyId !== undefined && output.PolicyId !== null) {
        contents.PolicyId = output.PolicyId;
    }
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    if (output.PolicyOwner !== undefined && output.PolicyOwner !== null) {
        contents.PolicyOwner = output.PolicyOwner;
    }
    return contents;
};
const deserializeAws_json1_1PolicyComplianceStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicyComplianceStatus(entry, context));
};
const deserializeAws_json1_1PolicySummary = (output, context) => {
    let contents = {
        __type: "PolicySummary",
        PolicyArn: undefined,
        PolicyId: undefined,
        PolicyName: undefined,
        RemediationEnabled: undefined,
        ResourceType: undefined,
        SecurityServiceType: undefined
    };
    if (output.PolicyArn !== undefined && output.PolicyArn !== null) {
        contents.PolicyArn = output.PolicyArn;
    }
    if (output.PolicyId !== undefined && output.PolicyId !== null) {
        contents.PolicyId = output.PolicyId;
    }
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    if (output.RemediationEnabled !== undefined &&
        output.RemediationEnabled !== null) {
        contents.RemediationEnabled = output.RemediationEnabled;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.SecurityServiceType !== undefined &&
        output.SecurityServiceType !== null) {
        contents.SecurityServiceType = output.SecurityServiceType;
    }
    return contents;
};
const deserializeAws_json1_1PolicySummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicySummary(entry, context));
};
const deserializeAws_json1_1PutPolicyResponse = (output, context) => {
    let contents = {
        __type: "PutPolicyResponse",
        Policy: undefined,
        PolicyArn: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
    }
    if (output.PolicyArn !== undefined && output.PolicyArn !== null) {
        contents.PolicyArn = output.PolicyArn;
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
const deserializeAws_json1_1ResourceTag = (output, context) => {
    let contents = {
        __type: "ResourceTag",
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
const deserializeAws_json1_1ResourceTags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceTag(entry, context));
};
const deserializeAws_json1_1ResourceTypeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SecurityServicePolicyData = (output, context) => {
    let contents = {
        __type: "SecurityServicePolicyData",
        ManagedServiceData: undefined,
        Type: undefined
    };
    if (output.ManagedServiceData !== undefined &&
        output.ManagedServiceData !== null) {
        contents.ManagedServiceData = output.ManagedServiceData;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
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
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map