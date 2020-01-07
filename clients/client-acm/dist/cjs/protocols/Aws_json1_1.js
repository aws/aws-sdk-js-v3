"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsToCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.AddTagsToCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToCertificateCommand = serializeAws_json1_1AddTagsToCertificateCommand;
async function serializeAws_json1_1DeleteCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.DeleteCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCertificateCommand = serializeAws_json1_1DeleteCertificateCommand;
async function serializeAws_json1_1DescribeCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.DescribeCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCertificateCommand = serializeAws_json1_1DescribeCertificateCommand;
async function serializeAws_json1_1ExportCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.ExportCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ExportCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ExportCertificateCommand = serializeAws_json1_1ExportCertificateCommand;
async function serializeAws_json1_1GetCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.GetCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCertificateCommand = serializeAws_json1_1GetCertificateCommand;
async function serializeAws_json1_1ImportCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.ImportCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportCertificateCommand = serializeAws_json1_1ImportCertificateCommand;
async function serializeAws_json1_1ListCertificatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.ListCertificates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCertificatesCommand = serializeAws_json1_1ListCertificatesCommand;
async function serializeAws_json1_1ListTagsForCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.ListTagsForCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForCertificateCommand = serializeAws_json1_1ListTagsForCertificateCommand;
async function serializeAws_json1_1RemoveTagsFromCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.RemoveTagsFromCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromCertificateCommand = serializeAws_json1_1RemoveTagsFromCertificateCommand;
async function serializeAws_json1_1RenewCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.RenewCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RenewCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RenewCertificateCommand = serializeAws_json1_1RenewCertificateCommand;
async function serializeAws_json1_1RequestCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.RequestCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RequestCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RequestCertificateCommand = serializeAws_json1_1RequestCertificateCommand;
async function serializeAws_json1_1ResendValidationEmailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.ResendValidationEmail";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResendValidationEmailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResendValidationEmailCommand = serializeAws_json1_1ResendValidationEmailCommand;
async function serializeAws_json1_1UpdateCertificateOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CertificateManager.UpdateCertificateOptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCertificateOptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCertificateOptionsCommand = serializeAws_json1_1UpdateCertificateOptionsCommand;
async function deserializeAws_json1_1AddTagsToCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsToCertificateCommand = deserializeAws_json1_1AddTagsToCertificateCommand;
async function deserializeAws_json1_1AddTagsToCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.certificatemanager#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.certificatemanager#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.certificatemanager#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.certificatemanager#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCertificateCommand = deserializeAws_json1_1DeleteCertificateCommand;
async function deserializeAws_json1_1DeleteCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazon.certificatemanager#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCertificateCommand = deserializeAws_json1_1DescribeCertificateCommand;
async function deserializeAws_json1_1DescribeCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1ExportCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExportCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExportCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExportCertificateCommand = deserializeAws_json1_1ExportCertificateCommand;
async function deserializeAws_json1_1ExportCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazon.certificatemanager#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCertificateCommand = deserializeAws_json1_1GetCertificateCommand;
async function deserializeAws_json1_1GetCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazon.certificatemanager#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1ImportCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportCertificateCommand = deserializeAws_json1_1ImportCertificateCommand;
async function deserializeAws_json1_1ImportCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazon.certificatemanager#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.certificatemanager#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.certificatemanager#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.certificatemanager#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.certificatemanager#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCertificatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCertificatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCertificatesCommand = deserializeAws_json1_1ListCertificatesCommand;
async function deserializeAws_json1_1ListCertificatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgsException":
        case "com.amazon.certificatemanager#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsForCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForCertificateCommand = deserializeAws_json1_1ListTagsForCertificateCommand;
async function deserializeAws_json1_1ListTagsForCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1RemoveTagsFromCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsFromCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsFromCertificateCommand = deserializeAws_json1_1RemoveTagsFromCertificateCommand;
async function deserializeAws_json1_1RemoveTagsFromCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.certificatemanager#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.certificatemanager#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.certificatemanager#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RenewCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RenewCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RenewCertificateCommand = deserializeAws_json1_1RenewCertificateCommand;
async function deserializeAws_json1_1RenewCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1RequestCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RequestCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RequestCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RequestCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RequestCertificateCommand = deserializeAws_json1_1RequestCertificateCommand;
async function deserializeAws_json1_1RequestCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDomainValidationOptionsException":
        case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazon.certificatemanager#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.certificatemanager#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.certificatemanager#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagPolicyException":
        case "com.amazon.certificatemanager#TagPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazon.certificatemanager#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResendValidationEmailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResendValidationEmailCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResendValidationEmailCommand = deserializeAws_json1_1ResendValidationEmailCommand;
