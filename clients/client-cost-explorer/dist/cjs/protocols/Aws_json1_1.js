"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateCostCategoryDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.CreateCostCategoryDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCostCategoryDefinitionCommand = serializeAws_json1_1CreateCostCategoryDefinitionCommand;
async function serializeAws_json1_1DeleteCostCategoryDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.DeleteCostCategoryDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCostCategoryDefinitionCommand = serializeAws_json1_1DeleteCostCategoryDefinitionCommand;
async function serializeAws_json1_1DescribeCostCategoryDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.DescribeCostCategoryDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCostCategoryDefinitionCommand = serializeAws_json1_1DescribeCostCategoryDefinitionCommand;
async function serializeAws_json1_1GetCostAndUsageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetCostAndUsage";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostAndUsageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCostAndUsageCommand = serializeAws_json1_1GetCostAndUsageCommand;
async function serializeAws_json1_1GetCostAndUsageWithResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetCostAndUsageWithResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostAndUsageWithResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCostAndUsageWithResourcesCommand = serializeAws_json1_1GetCostAndUsageWithResourcesCommand;
async function serializeAws_json1_1GetCostForecastCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetCostForecast";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCostForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCostForecastCommand = serializeAws_json1_1GetCostForecastCommand;
async function serializeAws_json1_1GetDimensionValuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetDimensionValues";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDimensionValuesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDimensionValuesCommand = serializeAws_json1_1GetDimensionValuesCommand;
async function serializeAws_json1_1GetReservationCoverageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetReservationCoverage";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationCoverageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetReservationCoverageCommand = serializeAws_json1_1GetReservationCoverageCommand;
async function serializeAws_json1_1GetReservationPurchaseRecommendationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetReservationPurchaseRecommendation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationPurchaseRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetReservationPurchaseRecommendationCommand = serializeAws_json1_1GetReservationPurchaseRecommendationCommand;
async function serializeAws_json1_1GetReservationUtilizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetReservationUtilization";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReservationUtilizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetReservationUtilizationCommand = serializeAws_json1_1GetReservationUtilizationCommand;
async function serializeAws_json1_1GetRightsizingRecommendationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetRightsizingRecommendation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRightsizingRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetRightsizingRecommendationCommand = serializeAws_json1_1GetRightsizingRecommendationCommand;
async function serializeAws_json1_1GetSavingsPlansCoverageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetSavingsPlansCoverage";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansCoverageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSavingsPlansCoverageCommand = serializeAws_json1_1GetSavingsPlansCoverageCommand;
async function serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand;
async function serializeAws_json1_1GetSavingsPlansUtilizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetSavingsPlansUtilization";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSavingsPlansUtilizationCommand = serializeAws_json1_1GetSavingsPlansUtilizationCommand;
async function serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand;
async function serializeAws_json1_1GetTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTagsCommand = serializeAws_json1_1GetTagsCommand;
async function serializeAws_json1_1GetUsageForecastCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSInsightsIndexService.GetUsageForecast";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUsageForecastRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUsageForecastCommand = serializeAws_json1_1GetUsageForecastCommand;
async function serializeAws_json1_1ListCostCategoryDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.ListCostCategoryDefinitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCostCategoryDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCostCategoryDefinitionsCommand = serializeAws_json1_1ListCostCategoryDefinitionsCommand;
async function serializeAws_json1_1UpdateCostCategoryDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSInsightsIndexService.UpdateCostCategoryDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCostCategoryDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCostCategoryDefinitionCommand = serializeAws_json1_1UpdateCostCategoryDefinitionCommand;
async function deserializeAws_json1_1CreateCostCategoryDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCostCategoryDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCostCategoryDefinitionCommand = deserializeAws_json1_1CreateCostCategoryDefinitionCommand;
async function deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCostCategoryDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCostCategoryDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = deserializeAws_json1_1DeleteCostCategoryDefinitionCommand;
async function deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeCostCategoryDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCostCategoryDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = deserializeAws_json1_1DescribeCostCategoryDefinitionCommand;
async function deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetCostAndUsageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCostAndUsageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostAndUsageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCostAndUsageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCostAndUsageCommand = deserializeAws_json1_1GetCostAndUsageCommand;
async function deserializeAws_json1_1GetCostAndUsageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestChangedException":
        case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCostAndUsageWithResourcesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = deserializeAws_json1_1GetCostAndUsageWithResourcesCommand;
async function deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestChangedException":
        case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCostForecastCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCostForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCostForecastResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCostForecastResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCostForecastCommand = deserializeAws_json1_1GetCostForecastCommand;
async function deserializeAws_json1_1GetCostForecastCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetDimensionValuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDimensionValuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDimensionValuesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDimensionValuesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDimensionValuesCommand = deserializeAws_json1_1GetDimensionValuesCommand;
async function deserializeAws_json1_1GetDimensionValuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestChangedException":
        case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetReservationCoverageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetReservationCoverageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationCoverageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReservationCoverageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetReservationCoverageCommand = deserializeAws_json1_1GetReservationCoverageCommand;
async function deserializeAws_json1_1GetReservationCoverageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetReservationPurchaseRecommendationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReservationPurchaseRecommendationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = deserializeAws_json1_1GetReservationPurchaseRecommendationCommand;
async function deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetReservationUtilizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetReservationUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReservationUtilizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReservationUtilizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetReservationUtilizationCommand = deserializeAws_json1_1GetReservationUtilizationCommand;
async function deserializeAws_json1_1GetReservationUtilizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetRightsizingRecommendationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetRightsizingRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRightsizingRecommendationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetRightsizingRecommendationCommand = deserializeAws_json1_1GetRightsizingRecommendationCommand;
async function deserializeAws_json1_1GetRightsizingRecommendationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetSavingsPlansCoverageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSavingsPlansCoverageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSavingsPlansCoverageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSavingsPlansCoverageCommand = deserializeAws_json1_1GetSavingsPlansCoverageCommand;
async function deserializeAws_json1_1GetSavingsPlansCoverageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSavingsPlansPurchaseRecommendationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand;
async function deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetSavingsPlansUtilizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSavingsPlansUtilizationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSavingsPlansUtilizationCommand = deserializeAws_json1_1GetSavingsPlansUtilizationCommand;
async function deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSavingsPlansUtilizationDetailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand;
async function deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1GetTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTagsCommand = deserializeAws_json1_1GetTagsCommand;
async function deserializeAws_json1_1GetTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BillExpirationException":
        case "com.amazonaws.awsinsightsindexservice.v0#BillExpirationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BillExpirationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.awsinsightsindexservice.v0#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestChangedException":
        case "com.amazonaws.awsinsightsindexservice.v0#RequestChangedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestChangedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetUsageForecastCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUsageForecastCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUsageForecastResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUsageForecastResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUsageForecastCommand = deserializeAws_json1_1GetUsageForecastCommand;
async function deserializeAws_json1_1GetUsageForecastCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DataUnavailableException":
        case "com.amazonaws.awsinsightsindexservice.v0#DataUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DataUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnresolvableUsageUnitException":
        case "com.amazonaws.awsinsightsindexservice.v0#UnresolvableUsageUnitException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCostCategoryDefinitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCostCategoryDefinitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCostCategoryDefinitionsCommand = deserializeAws_json1_1ListCostCategoryDefinitionsCommand;
