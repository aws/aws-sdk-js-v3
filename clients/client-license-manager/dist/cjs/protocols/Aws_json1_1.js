"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.CreateLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLicenseConfigurationCommand = serializeAws_json1_1CreateLicenseConfigurationCommand;
async function serializeAws_json1_1DeleteLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.DeleteLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLicenseConfigurationCommand = serializeAws_json1_1DeleteLicenseConfigurationCommand;
async function serializeAws_json1_1GetLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.GetLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLicenseConfigurationCommand = serializeAws_json1_1GetLicenseConfigurationCommand;
async function serializeAws_json1_1GetServiceSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.GetServiceSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServiceSettingsCommand = serializeAws_json1_1GetServiceSettingsCommand;
async function serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSLicenseManager.ListAssociationsForLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand;
async function serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand;
async function serializeAws_json1_1ListLicenseConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.ListLicenseConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLicenseConfigurationsCommand = serializeAws_json1_1ListLicenseConfigurationsCommand;
async function serializeAws_json1_1ListLicenseSpecificationsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSLicenseManager.ListLicenseSpecificationsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLicenseSpecificationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLicenseSpecificationsForResourceCommand = serializeAws_json1_1ListLicenseSpecificationsForResourceCommand;
async function serializeAws_json1_1ListResourceInventoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.ListResourceInventory";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceInventoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceInventoryCommand = serializeAws_json1_1ListResourceInventoryCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListUsageForLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSLicenseManager.ListUsageForLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsageForLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListUsageForLicenseConfigurationCommand = serializeAws_json1_1ListUsageForLicenseConfigurationCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateLicenseConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.UpdateLicenseConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLicenseConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLicenseConfigurationCommand = serializeAws_json1_1UpdateLicenseConfigurationCommand;
async function serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSLicenseManager.UpdateLicenseSpecificationsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand;
async function serializeAws_json1_1UpdateServiceSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSLicenseManager.UpdateServiceSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServiceSettingsCommand = serializeAws_json1_1UpdateServiceSettingsCommand;
async function deserializeAws_json1_1CreateLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLicenseConfigurationCommand = deserializeAws_json1_1CreateLicenseConfigurationCommand;
async function deserializeAws_json1_1CreateLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLicenseConfigurationCommand = deserializeAws_json1_1DeleteLicenseConfigurationCommand;
async function deserializeAws_json1_1DeleteLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLicenseConfigurationCommand = deserializeAws_json1_1GetLicenseConfigurationCommand;
async function deserializeAws_json1_1GetLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetServiceSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServiceSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServiceSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServiceSettingsCommand = deserializeAws_json1_1GetServiceSettingsCommand;
async function deserializeAws_json1_1GetServiceSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssociationsForLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand = deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand;
async function deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFailuresForLicenseConfigurationOperationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand = deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand;
async function deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListLicenseConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLicenseConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLicenseConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLicenseConfigurationsCommand = deserializeAws_json1_1ListLicenseConfigurationsCommand;
async function deserializeAws_json1_1ListLicenseConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLicenseSpecificationsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand = deserializeAws_json1_1ListLicenseSpecificationsForResourceCommand;
async function deserializeAws_json1_1ListLicenseSpecificationsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListResourceInventoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceInventoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceInventoryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceInventoryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceInventoryCommand = deserializeAws_json1_1ListResourceInventoryCommand;
async function deserializeAws_json1_1ListResourceInventoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FailedDependencyException":
        case "com.amazonaws.license.manager.V2018_08_01#FailedDependencyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FailedDependencyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListUsageForLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsageForLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListUsageForLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListUsageForLicenseConfigurationCommand = deserializeAws_json1_1ListUsageForLicenseConfigurationCommand;
