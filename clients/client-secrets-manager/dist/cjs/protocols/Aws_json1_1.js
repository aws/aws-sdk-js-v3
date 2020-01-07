"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1CancelRotateSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.CancelRotateSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelRotateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelRotateSecretCommand = serializeAws_json1_1CancelRotateSecretCommand;
async function serializeAws_json1_1CreateSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.CreateSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSecretCommand = serializeAws_json1_1CreateSecretCommand;
async function serializeAws_json1_1DeleteResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.DeleteResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
async function serializeAws_json1_1DeleteSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.DeleteSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSecretCommand = serializeAws_json1_1DeleteSecretCommand;
async function serializeAws_json1_1DescribeSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.DescribeSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSecretCommand = serializeAws_json1_1DescribeSecretCommand;
async function serializeAws_json1_1GetRandomPasswordCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.GetRandomPassword";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRandomPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRandomPasswordCommand = serializeAws_json1_1GetRandomPasswordCommand;
async function serializeAws_json1_1GetResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.GetResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
async function serializeAws_json1_1GetSecretValueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.GetSecretValue";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecretValueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSecretValueCommand = serializeAws_json1_1GetSecretValueCommand;
async function serializeAws_json1_1ListSecretVersionIdsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.ListSecretVersionIds";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecretVersionIdsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSecretVersionIdsCommand = serializeAws_json1_1ListSecretVersionIdsCommand;
async function serializeAws_json1_1ListSecretsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.ListSecrets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecretsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSecretsCommand = serializeAws_json1_1ListSecretsCommand;
async function serializeAws_json1_1PutResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.PutResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
async function serializeAws_json1_1PutSecretValueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.PutSecretValue";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutSecretValueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutSecretValueCommand = serializeAws_json1_1PutSecretValueCommand;
async function serializeAws_json1_1RestoreSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.RestoreSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreSecretCommand = serializeAws_json1_1RestoreSecretCommand;
async function serializeAws_json1_1RotateSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.RotateSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1RotateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RotateSecretCommand = serializeAws_json1_1RotateSecretCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateSecretCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.UpdateSecret";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSecretRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSecretCommand = serializeAws_json1_1UpdateSecretCommand;
async function serializeAws_json1_1UpdateSecretVersionStageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "secretsmanager.UpdateSecretVersionStage";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSecretVersionStageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateSecretVersionStageCommand = serializeAws_json1_1UpdateSecretVersionStageCommand;
async function deserializeAws_json1_1CancelRotateSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelRotateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelRotateSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelRotateSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelRotateSecretCommand = deserializeAws_json1_1CancelRotateSecretCommand;
async function deserializeAws_json1_1CancelRotateSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSecretCommand = deserializeAws_json1_1CreateSecretCommand;
async function deserializeAws_json1_1CreateSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazon.AWSMimirService#EncryptionFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSMimirService#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.AWSMimirService#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazon.AWSMimirService#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazon.AWSMimirService#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
async function deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSecretCommand = deserializeAws_json1_1DeleteSecretCommand;
async function deserializeAws_json1_1DeleteSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSecretCommand = deserializeAws_json1_1DescribeSecretCommand;
async function deserializeAws_json1_1DescribeSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetRandomPasswordCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRandomPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRandomPasswordResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRandomPasswordResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRandomPasswordCommand = deserializeAws_json1_1GetRandomPasswordCommand;
async function deserializeAws_json1_1GetRandomPasswordCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
async function deserializeAws_json1_1GetResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetSecretValueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSecretValueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecretValueResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSecretValueResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSecretValueCommand = deserializeAws_json1_1GetSecretValueCommand;
async function deserializeAws_json1_1GetSecretValueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DecryptionFailure":
        case "com.amazon.AWSMimirService#DecryptionFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DecryptionFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListSecretVersionIdsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSecretVersionIdsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecretVersionIdsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSecretVersionIdsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSecretVersionIdsCommand = deserializeAws_json1_1ListSecretVersionIdsCommand;