async function deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
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
async function deserializeAws_json1_1UpdateCostCategoryDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCostCategoryDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = deserializeAws_json1_1UpdateCostCategoryDefinitionCommand;
async function deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsinsightsindexservice.v0#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.awsinsightsindexservice.v0#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1BillExpirationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BillExpirationException(body, context);
    const contents = Object.assign({ name: "BillExpirationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DataUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DataUnavailableException(body, context);
    const contents = Object.assign({ name: "DataUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1RequestChangedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestChangedException(body, context);
    const contents = Object.assign({ name: "RequestChangedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
    const contents = Object.assign({ name: "ServiceQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnresolvableUsageUnitException(body, context);
    const contents = Object.assign({ name: "UnresolvableUsageUnitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CostCategoryRule = (input, context) => {
    const bodyParams = {};
    if (input.Rule !== undefined) {
        bodyParams["Rule"] = serializeAws_json1_1Expression(input.Rule, context);
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1CostCategoryRulesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CostCategoryRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CostCategoryValues = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RuleVersion !== undefined) {
        bodyParams["RuleVersion"] = input.RuleVersion;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1CostCategoryRulesList(input.Rules, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DateInterval = (input, context) => {
    const bodyParams = {};
    if (input.End !== undefined) {
        bodyParams["End"] = input.End;
    }
    if (input.Start !== undefined) {
        bodyParams["Start"] = input.Start;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CostCategoryArn !== undefined) {
        bodyParams["CostCategoryArn"] = input.CostCategoryArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CostCategoryArn !== undefined) {
        bodyParams["CostCategoryArn"] = input.CostCategoryArn;
    }
    if (input.EffectiveOn !== undefined) {
        bodyParams["EffectiveOn"] = input.EffectiveOn;
    }
    return bodyParams;
};
const serializeAws_json1_1DimensionValues = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EC2Specification = (input, context) => {
    const bodyParams = {};
    if (input.OfferingClass !== undefined) {
        bodyParams["OfferingClass"] = input.OfferingClass;
    }
    return bodyParams;
};
const serializeAws_json1_1Expression = (input, context) => {
    const bodyParams = {};
    if (input.And !== undefined) {
        bodyParams["And"] = serializeAws_json1_1Expressions(input.And, context);
    }
    if (input.CostCategories !== undefined) {
        bodyParams["CostCategories"] = serializeAws_json1_1CostCategoryValues(input.CostCategories, context);
    }
    if (input.Dimensions !== undefined) {
        bodyParams["Dimensions"] = serializeAws_json1_1DimensionValues(input.Dimensions, context);
    }
    if (input.Not !== undefined) {
        bodyParams["Not"] = serializeAws_json1_1Expression(input.Not, context);
    }
    if (input.Or !== undefined) {
        bodyParams["Or"] = serializeAws_json1_1Expressions(input.Or, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagValues(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Expressions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Expression(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetCostAndUsageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(input.GroupBy, context);
    }
    if (input.Metrics !== undefined) {
        bodyParams["Metrics"] = serializeAws_json1_1MetricNames(input.Metrics, context);
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(input.GroupBy, context);
    }
    if (input.Metrics !== undefined) {
        bodyParams["Metrics"] = serializeAws_json1_1MetricNames(input.Metrics, context);
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetCostForecastRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.Metric !== undefined) {
        bodyParams["Metric"] = input.Metric;
    }
    if (input.PredictionIntervalLevel !== undefined) {
        bodyParams["PredictionIntervalLevel"] = input.PredictionIntervalLevel;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetDimensionValuesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Context !== undefined) {
        bodyParams["Context"] = input.Context;
    }
    if (input.Dimension !== undefined) {
        bodyParams["Dimension"] = input.Dimension;
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.SearchString !== undefined) {
        bodyParams["SearchString"] = input.SearchString;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetReservationCoverageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(input.GroupBy, context);
    }
    if (input.Metrics !== undefined) {
        bodyParams["Metrics"] = serializeAws_json1_1MetricNames(input.Metrics, context);
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.AccountScope !== undefined) {
        bodyParams["AccountScope"] = input.AccountScope;
    }
    if (input.LookbackPeriodInDays !== undefined) {
        bodyParams["LookbackPeriodInDays"] = input.LookbackPeriodInDays;
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PaymentOption !== undefined) {
        bodyParams["PaymentOption"] = input.PaymentOption;
    }
    if (input.Service !== undefined) {
        bodyParams["Service"] = input.Service;
    }
    if (input.ServiceSpecification !== undefined) {
        bodyParams["ServiceSpecification"] = serializeAws_json1_1ServiceSpecification(input.ServiceSpecification, context);
    }
    if (input.TermInYears !== undefined) {
        bodyParams["TermInYears"] = input.TermInYears;
    }
    return bodyParams;
};
const serializeAws_json1_1GetReservationUtilizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(input.GroupBy, context);
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetRightsizingRecommendationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.Service !== undefined) {
        bodyParams["Service"] = input.Service;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSavingsPlansCoverageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1GroupDefinitions(input.GroupBy, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Metrics !== undefined) {
        bodyParams["Metrics"] = serializeAws_json1_1MetricNames(input.Metrics, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LookbackPeriodInDays !== undefined) {
        bodyParams["LookbackPeriodInDays"] = input.LookbackPeriodInDays;
    }
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.PageSize !== undefined) {
        bodyParams["PageSize"] = input.PageSize;
    }
    if (input.PaymentOption !== undefined) {
        bodyParams["PaymentOption"] = input.PaymentOption;
    }
    if (input.SavingsPlansType !== undefined) {
        bodyParams["SavingsPlansType"] = input.SavingsPlansType;
    }
    if (input.TermInYears !== undefined) {
        bodyParams["TermInYears"] = input.TermInYears;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.SearchString !== undefined) {
        bodyParams["SearchString"] = input.SearchString;
    }
    if (input.TagKey !== undefined) {
        bodyParams["TagKey"] = input.TagKey;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetUsageForecastRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1Expression(input.Filter, context);
    }
    if (input.Granularity !== undefined) {
        bodyParams["Granularity"] = input.Granularity;
    }
    if (input.Metric !== undefined) {
        bodyParams["Metric"] = input.Metric;
    }
    if (input.PredictionIntervalLevel !== undefined) {
        bodyParams["PredictionIntervalLevel"] = input.PredictionIntervalLevel;
    }
    if (input.TimePeriod !== undefined) {
        bodyParams["TimePeriod"] = serializeAws_json1_1DateInterval(input.TimePeriod, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GroupDefinition = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1GroupDefinitions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1GroupDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EffectiveOn !== undefined) {
        bodyParams["EffectiveOn"] = input.EffectiveOn;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ServiceSpecification = (input, context) => {
    const bodyParams = {};
    if (input.EC2Specification !== undefined) {
        bodyParams["EC2Specification"] = serializeAws_json1_1EC2Specification(input.EC2Specification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagValues = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CostCategoryArn !== undefined) {
        bodyParams["CostCategoryArn"] = input.CostCategoryArn;
    }
    if (input.RuleVersion !== undefined) {
        bodyParams["RuleVersion"] = input.RuleVersion;
    }
    if (input.Rules !== undefined) {
        bodyParams["Rules"] = serializeAws_json1_1CostCategoryRulesList(input.Rules, context);
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
const deserializeAws_json1_1Attributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1BillExpirationException = (output, context) => {
    let contents = {
        __type: "BillExpirationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CostCategory = (output, context) => {
    let contents = {
        __type: "CostCategory",
        CostCategoryArn: undefined,
        EffectiveEnd: undefined,
        EffectiveStart: undefined,
        Name: undefined,
        RuleVersion: undefined,
        Rules: undefined
    };
    if (output.CostCategoryArn !== undefined && output.CostCategoryArn !== null) {
        contents.CostCategoryArn = output.CostCategoryArn;
    }
    if (output.EffectiveEnd !== undefined && output.EffectiveEnd !== null) {
        contents.EffectiveEnd = output.EffectiveEnd;
    }
    if (output.EffectiveStart !== undefined && output.EffectiveStart !== null) {
        contents.EffectiveStart = output.EffectiveStart;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RuleVersion !== undefined && output.RuleVersion !== null) {
        contents.RuleVersion = output.RuleVersion;
    }
    if (output.Rules !== undefined && output.Rules !== null) {
        contents.Rules = deserializeAws_json1_1CostCategoryRulesList(output.Rules, context);
    }
    return contents;
};
const deserializeAws_json1_1CostCategoryReference = (output, context) => {
    let contents = {
        __type: "CostCategoryReference",
        CostCategoryArn: undefined,
        EffectiveEnd: undefined,
        EffectiveStart: undefined,
        Name: undefined
    };
    if (output.CostCategoryArn !== undefined && output.CostCategoryArn !== null) {
        contents.CostCategoryArn = output.CostCategoryArn;
    }
    if (output.EffectiveEnd !== undefined && output.EffectiveEnd !== null) {
        contents.EffectiveEnd = output.EffectiveEnd;
    }
    if (output.EffectiveStart !== undefined && output.EffectiveStart !== null) {
        contents.EffectiveStart = output.EffectiveStart;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CostCategoryReferencesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CostCategoryReference(entry, context));
};
const deserializeAws_json1_1CostCategoryRule = (output, context) => {
    let contents = {
        __type: "CostCategoryRule",
        Rule: undefined,
        Value: undefined
    };
    if (output.Rule !== undefined && output.Rule !== null) {
        contents.Rule = deserializeAws_json1_1Expression(output.Rule, context);
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1CostCategoryRulesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CostCategoryRule(entry, context));
};
const deserializeAws_json1_1CostCategoryValues = (output, context) => {
    let contents = {
        __type: "CostCategoryValues",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1Values(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1Coverage = (output, context) => {
    let contents = {
        __type: "Coverage",
        CoverageCost: undefined,
        CoverageHours: undefined,
        CoverageNormalizedUnits: undefined
    };
    if (output.CoverageCost !== undefined && output.CoverageCost !== null) {
        contents.CoverageCost = deserializeAws_json1_1CoverageCost(output.CoverageCost, context);
    }
    if (output.CoverageHours !== undefined && output.CoverageHours !== null) {
        contents.CoverageHours = deserializeAws_json1_1CoverageHours(output.CoverageHours, context);
    }
    if (output.CoverageNormalizedUnits !== undefined &&
        output.CoverageNormalizedUnits !== null) {
        contents.CoverageNormalizedUnits = deserializeAws_json1_1CoverageNormalizedUnits(output.CoverageNormalizedUnits, context);
    }
    return contents;
};
const deserializeAws_json1_1CoverageByTime = (output, context) => {
    let contents = {
        __type: "CoverageByTime",
        Groups: undefined,
        TimePeriod: undefined,
        Total: undefined
    };
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1ReservationCoverageGroups(output.Groups, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1Coverage(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1CoverageCost = (output, context) => {
    let contents = {
        __type: "CoverageCost",
        OnDemandCost: undefined
    };
    if (output.OnDemandCost !== undefined && output.OnDemandCost !== null) {
        contents.OnDemandCost = output.OnDemandCost;
    }
    return contents;
};
const deserializeAws_json1_1CoverageHours = (output, context) => {
    let contents = {
        __type: "CoverageHours",
        CoverageHoursPercentage: undefined,
        OnDemandHours: undefined,
        ReservedHours: undefined,
        TotalRunningHours: undefined
    };
    if (output.CoverageHoursPercentage !== undefined &&
        output.CoverageHoursPercentage !== null) {
        contents.CoverageHoursPercentage = output.CoverageHoursPercentage;
    }
    if (output.OnDemandHours !== undefined && output.OnDemandHours !== null) {
        contents.OnDemandHours = output.OnDemandHours;
    }
    if (output.ReservedHours !== undefined && output.ReservedHours !== null) {
        contents.ReservedHours = output.ReservedHours;
    }
    if (output.TotalRunningHours !== undefined &&
        output.TotalRunningHours !== null) {
        contents.TotalRunningHours = output.TotalRunningHours;
    }
    return contents;
};
const deserializeAws_json1_1CoverageNormalizedUnits = (output, context) => {
    let contents = {
        __type: "CoverageNormalizedUnits",
        CoverageNormalizedUnitsPercentage: undefined,
        OnDemandNormalizedUnits: undefined,
        ReservedNormalizedUnits: undefined,
        TotalRunningNormalizedUnits: undefined
    };
    if (output.CoverageNormalizedUnitsPercentage !== undefined &&
        output.CoverageNormalizedUnitsPercentage !== null) {
        contents.CoverageNormalizedUnitsPercentage =
            output.CoverageNormalizedUnitsPercentage;
    }
    if (output.OnDemandNormalizedUnits !== undefined &&
        output.OnDemandNormalizedUnits !== null) {
        contents.OnDemandNormalizedUnits = output.OnDemandNormalizedUnits;
    }
    if (output.ReservedNormalizedUnits !== undefined &&
        output.ReservedNormalizedUnits !== null) {
        contents.ReservedNormalizedUnits = output.ReservedNormalizedUnits;
    }
    if (output.TotalRunningNormalizedUnits !== undefined &&
        output.TotalRunningNormalizedUnits !== null) {
        contents.TotalRunningNormalizedUnits = output.TotalRunningNormalizedUnits;
    }
    return contents;
};
const deserializeAws_json1_1CoveragesByTime = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CoverageByTime(entry, context));
};
const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (output, context) => {
    let contents = {
        __type: "CreateCostCategoryDefinitionResponse",
        CostCategoryArn: undefined,
        EffectiveStart: undefined
    };
    if (output.CostCategoryArn !== undefined && output.CostCategoryArn !== null) {
        contents.CostCategoryArn = output.CostCategoryArn;
    }
    if (output.EffectiveStart !== undefined && output.EffectiveStart !== null) {
        contents.EffectiveStart = output.EffectiveStart;
    }
    return contents;
};
const deserializeAws_json1_1CurrentInstance = (output, context) => {
    let contents = {
        __type: "CurrentInstance",
        CurrencyCode: undefined,
        MonthlyCost: undefined,
        OnDemandHoursInLookbackPeriod: undefined,
        ReservationCoveredHoursInLookbackPeriod: undefined,
        ResourceDetails: undefined,
        ResourceId: undefined,
        ResourceUtilization: undefined,
        SavingsPlansCoveredHoursInLookbackPeriod: undefined,
        Tags: undefined,
        TotalRunningHoursInLookbackPeriod: undefined
    };
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.MonthlyCost !== undefined && output.MonthlyCost !== null) {
        contents.MonthlyCost = output.MonthlyCost;
    }
    if (output.OnDemandHoursInLookbackPeriod !== undefined &&
        output.OnDemandHoursInLookbackPeriod !== null) {
        contents.OnDemandHoursInLookbackPeriod =
            output.OnDemandHoursInLookbackPeriod;
    }
    if (output.ReservationCoveredHoursInLookbackPeriod !== undefined &&
        output.ReservationCoveredHoursInLookbackPeriod !== null) {
        contents.ReservationCoveredHoursInLookbackPeriod =
            output.ReservationCoveredHoursInLookbackPeriod;
    }
    if (output.ResourceDetails !== undefined && output.ResourceDetails !== null) {
        contents.ResourceDetails = deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context);
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.ResourceUtilization !== undefined &&
        output.ResourceUtilization !== null) {
        contents.ResourceUtilization = deserializeAws_json1_1ResourceUtilization(output.ResourceUtilization, context);
    }
    if (output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined &&
        output.SavingsPlansCoveredHoursInLookbackPeriod !== null) {
        contents.SavingsPlansCoveredHoursInLookbackPeriod =
            output.SavingsPlansCoveredHoursInLookbackPeriod;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagValuesList(output.Tags, context);
    }
    if (output.TotalRunningHoursInLookbackPeriod !== undefined &&
        output.TotalRunningHoursInLookbackPeriod !== null) {
        contents.TotalRunningHoursInLookbackPeriod =
            output.TotalRunningHoursInLookbackPeriod;
    }
    return contents;
};
const deserializeAws_json1_1DataUnavailableException = (output, context) => {
    let contents = {
        __type: "DataUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DateInterval = (output, context) => {
    let contents = {
        __type: "DateInterval",
        End: undefined,
        Start: undefined
    };
    if (output.End !== undefined && output.End !== null) {
        contents.End = output.End;
    }
    if (output.Start !== undefined && output.Start !== null) {
        contents.Start = output.Start;
    }
    return contents;
};
const deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DeleteCostCategoryDefinitionResponse",
        CostCategoryArn: undefined,
        EffectiveEnd: undefined
    };
    if (output.CostCategoryArn !== undefined && output.CostCategoryArn !== null) {
        contents.CostCategoryArn = output.CostCategoryArn;
    }
    if (output.EffectiveEnd !== undefined && output.EffectiveEnd !== null) {
        contents.EffectiveEnd = output.EffectiveEnd;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DescribeCostCategoryDefinitionResponse",
        CostCategory: undefined
    };
    if (output.CostCategory !== undefined && output.CostCategory !== null) {
        contents.CostCategory = deserializeAws_json1_1CostCategory(output.CostCategory, context);
    }
    return contents;
};
const deserializeAws_json1_1DimensionValues = (output, context) => {
    let contents = {
        __type: "DimensionValues",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1Values(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1DimensionValuesWithAttributes = (output, context) => {
    let contents = {
        __type: "DimensionValuesWithAttributes",
        Attributes: undefined,
        Value: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1DimensionValuesWithAttributesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DimensionValuesWithAttributes(entry, context));
};
const deserializeAws_json1_1EC2InstanceDetails = (output, context) => {
    let contents = {
        __type: "EC2InstanceDetails",
        AvailabilityZone: undefined,
        CurrentGeneration: undefined,
        Family: undefined,
        InstanceType: undefined,
        Platform: undefined,
        Region: undefined,
        SizeFlexEligible: undefined,
        Tenancy: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.CurrentGeneration !== undefined &&
        output.CurrentGeneration !== null) {
        contents.CurrentGeneration = output.CurrentGeneration;
    }
    if (output.Family !== undefined && output.Family !== null) {
        contents.Family = output.Family;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SizeFlexEligible !== undefined &&
        output.SizeFlexEligible !== null) {
        contents.SizeFlexEligible = output.SizeFlexEligible;
    }
    if (output.Tenancy !== undefined && output.Tenancy !== null) {
        contents.Tenancy = output.Tenancy;
    }
    return contents;
};
const deserializeAws_json1_1EC2ResourceDetails = (output, context) => {
    let contents = {
        __type: "EC2ResourceDetails",
        HourlyOnDemandRate: undefined,
        InstanceType: undefined,
        Memory: undefined,
        NetworkPerformance: undefined,
        Platform: undefined,
        Region: undefined,
        Sku: undefined,
        Storage: undefined,
        Vcpu: undefined
    };
    if (output.HourlyOnDemandRate !== undefined &&
        output.HourlyOnDemandRate !== null) {
        contents.HourlyOnDemandRate = output.HourlyOnDemandRate;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.Memory !== undefined && output.Memory !== null) {
        contents.Memory = output.Memory;
    }
    if (output.NetworkPerformance !== undefined &&
        output.NetworkPerformance !== null) {
        contents.NetworkPerformance = output.NetworkPerformance;
    }
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.Sku !== undefined && output.Sku !== null) {
        contents.Sku = output.Sku;
    }
    if (output.Storage !== undefined && output.Storage !== null) {
        contents.Storage = output.Storage;
    }
    if (output.Vcpu !== undefined && output.Vcpu !== null) {
        contents.Vcpu = output.Vcpu;
    }
    return contents;
};
const deserializeAws_json1_1EC2ResourceUtilization = (output, context) => {
    let contents = {
        __type: "EC2ResourceUtilization",
        MaxCpuUtilizationPercentage: undefined,
        MaxMemoryUtilizationPercentage: undefined,
        MaxStorageUtilizationPercentage: undefined
    };
    if (output.MaxCpuUtilizationPercentage !== undefined &&
        output.MaxCpuUtilizationPercentage !== null) {
        contents.MaxCpuUtilizationPercentage = output.MaxCpuUtilizationPercentage;
    }
    if (output.MaxMemoryUtilizationPercentage !== undefined &&
        output.MaxMemoryUtilizationPercentage !== null) {
        contents.MaxMemoryUtilizationPercentage =
            output.MaxMemoryUtilizationPercentage;
    }
    if (output.MaxStorageUtilizationPercentage !== undefined &&
        output.MaxStorageUtilizationPercentage !== null) {
        contents.MaxStorageUtilizationPercentage =
            output.MaxStorageUtilizationPercentage;
    }
    return contents;
};
const deserializeAws_json1_1EC2Specification = (output, context) => {
    let contents = {
        __type: "EC2Specification",
        OfferingClass: undefined
    };
    if (output.OfferingClass !== undefined && output.OfferingClass !== null) {
        contents.OfferingClass = output.OfferingClass;
    }
    return contents;
};
const deserializeAws_json1_1ESInstanceDetails = (output, context) => {
    let contents = {
        __type: "ESInstanceDetails",
        CurrentGeneration: undefined,
        InstanceClass: undefined,
        InstanceSize: undefined,
        Region: undefined,
        SizeFlexEligible: undefined
    };
    if (output.CurrentGeneration !== undefined &&
        output.CurrentGeneration !== null) {
        contents.CurrentGeneration = output.CurrentGeneration;
    }
    if (output.InstanceClass !== undefined && output.InstanceClass !== null) {
        contents.InstanceClass = output.InstanceClass;
    }
    if (output.InstanceSize !== undefined && output.InstanceSize !== null) {
        contents.InstanceSize = output.InstanceSize;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SizeFlexEligible !== undefined &&
        output.SizeFlexEligible !== null) {
        contents.SizeFlexEligible = output.SizeFlexEligible;
    }
    return contents;
};
const deserializeAws_json1_1ElastiCacheInstanceDetails = (output, context) => {
    let contents = {
        __type: "ElastiCacheInstanceDetails",
        CurrentGeneration: undefined,
        Family: undefined,
        NodeType: undefined,
        ProductDescription: undefined,
        Region: undefined,
        SizeFlexEligible: undefined
    };
    if (output.CurrentGeneration !== undefined &&
        output.CurrentGeneration !== null) {
        contents.CurrentGeneration = output.CurrentGeneration;
    }
    if (output.Family !== undefined && output.Family !== null) {
        contents.Family = output.Family;
    }
    if (output.NodeType !== undefined && output.NodeType !== null) {
        contents.NodeType = output.NodeType;
    }
    if (output.ProductDescription !== undefined &&
        output.ProductDescription !== null) {
        contents.ProductDescription = output.ProductDescription;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SizeFlexEligible !== undefined &&
        output.SizeFlexEligible !== null) {
        contents.SizeFlexEligible = output.SizeFlexEligible;
    }
    return contents;
};
const deserializeAws_json1_1Expression = (output, context) => {
    let contents = {
        __type: "Expression",
        And: undefined,
        CostCategories: undefined,
        Dimensions: undefined,
        Not: undefined,
        Or: undefined,
        Tags: undefined
    };
    if (output.And !== undefined && output.And !== null) {
        contents.And = deserializeAws_json1_1Expressions(output.And, context);
    }
    if (output.CostCategories !== undefined && output.CostCategories !== null) {
        contents.CostCategories = deserializeAws_json1_1CostCategoryValues(output.CostCategories, context);
    }
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1DimensionValues(output.Dimensions, context);
    }
    if (output.Not !== undefined && output.Not !== null) {
        contents.Not = deserializeAws_json1_1Expression(output.Not, context);
    }
    if (output.Or !== undefined && output.Or !== null) {
        contents.Or = deserializeAws_json1_1Expressions(output.Or, context);
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagValues(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1Expressions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Expression(entry, context));
};
const deserializeAws_json1_1ForecastResult = (output, context) => {
    let contents = {
        __type: "ForecastResult",
        MeanValue: undefined,
        PredictionIntervalLowerBound: undefined,
        PredictionIntervalUpperBound: undefined,
        TimePeriod: undefined
    };
    if (output.MeanValue !== undefined && output.MeanValue !== null) {
        contents.MeanValue = output.MeanValue;
    }
    if (output.PredictionIntervalLowerBound !== undefined &&
        output.PredictionIntervalLowerBound !== null) {
        contents.PredictionIntervalLowerBound = output.PredictionIntervalLowerBound;
    }
    if (output.PredictionIntervalUpperBound !== undefined &&
        output.PredictionIntervalUpperBound !== null) {
        contents.PredictionIntervalUpperBound = output.PredictionIntervalUpperBound;
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    return contents;
};
const deserializeAws_json1_1ForecastResultsByTime = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ForecastResult(entry, context));
};
const deserializeAws_json1_1GetCostAndUsageResponse = (output, context) => {
    let contents = {
        __type: "GetCostAndUsageResponse",
        GroupDefinitions: undefined,
        NextPageToken: undefined,
        ResultsByTime: undefined
    };
    if (output.GroupDefinitions !== undefined &&
        output.GroupDefinitions !== null) {
        contents.GroupDefinitions = deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ResultsByTime !== undefined && output.ResultsByTime !== null) {
        contents.ResultsByTime = deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (output, context) => {
    let contents = {
        __type: "GetCostAndUsageWithResourcesResponse",
        GroupDefinitions: undefined,
        NextPageToken: undefined,
        ResultsByTime: undefined
    };
    if (output.GroupDefinitions !== undefined &&
        output.GroupDefinitions !== null) {
        contents.GroupDefinitions = deserializeAws_json1_1GroupDefinitions(output.GroupDefinitions, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ResultsByTime !== undefined && output.ResultsByTime !== null) {
        contents.ResultsByTime = deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCostForecastResponse = (output, context) => {
    let contents = {
        __type: "GetCostForecastResponse",
        ForecastResultsByTime: undefined,
        Total: undefined
    };
    if (output.ForecastResultsByTime !== undefined &&
        output.ForecastResultsByTime !== null) {
        contents.ForecastResultsByTime = deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1MetricValue(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDimensionValuesResponse = (output, context) => {
    let contents = {
        __type: "GetDimensionValuesResponse",
        DimensionValues: undefined,
        NextPageToken: undefined,
        ReturnSize: undefined,
        TotalSize: undefined
    };
    if (output.DimensionValues !== undefined && output.DimensionValues !== null) {
        contents.DimensionValues = deserializeAws_json1_1DimensionValuesWithAttributesList(output.DimensionValues, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ReturnSize !== undefined && output.ReturnSize !== null) {
        contents.ReturnSize = output.ReturnSize;
    }
    if (output.TotalSize !== undefined && output.TotalSize !== null) {
        contents.TotalSize = output.TotalSize;
    }
    return contents;
};
const deserializeAws_json1_1GetReservationCoverageResponse = (output, context) => {
    let contents = {
        __type: "GetReservationCoverageResponse",
        CoveragesByTime: undefined,
        NextPageToken: undefined,
        Total: undefined
    };
    if (output.CoveragesByTime !== undefined && output.CoveragesByTime !== null) {
        contents.CoveragesByTime = deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1Coverage(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (output, context) => {
    let contents = {
        __type: "GetReservationPurchaseRecommendationResponse",
        Metadata: undefined,
        NextPageToken: undefined,
        Recommendations: undefined
    };
    if (output.Metadata !== undefined && output.Metadata !== null) {
        contents.Metadata = deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(output.Metadata, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.Recommendations !== undefined && output.Recommendations !== null) {
        contents.Recommendations = deserializeAws_json1_1ReservationPurchaseRecommendations(output.Recommendations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetReservationUtilizationResponse = (output, context) => {
    let contents = {
        __type: "GetReservationUtilizationResponse",
        NextPageToken: undefined,
        Total: undefined,
        UtilizationsByTime: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1ReservationAggregates(output.Total, context);
    }
    if (output.UtilizationsByTime !== undefined &&
        output.UtilizationsByTime !== null) {
        contents.UtilizationsByTime = deserializeAws_json1_1UtilizationsByTime(output.UtilizationsByTime, context);
    }
    return contents;
};
const deserializeAws_json1_1GetRightsizingRecommendationResponse = (output, context) => {
    let contents = {
        __type: "GetRightsizingRecommendationResponse",
        Metadata: undefined,
        NextPageToken: undefined,
        RightsizingRecommendations: undefined,
        Summary: undefined
    };
    if (output.Metadata !== undefined && output.Metadata !== null) {
        contents.Metadata = deserializeAws_json1_1RightsizingRecommendationMetadata(output.Metadata, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.RightsizingRecommendations !== undefined &&
        output.RightsizingRecommendations !== null) {
        contents.RightsizingRecommendations = deserializeAws_json1_1RightsizingRecommendationList(output.RightsizingRecommendations, context);
    }
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1RightsizingRecommendationSummary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (output, context) => {
    let contents = {
        __type: "GetSavingsPlansCoverageResponse",
        NextToken: undefined,
        SavingsPlansCoverages: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SavingsPlansCoverages !== undefined &&
        output.SavingsPlansCoverages !== null) {
        contents.SavingsPlansCoverages = deserializeAws_json1_1SavingsPlansCoverages(output.SavingsPlansCoverages, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = (output, context) => {
    let contents = {
        __type: "GetSavingsPlansPurchaseRecommendationResponse",
        Metadata: undefined,
        NextPageToken: undefined,
        SavingsPlansPurchaseRecommendation: undefined
    };
    if (output.Metadata !== undefined && output.Metadata !== null) {
        contents.Metadata = deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(output.Metadata, context);
    }
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.SavingsPlansPurchaseRecommendation !== undefined &&
        output.SavingsPlansPurchaseRecommendation !== null) {
        contents.SavingsPlansPurchaseRecommendation = deserializeAws_json1_1SavingsPlansPurchaseRecommendation(output.SavingsPlansPurchaseRecommendation, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (output, context) => {
    let contents = {
        __type: "GetSavingsPlansUtilizationDetailsResponse",
        NextToken: undefined,
        SavingsPlansUtilizationDetails: undefined,
        TimePeriod: undefined,
        Total: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SavingsPlansUtilizationDetails !== undefined &&
        output.SavingsPlansUtilizationDetails !== null) {
        contents.SavingsPlansUtilizationDetails = deserializeAws_json1_1SavingsPlansUtilizationDetails(output.SavingsPlansUtilizationDetails, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (output, context) => {
    let contents = {
        __type: "GetSavingsPlansUtilizationResponse",
        SavingsPlansUtilizationsByTime: undefined,
        Total: undefined
    };
    if (output.SavingsPlansUtilizationsByTime !== undefined &&
        output.SavingsPlansUtilizationsByTime !== null) {
        contents.SavingsPlansUtilizationsByTime = deserializeAws_json1_1SavingsPlansUtilizationsByTime(output.SavingsPlansUtilizationsByTime, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1SavingsPlansUtilizationAggregates(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTagsResponse = (output, context) => {
    let contents = {
        __type: "GetTagsResponse",
        NextPageToken: undefined,
        ReturnSize: undefined,
        Tags: undefined,
        TotalSize: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.ReturnSize !== undefined && output.ReturnSize !== null) {
        contents.ReturnSize = output.ReturnSize;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.TotalSize !== undefined && output.TotalSize !== null) {
        contents.TotalSize = output.TotalSize;
    }
    return contents;
};
const deserializeAws_json1_1GetUsageForecastResponse = (output, context) => {
    let contents = {
        __type: "GetUsageForecastResponse",
        ForecastResultsByTime: undefined,
        Total: undefined
    };
    if (output.ForecastResultsByTime !== undefined &&
        output.ForecastResultsByTime !== null) {
        contents.ForecastResultsByTime = deserializeAws_json1_1ForecastResultsByTime(output.ForecastResultsByTime, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1MetricValue(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1Group = (output, context) => {
    let contents = {
        __type: "Group",
        Keys: undefined,
        Metrics: undefined
    };
    if (output.Keys !== undefined && output.Keys !== null) {
        contents.Keys = deserializeAws_json1_1Keys(output.Keys, context);
    }
    if (output.Metrics !== undefined && output.Metrics !== null) {
        contents.Metrics = deserializeAws_json1_1Metrics(output.Metrics, context);
    }
    return contents;
};
const deserializeAws_json1_1GroupDefinition = (output, context) => {
    let contents = {
        __type: "GroupDefinition",
        Key: undefined,
        Type: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1GroupDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GroupDefinition(entry, context));
};
const deserializeAws_json1_1Groups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Group(entry, context));
};
const deserializeAws_json1_1InstanceDetails = (output, context) => {
    let contents = {
        __type: "InstanceDetails",
        EC2InstanceDetails: undefined,
        ESInstanceDetails: undefined,
        ElastiCacheInstanceDetails: undefined,
        RDSInstanceDetails: undefined,
        RedshiftInstanceDetails: undefined
    };
    if (output.EC2InstanceDetails !== undefined &&
        output.EC2InstanceDetails !== null) {
        contents.EC2InstanceDetails = deserializeAws_json1_1EC2InstanceDetails(output.EC2InstanceDetails, context);
    }
    if (output.ESInstanceDetails !== undefined &&
        output.ESInstanceDetails !== null) {
        contents.ESInstanceDetails = deserializeAws_json1_1ESInstanceDetails(output.ESInstanceDetails, context);
    }
    if (output.ElastiCacheInstanceDetails !== undefined &&
        output.ElastiCacheInstanceDetails !== null) {
        contents.ElastiCacheInstanceDetails = deserializeAws_json1_1ElastiCacheInstanceDetails(output.ElastiCacheInstanceDetails, context);
    }
    if (output.RDSInstanceDetails !== undefined &&
        output.RDSInstanceDetails !== null) {
        contents.RDSInstanceDetails = deserializeAws_json1_1RDSInstanceDetails(output.RDSInstanceDetails, context);
    }
    if (output.RedshiftInstanceDetails !== undefined &&
        output.RedshiftInstanceDetails !== null) {
        contents.RedshiftInstanceDetails = deserializeAws_json1_1RedshiftInstanceDetails(output.RedshiftInstanceDetails, context);
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
const deserializeAws_json1_1Keys = (output, context) => {
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
const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (output, context) => {
    let contents = {
        __type: "ListCostCategoryDefinitionsResponse",
        CostCategoryReferences: undefined,
        NextToken: undefined
    };
    if (output.CostCategoryReferences !== undefined &&
        output.CostCategoryReferences !== null) {
        contents.CostCategoryReferences = deserializeAws_json1_1CostCategoryReferencesList(output.CostCategoryReferences, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MetricValue = (output, context) => {
    let contents = {
        __type: "MetricValue",
        Amount: undefined,
        Unit: undefined
    };
    if (output.Amount !== undefined && output.Amount !== null) {
        contents.Amount = output.Amount;
    }
    if (output.Unit !== undefined && output.Unit !== null) {
        contents.Unit = output.Unit;
    }
    return contents;
};
const deserializeAws_json1_1Metrics = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1MetricValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1ModifyRecommendationDetail = (output, context) => {
    let contents = {
        __type: "ModifyRecommendationDetail",
        TargetInstances: undefined
    };
    if (output.TargetInstances !== undefined && output.TargetInstances !== null) {
        contents.TargetInstances = deserializeAws_json1_1TargetInstancesList(output.TargetInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1RDSInstanceDetails = (output, context) => {
    let contents = {
        __type: "RDSInstanceDetails",
        CurrentGeneration: undefined,
        DatabaseEdition: undefined,
        DatabaseEngine: undefined,
        DeploymentOption: undefined,
        Family: undefined,
        InstanceType: undefined,
        LicenseModel: undefined,
        Region: undefined,
        SizeFlexEligible: undefined
    };
    if (output.CurrentGeneration !== undefined &&
        output.CurrentGeneration !== null) {
        contents.CurrentGeneration = output.CurrentGeneration;
    }
    if (output.DatabaseEdition !== undefined && output.DatabaseEdition !== null) {
        contents.DatabaseEdition = output.DatabaseEdition;
    }
    if (output.DatabaseEngine !== undefined && output.DatabaseEngine !== null) {
        contents.DatabaseEngine = output.DatabaseEngine;
    }
    if (output.DeploymentOption !== undefined &&
        output.DeploymentOption !== null) {
        contents.DeploymentOption = output.DeploymentOption;
    }
    if (output.Family !== undefined && output.Family !== null) {
        contents.Family = output.Family;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LicenseModel !== undefined && output.LicenseModel !== null) {
        contents.LicenseModel = output.LicenseModel;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SizeFlexEligible !== undefined &&
        output.SizeFlexEligible !== null) {
        contents.SizeFlexEligible = output.SizeFlexEligible;
    }
    return contents;
};
const deserializeAws_json1_1RedshiftInstanceDetails = (output, context) => {
    let contents = {
        __type: "RedshiftInstanceDetails",
        CurrentGeneration: undefined,
        Family: undefined,
        NodeType: undefined,
        Region: undefined,
        SizeFlexEligible: undefined
    };
    if (output.CurrentGeneration !== undefined &&
        output.CurrentGeneration !== null) {
        contents.CurrentGeneration = output.CurrentGeneration;
    }
    if (output.Family !== undefined && output.Family !== null) {
        contents.Family = output.Family;
    }
    if (output.NodeType !== undefined && output.NodeType !== null) {
        contents.NodeType = output.NodeType;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.SizeFlexEligible !== undefined &&
        output.SizeFlexEligible !== null) {
        contents.SizeFlexEligible = output.SizeFlexEligible;
    }
    return contents;
};
const deserializeAws_json1_1RequestChangedException = (output, context) => {
    let contents = {
        __type: "RequestChangedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ReservationAggregates = (output, context) => {
    let contents = {
        __type: "ReservationAggregates",
        AmortizedRecurringFee: undefined,
        AmortizedUpfrontFee: undefined,
        NetRISavings: undefined,
        OnDemandCostOfRIHoursUsed: undefined,
        PurchasedHours: undefined,
        PurchasedUnits: undefined,
        TotalActualHours: undefined,
        TotalActualUnits: undefined,
        TotalAmortizedFee: undefined,
        TotalPotentialRISavings: undefined,
        UnusedHours: undefined,
        UnusedUnits: undefined,
        UtilizationPercentage: undefined,
        UtilizationPercentageInUnits: undefined
    };
    if (output.AmortizedRecurringFee !== undefined &&
        output.AmortizedRecurringFee !== null) {
        contents.AmortizedRecurringFee = output.AmortizedRecurringFee;
    }
    if (output.AmortizedUpfrontFee !== undefined &&
        output.AmortizedUpfrontFee !== null) {
        contents.AmortizedUpfrontFee = output.AmortizedUpfrontFee;
    }
    if (output.NetRISavings !== undefined && output.NetRISavings !== null) {
        contents.NetRISavings = output.NetRISavings;
    }
    if (output.OnDemandCostOfRIHoursUsed !== undefined &&
        output.OnDemandCostOfRIHoursUsed !== null) {
        contents.OnDemandCostOfRIHoursUsed = output.OnDemandCostOfRIHoursUsed;
    }
    if (output.PurchasedHours !== undefined && output.PurchasedHours !== null) {
        contents.PurchasedHours = output.PurchasedHours;
    }
    if (output.PurchasedUnits !== undefined && output.PurchasedUnits !== null) {
        contents.PurchasedUnits = output.PurchasedUnits;
    }
    if (output.TotalActualHours !== undefined &&
        output.TotalActualHours !== null) {
        contents.TotalActualHours = output.TotalActualHours;
    }
    if (output.TotalActualUnits !== undefined &&
        output.TotalActualUnits !== null) {
        contents.TotalActualUnits = output.TotalActualUnits;
    }
    if (output.TotalAmortizedFee !== undefined &&
        output.TotalAmortizedFee !== null) {
        contents.TotalAmortizedFee = output.TotalAmortizedFee;
    }
    if (output.TotalPotentialRISavings !== undefined &&
        output.TotalPotentialRISavings !== null) {
        contents.TotalPotentialRISavings = output.TotalPotentialRISavings;
    }
    if (output.UnusedHours !== undefined && output.UnusedHours !== null) {
        contents.UnusedHours = output.UnusedHours;
    }
    if (output.UnusedUnits !== undefined && output.UnusedUnits !== null) {
        contents.UnusedUnits = output.UnusedUnits;
    }
    if (output.UtilizationPercentage !== undefined &&
        output.UtilizationPercentage !== null) {
        contents.UtilizationPercentage = output.UtilizationPercentage;
    }
    if (output.UtilizationPercentageInUnits !== undefined &&
        output.UtilizationPercentageInUnits !== null) {
        contents.UtilizationPercentageInUnits = output.UtilizationPercentageInUnits;
    }
    return contents;
};
const deserializeAws_json1_1ReservationCoverageGroup = (output, context) => {
    let contents = {
        __type: "ReservationCoverageGroup",
        Attributes: undefined,
        Coverage: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Coverage !== undefined && output.Coverage !== null) {
        contents.Coverage = deserializeAws_json1_1Coverage(output.Coverage, context);
    }
    return contents;
};
const deserializeAws_json1_1ReservationCoverageGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReservationCoverageGroup(entry, context));
};
const deserializeAws_json1_1ReservationPurchaseRecommendation = (output, context) => {
    let contents = {
        __type: "ReservationPurchaseRecommendation",
        AccountScope: undefined,
        LookbackPeriodInDays: undefined,
        PaymentOption: undefined,
        RecommendationDetails: undefined,
        RecommendationSummary: undefined,
        ServiceSpecification: undefined,
        TermInYears: undefined
    };
    if (output.AccountScope !== undefined && output.AccountScope !== null) {
        contents.AccountScope = output.AccountScope;
    }
    if (output.LookbackPeriodInDays !== undefined &&
        output.LookbackPeriodInDays !== null) {
        contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
    }
    if (output.PaymentOption !== undefined && output.PaymentOption !== null) {
        contents.PaymentOption = output.PaymentOption;
    }
    if (output.RecommendationDetails !== undefined &&
        output.RecommendationDetails !== null) {
        contents.RecommendationDetails = deserializeAws_json1_1ReservationPurchaseRecommendationDetails(output.RecommendationDetails, context);
    }
    if (output.RecommendationSummary !== undefined &&
        output.RecommendationSummary !== null) {
        contents.RecommendationSummary = deserializeAws_json1_1ReservationPurchaseRecommendationSummary(output.RecommendationSummary, context);
    }
    if (output.ServiceSpecification !== undefined &&
        output.ServiceSpecification !== null) {
        contents.ServiceSpecification = deserializeAws_json1_1ServiceSpecification(output.ServiceSpecification, context);
    }
    if (output.TermInYears !== undefined && output.TermInYears !== null) {
        contents.TermInYears = output.TermInYears;
    }
    return contents;
};
const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (output, context) => {
    let contents = {
        __type: "ReservationPurchaseRecommendationDetail",
        AccountId: undefined,
        AverageNormalizedUnitsUsedPerHour: undefined,
        AverageNumberOfInstancesUsedPerHour: undefined,
        AverageUtilization: undefined,
        CurrencyCode: undefined,
        EstimatedBreakEvenInMonths: undefined,
        EstimatedMonthlyOnDemandCost: undefined,
        EstimatedMonthlySavingsAmount: undefined,
        EstimatedMonthlySavingsPercentage: undefined,
        EstimatedReservationCostForLookbackPeriod: undefined,
        InstanceDetails: undefined,
        MaximumNormalizedUnitsUsedPerHour: undefined,
        MaximumNumberOfInstancesUsedPerHour: undefined,
        MinimumNormalizedUnitsUsedPerHour: undefined,
        MinimumNumberOfInstancesUsedPerHour: undefined,
        RecommendedNormalizedUnitsToPurchase: undefined,
        RecommendedNumberOfInstancesToPurchase: undefined,
        RecurringStandardMonthlyCost: undefined,
        UpfrontCost: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.AverageNormalizedUnitsUsedPerHour !== undefined &&
        output.AverageNormalizedUnitsUsedPerHour !== null) {
        contents.AverageNormalizedUnitsUsedPerHour =
            output.AverageNormalizedUnitsUsedPerHour;
    }
    if (output.AverageNumberOfInstancesUsedPerHour !== undefined &&
        output.AverageNumberOfInstancesUsedPerHour !== null) {
        contents.AverageNumberOfInstancesUsedPerHour =
            output.AverageNumberOfInstancesUsedPerHour;
    }
    if (output.AverageUtilization !== undefined &&
        output.AverageUtilization !== null) {
        contents.AverageUtilization = output.AverageUtilization;
    }
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.EstimatedBreakEvenInMonths !== undefined &&
        output.EstimatedBreakEvenInMonths !== null) {
        contents.EstimatedBreakEvenInMonths = output.EstimatedBreakEvenInMonths;
    }
    if (output.EstimatedMonthlyOnDemandCost !== undefined &&
        output.EstimatedMonthlyOnDemandCost !== null) {
        contents.EstimatedMonthlyOnDemandCost = output.EstimatedMonthlyOnDemandCost;
    }
    if (output.EstimatedMonthlySavingsAmount !== undefined &&
        output.EstimatedMonthlySavingsAmount !== null) {
        contents.EstimatedMonthlySavingsAmount =
            output.EstimatedMonthlySavingsAmount;
    }
    if (output.EstimatedMonthlySavingsPercentage !== undefined &&
        output.EstimatedMonthlySavingsPercentage !== null) {
        contents.EstimatedMonthlySavingsPercentage =
            output.EstimatedMonthlySavingsPercentage;
    }
    if (output.EstimatedReservationCostForLookbackPeriod !== undefined &&
        output.EstimatedReservationCostForLookbackPeriod !== null) {
        contents.EstimatedReservationCostForLookbackPeriod =
            output.EstimatedReservationCostForLookbackPeriod;
    }
    if (output.InstanceDetails !== undefined && output.InstanceDetails !== null) {
        contents.InstanceDetails = deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context);
    }
    if (output.MaximumNormalizedUnitsUsedPerHour !== undefined &&
        output.MaximumNormalizedUnitsUsedPerHour !== null) {
        contents.MaximumNormalizedUnitsUsedPerHour =
            output.MaximumNormalizedUnitsUsedPerHour;
    }
    if (output.MaximumNumberOfInstancesUsedPerHour !== undefined &&
        output.MaximumNumberOfInstancesUsedPerHour !== null) {
        contents.MaximumNumberOfInstancesUsedPerHour =
            output.MaximumNumberOfInstancesUsedPerHour;
    }
    if (output.MinimumNormalizedUnitsUsedPerHour !== undefined &&
        output.MinimumNormalizedUnitsUsedPerHour !== null) {
        contents.MinimumNormalizedUnitsUsedPerHour =
            output.MinimumNormalizedUnitsUsedPerHour;
    }
    if (output.MinimumNumberOfInstancesUsedPerHour !== undefined &&
        output.MinimumNumberOfInstancesUsedPerHour !== null) {
        contents.MinimumNumberOfInstancesUsedPerHour =
            output.MinimumNumberOfInstancesUsedPerHour;
    }
    if (output.RecommendedNormalizedUnitsToPurchase !== undefined &&
        output.RecommendedNormalizedUnitsToPurchase !== null) {
        contents.RecommendedNormalizedUnitsToPurchase =
            output.RecommendedNormalizedUnitsToPurchase;
    }
    if (output.RecommendedNumberOfInstancesToPurchase !== undefined &&
        output.RecommendedNumberOfInstancesToPurchase !== null) {
        contents.RecommendedNumberOfInstancesToPurchase =
            output.RecommendedNumberOfInstancesToPurchase;
    }
    if (output.RecurringStandardMonthlyCost !== undefined &&
        output.RecurringStandardMonthlyCost !== null) {
        contents.RecurringStandardMonthlyCost = output.RecurringStandardMonthlyCost;
    }
    if (output.UpfrontCost !== undefined && output.UpfrontCost !== null) {
        contents.UpfrontCost = output.UpfrontCost;
    }
    return contents;
};
const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReservationPurchaseRecommendationDetail(entry, context));
};
const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (output, context) => {
    let contents = {
        __type: "ReservationPurchaseRecommendationMetadata",
        GenerationTimestamp: undefined,
        RecommendationId: undefined
    };
    if (output.GenerationTimestamp !== undefined &&
        output.GenerationTimestamp !== null) {
        contents.GenerationTimestamp = output.GenerationTimestamp;
    }
    if (output.RecommendationId !== undefined &&
        output.RecommendationId !== null) {
        contents.RecommendationId = output.RecommendationId;
    }
    return contents;
};
const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (output, context) => {
    let contents = {
        __type: "ReservationPurchaseRecommendationSummary",
        CurrencyCode: undefined,
        TotalEstimatedMonthlySavingsAmount: undefined,
        TotalEstimatedMonthlySavingsPercentage: undefined
    };
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.TotalEstimatedMonthlySavingsAmount !== undefined &&
        output.TotalEstimatedMonthlySavingsAmount !== null) {
        contents.TotalEstimatedMonthlySavingsAmount =
            output.TotalEstimatedMonthlySavingsAmount;
    }
    if (output.TotalEstimatedMonthlySavingsPercentage !== undefined &&
        output.TotalEstimatedMonthlySavingsPercentage !== null) {
        contents.TotalEstimatedMonthlySavingsPercentage =
            output.TotalEstimatedMonthlySavingsPercentage;
    }
    return contents;
};
const deserializeAws_json1_1ReservationPurchaseRecommendations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context));
};
const deserializeAws_json1_1ReservationUtilizationGroup = (output, context) => {
    let contents = {
        __type: "ReservationUtilizationGroup",
        Attributes: undefined,
        Key: undefined,
        Utilization: undefined,
        Value: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Utilization !== undefined && output.Utilization !== null) {
        contents.Utilization = deserializeAws_json1_1ReservationAggregates(output.Utilization, context);
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ReservationUtilizationGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReservationUtilizationGroup(entry, context));
};
const deserializeAws_json1_1ResourceDetails = (output, context) => {
    let contents = {
        __type: "ResourceDetails",
        EC2ResourceDetails: undefined
    };
    if (output.EC2ResourceDetails !== undefined &&
        output.EC2ResourceDetails !== null) {
        contents.EC2ResourceDetails = deserializeAws_json1_1EC2ResourceDetails(output.EC2ResourceDetails, context);
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
const deserializeAws_json1_1ResourceUtilization = (output, context) => {
    let contents = {
        __type: "ResourceUtilization",
        EC2ResourceUtilization: undefined
    };
    if (output.EC2ResourceUtilization !== undefined &&
        output.EC2ResourceUtilization !== null) {
        contents.EC2ResourceUtilization = deserializeAws_json1_1EC2ResourceUtilization(output.EC2ResourceUtilization, context);
    }
    return contents;
};
const deserializeAws_json1_1ResultByTime = (output, context) => {
    let contents = {
        __type: "ResultByTime",
        Estimated: undefined,
        Groups: undefined,
        TimePeriod: undefined,
        Total: undefined
    };
    if (output.Estimated !== undefined && output.Estimated !== null) {
        contents.Estimated = output.Estimated;
    }
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1Groups(output.Groups, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1Metrics(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1ResultsByTime = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResultByTime(entry, context));
};
const deserializeAws_json1_1RightsizingRecommendation = (output, context) => {
    let contents = {
        __type: "RightsizingRecommendation",
        AccountId: undefined,
        CurrentInstance: undefined,
        ModifyRecommendationDetail: undefined,
        RightsizingType: undefined,
        TerminateRecommendationDetail: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.CurrentInstance !== undefined && output.CurrentInstance !== null) {
        contents.CurrentInstance = deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context);
    }
    if (output.ModifyRecommendationDetail !== undefined &&
        output.ModifyRecommendationDetail !== null) {
        contents.ModifyRecommendationDetail = deserializeAws_json1_1ModifyRecommendationDetail(output.ModifyRecommendationDetail, context);
    }
    if (output.RightsizingType !== undefined && output.RightsizingType !== null) {
        contents.RightsizingType = output.RightsizingType;
    }
    if (output.TerminateRecommendationDetail !== undefined &&
        output.TerminateRecommendationDetail !== null) {
        contents.TerminateRecommendationDetail = deserializeAws_json1_1TerminateRecommendationDetail(output.TerminateRecommendationDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1RightsizingRecommendationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RightsizingRecommendation(entry, context));
};
const deserializeAws_json1_1RightsizingRecommendationMetadata = (output, context) => {
    let contents = {
        __type: "RightsizingRecommendationMetadata",
        GenerationTimestamp: undefined,
        LookbackPeriodInDays: undefined,
        RecommendationId: undefined
    };
    if (output.GenerationTimestamp !== undefined &&
        output.GenerationTimestamp !== null) {
        contents.GenerationTimestamp = output.GenerationTimestamp;
    }
    if (output.LookbackPeriodInDays !== undefined &&
        output.LookbackPeriodInDays !== null) {
        contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
    }
    if (output.RecommendationId !== undefined &&
        output.RecommendationId !== null) {
        contents.RecommendationId = output.RecommendationId;
    }
    return contents;
};
const deserializeAws_json1_1RightsizingRecommendationSummary = (output, context) => {
    let contents = {
        __type: "RightsizingRecommendationSummary",
        EstimatedTotalMonthlySavingsAmount: undefined,
        SavingsCurrencyCode: undefined,
        SavingsPercentage: undefined,
        TotalRecommendationCount: undefined
    };
    if (output.EstimatedTotalMonthlySavingsAmount !== undefined &&
        output.EstimatedTotalMonthlySavingsAmount !== null) {
        contents.EstimatedTotalMonthlySavingsAmount =
            output.EstimatedTotalMonthlySavingsAmount;
    }
    if (output.SavingsCurrencyCode !== undefined &&
        output.SavingsCurrencyCode !== null) {
        contents.SavingsCurrencyCode = output.SavingsCurrencyCode;
    }
    if (output.SavingsPercentage !== undefined &&
        output.SavingsPercentage !== null) {
        contents.SavingsPercentage = output.SavingsPercentage;
    }
    if (output.TotalRecommendationCount !== undefined &&
        output.TotalRecommendationCount !== null) {
        contents.TotalRecommendationCount = output.TotalRecommendationCount;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (output, context) => {
    let contents = {
        __type: "SavingsPlansAmortizedCommitment",
        AmortizedRecurringCommitment: undefined,
        AmortizedUpfrontCommitment: undefined,
        TotalAmortizedCommitment: undefined
    };
    if (output.AmortizedRecurringCommitment !== undefined &&
        output.AmortizedRecurringCommitment !== null) {
        contents.AmortizedRecurringCommitment = output.AmortizedRecurringCommitment;
    }
    if (output.AmortizedUpfrontCommitment !== undefined &&
        output.AmortizedUpfrontCommitment !== null) {
        contents.AmortizedUpfrontCommitment = output.AmortizedUpfrontCommitment;
    }
    if (output.TotalAmortizedCommitment !== undefined &&
        output.TotalAmortizedCommitment !== null) {
        contents.TotalAmortizedCommitment = output.TotalAmortizedCommitment;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansCoverage = (output, context) => {
    let contents = {
        __type: "SavingsPlansCoverage",
        Attributes: undefined,
        Coverage: undefined,
        TimePeriod: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Coverage !== undefined && output.Coverage !== null) {
        contents.Coverage = deserializeAws_json1_1SavingsPlansCoverageData(output.Coverage, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansCoverageData = (output, context) => {
    let contents = {
        __type: "SavingsPlansCoverageData",
        CoveragePercentage: undefined,
        OnDemandCost: undefined,
        SpendCoveredBySavingsPlans: undefined,
        TotalCost: undefined
    };
    if (output.CoveragePercentage !== undefined &&
        output.CoveragePercentage !== null) {
        contents.CoveragePercentage = output.CoveragePercentage;
    }
    if (output.OnDemandCost !== undefined && output.OnDemandCost !== null) {
        contents.OnDemandCost = output.OnDemandCost;
    }
    if (output.SpendCoveredBySavingsPlans !== undefined &&
        output.SpendCoveredBySavingsPlans !== null) {
        contents.SpendCoveredBySavingsPlans = output.SpendCoveredBySavingsPlans;
    }
    if (output.TotalCost !== undefined && output.TotalCost !== null) {
        contents.TotalCost = output.TotalCost;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansCoverages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SavingsPlansCoverage(entry, context));
};
const deserializeAws_json1_1SavingsPlansDetails = (output, context) => {
    let contents = {
        __type: "SavingsPlansDetails",
        InstanceFamily: undefined,
        OfferingId: undefined,
        Region: undefined
    };
    if (output.InstanceFamily !== undefined && output.InstanceFamily !== null) {
        contents.InstanceFamily = output.InstanceFamily;
    }
    if (output.OfferingId !== undefined && output.OfferingId !== null) {
        contents.OfferingId = output.OfferingId;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (output, context) => {
    let contents = {
        __type: "SavingsPlansPurchaseRecommendation",
        LookbackPeriodInDays: undefined,
        PaymentOption: undefined,
        SavingsPlansPurchaseRecommendationDetails: undefined,
        SavingsPlansPurchaseRecommendationSummary: undefined,
        SavingsPlansType: undefined,
        TermInYears: undefined
    };
    if (output.LookbackPeriodInDays !== undefined &&
        output.LookbackPeriodInDays !== null) {
        contents.LookbackPeriodInDays = output.LookbackPeriodInDays;
    }
    if (output.PaymentOption !== undefined && output.PaymentOption !== null) {
        contents.PaymentOption = output.PaymentOption;
    }
    if (output.SavingsPlansPurchaseRecommendationDetails !== undefined &&
        output.SavingsPlansPurchaseRecommendationDetails !== null) {
        contents.SavingsPlansPurchaseRecommendationDetails = deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(output.SavingsPlansPurchaseRecommendationDetails, context);
    }
    if (output.SavingsPlansPurchaseRecommendationSummary !== undefined &&
        output.SavingsPlansPurchaseRecommendationSummary !== null) {
        contents.SavingsPlansPurchaseRecommendationSummary = deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(output.SavingsPlansPurchaseRecommendationSummary, context);
    }
    if (output.SavingsPlansType !== undefined &&
        output.SavingsPlansType !== null) {
        contents.SavingsPlansType = output.SavingsPlansType;
    }
    if (output.TermInYears !== undefined && output.TermInYears !== null) {
        contents.TermInYears = output.TermInYears;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (output, context) => {
    let contents = {
        __type: "SavingsPlansPurchaseRecommendationDetail",
        AccountId: undefined,
        CurrencyCode: undefined,
        CurrentAverageHourlyOnDemandSpend: undefined,
        CurrentMaximumHourlyOnDemandSpend: undefined,
        CurrentMinimumHourlyOnDemandSpend: undefined,
        EstimatedAverageUtilization: undefined,
        EstimatedMonthlySavingsAmount: undefined,
        EstimatedOnDemandCost: undefined,
        EstimatedOnDemandCostWithCurrentCommitment: undefined,
        EstimatedROI: undefined,
        EstimatedSPCost: undefined,
        EstimatedSavingsAmount: undefined,
        EstimatedSavingsPercentage: undefined,
        HourlyCommitmentToPurchase: undefined,
        SavingsPlansDetails: undefined,
        UpfrontCost: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.CurrentAverageHourlyOnDemandSpend !== undefined &&
        output.CurrentAverageHourlyOnDemandSpend !== null) {
        contents.CurrentAverageHourlyOnDemandSpend =
            output.CurrentAverageHourlyOnDemandSpend;
    }
    if (output.CurrentMaximumHourlyOnDemandSpend !== undefined &&
        output.CurrentMaximumHourlyOnDemandSpend !== null) {
        contents.CurrentMaximumHourlyOnDemandSpend =
            output.CurrentMaximumHourlyOnDemandSpend;
    }
    if (output.CurrentMinimumHourlyOnDemandSpend !== undefined &&
        output.CurrentMinimumHourlyOnDemandSpend !== null) {
        contents.CurrentMinimumHourlyOnDemandSpend =
            output.CurrentMinimumHourlyOnDemandSpend;
    }
    if (output.EstimatedAverageUtilization !== undefined &&
        output.EstimatedAverageUtilization !== null) {
        contents.EstimatedAverageUtilization = output.EstimatedAverageUtilization;
    }
    if (output.EstimatedMonthlySavingsAmount !== undefined &&
        output.EstimatedMonthlySavingsAmount !== null) {
        contents.EstimatedMonthlySavingsAmount =
            output.EstimatedMonthlySavingsAmount;
    }
    if (output.EstimatedOnDemandCost !== undefined &&
        output.EstimatedOnDemandCost !== null) {
        contents.EstimatedOnDemandCost = output.EstimatedOnDemandCost;
    }
    if (output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
        output.EstimatedOnDemandCostWithCurrentCommitment !== null) {
        contents.EstimatedOnDemandCostWithCurrentCommitment =
            output.EstimatedOnDemandCostWithCurrentCommitment;
    }
    if (output.EstimatedROI !== undefined && output.EstimatedROI !== null) {
        contents.EstimatedROI = output.EstimatedROI;
    }
    if (output.EstimatedSPCost !== undefined && output.EstimatedSPCost !== null) {
        contents.EstimatedSPCost = output.EstimatedSPCost;
    }
    if (output.EstimatedSavingsAmount !== undefined &&
        output.EstimatedSavingsAmount !== null) {
        contents.EstimatedSavingsAmount = output.EstimatedSavingsAmount;
    }
    if (output.EstimatedSavingsPercentage !== undefined &&
        output.EstimatedSavingsPercentage !== null) {
        contents.EstimatedSavingsPercentage = output.EstimatedSavingsPercentage;
    }
    if (output.HourlyCommitmentToPurchase !== undefined &&
        output.HourlyCommitmentToPurchase !== null) {
        contents.HourlyCommitmentToPurchase = output.HourlyCommitmentToPurchase;
    }
    if (output.SavingsPlansDetails !== undefined &&
        output.SavingsPlansDetails !== null) {
        contents.SavingsPlansDetails = deserializeAws_json1_1SavingsPlansDetails(output.SavingsPlansDetails, context);
    }
    if (output.UpfrontCost !== undefined && output.UpfrontCost !== null) {
        contents.UpfrontCost = output.UpfrontCost;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(entry, context));
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (output, context) => {
    let contents = {
        __type: "SavingsPlansPurchaseRecommendationMetadata",
        GenerationTimestamp: undefined,
        RecommendationId: undefined
    };
    if (output.GenerationTimestamp !== undefined &&
        output.GenerationTimestamp !== null) {
        contents.GenerationTimestamp = output.GenerationTimestamp;
    }
    if (output.RecommendationId !== undefined &&
        output.RecommendationId !== null) {
        contents.RecommendationId = output.RecommendationId;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (output, context) => {
    let contents = {
        __type: "SavingsPlansPurchaseRecommendationSummary",
        CurrencyCode: undefined,
        CurrentOnDemandSpend: undefined,
        DailyCommitmentToPurchase: undefined,
        EstimatedMonthlySavingsAmount: undefined,
        EstimatedOnDemandCostWithCurrentCommitment: undefined,
        EstimatedROI: undefined,
        EstimatedSavingsAmount: undefined,
        EstimatedSavingsPercentage: undefined,
        EstimatedTotalCost: undefined,
        HourlyCommitmentToPurchase: undefined,
        TotalRecommendationCount: undefined
    };
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.CurrentOnDemandSpend !== undefined &&
        output.CurrentOnDemandSpend !== null) {
        contents.CurrentOnDemandSpend = output.CurrentOnDemandSpend;
    }
    if (output.DailyCommitmentToPurchase !== undefined &&
        output.DailyCommitmentToPurchase !== null) {
        contents.DailyCommitmentToPurchase = output.DailyCommitmentToPurchase;
    }
    if (output.EstimatedMonthlySavingsAmount !== undefined &&
        output.EstimatedMonthlySavingsAmount !== null) {
        contents.EstimatedMonthlySavingsAmount =
            output.EstimatedMonthlySavingsAmount;
    }
    if (output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
        output.EstimatedOnDemandCostWithCurrentCommitment !== null) {
        contents.EstimatedOnDemandCostWithCurrentCommitment =
            output.EstimatedOnDemandCostWithCurrentCommitment;
    }
    if (output.EstimatedROI !== undefined && output.EstimatedROI !== null) {
        contents.EstimatedROI = output.EstimatedROI;
    }
    if (output.EstimatedSavingsAmount !== undefined &&
        output.EstimatedSavingsAmount !== null) {
        contents.EstimatedSavingsAmount = output.EstimatedSavingsAmount;
    }
    if (output.EstimatedSavingsPercentage !== undefined &&
        output.EstimatedSavingsPercentage !== null) {
        contents.EstimatedSavingsPercentage = output.EstimatedSavingsPercentage;
    }
    if (output.EstimatedTotalCost !== undefined &&
        output.EstimatedTotalCost !== null) {
        contents.EstimatedTotalCost = output.EstimatedTotalCost;
    }
    if (output.HourlyCommitmentToPurchase !== undefined &&
        output.HourlyCommitmentToPurchase !== null) {
        contents.HourlyCommitmentToPurchase = output.HourlyCommitmentToPurchase;
    }
    if (output.TotalRecommendationCount !== undefined &&
        output.TotalRecommendationCount !== null) {
        contents.TotalRecommendationCount = output.TotalRecommendationCount;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansSavings = (output, context) => {
    let contents = {
        __type: "SavingsPlansSavings",
        NetSavings: undefined,
        OnDemandCostEquivalent: undefined
    };
    if (output.NetSavings !== undefined && output.NetSavings !== null) {
        contents.NetSavings = output.NetSavings;
    }
    if (output.OnDemandCostEquivalent !== undefined &&
        output.OnDemandCostEquivalent !== null) {
        contents.OnDemandCostEquivalent = output.OnDemandCostEquivalent;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansUtilization = (output, context) => {
    let contents = {
        __type: "SavingsPlansUtilization",
        TotalCommitment: undefined,
        UnusedCommitment: undefined,
        UsedCommitment: undefined,
        UtilizationPercentage: undefined
    };
    if (output.TotalCommitment !== undefined && output.TotalCommitment !== null) {
        contents.TotalCommitment = output.TotalCommitment;
    }
    if (output.UnusedCommitment !== undefined &&
        output.UnusedCommitment !== null) {
        contents.UnusedCommitment = output.UnusedCommitment;
    }
    if (output.UsedCommitment !== undefined && output.UsedCommitment !== null) {
        contents.UsedCommitment = output.UsedCommitment;
    }
    if (output.UtilizationPercentage !== undefined &&
        output.UtilizationPercentage !== null) {
        contents.UtilizationPercentage = output.UtilizationPercentage;
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (output, context) => {
    let contents = {
        __type: "SavingsPlansUtilizationAggregates",
        AmortizedCommitment: undefined,
        Savings: undefined,
        Utilization: undefined
    };
    if (output.AmortizedCommitment !== undefined &&
        output.AmortizedCommitment !== null) {
        contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context);
    }
    if (output.Savings !== undefined && output.Savings !== null) {
        contents.Savings = deserializeAws_json1_1SavingsPlansSavings(output.Savings, context);
    }
    if (output.Utilization !== undefined && output.Utilization !== null) {
        contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context);
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansUtilizationByTime = (output, context) => {
    let contents = {
        __type: "SavingsPlansUtilizationByTime",
        AmortizedCommitment: undefined,
        Savings: undefined,
        TimePeriod: undefined,
        Utilization: undefined
    };
    if (output.AmortizedCommitment !== undefined &&
        output.AmortizedCommitment !== null) {
        contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context);
    }
    if (output.Savings !== undefined && output.Savings !== null) {
        contents.Savings = deserializeAws_json1_1SavingsPlansSavings(output.Savings, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    if (output.Utilization !== undefined && output.Utilization !== null) {
        contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context);
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansUtilizationDetail = (output, context) => {
    let contents = {
        __type: "SavingsPlansUtilizationDetail",
        AmortizedCommitment: undefined,
        Attributes: undefined,
        Savings: undefined,
        SavingsPlanArn: undefined,
        Utilization: undefined
    };
    if (output.AmortizedCommitment !== undefined &&
        output.AmortizedCommitment !== null) {
        contents.AmortizedCommitment = deserializeAws_json1_1SavingsPlansAmortizedCommitment(output.AmortizedCommitment, context);
    }
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1Attributes(output.Attributes, context);
    }
    if (output.Savings !== undefined && output.Savings !== null) {
        contents.Savings = deserializeAws_json1_1SavingsPlansSavings(output.Savings, context);
    }
    if (output.SavingsPlanArn !== undefined && output.SavingsPlanArn !== null) {
        contents.SavingsPlanArn = output.SavingsPlanArn;
    }
    if (output.Utilization !== undefined && output.Utilization !== null) {
        contents.Utilization = deserializeAws_json1_1SavingsPlansUtilization(output.Utilization, context);
    }
    return contents;
};
const deserializeAws_json1_1SavingsPlansUtilizationDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context));
};
const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context));
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
const deserializeAws_json1_1ServiceSpecification = (output, context) => {
    let contents = {
        __type: "ServiceSpecification",
        EC2Specification: undefined
    };
    if (output.EC2Specification !== undefined &&
        output.EC2Specification !== null) {
        contents.EC2Specification = deserializeAws_json1_1EC2Specification(output.EC2Specification, context);
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagValues = (output, context) => {
    let contents = {
        __type: "TagValues",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1Values(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1TagValuesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagValues(entry, context));
};
const deserializeAws_json1_1TargetInstance = (output, context) => {
    let contents = {
        __type: "TargetInstance",
        CurrencyCode: undefined,
        DefaultTargetInstance: undefined,
        EstimatedMonthlyCost: undefined,
        EstimatedMonthlySavings: undefined,
        ExpectedResourceUtilization: undefined,
        ResourceDetails: undefined
    };
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.DefaultTargetInstance !== undefined &&
        output.DefaultTargetInstance !== null) {
        contents.DefaultTargetInstance = output.DefaultTargetInstance;
    }
    if (output.EstimatedMonthlyCost !== undefined &&
        output.EstimatedMonthlyCost !== null) {
        contents.EstimatedMonthlyCost = output.EstimatedMonthlyCost;
    }
    if (output.EstimatedMonthlySavings !== undefined &&
        output.EstimatedMonthlySavings !== null) {
        contents.EstimatedMonthlySavings = output.EstimatedMonthlySavings;
    }
    if (output.ExpectedResourceUtilization !== undefined &&
        output.ExpectedResourceUtilization !== null) {
        contents.ExpectedResourceUtilization = deserializeAws_json1_1ResourceUtilization(output.ExpectedResourceUtilization, context);
    }
    if (output.ResourceDetails !== undefined && output.ResourceDetails !== null) {
        contents.ResourceDetails = deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1TargetInstancesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetInstance(entry, context));
};
const deserializeAws_json1_1TerminateRecommendationDetail = (output, context) => {
    let contents = {
        __type: "TerminateRecommendationDetail",
        CurrencyCode: undefined,
        EstimatedMonthlySavings: undefined
    };
    if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
        contents.CurrencyCode = output.CurrencyCode;
    }
    if (output.EstimatedMonthlySavings !== undefined &&
        output.EstimatedMonthlySavings !== null) {
        contents.EstimatedMonthlySavings = output.EstimatedMonthlySavings;
    }
    return contents;
};
const deserializeAws_json1_1UnresolvableUsageUnitException = (output, context) => {
    let contents = {
        __type: "UnresolvableUsageUnitException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (output, context) => {
    let contents = {
        __type: "UpdateCostCategoryDefinitionResponse",
        CostCategoryArn: undefined,
        EffectiveStart: undefined
    };
    if (output.CostCategoryArn !== undefined && output.CostCategoryArn !== null) {
        contents.CostCategoryArn = output.CostCategoryArn;
    }
    if (output.EffectiveStart !== undefined && output.EffectiveStart !== null) {
        contents.EffectiveStart = output.EffectiveStart;
    }
    return contents;
};
const deserializeAws_json1_1UtilizationByTime = (output, context) => {
    let contents = {
        __type: "UtilizationByTime",
        Groups: undefined,
        TimePeriod: undefined,
        Total: undefined
    };
    if (output.Groups !== undefined && output.Groups !== null) {
        contents.Groups = deserializeAws_json1_1ReservationUtilizationGroups(output.Groups, context);
    }
    if (output.TimePeriod !== undefined && output.TimePeriod !== null) {
        contents.TimePeriod = deserializeAws_json1_1DateInterval(output.TimePeriod, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = deserializeAws_json1_1ReservationAggregates(output.Total, context);
    }
    return contents;
};
const deserializeAws_json1_1UtilizationsByTime = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UtilizationByTime(entry, context));
};
const deserializeAws_json1_1Values = (output, context) => {
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