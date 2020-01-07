"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.CreateCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCertificateAuthorityCommand = serializeAws_json1_1CreateCertificateAuthorityCommand;
async function serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ACMPrivateCA.CreateCertificateAuthorityAuditReport";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand;
async function serializeAws_json1_1CreatePermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.CreatePermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePermissionCommand = serializeAws_json1_1CreatePermissionCommand;
async function serializeAws_json1_1DeleteCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.DeleteCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCertificateAuthorityCommand = serializeAws_json1_1DeleteCertificateAuthorityCommand;
async function serializeAws_json1_1DeletePermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.DeletePermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePermissionCommand = serializeAws_json1_1DeletePermissionCommand;
async function serializeAws_json1_1DescribeCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.DescribeCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCertificateAuthorityCommand = serializeAws_json1_1DescribeCertificateAuthorityCommand;
async function serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ACMPrivateCA.DescribeCertificateAuthorityAuditReport";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand;
async function serializeAws_json1_1GetCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCertificateCommand = serializeAws_json1_1GetCertificateCommand;
async function serializeAws_json1_1GetCertificateAuthorityCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCertificateAuthorityCertificateCommand = serializeAws_json1_1GetCertificateAuthorityCertificateCommand;
async function serializeAws_json1_1GetCertificateAuthorityCsrCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCsr";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCertificateAuthorityCsrCommand = serializeAws_json1_1GetCertificateAuthorityCsrCommand;
async function serializeAws_json1_1ImportCertificateAuthorityCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ACMPrivateCA.ImportCertificateAuthorityCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportCertificateAuthorityCertificateCommand = serializeAws_json1_1ImportCertificateAuthorityCertificateCommand;
async function serializeAws_json1_1IssueCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.IssueCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1IssueCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1IssueCertificateCommand = serializeAws_json1_1IssueCertificateCommand;
async function serializeAws_json1_1ListCertificateAuthoritiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.ListCertificateAuthorities";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCertificateAuthoritiesCommand = serializeAws_json1_1ListCertificateAuthoritiesCommand;
async function serializeAws_json1_1ListPermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.ListPermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPermissionsCommand = serializeAws_json1_1ListPermissionsCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1RestoreCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.RestoreCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RestoreCertificateAuthorityCommand = serializeAws_json1_1RestoreCertificateAuthorityCommand;
async function serializeAws_json1_1RevokeCertificateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.RevokeCertificate";
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RevokeCertificateCommand = serializeAws_json1_1RevokeCertificateCommand;
async function serializeAws_json1_1TagCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.TagCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagCertificateAuthorityCommand = serializeAws_json1_1TagCertificateAuthorityCommand;
async function serializeAws_json1_1UntagCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.UntagCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagCertificateAuthorityCommand = serializeAws_json1_1UntagCertificateAuthorityCommand;
async function serializeAws_json1_1UpdateCertificateAuthorityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ACMPrivateCA.UpdateCertificateAuthority";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCertificateAuthorityCommand = serializeAws_json1_1UpdateCertificateAuthorityCommand;
async function deserializeAws_json1_1CreateCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCertificateAuthorityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCertificateAuthorityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCertificateAuthorityCommand = deserializeAws_json1_1CreateCertificateAuthorityCommand;
async function deserializeAws_json1_1CreateCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgsException":
        case "com.amazonaws.acmpca#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPolicyException":
        case "com.amazonaws.acmpca#InvalidPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.acmpca#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.acmpca#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCertificateAuthorityAuditReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand;
async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgsException":
        case "com.amazonaws.acmpca#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazonaws.acmpca#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreatePermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePermissionCommand = deserializeAws_json1_1CreatePermissionCommand;
async function deserializeAws_json1_1CreatePermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.acmpca#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PermissionAlreadyExistsException":
        case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCertificateAuthorityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCertificateAuthorityCommand = deserializeAws_json1_1DeleteCertificateAuthorityCommand;
