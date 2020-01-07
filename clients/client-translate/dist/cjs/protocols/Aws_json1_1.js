"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1DeleteTerminologyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.DeleteTerminology";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTerminologyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTerminologyCommand = serializeAws_json1_1DeleteTerminologyCommand;
async function serializeAws_json1_1DescribeTextTranslationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.DescribeTextTranslationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTextTranslationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTextTranslationJobCommand = serializeAws_json1_1DescribeTextTranslationJobCommand;
async function serializeAws_json1_1GetTerminologyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.GetTerminology";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTerminologyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTerminologyCommand = serializeAws_json1_1GetTerminologyCommand;
async function serializeAws_json1_1ImportTerminologyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.ImportTerminology";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportTerminologyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportTerminologyCommand = serializeAws_json1_1ImportTerminologyCommand;
async function serializeAws_json1_1ListTerminologiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.ListTerminologies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTerminologiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTerminologiesCommand = serializeAws_json1_1ListTerminologiesCommand;
async function serializeAws_json1_1ListTextTranslationJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.ListTextTranslationJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTextTranslationJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTextTranslationJobsCommand = serializeAws_json1_1ListTextTranslationJobsCommand;
async function serializeAws_json1_1StartTextTranslationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.StartTextTranslationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTextTranslationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTextTranslationJobCommand = serializeAws_json1_1StartTextTranslationJobCommand;
async function serializeAws_json1_1StopTextTranslationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSShineFrontendService_20170701.StopTextTranslationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTextTranslationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTextTranslationJobCommand = serializeAws_json1_1StopTextTranslationJobCommand;
async function serializeAws_json1_1TranslateTextCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.TranslateText";
    let body;
    body = JSON.stringify(serializeAws_json1_1TranslateTextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TranslateTextCommand = serializeAws_json1_1TranslateTextCommand;
async function deserializeAws_json1_1DeleteTerminologyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTerminologyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTerminologyCommand = deserializeAws_json1_1DeleteTerminologyCommand;
async function deserializeAws_json1_1DeleteTerminologyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTextTranslationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTextTranslationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTextTranslationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTextTranslationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTextTranslationJobCommand = deserializeAws_json1_1DescribeTextTranslationJobCommand;
async function deserializeAws_json1_1DescribeTextTranslationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTerminologyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTerminologyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTerminologyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTerminologyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTerminologyCommand = deserializeAws_json1_1GetTerminologyCommand;
async function deserializeAws_json1_1GetTerminologyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.shine#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ImportTerminologyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportTerminologyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportTerminologyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportTerminologyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportTerminologyCommand = deserializeAws_json1_1ImportTerminologyCommand;
async function deserializeAws_json1_1ImportTerminologyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.shine#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.shine#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTerminologiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTerminologiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTerminologiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTerminologiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTerminologiesCommand = deserializeAws_json1_1ListTerminologiesCommand;
async function deserializeAws_json1_1ListTerminologiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.shine#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTextTranslationJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTextTranslationJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTextTranslationJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTextTranslationJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTextTranslationJobsCommand = deserializeAws_json1_1ListTextTranslationJobsCommand;
async function deserializeAws_json1_1ListTextTranslationJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.shine#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.shine#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartTextTranslationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTextTranslationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTextTranslationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTextTranslationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTextTranslationJobCommand = deserializeAws_json1_1StartTextTranslationJobCommand;
async function deserializeAws_json1_1StartTextTranslationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.shine#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguagePairException":
        case "com.amazonaws.shine#UnsupportedLanguagePairException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopTextTranslationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTextTranslationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTextTranslationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopTextTranslationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTextTranslationJobCommand = deserializeAws_json1_1StopTextTranslationJobCommand;
async function deserializeAws_json1_1StopTextTranslationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TranslateTextCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TranslateTextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TranslateTextResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TranslateTextResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TranslateTextCommand = deserializeAws_json1_1TranslateTextCommand;
async function deserializeAws_json1_1TranslateTextCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DetectedLanguageLowConfidenceException":
        case "com.amazonaws.shine#DetectedLanguageLowConfidenceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.shine#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.shine#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shine#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.shine#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.shine#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.shine#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguagePairException":
        case "com.amazonaws.shine#UnsupportedLanguagePairException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DetectedLanguageLowConfidenceException(body, context);
    const contents = Object.assign({ name: "DetectedLanguageLowConfidenceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterException(body, context);
    const contents = Object.assign({ name: "InvalidFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "TextSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedLanguagePairException(body, context);
    const contents = Object.assign({ name: "UnsupportedLanguagePairException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1DeleteTerminologyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTextTranslationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionKey = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTerminologyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.TerminologyDataFormat !== undefined) {
        bodyParams["TerminologyDataFormat"] = input.TerminologyDataFormat;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportTerminologyRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.EncryptionKey !== undefined) {
        bodyParams["EncryptionKey"] = serializeAws_json1_1EncryptionKey(input.EncryptionKey, context);
    }
    if (input.MergeStrategy !== undefined) {
        bodyParams["MergeStrategy"] = input.MergeStrategy;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.TerminologyData !== undefined) {
        bodyParams["TerminologyData"] = serializeAws_json1_1TerminologyData(input.TerminologyData, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.ContentType !== undefined) {
        bodyParams["ContentType"] = input.ContentType;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTerminologiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTextTranslationJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1TextTranslationJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartTextTranslationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientToken === undefined) {
        input.ClientToken = uuid_1.v4();
    }
    if (input.ClientToken !== undefined) {
        bodyParams["ClientToken"] = input.ClientToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.SourceLanguageCode !== undefined) {
        bodyParams["SourceLanguageCode"] = input.SourceLanguageCode;
    }
    if (input.TargetLanguageCodes !== undefined) {
        bodyParams["TargetLanguageCodes"] = serializeAws_json1_1TargetLanguageCodeStringList(input.TargetLanguageCodes, context);
    }
    if (input.TerminologyNames !== undefined) {
        bodyParams["TerminologyNames"] = serializeAws_json1_1ResourceNameList(input.TerminologyNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StopTextTranslationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetLanguageCodeStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TerminologyData = (input, context) => {
    const bodyParams = {};
    if (input.File !== undefined) {
        bodyParams["File"] = Buffer.from(input.File).toString("utf-8");
    }
    if (input.Format !== undefined) {
        bodyParams["Format"] = input.Format;
    }
    return bodyParams;
};
const serializeAws_json1_1TextTranslationJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmittedAfterTime !== undefined) {
        bodyParams["SubmittedAfterTime"] = Math.round(input.SubmittedAfterTime.getTime() / 1000);
    }
    if (input.SubmittedBeforeTime !== undefined) {
        bodyParams["SubmittedBeforeTime"] = Math.round(input.SubmittedBeforeTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1TranslateTextRequest = (input, context) => {
    const bodyParams = {};
    if (input.SourceLanguageCode !== undefined) {
        bodyParams["SourceLanguageCode"] = input.SourceLanguageCode;
    }
    if (input.TargetLanguageCode !== undefined) {
        bodyParams["TargetLanguageCode"] = input.TargetLanguageCode;
    }
    if (input.TerminologyNames !== undefined) {
        bodyParams["TerminologyNames"] = serializeAws_json1_1ResourceNameList(input.TerminologyNames, context);
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const deserializeAws_json1_1AppliedTerminology = (output, context) => {
    let contents = {
        __type: "AppliedTerminology",
        Name: undefined,
        Terms: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Terms !== undefined && output.Terms !== null) {
        contents.Terms = deserializeAws_json1_1TermList(output.Terms, context);
    }
    return contents;
};
const deserializeAws_json1_1AppliedTerminologyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AppliedTerminology(entry, context));
};
const deserializeAws_json1_1DescribeTextTranslationJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeTextTranslationJobResponse",
        TextTranslationJobProperties: undefined
    };
    if (output.TextTranslationJobProperties !== undefined &&
        output.TextTranslationJobProperties !== null) {
        contents.TextTranslationJobProperties = deserializeAws_json1_1TextTranslationJobProperties(output.TextTranslationJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectedLanguageLowConfidenceException = (output, context) => {
    let contents = {
        __type: "DetectedLanguageLowConfidenceException",
        DetectedLanguageCode: undefined,
        Message: undefined
    };
    if (output.DetectedLanguageCode !== undefined &&
        output.DetectedLanguageCode !== null) {
        contents.DetectedLanguageCode = output.DetectedLanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKey = (output, context) => {
    let contents = {
        __type: "EncryptionKey",
        Id: undefined,
        Type: undefined
    };
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1GetTerminologyResponse = (output, context) => {
    let contents = {
        __type: "GetTerminologyResponse",
        TerminologyDataLocation: undefined,
        TerminologyProperties: undefined
    };
    if (output.TerminologyDataLocation !== undefined &&
        output.TerminologyDataLocation !== null) {
        contents.TerminologyDataLocation = deserializeAws_json1_1TerminologyDataLocation(output.TerminologyDataLocation, context);
    }
    if (output.TerminologyProperties !== undefined &&
        output.TerminologyProperties !== null) {
        contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1ImportTerminologyResponse = (output, context) => {
    let contents = {
        __type: "ImportTerminologyResponse",
        TerminologyProperties: undefined
    };
    if (output.TerminologyProperties !== undefined &&
        output.TerminologyProperties !== null) {
        contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    let contents = {
        __type: "InputDataConfig",
        ContentType: undefined,
        S3Uri: undefined
    };
    if (output.ContentType !== undefined && output.ContentType !== null) {
        contents.ContentType = output.ContentType;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
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
const deserializeAws_json1_1InvalidFilterException = (output, context) => {
    let contents = {
        __type: "InvalidFilterException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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
const deserializeAws_json1_1JobDetails = (output, context) => {
    let contents = {
        __type: "JobDetails",
        DocumentsWithErrorsCount: undefined,
        InputDocumentsCount: undefined,
        TranslatedDocumentsCount: undefined
    };
    if (output.DocumentsWithErrorsCount !== undefined &&
        output.DocumentsWithErrorsCount !== null) {
        contents.DocumentsWithErrorsCount = output.DocumentsWithErrorsCount;
    }
    if (output.InputDocumentsCount !== undefined &&
        output.InputDocumentsCount !== null) {
        contents.InputDocumentsCount = output.InputDocumentsCount;
    }
    if (output.TranslatedDocumentsCount !== undefined &&
        output.TranslatedDocumentsCount !== null) {
        contents.TranslatedDocumentsCount = output.TranslatedDocumentsCount;
    }
    return contents;
};
const deserializeAws_json1_1LanguageCodeStringList = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1ListTerminologiesResponse = (output, context) => {
    let contents = {
        __type: "ListTerminologiesResponse",
        NextToken: undefined,
        TerminologyPropertiesList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TerminologyPropertiesList !== undefined &&
        output.TerminologyPropertiesList !== null) {
        contents.TerminologyPropertiesList = deserializeAws_json1_1TerminologyPropertiesList(output.TerminologyPropertiesList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTextTranslationJobsResponse = (output, context) => {
    let contents = {
        __type: "ListTextTranslationJobsResponse",
        NextToken: undefined,
        TextTranslationJobPropertiesList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TextTranslationJobPropertiesList !== undefined &&
        output.TextTranslationJobPropertiesList !== null) {
        contents.TextTranslationJobPropertiesList = deserializeAws_json1_1TextTranslationJobPropertiesList(output.TextTranslationJobPropertiesList, context);
    }
    return contents;
};
const deserializeAws_json1_1OutputDataConfig = (output, context) => {
    let contents = {
        __type: "OutputDataConfig",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNameList = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1StartTextTranslationJobResponse = (output, context) => {
    let contents = {
        __type: "StartTextTranslationJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopTextTranslationJobResponse = (output, context) => {
    let contents = {
        __type: "StopTextTranslationJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1TargetLanguageCodeStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Term = (output, context) => {
    let contents = {
        __type: "Term",
        SourceText: undefined,
        TargetText: undefined
    };
    if (output.SourceText !== undefined && output.SourceText !== null) {
        contents.SourceText = output.SourceText;
    }
    if (output.TargetText !== undefined && output.TargetText !== null) {
        contents.TargetText = output.TargetText;
    }
    return contents;
};
const deserializeAws_json1_1TermList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Term(entry, context));
};
const deserializeAws_json1_1TerminologyDataLocation = (output, context) => {
    let contents = {
        __type: "TerminologyDataLocation",
        Location: undefined,
        RepositoryType: undefined
    };
    if (output.Location !== undefined && output.Location !== null) {
        contents.Location = output.Location;
    }
    if (output.RepositoryType !== undefined && output.RepositoryType !== null) {
        contents.RepositoryType = output.RepositoryType;
    }
    return contents;
};
const deserializeAws_json1_1TerminologyProperties = (output, context) => {
    let contents = {
        __type: "TerminologyProperties",
        Arn: undefined,
        CreatedAt: undefined,
        Description: undefined,
        EncryptionKey: undefined,
        LastUpdatedAt: undefined,
        Name: undefined,
        SizeBytes: undefined,
        SourceLanguageCode: undefined,
        TargetLanguageCodes: undefined,
        TermCount: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EncryptionKey !== undefined && output.EncryptionKey !== null) {
        contents.EncryptionKey = deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context);
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SizeBytes !== undefined && output.SizeBytes !== null) {
        contents.SizeBytes = output.SizeBytes;
    }
    if (output.SourceLanguageCode !== undefined &&
        output.SourceLanguageCode !== null) {
        contents.SourceLanguageCode = output.SourceLanguageCode;
    }
    if (output.TargetLanguageCodes !== undefined &&
        output.TargetLanguageCodes !== null) {
        contents.TargetLanguageCodes = deserializeAws_json1_1LanguageCodeStringList(output.TargetLanguageCodes, context);
    }
    if (output.TermCount !== undefined && output.TermCount !== null) {
        contents.TermCount = output.TermCount;
    }
    return contents;
};
const deserializeAws_json1_1TerminologyPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TerminologyProperties(entry, context));
};
const deserializeAws_json1_1TextSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "TextSizeLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TextTranslationJobProperties = (output, context) => {
    let contents = {
        __type: "TextTranslationJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobDetails: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SourceLanguageCode: undefined,
        SubmittedTime: undefined,
        TargetLanguageCodes: undefined,
        TerminologyNames: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobDetails !== undefined && output.JobDetails !== null) {
        contents.JobDetails = deserializeAws_json1_1JobDetails(output.JobDetails, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SourceLanguageCode !== undefined &&
        output.SourceLanguageCode !== null) {
        contents.SourceLanguageCode = output.SourceLanguageCode;
    }
    if (output.SubmittedTime !== undefined && output.SubmittedTime !== null) {
        contents.SubmittedTime = new Date(Math.round(output.SubmittedTime * 1000));
    }
    if (output.TargetLanguageCodes !== undefined &&
        output.TargetLanguageCodes !== null) {
        contents.TargetLanguageCodes = deserializeAws_json1_1TargetLanguageCodeStringList(output.TargetLanguageCodes, context);
    }
    if (output.TerminologyNames !== undefined &&
        output.TerminologyNames !== null) {
        contents.TerminologyNames = deserializeAws_json1_1ResourceNameList(output.TerminologyNames, context);
    }
    return contents;
};
const deserializeAws_json1_1TextTranslationJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TextTranslationJobProperties(entry, context));
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TranslateTextResponse = (output, context) => {
    let contents = {
        __type: "TranslateTextResponse",
        AppliedTerminologies: undefined,
        SourceLanguageCode: undefined,
        TargetLanguageCode: undefined,
        TranslatedText: undefined
    };
    if (output.AppliedTerminologies !== undefined &&
        output.AppliedTerminologies !== null) {
        contents.AppliedTerminologies = deserializeAws_json1_1AppliedTerminologyList(output.AppliedTerminologies, context);
    }
    if (output.SourceLanguageCode !== undefined &&
        output.SourceLanguageCode !== null) {
        contents.SourceLanguageCode = output.SourceLanguageCode;
    }
    if (output.TargetLanguageCode !== undefined &&
        output.TargetLanguageCode !== null) {
        contents.TargetLanguageCode = output.TargetLanguageCode;
    }
    if (output.TranslatedText !== undefined && output.TranslatedText !== null) {
        contents.TranslatedText = output.TranslatedText;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedLanguagePairException = (output, context) => {
    let contents = {
        __type: "UnsupportedLanguagePairException",
        Message: undefined,
        SourceLanguageCode: undefined,
        TargetLanguageCode: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.SourceLanguageCode !== undefined &&
        output.SourceLanguageCode !== null) {
        contents.SourceLanguageCode = output.SourceLanguageCode;
    }
    if (output.TargetLanguageCode !== undefined &&
        output.TargetLanguageCode !== null) {
        contents.TargetLanguageCode = output.TargetLanguageCode;
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