async function deserializeAws_json1_1ListUsageForLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FilterLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#FilterLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FilterLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateLicenseConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLicenseConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLicenseConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateLicenseConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLicenseConfigurationCommand = deserializeAws_json1_1UpdateLicenseConfigurationCommand;
async function deserializeAws_json1_1UpdateLicenseConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateLicenseSpecificationsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand = deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand;
async function deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidResourceStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LicenseUsageException":
        case "com.amazonaws.license.manager.V2018_08_01#LicenseUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LicenseUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateServiceSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServiceSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServiceSettingsCommand = deserializeAws_json1_1UpdateServiceSettingsCommand;
async function deserializeAws_json1_1UpdateServiceSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.license.manager.V2018_08_01#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AuthorizationException":
        case "com.amazonaws.license.manager.V2018_08_01#AuthorizationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.license.manager.V2018_08_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateLimitExceededException":
        case "com.amazonaws.license.manager.V2018_08_01#RateLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RateLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalException":
        case "com.amazonaws.license.manager.V2018_08_01#ServerInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AuthorizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthorizationException(body, context);
    const contents = Object.assign({ name: "AuthorizationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FailedDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FailedDependencyException(body, context);
    const contents = Object.assign({ name: "FailedDependencyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FilterLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FilterLimitExceededException(body, context);
    const contents = Object.assign({ name: "FilterLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = Object.assign({ name: "InvalidResourceStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LicenseUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LicenseUsageException(body, context);
    const contents = Object.assign({ name: "LicenseUsageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RateLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RateLimitExceededException(body, context);
    const contents = Object.assign({ name: "RateLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServerInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerInternalException(body, context);
    const contents = Object.assign({ name: "ServerInternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CreateLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LicenseCount !== undefined) {
        bodyParams["LicenseCount"] = input.LicenseCount;
    }
    if (input.LicenseCountHardLimit !== undefined) {
        bodyParams["LicenseCountHardLimit"] = input.LicenseCountHardLimit;
    }
    if (input.LicenseCountingType !== undefined) {
        bodyParams["LicenseCountingType"] = input.LicenseCountingType;
    }
    if (input.LicenseRules !== undefined) {
        bodyParams["LicenseRules"] = serializeAws_json1_1StringList(input.LicenseRules, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ProductInformationList !== undefined) {
        bodyParams["ProductInformationList"] = serializeAws_json1_1ProductInformationList(input.ProductInformationList, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1FilterValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServiceSettingsRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1InventoryFilter = (input, context) => {
    const bodyParams = {};
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = input.Condition;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1InventoryFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InventoryFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1LicenseSpecification = (input, context) => {
    const bodyParams = {};
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1LicenseSpecifications = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1LicenseSpecification(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListAssociationsForLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLicenseConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.LicenseConfigurationArns !== undefined) {
        bodyParams["LicenseConfigurationArns"] = serializeAws_json1_1StringList(input.LicenseConfigurationArns, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLicenseSpecificationsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceInventoryRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1InventoryFilterList(input.Filters, context);
    }
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
const serializeAws_json1_1ListUsageForLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1OrganizationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EnableIntegration !== undefined) {
        bodyParams["EnableIntegration"] = input.EnableIntegration;
    }
    return bodyParams;
};
const serializeAws_json1_1ProductInformation = (input, context) => {
    const bodyParams = {};
    if (input.ProductInformationFilterList !== undefined) {
        bodyParams["ProductInformationFilterList"] = serializeAws_json1_1ProductInformationFilterList(input.ProductInformationFilterList, context);
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1ProductInformationFilter = (input, context) => {
    const bodyParams = {};
    if (input.ProductInformationFilterComparator !== undefined) {
        bodyParams["ProductInformationFilterComparator"] =
            input.ProductInformationFilterComparator;
    }
    if (input.ProductInformationFilterName !== undefined) {
        bodyParams["ProductInformationFilterName"] =
            input.ProductInformationFilterName;
    }
    if (input.ProductInformationFilterValue !== undefined) {
        bodyParams["ProductInformationFilterValue"] = serializeAws_json1_1StringList(input.ProductInformationFilterValue, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ProductInformationFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProductInformationFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProductInformationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ProductInformation(entry, context));
    }
    return contents;
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
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
const serializeAws_json1_1UpdateLicenseConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LicenseConfigurationArn !== undefined) {
        bodyParams["LicenseConfigurationArn"] = input.LicenseConfigurationArn;
    }
    if (input.LicenseConfigurationStatus !== undefined) {
        bodyParams["LicenseConfigurationStatus"] = input.LicenseConfigurationStatus;
    }
    if (input.LicenseCount !== undefined) {
        bodyParams["LicenseCount"] = input.LicenseCount;
    }
    if (input.LicenseCountHardLimit !== undefined) {
        bodyParams["LicenseCountHardLimit"] = input.LicenseCountHardLimit;
    }
    if (input.LicenseRules !== undefined) {
        bodyParams["LicenseRules"] = serializeAws_json1_1StringList(input.LicenseRules, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ProductInformationList !== undefined) {
        bodyParams["ProductInformationList"] = serializeAws_json1_1ProductInformationList(input.ProductInformationList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateLicenseSpecificationsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddLicenseSpecifications !== undefined) {
        bodyParams["AddLicenseSpecifications"] = serializeAws_json1_1LicenseSpecifications(input.AddLicenseSpecifications, context);
    }
    if (input.RemoveLicenseSpecifications !== undefined) {
        bodyParams["RemoveLicenseSpecifications"] = serializeAws_json1_1LicenseSpecifications(input.RemoveLicenseSpecifications, context);
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServiceSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EnableCrossAccountsDiscovery !== undefined) {
        bodyParams["EnableCrossAccountsDiscovery"] =
            input.EnableCrossAccountsDiscovery;
    }
    if (input.OrganizationConfiguration !== undefined) {
        bodyParams["OrganizationConfiguration"] = serializeAws_json1_1OrganizationConfiguration(input.OrganizationConfiguration, context);
    }
    if (input.S3BucketArn !== undefined) {
        bodyParams["S3BucketArn"] = input.S3BucketArn;
    }
    if (input.SnsTopicArn !== undefined) {
        bodyParams["SnsTopicArn"] = input.SnsTopicArn;
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
const deserializeAws_json1_1AuthorizationException = (output, context) => {
    let contents = {
        __type: "AuthorizationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AutomatedDiscoveryInformation = (output, context) => {
    let contents = {
        __type: "AutomatedDiscoveryInformation",
        LastRunTime: undefined
    };
    if (output.LastRunTime !== undefined && output.LastRunTime !== null) {
        contents.LastRunTime = new Date(Math.round(output.LastRunTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ConsumedLicenseSummary = (output, context) => {
    let contents = {
        __type: "ConsumedLicenseSummary",
        ConsumedLicenses: undefined,
        ResourceType: undefined
    };
    if (output.ConsumedLicenses !== undefined &&
        output.ConsumedLicenses !== null) {
        contents.ConsumedLicenses = output.ConsumedLicenses;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ConsumedLicenseSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConsumedLicenseSummary(entry, context));
};
const deserializeAws_json1_1CreateLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "CreateLicenseConfigurationResponse",
        LicenseConfigurationArn: undefined
    };
    if (output.LicenseConfigurationArn !== undefined &&
        output.LicenseConfigurationArn !== null) {
        contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteLicenseConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1FailedDependencyException = (output, context) => {
    let contents = {
        __type: "FailedDependencyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1FilterLimitExceededException = (output, context) => {
    let contents = {
        __type: "FilterLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetLicenseConfigurationResponse",
        AutomatedDiscoveryInformation: undefined,
        ConsumedLicenseSummaryList: undefined,
        ConsumedLicenses: undefined,
        Description: undefined,
        LicenseConfigurationArn: undefined,
        LicenseConfigurationId: undefined,
        LicenseCount: undefined,
        LicenseCountHardLimit: undefined,
        LicenseCountingType: undefined,
        LicenseRules: undefined,
        ManagedResourceSummaryList: undefined,
        Name: undefined,
        OwnerAccountId: undefined,
        ProductInformationList: undefined,
        Status: undefined,
        Tags: undefined
    };
    if (output.AutomatedDiscoveryInformation !== undefined &&
        output.AutomatedDiscoveryInformation !== null) {
        contents.AutomatedDiscoveryInformation = deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context);
    }
    if (output.ConsumedLicenseSummaryList !== undefined &&
        output.ConsumedLicenseSummaryList !== null) {
        contents.ConsumedLicenseSummaryList = deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context);
    }
    if (output.ConsumedLicenses !== undefined &&
        output.ConsumedLicenses !== null) {
        contents.ConsumedLicenses = output.ConsumedLicenses;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LicenseConfigurationArn !== undefined &&
        output.LicenseConfigurationArn !== null) {
        contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
    }
    if (output.LicenseConfigurationId !== undefined &&
        output.LicenseConfigurationId !== null) {
        contents.LicenseConfigurationId = output.LicenseConfigurationId;
    }
    if (output.LicenseCount !== undefined && output.LicenseCount !== null) {
        contents.LicenseCount = output.LicenseCount;
    }
    if (output.LicenseCountHardLimit !== undefined &&
        output.LicenseCountHardLimit !== null) {
        contents.LicenseCountHardLimit = output.LicenseCountHardLimit;
    }
    if (output.LicenseCountingType !== undefined &&
        output.LicenseCountingType !== null) {
        contents.LicenseCountingType = output.LicenseCountingType;
    }
    if (output.LicenseRules !== undefined && output.LicenseRules !== null) {
        contents.LicenseRules = deserializeAws_json1_1StringList(output.LicenseRules, context);
    }
    if (output.ManagedResourceSummaryList !== undefined &&
        output.ManagedResourceSummaryList !== null) {
        contents.ManagedResourceSummaryList = deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
        contents.OwnerAccountId = output.OwnerAccountId;
    }
    if (output.ProductInformationList !== undefined &&
        output.ProductInformationList !== null) {
        contents.ProductInformationList = deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServiceSettingsResponse = (output, context) => {
    let contents = {
        __type: "GetServiceSettingsResponse",
        EnableCrossAccountsDiscovery: undefined,
        LicenseManagerResourceShareArn: undefined,
        OrganizationConfiguration: undefined,
        S3BucketArn: undefined,
        SnsTopicArn: undefined
    };
    if (output.EnableCrossAccountsDiscovery !== undefined &&
        output.EnableCrossAccountsDiscovery !== null) {
        contents.EnableCrossAccountsDiscovery = output.EnableCrossAccountsDiscovery;
    }
    if (output.LicenseManagerResourceShareArn !== undefined &&
        output.LicenseManagerResourceShareArn !== null) {
        contents.LicenseManagerResourceShareArn =
            output.LicenseManagerResourceShareArn;
    }
    if (output.OrganizationConfiguration !== undefined &&
        output.OrganizationConfiguration !== null) {
        contents.OrganizationConfiguration = deserializeAws_json1_1OrganizationConfiguration(output.OrganizationConfiguration, context);
    }
    if (output.S3BucketArn !== undefined && output.S3BucketArn !== null) {
        contents.S3BucketArn = output.S3BucketArn;
    }
    if (output.SnsTopicArn !== undefined && output.SnsTopicArn !== null) {
        contents.SnsTopicArn = output.SnsTopicArn;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    let contents = {
        __type: "InvalidResourceStateException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LicenseConfiguration = (output, context) => {
    let contents = {
        __type: "LicenseConfiguration",
        AutomatedDiscoveryInformation: undefined,
        ConsumedLicenseSummaryList: undefined,
        ConsumedLicenses: undefined,
        Description: undefined,
        LicenseConfigurationArn: undefined,
        LicenseConfigurationId: undefined,
        LicenseCount: undefined,
        LicenseCountHardLimit: undefined,
        LicenseCountingType: undefined,
        LicenseRules: undefined,
        ManagedResourceSummaryList: undefined,
        Name: undefined,
        OwnerAccountId: undefined,
        ProductInformationList: undefined,
        Status: undefined
    };
    if (output.AutomatedDiscoveryInformation !== undefined &&
        output.AutomatedDiscoveryInformation !== null) {
        contents.AutomatedDiscoveryInformation = deserializeAws_json1_1AutomatedDiscoveryInformation(output.AutomatedDiscoveryInformation, context);
    }
    if (output.ConsumedLicenseSummaryList !== undefined &&
        output.ConsumedLicenseSummaryList !== null) {
        contents.ConsumedLicenseSummaryList = deserializeAws_json1_1ConsumedLicenseSummaryList(output.ConsumedLicenseSummaryList, context);
    }
    if (output.ConsumedLicenses !== undefined &&
        output.ConsumedLicenses !== null) {
        contents.ConsumedLicenses = output.ConsumedLicenses;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LicenseConfigurationArn !== undefined &&
        output.LicenseConfigurationArn !== null) {
        contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
    }
    if (output.LicenseConfigurationId !== undefined &&
        output.LicenseConfigurationId !== null) {
        contents.LicenseConfigurationId = output.LicenseConfigurationId;
    }
    if (output.LicenseCount !== undefined && output.LicenseCount !== null) {
        contents.LicenseCount = output.LicenseCount;
    }
    if (output.LicenseCountHardLimit !== undefined &&
        output.LicenseCountHardLimit !== null) {
        contents.LicenseCountHardLimit = output.LicenseCountHardLimit;
    }
    if (output.LicenseCountingType !== undefined &&
        output.LicenseCountingType !== null) {
        contents.LicenseCountingType = output.LicenseCountingType;
    }
    if (output.LicenseRules !== undefined && output.LicenseRules !== null) {
        contents.LicenseRules = deserializeAws_json1_1StringList(output.LicenseRules, context);
    }
    if (output.ManagedResourceSummaryList !== undefined &&
        output.ManagedResourceSummaryList !== null) {
        contents.ManagedResourceSummaryList = deserializeAws_json1_1ManagedResourceSummaryList(output.ManagedResourceSummaryList, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwnerAccountId !== undefined && output.OwnerAccountId !== null) {
        contents.OwnerAccountId = output.OwnerAccountId;
    }
    if (output.ProductInformationList !== undefined &&
        output.ProductInformationList !== null) {
        contents.ProductInformationList = deserializeAws_json1_1ProductInformationList(output.ProductInformationList, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1LicenseConfigurationAssociation = (output, context) => {
    let contents = {
        __type: "LicenseConfigurationAssociation",
        AssociationTime: undefined,
        ResourceArn: undefined,
        ResourceOwnerId: undefined,
        ResourceType: undefined
    };
    if (output.AssociationTime !== undefined && output.AssociationTime !== null) {
        contents.AssociationTime = new Date(Math.round(output.AssociationTime * 1000));
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
        contents.ResourceOwnerId = output.ResourceOwnerId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1LicenseConfigurationAssociations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LicenseConfigurationAssociation(entry, context));
};
const deserializeAws_json1_1LicenseConfigurationUsage = (output, context) => {
    let contents = {
        __type: "LicenseConfigurationUsage",
        AssociationTime: undefined,
        ConsumedLicenses: undefined,
        ResourceArn: undefined,
        ResourceOwnerId: undefined,
        ResourceStatus: undefined,
        ResourceType: undefined
    };
    if (output.AssociationTime !== undefined && output.AssociationTime !== null) {
        contents.AssociationTime = new Date(Math.round(output.AssociationTime * 1000));
    }
    if (output.ConsumedLicenses !== undefined &&
        output.ConsumedLicenses !== null) {
        contents.ConsumedLicenses = output.ConsumedLicenses;
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
        contents.ResourceOwnerId = output.ResourceOwnerId;
    }
    if (output.ResourceStatus !== undefined && output.ResourceStatus !== null) {
        contents.ResourceStatus = output.ResourceStatus;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1LicenseConfigurationUsageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LicenseConfigurationUsage(entry, context));
};
const deserializeAws_json1_1LicenseConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LicenseConfiguration(entry, context));
};
const deserializeAws_json1_1LicenseOperationFailure = (output, context) => {
    let contents = {
        __type: "LicenseOperationFailure",
        ErrorMessage: undefined,
        FailureTime: undefined,
        MetadataList: undefined,
        OperationName: undefined,
        OperationRequestedBy: undefined,
        ResourceArn: undefined,
        ResourceOwnerId: undefined,
        ResourceType: undefined
    };
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.FailureTime !== undefined && output.FailureTime !== null) {
        contents.FailureTime = new Date(Math.round(output.FailureTime * 1000));
    }
    if (output.MetadataList !== undefined && output.MetadataList !== null) {
        contents.MetadataList = deserializeAws_json1_1MetadataList(output.MetadataList, context);
    }
    if (output.OperationName !== undefined && output.OperationName !== null) {
        contents.OperationName = output.OperationName;
    }
    if (output.OperationRequestedBy !== undefined &&
        output.OperationRequestedBy !== null) {
        contents.OperationRequestedBy = output.OperationRequestedBy;
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.ResourceOwnerId !== undefined && output.ResourceOwnerId !== null) {
        contents.ResourceOwnerId = output.ResourceOwnerId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1LicenseOperationFailureList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LicenseOperationFailure(entry, context));
};
const deserializeAws_json1_1LicenseSpecification = (output, context) => {
    let contents = {
        __type: "LicenseSpecification",
        LicenseConfigurationArn: undefined
    };
    if (output.LicenseConfigurationArn !== undefined &&
        output.LicenseConfigurationArn !== null) {
        contents.LicenseConfigurationArn = output.LicenseConfigurationArn;
    }
    return contents;
};
const deserializeAws_json1_1LicenseSpecifications = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LicenseSpecification(entry, context));
};
const deserializeAws_json1_1LicenseUsageException = (output, context) => {
    let contents = {
        __type: "LicenseUsageException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAssociationsForLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "ListAssociationsForLicenseConfigurationResponse",
        LicenseConfigurationAssociations: undefined,
        NextToken: undefined
    };
    if (output.LicenseConfigurationAssociations !== undefined &&
        output.LicenseConfigurationAssociations !== null) {
        contents.LicenseConfigurationAssociations = deserializeAws_json1_1LicenseConfigurationAssociations(output.LicenseConfigurationAssociations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsResponse = (output, context) => {
    let contents = {
        __type: "ListFailuresForLicenseConfigurationOperationsResponse",
        LicenseOperationFailureList: undefined,
        NextToken: undefined
    };
    if (output.LicenseOperationFailureList !== undefined &&
        output.LicenseOperationFailureList !== null) {
        contents.LicenseOperationFailureList = deserializeAws_json1_1LicenseOperationFailureList(output.LicenseOperationFailureList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLicenseConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "ListLicenseConfigurationsResponse",
        LicenseConfigurations: undefined,
        NextToken: undefined
    };
    if (output.LicenseConfigurations !== undefined &&
        output.LicenseConfigurations !== null) {
        contents.LicenseConfigurations = deserializeAws_json1_1LicenseConfigurations(output.LicenseConfigurations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLicenseSpecificationsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListLicenseSpecificationsForResourceResponse",
        LicenseSpecifications: undefined,
        NextToken: undefined
    };
    if (output.LicenseSpecifications !== undefined &&
        output.LicenseSpecifications !== null) {
        contents.LicenseSpecifications = deserializeAws_json1_1LicenseSpecifications(output.LicenseSpecifications, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListResourceInventoryResponse = (output, context) => {
    let contents = {
        __type: "ListResourceInventoryResponse",
        NextToken: undefined,
        ResourceInventoryList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceInventoryList !== undefined &&
        output.ResourceInventoryList !== null) {
        contents.ResourceInventoryList = deserializeAws_json1_1ResourceInventoryList(output.ResourceInventoryList, context);
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
const deserializeAws_json1_1ListUsageForLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "ListUsageForLicenseConfigurationResponse",
        LicenseConfigurationUsageList: undefined,
        NextToken: undefined
    };
    if (output.LicenseConfigurationUsageList !== undefined &&
        output.LicenseConfigurationUsageList !== null) {
        contents.LicenseConfigurationUsageList = deserializeAws_json1_1LicenseConfigurationUsageList(output.LicenseConfigurationUsageList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ManagedResourceSummary = (output, context) => {
    let contents = {
        __type: "ManagedResourceSummary",
        AssociationCount: undefined,
        ResourceType: undefined
    };
    if (output.AssociationCount !== undefined &&
        output.AssociationCount !== null) {
        contents.AssociationCount = output.AssociationCount;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ManagedResourceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ManagedResourceSummary(entry, context));
};
const deserializeAws_json1_1Metadata = (output, context) => {
    let contents = {
        __type: "Metadata",
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
const deserializeAws_json1_1MetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Metadata(entry, context));
};
const deserializeAws_json1_1OrganizationConfiguration = (output, context) => {
    let contents = {
        __type: "OrganizationConfiguration",
        EnableIntegration: undefined
    };
    if (output.EnableIntegration !== undefined &&
        output.EnableIntegration !== null) {
        contents.EnableIntegration = output.EnableIntegration;
    }
    return contents;
};
const deserializeAws_json1_1ProductInformation = (output, context) => {
    let contents = {
        __type: "ProductInformation",
        ProductInformationFilterList: undefined,
        ResourceType: undefined
    };
    if (output.ProductInformationFilterList !== undefined &&
        output.ProductInformationFilterList !== null) {
        contents.ProductInformationFilterList = deserializeAws_json1_1ProductInformationFilterList(output.ProductInformationFilterList, context);
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ProductInformationFilter = (output, context) => {
    let contents = {
        __type: "ProductInformationFilter",
        ProductInformationFilterComparator: undefined,
        ProductInformationFilterName: undefined,
        ProductInformationFilterValue: undefined
    };
    if (output.ProductInformationFilterComparator !== undefined &&
        output.ProductInformationFilterComparator !== null) {
        contents.ProductInformationFilterComparator =
            output.ProductInformationFilterComparator;
    }
    if (output.ProductInformationFilterName !== undefined &&
        output.ProductInformationFilterName !== null) {
        contents.ProductInformationFilterName = output.ProductInformationFilterName;
    }
    if (output.ProductInformationFilterValue !== undefined &&
        output.ProductInformationFilterValue !== null) {
        contents.ProductInformationFilterValue = deserializeAws_json1_1StringList(output.ProductInformationFilterValue, context);
    }
    return contents;
};
const deserializeAws_json1_1ProductInformationFilterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductInformationFilter(entry, context));
};
const deserializeAws_json1_1ProductInformationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProductInformation(entry, context));
};
const deserializeAws_json1_1RateLimitExceededException = (output, context) => {
    let contents = {
        __type: "RateLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInventory = (output, context) => {
    let contents = {
        __type: "ResourceInventory",
        Platform: undefined,
        PlatformVersion: undefined,
        ResourceArn: undefined,
        ResourceId: undefined,
        ResourceOwningAccountId: undefined,
        ResourceType: undefined
    };
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.PlatformVersion !== undefined && output.PlatformVersion !== null) {
        contents.PlatformVersion = output.PlatformVersion;
    }
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceOwningAccountId !== undefined &&
        output.ResourceOwningAccountId !== null) {
        contents.ResourceOwningAccountId = output.ResourceOwningAccountId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInventoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceInventory(entry, context));
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ServerInternalException = (output, context) => {
    let contents = {
        __type: "ServerInternalException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateLicenseConfigurationResponse = (output, context) => {
    let contents = {
        __type: "UpdateLicenseConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateLicenseSpecificationsForResourceResponse = (output, context) => {
    let contents = {
        __type: "UpdateLicenseSpecificationsForResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateServiceSettingsResponse = (output, context) => {
    let contents = {
        __type: "UpdateServiceSettingsResponse"
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