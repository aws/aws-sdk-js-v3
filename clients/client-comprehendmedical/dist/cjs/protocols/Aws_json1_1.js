"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand;
async function serializeAws_json1_1DescribePHIDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ComprehendMedical_20181030.DescribePHIDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePHIDetectionJobCommand = serializeAws_json1_1DescribePHIDetectionJobCommand;
async function serializeAws_json1_1DetectEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectEntitiesCommand = serializeAws_json1_1DetectEntitiesCommand;
async function serializeAws_json1_1DetectEntitiesV2Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectEntitiesV2";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectEntitiesV2Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectEntitiesV2Command = serializeAws_json1_1DetectEntitiesV2Command;
async function serializeAws_json1_1DetectPHICommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectPHI";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectPHIRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectPHICommand = serializeAws_json1_1DetectPHICommand;
async function serializeAws_json1_1InferICD10CMCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.InferICD10CM";
    let body;
    body = JSON.stringify(serializeAws_json1_1InferICD10CMRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InferICD10CMCommand = serializeAws_json1_1InferICD10CMCommand;
async function serializeAws_json1_1InferRxNormCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.InferRxNorm";
    let body;
    body = JSON.stringify(serializeAws_json1_1InferRxNormRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1InferRxNormCommand = serializeAws_json1_1InferRxNormCommand;
async function serializeAws_json1_1ListEntitiesDetectionV2JobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEntitiesDetectionV2JobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = serializeAws_json1_1ListEntitiesDetectionV2JobsCommand;
async function serializeAws_json1_1ListPHIDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.ListPHIDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPHIDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPHIDetectionJobsCommand = serializeAws_json1_1ListPHIDetectionJobsCommand;
async function serializeAws_json1_1StartEntitiesDetectionV2JobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ComprehendMedical_20181030.StartEntitiesDetectionV2Job";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartEntitiesDetectionV2JobCommand = serializeAws_json1_1StartEntitiesDetectionV2JobCommand;
async function serializeAws_json1_1StartPHIDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.StartPHIDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartPHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartPHIDetectionJobCommand = serializeAws_json1_1StartPHIDetectionJobCommand;
async function serializeAws_json1_1StopEntitiesDetectionV2JobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "ComprehendMedical_20181030.StopEntitiesDetectionV2Job";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionV2JobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopEntitiesDetectionV2JobCommand = serializeAws_json1_1StopEntitiesDetectionV2JobCommand;
async function serializeAws_json1_1StopPHIDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "ComprehendMedical_20181030.StopPHIDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopPHIDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopPHIDetectionJobCommand = serializeAws_json1_1StopPHIDetectionJobCommand;
async function deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEntitiesDetectionV2JobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand;
async function deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1DescribePHIDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePHIDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePHIDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePHIDetectionJobCommand = deserializeAws_json1_1DescribePHIDetectionJobCommand;
async function deserializeAws_json1_1DescribePHIDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1DetectEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectEntitiesCommand = deserializeAws_json1_1DetectEntitiesCommand;
async function deserializeAws_json1_1DetectEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1DetectEntitiesV2Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectEntitiesV2CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectEntitiesV2Response(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectEntitiesV2Response" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectEntitiesV2Command = deserializeAws_json1_1DetectEntitiesV2Command;
async function deserializeAws_json1_1DetectEntitiesV2CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1DetectPHICommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectPHICommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectPHIResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectPHIResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectPHICommand = deserializeAws_json1_1DetectPHICommand;
async function deserializeAws_json1_1DetectPHICommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1InferICD10CMCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InferICD10CMCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InferICD10CMResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InferICD10CMResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InferICD10CMCommand = deserializeAws_json1_1InferICD10CMCommand;
async function deserializeAws_json1_1InferICD10CMCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1InferRxNormCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1InferRxNormCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InferRxNormResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "InferRxNormResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1InferRxNormCommand = deserializeAws_json1_1InferRxNormCommand;
async function deserializeAws_json1_1InferRxNormCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEncodingException":
        case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEntitiesDetectionV2JobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand;
async function deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.deepinsight.medical#ValidationException":
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
async function deserializeAws_json1_1ListPHIDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPHIDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPHIDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPHIDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPHIDetectionJobsCommand = deserializeAws_json1_1ListPHIDetectionJobsCommand;
async function deserializeAws_json1_1ListPHIDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.deepinsight.medical#ValidationException":
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
async function deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartEntitiesDetectionV2JobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartEntitiesDetectionV2JobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = deserializeAws_json1_1StartEntitiesDetectionV2JobCommand;
async function deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1StartPHIDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartPHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartPHIDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartPHIDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartPHIDetectionJobCommand = deserializeAws_json1_1StartPHIDetectionJobCommand;
async function deserializeAws_json1_1StartPHIDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
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
async function deserializeAws_json1_1StopEntitiesDetectionV2JobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopEntitiesDetectionV2JobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopEntitiesDetectionV2JobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = deserializeAws_json1_1StopEntitiesDetectionV2JobCommand;
async function deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
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
async function deserializeAws_json1_1StopPHIDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopPHIDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopPHIDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopPHIDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopPHIDetectionJobCommand = deserializeAws_json1_1StopPHIDetectionJobCommand;
async function deserializeAws_json1_1StopPHIDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.deepinsight.medical#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.deepinsight.medical#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
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
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEncodingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEncodingException(body, context);
    const contents = Object.assign({ name: "InvalidEncodingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1ComprehendMedicalAsyncJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePHIDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectEntitiesV2Request = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectPHIRequest = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1InferICD10CMRequest = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1InferRxNormRequest = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.S3Bucket !== undefined) {
        bodyParams["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Key !== undefined) {
        bodyParams["S3Key"] = input.S3Key;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEntitiesDetectionV2JobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPHIDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context);
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
    if (input.S3Bucket !== undefined) {
        bodyParams["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Key !== undefined) {
        bodyParams["S3Key"] = input.S3Key;
    }
    return bodyParams;
};
const serializeAws_json1_1StartEntitiesDetectionV2JobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
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
    if (input.KMSKey !== undefined) {
        bodyParams["KMSKey"] = input.KMSKey;
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartPHIDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
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
    if (input.KMSKey !== undefined) {
        bodyParams["KMSKey"] = input.KMSKey;
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StopEntitiesDetectionV2JobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopPHIDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const deserializeAws_json1_1Attribute = (output, context) => {
    let contents = {
        __type: "Attribute",
        BeginOffset: undefined,
        EndOffset: undefined,
        Id: undefined,
        RelationshipScore: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.RelationshipScore !== undefined &&
        output.RelationshipScore !== null) {
        contents.RelationshipScore = output.RelationshipScore;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1TraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1AttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1ComprehendMedicalAsyncJobProperties = (output, context) => {
    let contents = {
        __type: "ComprehendMedicalAsyncJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        ExpirationTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        KMSKey: undefined,
        LanguageCode: undefined,
        ManifestFilePath: undefined,
        Message: undefined,
        ModelVersion: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
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
    if (output.KMSKey !== undefined && output.KMSKey !== null) {
        contents.KMSKey = output.KMSKey;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.ManifestFilePath !== undefined &&
        output.ManifestFilePath !== null) {
        contents.ManifestFilePath = output.ManifestFilePath;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(entry, context));
};
const deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse = (output, context) => {
    let contents = {
        __type: "DescribeEntitiesDetectionV2JobResponse",
        ComprehendMedicalAsyncJobProperties: undefined
    };
    if (output.ComprehendMedicalAsyncJobProperties !== undefined &&
        output.ComprehendMedicalAsyncJobProperties !== null) {
        contents.ComprehendMedicalAsyncJobProperties = deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePHIDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribePHIDetectionJobResponse",
        ComprehendMedicalAsyncJobProperties: undefined
    };
    if (output.ComprehendMedicalAsyncJobProperties !== undefined &&
        output.ComprehendMedicalAsyncJobProperties !== null) {
        contents.ComprehendMedicalAsyncJobProperties = deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectEntitiesResponse = (output, context) => {
    let contents = {
        __type: "DetectEntitiesResponse",
        Entities: undefined,
        ModelVersion: undefined,
        PaginationToken: undefined,
        UnmappedAttributes: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1EntityList(output.Entities, context);
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.UnmappedAttributes !== undefined &&
        output.UnmappedAttributes !== null) {
        contents.UnmappedAttributes = deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectEntitiesV2Response = (output, context) => {
    let contents = {
        __type: "DetectEntitiesV2Response",
        Entities: undefined,
        ModelVersion: undefined,
        PaginationToken: undefined,
        UnmappedAttributes: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1EntityList(output.Entities, context);
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    if (output.UnmappedAttributes !== undefined &&
        output.UnmappedAttributes !== null) {
        contents.UnmappedAttributes = deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectPHIResponse = (output, context) => {
    let contents = {
        __type: "DetectPHIResponse",
        Entities: undefined,
        ModelVersion: undefined,
        PaginationToken: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1EntityList(output.Entities, context);
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    return contents;
};
const deserializeAws_json1_1Entity = (output, context) => {
    let contents = {
        __type: "Entity",
        Attributes: undefined,
        BeginOffset: undefined,
        Category: undefined,
        EndOffset: undefined,
        Id: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1AttributeList(output.Attributes, context);
    }
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.Category !== undefined && output.Category !== null) {
        contents.Category = output.Category;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1TraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1EntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Entity(entry, context));
};
const deserializeAws_json1_1ICD10CMAttribute = (output, context) => {
    let contents = {
        __type: "ICD10CMAttribute",
        BeginOffset: undefined,
        EndOffset: undefined,
        Id: undefined,
        RelationshipScore: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.RelationshipScore !== undefined &&
        output.RelationshipScore !== null) {
        contents.RelationshipScore = output.RelationshipScore;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1ICD10CMTraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ICD10CMAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ICD10CMAttribute(entry, context));
};
const deserializeAws_json1_1ICD10CMConcept = (output, context) => {
    let contents = {
        __type: "ICD10CMConcept",
        Code: undefined,
        Description: undefined,
        Score: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1ICD10CMConceptList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ICD10CMConcept(entry, context));
};
const deserializeAws_json1_1ICD10CMEntity = (output, context) => {
    let contents = {
        __type: "ICD10CMEntity",
        Attributes: undefined,
        BeginOffset: undefined,
        Category: undefined,
        EndOffset: undefined,
        ICD10CMConcepts: undefined,
        Id: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1ICD10CMAttributeList(output.Attributes, context);
    }
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.Category !== undefined && output.Category !== null) {
        contents.Category = output.Category;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.ICD10CMConcepts !== undefined && output.ICD10CMConcepts !== null) {
        contents.ICD10CMConcepts = deserializeAws_json1_1ICD10CMConceptList(output.ICD10CMConcepts, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1ICD10CMTraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ICD10CMEntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ICD10CMEntity(entry, context));
};
const deserializeAws_json1_1ICD10CMTrait = (output, context) => {
    let contents = {
        __type: "ICD10CMTrait",
        Name: undefined,
        Score: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1ICD10CMTraitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ICD10CMTrait(entry, context));
};
const deserializeAws_json1_1InferICD10CMResponse = (output, context) => {
    let contents = {
        __type: "InferICD10CMResponse",
        Entities: undefined,
        ModelVersion: undefined,
        PaginationToken: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1ICD10CMEntityList(output.Entities, context);
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    return contents;
};
const deserializeAws_json1_1InferRxNormResponse = (output, context) => {
    let contents = {
        __type: "InferRxNormResponse",
        Entities: undefined,
        ModelVersion: undefined,
        PaginationToken: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1RxNormEntityList(output.Entities, context);
    }
    if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
        contents.ModelVersion = output.ModelVersion;
    }
    if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
        contents.PaginationToken = output.PaginationToken;
    }
    return contents;
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    let contents = {
        __type: "InputDataConfig",
        S3Bucket: undefined,
        S3Key: undefined
    };
    if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
        contents.S3Bucket = output.S3Bucket;
    }
    if (output.S3Key !== undefined && output.S3Key !== null) {
        contents.S3Key = output.S3Key;
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
const deserializeAws_json1_1InvalidEncodingException = (output, context) => {
    let contents = {
        __type: "InvalidEncodingException",
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
const deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse = (output, context) => {
    let contents = {
        __type: "ListEntitiesDetectionV2JobsResponse",
        ComprehendMedicalAsyncJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
        output.ComprehendMedicalAsyncJobPropertiesList !== null) {
        contents.ComprehendMedicalAsyncJobPropertiesList = deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPHIDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListPHIDetectionJobsResponse",
        ComprehendMedicalAsyncJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
        output.ComprehendMedicalAsyncJobPropertiesList !== null) {
        contents.ComprehendMedicalAsyncJobPropertiesList = deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1OutputDataConfig = (output, context) => {
    let contents = {
        __type: "OutputDataConfig",
        S3Bucket: undefined,
        S3Key: undefined
    };
    if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
        contents.S3Bucket = output.S3Bucket;
    }
    if (output.S3Key !== undefined && output.S3Key !== null) {
        contents.S3Key = output.S3Key;
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
const deserializeAws_json1_1RxNormAttribute = (output, context) => {
    let contents = {
        __type: "RxNormAttribute",
        BeginOffset: undefined,
        EndOffset: undefined,
        Id: undefined,
        RelationshipScore: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.RelationshipScore !== undefined &&
        output.RelationshipScore !== null) {
        contents.RelationshipScore = output.RelationshipScore;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1RxNormTraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1RxNormAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RxNormAttribute(entry, context));
};
const deserializeAws_json1_1RxNormConcept = (output, context) => {
    let contents = {
        __type: "RxNormConcept",
        Code: undefined,
        Description: undefined,
        Score: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1RxNormConceptList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RxNormConcept(entry, context));
};
const deserializeAws_json1_1RxNormEntity = (output, context) => {
    let contents = {
        __type: "RxNormEntity",
        Attributes: undefined,
        BeginOffset: undefined,
        Category: undefined,
        EndOffset: undefined,
        Id: undefined,
        RxNormConcepts: undefined,
        Score: undefined,
        Text: undefined,
        Traits: undefined,
        Type: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1RxNormAttributeList(output.Attributes, context);
    }
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.Category !== undefined && output.Category !== null) {
        contents.Category = output.Category;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.RxNormConcepts !== undefined && output.RxNormConcepts !== null) {
        contents.RxNormConcepts = deserializeAws_json1_1RxNormConceptList(output.RxNormConcepts, context);
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Traits !== undefined && output.Traits !== null) {
        contents.Traits = deserializeAws_json1_1RxNormTraitList(output.Traits, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1RxNormEntityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RxNormEntity(entry, context));
};
const deserializeAws_json1_1RxNormTrait = (output, context) => {
    let contents = {
        __type: "RxNormTrait",
        Name: undefined,
        Score: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1RxNormTraitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RxNormTrait(entry, context));
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
const deserializeAws_json1_1StartEntitiesDetectionV2JobResponse = (output, context) => {
    let contents = {
        __type: "StartEntitiesDetectionV2JobResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartPHIDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartPHIDetectionJobResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StopEntitiesDetectionV2JobResponse = (output, context) => {
    let contents = {
        __type: "StopEntitiesDetectionV2JobResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StopPHIDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StopPHIDetectionJobResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
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
const deserializeAws_json1_1Trait = (output, context) => {
    let contents = {
        __type: "Trait",
        Name: undefined,
        Score: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1TraitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Trait(entry, context));
};
const deserializeAws_json1_1UnmappedAttribute = (output, context) => {
    let contents = {
        __type: "UnmappedAttribute",
        Attribute: undefined,
        Type: undefined
    };
    if (output.Attribute !== undefined && output.Attribute !== null) {
        contents.Attribute = deserializeAws_json1_1Attribute(output.Attribute, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1UnmappedAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UnmappedAttribute(entry, context));
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