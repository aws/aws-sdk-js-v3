"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreateDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetCommand = serializeAws_json1_1CreateDatasetCommand;
async function serializeAws_json1_1CreateDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetGroupCommand = serializeAws_json1_1CreateDatasetGroupCommand;
async function serializeAws_json1_1CreateDatasetImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetImportJobCommand = serializeAws_json1_1CreateDatasetImportJobCommand;
async function serializeAws_json1_1CreateForecastCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreateForecast";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateForecastCommand = serializeAws_json1_1CreateForecastCommand;
async function serializeAws_json1_1CreateForecastExportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreateForecastExportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateForecastExportJobCommand = serializeAws_json1_1CreateForecastExportJobCommand;
async function serializeAws_json1_1CreatePredictorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.CreatePredictor";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePredictorCommand = serializeAws_json1_1CreatePredictorCommand;
async function serializeAws_json1_1DeleteDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeleteDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatasetCommand = serializeAws_json1_1DeleteDatasetCommand;
async function serializeAws_json1_1DeleteDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatasetGroupCommand = serializeAws_json1_1DeleteDatasetGroupCommand;
async function serializeAws_json1_1DeleteDatasetImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatasetImportJobCommand = serializeAws_json1_1DeleteDatasetImportJobCommand;
async function serializeAws_json1_1DeleteForecastCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeleteForecast";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteForecastCommand = serializeAws_json1_1DeleteForecastCommand;
async function serializeAws_json1_1DeleteForecastExportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeleteForecastExportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteForecastExportJobCommand = serializeAws_json1_1DeleteForecastExportJobCommand;
async function serializeAws_json1_1DeletePredictorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DeletePredictor";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePredictorCommand = serializeAws_json1_1DeletePredictorCommand;
async function serializeAws_json1_1DescribeDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribeDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetCommand = serializeAws_json1_1DescribeDatasetCommand;
async function serializeAws_json1_1DescribeDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetGroupCommand = serializeAws_json1_1DescribeDatasetGroupCommand;
async function serializeAws_json1_1DescribeDatasetImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetImportJobCommand = serializeAws_json1_1DescribeDatasetImportJobCommand;
async function serializeAws_json1_1DescribeForecastCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribeForecast";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeForecastCommand = serializeAws_json1_1DescribeForecastCommand;
async function serializeAws_json1_1DescribeForecastExportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribeForecastExportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeForecastExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeForecastExportJobCommand = serializeAws_json1_1DescribeForecastExportJobCommand;
async function serializeAws_json1_1DescribePredictorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.DescribePredictor";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePredictorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePredictorCommand = serializeAws_json1_1DescribePredictorCommand;
async function serializeAws_json1_1GetAccuracyMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.GetAccuracyMetrics";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccuracyMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAccuracyMetricsCommand = serializeAws_json1_1GetAccuracyMetricsCommand;
async function serializeAws_json1_1ListDatasetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListDatasetGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetGroupsCommand = serializeAws_json1_1ListDatasetGroupsCommand;
async function serializeAws_json1_1ListDatasetImportJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListDatasetImportJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetImportJobsCommand = serializeAws_json1_1ListDatasetImportJobsCommand;
async function serializeAws_json1_1ListDatasetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListDatasets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetsCommand = serializeAws_json1_1ListDatasetsCommand;
async function serializeAws_json1_1ListForecastExportJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListForecastExportJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListForecastExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListForecastExportJobsCommand = serializeAws_json1_1ListForecastExportJobsCommand;
async function serializeAws_json1_1ListForecastsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListForecasts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListForecastsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListForecastsCommand = serializeAws_json1_1ListForecastsCommand;
async function serializeAws_json1_1ListPredictorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.ListPredictors";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPredictorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPredictorsCommand = serializeAws_json1_1ListPredictorsCommand;
async function serializeAws_json1_1UpdateDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonForecast.UpdateDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDatasetGroupCommand = serializeAws_json1_1UpdateDatasetGroupCommand;
async function deserializeAws_json1_1CreateDatasetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDatasetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDatasetCommand = deserializeAws_json1_1CreateDatasetCommand;
async function deserializeAws_json1_1CreateDatasetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDatasetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDatasetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDatasetGroupCommand = deserializeAws_json1_1CreateDatasetGroupCommand;
async function deserializeAws_json1_1CreateDatasetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateDatasetImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDatasetImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDatasetImportJobCommand = deserializeAws_json1_1CreateDatasetImportJobCommand;
async function deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateForecastCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateForecastResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateForecastResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateForecastCommand = deserializeAws_json1_1CreateForecastCommand;
async function deserializeAws_json1_1CreateForecastCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateForecastExportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateForecastExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateForecastExportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateForecastExportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateForecastExportJobCommand = deserializeAws_json1_1CreateForecastExportJobCommand;
async function deserializeAws_json1_1CreateForecastExportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreatePredictorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePredictorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePredictorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePredictorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePredictorCommand = deserializeAws_json1_1CreatePredictorCommand;
async function deserializeAws_json1_1CreatePredictorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.seer.service#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteDatasetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDatasetCommand = deserializeAws_json1_1DeleteDatasetCommand;
async function deserializeAws_json1_1DeleteDatasetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteDatasetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDatasetGroupCommand = deserializeAws_json1_1DeleteDatasetGroupCommand;
async function deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteDatasetImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDatasetImportJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDatasetImportJobCommand = deserializeAws_json1_1DeleteDatasetImportJobCommand;
async function deserializeAws_json1_1DeleteDatasetImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteForecastCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteForecastCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteForecastCommand = deserializeAws_json1_1DeleteForecastCommand;
async function deserializeAws_json1_1DeleteForecastCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteForecastExportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteForecastExportJobCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteForecastExportJobCommand = deserializeAws_json1_1DeleteForecastExportJobCommand;
async function deserializeAws_json1_1DeleteForecastExportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeletePredictorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePredictorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePredictorCommand = deserializeAws_json1_1DeletePredictorCommand;
async function deserializeAws_json1_1DeletePredictorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeDatasetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDatasetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDatasetCommand = deserializeAws_json1_1DescribeDatasetCommand;
async function deserializeAws_json1_1DescribeDatasetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeDatasetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDatasetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDatasetGroupCommand = deserializeAws_json1_1DescribeDatasetGroupCommand;
async function deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeDatasetImportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDatasetImportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDatasetImportJobCommand = deserializeAws_json1_1DescribeDatasetImportJobCommand;
async function deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeForecastCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeForecastResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeForecastResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeForecastCommand = deserializeAws_json1_1DescribeForecastCommand;
async function deserializeAws_json1_1DescribeForecastCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeForecastExportJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeForecastExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeForecastExportJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeForecastExportJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeForecastExportJobCommand = deserializeAws_json1_1DescribeForecastExportJobCommand;
async function deserializeAws_json1_1DescribeForecastExportJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribePredictorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePredictorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePredictorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePredictorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePredictorCommand = deserializeAws_json1_1DescribePredictorCommand;
async function deserializeAws_json1_1DescribePredictorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetAccuracyMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAccuracyMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccuracyMetricsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccuracyMetricsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAccuracyMetricsCommand = deserializeAws_json1_1GetAccuracyMetricsCommand;
async function deserializeAws_json1_1GetAccuracyMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListDatasetGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDatasetGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDatasetGroupsCommand = deserializeAws_json1_1ListDatasetGroupsCommand;
async function deserializeAws_json1_1ListDatasetGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListDatasetImportJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDatasetImportJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDatasetImportJobsCommand = deserializeAws_json1_1ListDatasetImportJobsCommand;
async function deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListDatasetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDatasetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDatasetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDatasetsCommand = deserializeAws_json1_1ListDatasetsCommand;
async function deserializeAws_json1_1ListDatasetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListForecastExportJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListForecastExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListForecastExportJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListForecastExportJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListForecastExportJobsCommand = deserializeAws_json1_1ListForecastExportJobsCommand;
async function deserializeAws_json1_1ListForecastExportJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListForecastsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListForecastsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListForecastsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListForecastsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListForecastsCommand = deserializeAws_json1_1ListForecastsCommand;
async function deserializeAws_json1_1ListForecastsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListPredictorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPredictorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPredictorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPredictorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPredictorsCommand = deserializeAws_json1_1ListPredictorsCommand;
async function deserializeAws_json1_1ListPredictorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.seer.service#InvalidNextTokenException":
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
async function deserializeAws_json1_1UpdateDatasetGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDatasetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDatasetGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDatasetGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDatasetGroupCommand = deserializeAws_json1_1UpdateDatasetGroupCommand;
async function deserializeAws_json1_1UpdateDatasetGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.seer.service#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.seer.service#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.seer.service#ResourceNotFoundException":
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
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const serializeAws_json1_1ArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CategoricalParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CategoricalParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CategoricalParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ContinuousParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScalingType !== undefined) {
        bodyParams["ScalingType"] = input.ScalingType;
    }
    return bodyParams;
};
const serializeAws_json1_1ContinuousParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContinuousParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetArns !== undefined) {
        bodyParams["DatasetArns"] = serializeAws_json1_1ArnList(input.DatasetArns, context);
    }
    if (input.DatasetGroupName !== undefined) {
        bodyParams["DatasetGroupName"] = input.DatasetGroupName;
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatasetImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.DataSource !== undefined) {
        bodyParams["DataSource"] = serializeAws_json1_1DataSource(input.DataSource, context);
    }
    if (input.DatasetArn !== undefined) {
        bodyParams["DatasetArn"] = input.DatasetArn;
    }
    if (input.DatasetImportJobName !== undefined) {
        bodyParams["DatasetImportJobName"] = input.DatasetImportJobName;
    }
    if (input.TimestampFormat !== undefined) {
        bodyParams["TimestampFormat"] = input.TimestampFormat;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.DataFrequency !== undefined) {
        bodyParams["DataFrequency"] = input.DataFrequency;
    }
    if (input.DatasetName !== undefined) {
        bodyParams["DatasetName"] = input.DatasetName;
    }
    if (input.DatasetType !== undefined) {
        bodyParams["DatasetType"] = input.DatasetType;
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.EncryptionConfig !== undefined) {
        bodyParams["EncryptionConfig"] = serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context);
    }
    if (input.Schema !== undefined) {
        bodyParams["Schema"] = serializeAws_json1_1Schema(input.Schema, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateForecastExportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.Destination !== undefined) {
        bodyParams["Destination"] = serializeAws_json1_1DataDestination(input.Destination, context);
    }
    if (input.ForecastArn !== undefined) {
        bodyParams["ForecastArn"] = input.ForecastArn;
    }
    if (input.ForecastExportJobName !== undefined) {
        bodyParams["ForecastExportJobName"] = input.ForecastExportJobName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateForecastRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForecastName !== undefined) {
        bodyParams["ForecastName"] = input.ForecastName;
    }
    if (input.ForecastTypes !== undefined) {
        bodyParams["ForecastTypes"] = serializeAws_json1_1ForecastTypes(input.ForecastTypes, context);
    }
    if (input.PredictorArn !== undefined) {
        bodyParams["PredictorArn"] = input.PredictorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePredictorRequest = (input, context) => {
    const bodyParams = {};
    if (input.AlgorithmArn !== undefined) {
        bodyParams["AlgorithmArn"] = input.AlgorithmArn;
    }
    if (input.EncryptionConfig !== undefined) {
        bodyParams["EncryptionConfig"] = serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context);
    }
    if (input.EvaluationParameters !== undefined) {
        bodyParams["EvaluationParameters"] = serializeAws_json1_1EvaluationParameters(input.EvaluationParameters, context);
    }
    if (input.FeaturizationConfig !== undefined) {
        bodyParams["FeaturizationConfig"] = serializeAws_json1_1FeaturizationConfig(input.FeaturizationConfig, context);
    }
    if (input.ForecastHorizon !== undefined) {
        bodyParams["ForecastHorizon"] = input.ForecastHorizon;
    }
    if (input.HPOConfig !== undefined) {
        bodyParams["HPOConfig"] = serializeAws_json1_1HyperParameterTuningJobConfig(input.HPOConfig, context);
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.PerformAutoML !== undefined) {
        bodyParams["PerformAutoML"] = input.PerformAutoML;
    }
    if (input.PerformHPO !== undefined) {
        bodyParams["PerformHPO"] = input.PerformHPO;
    }
    if (input.PredictorName !== undefined) {
        bodyParams["PredictorName"] = input.PredictorName;
    }
    if (input.TrainingParameters !== undefined) {
        bodyParams["TrainingParameters"] = serializeAws_json1_1TrainingParameters(input.TrainingParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataDestination = (input, context) => {
    const bodyParams = {};
    if (input.S3Config !== undefined) {
        bodyParams["S3Config"] = serializeAws_json1_1S3Config(input.S3Config, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataSource = (input, context) => {
    const bodyParams = {};
    if (input.S3Config !== undefined) {
        bodyParams["S3Config"] = serializeAws_json1_1S3Config(input.S3Config, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetGroupArn !== undefined) {
        bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatasetImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetImportJobArn !== undefined) {
        bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetArn !== undefined) {
        bodyParams["DatasetArn"] = input.DatasetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteForecastExportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForecastExportJobArn !== undefined) {
        bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteForecastRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForecastArn !== undefined) {
        bodyParams["ForecastArn"] = input.ForecastArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePredictorRequest = (input, context) => {
    const bodyParams = {};
    if (input.PredictorArn !== undefined) {
        bodyParams["PredictorArn"] = input.PredictorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetGroupArn !== undefined) {
        bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetImportJobArn !== undefined) {
        bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetArn !== undefined) {
        bodyParams["DatasetArn"] = input.DatasetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeForecastExportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForecastExportJobArn !== undefined) {
        bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeForecastRequest = (input, context) => {
    const bodyParams = {};
    if (input.ForecastArn !== undefined) {
        bodyParams["ForecastArn"] = input.ForecastArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePredictorRequest = (input, context) => {
    const bodyParams = {};
    if (input.PredictorArn !== undefined) {
        bodyParams["PredictorArn"] = input.PredictorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionConfig = (input, context) => {
    const bodyParams = {};
    if (input.KMSKeyArn !== undefined) {
        bodyParams["KMSKeyArn"] = input.KMSKeyArn;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1EvaluationParameters = (input, context) => {
    const bodyParams = {};
    if (input.BackTestWindowOffset !== undefined) {
        bodyParams["BackTestWindowOffset"] = input.BackTestWindowOffset;
    }
    if (input.NumberOfBacktestWindows !== undefined) {
        bodyParams["NumberOfBacktestWindows"] = input.NumberOfBacktestWindows;
    }
    return bodyParams;
};
const serializeAws_json1_1Featurization = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.FeaturizationPipeline !== undefined) {
        bodyParams["FeaturizationPipeline"] = serializeAws_json1_1FeaturizationPipeline(input.FeaturizationPipeline, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FeaturizationConfig = (input, context) => {
    const bodyParams = {};
    if (input.Featurizations !== undefined) {
        bodyParams["Featurizations"] = serializeAws_json1_1Featurizations(input.Featurizations, context);
    }
    if (input.ForecastDimensions !== undefined) {
        bodyParams["ForecastDimensions"] = serializeAws_json1_1ForecastDimensions(input.ForecastDimensions, context);
    }
    if (input.ForecastFrequency !== undefined) {
        bodyParams["ForecastFrequency"] = input.ForecastFrequency;
    }
    return bodyParams;
};
const serializeAws_json1_1FeaturizationMethod = (input, context) => {
    const bodyParams = {};
    if (input.FeaturizationMethodName !== undefined) {
        bodyParams["FeaturizationMethodName"] = input.FeaturizationMethodName;
    }
    if (input.FeaturizationMethodParameters !== undefined) {
        bodyParams["FeaturizationMethodParameters"] = serializeAws_json1_1FeaturizationMethodParameters(input.FeaturizationMethodParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FeaturizationMethodParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1FeaturizationPipeline = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FeaturizationMethod(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Featurizations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Featurization(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.Condition !== undefined) {
        bodyParams["Condition"] = input.Condition;
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ForecastDimensions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ForecastTypes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetAccuracyMetricsRequest = (input, context) => {
    const bodyParams = {};
    if (input.PredictorArn !== undefined) {
        bodyParams["PredictorArn"] = input.PredictorArn;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterTuningJobConfig = (input, context) => {
    const bodyParams = {};
    if (input.ParameterRanges !== undefined) {
        bodyParams["ParameterRanges"] = serializeAws_json1_1ParameterRanges(input.ParameterRanges, context);
    }
    return bodyParams;
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.DatasetGroupArn !== undefined) {
        bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
    }
    if (input.SupplementaryFeatures !== undefined) {
        bodyParams["SupplementaryFeatures"] = serializeAws_json1_1SupplementaryFeatures(input.SupplementaryFeatures, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IntegerParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.MaxValue !== undefined) {
        bodyParams["MaxValue"] = input.MaxValue;
    }
    if (input.MinValue !== undefined) {
        bodyParams["MinValue"] = input.MinValue;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScalingType !== undefined) {
        bodyParams["ScalingType"] = input.ScalingType;
    }
    return bodyParams;
};
const serializeAws_json1_1IntegerParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IntegerParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListDatasetGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDatasetImportJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDatasetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListForecastExportJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListForecastsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPredictorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterRanges = (input, context) => {
    const bodyParams = {};
    if (input.CategoricalParameterRanges !== undefined) {
        bodyParams["CategoricalParameterRanges"] = serializeAws_json1_1CategoricalParameterRanges(input.CategoricalParameterRanges, context);
    }
    if (input.ContinuousParameterRanges !== undefined) {
        bodyParams["ContinuousParameterRanges"] = serializeAws_json1_1ContinuousParameterRanges(input.ContinuousParameterRanges, context);
    }
    if (input.IntegerParameterRanges !== undefined) {
        bodyParams["IntegerParameterRanges"] = serializeAws_json1_1IntegerParameterRanges(input.IntegerParameterRanges, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Config = (input, context) => {
    const bodyParams = {};
    if (input.KMSKeyArn !== undefined) {
        bodyParams["KMSKeyArn"] = input.KMSKeyArn;
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Schema = (input, context) => {
    const bodyParams = {};
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1SchemaAttributes(input.Attributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaAttribute = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeType !== undefined) {
        bodyParams["AttributeType"] = input.AttributeType;
    }
    return bodyParams;
};
const serializeAws_json1_1SchemaAttributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SchemaAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SupplementaryFeature = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1SupplementaryFeatures = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SupplementaryFeature(entry, context));
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
const serializeAws_json1_1UpdateDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.DatasetArns !== undefined) {
        bodyParams["DatasetArns"] = serializeAws_json1_1ArnList(input.DatasetArns, context);
    }
    if (input.DatasetGroupArn !== undefined) {
        bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Values = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1ArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CategoricalParameterRange = (output, context) => {
    let contents = {
        __type: "CategoricalParameterRange",
        Name: undefined,
        Values: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1Values(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1CategoricalParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CategoricalParameterRange(entry, context));
};
const deserializeAws_json1_1ContinuousParameterRange = (output, context) => {
    let contents = {
        __type: "ContinuousParameterRange",
        MaxValue: undefined,
        MinValue: undefined,
        Name: undefined,
        ScalingType: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScalingType !== undefined && output.ScalingType !== null) {
        contents.ScalingType = output.ScalingType;
    }
    return contents;
};
const deserializeAws_json1_1ContinuousParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContinuousParameterRange(entry, context));
};
const deserializeAws_json1_1CreateDatasetGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetGroupResponse",
        DatasetGroupArn: undefined
    };
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDatasetImportJobResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetImportJobResponse",
        DatasetImportJobArn: undefined
    };
    if (output.DatasetImportJobArn !== undefined &&
        output.DatasetImportJobArn !== null) {
        contents.DatasetImportJobArn = output.DatasetImportJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDatasetResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetResponse",
        DatasetArn: undefined
    };
    if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
        contents.DatasetArn = output.DatasetArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateForecastExportJobResponse = (output, context) => {
    let contents = {
        __type: "CreateForecastExportJobResponse",
        ForecastExportJobArn: undefined
    };
    if (output.ForecastExportJobArn !== undefined &&
        output.ForecastExportJobArn !== null) {
        contents.ForecastExportJobArn = output.ForecastExportJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateForecastResponse = (output, context) => {
    let contents = {
        __type: "CreateForecastResponse",
        ForecastArn: undefined
    };
    if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
        contents.ForecastArn = output.ForecastArn;
    }
    return contents;
};
const deserializeAws_json1_1CreatePredictorResponse = (output, context) => {
    let contents = {
        __type: "CreatePredictorResponse",
        PredictorArn: undefined
    };
    if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
        contents.PredictorArn = output.PredictorArn;
    }
    return contents;
};
const deserializeAws_json1_1DataDestination = (output, context) => {
    let contents = {
        __type: "DataDestination",
        S3Config: undefined
    };
    if (output.S3Config !== undefined && output.S3Config !== null) {
        contents.S3Config = deserializeAws_json1_1S3Config(output.S3Config, context);
    }
    return contents;
};
const deserializeAws_json1_1DataSource = (output, context) => {
    let contents = {
        __type: "DataSource",
        S3Config: undefined
    };
    if (output.S3Config !== undefined && output.S3Config !== null) {
        contents.S3Config = deserializeAws_json1_1S3Config(output.S3Config, context);
    }
    return contents;
};
const deserializeAws_json1_1DatasetGroupSummary = (output, context) => {
    let contents = {
        __type: "DatasetGroupSummary",
        CreationTime: undefined,
        DatasetGroupArn: undefined,
        DatasetGroupName: undefined,
        LastModificationTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.DatasetGroupName !== undefined &&
        output.DatasetGroupName !== null) {
        contents.DatasetGroupName = output.DatasetGroupName;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DatasetGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetGroupSummary(entry, context));
};
const deserializeAws_json1_1DatasetImportJobSummary = (output, context) => {
    let contents = {
        __type: "DatasetImportJobSummary",
        CreationTime: undefined,
        DataSource: undefined,
        DatasetImportJobArn: undefined,
        DatasetImportJobName: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1DataSource(output.DataSource, context);
    }
    if (output.DatasetImportJobArn !== undefined &&
        output.DatasetImportJobArn !== null) {
        contents.DatasetImportJobArn = output.DatasetImportJobArn;
    }
    if (output.DatasetImportJobName !== undefined &&
        output.DatasetImportJobName !== null) {
        contents.DatasetImportJobName = output.DatasetImportJobName;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetImportJobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetImportJobSummary(entry, context));
};
const deserializeAws_json1_1DatasetSummary = (output, context) => {
    let contents = {
        __type: "DatasetSummary",
        CreationTime: undefined,
        DatasetArn: undefined,
        DatasetName: undefined,
        DatasetType: undefined,
        Domain: undefined,
        LastModificationTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
        contents.DatasetArn = output.DatasetArn;
    }
    if (output.DatasetName !== undefined && output.DatasetName !== null) {
        contents.DatasetName = output.DatasetName;
    }
    if (output.DatasetType !== undefined && output.DatasetType !== null) {
        contents.DatasetType = output.DatasetType;
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1Datasets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetSummary(entry, context));
};
const deserializeAws_json1_1DescribeDatasetGroupResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetGroupResponse",
        CreationTime: undefined,
        DatasetArns: undefined,
        DatasetGroupArn: undefined,
        DatasetGroupName: undefined,
        Domain: undefined,
        LastModificationTime: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetArns !== undefined && output.DatasetArns !== null) {
        contents.DatasetArns = deserializeAws_json1_1ArnList(output.DatasetArns, context);
    }
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.DatasetGroupName !== undefined &&
        output.DatasetGroupName !== null) {
        contents.DatasetGroupName = output.DatasetGroupName;
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDatasetImportJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetImportJobResponse",
        CreationTime: undefined,
        DataSize: undefined,
        DataSource: undefined,
        DatasetArn: undefined,
        DatasetImportJobArn: undefined,
        DatasetImportJobName: undefined,
        FieldStatistics: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        Status: undefined,
        TimestampFormat: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataSize !== undefined && output.DataSize !== null) {
        contents.DataSize = output.DataSize;
    }
    if (output.DataSource !== undefined && output.DataSource !== null) {
        contents.DataSource = deserializeAws_json1_1DataSource(output.DataSource, context);
    }
    if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
        contents.DatasetArn = output.DatasetArn;
    }
    if (output.DatasetImportJobArn !== undefined &&
        output.DatasetImportJobArn !== null) {
        contents.DatasetImportJobArn = output.DatasetImportJobArn;
    }
    if (output.DatasetImportJobName !== undefined &&
        output.DatasetImportJobName !== null) {
        contents.DatasetImportJobName = output.DatasetImportJobName;
    }
    if (output.FieldStatistics !== undefined && output.FieldStatistics !== null) {
        contents.FieldStatistics = deserializeAws_json1_1FieldStatistics(output.FieldStatistics, context);
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TimestampFormat !== undefined && output.TimestampFormat !== null) {
        contents.TimestampFormat = output.TimestampFormat;
    }
    return contents;
};
const deserializeAws_json1_1DescribeDatasetResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetResponse",
        CreationTime: undefined,
        DataFrequency: undefined,
        DatasetArn: undefined,
        DatasetName: undefined,
        DatasetType: undefined,
        Domain: undefined,
        EncryptionConfig: undefined,
        LastModificationTime: undefined,
        Schema: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DataFrequency !== undefined && output.DataFrequency !== null) {
        contents.DataFrequency = output.DataFrequency;
    }
    if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
        contents.DatasetArn = output.DatasetArn;
    }
    if (output.DatasetName !== undefined && output.DatasetName !== null) {
        contents.DatasetName = output.DatasetName;
    }
    if (output.DatasetType !== undefined && output.DatasetType !== null) {
        contents.DatasetType = output.DatasetType;
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.EncryptionConfig !== undefined &&
        output.EncryptionConfig !== null) {
        contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context);
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Schema !== undefined && output.Schema !== null) {
        contents.Schema = deserializeAws_json1_1Schema(output.Schema, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeForecastExportJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeForecastExportJobResponse",
        CreationTime: undefined,
        Destination: undefined,
        ForecastArn: undefined,
        ForecastExportJobArn: undefined,
        ForecastExportJobName: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Destination !== undefined && output.Destination !== null) {
        contents.Destination = deserializeAws_json1_1DataDestination(output.Destination, context);
    }
    if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
        contents.ForecastArn = output.ForecastArn;
    }
    if (output.ForecastExportJobArn !== undefined &&
        output.ForecastExportJobArn !== null) {
        contents.ForecastExportJobArn = output.ForecastExportJobArn;
    }
    if (output.ForecastExportJobName !== undefined &&
        output.ForecastExportJobName !== null) {
        contents.ForecastExportJobName = output.ForecastExportJobName;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeForecastResponse = (output, context) => {
    let contents = {
        __type: "DescribeForecastResponse",
        CreationTime: undefined,
        DatasetGroupArn: undefined,
        ForecastArn: undefined,
        ForecastName: undefined,
        ForecastTypes: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        PredictorArn: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
        contents.ForecastArn = output.ForecastArn;
    }
    if (output.ForecastName !== undefined && output.ForecastName !== null) {
        contents.ForecastName = output.ForecastName;
    }
    if (output.ForecastTypes !== undefined && output.ForecastTypes !== null) {
        contents.ForecastTypes = deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context);
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
        contents.PredictorArn = output.PredictorArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribePredictorResponse = (output, context) => {
    let contents = {
        __type: "DescribePredictorResponse",
        AlgorithmArn: undefined,
        AutoMLAlgorithmArns: undefined,
        CreationTime: undefined,
        DatasetImportJobArns: undefined,
        EncryptionConfig: undefined,
        EvaluationParameters: undefined,
        FeaturizationConfig: undefined,
        ForecastHorizon: undefined,
        HPOConfig: undefined,
        InputDataConfig: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        PerformAutoML: undefined,
        PerformHPO: undefined,
        PredictorArn: undefined,
        PredictorExecutionDetails: undefined,
        PredictorName: undefined,
        Status: undefined,
        TrainingParameters: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    if (output.AutoMLAlgorithmArns !== undefined &&
        output.AutoMLAlgorithmArns !== null) {
        contents.AutoMLAlgorithmArns = deserializeAws_json1_1ArnList(output.AutoMLAlgorithmArns, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetImportJobArns !== undefined &&
        output.DatasetImportJobArns !== null) {
        contents.DatasetImportJobArns = deserializeAws_json1_1ArnList(output.DatasetImportJobArns, context);
    }
    if (output.EncryptionConfig !== undefined &&
        output.EncryptionConfig !== null) {
        contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context);
    }
    if (output.EvaluationParameters !== undefined &&
        output.EvaluationParameters !== null) {
        contents.EvaluationParameters = deserializeAws_json1_1EvaluationParameters(output.EvaluationParameters, context);
    }
    if (output.FeaturizationConfig !== undefined &&
        output.FeaturizationConfig !== null) {
        contents.FeaturizationConfig = deserializeAws_json1_1FeaturizationConfig(output.FeaturizationConfig, context);
    }
    if (output.ForecastHorizon !== undefined && output.ForecastHorizon !== null) {
        contents.ForecastHorizon = output.ForecastHorizon;
    }
    if (output.HPOConfig !== undefined && output.HPOConfig !== null) {
        contents.HPOConfig = deserializeAws_json1_1HyperParameterTuningJobConfig(output.HPOConfig, context);
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PerformAutoML !== undefined && output.PerformAutoML !== null) {
        contents.PerformAutoML = output.PerformAutoML;
    }
    if (output.PerformHPO !== undefined && output.PerformHPO !== null) {
        contents.PerformHPO = output.PerformHPO;
    }
    if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
        contents.PredictorArn = output.PredictorArn;
    }
    if (output.PredictorExecutionDetails !== undefined &&
        output.PredictorExecutionDetails !== null) {
        contents.PredictorExecutionDetails = deserializeAws_json1_1PredictorExecutionDetails(output.PredictorExecutionDetails, context);
    }
    if (output.PredictorName !== undefined && output.PredictorName !== null) {
        contents.PredictorName = output.PredictorName;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TrainingParameters !== undefined &&
        output.TrainingParameters !== null) {
        contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1EncryptionConfig = (output, context) => {
    let contents = {
        __type: "EncryptionConfig",
        KMSKeyArn: undefined,
        RoleArn: undefined
    };
    if (output.KMSKeyArn !== undefined && output.KMSKeyArn !== null) {
        contents.KMSKeyArn = output.KMSKeyArn;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationParameters = (output, context) => {
    let contents = {
        __type: "EvaluationParameters",
        BackTestWindowOffset: undefined,
        NumberOfBacktestWindows: undefined
    };
    if (output.BackTestWindowOffset !== undefined &&
        output.BackTestWindowOffset !== null) {
        contents.BackTestWindowOffset = output.BackTestWindowOffset;
    }
    if (output.NumberOfBacktestWindows !== undefined &&
        output.NumberOfBacktestWindows !== null) {
        contents.NumberOfBacktestWindows = output.NumberOfBacktestWindows;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    let contents = {
        __type: "EvaluationResult",
        AlgorithmArn: undefined,
        TestWindows: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    if (output.TestWindows !== undefined && output.TestWindows !== null) {
        contents.TestWindows = deserializeAws_json1_1TestWindows(output.TestWindows, context);
    }
    return contents;
};
const deserializeAws_json1_1Featurization = (output, context) => {
    let contents = {
        __type: "Featurization",
        AttributeName: undefined,
        FeaturizationPipeline: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.FeaturizationPipeline !== undefined &&
        output.FeaturizationPipeline !== null) {
        contents.FeaturizationPipeline = deserializeAws_json1_1FeaturizationPipeline(output.FeaturizationPipeline, context);
    }
    return contents;
};
const deserializeAws_json1_1FeaturizationConfig = (output, context) => {
    let contents = {
        __type: "FeaturizationConfig",
        Featurizations: undefined,
        ForecastDimensions: undefined,
        ForecastFrequency: undefined
    };
    if (output.Featurizations !== undefined && output.Featurizations !== null) {
        contents.Featurizations = deserializeAws_json1_1Featurizations(output.Featurizations, context);
    }
    if (output.ForecastDimensions !== undefined &&
        output.ForecastDimensions !== null) {
        contents.ForecastDimensions = deserializeAws_json1_1ForecastDimensions(output.ForecastDimensions, context);
    }
    if (output.ForecastFrequency !== undefined &&
        output.ForecastFrequency !== null) {
        contents.ForecastFrequency = output.ForecastFrequency;
    }
    return contents;
};
const deserializeAws_json1_1FeaturizationMethod = (output, context) => {
    let contents = {
        __type: "FeaturizationMethod",
        FeaturizationMethodName: undefined,
        FeaturizationMethodParameters: undefined
    };
    if (output.FeaturizationMethodName !== undefined &&
        output.FeaturizationMethodName !== null) {
        contents.FeaturizationMethodName = output.FeaturizationMethodName;
    }
    if (output.FeaturizationMethodParameters !== undefined &&
        output.FeaturizationMethodParameters !== null) {
        contents.FeaturizationMethodParameters = deserializeAws_json1_1FeaturizationMethodParameters(output.FeaturizationMethodParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1FeaturizationMethodParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1FeaturizationPipeline = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FeaturizationMethod(entry, context));
};
const deserializeAws_json1_1Featurizations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Featurization(entry, context));
};
const deserializeAws_json1_1FieldStatistics = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1Statistics(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1ForecastDimensions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ForecastExportJobSummary = (output, context) => {
    let contents = {
        __type: "ForecastExportJobSummary",
        CreationTime: undefined,
        Destination: undefined,
        ForecastExportJobArn: undefined,
        ForecastExportJobName: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Destination !== undefined && output.Destination !== null) {
        contents.Destination = deserializeAws_json1_1DataDestination(output.Destination, context);
    }
    if (output.ForecastExportJobArn !== undefined &&
        output.ForecastExportJobArn !== null) {
        contents.ForecastExportJobArn = output.ForecastExportJobArn;
    }
    if (output.ForecastExportJobName !== undefined &&
        output.ForecastExportJobName !== null) {
        contents.ForecastExportJobName = output.ForecastExportJobName;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ForecastExportJobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ForecastExportJobSummary(entry, context));
};
const deserializeAws_json1_1ForecastSummary = (output, context) => {
    let contents = {
        __type: "ForecastSummary",
        CreationTime: undefined,
        DatasetGroupArn: undefined,
        ForecastArn: undefined,
        ForecastName: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        PredictorArn: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
        contents.ForecastArn = output.ForecastArn;
    }
    if (output.ForecastName !== undefined && output.ForecastName !== null) {
        contents.ForecastName = output.ForecastName;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
        contents.PredictorArn = output.PredictorArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ForecastTypes = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Forecasts = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ForecastSummary(entry, context));
};
const deserializeAws_json1_1GetAccuracyMetricsResponse = (output, context) => {
    let contents = {
        __type: "GetAccuracyMetricsResponse",
        PredictorEvaluationResults: undefined
    };
    if (output.PredictorEvaluationResults !== undefined &&
        output.PredictorEvaluationResults !== null) {
        contents.PredictorEvaluationResults = deserializeAws_json1_1PredictorEvaluationResults(output.PredictorEvaluationResults, context);
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterTuningJobConfig = (output, context) => {
    let contents = {
        __type: "HyperParameterTuningJobConfig",
        ParameterRanges: undefined
    };
    if (output.ParameterRanges !== undefined && output.ParameterRanges !== null) {
        contents.ParameterRanges = deserializeAws_json1_1ParameterRanges(output.ParameterRanges, context);
    }
    return contents;
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    let contents = {
        __type: "InputDataConfig",
        DatasetGroupArn: undefined,
        SupplementaryFeatures: undefined
    };
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.SupplementaryFeatures !== undefined &&
        output.SupplementaryFeatures !== null) {
        contents.SupplementaryFeatures = deserializeAws_json1_1SupplementaryFeatures(output.SupplementaryFeatures, context);
    }
    return contents;
};
const deserializeAws_json1_1IntegerParameterRange = (output, context) => {
    let contents = {
        __type: "IntegerParameterRange",
        MaxValue: undefined,
        MinValue: undefined,
        Name: undefined,
        ScalingType: undefined
    };
    if (output.MaxValue !== undefined && output.MaxValue !== null) {
        contents.MaxValue = output.MaxValue;
    }
    if (output.MinValue !== undefined && output.MinValue !== null) {
        contents.MinValue = output.MinValue;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScalingType !== undefined && output.ScalingType !== null) {
        contents.ScalingType = output.ScalingType;
    }
    return contents;
};
const deserializeAws_json1_1IntegerParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IntegerParameterRange(entry, context));
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
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
const deserializeAws_json1_1ListDatasetGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetGroupsResponse",
        DatasetGroups: undefined,
        NextToken: undefined
    };
    if (output.DatasetGroups !== undefined && output.DatasetGroups !== null) {
        contents.DatasetGroups = deserializeAws_json1_1DatasetGroups(output.DatasetGroups, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDatasetImportJobsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetImportJobsResponse",
        DatasetImportJobs: undefined,
        NextToken: undefined
    };
    if (output.DatasetImportJobs !== undefined &&
        output.DatasetImportJobs !== null) {
        contents.DatasetImportJobs = deserializeAws_json1_1DatasetImportJobs(output.DatasetImportJobs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDatasetsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetsResponse",
        Datasets: undefined,
        NextToken: undefined
    };
    if (output.Datasets !== undefined && output.Datasets !== null) {
        contents.Datasets = deserializeAws_json1_1Datasets(output.Datasets, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListForecastExportJobsResponse = (output, context) => {
    let contents = {
        __type: "ListForecastExportJobsResponse",
        ForecastExportJobs: undefined,
        NextToken: undefined
    };
    if (output.ForecastExportJobs !== undefined &&
        output.ForecastExportJobs !== null) {
        contents.ForecastExportJobs = deserializeAws_json1_1ForecastExportJobs(output.ForecastExportJobs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListForecastsResponse = (output, context) => {
    let contents = {
        __type: "ListForecastsResponse",
        Forecasts: undefined,
        NextToken: undefined
    };
    if (output.Forecasts !== undefined && output.Forecasts !== null) {
        contents.Forecasts = deserializeAws_json1_1Forecasts(output.Forecasts, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPredictorsResponse = (output, context) => {
    let contents = {
        __type: "ListPredictorsResponse",
        NextToken: undefined,
        Predictors: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Predictors !== undefined && output.Predictors !== null) {
        contents.Predictors = deserializeAws_json1_1Predictors(output.Predictors, context);
    }
    return contents;
};
const deserializeAws_json1_1Metrics = (output, context) => {
    let contents = {
        __type: "Metrics",
        RMSE: undefined,
        WeightedQuantileLosses: undefined
    };
    if (output.RMSE !== undefined && output.RMSE !== null) {
        contents.RMSE = output.RMSE;
    }
    if (output.WeightedQuantileLosses !== undefined &&
        output.WeightedQuantileLosses !== null) {
        contents.WeightedQuantileLosses = deserializeAws_json1_1WeightedQuantileLosses(output.WeightedQuantileLosses, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterRanges = (output, context) => {
    let contents = {
        __type: "ParameterRanges",
        CategoricalParameterRanges: undefined,
        ContinuousParameterRanges: undefined,
        IntegerParameterRanges: undefined
    };
    if (output.CategoricalParameterRanges !== undefined &&
        output.CategoricalParameterRanges !== null) {
        contents.CategoricalParameterRanges = deserializeAws_json1_1CategoricalParameterRanges(output.CategoricalParameterRanges, context);
    }
    if (output.ContinuousParameterRanges !== undefined &&
        output.ContinuousParameterRanges !== null) {
        contents.ContinuousParameterRanges = deserializeAws_json1_1ContinuousParameterRanges(output.ContinuousParameterRanges, context);
    }
    if (output.IntegerParameterRanges !== undefined &&
        output.IntegerParameterRanges !== null) {
        contents.IntegerParameterRanges = deserializeAws_json1_1IntegerParameterRanges(output.IntegerParameterRanges, context);
    }
    return contents;
};
const deserializeAws_json1_1PredictorEvaluationResults = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EvaluationResult(entry, context));
};
const deserializeAws_json1_1PredictorExecution = (output, context) => {
    let contents = {
        __type: "PredictorExecution",
        AlgorithmArn: undefined,
        TestWindows: undefined
    };
    if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
        contents.AlgorithmArn = output.AlgorithmArn;
    }
    if (output.TestWindows !== undefined && output.TestWindows !== null) {
        contents.TestWindows = deserializeAws_json1_1TestWindowDetails(output.TestWindows, context);
    }
    return contents;
};
const deserializeAws_json1_1PredictorExecutionDetails = (output, context) => {
    let contents = {
        __type: "PredictorExecutionDetails",
        PredictorExecutions: undefined
    };
    if (output.PredictorExecutions !== undefined &&
        output.PredictorExecutions !== null) {
        contents.PredictorExecutions = deserializeAws_json1_1PredictorExecutions(output.PredictorExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1PredictorExecutions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PredictorExecution(entry, context));
};
const deserializeAws_json1_1PredictorSummary = (output, context) => {
    let contents = {
        __type: "PredictorSummary",
        CreationTime: undefined,
        DatasetGroupArn: undefined,
        LastModificationTime: undefined,
        Message: undefined,
        PredictorArn: undefined,
        PredictorName: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
        contents.DatasetGroupArn = output.DatasetGroupArn;
    }
    if (output.LastModificationTime !== undefined &&
        output.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(output.LastModificationTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
        contents.PredictorArn = output.PredictorArn;
    }
    if (output.PredictorName !== undefined && output.PredictorName !== null) {
        contents.PredictorName = output.PredictorName;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1Predictors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PredictorSummary(entry, context));
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
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
const deserializeAws_json1_1S3Config = (output, context) => {
    let contents = {
        __type: "S3Config",
        KMSKeyArn: undefined,
        Path: undefined,
        RoleArn: undefined
    };
    if (output.KMSKeyArn !== undefined && output.KMSKeyArn !== null) {
        contents.KMSKeyArn = output.KMSKeyArn;
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1Schema = (output, context) => {
    let contents = {
        __type: "Schema",
        Attributes: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1SchemaAttributes(output.Attributes, context);
    }
    return contents;
};
const deserializeAws_json1_1SchemaAttribute = (output, context) => {
    let contents = {
        __type: "SchemaAttribute",
        AttributeName: undefined,
        AttributeType: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.AttributeType !== undefined && output.AttributeType !== null) {
        contents.AttributeType = output.AttributeType;
    }
    return contents;
};
const deserializeAws_json1_1SchemaAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SchemaAttribute(entry, context));
};
const deserializeAws_json1_1Statistics = (output, context) => {
    let contents = {
        __type: "Statistics",
        Avg: undefined,
        Count: undefined,
        CountDistinct: undefined,
        CountNan: undefined,
        CountNull: undefined,
        Max: undefined,
        Min: undefined,
        Stddev: undefined
    };
    if (output.Avg !== undefined && output.Avg !== null) {
        contents.Avg = output.Avg;
    }
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.CountDistinct !== undefined && output.CountDistinct !== null) {
        contents.CountDistinct = output.CountDistinct;
    }
    if (output.CountNan !== undefined && output.CountNan !== null) {
        contents.CountNan = output.CountNan;
    }
    if (output.CountNull !== undefined && output.CountNull !== null) {
        contents.CountNull = output.CountNull;
    }
    if (output.Max !== undefined && output.Max !== null) {
        contents.Max = output.Max;
    }
    if (output.Min !== undefined && output.Min !== null) {
        contents.Min = output.Min;
    }
    if (output.Stddev !== undefined && output.Stddev !== null) {
        contents.Stddev = output.Stddev;
    }
    return contents;
};
const deserializeAws_json1_1SupplementaryFeature = (output, context) => {
    let contents = {
        __type: "SupplementaryFeature",
        Name: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1SupplementaryFeatures = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SupplementaryFeature(entry, context));
};
const deserializeAws_json1_1TestWindowDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TestWindowSummary(entry, context));
};
const deserializeAws_json1_1TestWindowSummary = (output, context) => {
    let contents = {
        __type: "TestWindowSummary",
        Message: undefined,
        Status: undefined,
        TestWindowEnd: undefined,
        TestWindowStart: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TestWindowEnd !== undefined && output.TestWindowEnd !== null) {
        contents.TestWindowEnd = new Date(Math.round(output.TestWindowEnd * 1000));
    }
    if (output.TestWindowStart !== undefined && output.TestWindowStart !== null) {
        contents.TestWindowStart = new Date(Math.round(output.TestWindowStart * 1000));
    }
    return contents;
};
const deserializeAws_json1_1TestWindows = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WindowSummary(entry, context));
};
const deserializeAws_json1_1TrainingParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1UpdateDatasetGroupResponse = (output, context) => {
    let contents = {
        __type: "UpdateDatasetGroupResponse"
    };
    return contents;
};
const deserializeAws_json1_1Values = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1WeightedQuantileLoss = (output, context) => {
    let contents = {
        __type: "WeightedQuantileLoss",
        LossValue: undefined,
        Quantile: undefined
    };
    if (output.LossValue !== undefined && output.LossValue !== null) {
        contents.LossValue = output.LossValue;
    }
    if (output.Quantile !== undefined && output.Quantile !== null) {
        contents.Quantile = output.Quantile;
    }
    return contents;
};
const deserializeAws_json1_1WeightedQuantileLosses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WeightedQuantileLoss(entry, context));
};
const deserializeAws_json1_1WindowSummary = (output, context) => {
    let contents = {
        __type: "WindowSummary",
        EvaluationType: undefined,
        ItemCount: undefined,
        Metrics: undefined,
        TestWindowEnd: undefined,
        TestWindowStart: undefined
    };
    if (output.EvaluationType !== undefined && output.EvaluationType !== null) {
        contents.EvaluationType = output.EvaluationType;
    }
    if (output.ItemCount !== undefined && output.ItemCount !== null) {
        contents.ItemCount = output.ItemCount;
    }
    if (output.Metrics !== undefined && output.Metrics !== null) {
        contents.Metrics = deserializeAws_json1_1Metrics(output.Metrics, context);
    }
    if (output.TestWindowEnd !== undefined && output.TestWindowEnd !== null) {
        contents.TestWindowEnd = new Date(Math.round(output.TestWindowEnd * 1000));
    }
    if (output.TestWindowStart !== undefined && output.TestWindowStart !== null) {
        contents.TestWindowStart = new Date(Math.round(output.TestWindowStart * 1000));
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