"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateVocabularyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.CreateVocabulary";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVocabularyCommand = serializeAws_json1_1CreateVocabularyCommand;
async function serializeAws_json1_1CreateVocabularyFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.CreateVocabularyFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVocabularyFilterCommand = serializeAws_json1_1CreateVocabularyFilterCommand;
async function serializeAws_json1_1DeleteTranscriptionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.DeleteTranscriptionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTranscriptionJobCommand = serializeAws_json1_1DeleteTranscriptionJobCommand;
async function serializeAws_json1_1DeleteVocabularyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.DeleteVocabulary";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVocabularyCommand = serializeAws_json1_1DeleteVocabularyCommand;
async function serializeAws_json1_1DeleteVocabularyFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.DeleteVocabularyFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVocabularyFilterCommand = serializeAws_json1_1DeleteVocabularyFilterCommand;
async function serializeAws_json1_1GetTranscriptionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.GetTranscriptionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTranscriptionJobCommand = serializeAws_json1_1GetTranscriptionJobCommand;
async function serializeAws_json1_1GetVocabularyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.GetVocabulary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetVocabularyCommand = serializeAws_json1_1GetVocabularyCommand;
async function serializeAws_json1_1GetVocabularyFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.GetVocabularyFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetVocabularyFilterCommand = serializeAws_json1_1GetVocabularyFilterCommand;
async function serializeAws_json1_1ListTranscriptionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.ListTranscriptionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTranscriptionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTranscriptionJobsCommand = serializeAws_json1_1ListTranscriptionJobsCommand;
async function serializeAws_json1_1ListVocabulariesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.ListVocabularies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVocabulariesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVocabulariesCommand = serializeAws_json1_1ListVocabulariesCommand;
async function serializeAws_json1_1ListVocabularyFiltersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.ListVocabularyFilters";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVocabularyFiltersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListVocabularyFiltersCommand = serializeAws_json1_1ListVocabularyFiltersCommand;
async function serializeAws_json1_1StartTranscriptionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.StartTranscriptionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTranscriptionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTranscriptionJobCommand = serializeAws_json1_1StartTranscriptionJobCommand;
async function serializeAws_json1_1UpdateVocabularyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.UpdateVocabulary";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVocabularyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVocabularyCommand = serializeAws_json1_1UpdateVocabularyCommand;
async function serializeAws_json1_1UpdateVocabularyFilterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Transcribe.UpdateVocabularyFilter";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVocabularyFilterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVocabularyFilterCommand = serializeAws_json1_1UpdateVocabularyFilterCommand;
async function deserializeAws_json1_1CreateVocabularyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVocabularyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVocabularyCommand = deserializeAws_json1_1CreateVocabularyCommand;
async function deserializeAws_json1_1CreateVocabularyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1CreateVocabularyFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVocabularyFilterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVocabularyFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVocabularyFilterCommand = deserializeAws_json1_1CreateVocabularyFilterCommand;
async function deserializeAws_json1_1CreateVocabularyFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1DeleteTranscriptionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTranscriptionJobCommand = deserializeAws_json1_1DeleteTranscriptionJobCommand;
async function deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1DeleteVocabularyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVocabularyCommand = deserializeAws_json1_1DeleteVocabularyCommand;
async function deserializeAws_json1_1DeleteVocabularyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1DeleteVocabularyFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVocabularyFilterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVocabularyFilterCommand = deserializeAws_json1_1DeleteVocabularyFilterCommand;
async function deserializeAws_json1_1DeleteVocabularyFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1GetTranscriptionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTranscriptionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTranscriptionJobCommand = deserializeAws_json1_1GetTranscriptionJobCommand;
async function deserializeAws_json1_1GetTranscriptionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1GetVocabularyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetVocabularyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetVocabularyCommand = deserializeAws_json1_1GetVocabularyCommand;
async function deserializeAws_json1_1GetVocabularyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1GetVocabularyFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVocabularyFilterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetVocabularyFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetVocabularyFilterCommand = deserializeAws_json1_1GetVocabularyFilterCommand;
async function deserializeAws_json1_1GetVocabularyFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1ListTranscriptionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTranscriptionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTranscriptionJobsCommand = deserializeAws_json1_1ListTranscriptionJobsCommand;
async function deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1ListVocabulariesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVocabulariesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVocabulariesCommand = deserializeAws_json1_1ListVocabulariesCommand;
async function deserializeAws_json1_1ListVocabulariesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1ListVocabularyFiltersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListVocabularyFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVocabularyFiltersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListVocabularyFiltersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListVocabularyFiltersCommand = deserializeAws_json1_1ListVocabularyFiltersCommand;
async function deserializeAws_json1_1ListVocabularyFiltersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1StartTranscriptionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTranscriptionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTranscriptionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTranscriptionJobCommand = deserializeAws_json1_1StartTranscriptionJobCommand;
async function deserializeAws_json1_1StartTranscriptionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
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
async function deserializeAws_json1_1UpdateVocabularyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateVocabularyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVocabularyCommand = deserializeAws_json1_1UpdateVocabularyCommand;
async function deserializeAws_json1_1UpdateVocabularyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazonaws.transcribe#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
async function deserializeAws_json1_1UpdateVocabularyFilterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVocabularyFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVocabularyFilterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateVocabularyFilterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVocabularyFilterCommand = deserializeAws_json1_1UpdateVocabularyFilterCommand;
async function deserializeAws_json1_1UpdateVocabularyFilterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribe#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribe#InternalFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribe#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.transcribe#NotFoundException":
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
const deserializeAws_json1_1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BadRequestException(body, context);
    const contents = Object.assign({ name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalFailureException(body, context);
    const contents = Object.assign({ name: "InternalFailureException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CreateVocabularyFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.VocabularyFilterFileUri !== undefined) {
        bodyParams["VocabularyFilterFileUri"] = input.VocabularyFilterFileUri;
    }
    if (input.VocabularyFilterName !== undefined) {
        bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
    }
    if (input.Words !== undefined) {
        bodyParams["Words"] = serializeAws_json1_1Words(input.Words, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateVocabularyRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Phrases !== undefined) {
        bodyParams["Phrases"] = serializeAws_json1_1Phrases(input.Phrases, context);
    }
    if (input.VocabularyFileUri !== undefined) {
        bodyParams["VocabularyFileUri"] = input.VocabularyFileUri;
    }
    if (input.VocabularyName !== undefined) {
        bodyParams["VocabularyName"] = input.VocabularyName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTranscriptionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TranscriptionJobName !== undefined) {
        bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVocabularyFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.VocabularyFilterName !== undefined) {
        bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVocabularyRequest = (input, context) => {
    const bodyParams = {};
    if (input.VocabularyName !== undefined) {
        bodyParams["VocabularyName"] = input.VocabularyName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTranscriptionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.TranscriptionJobName !== undefined) {
        bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetVocabularyFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.VocabularyFilterName !== undefined) {
        bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetVocabularyRequest = (input, context) => {
    const bodyParams = {};
    if (input.VocabularyName !== undefined) {
        bodyParams["VocabularyName"] = input.VocabularyName;
    }
    return bodyParams;
};
const serializeAws_json1_1JobExecutionSettings = (input, context) => {
    const bodyParams = {};
    if (input.AllowDeferredExecution !== undefined) {
        bodyParams["AllowDeferredExecution"] = input.AllowDeferredExecution;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTranscriptionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobNameContains !== undefined) {
        bodyParams["JobNameContains"] = input.JobNameContains;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListVocabulariesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StateEquals !== undefined) {
        bodyParams["StateEquals"] = input.StateEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1ListVocabularyFiltersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NameContains !== undefined) {
        bodyParams["NameContains"] = input.NameContains;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1Media = (input, context) => {
    const bodyParams = {};
    if (input.MediaFileUri !== undefined) {
        bodyParams["MediaFileUri"] = input.MediaFileUri;
    }
    return bodyParams;
};
const serializeAws_json1_1Phrases = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Settings = (input, context) => {
    const bodyParams = {};
    if (input.ChannelIdentification !== undefined) {
        bodyParams["ChannelIdentification"] = input.ChannelIdentification;
    }
    if (input.MaxAlternatives !== undefined) {
        bodyParams["MaxAlternatives"] = input.MaxAlternatives;
    }
    if (input.MaxSpeakerLabels !== undefined) {
        bodyParams["MaxSpeakerLabels"] = input.MaxSpeakerLabels;
    }
    if (input.ShowAlternatives !== undefined) {
        bodyParams["ShowAlternatives"] = input.ShowAlternatives;
    }
    if (input.ShowSpeakerLabels !== undefined) {
        bodyParams["ShowSpeakerLabels"] = input.ShowSpeakerLabels;
    }
    if (input.VocabularyFilterMethod !== undefined) {
        bodyParams["VocabularyFilterMethod"] = input.VocabularyFilterMethod;
    }
    if (input.VocabularyFilterName !== undefined) {
        bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
    }
    if (input.VocabularyName !== undefined) {
        bodyParams["VocabularyName"] = input.VocabularyName;
    }
    return bodyParams;
};
const serializeAws_json1_1StartTranscriptionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobExecutionSettings !== undefined) {
        bodyParams["JobExecutionSettings"] = serializeAws_json1_1JobExecutionSettings(input.JobExecutionSettings, context);
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Media !== undefined) {
        bodyParams["Media"] = serializeAws_json1_1Media(input.Media, context);
    }
    if (input.MediaFormat !== undefined) {
        bodyParams["MediaFormat"] = input.MediaFormat;
    }
    if (input.MediaSampleRateHertz !== undefined) {
        bodyParams["MediaSampleRateHertz"] = input.MediaSampleRateHertz;
    }
    if (input.OutputBucketName !== undefined) {
        bodyParams["OutputBucketName"] = input.OutputBucketName;
    }
    if (input.OutputEncryptionKMSKeyId !== undefined) {
        bodyParams["OutputEncryptionKMSKeyId"] = input.OutputEncryptionKMSKeyId;
    }
    if (input.Settings !== undefined) {
        bodyParams["Settings"] = serializeAws_json1_1Settings(input.Settings, context);
    }
    if (input.TranscriptionJobName !== undefined) {
        bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVocabularyFilterRequest = (input, context) => {
    const bodyParams = {};
    if (input.VocabularyFilterFileUri !== undefined) {
        bodyParams["VocabularyFilterFileUri"] = input.VocabularyFilterFileUri;
    }
    if (input.VocabularyFilterName !== undefined) {
        bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
    }
    if (input.Words !== undefined) {
        bodyParams["Words"] = serializeAws_json1_1Words(input.Words, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVocabularyRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Phrases !== undefined) {
        bodyParams["Phrases"] = serializeAws_json1_1Phrases(input.Phrases, context);
    }
    if (input.VocabularyFileUri !== undefined) {
        bodyParams["VocabularyFileUri"] = input.VocabularyFileUri;
    }
    if (input.VocabularyName !== undefined) {
        bodyParams["VocabularyName"] = input.VocabularyName;
    }
    return bodyParams;
};
const serializeAws_json1_1Words = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1BadRequestException = (output, context) => {
    let contents = {
        __type: "BadRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1CreateVocabularyFilterResponse = (output, context) => {
    let contents = {
        __type: "CreateVocabularyFilterResponse",
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyFilterName: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyFilterName !== undefined &&
        output.VocabularyFilterName !== null) {
        contents.VocabularyFilterName = output.VocabularyFilterName;
    }
    return contents;
};
const deserializeAws_json1_1CreateVocabularyResponse = (output, context) => {
    let contents = {
        __type: "CreateVocabularyResponse",
        FailureReason: undefined,
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyName: undefined,
        VocabularyState: undefined
    };
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
        contents.VocabularyName = output.VocabularyName;
    }
    if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
        contents.VocabularyState = output.VocabularyState;
    }
    return contents;
};
const deserializeAws_json1_1GetTranscriptionJobResponse = (output, context) => {
    let contents = {
        __type: "GetTranscriptionJobResponse",
        TranscriptionJob: undefined
    };
    if (output.TranscriptionJob !== undefined &&
        output.TranscriptionJob !== null) {
        contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context);
    }
    return contents;
};
const deserializeAws_json1_1GetVocabularyFilterResponse = (output, context) => {
    let contents = {
        __type: "GetVocabularyFilterResponse",
        DownloadUri: undefined,
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyFilterName: undefined
    };
    if (output.DownloadUri !== undefined && output.DownloadUri !== null) {
        contents.DownloadUri = output.DownloadUri;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyFilterName !== undefined &&
        output.VocabularyFilterName !== null) {
        contents.VocabularyFilterName = output.VocabularyFilterName;
    }
    return contents;
};
const deserializeAws_json1_1GetVocabularyResponse = (output, context) => {
    let contents = {
        __type: "GetVocabularyResponse",
        DownloadUri: undefined,
        FailureReason: undefined,
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyName: undefined,
        VocabularyState: undefined
    };
    if (output.DownloadUri !== undefined && output.DownloadUri !== null) {
        contents.DownloadUri = output.DownloadUri;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
        contents.VocabularyName = output.VocabularyName;
    }
    if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
        contents.VocabularyState = output.VocabularyState;
    }
    return contents;
};
const deserializeAws_json1_1InternalFailureException = (output, context) => {
    let contents = {
        __type: "InternalFailureException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1JobExecutionSettings = (output, context) => {
    let contents = {
        __type: "JobExecutionSettings",
        AllowDeferredExecution: undefined,
        DataAccessRoleArn: undefined
    };
    if (output.AllowDeferredExecution !== undefined &&
        output.AllowDeferredExecution !== null) {
        contents.AllowDeferredExecution = output.AllowDeferredExecution;
    }
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
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
const deserializeAws_json1_1ListTranscriptionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListTranscriptionJobsResponse",
        NextToken: undefined,
        Status: undefined,
        TranscriptionJobSummaries: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TranscriptionJobSummaries !== undefined &&
        output.TranscriptionJobSummaries !== null) {
        contents.TranscriptionJobSummaries = deserializeAws_json1_1TranscriptionJobSummaries(output.TranscriptionJobSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListVocabulariesResponse = (output, context) => {
    let contents = {
        __type: "ListVocabulariesResponse",
        NextToken: undefined,
        Status: undefined,
        Vocabularies: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Vocabularies !== undefined && output.Vocabularies !== null) {
        contents.Vocabularies = deserializeAws_json1_1Vocabularies(output.Vocabularies, context);
    }
    return contents;
};
const deserializeAws_json1_1ListVocabularyFiltersResponse = (output, context) => {
    let contents = {
        __type: "ListVocabularyFiltersResponse",
        NextToken: undefined,
        VocabularyFilters: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.VocabularyFilters !== undefined &&
        output.VocabularyFilters !== null) {
        contents.VocabularyFilters = deserializeAws_json1_1VocabularyFilters(output.VocabularyFilters, context);
    }
    return contents;
};
const deserializeAws_json1_1Media = (output, context) => {
    let contents = {
        __type: "Media",
        MediaFileUri: undefined
    };
    if (output.MediaFileUri !== undefined && output.MediaFileUri !== null) {
        contents.MediaFileUri = output.MediaFileUri;
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
const deserializeAws_json1_1Settings = (output, context) => {
    let contents = {
        __type: "Settings",
        ChannelIdentification: undefined,
        MaxAlternatives: undefined,
        MaxSpeakerLabels: undefined,
        ShowAlternatives: undefined,
        ShowSpeakerLabels: undefined,
        VocabularyFilterMethod: undefined,
        VocabularyFilterName: undefined,
        VocabularyName: undefined
    };
    if (output.ChannelIdentification !== undefined &&
        output.ChannelIdentification !== null) {
        contents.ChannelIdentification = output.ChannelIdentification;
    }
    if (output.MaxAlternatives !== undefined && output.MaxAlternatives !== null) {
        contents.MaxAlternatives = output.MaxAlternatives;
    }
    if (output.MaxSpeakerLabels !== undefined &&
        output.MaxSpeakerLabels !== null) {
        contents.MaxSpeakerLabels = output.MaxSpeakerLabels;
    }
    if (output.ShowAlternatives !== undefined &&
        output.ShowAlternatives !== null) {
        contents.ShowAlternatives = output.ShowAlternatives;
    }
    if (output.ShowSpeakerLabels !== undefined &&
        output.ShowSpeakerLabels !== null) {
        contents.ShowSpeakerLabels = output.ShowSpeakerLabels;
    }
    if (output.VocabularyFilterMethod !== undefined &&
        output.VocabularyFilterMethod !== null) {
        contents.VocabularyFilterMethod = output.VocabularyFilterMethod;
    }
    if (output.VocabularyFilterName !== undefined &&
        output.VocabularyFilterName !== null) {
        contents.VocabularyFilterName = output.VocabularyFilterName;
    }
    if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
        contents.VocabularyName = output.VocabularyName;
    }
    return contents;
};
const deserializeAws_json1_1StartTranscriptionJobResponse = (output, context) => {
    let contents = {
        __type: "StartTranscriptionJobResponse",
        TranscriptionJob: undefined
    };
    if (output.TranscriptionJob !== undefined &&
        output.TranscriptionJob !== null) {
        contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context);
    }
    return contents;
};
const deserializeAws_json1_1Transcript = (output, context) => {
    let contents = {
        __type: "Transcript",
        TranscriptFileUri: undefined
    };
    if (output.TranscriptFileUri !== undefined &&
        output.TranscriptFileUri !== null) {
        contents.TranscriptFileUri = output.TranscriptFileUri;
    }
    return contents;
};
const deserializeAws_json1_1TranscriptionJob = (output, context) => {
    let contents = {
        __type: "TranscriptionJob",
        CompletionTime: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        JobExecutionSettings: undefined,
        LanguageCode: undefined,
        Media: undefined,
        MediaFormat: undefined,
        MediaSampleRateHertz: undefined,
        Settings: undefined,
        StartTime: undefined,
        Transcript: undefined,
        TranscriptionJobName: undefined,
        TranscriptionJobStatus: undefined
    };
    if (output.CompletionTime !== undefined && output.CompletionTime !== null) {
        contents.CompletionTime = new Date(Math.round(output.CompletionTime * 1000));
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.JobExecutionSettings !== undefined &&
        output.JobExecutionSettings !== null) {
        contents.JobExecutionSettings = deserializeAws_json1_1JobExecutionSettings(output.JobExecutionSettings, context);
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Media !== undefined && output.Media !== null) {
        contents.Media = deserializeAws_json1_1Media(output.Media, context);
    }
    if (output.MediaFormat !== undefined && output.MediaFormat !== null) {
        contents.MediaFormat = output.MediaFormat;
    }
    if (output.MediaSampleRateHertz !== undefined &&
        output.MediaSampleRateHertz !== null) {
        contents.MediaSampleRateHertz = output.MediaSampleRateHertz;
    }
    if (output.Settings !== undefined && output.Settings !== null) {
        contents.Settings = deserializeAws_json1_1Settings(output.Settings, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Transcript !== undefined && output.Transcript !== null) {
        contents.Transcript = deserializeAws_json1_1Transcript(output.Transcript, context);
    }
    if (output.TranscriptionJobName !== undefined &&
        output.TranscriptionJobName !== null) {
        contents.TranscriptionJobName = output.TranscriptionJobName;
    }
    if (output.TranscriptionJobStatus !== undefined &&
        output.TranscriptionJobStatus !== null) {
        contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
    }
    return contents;
};
const deserializeAws_json1_1TranscriptionJobSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TranscriptionJobSummary(entry, context));
};
const deserializeAws_json1_1TranscriptionJobSummary = (output, context) => {
    let contents = {
        __type: "TranscriptionJobSummary",
        CompletionTime: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        LanguageCode: undefined,
        OutputLocationType: undefined,
        StartTime: undefined,
        TranscriptionJobName: undefined,
        TranscriptionJobStatus: undefined
    };
    if (output.CompletionTime !== undefined && output.CompletionTime !== null) {
        contents.CompletionTime = new Date(Math.round(output.CompletionTime * 1000));
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.OutputLocationType !== undefined &&
        output.OutputLocationType !== null) {
        contents.OutputLocationType = output.OutputLocationType;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.TranscriptionJobName !== undefined &&
        output.TranscriptionJobName !== null) {
        contents.TranscriptionJobName = output.TranscriptionJobName;
    }
    if (output.TranscriptionJobStatus !== undefined &&
        output.TranscriptionJobStatus !== null) {
        contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
    }
    return contents;
};
const deserializeAws_json1_1UpdateVocabularyFilterResponse = (output, context) => {
    let contents = {
        __type: "UpdateVocabularyFilterResponse",
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyFilterName: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyFilterName !== undefined &&
        output.VocabularyFilterName !== null) {
        contents.VocabularyFilterName = output.VocabularyFilterName;
    }
    return contents;
};
const deserializeAws_json1_1UpdateVocabularyResponse = (output, context) => {
    let contents = {
        __type: "UpdateVocabularyResponse",
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyName: undefined,
        VocabularyState: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
        contents.VocabularyName = output.VocabularyName;
    }
    if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
        contents.VocabularyState = output.VocabularyState;
    }
    return contents;
};
const deserializeAws_json1_1Vocabularies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VocabularyInfo(entry, context));
};
const deserializeAws_json1_1VocabularyFilterInfo = (output, context) => {
    let contents = {
        __type: "VocabularyFilterInfo",
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyFilterName: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyFilterName !== undefined &&
        output.VocabularyFilterName !== null) {
        contents.VocabularyFilterName = output.VocabularyFilterName;
    }
    return contents;
};
const deserializeAws_json1_1VocabularyFilters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VocabularyFilterInfo(entry, context));
};
const deserializeAws_json1_1VocabularyInfo = (output, context) => {
    let contents = {
        __type: "VocabularyInfo",
        LanguageCode: undefined,
        LastModifiedTime: undefined,
        VocabularyName: undefined,
        VocabularyState: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
        contents.VocabularyName = output.VocabularyName;
    }
    if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
        contents.VocabularyState = output.VocabularyState;
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