async function deserializeAws_json1_1ListSecretVersionIdsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazon.AWSMimirService#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListSecretsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSecretsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecretsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSecretsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSecretsCommand = deserializeAws_json1_1ListSecretsCommand;
async function deserializeAws_json1_1ListSecretsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazon.AWSMimirService#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
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
async function deserializeAws_json1_1PutResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
async function deserializeAws_json1_1PutResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.AWSMimirService#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1PutSecretValueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutSecretValueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutSecretValueResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutSecretValueResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutSecretValueCommand = deserializeAws_json1_1PutSecretValueCommand;
async function deserializeAws_json1_1PutSecretValueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazon.AWSMimirService#EncryptionFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSMimirService#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazon.AWSMimirService#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1RestoreSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreSecretCommand = deserializeAws_json1_1RestoreSecretCommand;
async function deserializeAws_json1_1RestoreSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1RotateSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RotateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RotateSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RotateSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RotateSecretCommand = deserializeAws_json1_1RotateSecretCommand;
async function deserializeAws_json1_1RotateSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateSecretCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSecretCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSecretResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSecretResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSecretCommand = deserializeAws_json1_1UpdateSecretCommand;
async function deserializeAws_json1_1UpdateSecretCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EncryptionFailure":
        case "com.amazon.AWSMimirService#EncryptionFailure":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSMimirService#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.AWSMimirService#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreconditionNotMetException":
        case "com.amazon.AWSMimirService#PreconditionNotMetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceExistsException":
        case "com.amazon.AWSMimirService#ResourceExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateSecretVersionStageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateSecretVersionStageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSecretVersionStageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateSecretVersionStageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateSecretVersionStageCommand = deserializeAws_json1_1UpdateSecretVersionStageCommand;