async function deserializeAws_json1_1DeleteCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.acmpca#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeletePermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePermissionCommand = deserializeAws_json1_1DeletePermissionCommand;
async function deserializeAws_json1_1DeletePermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCertificateAuthorityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCertificateAuthorityResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCertificateAuthorityCommand = deserializeAws_json1_1DescribeCertificateAuthorityCommand;
async function deserializeAws_json1_1DescribeCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCertificateAuthorityAuditReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand;
async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgsException":
        case "com.amazonaws.acmpca#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazonaws.acmpca#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCertificateAuthorityCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCertificateAuthorityCertificateCommand = deserializeAws_json1_1GetCertificateAuthorityCertificateCommand;
async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetCertificateAuthorityCsrCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCertificateAuthorityCsrResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCertificateAuthorityCsrCommand = deserializeAws_json1_1GetCertificateAuthorityCsrCommand;
async function deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazonaws.acmpca#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand = deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand;
async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CertificateMismatchException":
        case "com.amazonaws.acmpca#CertificateMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CertificateMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.acmpca#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.acmpca#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedCertificateException":
        case "com.amazonaws.acmpca#MalformedCertificateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedCertificateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazonaws.acmpca#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1IssueCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1IssueCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IssueCertificateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IssueCertificateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1IssueCertificateCommand = deserializeAws_json1_1IssueCertificateCommand;
async function deserializeAws_json1_1IssueCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArgsException":
        case "com.amazonaws.acmpca#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.acmpca#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedCSRException":
        case "com.amazonaws.acmpca#MalformedCSRException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedCSRExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListCertificateAuthoritiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCertificateAuthoritiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCertificateAuthoritiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCertificateAuthoritiesCommand = deserializeAws_json1_1ListCertificateAuthoritiesCommand;
async function deserializeAws_json1_1ListCertificateAuthoritiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.acmpca#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListPermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPermissionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPermissionsCommand = deserializeAws_json1_1ListPermissionsCommand;
async function deserializeAws_json1_1ListPermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.acmpca#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1RestoreCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RestoreCertificateAuthorityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RestoreCertificateAuthorityCommand = deserializeAws_json1_1RestoreCertificateAuthorityCommand;
async function deserializeAws_json1_1RestoreCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1RevokeCertificateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RevokeCertificateCommand = deserializeAws_json1_1RevokeCertificateCommand;
async function deserializeAws_json1_1RevokeCertificateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.acmpca#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.acmpca#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.acmpca#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestAlreadyProcessedException":
        case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestFailedException":
        case "com.amazonaws.acmpca#RequestFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestInProgressException":
        case "com.amazonaws.acmpca#RequestInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1TagCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagCertificateAuthorityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagCertificateAuthorityCommand = deserializeAws_json1_1TagCertificateAuthorityCommand;
