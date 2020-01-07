"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1BatchDeleteDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.BatchDeleteDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteDocumentCommand = serializeAws_json1_1BatchDeleteDocumentCommand;
async function serializeAws_json1_1BatchPutDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.BatchPutDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchPutDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchPutDocumentCommand = serializeAws_json1_1BatchPutDocumentCommand;
async function serializeAws_json1_1CreateDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDataSourceCommand = serializeAws_json1_1CreateDataSourceCommand;
async function serializeAws_json1_1CreateFaqCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateFaq";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFaqCommand = serializeAws_json1_1CreateFaqCommand;
async function serializeAws_json1_1CreateIndexCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateIndex";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateIndexCommand = serializeAws_json1_1CreateIndexCommand;
async function serializeAws_json1_1DeleteFaqCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.DeleteFaq";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFaqCommand = serializeAws_json1_1DeleteFaqCommand;
async function serializeAws_json1_1DeleteIndexCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.DeleteIndex";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteIndexCommand = serializeAws_json1_1DeleteIndexCommand;
async function serializeAws_json1_1DescribeDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDataSourceCommand = serializeAws_json1_1DescribeDataSourceCommand;
async function serializeAws_json1_1DescribeFaqCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeFaq";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFaqRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFaqCommand = serializeAws_json1_1DescribeFaqCommand;
async function serializeAws_json1_1DescribeIndexCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeIndex";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeIndexCommand = serializeAws_json1_1DescribeIndexCommand;
async function serializeAws_json1_1ListDataSourceSyncJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.ListDataSourceSyncJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDataSourceSyncJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDataSourceSyncJobsCommand = serializeAws_json1_1ListDataSourceSyncJobsCommand;
async function serializeAws_json1_1ListDataSourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.ListDataSources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDataSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDataSourcesCommand = serializeAws_json1_1ListDataSourcesCommand;
async function serializeAws_json1_1ListFaqsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.ListFaqs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFaqsCommand = serializeAws_json1_1ListFaqsCommand;
async function serializeAws_json1_1ListIndicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.ListIndices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListIndicesCommand = serializeAws_json1_1ListIndicesCommand;
async function serializeAws_json1_1QueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.Query";
    let body;
    body = JSON.stringify(serializeAws_json1_1QueryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1QueryCommand = serializeAws_json1_1QueryCommand;
async function serializeAws_json1_1StartDataSourceSyncJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.StartDataSourceSyncJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDataSourceSyncJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDataSourceSyncJobCommand = serializeAws_json1_1StartDataSourceSyncJobCommand;
async function serializeAws_json1_1StopDataSourceSyncJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.StopDataSourceSyncJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDataSourceSyncJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopDataSourceSyncJobCommand = serializeAws_json1_1StopDataSourceSyncJobCommand;
async function serializeAws_json1_1SubmitFeedbackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.SubmitFeedback";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitFeedbackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubmitFeedbackCommand = serializeAws_json1_1SubmitFeedbackCommand;
async function serializeAws_json1_1UpdateDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.UpdateDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDataSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDataSourceCommand = serializeAws_json1_1UpdateDataSourceCommand;
async function serializeAws_json1_1UpdateIndexCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSKendraFrontendService.UpdateIndex";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateIndexCommand = serializeAws_json1_1UpdateIndexCommand;
async function deserializeAws_json1_1BatchDeleteDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteDocumentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteDocumentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteDocumentCommand = deserializeAws_json1_1BatchDeleteDocumentCommand;
async function deserializeAws_json1_1BatchDeleteDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1BatchPutDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchPutDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchPutDocumentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchPutDocumentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchPutDocumentCommand = deserializeAws_json1_1BatchPutDocumentCommand;
async function deserializeAws_json1_1BatchPutDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1CreateDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDataSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDataSourceCommand = deserializeAws_json1_1CreateDataSourceCommand;
async function deserializeAws_json1_1CreateDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistException":
        case "com.amazonaws.kendra#ResourceAlreadyExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1CreateFaqCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFaqCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFaqResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFaqResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFaqCommand = deserializeAws_json1_1CreateFaqCommand;
async function deserializeAws_json1_1CreateFaqCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1CreateIndexCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIndexResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateIndexResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateIndexCommand = deserializeAws_json1_1CreateIndexCommand;
async function deserializeAws_json1_1CreateIndexCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistException":
        case "com.amazonaws.kendra#ResourceAlreadyExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.kendra#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1DeleteFaqCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFaqCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFaqCommand = deserializeAws_json1_1DeleteFaqCommand;
async function deserializeAws_json1_1DeleteFaqCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1DeleteIndexCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteIndexCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteIndexCommand = deserializeAws_json1_1DeleteIndexCommand;
async function deserializeAws_json1_1DeleteIndexCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1DescribeDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataSourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDataSourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDataSourceCommand = deserializeAws_json1_1DescribeDataSourceCommand;
async function deserializeAws_json1_1DescribeDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1DescribeFaqCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFaqCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFaqResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFaqResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFaqCommand = deserializeAws_json1_1DescribeFaqCommand;
async function deserializeAws_json1_1DescribeFaqCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1DescribeIndexCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeIndexCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIndexResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeIndexResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeIndexCommand = deserializeAws_json1_1DescribeIndexCommand;
async function deserializeAws_json1_1DescribeIndexCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1ListDataSourceSyncJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDataSourceSyncJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDataSourceSyncJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDataSourceSyncJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDataSourceSyncJobsCommand = deserializeAws_json1_1ListDataSourceSyncJobsCommand;
async function deserializeAws_json1_1ListDataSourceSyncJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1ListDataSourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDataSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDataSourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDataSourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDataSourcesCommand = deserializeAws_json1_1ListDataSourcesCommand;
async function deserializeAws_json1_1ListDataSourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1ListFaqsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFaqsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFaqsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFaqsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFaqsCommand = deserializeAws_json1_1ListFaqsCommand;
async function deserializeAws_json1_1ListFaqsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1ListIndicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListIndicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIndicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListIndicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListIndicesCommand = deserializeAws_json1_1ListIndicesCommand;
async function deserializeAws_json1_1ListIndicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1QueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1QueryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "QueryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1QueryCommand = deserializeAws_json1_1QueryCommand;
async function deserializeAws_json1_1QueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1StartDataSourceSyncJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDataSourceSyncJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDataSourceSyncJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDataSourceSyncJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDataSourceSyncJobCommand = deserializeAws_json1_1StartDataSourceSyncJobCommand;
async function deserializeAws_json1_1StartDataSourceSyncJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.kendra#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1StopDataSourceSyncJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopDataSourceSyncJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopDataSourceSyncJobCommand = deserializeAws_json1_1StopDataSourceSyncJobCommand;
async function deserializeAws_json1_1StopDataSourceSyncJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1SubmitFeedbackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubmitFeedbackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubmitFeedbackCommand = deserializeAws_json1_1SubmitFeedbackCommand;
async function deserializeAws_json1_1SubmitFeedbackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.kendra#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1UpdateDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDataSourceCommand = deserializeAws_json1_1UpdateDataSourceCommand;
async function deserializeAws_json1_1UpdateDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
async function deserializeAws_json1_1UpdateIndexCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateIndexCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateIndexCommand = deserializeAws_json1_1UpdateIndexCommand;
async function deserializeAws_json1_1UpdateIndexCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kendra#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.kendra#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.kendra#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.kendra#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.kendra#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.kendra#ValidationException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = Object.assign({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
    const contents = Object.assign({ name: "ServiceQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AccessControlListConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.KeyPath !== undefined) {
        bodyParams["KeyPath"] = input.KeyPath;
    }
    return bodyParams;
};
const serializeAws_json1_1AclConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AllowedGroupsColumnName !== undefined) {
        bodyParams["AllowedGroupsColumnName"] = input.AllowedGroupsColumnName;
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeFilter = (input, context) => {
    const bodyParams = {};
    if (input.AndAllFilters !== undefined) {
        bodyParams["AndAllFilters"] = serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context);
    }
    if (input.ContainsAll !== undefined) {
        bodyParams["ContainsAll"] = serializeAws_json1_1DocumentAttribute(input.ContainsAll, context);
    }
    if (input.ContainsAny !== undefined) {
        bodyParams["ContainsAny"] = serializeAws_json1_1DocumentAttribute(input.ContainsAny, context);
    }
    if (input.EqualsTo !== undefined) {
        bodyParams["EqualsTo"] = serializeAws_json1_1DocumentAttribute(input.EqualsTo, context);
    }
    if (input.GreaterThan !== undefined) {
        bodyParams["GreaterThan"] = serializeAws_json1_1DocumentAttribute(input.GreaterThan, context);
    }
    if (input.GreaterThanOrEquals !== undefined) {
        bodyParams["GreaterThanOrEquals"] = serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context);
    }
    if (input.LessThan !== undefined) {
        bodyParams["LessThan"] = serializeAws_json1_1DocumentAttribute(input.LessThan, context);
    }
    if (input.LessThanOrEquals !== undefined) {
        bodyParams["LessThanOrEquals"] = serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context);
    }
    if (input.NotFilter !== undefined) {
        bodyParams["NotFilter"] = serializeAws_json1_1AttributeFilter(input.NotFilter, context);
    }
    if (input.OrAllFilters !== undefined) {
        bodyParams["OrAllFilters"] = serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AttributeFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1BatchDeleteDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentIdList !== undefined) {
        bodyParams["DocumentIdList"] = serializeAws_json1_1DocumentIdList(input.DocumentIdList, context);
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchPutDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.Documents !== undefined) {
        bodyParams["Documents"] = serializeAws_json1_1DocumentList(input.Documents, context);
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ChangeDetectingColumns = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ClickFeedback = (input, context) => {
    const bodyParams = {};
    if (input.ClickTime !== undefined) {
        bodyParams["ClickTime"] = Math.round(input.ClickTime.getTime() / 1000);
    }
    if (input.ResultId !== undefined) {
        bodyParams["ResultId"] = input.ResultId;
    }
    return bodyParams;
};
const serializeAws_json1_1ClickFeedbackList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ClickFeedback(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ColumnConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.ChangeDetectingColumns !== undefined) {
        bodyParams["ChangeDetectingColumns"] = serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context);
    }
    if (input.DocumentDataColumnName !== undefined) {
        bodyParams["DocumentDataColumnName"] = input.DocumentDataColumnName;
    }
    if (input.DocumentIdColumnName !== undefined) {
        bodyParams["DocumentIdColumnName"] = input.DocumentIdColumnName;
    }
    if (input.DocumentTitleColumnName !== undefined) {
        bodyParams["DocumentTitleColumnName"] = input.DocumentTitleColumnName;
    }
    if (input.FieldMappings !== undefined) {
        bodyParams["FieldMappings"] = serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConnectionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseHost !== undefined) {
        bodyParams["DatabaseHost"] = input.DatabaseHost;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.DatabasePort !== undefined) {
        bodyParams["DatabasePort"] = input.DatabasePort;
    }
    if (input.SecretArn !== undefined) {
        bodyParams["SecretArn"] = input.SecretArn;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDataSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = serializeAws_json1_1DataSourceConfiguration(input.Configuration, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFaqRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.S3Path !== undefined) {
        bodyParams["S3Path"] = serializeAws_json1_1S3Path(input.S3Path, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateIndexRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.ServerSideEncryptionConfiguration !== undefined) {
        bodyParams["ServerSideEncryptionConfiguration"] = serializeAws_json1_1ServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataSourceConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseConfiguration !== undefined) {
        bodyParams["DatabaseConfiguration"] = serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context);
    }
    if (input.S3Configuration !== undefined) {
        bodyParams["S3Configuration"] = serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context);
    }
    if (input.SharePointConfiguration !== undefined) {
        bodyParams["SharePointConfiguration"] = serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DataSourceToIndexFieldMapping = (input, context) => {
    const bodyParams = {};
    if (input.DataSourceFieldName !== undefined) {
        bodyParams["DataSourceFieldName"] = input.DataSourceFieldName;
    }
    if (input.DateFieldFormat !== undefined) {
        bodyParams["DateFieldFormat"] = input.DateFieldFormat;
    }
    if (input.IndexFieldName !== undefined) {
        bodyParams["IndexFieldName"] = input.IndexFieldName;
    }
    return bodyParams;
};
const serializeAws_json1_1DataSourceToIndexFieldMappingList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DataSourceVpcConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context);
    }
    if (input.SubnetIds !== undefined) {
        bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdList(input.SubnetIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DatabaseConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AclConfiguration !== undefined) {
        bodyParams["AclConfiguration"] = serializeAws_json1_1AclConfiguration(input.AclConfiguration, context);
    }
    if (input.ColumnConfiguration !== undefined) {
        bodyParams["ColumnConfiguration"] = serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context);
    }
    if (input.ConnectionConfiguration !== undefined) {
        bodyParams["ConnectionConfiguration"] = serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context);
    }
    if (input.DatabaseEngineType !== undefined) {
        bodyParams["DatabaseEngineType"] = input.DatabaseEngineType;
    }
    if (input.VpcConfiguration !== undefined) {
        bodyParams["VpcConfiguration"] = serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFaqRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteIndexRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDataSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFaqRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeIndexRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1Document = (input, context) => {
    const bodyParams = {};
    if (input.AccessControlList !== undefined) {
        bodyParams["AccessControlList"] = serializeAws_json1_1PrincipalList(input.AccessControlList, context);
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1DocumentAttributeList(input.Attributes, context);
    }
    if (input.Blob !== undefined) {
        bodyParams["Blob"] = Buffer.from(input.Blob).toString("utf-8");
    }
    if (input.ContentType !== undefined) {
        bodyParams["ContentType"] = input.ContentType;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.S3Path !== undefined) {
        bodyParams["S3Path"] = serializeAws_json1_1S3Path(input.S3Path, context);
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentAttribute = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = serializeAws_json1_1DocumentAttributeValue(input.Value, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentAttributeKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DocumentAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DocumentAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DocumentAttributeStringListValue = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DocumentAttributeValue = (input, context) => {
    const bodyParams = {};
    if (input.DateValue !== undefined) {
        bodyParams["DateValue"] = Math.round(input.DateValue.getTime() / 1000);
    }
    if (input.LongValue !== undefined) {
        bodyParams["LongValue"] = input.LongValue;
    }
    if (input.StringListValue !== undefined) {
        bodyParams["StringListValue"] = serializeAws_json1_1DocumentAttributeStringListValue(input.StringListValue, context);
    }
    if (input.StringValue !== undefined) {
        bodyParams["StringValue"] = input.StringValue;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DocumentList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Document(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DocumentMetadataConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Relevance !== undefined) {
        bodyParams["Relevance"] = serializeAws_json1_1Relevance(input.Relevance, context);
    }
    if (input.Search !== undefined) {
        bodyParams["Search"] = serializeAws_json1_1Search(input.Search, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentMetadataConfigurationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DocumentMetadataConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DocumentsMetadataConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.S3Prefix !== undefined) {
        bodyParams["S3Prefix"] = input.S3Prefix;
    }
    return bodyParams;
};
const serializeAws_json1_1Facet = (input, context) => {
    const bodyParams = {};
    if (input.DocumentAttributeKey !== undefined) {
        bodyParams["DocumentAttributeKey"] = input.DocumentAttributeKey;
    }
    return bodyParams;
};
const serializeAws_json1_1FacetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Facet(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListDataSourceSyncJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StartTimeFilter !== undefined) {
        bodyParams["StartTimeFilter"] = serializeAws_json1_1TimeRange(input.StartTimeFilter, context);
    }
    if (input.StatusFilter !== undefined) {
        bodyParams["StatusFilter"] = input.StatusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDataSourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFaqsRequest = (input, context) => {
    const bodyParams = {};
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListIndicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Principal = (input, context) => {
    const bodyParams = {};
    if (input.Access !== undefined) {
        bodyParams["Access"] = input.Access;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1PrincipalList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Principal(entry, context));
    }
    return contents;
};
const serializeAws_json1_1QueryRequest = (input, context) => {
    const bodyParams = {};
    if (input.AttributeFilter !== undefined) {
        bodyParams["AttributeFilter"] = serializeAws_json1_1AttributeFilter(input.AttributeFilter, context);
    }
    if (input.Facets !== undefined) {
        bodyParams["Facets"] = serializeAws_json1_1FacetList(input.Facets, context);
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.PageNumber !== undefined) {
        bodyParams["PageNumber"] = input.PageNumber;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.QueryResultTypeFilter !== undefined) {
        bodyParams["QueryResultTypeFilter"] = input.QueryResultTypeFilter;
    }
    if (input.QueryText !== undefined) {
        bodyParams["QueryText"] = input.QueryText;
    }
    if (input.RequestedDocumentAttributes !== undefined) {
        bodyParams["RequestedDocumentAttributes"] = serializeAws_json1_1DocumentAttributeKeyList(input.RequestedDocumentAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Relevance = (input, context) => {
    const bodyParams = {};
    if (input.Duration !== undefined) {
        bodyParams["Duration"] = input.Duration;
    }
    if (input.Freshness !== undefined) {
        bodyParams["Freshness"] = input.Freshness;
    }
    if (input.Importance !== undefined) {
        bodyParams["Importance"] = input.Importance;
    }
    if (input.RankOrder !== undefined) {
        bodyParams["RankOrder"] = input.RankOrder;
    }
    if (input.ValueImportanceMap !== undefined) {
        bodyParams["ValueImportanceMap"] = serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RelevanceFeedback = (input, context) => {
    const bodyParams = {};
    if (input.RelevanceValue !== undefined) {
        bodyParams["RelevanceValue"] = input.RelevanceValue;
    }
    if (input.ResultId !== undefined) {
        bodyParams["ResultId"] = input.ResultId;
    }
    return bodyParams;
};
const serializeAws_json1_1RelevanceFeedbackList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RelevanceFeedback(entry, context));
    }
    return contents;
};
const serializeAws_json1_1S3DataSourceConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AccessControlListConfiguration !== undefined) {
        bodyParams["AccessControlListConfiguration"] = serializeAws_json1_1AccessControlListConfiguration(input.AccessControlListConfiguration, context);
    }
    if (input.BucketName !== undefined) {
        bodyParams["BucketName"] = input.BucketName;
    }
    if (input.DocumentsMetadataConfiguration !== undefined) {
        bodyParams["DocumentsMetadataConfiguration"] = serializeAws_json1_1DocumentsMetadataConfiguration(input.DocumentsMetadataConfiguration, context);
    }
    if (input.ExclusionPatterns !== undefined) {
        bodyParams["ExclusionPatterns"] = serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context);
    }
    if (input.InclusionPrefixes !== undefined) {
        bodyParams["InclusionPrefixes"] = serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Path = (input, context) => {
    const bodyParams = {};
    if (input.Bucket !== undefined) {
        bodyParams["Bucket"] = input.Bucket;
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    return bodyParams;
};
const serializeAws_json1_1Search = (input, context) => {
    const bodyParams = {};
    if (input.Displayable !== undefined) {
        bodyParams["Displayable"] = input.Displayable;
    }
    if (input.Facetable !== undefined) {
        bodyParams["Facetable"] = input.Facetable;
    }
    if (input.Searchable !== undefined) {
        bodyParams["Searchable"] = input.Searchable;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ServerSideEncryptionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1SharePointConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CrawlAttachments !== undefined) {
        bodyParams["CrawlAttachments"] = input.CrawlAttachments;
    }
    if (input.DocumentTitleFieldName !== undefined) {
        bodyParams["DocumentTitleFieldName"] = input.DocumentTitleFieldName;
    }
    if (input.FieldMappings !== undefined) {
        bodyParams["FieldMappings"] = serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context);
    }
    if (input.SecretArn !== undefined) {
        bodyParams["SecretArn"] = input.SecretArn;
    }
    if (input.SharePointVersion !== undefined) {
        bodyParams["SharePointVersion"] = input.SharePointVersion;
    }
    if (input.Urls !== undefined) {
        bodyParams["Urls"] = serializeAws_json1_1SharePointUrlList(input.Urls, context);
    }
    if (input.VpcConfiguration !== undefined) {
        bodyParams["VpcConfiguration"] = serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SharePointUrlList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartDataSourceSyncJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopDataSourceSyncJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    return bodyParams;
};
const serializeAws_json1_1SubmitFeedbackRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClickFeedbackItems !== undefined) {
        bodyParams["ClickFeedbackItems"] = serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context);
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.QueryId !== undefined) {
        bodyParams["QueryId"] = input.QueryId;
    }
    if (input.RelevanceFeedbackItems !== undefined) {
        bodyParams["RelevanceFeedbackItems"] = serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SubnetIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TimeRange = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDataSourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = serializeAws_json1_1DataSourceConfiguration(input.Configuration, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.IndexId !== undefined) {
        bodyParams["IndexId"] = input.IndexId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateIndexRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.DocumentMetadataConfigurationUpdates !== undefined) {
        bodyParams["DocumentMetadataConfigurationUpdates"] = serializeAws_json1_1DocumentMetadataConfigurationList(input.DocumentMetadataConfigurationUpdates, context);
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ValueImportanceMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AccessControlListConfiguration = (output, context) => {
    let contents = {
        __type: "AccessControlListConfiguration",
        KeyPath: undefined
    };
    if (output.KeyPath !== undefined && output.KeyPath !== null) {
        contents.KeyPath = output.KeyPath;
    }
    return contents;
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
const deserializeAws_json1_1AclConfiguration = (output, context) => {
    let contents = {
        __type: "AclConfiguration",
        AllowedGroupsColumnName: undefined
    };
    if (output.AllowedGroupsColumnName !== undefined &&
        output.AllowedGroupsColumnName !== null) {
        contents.AllowedGroupsColumnName = output.AllowedGroupsColumnName;
    }
    return contents;
};
const deserializeAws_json1_1AdditionalResultAttribute = (output, context) => {
    let contents = {
        __type: "AdditionalResultAttribute",
        Key: undefined,
        Value: undefined,
        ValueType: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context);
    }
    if (output.ValueType !== undefined && output.ValueType !== null) {
        contents.ValueType = output.ValueType;
    }
    return contents;
};
const deserializeAws_json1_1AdditionalResultAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AdditionalResultAttribute(entry, context));
};
const deserializeAws_json1_1AdditionalResultAttributeValue = (output, context) => {
    let contents = {
        __type: "AdditionalResultAttributeValue",
        TextWithHighlightsValue: undefined
    };
    if (output.TextWithHighlightsValue !== undefined &&
        output.TextWithHighlightsValue !== null) {
        contents.TextWithHighlightsValue = deserializeAws_json1_1TextWithHighlights(output.TextWithHighlightsValue, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteDocumentResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteDocumentResponse",
        FailedDocuments: undefined
    };
    if (output.FailedDocuments !== undefined && output.FailedDocuments !== null) {
        contents.FailedDocuments = deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments(output.FailedDocuments, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument = (output, context) => {
    let contents = {
        __type: "BatchDeleteDocumentResponseFailedDocument",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        Id: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context));
};
const deserializeAws_json1_1BatchPutDocumentResponse = (output, context) => {
    let contents = {
        __type: "BatchPutDocumentResponse",
        FailedDocuments: undefined
    };
    if (output.FailedDocuments !== undefined && output.FailedDocuments !== null) {
        contents.FailedDocuments = deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments(output.FailedDocuments, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchPutDocumentResponseFailedDocument = (output, context) => {
    let contents = {
        __type: "BatchPutDocumentResponseFailedDocument",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        Id: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context));
};
const deserializeAws_json1_1ChangeDetectingColumns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ColumnConfiguration = (output, context) => {
    let contents = {
        __type: "ColumnConfiguration",
        ChangeDetectingColumns: undefined,
        DocumentDataColumnName: undefined,
        DocumentIdColumnName: undefined,
        DocumentTitleColumnName: undefined,
        FieldMappings: undefined
    };
    if (output.ChangeDetectingColumns !== undefined &&
        output.ChangeDetectingColumns !== null) {
        contents.ChangeDetectingColumns = deserializeAws_json1_1ChangeDetectingColumns(output.ChangeDetectingColumns, context);
    }
    if (output.DocumentDataColumnName !== undefined &&
        output.DocumentDataColumnName !== null) {
        contents.DocumentDataColumnName = output.DocumentDataColumnName;
    }
    if (output.DocumentIdColumnName !== undefined &&
        output.DocumentIdColumnName !== null) {
        contents.DocumentIdColumnName = output.DocumentIdColumnName;
    }
    if (output.DocumentTitleColumnName !== undefined &&
        output.DocumentTitleColumnName !== null) {
        contents.DocumentTitleColumnName = output.DocumentTitleColumnName;
    }
    if (output.FieldMappings !== undefined && output.FieldMappings !== null) {
        contents.FieldMappings = deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context);
    }
    return contents;
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    let contents = {
        __type: "ConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConnectionConfiguration = (output, context) => {
    let contents = {
        __type: "ConnectionConfiguration",
        DatabaseHost: undefined,
        DatabaseName: undefined,
        DatabasePort: undefined,
        SecretArn: undefined,
        TableName: undefined
    };
    if (output.DatabaseHost !== undefined && output.DatabaseHost !== null) {
        contents.DatabaseHost = output.DatabaseHost;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.DatabasePort !== undefined && output.DatabasePort !== null) {
        contents.DatabasePort = output.DatabasePort;
    }
    if (output.SecretArn !== undefined && output.SecretArn !== null) {
        contents.SecretArn = output.SecretArn;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_1CreateDataSourceResponse = (output, context) => {
    let contents = {
        __type: "CreateDataSourceResponse",
        Id: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1CreateFaqResponse = (output, context) => {
    let contents = {
        __type: "CreateFaqResponse",
        Id: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1CreateIndexResponse = (output, context) => {
    let contents = {
        __type: "CreateIndexResponse",
        Id: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    return contents;
};
const deserializeAws_json1_1DataSourceConfiguration = (output, context) => {
    let contents = {
        __type: "DataSourceConfiguration",
        DatabaseConfiguration: undefined,
        S3Configuration: undefined,
        SharePointConfiguration: undefined
    };
    if (output.DatabaseConfiguration !== undefined &&
        output.DatabaseConfiguration !== null) {
        contents.DatabaseConfiguration = deserializeAws_json1_1DatabaseConfiguration(output.DatabaseConfiguration, context);
    }
    if (output.S3Configuration !== undefined && output.S3Configuration !== null) {
        contents.S3Configuration = deserializeAws_json1_1S3DataSourceConfiguration(output.S3Configuration, context);
    }
    if (output.SharePointConfiguration !== undefined &&
        output.SharePointConfiguration !== null) {
        contents.SharePointConfiguration = deserializeAws_json1_1SharePointConfiguration(output.SharePointConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DataSourceSummary = (output, context) => {
    let contents = {
        __type: "DataSourceSummary",
        CreatedAt: undefined,
        Id: undefined,
        Name: undefined,
        Status: undefined,
        Type: undefined,
        UpdatedAt: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DataSourceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataSourceSummary(entry, context));
};
const deserializeAws_json1_1DataSourceSyncJob = (output, context) => {
    let contents = {
        __type: "DataSourceSyncJob",
        DataSourceErrorCode: undefined,
        EndTime: undefined,
        ErrorCode: undefined,
        ErrorMessage: undefined,
        ExecutionId: undefined,
        StartTime: undefined,
        Status: undefined
    };
    if (output.DataSourceErrorCode !== undefined &&
        output.DataSourceErrorCode !== null) {
        contents.DataSourceErrorCode = output.DataSourceErrorCode;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DataSourceSyncJobHistoryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataSourceSyncJob(entry, context));
};
const deserializeAws_json1_1DataSourceToIndexFieldMapping = (output, context) => {
    let contents = {
        __type: "DataSourceToIndexFieldMapping",
        DataSourceFieldName: undefined,
        DateFieldFormat: undefined,
        IndexFieldName: undefined
    };
    if (output.DataSourceFieldName !== undefined &&
        output.DataSourceFieldName !== null) {
        contents.DataSourceFieldName = output.DataSourceFieldName;
    }
    if (output.DateFieldFormat !== undefined && output.DateFieldFormat !== null) {
        contents.DateFieldFormat = output.DateFieldFormat;
    }
    if (output.IndexFieldName !== undefined && output.IndexFieldName !== null) {
        contents.IndexFieldName = output.IndexFieldName;
    }
    return contents;
};
const deserializeAws_json1_1DataSourceToIndexFieldMappingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context));
};
const deserializeAws_json1_1DataSourceVpcConfiguration = (output, context) => {
    let contents = {
        __type: "DataSourceVpcConfiguration",
        SecurityGroupIds: undefined,
        SubnetIds: undefined
    };
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context);
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1SubnetIdList(output.SubnetIds, context);
    }
    return contents;
};
const deserializeAws_json1_1DatabaseConfiguration = (output, context) => {
    let contents = {
        __type: "DatabaseConfiguration",
        AclConfiguration: undefined,
        ColumnConfiguration: undefined,
        ConnectionConfiguration: undefined,
        DatabaseEngineType: undefined,
        VpcConfiguration: undefined
    };
    if (output.AclConfiguration !== undefined &&
        output.AclConfiguration !== null) {
        contents.AclConfiguration = deserializeAws_json1_1AclConfiguration(output.AclConfiguration, context);
    }
    if (output.ColumnConfiguration !== undefined &&
        output.ColumnConfiguration !== null) {
        contents.ColumnConfiguration = deserializeAws_json1_1ColumnConfiguration(output.ColumnConfiguration, context);
    }
    if (output.ConnectionConfiguration !== undefined &&
        output.ConnectionConfiguration !== null) {
        contents.ConnectionConfiguration = deserializeAws_json1_1ConnectionConfiguration(output.ConnectionConfiguration, context);
    }
    if (output.DatabaseEngineType !== undefined &&
        output.DatabaseEngineType !== null) {
        contents.DatabaseEngineType = output.DatabaseEngineType;
    }
    if (output.VpcConfiguration !== undefined &&
        output.VpcConfiguration !== null) {
        contents.VpcConfiguration = deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDataSourceResponse = (output, context) => {
    let contents = {
        __type: "DescribeDataSourceResponse",
        Configuration: undefined,
        CreatedAt: undefined,
        Description: undefined,
        ErrorMessage: undefined,
        Id: undefined,
        IndexId: undefined,
        Name: undefined,
        RoleArn: undefined,
        Schedule: undefined,
        Status: undefined,
        Type: undefined,
        UpdatedAt: undefined
    };
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = deserializeAws_json1_1DataSourceConfiguration(output.Configuration, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IndexId !== undefined && output.IndexId !== null) {
        contents.IndexId = output.IndexId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DescribeFaqResponse = (output, context) => {
    let contents = {
        __type: "DescribeFaqResponse",
        CreatedAt: undefined,
        Description: undefined,
        ErrorMessage: undefined,
        Id: undefined,
        IndexId: undefined,
        Name: undefined,
        RoleArn: undefined,
        S3Path: undefined,
        Status: undefined,
        UpdatedAt: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IndexId !== undefined && output.IndexId !== null) {
        contents.IndexId = output.IndexId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.S3Path !== undefined && output.S3Path !== null) {
        contents.S3Path = deserializeAws_json1_1S3Path(output.S3Path, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DescribeIndexResponse = (output, context) => {
    let contents = {
        __type: "DescribeIndexResponse",
        CreatedAt: undefined,
        Description: undefined,
        DocumentMetadataConfigurations: undefined,
        ErrorMessage: undefined,
        Id: undefined,
        IndexStatistics: undefined,
        Name: undefined,
        RoleArn: undefined,
        ServerSideEncryptionConfiguration: undefined,
        Status: undefined,
        UpdatedAt: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.DocumentMetadataConfigurations !== undefined &&
        output.DocumentMetadataConfigurations !== null) {
        contents.DocumentMetadataConfigurations = deserializeAws_json1_1DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context);
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.IndexStatistics !== undefined && output.IndexStatistics !== null) {
        contents.IndexStatistics = deserializeAws_json1_1IndexStatistics(output.IndexStatistics, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.ServerSideEncryptionConfiguration !== undefined &&
        output.ServerSideEncryptionConfiguration !== null) {
        contents.ServerSideEncryptionConfiguration = deserializeAws_json1_1ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DocumentAttribute = (output, context) => {
    let contents = {
        __type: "DocumentAttribute",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = deserializeAws_json1_1DocumentAttributeValue(output.Value, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentAttribute(entry, context));
};
const deserializeAws_json1_1DocumentAttributeStringListValue = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DocumentAttributeValue = (output, context) => {
    let contents = {
        __type: "DocumentAttributeValue",
        DateValue: undefined,
        LongValue: undefined,
        StringListValue: undefined,
        StringValue: undefined
    };
    if (output.DateValue !== undefined && output.DateValue !== null) {
        contents.DateValue = new Date(Math.round(output.DateValue * 1000));
    }
    if (output.LongValue !== undefined && output.LongValue !== null) {
        contents.LongValue = output.LongValue;
    }
    if (output.StringListValue !== undefined && output.StringListValue !== null) {
        contents.StringListValue = deserializeAws_json1_1DocumentAttributeStringListValue(output.StringListValue, context);
    }
    if (output.StringValue !== undefined && output.StringValue !== null) {
        contents.StringValue = output.StringValue;
    }
    return contents;
};
const deserializeAws_json1_1DocumentAttributeValueCountPair = (output, context) => {
    let contents = {
        __type: "DocumentAttributeValueCountPair",
        Count: undefined,
        DocumentAttributeValue: undefined
    };
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.DocumentAttributeValue !== undefined &&
        output.DocumentAttributeValue !== null) {
        contents.DocumentAttributeValue = deserializeAws_json1_1DocumentAttributeValue(output.DocumentAttributeValue, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentAttributeValueCountPairList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context));
};
const deserializeAws_json1_1DocumentMetadataConfiguration = (output, context) => {
    let contents = {
        __type: "DocumentMetadataConfiguration",
        Name: undefined,
        Relevance: undefined,
        Search: undefined,
        Type: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Relevance !== undefined && output.Relevance !== null) {
        contents.Relevance = deserializeAws_json1_1Relevance(output.Relevance, context);
    }
    if (output.Search !== undefined && output.Search !== null) {
        contents.Search = deserializeAws_json1_1Search(output.Search, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DocumentMetadataConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentMetadataConfiguration(entry, context));
};
const deserializeAws_json1_1DocumentsMetadataConfiguration = (output, context) => {
    let contents = {
        __type: "DocumentsMetadataConfiguration",
        S3Prefix: undefined
    };
    if (output.S3Prefix !== undefined && output.S3Prefix !== null) {
        contents.S3Prefix = output.S3Prefix;
    }
    return contents;
};
const deserializeAws_json1_1FacetResult = (output, context) => {
    let contents = {
        __type: "FacetResult",
        DocumentAttributeKey: undefined,
        DocumentAttributeValueCountPairs: undefined
    };
    if (output.DocumentAttributeKey !== undefined &&
        output.DocumentAttributeKey !== null) {
        contents.DocumentAttributeKey = output.DocumentAttributeKey;
    }
    if (output.DocumentAttributeValueCountPairs !== undefined &&
        output.DocumentAttributeValueCountPairs !== null) {
        contents.DocumentAttributeValueCountPairs = deserializeAws_json1_1DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context);
    }
    return contents;
};
const deserializeAws_json1_1FacetResultList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FacetResult(entry, context));
};
const deserializeAws_json1_1FaqStatistics = (output, context) => {
    let contents = {
        __type: "FaqStatistics",
        IndexedQuestionAnswersCount: undefined
    };
    if (output.IndexedQuestionAnswersCount !== undefined &&
        output.IndexedQuestionAnswersCount !== null) {
        contents.IndexedQuestionAnswersCount = output.IndexedQuestionAnswersCount;
    }
    return contents;
};
const deserializeAws_json1_1FaqSummary = (output, context) => {
    let contents = {
        __type: "FaqSummary",
        CreatedAt: undefined,
        Id: undefined,
        Name: undefined,
        Status: undefined,
        UpdatedAt: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1FaqSummaryItems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FaqSummary(entry, context));
};
const deserializeAws_json1_1Highlight = (output, context) => {
    let contents = {
        __type: "Highlight",
        BeginOffset: undefined,
        EndOffset: undefined,
        TopAnswer: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.TopAnswer !== undefined && output.TopAnswer !== null) {
        contents.TopAnswer = output.TopAnswer;
    }
    return contents;
};
const deserializeAws_json1_1HighlightList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Highlight(entry, context));
};
const deserializeAws_json1_1IndexConfigurationSummary = (output, context) => {
    let contents = {
        __type: "IndexConfigurationSummary",
        CreatedAt: undefined,
        Id: undefined,
        Name: undefined,
        Status: undefined,
        UpdatedAt: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1IndexConfigurationSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IndexConfigurationSummary(entry, context));
};
const deserializeAws_json1_1IndexStatistics = (output, context) => {
    let contents = {
        __type: "IndexStatistics",
        FaqStatistics: undefined,
        TextDocumentStatistics: undefined
    };
    if (output.FaqStatistics !== undefined && output.FaqStatistics !== null) {
        contents.FaqStatistics = deserializeAws_json1_1FaqStatistics(output.FaqStatistics, context);
    }
    if (output.TextDocumentStatistics !== undefined &&
        output.TextDocumentStatistics !== null) {
        contents.TextDocumentStatistics = deserializeAws_json1_1TextDocumentStatistics(output.TextDocumentStatistics, context);
    }
    return contents;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListDataSourceSyncJobsResponse = (output, context) => {
    let contents = {
        __type: "ListDataSourceSyncJobsResponse",
        History: undefined,
        NextToken: undefined
    };
    if (output.History !== undefined && output.History !== null) {
        contents.History = deserializeAws_json1_1DataSourceSyncJobHistoryList(output.History, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDataSourcesResponse = (output, context) => {
    let contents = {
        __type: "ListDataSourcesResponse",
        NextToken: undefined,
        SummaryItems: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SummaryItems !== undefined && output.SummaryItems !== null) {
        contents.SummaryItems = deserializeAws_json1_1DataSourceSummaryList(output.SummaryItems, context);
    }
    return contents;
};
const deserializeAws_json1_1ListFaqsResponse = (output, context) => {
    let contents = {
        __type: "ListFaqsResponse",
        FaqSummaryItems: undefined,
        NextToken: undefined
    };
    if (output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null) {
        contents.FaqSummaryItems = deserializeAws_json1_1FaqSummaryItems(output.FaqSummaryItems, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListIndicesResponse = (output, context) => {
    let contents = {
        __type: "ListIndicesResponse",
        IndexConfigurationSummaryItems: undefined,
        NextToken: undefined
    };
    if (output.IndexConfigurationSummaryItems !== undefined &&
        output.IndexConfigurationSummaryItems !== null) {
        contents.IndexConfigurationSummaryItems = deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1QueryResult = (output, context) => {
    let contents = {
        __type: "QueryResult",
        FacetResults: undefined,
        QueryId: undefined,
        ResultItems: undefined,
        TotalNumberOfResults: undefined
    };
    if (output.FacetResults !== undefined && output.FacetResults !== null) {
        contents.FacetResults = deserializeAws_json1_1FacetResultList(output.FacetResults, context);
    }
    if (output.QueryId !== undefined && output.QueryId !== null) {
        contents.QueryId = output.QueryId;
    }
    if (output.ResultItems !== undefined && output.ResultItems !== null) {
        contents.ResultItems = deserializeAws_json1_1QueryResultItemList(output.ResultItems, context);
    }
    if (output.TotalNumberOfResults !== undefined &&
        output.TotalNumberOfResults !== null) {
        contents.TotalNumberOfResults = output.TotalNumberOfResults;
    }
    return contents;
};
const deserializeAws_json1_1QueryResultItem = (output, context) => {
    let contents = {
        __type: "QueryResultItem",
        AdditionalAttributes: undefined,
        DocumentAttributes: undefined,
        DocumentExcerpt: undefined,
        DocumentId: undefined,
        DocumentTitle: undefined,
        DocumentURI: undefined,
        Id: undefined,
        Type: undefined
    };
    if (output.AdditionalAttributes !== undefined &&
        output.AdditionalAttributes !== null) {
        contents.AdditionalAttributes = deserializeAws_json1_1AdditionalResultAttributeList(output.AdditionalAttributes, context);
    }
    if (output.DocumentAttributes !== undefined &&
        output.DocumentAttributes !== null) {
        contents.DocumentAttributes = deserializeAws_json1_1DocumentAttributeList(output.DocumentAttributes, context);
    }
    if (output.DocumentExcerpt !== undefined && output.DocumentExcerpt !== null) {
        contents.DocumentExcerpt = deserializeAws_json1_1TextWithHighlights(output.DocumentExcerpt, context);
    }
    if (output.DocumentId !== undefined && output.DocumentId !== null) {
        contents.DocumentId = output.DocumentId;
    }
    if (output.DocumentTitle !== undefined && output.DocumentTitle !== null) {
        contents.DocumentTitle = deserializeAws_json1_1TextWithHighlights(output.DocumentTitle, context);
    }
    if (output.DocumentURI !== undefined && output.DocumentURI !== null) {
        contents.DocumentURI = output.DocumentURI;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1QueryResultItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QueryResultItem(entry, context));
};
const deserializeAws_json1_1Relevance = (output, context) => {
    let contents = {
        __type: "Relevance",
        Duration: undefined,
        Freshness: undefined,
        Importance: undefined,
        RankOrder: undefined,
        ValueImportanceMap: undefined
    };
    if (output.Duration !== undefined && output.Duration !== null) {
        contents.Duration = output.Duration;
    }
    if (output.Freshness !== undefined && output.Freshness !== null) {
        contents.Freshness = output.Freshness;
    }
    if (output.Importance !== undefined && output.Importance !== null) {
        contents.Importance = output.Importance;
    }
    if (output.RankOrder !== undefined && output.RankOrder !== null) {
        contents.RankOrder = output.RankOrder;
    }
    if (output.ValueImportanceMap !== undefined &&
        output.ValueImportanceMap !== null) {
        contents.ValueImportanceMap = deserializeAws_json1_1ValueImportanceMap(output.ValueImportanceMap, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
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
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    let contents = {
        __type: "ResourceUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1S3DataSourceConfiguration = (output, context) => {
    let contents = {
        __type: "S3DataSourceConfiguration",
        AccessControlListConfiguration: undefined,
        BucketName: undefined,
        DocumentsMetadataConfiguration: undefined,
        ExclusionPatterns: undefined,
        InclusionPrefixes: undefined
    };
    if (output.AccessControlListConfiguration !== undefined &&
        output.AccessControlListConfiguration !== null) {
        contents.AccessControlListConfiguration = deserializeAws_json1_1AccessControlListConfiguration(output.AccessControlListConfiguration, context);
    }
    if (output.BucketName !== undefined && output.BucketName !== null) {
        contents.BucketName = output.BucketName;
    }
    if (output.DocumentsMetadataConfiguration !== undefined &&
        output.DocumentsMetadataConfiguration !== null) {
        contents.DocumentsMetadataConfiguration = deserializeAws_json1_1DocumentsMetadataConfiguration(output.DocumentsMetadataConfiguration, context);
    }
    if (output.ExclusionPatterns !== undefined &&
        output.ExclusionPatterns !== null) {
        contents.ExclusionPatterns = deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context);
    }
    if (output.InclusionPrefixes !== undefined &&
        output.InclusionPrefixes !== null) {
        contents.InclusionPrefixes = deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPrefixes, context);
    }
    return contents;
};
const deserializeAws_json1_1S3Path = (output, context) => {
    let contents = {
        __type: "S3Path",
        Bucket: undefined,
        Key: undefined
    };
    if (output.Bucket !== undefined && output.Bucket !== null) {
        contents.Bucket = output.Bucket;
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    return contents;
};
const deserializeAws_json1_1Search = (output, context) => {
    let contents = {
        __type: "Search",
        Displayable: undefined,
        Facetable: undefined,
        Searchable: undefined
    };
    if (output.Displayable !== undefined && output.Displayable !== null) {
        contents.Displayable = output.Displayable;
    }
    if (output.Facetable !== undefined && output.Facetable !== null) {
        contents.Facetable = output.Facetable;
    }
    if (output.Searchable !== undefined && output.Searchable !== null) {
        contents.Searchable = output.Searchable;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ServerSideEncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "ServerSideEncryptionConfiguration",
        KmsKeyId: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1ServiceQuotaExceededException = (output, context) => {
    let contents = {
        __type: "ServiceQuotaExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SharePointConfiguration = (output, context) => {
    let contents = {
        __type: "SharePointConfiguration",
        CrawlAttachments: undefined,
        DocumentTitleFieldName: undefined,
        FieldMappings: undefined,
        SecretArn: undefined,
        SharePointVersion: undefined,
        Urls: undefined,
        VpcConfiguration: undefined
    };
    if (output.CrawlAttachments !== undefined &&
        output.CrawlAttachments !== null) {
        contents.CrawlAttachments = output.CrawlAttachments;
    }
    if (output.DocumentTitleFieldName !== undefined &&
        output.DocumentTitleFieldName !== null) {
        contents.DocumentTitleFieldName = output.DocumentTitleFieldName;
    }
    if (output.FieldMappings !== undefined && output.FieldMappings !== null) {
        contents.FieldMappings = deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context);
    }
    if (output.SecretArn !== undefined && output.SecretArn !== null) {
        contents.SecretArn = output.SecretArn;
    }
    if (output.SharePointVersion !== undefined &&
        output.SharePointVersion !== null) {
        contents.SharePointVersion = output.SharePointVersion;
    }
    if (output.Urls !== undefined && output.Urls !== null) {
        contents.Urls = deserializeAws_json1_1SharePointUrlList(output.Urls, context);
    }
    if (output.VpcConfiguration !== undefined &&
        output.VpcConfiguration !== null) {
        contents.VpcConfiguration = deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1SharePointUrlList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StartDataSourceSyncJobResponse = (output, context) => {
    let contents = {
        __type: "StartDataSourceSyncJobResponse",
        ExecutionId: undefined
    };
    if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
        contents.ExecutionId = output.ExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1SubnetIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TextDocumentStatistics = (output, context) => {
    let contents = {
        __type: "TextDocumentStatistics",
        IndexedTextDocumentsCount: undefined
    };
    if (output.IndexedTextDocumentsCount !== undefined &&
        output.IndexedTextDocumentsCount !== null) {
        contents.IndexedTextDocumentsCount = output.IndexedTextDocumentsCount;
    }
    return contents;
};
const deserializeAws_json1_1TextWithHighlights = (output, context) => {
    let contents = {
        __type: "TextWithHighlights",
        Highlights: undefined,
        Text: undefined
    };
    if (output.Highlights !== undefined && output.Highlights !== null) {
        contents.Highlights = deserializeAws_json1_1HighlightList(output.Highlights, context);
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1ValueImportanceMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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