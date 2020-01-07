"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_json1_1AnalyzeDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.AnalyzeDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1AnalyzeDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AnalyzeDocumentCommand = serializeAws_json1_1AnalyzeDocumentCommand;
async function serializeAws_json1_1DetectDocumentTextCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.DetectDocumentText";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectDocumentTextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectDocumentTextCommand = serializeAws_json1_1DetectDocumentTextCommand;
async function serializeAws_json1_1GetDocumentAnalysisCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.GetDocumentAnalysis";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDocumentAnalysisRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDocumentAnalysisCommand = serializeAws_json1_1GetDocumentAnalysisCommand;
async function serializeAws_json1_1GetDocumentTextDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.GetDocumentTextDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDocumentTextDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDocumentTextDetectionCommand = serializeAws_json1_1GetDocumentTextDetectionCommand;
async function serializeAws_json1_1StartDocumentAnalysisCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.StartDocumentAnalysis";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDocumentAnalysisRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDocumentAnalysisCommand = serializeAws_json1_1StartDocumentAnalysisCommand;
async function serializeAws_json1_1StartDocumentTextDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Textract.StartDocumentTextDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDocumentTextDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDocumentTextDetectionCommand = serializeAws_json1_1StartDocumentTextDetectionCommand;
async function deserializeAws_json1_1AnalyzeDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AnalyzeDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AnalyzeDocumentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AnalyzeDocumentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AnalyzeDocumentCommand = deserializeAws_json1_1AnalyzeDocumentCommand;
async function deserializeAws_json1_1AnalyzeDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadDocumentException":
        case "com.amazonaws.textract#BadDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentTooLargeException":
        case "com.amazonaws.textract#DocumentTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HumanLoopQuotaExceededException":
        case "com.amazonaws.textract#HumanLoopQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.textract#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentException":
        case "com.amazonaws.textract#UnsupportedDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectDocumentTextCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectDocumentTextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectDocumentTextResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectDocumentTextResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectDocumentTextCommand = deserializeAws_json1_1DetectDocumentTextCommand;
async function deserializeAws_json1_1DetectDocumentTextCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadDocumentException":
        case "com.amazonaws.textract#BadDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentTooLargeException":
        case "com.amazonaws.textract#DocumentTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.textract#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentException":
        case "com.amazonaws.textract#UnsupportedDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDocumentAnalysisCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDocumentAnalysisCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDocumentAnalysisResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDocumentAnalysisResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDocumentAnalysisCommand = deserializeAws_json1_1GetDocumentAnalysisCommand;
async function deserializeAws_json1_1GetDocumentAnalysisCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobIdException":
        case "com.amazonaws.textract#InvalidJobIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDocumentTextDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDocumentTextDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDocumentTextDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDocumentTextDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDocumentTextDetectionCommand = deserializeAws_json1_1GetDocumentTextDetectionCommand;
async function deserializeAws_json1_1GetDocumentTextDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobIdException":
        case "com.amazonaws.textract#InvalidJobIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDocumentAnalysisCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDocumentAnalysisCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDocumentAnalysisResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDocumentAnalysisResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDocumentAnalysisCommand = deserializeAws_json1_1StartDocumentAnalysisCommand;
async function deserializeAws_json1_1StartDocumentAnalysisCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadDocumentException":
        case "com.amazonaws.textract#BadDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentTooLargeException":
        case "com.amazonaws.textract#DocumentTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.textract#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.textract#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.textract#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentException":
        case "com.amazonaws.textract#UnsupportedDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDocumentTextDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDocumentTextDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDocumentTextDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDocumentTextDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDocumentTextDetectionCommand = deserializeAws_json1_1StartDocumentTextDetectionCommand;