async function deserializeAws_json1_1TagCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.acmpca#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.acmpca#TooManyTagsException":
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
async function deserializeAws_json1_1UntagCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagCertificateAuthorityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagCertificateAuthorityCommand = deserializeAws_json1_1UntagCertificateAuthorityCommand;
async function deserializeAws_json1_1UntagCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.acmpca#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateCertificateAuthorityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCertificateAuthorityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCertificateAuthorityCommand = deserializeAws_json1_1UpdateCertificateAuthorityCommand;
async function deserializeAws_json1_1UpdateCertificateAuthorityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.acmpca#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgsException":
        case "com.amazonaws.acmpca#InvalidArgsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.acmpca#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPolicyException":
        case "com.amazonaws.acmpca#InvalidPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStateException":
        case "com.amazonaws.acmpca#InvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1CertificateMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CertificateMismatchException(body, context);
    const contents = Object.assign({ name: "CertificateMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyException(body, context);
    const contents = Object.assign({ name: "InvalidPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1MalformedCSRExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedCSRException(body, context);
    const contents = Object.assign({ name: "MalformedCSRException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MalformedCertificateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedCertificateException(body, context);
    const contents = Object.assign({ name: "MalformedCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PermissionAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "PermissionAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestAlreadyProcessedException(body, context);
    const contents = Object.assign({ name: "RequestAlreadyProcessedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RequestFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestFailedException(body, context);
    const contents = Object.assign({ name: "RequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RequestInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestInProgressException(body, context);
    const contents = Object.assign({ name: "RequestInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1ASN1Subject = (input, context) => {
    const bodyParams = {};
    if (input.CommonName !== undefined) {
        bodyParams["CommonName"] = input.CommonName;
    }
    if (input.Country !== undefined) {
        bodyParams["Country"] = input.Country;
    }
    if (input.DistinguishedNameQualifier !== undefined) {
        bodyParams["DistinguishedNameQualifier"] = input.DistinguishedNameQualifier;
    }
    if (input.GenerationQualifier !== undefined) {
        bodyParams["GenerationQualifier"] = input.GenerationQualifier;
    }
    if (input.GivenName !== undefined) {
        bodyParams["GivenName"] = input.GivenName;
    }
    if (input.Initials !== undefined) {
        bodyParams["Initials"] = input.Initials;
    }
    if (input.Locality !== undefined) {
        bodyParams["Locality"] = input.Locality;
    }
    if (input.Organization !== undefined) {
        bodyParams["Organization"] = input.Organization;
    }
    if (input.OrganizationalUnit !== undefined) {
        bodyParams["OrganizationalUnit"] = input.OrganizationalUnit;
    }
    if (input.Pseudonym !== undefined) {
        bodyParams["Pseudonym"] = input.Pseudonym;
    }
    if (input.SerialNumber !== undefined) {
        bodyParams["SerialNumber"] = input.SerialNumber;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    if (input.Surname !== undefined) {
        bodyParams["Surname"] = input.Surname;
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CertificateAuthorityConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.KeyAlgorithm !== undefined) {
        bodyParams["KeyAlgorithm"] = input.KeyAlgorithm;
    }
    if (input.SigningAlgorithm !== undefined) {
        bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
    }
    if (input.Subject !== undefined) {
        bodyParams["Subject"] = serializeAws_json1_1ASN1Subject(input.Subject, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuditReportResponseFormat !== undefined) {
        bodyParams["AuditReportResponseFormat"] = input.AuditReportResponseFormat;
    }
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityConfiguration !== undefined) {
        bodyParams["CertificateAuthorityConfiguration"] = serializeAws_json1_1CertificateAuthorityConfiguration(input.CertificateAuthorityConfiguration, context);
    }
    if (input.CertificateAuthorityType !== undefined) {
        bodyParams["CertificateAuthorityType"] = input.CertificateAuthorityType;
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.RevocationConfiguration !== undefined) {
        bodyParams["RevocationConfiguration"] = serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1ActionList(input.Actions, context);
    }
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = input.Principal;
    }
    if (input.SourceAccount !== undefined) {
        bodyParams["SourceAccount"] = input.SourceAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1CrlConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CustomCname !== undefined) {
        bodyParams["CustomCname"] = input.CustomCname;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.ExpirationInDays !== undefined) {
        bodyParams["ExpirationInDays"] = input.ExpirationInDays;
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.PermanentDeletionTimeInDays !== undefined) {
        bodyParams["PermanentDeletionTimeInDays"] =
            input.PermanentDeletionTimeInDays;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = input.Principal;
    }
    if (input.SourceAccount !== undefined) {
        bodyParams["SourceAccount"] = input.SourceAccount;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (input, context) => {
    const bodyParams = {};
    if (input.AuditReportId !== undefined) {
        bodyParams["AuditReportId"] = input.AuditReportId;
    }
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateArn !== undefined) {
        bodyParams["CertificateArn"] = input.CertificateArn;
    }
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.Certificate !== undefined) {
        bodyParams["Certificate"] = Buffer.from(input.Certificate).toString("utf-8");
    }
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.CertificateChain !== undefined) {
        bodyParams["CertificateChain"] = Buffer.from(input.CertificateChain).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1IssueCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.Csr !== undefined) {
        bodyParams["Csr"] = Buffer.from(input.Csr).toString("utf-8");
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.SigningAlgorithm !== undefined) {
        bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
    }
    if (input.TemplateArn !== undefined) {
        bodyParams["TemplateArn"] = input.TemplateArn;
    }
    if (input.Validity !== undefined) {
        bodyParams["Validity"] = serializeAws_json1_1Validity(input.Validity, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListCertificateAuthoritiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1RestoreCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RevocationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CrlConfiguration !== undefined) {
        bodyParams["CrlConfiguration"] = serializeAws_json1_1CrlConfiguration(input.CrlConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RevokeCertificateRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.CertificateSerial !== undefined) {
        bodyParams["CertificateSerial"] = input.CertificateSerial;
    }
    if (input.RevocationReason !== undefined) {
        bodyParams["RevocationReason"] = input.RevocationReason;
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
const serializeAws_json1_1TagCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
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
const serializeAws_json1_1UntagCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCertificateAuthorityRequest = (input, context) => {
    const bodyParams = {};
    if (input.CertificateAuthorityArn !== undefined) {
        bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
    }
    if (input.RevocationConfiguration !== undefined) {
        bodyParams["RevocationConfiguration"] = serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context);
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1Validity = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const deserializeAws_json1_1ASN1Subject = (output, context) => {
    let contents = {
        __type: "ASN1Subject",
        CommonName: undefined,
        Country: undefined,
        DistinguishedNameQualifier: undefined,
        GenerationQualifier: undefined,
        GivenName: undefined,
        Initials: undefined,
        Locality: undefined,
        Organization: undefined,
        OrganizationalUnit: undefined,
        Pseudonym: undefined,
        SerialNumber: undefined,
        State: undefined,
        Surname: undefined,
        Title: undefined
    };
    if (output.CommonName !== undefined && output.CommonName !== null) {
        contents.CommonName = output.CommonName;
    }
    if (output.Country !== undefined && output.Country !== null) {
        contents.Country = output.Country;
    }
    if (output.DistinguishedNameQualifier !== undefined &&
        output.DistinguishedNameQualifier !== null) {
        contents.DistinguishedNameQualifier = output.DistinguishedNameQualifier;
    }
    if (output.GenerationQualifier !== undefined &&
        output.GenerationQualifier !== null) {
        contents.GenerationQualifier = output.GenerationQualifier;
    }
    if (output.GivenName !== undefined && output.GivenName !== null) {
        contents.GivenName = output.GivenName;
    }
    if (output.Initials !== undefined && output.Initials !== null) {
        contents.Initials = output.Initials;
    }
    if (output.Locality !== undefined && output.Locality !== null) {
        contents.Locality = output.Locality;
    }
    if (output.Organization !== undefined && output.Organization !== null) {
        contents.Organization = output.Organization;
    }
    if (output.OrganizationalUnit !== undefined &&
        output.OrganizationalUnit !== null) {
        contents.OrganizationalUnit = output.OrganizationalUnit;
    }
    if (output.Pseudonym !== undefined && output.Pseudonym !== null) {
        contents.Pseudonym = output.Pseudonym;
    }
    if (output.SerialNumber !== undefined && output.SerialNumber !== null) {
        contents.SerialNumber = output.SerialNumber;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Surname !== undefined && output.Surname !== null) {
        contents.Surname = output.Surname;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1ActionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CertificateAuthorities = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CertificateAuthority(entry, context));
};
const deserializeAws_json1_1CertificateAuthority = (output, context) => {
    let contents = {
        __type: "CertificateAuthority",
        Arn: undefined,
        CertificateAuthorityConfiguration: undefined,
        CreatedAt: undefined,
        FailureReason: undefined,
        LastStateChangeAt: undefined,
        NotAfter: undefined,
        NotBefore: undefined,
        RestorableUntil: undefined,
        RevocationConfiguration: undefined,
        Serial: undefined,
        Status: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CertificateAuthorityConfiguration !== undefined &&
        output.CertificateAuthorityConfiguration !== null) {
        contents.CertificateAuthorityConfiguration = deserializeAws_json1_1CertificateAuthorityConfiguration(output.CertificateAuthorityConfiguration, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LastStateChangeAt !== undefined &&
        output.LastStateChangeAt !== null) {
        contents.LastStateChangeAt = new Date(Math.round(output.LastStateChangeAt * 1000));
    }
    if (output.NotAfter !== undefined && output.NotAfter !== null) {
        contents.NotAfter = new Date(Math.round(output.NotAfter * 1000));
    }
    if (output.NotBefore !== undefined && output.NotBefore !== null) {
        contents.NotBefore = new Date(Math.round(output.NotBefore * 1000));
    }
    if (output.RestorableUntil !== undefined && output.RestorableUntil !== null) {
        contents.RestorableUntil = new Date(Math.round(output.RestorableUntil * 1000));
    }
    if (output.RevocationConfiguration !== undefined &&
        output.RevocationConfiguration !== null) {
        contents.RevocationConfiguration = deserializeAws_json1_1RevocationConfiguration(output.RevocationConfiguration, context);
    }
    if (output.Serial !== undefined && output.Serial !== null) {
        contents.Serial = output.Serial;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1CertificateAuthorityConfiguration = (output, context) => {
    let contents = {
        __type: "CertificateAuthorityConfiguration",
        KeyAlgorithm: undefined,
        SigningAlgorithm: undefined,
        Subject: undefined
    };
    if (output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null) {
        contents.KeyAlgorithm = output.KeyAlgorithm;
    }
    if (output.SigningAlgorithm !== undefined &&
        output.SigningAlgorithm !== null) {
        contents.SigningAlgorithm = output.SigningAlgorithm;
    }
    if (output.Subject !== undefined && output.Subject !== null) {
        contents.Subject = deserializeAws_json1_1ASN1Subject(output.Subject, context);
    }
    return contents;
};
const deserializeAws_json1_1CertificateMismatchException = (output, context) => {
    let contents = {
        __type: "CertificateMismatchException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
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
const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (output, context) => {
    let contents = {
        __type: "CreateCertificateAuthorityAuditReportResponse",
        AuditReportId: undefined,
        S3Key: undefined
    };
    if (output.AuditReportId !== undefined && output.AuditReportId !== null) {
        contents.AuditReportId = output.AuditReportId;
    }
    if (output.S3Key !== undefined && output.S3Key !== null) {
        contents.S3Key = output.S3Key;
    }
    return contents;
};
const deserializeAws_json1_1CreateCertificateAuthorityResponse = (output, context) => {
    let contents = {
        __type: "CreateCertificateAuthorityResponse",
        CertificateAuthorityArn: undefined
    };
    if (output.CertificateAuthorityArn !== undefined &&
        output.CertificateAuthorityArn !== null) {
        contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
    }
    return contents;
};
const deserializeAws_json1_1CrlConfiguration = (output, context) => {
    let contents = {
        __type: "CrlConfiguration",
        CustomCname: undefined,
        Enabled: undefined,
        ExpirationInDays: undefined,
        S3BucketName: undefined
    };
    if (output.CustomCname !== undefined && output.CustomCname !== null) {
        contents.CustomCname = output.CustomCname;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.ExpirationInDays !== undefined &&
        output.ExpirationInDays !== null) {
        contents.ExpirationInDays = output.ExpirationInDays;
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (output, context) => {
    let contents = {
        __type: "DescribeCertificateAuthorityAuditReportResponse",
        AuditReportStatus: undefined,
        CreatedAt: undefined,
        S3BucketName: undefined,
        S3Key: undefined
    };
    if (output.AuditReportStatus !== undefined &&
        output.AuditReportStatus !== null) {
        contents.AuditReportStatus = output.AuditReportStatus;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3Key !== undefined && output.S3Key !== null) {
        contents.S3Key = output.S3Key;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (output, context) => {
    let contents = {
        __type: "DescribeCertificateAuthorityResponse",
        CertificateAuthority: undefined
    };
    if (output.CertificateAuthority !== undefined &&
        output.CertificateAuthority !== null) {
        contents.CertificateAuthority = deserializeAws_json1_1CertificateAuthority(output.CertificateAuthority, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (output, context) => {
    let contents = {
        __type: "GetCertificateAuthorityCertificateResponse",
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
const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (output, context) => {
    let contents = {
        __type: "GetCertificateAuthorityCsrResponse",
        Csr: undefined
    };
    if (output.Csr !== undefined && output.Csr !== null) {
        contents.Csr = output.Csr;
    }
    return contents;
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
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPolicyException = (output, context) => {
    let contents = {
        __type: "InvalidPolicyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
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
const deserializeAws_json1_1IssueCertificateResponse = (output, context) => {
    let contents = {
        __type: "IssueCertificateResponse",
        CertificateArn: undefined
    };
    if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
        contents.CertificateArn = output.CertificateArn;
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
const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (output, context) => {
    let contents = {
        __type: "ListCertificateAuthoritiesResponse",
        CertificateAuthorities: undefined,
        NextToken: undefined
    };
    if (output.CertificateAuthorities !== undefined &&
        output.CertificateAuthorities !== null) {
        contents.CertificateAuthorities = deserializeAws_json1_1CertificateAuthorities(output.CertificateAuthorities, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPermissionsResponse = (output, context) => {
    let contents = {
        __type: "ListPermissionsResponse",
        NextToken: undefined,
        Permissions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    let contents = {
        __type: "ListTagsResponse",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1MalformedCSRException = (output, context) => {
    let contents = {
        __type: "MalformedCSRException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MalformedCertificateException = (output, context) => {
    let contents = {
        __type: "MalformedCertificateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Permission = (output, context) => {
    let contents = {
        __type: "Permission",
        Actions: undefined,
        CertificateAuthorityArn: undefined,
        CreatedAt: undefined,
        Policy: undefined,
        Principal: undefined,
        SourceAccount: undefined
    };
    if (output.Actions !== undefined && output.Actions !== null) {
        contents.Actions = deserializeAws_json1_1ActionList(output.Actions, context);
    }
    if (output.CertificateAuthorityArn !== undefined &&
        output.CertificateAuthorityArn !== null) {
        contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    if (output.Principal !== undefined && output.Principal !== null) {
        contents.Principal = output.Principal;
    }
    if (output.SourceAccount !== undefined && output.SourceAccount !== null) {
        contents.SourceAccount = output.SourceAccount;
    }
    return contents;
};
const deserializeAws_json1_1PermissionAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "PermissionAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PermissionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Permission(entry, context));
};
const deserializeAws_json1_1RequestAlreadyProcessedException = (output, context) => {
    let contents = {
        __type: "RequestAlreadyProcessedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RequestFailedException = (output, context) => {
    let contents = {
        __type: "RequestFailedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1RevocationConfiguration = (output, context) => {
    let contents = {
        __type: "RevocationConfiguration",
        CrlConfiguration: undefined
    };
    if (output.CrlConfiguration !== undefined &&
        output.CrlConfiguration !== null) {
        contents.CrlConfiguration = deserializeAws_json1_1CrlConfiguration(output.CrlConfiguration, context);
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