async function deserializeAws_json1_1ResendValidationEmailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDomainValidationOptionsException":
        case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazon.certificatemanager#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateCertificateOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCertificateOptionsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCertificateOptionsCommand = deserializeAws_json1_1UpdateCertificateOptionsCommand;
async function deserializeAws_json1_1UpdateCertificateOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.certificatemanager#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazon.certificatemanager#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.certificatemanager#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.certificatemanager#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidArgsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgsException(body, context);
    const contents = Object.assign({ name: "InvalidArgsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = Object.assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDomainValidationOptionsException(body, context);
    const contents = Object.assign({ name: "InvalidDomainValidationOptionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = Object.assign({ name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = Object.assign({ name: "InvalidTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RequestInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestInProgressException(body, context);
    const contents = Object.assign({ name: "RequestInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
    const contents = Object.assign({ name: "TagPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsToCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CertificateOptions = (input, context) => {
    const bodyParams = {};
    if (input.CertificateTransparencyLoggingPreference !== undefined) {
        bodyParams["CertificateTransparencyLoggingPreference"] =
            input.CertificateTransparencyLoggingPreference;
    }
    return bodyParams;
};
const serializeAws_json1_1CertificateStatuses = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DomainList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DomainValidationOption = (input, context) => {
    const bodyParams = {};
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.ValidationDomain !== undefined) {
        bodyParams["ValidationDomain"] = input.ValidationDomain;
    }
    return bodyParams;
};
const serializeAws_json1_1DomainValidationOptionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DomainValidationOption(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ExportCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Passphrase !== undefined) {
        bodyParams["Passphrase"] = Buffer.from(input.Passphrase).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1ExtendedKeyUsageFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filters = (input, context) => {
    const bodyParams = {};
    if (input.extendedKeyUsage !== undefined) {
        bodyParams["extendedKeyUsage"] = serializeAws_json1_1ExtendedKeyUsageFilterList(input.extendedKeyUsage, context);
    }
    if (input.keyTypes !== undefined) {
        bodyParams["keyTypes"] = serializeAws_json1_1KeyAlgorithmList(input.keyTypes, context);
    }
    if (input.keyUsage !== undefined) {
        bodyParams["keyUsage"] = serializeAws_json1_1KeyUsageFilterList(input.keyUsage, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.Certificate !== undefined) {
        bodyParams["Certificate"] = Buffer.from(input.Certificate).toString("utf-8");
    }
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.CertificateChain !== undefined) {
        bodyParams["CertificateChain"] = Buffer.from(input.CertificateChain).toString("utf-8");
    }
    if (input.PrivateKey !== undefined) {
        bodyParams["PrivateKey"] = Buffer.from(input.PrivateKey).toString("utf-8");
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1KeyAlgorithmList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1KeyUsageFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListCertificatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateStatuses !== undefined) {
        bodyParams["CertificateStatuses"] = serializeAws_json1_1CertificateStatuses(input.CertificateStatuses, context);
    }
    if (input.Includes !== undefined) {
        bodyParams["Includes"] = serializeAws_json1_1Filters(input.Includes, context);
    }
    if (input.MaxItems !== undefined) {
        bodyParams["MaxItems"] = input.MaxItems;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RenewCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RequestCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.DomainName !== undefined) {
        bodyParams["DomainName"] = input.DomainName;
    }
    if (input.DomainValidationOptions !== undefined) {
        bodyParams["DomainValidationOptions"] = serializeAws_json1_1DomainValidationOptionList(input.DomainValidationOptions, context);
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.Options !== undefined) {
        bodyParams["Options"] = serializeAws_json1_1CertificateOptions(input.Options, context);
    }
    if (input.SubjectAlternativeNames !== undefined) {
        bodyParams["SubjectAlternativeNames"] = serializeAws_json1_1DomainList(input.SubjectAlternativeNames, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.ValidationMethod !== undefined) {
        bodyParams["ValidationMethod"] = input.ValidationMethod;
    }
    return bodyParams;
};
const serializeAws_json1_1ResendValidationEmailRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.ValidationDomain !== undefined) {
        bodyParams["ValidationDomain"] = input.ValidationDomain;
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
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UpdateCertificateOptionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.Options !== undefined) {
        bodyParams["Options"] = serializeAws_json1_1CertificateOptions(input.Options, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1CertificateDetail = (output, context) => {
    let contents = {
        __type: "CertificateDetail",
        CertificateArn: undefined,
        CertificateAuthorityArn: undefined,
        CreatedAt: undefined,
        DomainName: undefined,
        DomainValidationOptions: undefined,
        ExtendedKeyUsages: undefined,
        FailureReason: undefined,
        ImportedAt: undefined,
        InUseBy: undefined,
        IssuedAt: undefined,
        Issuer: undefined,
        KeyAlgorithm: undefined,
        KeyUsages: undefined,
        NotAfter: undefined,
        NotBefore: undefined,
        Options: undefined,
        RenewalEligibility: undefined,
        RenewalSummary: undefined,
        RevocationReason: undefined,
        RevokedAt: undefined,
        Serial: undefined,
        SignatureAlgorithm: undefined,
        Status: undefined,
        Subject: undefined,
        SubjectAlternativeNames: undefined,
        Type: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.CertificateAuthorityArn !== undefined &&
        output.CertificateAuthorityArn !== null) {
        contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.DomainValidationOptions !== undefined &&
        output.DomainValidationOptions !== null) {
        contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context);
    }
    if (output.ExtendedKeyUsages !== undefined &&
        output.ExtendedKeyUsages !== null) {
        contents.ExtendedKeyUsages = deserializeAws_json1_1ExtendedKeyUsageList(output.ExtendedKeyUsages, context);
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.ImportedAt !== undefined && output.ImportedAt !== null) {
        contents.ImportedAt = new Date(Math.round(output.ImportedAt * 1000));
    }
    if (output.InUseBy !== undefined && output.InUseBy !== null) {
        contents.InUseBy = deserializeAws_json1_1InUseList(output.InUseBy, context);
    }
    if (output.IssuedAt !== undefined && output.IssuedAt !== null) {
        contents.IssuedAt = new Date(Math.round(output.IssuedAt * 1000));
    }
    if (output.Issuer !== undefined && output.Issuer !== null) {
        contents.Issuer = output.Issuer;
    }
    if (output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null) {
        contents.KeyAlgorithm = output.KeyAlgorithm;
    }
    if (output.KeyUsages !== undefined && output.KeyUsages !== null) {
        contents.KeyUsages = deserializeAws_json1_1KeyUsageList(output.KeyUsages, context);
    }
    if (output.NotAfter !== undefined && output.NotAfter !== null) {
        contents.NotAfter = new Date(Math.round(output.NotAfter * 1000));
    }
    if (output.NotBefore !== undefined && output.NotBefore !== null) {
        contents.NotBefore = new Date(Math.round(output.NotBefore * 1000));
    }
    if (output.Options !== undefined && output.Options !== null) {
        contents.Options = deserializeAws_json1_1CertificateOptions(output.Options, context);
    }
    if (output.RenewalEligibility !== undefined &&
        output.RenewalEligibility !== null) {
        contents.RenewalEligibility = output.RenewalEligibility;
    }
    if (output.RenewalSummary !== undefined && output.RenewalSummary !== null) {
        contents.RenewalSummary = deserializeAws_json1_1RenewalSummary(output.RenewalSummary, context);
    }
    if (output.RevocationReason !== undefined &&
        output.RevocationReason !== null) {
        contents.RevocationReason = output.RevocationReason;
    }
    if (output.RevokedAt !== undefined && output.RevokedAt !== null) {
        contents.RevokedAt = new Date(Math.round(output.RevokedAt * 1000));
    }
    if (output.Serial !== undefined && output.Serial !== null) {
        contents.Serial = output.Serial;
    }
    if (output.SignatureAlgorithm !== undefined &&
        output.SignatureAlgorithm !== null) {
        contents.SignatureAlgorithm = output.SignatureAlgorithm;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Subject !== undefined && output.Subject !== null) {
        contents.Subject = output.Subject;
    }
    if (output.SubjectAlternativeNames !== undefined &&
        output.SubjectAlternativeNames !== null) {
        contents.SubjectAlternativeNames = deserializeAws_json1_1DomainList(output.SubjectAlternativeNames, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1CertificateOptions = (output, context) => {
    let contents = {
        __type: "CertificateOptions",
        CertificateTransparencyLoggingPreference: undefined
    };
    if (output.CertificateTransparencyLoggingPreference !== undefined &&
        output.CertificateTransparencyLoggingPreference !== null) {
        contents.CertificateTransparencyLoggingPreference =
            output.CertificateTransparencyLoggingPreference;
    }
    return contents;
};
const deserializeAws_json1_1CertificateSummary = (output, context) => {
    let contents = {
        __type: "CertificateSummary",
        CertificateArn: undefined,
        DomainName: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    return contents;
};
const deserializeAws_json1_1CertificateSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CertificateSummary(entry, context));
};
const deserializeAws_json1_1DescribeCertificateResponse = (output, context) => {
    let contents = {
        __type: "DescribeCertificateResponse",
        Certificate: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = deserializeAws_json1_1CertificateDetail(output.Certificate, context);
    }
    return contents;
};
const deserializeAws_json1_1DomainList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DomainValidation = (output, context) => {
    let contents = {
        __type: "DomainValidation",
        DomainName: undefined,
        ResourceRecord: undefined,
        ValidationDomain: undefined,
        ValidationEmails: undefined,
        ValidationMethod: undefined,
        ValidationStatus: undefined
    };
    if (output.DomainName !== undefined && output.DomainName !== null) {
        contents.DomainName = output.DomainName;
    }
    if (output.ResourceRecord !== undefined && output.ResourceRecord !== null) {
        contents.ResourceRecord = deserializeAws_json1_1ResourceRecord(output.ResourceRecord, context);
    }
    if (output.ValidationDomain !== undefined &&
        output.ValidationDomain !== null) {
        contents.ValidationDomain = output.ValidationDomain;
    }
    if (output.ValidationEmails !== undefined &&
        output.ValidationEmails !== null) {
        contents.ValidationEmails = deserializeAws_json1_1ValidationEmailList(output.ValidationEmails, context);
    }
    if (output.ValidationMethod !== undefined &&
        output.ValidationMethod !== null) {
        contents.ValidationMethod = output.ValidationMethod;
    }
    if (output.ValidationStatus !== undefined &&
        output.ValidationStatus !== null) {
        contents.ValidationStatus = output.ValidationStatus;
    }
    return contents;
};
const deserializeAws_json1_1DomainValidationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DomainValidation(entry, context));
};
const deserializeAws_json1_1ExportCertificateResponse = (output, context) => {
    let contents = {
        __type: "ExportCertificateResponse",
        Certificate: undefined,
        CertificateChain: undefined,
        PrivateKey: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = output.Certificate;
    }
    if (output.CertificateChain !== undefined &&
        output.CertificateChain !== null) {
        contents.CertificateChain = output.CertificateChain;
    }
    if (output.PrivateKey !== undefined && output.PrivateKey !== null) {
        contents.PrivateKey = output.PrivateKey;
    }
    return contents;
};
const deserializeAws_json1_1ExtendedKeyUsage = (output, context) => {
    let contents = {
        __type: "ExtendedKeyUsage",
        Name: undefined,
        OID: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OID !== undefined && output.OID !== null) {
        contents.OID = output.OID;
    }
    return contents;
};
const deserializeAws_json1_1ExtendedKeyUsageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExtendedKeyUsage(entry, context));
};
const deserializeAws_json1_1GetCertificateResponse = (output, context) => {
    let contents = {
        __type: "GetCertificateResponse",
        Certificate: undefined,
        CertificateChain: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = output.Certificate;
    }
    if (output.CertificateChain !== undefined &&
        output.CertificateChain !== null) {
        contents.CertificateChain = output.CertificateChain;
    }
    return contents;
};
const deserializeAws_json1_1ImportCertificateResponse = (output, context) => {
    let contents = {
        __type: "ImportCertificateResponse",
        CertificateArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    return contents;
};
const deserializeAws_json1_1InUseList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InvalidArgsException = (output, context) => {
    let contents = {
        __type: "InvalidArgsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    let contents = {
        __type: "InvalidArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDomainValidationOptionsException = (output, context) => {
    let contents = {
        __type: "InvalidDomainValidationOptionsException",
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
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    let contents = {
        __type: "InvalidTagException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KeyUsage = (output, context) => {
    let contents = {
        __type: "KeyUsage",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1KeyUsageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyUsage(entry, context));
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
const deserializeAws_json1_1ListCertificatesResponse = (output, context) => {
    let contents = {
        __type: "ListCertificatesResponse",
        CertificateSummaryList: undefined,
        NextToken: undefined
    };
    if (output.CertificateSummaryList !== undefined &&
        output.CertificateSummaryList !== null) {
        contents.CertificateSummaryList = deserializeAws_json1_1CertificateSummaryList(output.CertificateSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForCertificateResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForCertificateResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1RenewalSummary = (output, context) => {
    let contents = {
        __type: "RenewalSummary",
        DomainValidationOptions: undefined,
        RenewalStatus: undefined,
        RenewalStatusReason: undefined,
        UpdatedAt: undefined
    };
    if (output.DomainValidationOptions !== undefined &&
        output.DomainValidationOptions !== null) {
        contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context);
    }
    if (output.RenewalStatus !== undefined && output.RenewalStatus !== null) {
        contents.RenewalStatus = output.RenewalStatus;
    }
    if (output.RenewalStatusReason !== undefined &&
        output.RenewalStatusReason !== null) {
        contents.RenewalStatusReason = output.RenewalStatusReason;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1RequestCertificateResponse = (output, context) => {
    let contents = {
        __type: "RequestCertificateResponse",
        CertificateArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
    }
    return contents;
};
const deserializeAws_json1_1RequestInProgressException = (output, context) => {
    let contents = {
        __type: "RequestInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1ResourceRecord = (output, context) => {
    let contents = {
        __type: "ResourceRecord",
        Name: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
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
const deserializeAws_json1_1TagPolicyException = (output, context) => {
    let contents = {
        __type: "TagPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ValidationEmailList = (output, context) => {
    return (output || []).map((entry) => entry);
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