async function deserializeAws_json1_1UpdateSecretVersionStageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.AWSMimirService#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.AWSMimirService#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.AWSMimirService#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.AWSMimirService#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.AWSMimirService#ResourceNotFoundException":
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
const deserializeAws_json1_1DecryptionFailureResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DecryptionFailure(body, context);
    const contents = Object.assign({ name: "DecryptionFailure", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EncryptionFailureResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EncryptionFailure(body, context);
    const contents = Object.assign({ name: "EncryptionFailure", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = Object.assign({ name: "InternalServiceError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = Object.assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreconditionNotMetException(body, context);
    const contents = Object.assign({ name: "PreconditionNotMetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceExistsException(body, context);
    const contents = Object.assign({ name: "ResourceExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CancelRotateSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SecretBinary !== undefined) {
        bodyParams["SecretBinary"] = Buffer.from(input.SecretBinary).toString("utf-8");
    }
    if (input.SecretString !== undefined) {
        bodyParams["SecretString"] = input.SecretString;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagListType(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForceDeleteWithoutRecovery !== undefined) {
        bodyParams["ForceDeleteWithoutRecovery"] = input.ForceDeleteWithoutRecovery;
    }
    if (input.RecoveryWindowInDays !== undefined) {
        bodyParams["RecoveryWindowInDays"] = input.RecoveryWindowInDays;
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetRandomPasswordRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExcludeCharacters !== undefined) {
        bodyParams["ExcludeCharacters"] = input.ExcludeCharacters;
    }
    if (input.ExcludeLowercase !== undefined) {
        bodyParams["ExcludeLowercase"] = input.ExcludeLowercase;
    }
    if (input.ExcludeNumbers !== undefined) {
        bodyParams["ExcludeNumbers"] = input.ExcludeNumbers;
    }
    if (input.ExcludePunctuation !== undefined) {
        bodyParams["ExcludePunctuation"] = input.ExcludePunctuation;
    }
    if (input.ExcludeUppercase !== undefined) {
        bodyParams["ExcludeUppercase"] = input.ExcludeUppercase;
    }
    if (input.IncludeSpace !== undefined) {
        bodyParams["IncludeSpace"] = input.IncludeSpace;
    }
    if (input.PasswordLength !== undefined) {
        bodyParams["PasswordLength"] = input.PasswordLength;
    }
    if (input.RequireEachIncludedType !== undefined) {
        bodyParams["RequireEachIncludedType"] = input.RequireEachIncludedType;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSecretValueRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.VersionId !== undefined) {
        bodyParams["VersionId"] = input.VersionId;
    }
    if (input.VersionStage !== undefined) {
        bodyParams["VersionStage"] = input.VersionStage;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSecretVersionIdsRequest = (input, context) => {
    const bodyParams = {};
    if (input.IncludeDeprecated !== undefined) {
        bodyParams["IncludeDeprecated"] = input.IncludeDeprecated;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSecretsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourcePolicy !== undefined) {
        bodyParams["ResourcePolicy"] = input.ResourcePolicy;
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutSecretValueRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.SecretBinary !== undefined) {
        bodyParams["SecretBinary"] = Buffer.from(input.SecretBinary).toString("utf-8");
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.SecretString !== undefined) {
        bodyParams["SecretString"] = input.SecretString;
    }
    if (input.VersionStages !== undefined) {
        bodyParams["VersionStages"] = serializeAws_json1_1SecretVersionStagesType(input.VersionStages, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RestoreSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1RotateSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.RotationLambdaARN !== undefined) {
        bodyParams["RotationLambdaARN"] = input.RotationLambdaARN;
    }
    if (input.RotationRules !== undefined) {
        bodyParams["RotationRules"] = serializeAws_json1_1RotationRulesType(input.RotationRules, context);
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    return bodyParams;
};
const serializeAws_json1_1RotationRulesType = (input, context) => {
    const bodyParams = {};
    if (input.AutomaticallyAfterDays !== undefined) {
        bodyParams["AutomaticallyAfterDays"] = input.AutomaticallyAfterDays;
    }
    return bodyParams;
};
const serializeAws_json1_1SecretVersionStagesType = (input, context) => {
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
const serializeAws_json1_1TagKeyListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagListType = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagListType(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyListType(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSecretRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.SecretBinary !== undefined) {
        bodyParams["SecretBinary"] = Buffer.from(input.SecretBinary).toString("utf-8");
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.SecretString !== undefined) {
        bodyParams["SecretString"] = input.SecretString;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateSecretVersionStageRequest = (input, context) => {
    const bodyParams = {};
    if (input.MoveToVersionId !== undefined) {
        bodyParams["MoveToVersionId"] = input.MoveToVersionId;
    }
    if (input.RemoveFromVersionId !== undefined) {
        bodyParams["RemoveFromVersionId"] = input.RemoveFromVersionId;
    }
    if (input.SecretId !== undefined) {
        bodyParams["SecretId"] = input.SecretId;
    }
    if (input.VersionStage !== undefined) {
        bodyParams["VersionStage"] = input.VersionStage;
    }
    return bodyParams;
};
const deserializeAws_json1_1CancelRotateSecretResponse = (output, context) => {
    let contents = {
        __type: "CancelRotateSecretResponse",
        ARN: undefined,
        Name: undefined,
        VersionId: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1CreateSecretResponse = (output, context) => {
    let contents = {
        __type: "CreateSecretResponse",
        ARN: undefined,
        Name: undefined,
        VersionId: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1DecryptionFailure = (output, context) => {
    let contents = {
        __type: "DecryptionFailure",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DeleteResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteResourcePolicyResponse",
        ARN: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeleteSecretResponse = (output, context) => {
    let contents = {
        __type: "DeleteSecretResponse",
        ARN: undefined,
        DeletionDate: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
        contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DescribeSecretResponse = (output, context) => {
    let contents = {
        __type: "DescribeSecretResponse",
        ARN: undefined,
        DeletedDate: undefined,
        Description: undefined,
        KmsKeyId: undefined,
        LastAccessedDate: undefined,
        LastChangedDate: undefined,
        LastRotatedDate: undefined,
        Name: undefined,
        OwningService: undefined,
        RotationEnabled: undefined,
        RotationLambdaARN: undefined,
        RotationRules: undefined,
        Tags: undefined,
        VersionIdsToStages: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.DeletedDate !== undefined && output.DeletedDate !== null) {
        contents.DeletedDate = new Date(Math.round(output.DeletedDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LastAccessedDate !== undefined &&
        output.LastAccessedDate !== null) {
        contents.LastAccessedDate = new Date(Math.round(output.LastAccessedDate * 1000));
    }
    if (output.LastChangedDate !== undefined && output.LastChangedDate !== null) {
        contents.LastChangedDate = new Date(Math.round(output.LastChangedDate * 1000));
    }
    if (output.LastRotatedDate !== undefined && output.LastRotatedDate !== null) {
        contents.LastRotatedDate = new Date(Math.round(output.LastRotatedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwningService !== undefined && output.OwningService !== null) {
        contents.OwningService = output.OwningService;
    }
    if (output.RotationEnabled !== undefined && output.RotationEnabled !== null) {
        contents.RotationEnabled = output.RotationEnabled;
    }
    if (output.RotationLambdaARN !== undefined &&
        output.RotationLambdaARN !== null) {
        contents.RotationLambdaARN = output.RotationLambdaARN;
    }
    if (output.RotationRules !== undefined && output.RotationRules !== null) {
        contents.RotationRules = deserializeAws_json1_1RotationRulesType(output.RotationRules, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagListType(output.Tags, context);
    }
    if (output.VersionIdsToStages !== undefined &&
        output.VersionIdsToStages !== null) {
        contents.VersionIdsToStages = deserializeAws_json1_1SecretVersionsToStagesMapType(output.VersionIdsToStages, context);
    }
    return contents;
};
const deserializeAws_json1_1EncryptionFailure = (output, context) => {
    let contents = {
        __type: "EncryptionFailure",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GetRandomPasswordResponse = (output, context) => {
    let contents = {
        __type: "GetRandomPasswordResponse",
        RandomPassword: undefined
    };
    if (output.RandomPassword !== undefined && output.RandomPassword !== null) {
        contents.RandomPassword = output.RandomPassword;
    }
    return contents;
};
const deserializeAws_json1_1GetResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "GetResourcePolicyResponse",
        ARN: undefined,
        Name: undefined,
        ResourcePolicy: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ResourcePolicy !== undefined && output.ResourcePolicy !== null) {
        contents.ResourcePolicy = output.ResourcePolicy;
    }
    return contents;
};
const deserializeAws_json1_1GetSecretValueResponse = (output, context) => {
    let contents = {
        __type: "GetSecretValueResponse",
        ARN: undefined,
        CreatedDate: undefined,
        Name: undefined,
        SecretBinary: undefined,
        SecretString: undefined,
        VersionId: undefined,
        VersionStages: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SecretBinary !== undefined && output.SecretBinary !== null) {
        contents.SecretBinary = Uint8Array.from(output.SecretBinary);
    }
    if (output.SecretString !== undefined && output.SecretString !== null) {
        contents.SecretString = output.SecretString;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    if (output.VersionStages !== undefined && output.VersionStages !== null) {
        contents.VersionStages = deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context);
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    let contents = {
        __type: "InternalServiceError",
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
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
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
const deserializeAws_json1_1ListSecretVersionIdsResponse = (output, context) => {
    let contents = {
        __type: "ListSecretVersionIdsResponse",
        ARN: undefined,
        Name: undefined,
        NextToken: undefined,
        Versions: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Versions !== undefined && output.Versions !== null) {
        contents.Versions = deserializeAws_json1_1SecretVersionsListType(output.Versions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSecretsResponse = (output, context) => {
    let contents = {
        __type: "ListSecretsResponse",
        NextToken: undefined,
        SecretList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SecretList !== undefined && output.SecretList !== null) {
        contents.SecretList = deserializeAws_json1_1SecretListType(output.SecretList, context);
    }
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    let contents = {
        __type: "MalformedPolicyDocumentException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PreconditionNotMetException = (output, context) => {
    let contents = {
        __type: "PreconditionNotMetException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "PutResourcePolicyResponse",
        ARN: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1PutSecretValueResponse = (output, context) => {
    let contents = {
        __type: "PutSecretValueResponse",
        ARN: undefined,
        Name: undefined,
        VersionId: undefined,
        VersionStages: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    if (output.VersionStages !== undefined && output.VersionStages !== null) {
        contents.VersionStages = deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    let contents = {
        __type: "ResourceExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1RestoreSecretResponse = (output, context) => {
    let contents = {
        __type: "RestoreSecretResponse",
        ARN: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1RotateSecretResponse = (output, context) => {
    let contents = {
        __type: "RotateSecretResponse",
        ARN: undefined,
        Name: undefined,
        VersionId: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1RotationRulesType = (output, context) => {
    let contents = {
        __type: "RotationRulesType",
        AutomaticallyAfterDays: undefined
    };
    if (output.AutomaticallyAfterDays !== undefined &&
        output.AutomaticallyAfterDays !== null) {
        contents.AutomaticallyAfterDays = output.AutomaticallyAfterDays;
    }
    return contents;
};
const deserializeAws_json1_1SecretListEntry = (output, context) => {
    let contents = {
        __type: "SecretListEntry",
        ARN: undefined,
        DeletedDate: undefined,
        Description: undefined,
        KmsKeyId: undefined,
        LastAccessedDate: undefined,
        LastChangedDate: undefined,
        LastRotatedDate: undefined,
        Name: undefined,
        OwningService: undefined,
        RotationEnabled: undefined,
        RotationLambdaARN: undefined,
        RotationRules: undefined,
        SecretVersionsToStages: undefined,
        Tags: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.DeletedDate !== undefined && output.DeletedDate !== null) {
        contents.DeletedDate = new Date(Math.round(output.DeletedDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LastAccessedDate !== undefined &&
        output.LastAccessedDate !== null) {
        contents.LastAccessedDate = new Date(Math.round(output.LastAccessedDate * 1000));
    }
    if (output.LastChangedDate !== undefined && output.LastChangedDate !== null) {
        contents.LastChangedDate = new Date(Math.round(output.LastChangedDate * 1000));
    }
    if (output.LastRotatedDate !== undefined && output.LastRotatedDate !== null) {
        contents.LastRotatedDate = new Date(Math.round(output.LastRotatedDate * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OwningService !== undefined && output.OwningService !== null) {
        contents.OwningService = output.OwningService;
    }
    if (output.RotationEnabled !== undefined && output.RotationEnabled !== null) {
        contents.RotationEnabled = output.RotationEnabled;
    }
    if (output.RotationLambdaARN !== undefined &&
        output.RotationLambdaARN !== null) {
        contents.RotationLambdaARN = output.RotationLambdaARN;
    }
    if (output.RotationRules !== undefined && output.RotationRules !== null) {
        contents.RotationRules = deserializeAws_json1_1RotationRulesType(output.RotationRules, context);
    }
    if (output.SecretVersionsToStages !== undefined &&
        output.SecretVersionsToStages !== null) {
        contents.SecretVersionsToStages = deserializeAws_json1_1SecretVersionsToStagesMapType(output.SecretVersionsToStages, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagListType(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1SecretListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecretListEntry(entry, context));
};
const deserializeAws_json1_1SecretVersionStagesType = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SecretVersionsListEntry = (output, context) => {
    let contents = {
        __type: "SecretVersionsListEntry",
        CreatedDate: undefined,
        LastAccessedDate: undefined,
        VersionId: undefined,
        VersionStages: undefined
    };
    if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
        contents.CreatedDate = new Date(Math.round(output.CreatedDate * 1000));
    }
    if (output.LastAccessedDate !== undefined &&
        output.LastAccessedDate !== null) {
        contents.LastAccessedDate = new Date(Math.round(output.LastAccessedDate * 1000));
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    if (output.VersionStages !== undefined && output.VersionStages !== null) {
        contents.VersionStages = deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context);
    }
    return contents;
};
const deserializeAws_json1_1SecretVersionsListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecretVersionsListEntry(entry, context));
};
const deserializeAws_json1_1SecretVersionsToStagesMapType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1SecretVersionStagesType(output[key], context);
    });
    return mapParams;
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
const deserializeAws_json1_1TagListType = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1UpdateSecretResponse = (output, context) => {
    let contents = {
        __type: "UpdateSecretResponse",
        ARN: undefined,
        Name: undefined,
        VersionId: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateSecretVersionStageResponse = (output, context) => {
    let contents = {
        __type: "UpdateSecretVersionStageResponse",
        ARN: undefined,
        Name: undefined
    };
    if (output.ARN !== undefined && output.ARN !== null) {
        contents.ARN = output.ARN;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
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