async function deserializeAws_json1_1StartDocumentTextDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.textract#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BadDocumentException":
        case "com.amazonaws.textract#BadDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DocumentTooLargeException":
        case "com.amazonaws.textract#DocumentTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.textract#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.textract#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.textract#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.textract#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.textract#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.textract#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.textract#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedDocumentException":
        case "com.amazonaws.textract#UnsupportedDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1BadDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadDocumentException(body, context);
    const contents = Object.assign({ name: "BadDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DocumentTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DocumentTooLargeException(body, context);
    const contents = Object.assign({ name: "DocumentTooLargeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
    const contents = Object.assign({ name: "HumanLoopQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidJobIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobIdException(body, context);
    const contents = Object.assign({ name: "InvalidJobIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3ObjectException(body, context);
    const contents = Object.assign({ name: "InvalidS3ObjectException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
    const contents = Object.assign({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedDocumentException(body, context);
    const contents = Object.assign({ name: "UnsupportedDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AnalyzeDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Document !== undefined) {
        bodyParams["Document"] = serializeAws_json1_1Document(input.Document, context);
    }
    if (input.FeatureTypes !== undefined) {
        bodyParams["FeatureTypes"] = serializeAws_json1_1FeatureTypes(input.FeatureTypes, context);
    }
    if (input.HumanLoopConfig !== undefined) {
        bodyParams["HumanLoopConfig"] = serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ContentClassifiers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DetectDocumentTextRequest = (input, context) => {
    const bodyParams = {};
    if (input.Document !== undefined) {
        bodyParams["Document"] = serializeAws_json1_1Document(input.Document, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Document = (input, context) => {
    const bodyParams = {};
    if (input.Bytes !== undefined) {
        bodyParams["Bytes"] = Buffer.from(input.Bytes).toString("utf-8");
    }
    if (input.S3Object !== undefined) {
        bodyParams["S3Object"] = serializeAws_json1_1S3Object(input.S3Object, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentLocation = (input, context) => {
    const bodyParams = {};
    if (input.S3Object !== undefined) {
        bodyParams["S3Object"] = serializeAws_json1_1S3Object(input.S3Object, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FeatureTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetDocumentAnalysisRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDocumentTextDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopConfig = (input, context) => {
    const bodyParams = {};
    if (input.DataAttributes !== undefined) {
        bodyParams["DataAttributes"] = serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context);
    }
    if (input.FlowDefinitionArn !== undefined) {
        bodyParams["FlowDefinitionArn"] = input.FlowDefinitionArn;
    }
    if (input.HumanLoopName !== undefined) {
        bodyParams["HumanLoopName"] = input.HumanLoopName;
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopDataAttributes = (input, context) => {
    const bodyParams = {};
    if (input.ContentClassifiers !== undefined) {
        bodyParams["ContentClassifiers"] = serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationChannel = (input, context) => {
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.SNSTopicArn !== undefined) {
        bodyParams["SNSTopicArn"] = input.SNSTopicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Object = (input, context) => {
    const bodyParams = {};
    if (input.Bucket !== undefined) {
        bodyParams["Bucket"] = input.Bucket;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1StartDocumentAnalysisRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DocumentLocation !== undefined) {
        bodyParams["DocumentLocation"] = serializeAws_json1_1DocumentLocation(input.DocumentLocation, context);
    }
    if (input.FeatureTypes !== undefined) {
        bodyParams["FeatureTypes"] = serializeAws_json1_1FeatureTypes(input.FeatureTypes, context);
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartDocumentTextDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DocumentLocation !== undefined) {
        bodyParams["DocumentLocation"] = serializeAws_json1_1DocumentLocation(input.DocumentLocation, context);
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AnalyzeDocumentResponse = (output, context) => {
    let contents = {
        __type: "AnalyzeDocumentResponse",
        AnalyzeDocumentModelVersion: undefined,
        Blocks: undefined,
        DocumentMetadata: undefined,
        HumanLoopActivationOutput: undefined
    };
    if (output.AnalyzeDocumentModelVersion !== undefined &&
        output.AnalyzeDocumentModelVersion !== null) {
        contents.AnalyzeDocumentModelVersion = output.AnalyzeDocumentModelVersion;
    }
    if (output.Blocks !== undefined && output.Blocks !== null) {
        contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
    }
    if (output.DocumentMetadata !== undefined &&
        output.DocumentMetadata !== null) {
        contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context);
    }
    if (output.HumanLoopActivationOutput !== undefined &&
        output.HumanLoopActivationOutput !== null) {
        contents.HumanLoopActivationOutput = deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context);
    }
    return contents;
};
const deserializeAws_json1_1BadDocumentException = (output, context) => {
    let contents = {
        __type: "BadDocumentException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Block = (output, context) => {
    let contents = {
        __type: "Block",
        BlockType: undefined,
        ColumnIndex: undefined,
        ColumnSpan: undefined,
        Confidence: undefined,
        EntityTypes: undefined,
        Geometry: undefined,
        Id: undefined,
        Page: undefined,
        Relationships: undefined,
        RowIndex: undefined,
        RowSpan: undefined,
        SelectionStatus: undefined,
        Text: undefined
    };
    if (output.BlockType !== undefined && output.BlockType !== null) {
        contents.BlockType = output.BlockType;
    }
    if (output.ColumnIndex !== undefined && output.ColumnIndex !== null) {
        contents.ColumnIndex = output.ColumnIndex;
    }
    if (output.ColumnSpan !== undefined && output.ColumnSpan !== null) {
        contents.ColumnSpan = output.ColumnSpan;
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.EntityTypes !== undefined && output.EntityTypes !== null) {
        contents.EntityTypes = deserializeAws_json1_1EntityTypes(output.EntityTypes, context);
    }
    if (output.Geometry !== undefined && output.Geometry !== null) {
        contents.Geometry = deserializeAws_json1_1Geometry(output.Geometry, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Page !== undefined && output.Page !== null) {
        contents.Page = output.Page;
    }
    if (output.Relationships !== undefined && output.Relationships !== null) {
        contents.Relationships = deserializeAws_json1_1RelationshipList(output.Relationships, context);
    }
    if (output.RowIndex !== undefined && output.RowIndex !== null) {
        contents.RowIndex = output.RowIndex;
    }
    if (output.RowSpan !== undefined && output.RowSpan !== null) {
        contents.RowSpan = output.RowSpan;
    }
    if (output.SelectionStatus !== undefined && output.SelectionStatus !== null) {
        contents.SelectionStatus = output.SelectionStatus;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    return contents;
};
const deserializeAws_json1_1BlockList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Block(entry, context));
};
const deserializeAws_json1_1BoundingBox = (output, context) => {
    let contents = {
        __type: "BoundingBox",
        Height: undefined,
        Left: undefined,
        Top: undefined,
        Width: undefined
    };
    if (output.Height !== undefined && output.Height !== null) {
        contents.Height = output.Height;
    }
    if (output.Left !== undefined && output.Left !== null) {
        contents.Left = output.Left;
    }
    if (output.Top !== undefined && output.Top !== null) {
        contents.Top = output.Top;
    }
    if (output.Width !== undefined && output.Width !== null) {
        contents.Width = output.Width;
    }
    return contents;
};
const deserializeAws_json1_1DetectDocumentTextResponse = (output, context) => {
    let contents = {
        __type: "DetectDocumentTextResponse",
        Blocks: undefined,
        DetectDocumentTextModelVersion: undefined,
        DocumentMetadata: undefined
    };
    if (output.Blocks !== undefined && output.Blocks !== null) {
        contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
    }
    if (output.DetectDocumentTextModelVersion !== undefined &&
        output.DetectDocumentTextModelVersion !== null) {
        contents.DetectDocumentTextModelVersion =
            output.DetectDocumentTextModelVersion;
    }
    if (output.DocumentMetadata !== undefined &&
        output.DocumentMetadata !== null) {
        contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentMetadata = (output, context) => {
    let contents = {
        __type: "DocumentMetadata",
        Pages: undefined
    };
    if (output.Pages !== undefined && output.Pages !== null) {
        contents.Pages = output.Pages;
    }
    return contents;
};
const deserializeAws_json1_1DocumentTooLargeException = (output, context) => {
    let contents = {
        __type: "DocumentTooLargeException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EntityTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Geometry = (output, context) => {
    let contents = {
        __type: "Geometry",
        BoundingBox: undefined,
        Polygon: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Polygon !== undefined && output.Polygon !== null) {
        contents.Polygon = deserializeAws_json1_1Polygon(output.Polygon, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDocumentAnalysisResponse = (output, context) => {
    let contents = {
        __type: "GetDocumentAnalysisResponse",
        AnalyzeDocumentModelVersion: undefined,
        Blocks: undefined,
        DocumentMetadata: undefined,
        JobStatus: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        Warnings: undefined
    };
    if (output.AnalyzeDocumentModelVersion !== undefined &&
        output.AnalyzeDocumentModelVersion !== null) {
        contents.AnalyzeDocumentModelVersion = output.AnalyzeDocumentModelVersion;
    }
    if (output.Blocks !== undefined && output.Blocks !== null) {
        contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
    }
    if (output.DocumentMetadata !== undefined &&
        output.DocumentMetadata !== null) {
        contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context);
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.Warnings !== undefined && output.Warnings !== null) {
        contents.Warnings = deserializeAws_json1_1Warnings(output.Warnings, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDocumentTextDetectionResponse = (output, context) => {
    let contents = {
        __type: "GetDocumentTextDetectionResponse",
        Blocks: undefined,
        DetectDocumentTextModelVersion: undefined,
        DocumentMetadata: undefined,
        JobStatus: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        Warnings: undefined
    };
    if (output.Blocks !== undefined && output.Blocks !== null) {
        contents.Blocks = deserializeAws_json1_1BlockList(output.Blocks, context);
    }
    if (output.DetectDocumentTextModelVersion !== undefined &&
        output.DetectDocumentTextModelVersion !== null) {
        contents.DetectDocumentTextModelVersion =
            output.DetectDocumentTextModelVersion;
    }
    if (output.DocumentMetadata !== undefined &&
        output.DocumentMetadata !== null) {
        contents.DocumentMetadata = deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context);
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.Warnings !== undefined && output.Warnings !== null) {
        contents.Warnings = deserializeAws_json1_1Warnings(output.Warnings, context);
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopActivationOutput = (output, context) => {
    let contents = {
        __type: "HumanLoopActivationOutput",
        HumanLoopActivationConditionsEvaluationResults: undefined,
        HumanLoopActivationReasons: undefined,
        HumanLoopArn: undefined
    };
    if (output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
        output.HumanLoopActivationConditionsEvaluationResults !== null) {
        contents.HumanLoopActivationConditionsEvaluationResults = new smithy_client_1.LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults);
    }
    if (output.HumanLoopActivationReasons !== undefined &&
        output.HumanLoopActivationReasons !== null) {
        contents.HumanLoopActivationReasons = deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context);
    }
    if (output.HumanLoopArn !== undefined && output.HumanLoopArn !== null) {
        contents.HumanLoopArn = output.HumanLoopArn;
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopActivationReasons = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1HumanLoopQuotaExceededException = (output, context) => {
    let contents = {
        __type: "HumanLoopQuotaExceededException",
        Code: undefined,
        Message: undefined,
        QuotaCode: undefined,
        ResourceType: undefined,
        ServiceCode: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
        contents.QuotaCode = output.QuotaCode;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    return contents;
};
const deserializeAws_json1_1IdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidJobIdException = (output, context) => {
    let contents = {
        __type: "InvalidJobIdException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidS3ObjectException = (output, context) => {
    let contents = {
        __type: "InvalidS3ObjectException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Pages = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Point = (output, context) => {
    let contents = {
        __type: "Point",
        X: undefined,
        Y: undefined
    };
    if (output.X !== undefined && output.X !== null) {
        contents.X = output.X;
    }
    if (output.Y !== undefined && output.Y !== null) {
        contents.Y = output.Y;
    }
    return contents;
};
const deserializeAws_json1_1Polygon = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Point(entry, context));
};
const deserializeAws_json1_1ProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputExceededException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Relationship = (output, context) => {
    let contents = {
        __type: "Relationship",
        Ids: undefined,
        Type: undefined
    };
    if (output.Ids !== undefined && output.Ids !== null) {
        contents.Ids = deserializeAws_json1_1IdList(output.Ids, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1RelationshipList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Relationship(entry, context));
};
const deserializeAws_json1_1StartDocumentAnalysisResponse = (output, context) => {
    let contents = {
        __type: "StartDocumentAnalysisResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartDocumentTextDetectionResponse = (output, context) => {
    let contents = {
        __type: "StartDocumentTextDetectionResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedDocumentException = (output, context) => {
    let contents = {
        __type: "UnsupportedDocumentException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Warning = (output, context) => {
    let contents = {
        __type: "Warning",
        ErrorCode: undefined,
        Pages: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.Pages !== undefined && output.Pages !== null) {
        contents.Pages = deserializeAws_json1_1Pages(output.Pages, context);
    }
    return contents;
};
const deserializeAws_json1_1Warnings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Warning(entry, context));
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