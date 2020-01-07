"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.AddTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
async function serializeAws_json1_1CreateBatchPredictionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateBatchPrediction";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBatchPredictionCommand = serializeAws_json1_1CreateBatchPredictionCommand;
async function serializeAws_json1_1CreateDataSourceFromRDSCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromRDS";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRDSInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDataSourceFromRDSCommand = serializeAws_json1_1CreateDataSourceFromRDSCommand;
async function serializeAws_json1_1CreateDataSourceFromRedshiftCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromRedshift";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRedshiftInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDataSourceFromRedshiftCommand = serializeAws_json1_1CreateDataSourceFromRedshiftCommand;
async function serializeAws_json1_1CreateDataSourceFromS3Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateDataSourceFromS3";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromS3Input(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDataSourceFromS3Command = serializeAws_json1_1CreateDataSourceFromS3Command;
async function serializeAws_json1_1CreateEvaluationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateEvaluation";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEvaluationCommand = serializeAws_json1_1CreateEvaluationCommand;
async function serializeAws_json1_1CreateMLModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateMLModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMLModelCommand = serializeAws_json1_1CreateMLModelCommand;
async function serializeAws_json1_1CreateRealtimeEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.CreateRealtimeEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRealtimeEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateRealtimeEndpointCommand = serializeAws_json1_1CreateRealtimeEndpointCommand;
async function serializeAws_json1_1DeleteBatchPredictionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteBatchPrediction";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBatchPredictionCommand = serializeAws_json1_1DeleteBatchPredictionCommand;
async function serializeAws_json1_1DeleteDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDataSourceCommand = serializeAws_json1_1DeleteDataSourceCommand;
async function serializeAws_json1_1DeleteEvaluationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteEvaluation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEvaluationCommand = serializeAws_json1_1DeleteEvaluationCommand;
async function serializeAws_json1_1DeleteMLModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteMLModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMLModelCommand = serializeAws_json1_1DeleteMLModelCommand;
async function serializeAws_json1_1DeleteRealtimeEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteRealtimeEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRealtimeEndpointInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteRealtimeEndpointCommand = serializeAws_json1_1DeleteRealtimeEndpointCommand;
async function serializeAws_json1_1DeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DeleteTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
async function serializeAws_json1_1DescribeBatchPredictionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DescribeBatchPredictions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBatchPredictionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBatchPredictionsCommand = serializeAws_json1_1DescribeBatchPredictionsCommand;
async function serializeAws_json1_1DescribeDataSourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DescribeDataSources";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDataSourcesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDataSourcesCommand = serializeAws_json1_1DescribeDataSourcesCommand;
async function serializeAws_json1_1DescribeEvaluationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DescribeEvaluations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEvaluationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEvaluationsCommand = serializeAws_json1_1DescribeEvaluationsCommand;
async function serializeAws_json1_1DescribeMLModelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DescribeMLModels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMLModelsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMLModelsCommand = serializeAws_json1_1DescribeMLModelsCommand;
async function serializeAws_json1_1DescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.DescribeTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
async function serializeAws_json1_1GetBatchPredictionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.GetBatchPrediction";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetBatchPredictionCommand = serializeAws_json1_1GetBatchPredictionCommand;
async function serializeAws_json1_1GetDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.GetDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDataSourceCommand = serializeAws_json1_1GetDataSourceCommand;
async function serializeAws_json1_1GetEvaluationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.GetEvaluation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetEvaluationCommand = serializeAws_json1_1GetEvaluationCommand;
async function serializeAws_json1_1GetMLModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.GetMLModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMLModelCommand = serializeAws_json1_1GetMLModelCommand;
async function serializeAws_json1_1PredictCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.Predict";
    let body;
    body = JSON.stringify(serializeAws_json1_1PredictInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PredictCommand = serializeAws_json1_1PredictCommand;
async function serializeAws_json1_1UpdateBatchPredictionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.UpdateBatchPrediction";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBatchPredictionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateBatchPredictionCommand = serializeAws_json1_1UpdateBatchPredictionCommand;
async function serializeAws_json1_1UpdateDataSourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.UpdateDataSource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDataSourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDataSourceCommand = serializeAws_json1_1UpdateDataSourceCommand;
async function serializeAws_json1_1UpdateEvaluationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.UpdateEvaluation";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEvaluationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEvaluationCommand = serializeAws_json1_1UpdateEvaluationCommand;
async function serializeAws_json1_1UpdateMLModelCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonML_20141212.UpdateMLModel";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMLModelInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMLModelCommand = serializeAws_json1_1UpdateMLModelCommand;
async function deserializeAws_json1_1AddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
async function deserializeAws_json1_1AddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.eml.v20141212#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazon.eml.v20141212#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateBatchPredictionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBatchPredictionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBatchPredictionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBatchPredictionCommand = deserializeAws_json1_1CreateBatchPredictionCommand;
async function deserializeAws_json1_1CreateBatchPredictionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDataSourceFromRDSCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDataSourceFromRDSCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromRDSOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDataSourceFromRDSOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDataSourceFromRDSCommand = deserializeAws_json1_1CreateDataSourceFromRDSCommand;
async function deserializeAws_json1_1CreateDataSourceFromRDSCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDataSourceFromRedshiftCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromRedshiftOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDataSourceFromRedshiftOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = deserializeAws_json1_1CreateDataSourceFromRedshiftCommand;
async function deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDataSourceFromS3Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDataSourceFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDataSourceFromS3Output(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDataSourceFromS3Output" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDataSourceFromS3Command = deserializeAws_json1_1CreateDataSourceFromS3Command;
async function deserializeAws_json1_1CreateDataSourceFromS3CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEvaluationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEvaluationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEvaluationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEvaluationCommand = deserializeAws_json1_1CreateEvaluationCommand;
async function deserializeAws_json1_1CreateEvaluationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateMLModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMLModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMLModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMLModelCommand = deserializeAws_json1_1CreateMLModelCommand;
async function deserializeAws_json1_1CreateMLModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazon.eml.v20141212#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateRealtimeEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateRealtimeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRealtimeEndpointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateRealtimeEndpointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateRealtimeEndpointCommand = deserializeAws_json1_1CreateRealtimeEndpointCommand;
async function deserializeAws_json1_1CreateRealtimeEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteBatchPredictionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteBatchPredictionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBatchPredictionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBatchPredictionCommand = deserializeAws_json1_1DeleteBatchPredictionCommand;
async function deserializeAws_json1_1DeleteBatchPredictionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDataSourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDataSourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDataSourceCommand = deserializeAws_json1_1DeleteDataSourceCommand;
async function deserializeAws_json1_1DeleteDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteEvaluationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEvaluationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEvaluationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEvaluationCommand = deserializeAws_json1_1DeleteEvaluationCommand;
async function deserializeAws_json1_1DeleteEvaluationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteMLModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMLModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMLModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMLModelCommand = deserializeAws_json1_1DeleteMLModelCommand;
async function deserializeAws_json1_1DeleteMLModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteRealtimeEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteRealtimeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRealtimeEndpointOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteRealtimeEndpointOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteRealtimeEndpointCommand = deserializeAws_json1_1DeleteRealtimeEndpointCommand;
async function deserializeAws_json1_1DeleteRealtimeEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
async function deserializeAws_json1_1DeleteTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazon.eml.v20141212#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeBatchPredictionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBatchPredictionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBatchPredictionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBatchPredictionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBatchPredictionsCommand = deserializeAws_json1_1DescribeBatchPredictionsCommand;
async function deserializeAws_json1_1DescribeBatchPredictionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDataSourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDataSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDataSourcesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDataSourcesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDataSourcesCommand = deserializeAws_json1_1DescribeDataSourcesCommand;
async function deserializeAws_json1_1DescribeDataSourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEvaluationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEvaluationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEvaluationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEvaluationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEvaluationsCommand = deserializeAws_json1_1DescribeEvaluationsCommand;
async function deserializeAws_json1_1DescribeEvaluationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeMLModelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMLModelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMLModelsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMLModelsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMLModelsCommand = deserializeAws_json1_1DescribeMLModelsCommand;
async function deserializeAws_json1_1DescribeMLModelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
async function deserializeAws_json1_1DescribeTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetBatchPredictionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBatchPredictionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetBatchPredictionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetBatchPredictionCommand = deserializeAws_json1_1GetBatchPredictionCommand;
async function deserializeAws_json1_1GetBatchPredictionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataSourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDataSourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDataSourceCommand = deserializeAws_json1_1GetDataSourceCommand;
async function deserializeAws_json1_1GetDataSourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetEvaluationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEvaluationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEvaluationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetEvaluationCommand = deserializeAws_json1_1GetEvaluationCommand;
async function deserializeAws_json1_1GetEvaluationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetMLModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMLModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMLModelCommand = deserializeAws_json1_1GetMLModelCommand;
async function deserializeAws_json1_1GetMLModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1PredictCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PredictCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PredictOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PredictOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PredictCommand = deserializeAws_json1_1PredictCommand;
async function deserializeAws_json1_1PredictCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.eml.v20141212#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PredictorNotMountedException":
        case "com.amazon.eml.v20141212#PredictorNotMountedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PredictorNotMountedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateBatchPredictionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateBatchPredictionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBatchPredictionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateBatchPredictionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateBatchPredictionCommand = deserializeAws_json1_1UpdateBatchPredictionCommand;
async function deserializeAws_json1_1UpdateBatchPredictionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateDataSourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDataSourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDataSourceOutput" }, contents);
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
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateEvaluationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEvaluationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEvaluationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEvaluationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEvaluationCommand = deserializeAws_json1_1UpdateEvaluationCommand;
async function deserializeAws_json1_1UpdateEvaluationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateMLModelCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMLModelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMLModelOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMLModelOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMLModelCommand = deserializeAws_json1_1UpdateMLModelCommand;
async function deserializeAws_json1_1UpdateMLModelCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazon.eml.v20141212#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.eml.v20141212#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.eml.v20141212#ResourceNotFoundException":
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
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1PredictorNotMountedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PredictorNotMountedException(body, context);
    const contents = Object.assign({ name: "PredictorNotMountedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = Object.assign({ name: "TagLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBatchPredictionInput = (input, context) => {
    const bodyParams = {};
    if (input.BatchPredictionDataSourceId !== undefined) {
        bodyParams["BatchPredictionDataSourceId"] =
            input.BatchPredictionDataSourceId;
    }
    if (input.BatchPredictionId !== undefined) {
        bodyParams["BatchPredictionId"] = input.BatchPredictionId;
    }
    if (input.BatchPredictionName !== undefined) {
        bodyParams["BatchPredictionName"] = input.BatchPredictionName;
    }
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    if (input.OutputUri !== undefined) {
        bodyParams["OutputUri"] = input.OutputUri;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDataSourceFromRDSInput = (input, context) => {
    const bodyParams = {};
    if (input.ComputeStatistics !== undefined) {
        bodyParams["ComputeStatistics"] = input.ComputeStatistics;
    }
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    if (input.DataSourceName !== undefined) {
        bodyParams["DataSourceName"] = input.DataSourceName;
    }
    if (input.RDSData !== undefined) {
        bodyParams["RDSData"] = serializeAws_json1_1RDSDataSpec(input.RDSData, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDataSourceFromRedshiftInput = (input, context) => {
    const bodyParams = {};
    if (input.ComputeStatistics !== undefined) {
        bodyParams["ComputeStatistics"] = input.ComputeStatistics;
    }
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    if (input.DataSourceName !== undefined) {
        bodyParams["DataSourceName"] = input.DataSourceName;
    }
    if (input.DataSpec !== undefined) {
        bodyParams["DataSpec"] = serializeAws_json1_1RedshiftDataSpec(input.DataSpec, context);
    }
    if (input.RoleARN !== undefined) {
        bodyParams["RoleARN"] = input.RoleARN;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDataSourceFromS3Input = (input, context) => {
    const bodyParams = {};
    if (input.ComputeStatistics !== undefined) {
        bodyParams["ComputeStatistics"] = input.ComputeStatistics;
    }
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    if (input.DataSourceName !== undefined) {
        bodyParams["DataSourceName"] = input.DataSourceName;
    }
    if (input.DataSpec !== undefined) {
        bodyParams["DataSpec"] = serializeAws_json1_1S3DataSpec(input.DataSpec, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEvaluationInput = (input, context) => {
    const bodyParams = {};
    if (input.EvaluationDataSourceId !== undefined) {
        bodyParams["EvaluationDataSourceId"] = input.EvaluationDataSourceId;
    }
    if (input.EvaluationId !== undefined) {
        bodyParams["EvaluationId"] = input.EvaluationId;
    }
    if (input.EvaluationName !== undefined) {
        bodyParams["EvaluationName"] = input.EvaluationName;
    }
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMLModelInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    if (input.MLModelName !== undefined) {
        bodyParams["MLModelName"] = input.MLModelName;
    }
    if (input.MLModelType !== undefined) {
        bodyParams["MLModelType"] = input.MLModelType;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1TrainingParameters(input.Parameters, context);
    }
    if (input.Recipe !== undefined) {
        bodyParams["Recipe"] = input.Recipe;
    }
    if (input.RecipeUri !== undefined) {
        bodyParams["RecipeUri"] = input.RecipeUri;
    }
    if (input.TrainingDataSourceId !== undefined) {
        bodyParams["TrainingDataSourceId"] = input.TrainingDataSourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateRealtimeEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBatchPredictionInput = (input, context) => {
    const bodyParams = {};
    if (input.BatchPredictionId !== undefined) {
        bodyParams["BatchPredictionId"] = input.BatchPredictionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDataSourceInput = (input, context) => {
    const bodyParams = {};
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEvaluationInput = (input, context) => {
    const bodyParams = {};
    if (input.EvaluationId !== undefined) {
        bodyParams["EvaluationId"] = input.EvaluationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMLModelInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteRealtimeEndpointInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBatchPredictionsInput = (input, context) => {
    const bodyParams = {};
    if (input.EQ !== undefined) {
        bodyParams["EQ"] = input.EQ;
    }
    if (input.FilterVariable !== undefined) {
        bodyParams["FilterVariable"] = input.FilterVariable;
    }
    if (input.GE !== undefined) {
        bodyParams["GE"] = input.GE;
    }
    if (input.GT !== undefined) {
        bodyParams["GT"] = input.GT;
    }
    if (input.LE !== undefined) {
        bodyParams["LE"] = input.LE;
    }
    if (input.LT !== undefined) {
        bodyParams["LT"] = input.LT;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NE !== undefined) {
        bodyParams["NE"] = input.NE;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDataSourcesInput = (input, context) => {
    const bodyParams = {};
    if (input.EQ !== undefined) {
        bodyParams["EQ"] = input.EQ;
    }
    if (input.FilterVariable !== undefined) {
        bodyParams["FilterVariable"] = input.FilterVariable;
    }
    if (input.GE !== undefined) {
        bodyParams["GE"] = input.GE;
    }
    if (input.GT !== undefined) {
        bodyParams["GT"] = input.GT;
    }
    if (input.LE !== undefined) {
        bodyParams["LE"] = input.LE;
    }
    if (input.LT !== undefined) {
        bodyParams["LT"] = input.LT;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NE !== undefined) {
        bodyParams["NE"] = input.NE;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEvaluationsInput = (input, context) => {
    const bodyParams = {};
    if (input.EQ !== undefined) {
        bodyParams["EQ"] = input.EQ;
    }
    if (input.FilterVariable !== undefined) {
        bodyParams["FilterVariable"] = input.FilterVariable;
    }
    if (input.GE !== undefined) {
        bodyParams["GE"] = input.GE;
    }
    if (input.GT !== undefined) {
        bodyParams["GT"] = input.GT;
    }
    if (input.LE !== undefined) {
        bodyParams["LE"] = input.LE;
    }
    if (input.LT !== undefined) {
        bodyParams["LT"] = input.LT;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NE !== undefined) {
        bodyParams["NE"] = input.NE;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMLModelsInput = (input, context) => {
    const bodyParams = {};
    if (input.EQ !== undefined) {
        bodyParams["EQ"] = input.EQ;
    }
    if (input.FilterVariable !== undefined) {
        bodyParams["FilterVariable"] = input.FilterVariable;
    }
    if (input.GE !== undefined) {
        bodyParams["GE"] = input.GE;
    }
    if (input.GT !== undefined) {
        bodyParams["GT"] = input.GT;
    }
    if (input.LE !== undefined) {
        bodyParams["LE"] = input.LE;
    }
    if (input.LT !== undefined) {
        bodyParams["LT"] = input.LT;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NE !== undefined) {
        bodyParams["NE"] = input.NE;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Prefix !== undefined) {
        bodyParams["Prefix"] = input.Prefix;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    return bodyParams;
};
const serializeAws_json1_1EDPSecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetBatchPredictionInput = (input, context) => {
    const bodyParams = {};
    if (input.BatchPredictionId !== undefined) {
        bodyParams["BatchPredictionId"] = input.BatchPredictionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDataSourceInput = (input, context) => {
    const bodyParams = {};
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    if (input.Verbose !== undefined) {
        bodyParams["Verbose"] = input.Verbose;
    }
    return bodyParams;
};
const serializeAws_json1_1GetEvaluationInput = (input, context) => {
    const bodyParams = {};
    if (input.EvaluationId !== undefined) {
        bodyParams["EvaluationId"] = input.EvaluationId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMLModelInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    if (input.Verbose !== undefined) {
        bodyParams["Verbose"] = input.Verbose;
    }
    return bodyParams;
};
const serializeAws_json1_1PredictInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    if (input.PredictEndpoint !== undefined) {
        bodyParams["PredictEndpoint"] = input.PredictEndpoint;
    }
    if (input.Record !== undefined) {
        bodyParams["Record"] = serializeAws_json1_1Record(input.Record, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RDSDataSpec = (input, context) => {
    const bodyParams = {};
    if (input.DataRearrangement !== undefined) {
        bodyParams["DataRearrangement"] = input.DataRearrangement;
    }
    if (input.DataSchema !== undefined) {
        bodyParams["DataSchema"] = input.DataSchema;
    }
    if (input.DataSchemaUri !== undefined) {
        bodyParams["DataSchemaUri"] = input.DataSchemaUri;
    }
    if (input.DatabaseCredentials !== undefined) {
        bodyParams["DatabaseCredentials"] = serializeAws_json1_1RDSDatabaseCredentials(input.DatabaseCredentials, context);
    }
    if (input.DatabaseInformation !== undefined) {
        bodyParams["DatabaseInformation"] = serializeAws_json1_1RDSDatabase(input.DatabaseInformation, context);
    }
    if (input.ResourceRole !== undefined) {
        bodyParams["ResourceRole"] = input.ResourceRole;
    }
    if (input.S3StagingLocation !== undefined) {
        bodyParams["S3StagingLocation"] = input.S3StagingLocation;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1EDPSecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.SelectSqlQuery !== undefined) {
        bodyParams["SelectSqlQuery"] = input.SelectSqlQuery;
    }
    if (input.ServiceRole !== undefined) {
        bodyParams["ServiceRole"] = input.ServiceRole;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    return bodyParams;
};
const serializeAws_json1_1RDSDatabase = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.InstanceIdentifier !== undefined) {
        bodyParams["InstanceIdentifier"] = input.InstanceIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1RDSDatabaseCredentials = (input, context) => {
    const bodyParams = {};
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1Record = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1RedshiftDataSpec = (input, context) => {
    const bodyParams = {};
    if (input.DataRearrangement !== undefined) {
        bodyParams["DataRearrangement"] = input.DataRearrangement;
    }
    if (input.DataSchema !== undefined) {
        bodyParams["DataSchema"] = input.DataSchema;
    }
    if (input.DataSchemaUri !== undefined) {
        bodyParams["DataSchemaUri"] = input.DataSchemaUri;
    }
    if (input.DatabaseCredentials !== undefined) {
        bodyParams["DatabaseCredentials"] = serializeAws_json1_1RedshiftDatabaseCredentials(input.DatabaseCredentials, context);
    }
    if (input.DatabaseInformation !== undefined) {
        bodyParams["DatabaseInformation"] = serializeAws_json1_1RedshiftDatabase(input.DatabaseInformation, context);
    }
    if (input.S3StagingLocation !== undefined) {
        bodyParams["S3StagingLocation"] = input.S3StagingLocation;
    }
    if (input.SelectSqlQuery !== undefined) {
        bodyParams["SelectSqlQuery"] = input.SelectSqlQuery;
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftDatabase = (input, context) => {
    const bodyParams = {};
    if (input.ClusterIdentifier !== undefined) {
        bodyParams["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    return bodyParams;
};
const serializeAws_json1_1RedshiftDatabaseCredentials = (input, context) => {
    const bodyParams = {};
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1S3DataSpec = (input, context) => {
    const bodyParams = {};
    if (input.DataLocationS3 !== undefined) {
        bodyParams["DataLocationS3"] = input.DataLocationS3;
    }
    if (input.DataRearrangement !== undefined) {
        bodyParams["DataRearrangement"] = input.DataRearrangement;
    }
    if (input.DataSchema !== undefined) {
        bodyParams["DataSchema"] = input.DataSchema;
    }
    if (input.DataSchemaLocationS3 !== undefined) {
        bodyParams["DataSchemaLocationS3"] = input.DataSchemaLocationS3;
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
const serializeAws_json1_1TrainingParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UpdateBatchPredictionInput = (input, context) => {
    const bodyParams = {};
    if (input.BatchPredictionId !== undefined) {
        bodyParams["BatchPredictionId"] = input.BatchPredictionId;
    }
    if (input.BatchPredictionName !== undefined) {
        bodyParams["BatchPredictionName"] = input.BatchPredictionName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDataSourceInput = (input, context) => {
    const bodyParams = {};
    if (input.DataSourceId !== undefined) {
        bodyParams["DataSourceId"] = input.DataSourceId;
    }
    if (input.DataSourceName !== undefined) {
        bodyParams["DataSourceName"] = input.DataSourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEvaluationInput = (input, context) => {
    const bodyParams = {};
    if (input.EvaluationId !== undefined) {
        bodyParams["EvaluationId"] = input.EvaluationId;
    }
    if (input.EvaluationName !== undefined) {
        bodyParams["EvaluationName"] = input.EvaluationName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMLModelInput = (input, context) => {
    const bodyParams = {};
    if (input.MLModelId !== undefined) {
        bodyParams["MLModelId"] = input.MLModelId;
    }
    if (input.MLModelName !== undefined) {
        bodyParams["MLModelName"] = input.MLModelName;
    }
    if (input.ScoreThreshold !== undefined) {
        bodyParams["ScoreThreshold"] = input.ScoreThreshold;
    }
    return bodyParams;
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput",
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1BatchPrediction = (output, context) => {
    let contents = {
        __type: "BatchPrediction",
        BatchPredictionDataSourceId: undefined,
        BatchPredictionId: undefined,
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        InvalidRecordCount: undefined,
        LastUpdatedAt: undefined,
        MLModelId: undefined,
        Message: undefined,
        Name: undefined,
        OutputUri: undefined,
        StartedAt: undefined,
        Status: undefined,
        TotalRecordCount: undefined
    };
    if (output.BatchPredictionDataSourceId !== undefined &&
        output.BatchPredictionDataSourceId !== null) {
        contents.BatchPredictionDataSourceId = output.BatchPredictionDataSourceId;
    }
    if (output.BatchPredictionId !== undefined &&
        output.BatchPredictionId !== null) {
        contents.BatchPredictionId = output.BatchPredictionId;
    }
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.InvalidRecordCount !== undefined &&
        output.InvalidRecordCount !== null) {
        contents.InvalidRecordCount = output.InvalidRecordCount;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputUri !== undefined && output.OutputUri !== null) {
        contents.OutputUri = output.OutputUri;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TotalRecordCount !== undefined &&
        output.TotalRecordCount !== null) {
        contents.TotalRecordCount = output.TotalRecordCount;
    }
    return contents;
};
const deserializeAws_json1_1BatchPredictions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchPrediction(entry, context));
};
const deserializeAws_json1_1CreateBatchPredictionOutput = (output, context) => {
    let contents = {
        __type: "CreateBatchPredictionOutput",
        BatchPredictionId: undefined
    };
    if (output.BatchPredictionId !== undefined &&
        output.BatchPredictionId !== null) {
        contents.BatchPredictionId = output.BatchPredictionId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDataSourceFromRDSOutput = (output, context) => {
    let contents = {
        __type: "CreateDataSourceFromRDSOutput",
        DataSourceId: undefined
    };
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDataSourceFromRedshiftOutput = (output, context) => {
    let contents = {
        __type: "CreateDataSourceFromRedshiftOutput",
        DataSourceId: undefined
    };
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDataSourceFromS3Output = (output, context) => {
    let contents = {
        __type: "CreateDataSourceFromS3Output",
        DataSourceId: undefined
    };
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    return contents;
};
const deserializeAws_json1_1CreateEvaluationOutput = (output, context) => {
    let contents = {
        __type: "CreateEvaluationOutput",
        EvaluationId: undefined
    };
    if (output.EvaluationId !== undefined && output.EvaluationId !== null) {
        contents.EvaluationId = output.EvaluationId;
    }
    return contents;
};
const deserializeAws_json1_1CreateMLModelOutput = (output, context) => {
    let contents = {
        __type: "CreateMLModelOutput",
        MLModelId: undefined
    };
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    return contents;
};
const deserializeAws_json1_1CreateRealtimeEndpointOutput = (output, context) => {
    let contents = {
        __type: "CreateRealtimeEndpointOutput",
        MLModelId: undefined,
        RealtimeEndpointInfo: undefined
    };
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.RealtimeEndpointInfo !== undefined &&
        output.RealtimeEndpointInfo !== null) {
        contents.RealtimeEndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1DataSource = (output, context) => {
    let contents = {
        __type: "DataSource",
        ComputeStatistics: undefined,
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        DataLocationS3: undefined,
        DataRearrangement: undefined,
        DataSizeInBytes: undefined,
        DataSourceId: undefined,
        FinishedAt: undefined,
        LastUpdatedAt: undefined,
        Message: undefined,
        Name: undefined,
        NumberOfFiles: undefined,
        RDSMetadata: undefined,
        RedshiftMetadata: undefined,
        RoleARN: undefined,
        StartedAt: undefined,
        Status: undefined
    };
    if (output.ComputeStatistics !== undefined &&
        output.ComputeStatistics !== null) {
        contents.ComputeStatistics = output.ComputeStatistics;
    }
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.DataLocationS3 !== undefined && output.DataLocationS3 !== null) {
        contents.DataLocationS3 = output.DataLocationS3;
    }
    if (output.DataRearrangement !== undefined &&
        output.DataRearrangement !== null) {
        contents.DataRearrangement = output.DataRearrangement;
    }
    if (output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null) {
        contents.DataSizeInBytes = output.DataSizeInBytes;
    }
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberOfFiles !== undefined && output.NumberOfFiles !== null) {
        contents.NumberOfFiles = output.NumberOfFiles;
    }
    if (output.RDSMetadata !== undefined && output.RDSMetadata !== null) {
        contents.RDSMetadata = deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context);
    }
    if (output.RedshiftMetadata !== undefined &&
        output.RedshiftMetadata !== null) {
        contents.RedshiftMetadata = deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DataSources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataSource(entry, context));
};
const deserializeAws_json1_1DeleteBatchPredictionOutput = (output, context) => {
    let contents = {
        __type: "DeleteBatchPredictionOutput",
        BatchPredictionId: undefined
    };
    if (output.BatchPredictionId !== undefined &&
        output.BatchPredictionId !== null) {
        contents.BatchPredictionId = output.BatchPredictionId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteDataSourceOutput = (output, context) => {
    let contents = {
        __type: "DeleteDataSourceOutput",
        DataSourceId: undefined
    };
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteEvaluationOutput = (output, context) => {
    let contents = {
        __type: "DeleteEvaluationOutput",
        EvaluationId: undefined
    };
    if (output.EvaluationId !== undefined && output.EvaluationId !== null) {
        contents.EvaluationId = output.EvaluationId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteMLModelOutput = (output, context) => {
    let contents = {
        __type: "DeleteMLModelOutput",
        MLModelId: undefined
    };
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteRealtimeEndpointOutput = (output, context) => {
    let contents = {
        __type: "DeleteRealtimeEndpointOutput",
        MLModelId: undefined,
        RealtimeEndpointInfo: undefined
    };
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.RealtimeEndpointInfo !== undefined &&
        output.RealtimeEndpointInfo !== null) {
        contents.RealtimeEndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteTagsOutput = (output, context) => {
    let contents = {
        __type: "DeleteTagsOutput",
        ResourceId: undefined,
        ResourceType: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1DescribeBatchPredictionsOutput = (output, context) => {
    let contents = {
        __type: "DescribeBatchPredictionsOutput",
        NextToken: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1BatchPredictions(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDataSourcesOutput = (output, context) => {
    let contents = {
        __type: "DescribeDataSourcesOutput",
        NextToken: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1DataSources(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEvaluationsOutput = (output, context) => {
    let contents = {
        __type: "DescribeEvaluationsOutput",
        NextToken: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1Evaluations(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMLModelsOutput = (output, context) => {
    let contents = {
        __type: "DescribeMLModelsOutput",
        NextToken: undefined,
        Results: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Results !== undefined && output.Results !== null) {
        contents.Results = deserializeAws_json1_1MLModels(output.Results, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTagsOutput = (output, context) => {
    let contents = {
        __type: "DescribeTagsOutput",
        ResourceId: undefined,
        ResourceType: undefined,
        Tags: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DetailsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Evaluation = (output, context) => {
    let contents = {
        __type: "Evaluation",
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        EvaluationDataSourceId: undefined,
        EvaluationId: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        LastUpdatedAt: undefined,
        MLModelId: undefined,
        Message: undefined,
        Name: undefined,
        PerformanceMetrics: undefined,
        StartedAt: undefined,
        Status: undefined
    };
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.EvaluationDataSourceId !== undefined &&
        output.EvaluationDataSourceId !== null) {
        contents.EvaluationDataSourceId = output.EvaluationDataSourceId;
    }
    if (output.EvaluationId !== undefined && output.EvaluationId !== null) {
        contents.EvaluationId = output.EvaluationId;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PerformanceMetrics !== undefined &&
        output.PerformanceMetrics !== null) {
        contents.PerformanceMetrics = deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context);
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1Evaluations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Evaluation(entry, context));
};
const deserializeAws_json1_1GetBatchPredictionOutput = (output, context) => {
    let contents = {
        __type: "GetBatchPredictionOutput",
        BatchPredictionDataSourceId: undefined,
        BatchPredictionId: undefined,
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        InvalidRecordCount: undefined,
        LastUpdatedAt: undefined,
        LogUri: undefined,
        MLModelId: undefined,
        Message: undefined,
        Name: undefined,
        OutputUri: undefined,
        StartedAt: undefined,
        Status: undefined,
        TotalRecordCount: undefined
    };
    if (output.BatchPredictionDataSourceId !== undefined &&
        output.BatchPredictionDataSourceId !== null) {
        contents.BatchPredictionDataSourceId = output.BatchPredictionDataSourceId;
    }
    if (output.BatchPredictionId !== undefined &&
        output.BatchPredictionId !== null) {
        contents.BatchPredictionId = output.BatchPredictionId;
    }
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.InvalidRecordCount !== undefined &&
        output.InvalidRecordCount !== null) {
        contents.InvalidRecordCount = output.InvalidRecordCount;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OutputUri !== undefined && output.OutputUri !== null) {
        contents.OutputUri = output.OutputUri;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TotalRecordCount !== undefined &&
        output.TotalRecordCount !== null) {
        contents.TotalRecordCount = output.TotalRecordCount;
    }
    return contents;
};
const deserializeAws_json1_1GetDataSourceOutput = (output, context) => {
    let contents = {
        __type: "GetDataSourceOutput",
        ComputeStatistics: undefined,
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        DataLocationS3: undefined,
        DataRearrangement: undefined,
        DataSizeInBytes: undefined,
        DataSourceId: undefined,
        DataSourceSchema: undefined,
        FinishedAt: undefined,
        LastUpdatedAt: undefined,
        LogUri: undefined,
        Message: undefined,
        Name: undefined,
        NumberOfFiles: undefined,
        RDSMetadata: undefined,
        RedshiftMetadata: undefined,
        RoleARN: undefined,
        StartedAt: undefined,
        Status: undefined
    };
    if (output.ComputeStatistics !== undefined &&
        output.ComputeStatistics !== null) {
        contents.ComputeStatistics = output.ComputeStatistics;
    }
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.DataLocationS3 !== undefined && output.DataLocationS3 !== null) {
        contents.DataLocationS3 = output.DataLocationS3;
    }
    if (output.DataRearrangement !== undefined &&
        output.DataRearrangement !== null) {
        contents.DataRearrangement = output.DataRearrangement;
    }
    if (output.DataSizeInBytes !== undefined && output.DataSizeInBytes !== null) {
        contents.DataSizeInBytes = output.DataSizeInBytes;
    }
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    if (output.DataSourceSchema !== undefined &&
        output.DataSourceSchema !== null) {
        contents.DataSourceSchema = output.DataSourceSchema;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberOfFiles !== undefined && output.NumberOfFiles !== null) {
        contents.NumberOfFiles = output.NumberOfFiles;
    }
    if (output.RDSMetadata !== undefined && output.RDSMetadata !== null) {
        contents.RDSMetadata = deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context);
    }
    if (output.RedshiftMetadata !== undefined &&
        output.RedshiftMetadata !== null) {
        contents.RedshiftMetadata = deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context);
    }
    if (output.RoleARN !== undefined && output.RoleARN !== null) {
        contents.RoleARN = output.RoleARN;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1GetEvaluationOutput = (output, context) => {
    let contents = {
        __type: "GetEvaluationOutput",
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        EvaluationDataSourceId: undefined,
        EvaluationId: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        LastUpdatedAt: undefined,
        LogUri: undefined,
        MLModelId: undefined,
        Message: undefined,
        Name: undefined,
        PerformanceMetrics: undefined,
        StartedAt: undefined,
        Status: undefined
    };
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.EvaluationDataSourceId !== undefined &&
        output.EvaluationDataSourceId !== null) {
        contents.EvaluationDataSourceId = output.EvaluationDataSourceId;
    }
    if (output.EvaluationId !== undefined && output.EvaluationId !== null) {
        contents.EvaluationId = output.EvaluationId;
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PerformanceMetrics !== undefined &&
        output.PerformanceMetrics !== null) {
        contents.PerformanceMetrics = deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context);
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1GetMLModelOutput = (output, context) => {
    let contents = {
        __type: "GetMLModelOutput",
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        EndpointInfo: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        LastUpdatedAt: undefined,
        LogUri: undefined,
        MLModelId: undefined,
        MLModelType: undefined,
        Message: undefined,
        Name: undefined,
        Recipe: undefined,
        Schema: undefined,
        ScoreThreshold: undefined,
        ScoreThresholdLastUpdatedAt: undefined,
        SizeInBytes: undefined,
        StartedAt: undefined,
        Status: undefined,
        TrainingDataSourceId: undefined,
        TrainingParameters: undefined
    };
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.EndpointInfo !== undefined && output.EndpointInfo !== null) {
        contents.EndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context);
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.MLModelType !== undefined && output.MLModelType !== null) {
        contents.MLModelType = output.MLModelType;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Recipe !== undefined && output.Recipe !== null) {
        contents.Recipe = output.Recipe;
    }
    if (output.Schema !== undefined && output.Schema !== null) {
        contents.Schema = output.Schema;
    }
    if (output.ScoreThreshold !== undefined && output.ScoreThreshold !== null) {
        contents.ScoreThreshold = output.ScoreThreshold;
    }
    if (output.ScoreThresholdLastUpdatedAt !== undefined &&
        output.ScoreThresholdLastUpdatedAt !== null) {
        contents.ScoreThresholdLastUpdatedAt = new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000));
    }
    if (output.SizeInBytes !== undefined && output.SizeInBytes !== null) {
        contents.SizeInBytes = output.SizeInBytes;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TrainingDataSourceId !== undefined &&
        output.TrainingDataSourceId !== null) {
        contents.TrainingDataSourceId = output.TrainingDataSourceId;
    }
    if (output.TrainingParameters !== undefined &&
        output.TrainingParameters !== null) {
        contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
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
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MLModel = (output, context) => {
    let contents = {
        __type: "MLModel",
        Algorithm: undefined,
        ComputeTime: undefined,
        CreatedAt: undefined,
        CreatedByIamUser: undefined,
        EndpointInfo: undefined,
        FinishedAt: undefined,
        InputDataLocationS3: undefined,
        LastUpdatedAt: undefined,
        MLModelId: undefined,
        MLModelType: undefined,
        Message: undefined,
        Name: undefined,
        ScoreThreshold: undefined,
        ScoreThresholdLastUpdatedAt: undefined,
        SizeInBytes: undefined,
        StartedAt: undefined,
        Status: undefined,
        TrainingDataSourceId: undefined,
        TrainingParameters: undefined
    };
    if (output.Algorithm !== undefined && output.Algorithm !== null) {
        contents.Algorithm = output.Algorithm;
    }
    if (output.ComputeTime !== undefined && output.ComputeTime !== null) {
        contents.ComputeTime = output.ComputeTime;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.CreatedByIamUser !== undefined &&
        output.CreatedByIamUser !== null) {
        contents.CreatedByIamUser = output.CreatedByIamUser;
    }
    if (output.EndpointInfo !== undefined && output.EndpointInfo !== null) {
        contents.EndpointInfo = deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context);
    }
    if (output.FinishedAt !== undefined && output.FinishedAt !== null) {
        contents.FinishedAt = new Date(Math.round(output.FinishedAt * 1000));
    }
    if (output.InputDataLocationS3 !== undefined &&
        output.InputDataLocationS3 !== null) {
        contents.InputDataLocationS3 = output.InputDataLocationS3;
    }
    if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
    }
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
    }
    if (output.MLModelType !== undefined && output.MLModelType !== null) {
        contents.MLModelType = output.MLModelType;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScoreThreshold !== undefined && output.ScoreThreshold !== null) {
        contents.ScoreThreshold = output.ScoreThreshold;
    }
    if (output.ScoreThresholdLastUpdatedAt !== undefined &&
        output.ScoreThresholdLastUpdatedAt !== null) {
        contents.ScoreThresholdLastUpdatedAt = new Date(Math.round(output.ScoreThresholdLastUpdatedAt * 1000));
    }
    if (output.SizeInBytes !== undefined && output.SizeInBytes !== null) {
        contents.SizeInBytes = output.SizeInBytes;
    }
    if (output.StartedAt !== undefined && output.StartedAt !== null) {
        contents.StartedAt = new Date(Math.round(output.StartedAt * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TrainingDataSourceId !== undefined &&
        output.TrainingDataSourceId !== null) {
        contents.TrainingDataSourceId = output.TrainingDataSourceId;
    }
    if (output.TrainingParameters !== undefined &&
        output.TrainingParameters !== null) {
        contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1MLModels = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MLModel(entry, context));
};
const deserializeAws_json1_1PerformanceMetrics = (output, context) => {
    let contents = {
        __type: "PerformanceMetrics",
        Properties: undefined
    };
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1PerformanceMetricsProperties(output.Properties, context);
    }
    return contents;
};
const deserializeAws_json1_1PerformanceMetricsProperties = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1PredictOutput = (output, context) => {
    let contents = {
        __type: "PredictOutput",
        Prediction: undefined
    };
    if (output.Prediction !== undefined && output.Prediction !== null) {
        contents.Prediction = deserializeAws_json1_1Prediction(output.Prediction, context);
    }
    return contents;
};
const deserializeAws_json1_1Prediction = (output, context) => {
    let contents = {
        __type: "Prediction",
        details: undefined,
        predictedLabel: undefined,
        predictedScores: undefined,
        predictedValue: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = deserializeAws_json1_1DetailsMap(output.details, context);
    }
    if (output.predictedLabel !== undefined && output.predictedLabel !== null) {
        contents.predictedLabel = output.predictedLabel;
    }
    if (output.predictedScores !== undefined && output.predictedScores !== null) {
        contents.predictedScores = deserializeAws_json1_1ScoreValuePerLabelMap(output.predictedScores, context);
    }
    if (output.predictedValue !== undefined && output.predictedValue !== null) {
        contents.predictedValue = output.predictedValue;
    }
    return contents;
};
const deserializeAws_json1_1PredictorNotMountedException = (output, context) => {
    let contents = {
        __type: "PredictorNotMountedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RDSDatabase = (output, context) => {
    let contents = {
        __type: "RDSDatabase",
        DatabaseName: undefined,
        InstanceIdentifier: undefined
    };
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.InstanceIdentifier !== undefined &&
        output.InstanceIdentifier !== null) {
        contents.InstanceIdentifier = output.InstanceIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1RDSMetadata = (output, context) => {
    let contents = {
        __type: "RDSMetadata",
        DataPipelineId: undefined,
        Database: undefined,
        DatabaseUserName: undefined,
        ResourceRole: undefined,
        SelectSqlQuery: undefined,
        ServiceRole: undefined
    };
    if (output.DataPipelineId !== undefined && output.DataPipelineId !== null) {
        contents.DataPipelineId = output.DataPipelineId;
    }
    if (output.Database !== undefined && output.Database !== null) {
        contents.Database = deserializeAws_json1_1RDSDatabase(output.Database, context);
    }
    if (output.DatabaseUserName !== undefined &&
        output.DatabaseUserName !== null) {
        contents.DatabaseUserName = output.DatabaseUserName;
    }
    if (output.ResourceRole !== undefined && output.ResourceRole !== null) {
        contents.ResourceRole = output.ResourceRole;
    }
    if (output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null) {
        contents.SelectSqlQuery = output.SelectSqlQuery;
    }
    if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
        contents.ServiceRole = output.ServiceRole;
    }
    return contents;
};
const deserializeAws_json1_1RealtimeEndpointInfo = (output, context) => {
    let contents = {
        __type: "RealtimeEndpointInfo",
        CreatedAt: undefined,
        EndpointStatus: undefined,
        EndpointUrl: undefined,
        PeakRequestsPerSecond: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
    }
    if (output.EndpointStatus !== undefined && output.EndpointStatus !== null) {
        contents.EndpointStatus = output.EndpointStatus;
    }
    if (output.EndpointUrl !== undefined && output.EndpointUrl !== null) {
        contents.EndpointUrl = output.EndpointUrl;
    }
    if (output.PeakRequestsPerSecond !== undefined &&
        output.PeakRequestsPerSecond !== null) {
        contents.PeakRequestsPerSecond = output.PeakRequestsPerSecond;
    }
    return contents;
};
const deserializeAws_json1_1RedshiftDatabase = (output, context) => {
    let contents = {
        __type: "RedshiftDatabase",
        ClusterIdentifier: undefined,
        DatabaseName: undefined
    };
    if (output.ClusterIdentifier !== undefined &&
        output.ClusterIdentifier !== null) {
        contents.ClusterIdentifier = output.ClusterIdentifier;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    return contents;
};
const deserializeAws_json1_1RedshiftMetadata = (output, context) => {
    let contents = {
        __type: "RedshiftMetadata",
        DatabaseUserName: undefined,
        RedshiftDatabase: undefined,
        SelectSqlQuery: undefined
    };
    if (output.DatabaseUserName !== undefined &&
        output.DatabaseUserName !== null) {
        contents.DatabaseUserName = output.DatabaseUserName;
    }
    if (output.RedshiftDatabase !== undefined &&
        output.RedshiftDatabase !== null) {
        contents.RedshiftDatabase = deserializeAws_json1_1RedshiftDatabase(output.RedshiftDatabase, context);
    }
    if (output.SelectSqlQuery !== undefined && output.SelectSqlQuery !== null) {
        contents.SelectSqlQuery = output.SelectSqlQuery;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ScoreValuePerLabelMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
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
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TrainingParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1UpdateBatchPredictionOutput = (output, context) => {
    let contents = {
        __type: "UpdateBatchPredictionOutput",
        BatchPredictionId: undefined
    };
    if (output.BatchPredictionId !== undefined &&
        output.BatchPredictionId !== null) {
        contents.BatchPredictionId = output.BatchPredictionId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateDataSourceOutput = (output, context) => {
    let contents = {
        __type: "UpdateDataSourceOutput",
        DataSourceId: undefined
    };
    if (output.DataSourceId !== undefined && output.DataSourceId !== null) {
        contents.DataSourceId = output.DataSourceId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateEvaluationOutput = (output, context) => {
    let contents = {
        __type: "UpdateEvaluationOutput",
        EvaluationId: undefined
    };
    if (output.EvaluationId !== undefined && output.EvaluationId !== null) {
        contents.EvaluationId = output.EvaluationId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateMLModelOutput = (output, context) => {
    let contents = {
        __type: "UpdateMLModelOutput",
        MLModelId: undefined
    };
    if (output.MLModelId !== undefined && output.MLModelId !== null) {
        contents.MLModelId = output.MLModelId;
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