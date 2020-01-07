"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddAttachmentsToSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.AddAttachmentsToSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddAttachmentsToSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddAttachmentsToSetCommand = serializeAws_json1_1AddAttachmentsToSetCommand;
async function serializeAws_json1_1AddCommunicationToCaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.AddCommunicationToCase";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddCommunicationToCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddCommunicationToCaseCommand = serializeAws_json1_1AddCommunicationToCaseCommand;
async function serializeAws_json1_1CreateCaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.CreateCase";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCaseCommand = serializeAws_json1_1CreateCaseCommand;
async function serializeAws_json1_1DescribeAttachmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeAttachment";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAttachmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAttachmentCommand = serializeAws_json1_1DescribeAttachmentCommand;
async function serializeAws_json1_1DescribeCasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeCases";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCasesCommand = serializeAws_json1_1DescribeCasesCommand;
async function serializeAws_json1_1DescribeCommunicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeCommunications";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCommunicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCommunicationsCommand = serializeAws_json1_1DescribeCommunicationsCommand;
async function serializeAws_json1_1DescribeServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServicesCommand = serializeAws_json1_1DescribeServicesCommand;
async function serializeAws_json1_1DescribeSeverityLevelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeSeverityLevels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSeverityLevelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSeverityLevelsCommand = serializeAws_json1_1DescribeSeverityLevelsCommand;
async function serializeAws_json1_1ResolveCaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.ResolveCase";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveCaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResolveCaseCommand = serializeAws_json1_1ResolveCaseCommand;
async function serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand;
async function serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand;
async function serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand;
async function serializeAws_json1_1DescribeTrustedAdvisorChecksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeTrustedAdvisorChecks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorChecksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = serializeAws_json1_1DescribeTrustedAdvisorChecksCommand;
async function serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSSupport_20130415.RefreshTrustedAdvisorCheck";
    let body;
    body = JSON.stringify(serializeAws_json1_1RefreshTrustedAdvisorCheckRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = serializeAws_json1_1RefreshTrustedAdvisorCheckCommand;
async function deserializeAws_json1_1AddAttachmentsToSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddAttachmentsToSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddAttachmentsToSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddAttachmentsToSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddAttachmentsToSetCommand = deserializeAws_json1_1AddAttachmentsToSetCommand;
async function deserializeAws_json1_1AddAttachmentsToSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AttachmentLimitExceeded":
        case "com.amazon.awssupportapi.error#AttachmentLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AttachmentSetExpired":
        case "com.amazon.awssupportapi.error#AttachmentSetExpired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AttachmentSetSizeLimitExceeded":
        case "com.amazon.awssupportapi.error#AttachmentSetSizeLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AddCommunicationToCaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddCommunicationToCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddCommunicationToCaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddCommunicationToCaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddCommunicationToCaseCommand = deserializeAws_json1_1AddCommunicationToCaseCommand;
async function deserializeAws_json1_1AddCommunicationToCaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AttachmentSetExpired":
        case "com.amazon.awssupportapi.error#AttachmentSetExpired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CaseIdNotFound":
        case "com.amazon.awssupportapi.error#CaseIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCaseCommand = deserializeAws_json1_1CreateCaseCommand;
async function deserializeAws_json1_1CreateCaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AttachmentSetExpired":
        case "com.amazon.awssupportapi.error#AttachmentSetExpired":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AttachmentSetIdNotFound":
        case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CaseCreationLimitExceeded":
        case "com.amazon.awssupportapi.error#CaseCreationLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CaseCreationLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAttachmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAttachmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAttachmentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAttachmentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAttachmentCommand = deserializeAws_json1_1DescribeAttachmentCommand;
async function deserializeAws_json1_1DescribeAttachmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AttachmentIdNotFound":
        case "com.amazon.awssupportapi.error#AttachmentIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttachmentIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DescribeAttachmentLimitExceeded":
        case "com.amazon.awssupportapi.error#DescribeAttachmentLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DescribeAttachmentLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeCasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCasesCommand = deserializeAws_json1_1DescribeCasesCommand;
async function deserializeAws_json1_1DescribeCasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazon.awssupportapi.error#CaseIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeCommunicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCommunicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCommunicationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCommunicationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCommunicationsCommand = deserializeAws_json1_1DescribeCommunicationsCommand;
async function deserializeAws_json1_1DescribeCommunicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazon.awssupportapi.error#CaseIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeServicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServicesCommand = deserializeAws_json1_1DescribeServicesCommand;
async function deserializeAws_json1_1DescribeServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSeverityLevelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSeverityLevelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSeverityLevelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSeverityLevelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSeverityLevelsCommand = deserializeAws_json1_1DescribeSeverityLevelsCommand;
async function deserializeAws_json1_1DescribeSeverityLevelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResolveCaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResolveCaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveCaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResolveCaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResolveCaseCommand = deserializeAws_json1_1ResolveCaseCommand;
async function deserializeAws_json1_1ResolveCaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CaseIdNotFound":
        case "com.amazon.awssupportapi.error#CaseIdNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrustedAdvisorCheckRefreshStatusesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand;
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrustedAdvisorCheckResultResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand;
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrustedAdvisorCheckSummariesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand;
async function deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrustedAdvisorChecksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand;
async function deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RefreshTrustedAdvisorCheckResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand;
async function deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazon.awssupportapi.error#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AttachmentIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentIdNotFound(body, context);
    const contents = Object.assign({ name: "AttachmentIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AttachmentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentLimitExceeded(body, context);
    const contents = Object.assign({ name: "AttachmentLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AttachmentSetExpiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetExpired(body, context);
    const contents = Object.assign({ name: "AttachmentSetExpired", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AttachmentSetIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetIdNotFound(body, context);
    const contents = Object.assign({ name: "AttachmentSetIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttachmentSetSizeLimitExceeded(body, context);
    const contents = Object.assign({ name: "AttachmentSetSizeLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CaseCreationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CaseCreationLimitExceeded(body, context);
    const contents = Object.assign({ name: "CaseCreationLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CaseIdNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CaseIdNotFound(body, context);
    const contents = Object.assign({ name: "CaseIdNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DescribeAttachmentLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DescribeAttachmentLimitExceeded(body, context);
    const contents = Object.assign({ name: "DescribeAttachmentLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Attachment = (input, context) => {
    const bodyParams = {};
    if (input.data !== undefined) {
        bodyParams["data"] = Buffer.from(input.data).toString("utf-8");
    }
    if (input.fileName !== undefined) {
        bodyParams["fileName"] = input.fileName;
    }
    return bodyParams;
};
const serializeAws_json1_1Attachments = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Attachment(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AddAttachmentsToSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachmentSetId !== undefined) {
        bodyParams["attachmentSetId"] = input.attachmentSetId;
    }
    if (input.attachments !== undefined) {
        bodyParams["attachments"] = serializeAws_json1_1Attachments(input.attachments, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddCommunicationToCaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachmentSetId !== undefined) {
        bodyParams["attachmentSetId"] = input.attachmentSetId;
    }
    if (input.caseId !== undefined) {
        bodyParams["caseId"] = input.caseId;
    }
    if (input.ccEmailAddresses !== undefined) {
        bodyParams["ccEmailAddresses"] = serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context);
    }
    if (input.communicationBody !== undefined) {
        bodyParams["communicationBody"] = input.communicationBody;
    }
    return bodyParams;
};
const serializeAws_json1_1CaseIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CcEmailAddressList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateCaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachmentSetId !== undefined) {
        bodyParams["attachmentSetId"] = input.attachmentSetId;
    }
    if (input.categoryCode !== undefined) {
        bodyParams["categoryCode"] = input.categoryCode;
    }
    if (input.ccEmailAddresses !== undefined) {
        bodyParams["ccEmailAddresses"] = serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context);
    }
    if (input.communicationBody !== undefined) {
        bodyParams["communicationBody"] = input.communicationBody;
    }
    if (input.issueType !== undefined) {
        bodyParams["issueType"] = input.issueType;
    }
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.serviceCode !== undefined) {
        bodyParams["serviceCode"] = input.serviceCode;
    }
    if (input.severityCode !== undefined) {
        bodyParams["severityCode"] = input.severityCode;
    }
    if (input.subject !== undefined) {
        bodyParams["subject"] = input.subject;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAttachmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachmentId !== undefined) {
        bodyParams["attachmentId"] = input.attachmentId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.afterTime !== undefined) {
        bodyParams["afterTime"] = input.afterTime;
    }
    if (input.beforeTime !== undefined) {
        bodyParams["beforeTime"] = input.beforeTime;
    }
    if (input.caseIdList !== undefined) {
        bodyParams["caseIdList"] = serializeAws_json1_1CaseIdList(input.caseIdList, context);
    }
    if (input.displayId !== undefined) {
        bodyParams["displayId"] = input.displayId;
    }
    if (input.includeCommunications !== undefined) {
        bodyParams["includeCommunications"] = input.includeCommunications;
    }
    if (input.includeResolvedCases !== undefined) {
        bodyParams["includeResolvedCases"] = input.includeResolvedCases;
    }
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCommunicationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.afterTime !== undefined) {
        bodyParams["afterTime"] = input.afterTime;
    }
    if (input.beforeTime !== undefined) {
        bodyParams["beforeTime"] = input.beforeTime;
    }
    if (input.caseId !== undefined) {
        bodyParams["caseId"] = input.caseId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    if (input.serviceCodeList !== undefined) {
        bodyParams["serviceCodeList"] = serializeAws_json1_1ServiceCodeList(input.serviceCodeList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSeverityLevelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    return bodyParams;
};
const serializeAws_json1_1ResolveCaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.caseId !== undefined) {
        bodyParams["caseId"] = input.caseId;
    }
    return bodyParams;
};
const serializeAws_json1_1ServiceCodeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest = (input, context) => {
    const bodyParams = {};
    if (input.checkIds !== undefined) {
        bodyParams["checkIds"] = serializeAws_json1_1StringList(input.checkIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest = (input, context) => {
    const bodyParams = {};
    if (input.checkId !== undefined) {
        bodyParams["checkId"] = input.checkId;
    }
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest = (input, context) => {
    const bodyParams = {};
    if (input.checkIds !== undefined) {
        bodyParams["checkIds"] = serializeAws_json1_1StringList(input.checkIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrustedAdvisorChecksRequest = (input, context) => {
    const bodyParams = {};
    if (input.language !== undefined) {
        bodyParams["language"] = input.language;
    }
    return bodyParams;
};
const serializeAws_json1_1RefreshTrustedAdvisorCheckRequest = (input, context) => {
    const bodyParams = {};
    if (input.checkId !== undefined) {
        bodyParams["checkId"] = input.checkId;
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
const deserializeAws_json1_1Attachment = (output, context) => {
    let contents = {
        __type: "Attachment",
        data: undefined,
        fileName: undefined
    };
    if (output.data !== undefined && output.data !== null) {
        contents.data = Uint8Array.from(output.data);
    }
    if (output.fileName !== undefined && output.fileName !== null) {
        contents.fileName = output.fileName;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentDetails = (output, context) => {
    let contents = {
        __type: "AttachmentDetails",
        attachmentId: undefined,
        fileName: undefined
    };
    if (output.attachmentId !== undefined && output.attachmentId !== null) {
        contents.attachmentId = output.attachmentId;
    }
    if (output.fileName !== undefined && output.fileName !== null) {
        contents.fileName = output.fileName;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AttachmentDetails(entry, context));
};
const deserializeAws_json1_1CaseDetails = (output, context) => {
    let contents = {
        __type: "CaseDetails",
        caseId: undefined,
        categoryCode: undefined,
        ccEmailAddresses: undefined,
        displayId: undefined,
        language: undefined,
        recentCommunications: undefined,
        serviceCode: undefined,
        severityCode: undefined,
        status: undefined,
        subject: undefined,
        submittedBy: undefined,
        timeCreated: undefined
    };
    if (output.caseId !== undefined && output.caseId !== null) {
        contents.caseId = output.caseId;
    }
    if (output.categoryCode !== undefined && output.categoryCode !== null) {
        contents.categoryCode = output.categoryCode;
    }
    if (output.ccEmailAddresses !== undefined &&
        output.ccEmailAddresses !== null) {
        contents.ccEmailAddresses = deserializeAws_json1_1CcEmailAddressList(output.ccEmailAddresses, context);
    }
    if (output.displayId !== undefined && output.displayId !== null) {
        contents.displayId = output.displayId;
    }
    if (output.language !== undefined && output.language !== null) {
        contents.language = output.language;
    }
    if (output.recentCommunications !== undefined &&
        output.recentCommunications !== null) {
        contents.recentCommunications = deserializeAws_json1_1RecentCaseCommunications(output.recentCommunications, context);
    }
    if (output.serviceCode !== undefined && output.serviceCode !== null) {
        contents.serviceCode = output.serviceCode;
    }
    if (output.severityCode !== undefined && output.severityCode !== null) {
        contents.severityCode = output.severityCode;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.subject !== undefined && output.subject !== null) {
        contents.subject = output.subject;
    }
    if (output.submittedBy !== undefined && output.submittedBy !== null) {
        contents.submittedBy = output.submittedBy;
    }
    if (output.timeCreated !== undefined && output.timeCreated !== null) {
        contents.timeCreated = output.timeCreated;
    }
    return contents;
};
const deserializeAws_json1_1Category = (output, context) => {
    let contents = {
        __type: "Category",
        code: undefined,
        name: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1CategoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Category(entry, context));
};
const deserializeAws_json1_1CcEmailAddressList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Communication = (output, context) => {
    let contents = {
        __type: "Communication",
        attachmentSet: undefined,
        body: undefined,
        caseId: undefined,
        submittedBy: undefined,
        timeCreated: undefined
    };
    if (output.attachmentSet !== undefined && output.attachmentSet !== null) {
        contents.attachmentSet = deserializeAws_json1_1AttachmentSet(output.attachmentSet, context);
    }
    if (output.body !== undefined && output.body !== null) {
        contents.body = output.body;
    }
    if (output.caseId !== undefined && output.caseId !== null) {
        contents.caseId = output.caseId;
    }
    if (output.submittedBy !== undefined && output.submittedBy !== null) {
        contents.submittedBy = output.submittedBy;
    }
    if (output.timeCreated !== undefined && output.timeCreated !== null) {
        contents.timeCreated = output.timeCreated;
    }
    return contents;
};
const deserializeAws_json1_1RecentCaseCommunications = (output, context) => {
    let contents = {
        __type: "RecentCaseCommunications",
        communications: undefined,
        nextToken: undefined
    };
    if (output.communications !== undefined && output.communications !== null) {
        contents.communications = deserializeAws_json1_1CommunicationList(output.communications, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1Service = (output, context) => {
    let contents = {
        __type: "Service",
        categories: undefined,
        code: undefined,
        name: undefined
    };
    if (output.categories !== undefined && output.categories !== null) {
        contents.categories = deserializeAws_json1_1CategoryList(output.categories, context);
    }
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentIdNotFound = (output, context) => {
    let contents = {
        __type: "AttachmentIdNotFound",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentLimitExceeded = (output, context) => {
    let contents = {
        __type: "AttachmentLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentSetExpired = (output, context) => {
    let contents = {
        __type: "AttachmentSetExpired",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentSetIdNotFound = (output, context) => {
    let contents = {
        __type: "AttachmentSetIdNotFound",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentSetSizeLimitExceeded = (output, context) => {
    let contents = {
        __type: "AttachmentSetSizeLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CaseCreationLimitExceeded = (output, context) => {
    let contents = {
        __type: "CaseCreationLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CaseIdNotFound = (output, context) => {
    let contents = {
        __type: "CaseIdNotFound",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAttachmentLimitExceeded = (output, context) => {
    let contents = {
        __type: "DescribeAttachmentLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AddAttachmentsToSetResponse = (output, context) => {
    let contents = {
        __type: "AddAttachmentsToSetResponse",
        attachmentSetId: undefined,
        expiryTime: undefined
    };
    if (output.attachmentSetId !== undefined && output.attachmentSetId !== null) {
        contents.attachmentSetId = output.attachmentSetId;
    }
    if (output.expiryTime !== undefined && output.expiryTime !== null) {
        contents.expiryTime = output.expiryTime;
    }
    return contents;
};
const deserializeAws_json1_1AddCommunicationToCaseResponse = (output, context) => {
    let contents = {
        __type: "AddCommunicationToCaseResponse",
        result: undefined
    };
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    return contents;
};
const deserializeAws_json1_1CaseList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CaseDetails(entry, context));
};
const deserializeAws_json1_1CommunicationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Communication(entry, context));
};
const deserializeAws_json1_1CreateCaseResponse = (output, context) => {
    let contents = {
        __type: "CreateCaseResponse",
        caseId: undefined
    };
    if (output.caseId !== undefined && output.caseId !== null) {
        contents.caseId = output.caseId;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAttachmentResponse = (output, context) => {
    let contents = {
        __type: "DescribeAttachmentResponse",
        attachment: undefined
    };
    if (output.attachment !== undefined && output.attachment !== null) {
        contents.attachment = deserializeAws_json1_1Attachment(output.attachment, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCasesResponse = (output, context) => {
    let contents = {
        __type: "DescribeCasesResponse",
        cases: undefined,
        nextToken: undefined
    };
    if (output.cases !== undefined && output.cases !== null) {
        contents.cases = deserializeAws_json1_1CaseList(output.cases, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCommunicationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeCommunicationsResponse",
        communications: undefined,
        nextToken: undefined
    };
    if (output.communications !== undefined && output.communications !== null) {
        contents.communications = deserializeAws_json1_1CommunicationList(output.communications, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeServicesResponse = (output, context) => {
    let contents = {
        __type: "DescribeServicesResponse",
        services: undefined
    };
    if (output.services !== undefined && output.services !== null) {
        contents.services = deserializeAws_json1_1ServiceList(output.services, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSeverityLevelsResponse = (output, context) => {
    let contents = {
        __type: "DescribeSeverityLevelsResponse",
        severityLevels: undefined
    };
    if (output.severityLevels !== undefined && output.severityLevels !== null) {
        contents.severityLevels = deserializeAws_json1_1SeverityLevelsList(output.severityLevels, context);
    }
    return contents;
};
const deserializeAws_json1_1ResolveCaseResponse = (output, context) => {
    let contents = {
        __type: "ResolveCaseResponse",
        finalCaseStatus: undefined,
        initialCaseStatus: undefined
    };
    if (output.finalCaseStatus !== undefined && output.finalCaseStatus !== null) {
        contents.finalCaseStatus = output.finalCaseStatus;
    }
    if (output.initialCaseStatus !== undefined &&
        output.initialCaseStatus !== null) {
        contents.initialCaseStatus = output.initialCaseStatus;
    }
    return contents;
};
const deserializeAws_json1_1ServiceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Service(entry, context));
};
const deserializeAws_json1_1SeverityLevel = (output, context) => {
    let contents = {
        __type: "SeverityLevel",
        code: undefined,
        name: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1SeverityLevelsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SeverityLevel(entry, context));
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrustedAdvisorCheckRefreshStatusesResponse",
        statuses: undefined
    };
    if (output.statuses !== undefined && output.statuses !== null) {
        contents.statuses = deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList(output.statuses, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrustedAdvisorCheckResultResponse",
        result: undefined
    };
    if (output.result !== undefined && output.result !== null) {
        contents.result = deserializeAws_json1_1TrustedAdvisorCheckResult(output.result, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrustedAdvisorCheckSummariesResponse",
        summaries: undefined
    };
    if (output.summaries !== undefined && output.summaries !== null) {
        contents.summaries = deserializeAws_json1_1TrustedAdvisorCheckSummaryList(output.summaries, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrustedAdvisorChecksResponse",
        checks: undefined
    };
    if (output.checks !== undefined && output.checks !== null) {
        contents.checks = deserializeAws_json1_1TrustedAdvisorCheckList(output.checks, context);
    }
    return contents;
};
const deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse = (output, context) => {
    let contents = {
        __type: "RefreshTrustedAdvisorCheckResponse",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(output.status, context);
    }
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCategorySpecificSummary",
        costOptimizing: undefined
    };
    if (output.costOptimizing !== undefined && output.costOptimizing !== null) {
        contents.costOptimizing = deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary(output.costOptimizing, context);
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorCheckDescription = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCheckDescription",
        category: undefined,
        description: undefined,
        id: undefined,
        metadata: undefined,
        name: undefined
    };
    if (output.category !== undefined && output.category !== null) {
        contents.category = output.category;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_json1_1StringList(output.metadata, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorCheckList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrustedAdvisorCheckDescription(entry, context));
};
const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCheckRefreshStatus",
        checkId: undefined,
        millisUntilNextRefreshable: undefined,
        status: undefined
    };
    if (output.checkId !== undefined && output.checkId !== null) {
        contents.checkId = output.checkId;
    }
    if (output.millisUntilNextRefreshable !== undefined &&
        output.millisUntilNextRefreshable !== null) {
        contents.millisUntilNextRefreshable = output.millisUntilNextRefreshable;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(entry, context));
};
const deserializeAws_json1_1TrustedAdvisorCheckResult = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCheckResult",
        categorySpecificSummary: undefined,
        checkId: undefined,
        flaggedResources: undefined,
        resourcesSummary: undefined,
        status: undefined,
        timestamp: undefined
    };
    if (output.categorySpecificSummary !== undefined &&
        output.categorySpecificSummary !== null) {
        contents.categorySpecificSummary = deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context);
    }
    if (output.checkId !== undefined && output.checkId !== null) {
        contents.checkId = output.checkId;
    }
    if (output.flaggedResources !== undefined &&
        output.flaggedResources !== null) {
        contents.flaggedResources = deserializeAws_json1_1TrustedAdvisorResourceDetailList(output.flaggedResources, context);
    }
    if (output.resourcesSummary !== undefined &&
        output.resourcesSummary !== null) {
        contents.resourcesSummary = deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = output.timestamp;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorCheckSummary = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCheckSummary",
        categorySpecificSummary: undefined,
        checkId: undefined,
        hasFlaggedResources: undefined,
        resourcesSummary: undefined,
        status: undefined,
        timestamp: undefined
    };
    if (output.categorySpecificSummary !== undefined &&
        output.categorySpecificSummary !== null) {
        contents.categorySpecificSummary = deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context);
    }
    if (output.checkId !== undefined && output.checkId !== null) {
        contents.checkId = output.checkId;
    }
    if (output.hasFlaggedResources !== undefined &&
        output.hasFlaggedResources !== null) {
        contents.hasFlaggedResources = output.hasFlaggedResources;
    }
    if (output.resourcesSummary !== undefined &&
        output.resourcesSummary !== null) {
        contents.resourcesSummary = deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = output.timestamp;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorCheckSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrustedAdvisorCheckSummary(entry, context));
};
const deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorCostOptimizingSummary",
        estimatedMonthlySavings: undefined,
        estimatedPercentMonthlySavings: undefined
    };
    if (output.estimatedMonthlySavings !== undefined &&
        output.estimatedMonthlySavings !== null) {
        contents.estimatedMonthlySavings = output.estimatedMonthlySavings;
    }
    if (output.estimatedPercentMonthlySavings !== undefined &&
        output.estimatedPercentMonthlySavings !== null) {
        contents.estimatedPercentMonthlySavings =
            output.estimatedPercentMonthlySavings;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorResourceDetail = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorResourceDetail",
        isSuppressed: undefined,
        metadata: undefined,
        region: undefined,
        resourceId: undefined,
        status: undefined
    };
    if (output.isSuppressed !== undefined && output.isSuppressed !== null) {
        contents.isSuppressed = output.isSuppressed;
    }
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_json1_1StringList(output.metadata, context);
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.resourceId !== undefined && output.resourceId !== null) {
        contents.resourceId = output.resourceId;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1TrustedAdvisorResourceDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrustedAdvisorResourceDetail(entry, context));
};
const deserializeAws_json1_1TrustedAdvisorResourcesSummary = (output, context) => {
    let contents = {
        __type: "TrustedAdvisorResourcesSummary",
        resourcesFlagged: undefined,
        resourcesIgnored: undefined,
        resourcesProcessed: undefined,
        resourcesSuppressed: undefined
    };
    if (output.resourcesFlagged !== undefined &&
        output.resourcesFlagged !== null) {
        contents.resourcesFlagged = output.resourcesFlagged;
    }
    if (output.resourcesIgnored !== undefined &&
        output.resourcesIgnored !== null) {
        contents.resourcesIgnored = output.resourcesIgnored;
    }
    if (output.resourcesProcessed !== undefined &&
        output.resourcesProcessed !== null) {
        contents.resourcesProcessed = output.resourcesProcessed;
    }
    if (output.resourcesSuppressed !== undefined &&
        output.resourcesSuppressed !== null) {
        contents.resourcesSuppressed = output.resourcesSuppressed;
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