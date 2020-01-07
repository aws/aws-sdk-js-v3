"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateBatchInferenceJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateBatchInferenceJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBatchInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBatchInferenceJobCommand = serializeAws_json1_1CreateBatchInferenceJobCommand;
async function serializeAws_json1_1CreateCampaignCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateCampaign";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCampaignCommand = serializeAws_json1_1CreateCampaignCommand;
async function serializeAws_json1_1CreateDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetCommand = serializeAws_json1_1CreateDatasetCommand;
async function serializeAws_json1_1CreateDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetGroupCommand = serializeAws_json1_1CreateDatasetGroupCommand;
async function serializeAws_json1_1CreateDatasetImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateDatasetImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatasetImportJobCommand = serializeAws_json1_1CreateDatasetImportJobCommand;
async function serializeAws_json1_1CreateEventTrackerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateEventTracker";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEventTrackerCommand = serializeAws_json1_1CreateEventTrackerCommand;
async function serializeAws_json1_1CreateSchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateSchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSchemaCommand = serializeAws_json1_1CreateSchemaCommand;
async function serializeAws_json1_1CreateSolutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateSolution";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSolutionCommand = serializeAws_json1_1CreateSolutionCommand;
async function serializeAws_json1_1CreateSolutionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.CreateSolutionVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSolutionVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSolutionVersionCommand = serializeAws_json1_1CreateSolutionVersionCommand;
async function serializeAws_json1_1DeleteCampaignCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteCampaign";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCampaignCommand = serializeAws_json1_1DeleteCampaignCommand;
async function serializeAws_json1_1DeleteDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatasetCommand = serializeAws_json1_1DeleteDatasetCommand;
async function serializeAws_json1_1DeleteDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatasetGroupCommand = serializeAws_json1_1DeleteDatasetGroupCommand;
async function serializeAws_json1_1DeleteEventTrackerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteEventTracker";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEventTrackerCommand = serializeAws_json1_1DeleteEventTrackerCommand;
async function serializeAws_json1_1DeleteSchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteSchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSchemaCommand = serializeAws_json1_1DeleteSchemaCommand;
async function serializeAws_json1_1DeleteSolutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DeleteSolution";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSolutionCommand = serializeAws_json1_1DeleteSolutionCommand;
async function serializeAws_json1_1DescribeAlgorithmCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeAlgorithm";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAlgorithmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAlgorithmCommand = serializeAws_json1_1DescribeAlgorithmCommand;
async function serializeAws_json1_1DescribeBatchInferenceJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeBatchInferenceJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBatchInferenceJobCommand = serializeAws_json1_1DescribeBatchInferenceJobCommand;
async function serializeAws_json1_1DescribeCampaignCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeCampaign";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCampaignCommand = serializeAws_json1_1DescribeCampaignCommand;
async function serializeAws_json1_1DescribeDatasetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDataset";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetCommand = serializeAws_json1_1DescribeDatasetCommand;
async function serializeAws_json1_1DescribeDatasetGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDatasetGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetGroupCommand = serializeAws_json1_1DescribeDatasetGroupCommand;
async function serializeAws_json1_1DescribeDatasetImportJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDatasetImportJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDatasetImportJobCommand = serializeAws_json1_1DescribeDatasetImportJobCommand;
async function serializeAws_json1_1DescribeEventTrackerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeEventTracker";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTrackerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEventTrackerCommand = serializeAws_json1_1DescribeEventTrackerCommand;
async function serializeAws_json1_1DescribeFeatureTransformationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeFeatureTransformation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFeatureTransformationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFeatureTransformationCommand = serializeAws_json1_1DescribeFeatureTransformationCommand;
async function serializeAws_json1_1DescribeRecipeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeRecipe";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRecipeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRecipeCommand = serializeAws_json1_1DescribeRecipeCommand;
async function serializeAws_json1_1DescribeSchemaCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSchema";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSchemaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSchemaCommand = serializeAws_json1_1DescribeSchemaCommand;
async function serializeAws_json1_1DescribeSolutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSolution";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSolutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSolutionCommand = serializeAws_json1_1DescribeSolutionCommand;
async function serializeAws_json1_1DescribeSolutionVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSolutionVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSolutionVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSolutionVersionCommand = serializeAws_json1_1DescribeSolutionVersionCommand;
async function serializeAws_json1_1GetSolutionMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.GetSolutionMetrics";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSolutionMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSolutionMetricsCommand = serializeAws_json1_1GetSolutionMetricsCommand;
async function serializeAws_json1_1ListBatchInferenceJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListBatchInferenceJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBatchInferenceJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBatchInferenceJobsCommand = serializeAws_json1_1ListBatchInferenceJobsCommand;
async function serializeAws_json1_1ListCampaignsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListCampaigns";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCampaignsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCampaignsCommand = serializeAws_json1_1ListCampaignsCommand;
async function serializeAws_json1_1ListDatasetGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasetGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetGroupsCommand = serializeAws_json1_1ListDatasetGroupsCommand;
async function serializeAws_json1_1ListDatasetImportJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasetImportJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetImportJobsCommand = serializeAws_json1_1ListDatasetImportJobsCommand;
async function serializeAws_json1_1ListDatasetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDatasetsCommand = serializeAws_json1_1ListDatasetsCommand;
async function serializeAws_json1_1ListEventTrackersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListEventTrackers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventTrackersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEventTrackersCommand = serializeAws_json1_1ListEventTrackersCommand;
async function serializeAws_json1_1ListRecipesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListRecipes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRecipesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRecipesCommand = serializeAws_json1_1ListRecipesCommand;
async function serializeAws_json1_1ListSchemasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListSchemas";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSchemasCommand = serializeAws_json1_1ListSchemasCommand;
async function serializeAws_json1_1ListSolutionVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListSolutionVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSolutionVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSolutionVersionsCommand = serializeAws_json1_1ListSolutionVersionsCommand;
async function serializeAws_json1_1ListSolutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.ListSolutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSolutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSolutionsCommand = serializeAws_json1_1ListSolutionsCommand;
async function serializeAws_json1_1UpdateCampaignCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonPersonalize.UpdateCampaign";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCampaignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCampaignCommand = serializeAws_json1_1UpdateCampaignCommand;
async function deserializeAws_json1_1CreateBatchInferenceJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBatchInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBatchInferenceJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBatchInferenceJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBatchInferenceJobCommand = deserializeAws_json1_1CreateBatchInferenceJobCommand;
async function deserializeAws_json1_1CreateBatchInferenceJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateCampaignCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCampaignResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCampaignResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCampaignCommand = deserializeAws_json1_1CreateCampaignCommand;
async function deserializeAws_json1_1CreateCampaignCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateEventTrackerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEventTrackerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventTrackerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEventTrackerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEventTrackerCommand = deserializeAws_json1_1CreateEventTrackerCommand;
async function deserializeAws_json1_1CreateEventTrackerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateSchemaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSchemaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSchemaCommand = deserializeAws_json1_1CreateSchemaCommand;
async function deserializeAws_json1_1CreateSchemaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
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
async function deserializeAws_json1_1CreateSolutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSolutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSolutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSolutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSolutionCommand = deserializeAws_json1_1CreateSolutionCommand;
async function deserializeAws_json1_1CreateSolutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1CreateSolutionVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSolutionVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSolutionVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSolutionVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSolutionVersionCommand = deserializeAws_json1_1CreateSolutionVersionCommand;
async function deserializeAws_json1_1CreateSolutionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteCampaignCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCampaignCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCampaignCommand = deserializeAws_json1_1DeleteCampaignCommand;
async function deserializeAws_json1_1DeleteCampaignCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteEventTrackerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEventTrackerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEventTrackerCommand = deserializeAws_json1_1DeleteEventTrackerCommand;
async function deserializeAws_json1_1DeleteEventTrackerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteSchemaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSchemaCommand = deserializeAws_json1_1DeleteSchemaCommand;
async function deserializeAws_json1_1DeleteSchemaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DeleteSolutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSolutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSolutionCommand = deserializeAws_json1_1DeleteSolutionCommand;
async function deserializeAws_json1_1DeleteSolutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeAlgorithmCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAlgorithmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAlgorithmResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAlgorithmResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAlgorithmCommand = deserializeAws_json1_1DescribeAlgorithmCommand;
async function deserializeAws_json1_1DescribeAlgorithmCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeBatchInferenceJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBatchInferenceJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBatchInferenceJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBatchInferenceJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBatchInferenceJobCommand = deserializeAws_json1_1DescribeBatchInferenceJobCommand;
async function deserializeAws_json1_1DescribeBatchInferenceJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeCampaignCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCampaignResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCampaignResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCampaignCommand = deserializeAws_json1_1DescribeCampaignCommand;
async function deserializeAws_json1_1DescribeCampaignCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeEventTrackerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEventTrackerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTrackerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEventTrackerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEventTrackerCommand = deserializeAws_json1_1DescribeEventTrackerCommand;
async function deserializeAws_json1_1DescribeEventTrackerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeFeatureTransformationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFeatureTransformationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFeatureTransformationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFeatureTransformationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFeatureTransformationCommand = deserializeAws_json1_1DescribeFeatureTransformationCommand;
async function deserializeAws_json1_1DescribeFeatureTransformationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeRecipeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRecipeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRecipeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRecipeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRecipeCommand = deserializeAws_json1_1DescribeRecipeCommand;
async function deserializeAws_json1_1DescribeRecipeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeSchemaCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSchemaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSchemaResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSchemaResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSchemaCommand = deserializeAws_json1_1DescribeSchemaCommand;
async function deserializeAws_json1_1DescribeSchemaCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeSolutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSolutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSolutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSolutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSolutionCommand = deserializeAws_json1_1DescribeSolutionCommand;
async function deserializeAws_json1_1DescribeSolutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1DescribeSolutionVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSolutionVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSolutionVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSolutionVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSolutionVersionCommand = deserializeAws_json1_1DescribeSolutionVersionCommand;
async function deserializeAws_json1_1DescribeSolutionVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1GetSolutionMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSolutionMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSolutionMetricsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSolutionMetricsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSolutionMetricsCommand = deserializeAws_json1_1GetSolutionMetricsCommand;
async function deserializeAws_json1_1GetSolutionMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListBatchInferenceJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBatchInferenceJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBatchInferenceJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBatchInferenceJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBatchInferenceJobsCommand = deserializeAws_json1_1ListBatchInferenceJobsCommand;
async function deserializeAws_json1_1ListBatchInferenceJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListCampaignsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCampaignsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCampaignsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCampaignsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCampaignsCommand = deserializeAws_json1_1ListCampaignsCommand;
async function deserializeAws_json1_1ListCampaignsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListEventTrackersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEventTrackersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventTrackersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEventTrackersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEventTrackersCommand = deserializeAws_json1_1ListEventTrackersCommand;
async function deserializeAws_json1_1ListEventTrackersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListRecipesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRecipesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRecipesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRecipesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRecipesCommand = deserializeAws_json1_1ListRecipesCommand;
async function deserializeAws_json1_1ListRecipesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListSchemasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSchemasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSchemasResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSchemasResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSchemasCommand = deserializeAws_json1_1ListSchemasCommand;
async function deserializeAws_json1_1ListSchemasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1ListSolutionVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSolutionVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSolutionVersionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSolutionVersionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSolutionVersionsCommand = deserializeAws_json1_1ListSolutionVersionsCommand;
async function deserializeAws_json1_1ListSolutionVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListSolutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSolutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSolutionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSolutionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSolutionsCommand = deserializeAws_json1_1ListSolutionsCommand;
async function deserializeAws_json1_1ListSolutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
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
async function deserializeAws_json1_1UpdateCampaignCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCampaignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCampaignResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCampaignResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCampaignCommand = deserializeAws_json1_1UpdateCampaignCommand;
async function deserializeAws_json1_1UpdateCampaignCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
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
const serializeAws_json1_1AutoMLConfig = (input, context) => {
    const bodyParams = {};
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.recipeList !== undefined) {
        bodyParams["recipeList"] = serializeAws_json1_1ArnList(input.recipeList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchInferenceJobInput = (input, context) => {
    const bodyParams = {};
    if (input.s3DataSource !== undefined) {
        bodyParams["s3DataSource"] = serializeAws_json1_1S3DataConfig(input.s3DataSource, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchInferenceJobOutput = (input, context) => {
    const bodyParams = {};
    if (input.s3DataDestination !== undefined) {
        bodyParams["s3DataDestination"] = serializeAws_json1_1S3DataConfig(input.s3DataDestination, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CategoricalHyperParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1CategoricalValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CategoricalHyperParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CategoricalHyperParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CategoricalValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContinuousHyperParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.maxValue !== undefined) {
        bodyParams["maxValue"] = input.maxValue;
    }
    if (input.minValue !== undefined) {
        bodyParams["minValue"] = input.minValue;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1ContinuousHyperParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContinuousHyperParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateBatchInferenceJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.jobInput !== undefined) {
        bodyParams["jobInput"] = serializeAws_json1_1BatchInferenceJobInput(input.jobInput, context);
    }
    if (input.jobName !== undefined) {
        bodyParams["jobName"] = input.jobName;
    }
    if (input.jobOutput !== undefined) {
        bodyParams["jobOutput"] = serializeAws_json1_1BatchInferenceJobOutput(input.jobOutput, context);
    }
    if (input.numResults !== undefined) {
        bodyParams["numResults"] = input.numResults;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCampaignRequest = (input, context) => {
    const bodyParams = {};
    if (input.minProvisionedTPS !== undefined) {
        bodyParams["minProvisionedTPS"] = input.minProvisionedTPS;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.kmsKeyArn !== undefined) {
        bodyParams["kmsKeyArn"] = input.kmsKeyArn;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatasetImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.dataSource !== undefined) {
        bodyParams["dataSource"] = serializeAws_json1_1DataSource(input.dataSource, context);
    }
    if (input.datasetArn !== undefined) {
        bodyParams["datasetArn"] = input.datasetArn;
    }
    if (input.jobName !== undefined) {
        bodyParams["jobName"] = input.jobName;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.datasetType !== undefined) {
        bodyParams["datasetType"] = input.datasetType;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.schemaArn !== undefined) {
        bodyParams["schemaArn"] = input.schemaArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEventTrackerRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSchemaRequest = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.schema !== undefined) {
        bodyParams["schema"] = input.schema;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSolutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.eventType !== undefined) {
        bodyParams["eventType"] = input.eventType;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.performAutoML !== undefined) {
        bodyParams["performAutoML"] = input.performAutoML;
    }
    if (input.performHPO !== undefined) {
        bodyParams["performHPO"] = input.performHPO;
    }
    if (input.recipeArn !== undefined) {
        bodyParams["recipeArn"] = input.recipeArn;
    }
    if (input.solutionConfig !== undefined) {
        bodyParams["solutionConfig"] = serializeAws_json1_1SolutionConfig(input.solutionConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSolutionVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.solutionArn !== undefined) {
        bodyParams["solutionArn"] = input.solutionArn;
    }
    if (input.trainingMode !== undefined) {
        bodyParams["trainingMode"] = input.trainingMode;
    }
    return bodyParams;
};
const serializeAws_json1_1DataSource = (input, context) => {
    const bodyParams = {};
    if (input.dataLocation !== undefined) {
        bodyParams["dataLocation"] = input.dataLocation;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCampaignRequest = (input, context) => {
    const bodyParams = {};
    if (input.campaignArn !== undefined) {
        bodyParams["campaignArn"] = input.campaignArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetArn !== undefined) {
        bodyParams["datasetArn"] = input.datasetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEventTrackerRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventTrackerArn !== undefined) {
        bodyParams["eventTrackerArn"] = input.eventTrackerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSchemaRequest = (input, context) => {
    const bodyParams = {};
    if (input.schemaArn !== undefined) {
        bodyParams["schemaArn"] = input.schemaArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSolutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.solutionArn !== undefined) {
        bodyParams["solutionArn"] = input.solutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAlgorithmRequest = (input, context) => {
    const bodyParams = {};
    if (input.algorithmArn !== undefined) {
        bodyParams["algorithmArn"] = input.algorithmArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBatchInferenceJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.batchInferenceJobArn !== undefined) {
        bodyParams["batchInferenceJobArn"] = input.batchInferenceJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCampaignRequest = (input, context) => {
    const bodyParams = {};
    if (input.campaignArn !== undefined) {
        bodyParams["campaignArn"] = input.campaignArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetImportJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetImportJobArn !== undefined) {
        bodyParams["datasetImportJobArn"] = input.datasetImportJobArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDatasetRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetArn !== undefined) {
        bodyParams["datasetArn"] = input.datasetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEventTrackerRequest = (input, context) => {
    const bodyParams = {};
    if (input.eventTrackerArn !== undefined) {
        bodyParams["eventTrackerArn"] = input.eventTrackerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFeatureTransformationRequest = (input, context) => {
    const bodyParams = {};
    if (input.featureTransformationArn !== undefined) {
        bodyParams["featureTransformationArn"] = input.featureTransformationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRecipeRequest = (input, context) => {
    const bodyParams = {};
    if (input.recipeArn !== undefined) {
        bodyParams["recipeArn"] = input.recipeArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSchemaRequest = (input, context) => {
    const bodyParams = {};
    if (input.schemaArn !== undefined) {
        bodyParams["schemaArn"] = input.schemaArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSolutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.solutionArn !== undefined) {
        bodyParams["solutionArn"] = input.solutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSolutionVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1FeatureTransformationParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1GetSolutionMetricsRequest = (input, context) => {
    const bodyParams = {};
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1HPOConfig = (input, context) => {
    const bodyParams = {};
    if (input.algorithmHyperParameterRanges !== undefined) {
        bodyParams["algorithmHyperParameterRanges"] = serializeAws_json1_1HyperParameterRanges(input.algorithmHyperParameterRanges, context);
    }
    if (input.hpoObjective !== undefined) {
        bodyParams["hpoObjective"] = serializeAws_json1_1HPOObjective(input.hpoObjective, context);
    }
    if (input.hpoResourceConfig !== undefined) {
        bodyParams["hpoResourceConfig"] = serializeAws_json1_1HPOResourceConfig(input.hpoResourceConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HPOObjective = (input, context) => {
    const bodyParams = {};
    if (input.metricName !== undefined) {
        bodyParams["metricName"] = input.metricName;
    }
    if (input.metricRegex !== undefined) {
        bodyParams["metricRegex"] = input.metricRegex;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1HPOResourceConfig = (input, context) => {
    const bodyParams = {};
    if (input.maxNumberOfTrainingJobs !== undefined) {
        bodyParams["maxNumberOfTrainingJobs"] = input.maxNumberOfTrainingJobs;
    }
    if (input.maxParallelTrainingJobs !== undefined) {
        bodyParams["maxParallelTrainingJobs"] = input.maxParallelTrainingJobs;
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameterRanges = (input, context) => {
    const bodyParams = {};
    if (input.categoricalHyperParameterRanges !== undefined) {
        bodyParams["categoricalHyperParameterRanges"] = serializeAws_json1_1CategoricalHyperParameterRanges(input.categoricalHyperParameterRanges, context);
    }
    if (input.continuousHyperParameterRanges !== undefined) {
        bodyParams["continuousHyperParameterRanges"] = serializeAws_json1_1ContinuousHyperParameterRanges(input.continuousHyperParameterRanges, context);
    }
    if (input.integerHyperParameterRanges !== undefined) {
        bodyParams["integerHyperParameterRanges"] = serializeAws_json1_1IntegerHyperParameterRanges(input.integerHyperParameterRanges, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HyperParameters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1IntegerHyperParameterRange = (input, context) => {
    const bodyParams = {};
    if (input.maxValue !== undefined) {
        bodyParams["maxValue"] = input.maxValue;
    }
    if (input.minValue !== undefined) {
        bodyParams["minValue"] = input.minValue;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1IntegerHyperParameterRanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IntegerHyperParameterRange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListBatchInferenceJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCampaignsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.solutionArn !== undefined) {
        bodyParams["solutionArn"] = input.solutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDatasetGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDatasetImportJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetArn !== undefined) {
        bodyParams["datasetArn"] = input.datasetArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDatasetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEventTrackersRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRecipesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.recipeProvider !== undefined) {
        bodyParams["recipeProvider"] = input.recipeProvider;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSchemasRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSolutionVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.solutionArn !== undefined) {
        bodyParams["solutionArn"] = input.solutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSolutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.datasetGroupArn !== undefined) {
        bodyParams["datasetGroupArn"] = input.datasetGroupArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1S3DataConfig = (input, context) => {
    const bodyParams = {};
    if (input.kmsKeyArn !== undefined) {
        bodyParams["kmsKeyArn"] = input.kmsKeyArn;
    }
    if (input.path !== undefined) {
        bodyParams["path"] = input.path;
    }
    return bodyParams;
};
const serializeAws_json1_1SolutionConfig = (input, context) => {
    const bodyParams = {};
    if (input.algorithmHyperParameters !== undefined) {
        bodyParams["algorithmHyperParameters"] = serializeAws_json1_1HyperParameters(input.algorithmHyperParameters, context);
    }
    if (input.autoMLConfig !== undefined) {
        bodyParams["autoMLConfig"] = serializeAws_json1_1AutoMLConfig(input.autoMLConfig, context);
    }
    if (input.eventValueThreshold !== undefined) {
        bodyParams["eventValueThreshold"] = input.eventValueThreshold;
    }
    if (input.featureTransformationParameters !== undefined) {
        bodyParams["featureTransformationParameters"] = serializeAws_json1_1FeatureTransformationParameters(input.featureTransformationParameters, context);
    }
    if (input.hpoConfig !== undefined) {
        bodyParams["hpoConfig"] = serializeAws_json1_1HPOConfig(input.hpoConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCampaignRequest = (input, context) => {
    const bodyParams = {};
    if (input.campaignArn !== undefined) {
        bodyParams["campaignArn"] = input.campaignArn;
    }
    if (input.minProvisionedTPS !== undefined) {
        bodyParams["minProvisionedTPS"] = input.minProvisionedTPS;
    }
    if (input.solutionVersionArn !== undefined) {
        bodyParams["solutionVersionArn"] = input.solutionVersionArn;
    }
    return bodyParams;
};
const deserializeAws_json1_1Algorithm = (output, context) => {
    let contents = {
        __type: "Algorithm",
        algorithmArn: undefined,
        algorithmImage: undefined,
        creationDateTime: undefined,
        defaultHyperParameterRanges: undefined,
        defaultHyperParameters: undefined,
        defaultResourceConfig: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        roleArn: undefined,
        trainingInputMode: undefined
    };
    if (output.algorithmArn !== undefined && output.algorithmArn !== null) {
        contents.algorithmArn = output.algorithmArn;
    }
    if (output.algorithmImage !== undefined && output.algorithmImage !== null) {
        contents.algorithmImage = deserializeAws_json1_1AlgorithmImage(output.algorithmImage, context);
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.defaultHyperParameterRanges !== undefined &&
        output.defaultHyperParameterRanges !== null) {
        contents.defaultHyperParameterRanges = deserializeAws_json1_1DefaultHyperParameterRanges(output.defaultHyperParameterRanges, context);
    }
    if (output.defaultHyperParameters !== undefined &&
        output.defaultHyperParameters !== null) {
        contents.defaultHyperParameters = deserializeAws_json1_1HyperParameters(output.defaultHyperParameters, context);
    }
    if (output.defaultResourceConfig !== undefined &&
        output.defaultResourceConfig !== null) {
        contents.defaultResourceConfig = deserializeAws_json1_1ResourceConfig(output.defaultResourceConfig, context);
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.trainingInputMode !== undefined &&
        output.trainingInputMode !== null) {
        contents.trainingInputMode = output.trainingInputMode;
    }
    return contents;
};
const deserializeAws_json1_1AlgorithmImage = (output, context) => {
    let contents = {
        __type: "AlgorithmImage",
        dockerURI: undefined,
        name: undefined
    };
    if (output.dockerURI !== undefined && output.dockerURI !== null) {
        contents.dockerURI = output.dockerURI;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AutoMLConfig = (output, context) => {
    let contents = {
        __type: "AutoMLConfig",
        metricName: undefined,
        recipeList: undefined
    };
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    if (output.recipeList !== undefined && output.recipeList !== null) {
        contents.recipeList = deserializeAws_json1_1ArnList(output.recipeList, context);
    }
    return contents;
};
const deserializeAws_json1_1AutoMLResult = (output, context) => {
    let contents = {
        __type: "AutoMLResult",
        bestRecipeArn: undefined
    };
    if (output.bestRecipeArn !== undefined && output.bestRecipeArn !== null) {
        contents.bestRecipeArn = output.bestRecipeArn;
    }
    return contents;
};
const deserializeAws_json1_1BatchInferenceJob = (output, context) => {
    let contents = {
        __type: "BatchInferenceJob",
        batchInferenceJobArn: undefined,
        creationDateTime: undefined,
        failureReason: undefined,
        jobInput: undefined,
        jobName: undefined,
        jobOutput: undefined,
        lastUpdatedDateTime: undefined,
        numResults: undefined,
        roleArn: undefined,
        solutionVersionArn: undefined,
        status: undefined
    };
    if (output.batchInferenceJobArn !== undefined &&
        output.batchInferenceJobArn !== null) {
        contents.batchInferenceJobArn = output.batchInferenceJobArn;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.jobInput !== undefined && output.jobInput !== null) {
        contents.jobInput = deserializeAws_json1_1BatchInferenceJobInput(output.jobInput, context);
    }
    if (output.jobName !== undefined && output.jobName !== null) {
        contents.jobName = output.jobName;
    }
    if (output.jobOutput !== undefined && output.jobOutput !== null) {
        contents.jobOutput = deserializeAws_json1_1BatchInferenceJobOutput(output.jobOutput, context);
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.numResults !== undefined && output.numResults !== null) {
        contents.numResults = output.numResults;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1BatchInferenceJobInput = (output, context) => {
    let contents = {
        __type: "BatchInferenceJobInput",
        s3DataSource: undefined
    };
    if (output.s3DataSource !== undefined && output.s3DataSource !== null) {
        contents.s3DataSource = deserializeAws_json1_1S3DataConfig(output.s3DataSource, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchInferenceJobOutput = (output, context) => {
    let contents = {
        __type: "BatchInferenceJobOutput",
        s3DataDestination: undefined
    };
    if (output.s3DataDestination !== undefined &&
        output.s3DataDestination !== null) {
        contents.s3DataDestination = deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchInferenceJobSummary = (output, context) => {
    let contents = {
        __type: "BatchInferenceJobSummary",
        batchInferenceJobArn: undefined,
        creationDateTime: undefined,
        failureReason: undefined,
        jobName: undefined,
        lastUpdatedDateTime: undefined,
        status: undefined
    };
    if (output.batchInferenceJobArn !== undefined &&
        output.batchInferenceJobArn !== null) {
        contents.batchInferenceJobArn = output.batchInferenceJobArn;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.jobName !== undefined && output.jobName !== null) {
        contents.jobName = output.jobName;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1BatchInferenceJobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchInferenceJobSummary(entry, context));
};
const deserializeAws_json1_1Campaign = (output, context) => {
    let contents = {
        __type: "Campaign",
        campaignArn: undefined,
        creationDateTime: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        latestCampaignUpdate: undefined,
        minProvisionedTPS: undefined,
        name: undefined,
        solutionVersionArn: undefined,
        status: undefined
    };
    if (output.campaignArn !== undefined && output.campaignArn !== null) {
        contents.campaignArn = output.campaignArn;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.latestCampaignUpdate !== undefined &&
        output.latestCampaignUpdate !== null) {
        contents.latestCampaignUpdate = deserializeAws_json1_1CampaignUpdateSummary(output.latestCampaignUpdate, context);
    }
    if (output.minProvisionedTPS !== undefined &&
        output.minProvisionedTPS !== null) {
        contents.minProvisionedTPS = output.minProvisionedTPS;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1CampaignSummary = (output, context) => {
    let contents = {
        __type: "CampaignSummary",
        campaignArn: undefined,
        creationDateTime: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined
    };
    if (output.campaignArn !== undefined && output.campaignArn !== null) {
        contents.campaignArn = output.campaignArn;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1CampaignUpdateSummary = (output, context) => {
    let contents = {
        __type: "CampaignUpdateSummary",
        creationDateTime: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        minProvisionedTPS: undefined,
        solutionVersionArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.minProvisionedTPS !== undefined &&
        output.minProvisionedTPS !== null) {
        contents.minProvisionedTPS = output.minProvisionedTPS;
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1Campaigns = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CampaignSummary(entry, context));
};
const deserializeAws_json1_1CategoricalHyperParameterRange = (output, context) => {
    let contents = {
        __type: "CategoricalHyperParameterRange",
        name: undefined,
        values: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.values !== undefined && output.values !== null) {
        contents.values = deserializeAws_json1_1CategoricalValues(output.values, context);
    }
    return contents;
};
const deserializeAws_json1_1CategoricalHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CategoricalHyperParameterRange(entry, context));
};
const deserializeAws_json1_1CategoricalValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ContinuousHyperParameterRange = (output, context) => {
    let contents = {
        __type: "ContinuousHyperParameterRange",
        maxValue: undefined,
        minValue: undefined,
        name: undefined
    };
    if (output.maxValue !== undefined && output.maxValue !== null) {
        contents.maxValue = output.maxValue;
    }
    if (output.minValue !== undefined && output.minValue !== null) {
        contents.minValue = output.minValue;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ContinuousHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContinuousHyperParameterRange(entry, context));
};
const deserializeAws_json1_1CreateBatchInferenceJobResponse = (output, context) => {
    let contents = {
        __type: "CreateBatchInferenceJobResponse",
        batchInferenceJobArn: undefined
    };
    if (output.batchInferenceJobArn !== undefined &&
        output.batchInferenceJobArn !== null) {
        contents.batchInferenceJobArn = output.batchInferenceJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateCampaignResponse = (output, context) => {
    let contents = {
        __type: "CreateCampaignResponse",
        campaignArn: undefined
    };
    if (output.campaignArn !== undefined && output.campaignArn !== null) {
        contents.campaignArn = output.campaignArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDatasetGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetGroupResponse",
        datasetGroupArn: undefined
    };
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDatasetImportJobResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetImportJobResponse",
        datasetImportJobArn: undefined
    };
    if (output.datasetImportJobArn !== undefined &&
        output.datasetImportJobArn !== null) {
        contents.datasetImportJobArn = output.datasetImportJobArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDatasetResponse = (output, context) => {
    let contents = {
        __type: "CreateDatasetResponse",
        datasetArn: undefined
    };
    if (output.datasetArn !== undefined && output.datasetArn !== null) {
        contents.datasetArn = output.datasetArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateEventTrackerResponse = (output, context) => {
    let contents = {
        __type: "CreateEventTrackerResponse",
        eventTrackerArn: undefined,
        trackingId: undefined
    };
    if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
        contents.eventTrackerArn = output.eventTrackerArn;
    }
    if (output.trackingId !== undefined && output.trackingId !== null) {
        contents.trackingId = output.trackingId;
    }
    return contents;
};
const deserializeAws_json1_1CreateSchemaResponse = (output, context) => {
    let contents = {
        __type: "CreateSchemaResponse",
        schemaArn: undefined
    };
    if (output.schemaArn !== undefined && output.schemaArn !== null) {
        contents.schemaArn = output.schemaArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateSolutionResponse = (output, context) => {
    let contents = {
        __type: "CreateSolutionResponse",
        solutionArn: undefined
    };
    if (output.solutionArn !== undefined && output.solutionArn !== null) {
        contents.solutionArn = output.solutionArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateSolutionVersionResponse = (output, context) => {
    let contents = {
        __type: "CreateSolutionVersionResponse",
        solutionVersionArn: undefined
    };
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    return contents;
};
const deserializeAws_json1_1DataSource = (output, context) => {
    let contents = {
        __type: "DataSource",
        dataLocation: undefined
    };
    if (output.dataLocation !== undefined && output.dataLocation !== null) {
        contents.dataLocation = output.dataLocation;
    }
    return contents;
};
const deserializeAws_json1_1Dataset = (output, context) => {
    let contents = {
        __type: "Dataset",
        creationDateTime: undefined,
        datasetArn: undefined,
        datasetGroupArn: undefined,
        datasetType: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        schemaArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetArn !== undefined && output.datasetArn !== null) {
        contents.datasetArn = output.datasetArn;
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.datasetType !== undefined && output.datasetType !== null) {
        contents.datasetType = output.datasetType;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.schemaArn !== undefined && output.schemaArn !== null) {
        contents.schemaArn = output.schemaArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetGroup = (output, context) => {
    let contents = {
        __type: "DatasetGroup",
        creationDateTime: undefined,
        datasetGroupArn: undefined,
        failureReason: undefined,
        kmsKeyArn: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        roleArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
        contents.kmsKeyArn = output.kmsKeyArn;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetGroupSummary = (output, context) => {
    let contents = {
        __type: "DatasetGroupSummary",
        creationDateTime: undefined,
        datasetGroupArn: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetGroupSummary(entry, context));
};
const deserializeAws_json1_1DatasetImportJob = (output, context) => {
    let contents = {
        __type: "DatasetImportJob",
        creationDateTime: undefined,
        dataSource: undefined,
        datasetArn: undefined,
        datasetImportJobArn: undefined,
        failureReason: undefined,
        jobName: undefined,
        lastUpdatedDateTime: undefined,
        roleArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.dataSource !== undefined && output.dataSource !== null) {
        contents.dataSource = deserializeAws_json1_1DataSource(output.dataSource, context);
    }
    if (output.datasetArn !== undefined && output.datasetArn !== null) {
        contents.datasetArn = output.datasetArn;
    }
    if (output.datasetImportJobArn !== undefined &&
        output.datasetImportJobArn !== null) {
        contents.datasetImportJobArn = output.datasetImportJobArn;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.jobName !== undefined && output.jobName !== null) {
        contents.jobName = output.jobName;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetImportJobSummary = (output, context) => {
    let contents = {
        __type: "DatasetImportJobSummary",
        creationDateTime: undefined,
        datasetImportJobArn: undefined,
        failureReason: undefined,
        jobName: undefined,
        lastUpdatedDateTime: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetImportJobArn !== undefined &&
        output.datasetImportJobArn !== null) {
        contents.datasetImportJobArn = output.datasetImportJobArn;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.jobName !== undefined && output.jobName !== null) {
        contents.jobName = output.jobName;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1DatasetImportJobs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetImportJobSummary(entry, context));
};
const deserializeAws_json1_1DatasetSchema = (output, context) => {
    let contents = {
        __type: "DatasetSchema",
        creationDateTime: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        schema: undefined,
        schemaArn: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.schema !== undefined && output.schema !== null) {
        contents.schema = output.schema;
    }
    if (output.schemaArn !== undefined && output.schemaArn !== null) {
        contents.schemaArn = output.schemaArn;
    }
    return contents;
};
const deserializeAws_json1_1DatasetSchemaSummary = (output, context) => {
    let contents = {
        __type: "DatasetSchemaSummary",
        creationDateTime: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        schemaArn: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.schemaArn !== undefined && output.schemaArn !== null) {
        contents.schemaArn = output.schemaArn;
    }
    return contents;
};
const deserializeAws_json1_1DatasetSummary = (output, context) => {
    let contents = {
        __type: "DatasetSummary",
        creationDateTime: undefined,
        datasetArn: undefined,
        datasetType: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetArn !== undefined && output.datasetArn !== null) {
        contents.datasetArn = output.datasetArn;
    }
    if (output.datasetType !== undefined && output.datasetType !== null) {
        contents.datasetType = output.datasetType;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1Datasets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetSummary(entry, context));
};
const deserializeAws_json1_1DefaultCategoricalHyperParameterRange = (output, context) => {
    let contents = {
        __type: "DefaultCategoricalHyperParameterRange",
        isTunable: undefined,
        name: undefined,
        values: undefined
    };
    if (output.isTunable !== undefined && output.isTunable !== null) {
        contents.isTunable = output.isTunable;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.values !== undefined && output.values !== null) {
        contents.values = deserializeAws_json1_1CategoricalValues(output.values, context);
    }
    return contents;
};
const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context));
};
const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (output, context) => {
    let contents = {
        __type: "DefaultContinuousHyperParameterRange",
        isTunable: undefined,
        maxValue: undefined,
        minValue: undefined,
        name: undefined
    };
    if (output.isTunable !== undefined && output.isTunable !== null) {
        contents.isTunable = output.isTunable;
    }
    if (output.maxValue !== undefined && output.maxValue !== null) {
        contents.maxValue = output.maxValue;
    }
    if (output.minValue !== undefined && output.minValue !== null) {
        contents.minValue = output.minValue;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context));
};
const deserializeAws_json1_1DefaultHyperParameterRanges = (output, context) => {
    let contents = {
        __type: "DefaultHyperParameterRanges",
        categoricalHyperParameterRanges: undefined,
        continuousHyperParameterRanges: undefined,
        integerHyperParameterRanges: undefined
    };
    if (output.categoricalHyperParameterRanges !== undefined &&
        output.categoricalHyperParameterRanges !== null) {
        contents.categoricalHyperParameterRanges = deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context);
    }
    if (output.continuousHyperParameterRanges !== undefined &&
        output.continuousHyperParameterRanges !== null) {
        contents.continuousHyperParameterRanges = deserializeAws_json1_1DefaultContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context);
    }
    if (output.integerHyperParameterRanges !== undefined &&
        output.integerHyperParameterRanges !== null) {
        contents.integerHyperParameterRanges = deserializeAws_json1_1DefaultIntegerHyperParameterRanges(output.integerHyperParameterRanges, context);
    }
    return contents;
};
const deserializeAws_json1_1DefaultIntegerHyperParameterRange = (output, context) => {
    let contents = {
        __type: "DefaultIntegerHyperParameterRange",
        isTunable: undefined,
        maxValue: undefined,
        minValue: undefined,
        name: undefined
    };
    if (output.isTunable !== undefined && output.isTunable !== null) {
        contents.isTunable = output.isTunable;
    }
    if (output.maxValue !== undefined && output.maxValue !== null) {
        contents.maxValue = output.maxValue;
    }
    if (output.minValue !== undefined && output.minValue !== null) {
        contents.minValue = output.minValue;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context));
};
const deserializeAws_json1_1DescribeAlgorithmResponse = (output, context) => {
    let contents = {
        __type: "DescribeAlgorithmResponse",
        algorithm: undefined
    };
    if (output.algorithm !== undefined && output.algorithm !== null) {
        contents.algorithm = deserializeAws_json1_1Algorithm(output.algorithm, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeBatchInferenceJobResponse",
        batchInferenceJob: undefined
    };
    if (output.batchInferenceJob !== undefined &&
        output.batchInferenceJob !== null) {
        contents.batchInferenceJob = deserializeAws_json1_1BatchInferenceJob(output.batchInferenceJob, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCampaignResponse = (output, context) => {
    let contents = {
        __type: "DescribeCampaignResponse",
        campaign: undefined
    };
    if (output.campaign !== undefined && output.campaign !== null) {
        contents.campaign = deserializeAws_json1_1Campaign(output.campaign, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDatasetGroupResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetGroupResponse",
        datasetGroup: undefined
    };
    if (output.datasetGroup !== undefined && output.datasetGroup !== null) {
        contents.datasetGroup = deserializeAws_json1_1DatasetGroup(output.datasetGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDatasetImportJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetImportJobResponse",
        datasetImportJob: undefined
    };
    if (output.datasetImportJob !== undefined &&
        output.datasetImportJob !== null) {
        contents.datasetImportJob = deserializeAws_json1_1DatasetImportJob(output.datasetImportJob, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDatasetResponse = (output, context) => {
    let contents = {
        __type: "DescribeDatasetResponse",
        dataset: undefined
    };
    if (output.dataset !== undefined && output.dataset !== null) {
        contents.dataset = deserializeAws_json1_1Dataset(output.dataset, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEventTrackerResponse = (output, context) => {
    let contents = {
        __type: "DescribeEventTrackerResponse",
        eventTracker: undefined
    };
    if (output.eventTracker !== undefined && output.eventTracker !== null) {
        contents.eventTracker = deserializeAws_json1_1EventTracker(output.eventTracker, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeFeatureTransformationResponse = (output, context) => {
    let contents = {
        __type: "DescribeFeatureTransformationResponse",
        featureTransformation: undefined
    };
    if (output.featureTransformation !== undefined &&
        output.featureTransformation !== null) {
        contents.featureTransformation = deserializeAws_json1_1FeatureTransformation(output.featureTransformation, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRecipeResponse = (output, context) => {
    let contents = {
        __type: "DescribeRecipeResponse",
        recipe: undefined
    };
    if (output.recipe !== undefined && output.recipe !== null) {
        contents.recipe = deserializeAws_json1_1Recipe(output.recipe, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSchemaResponse = (output, context) => {
    let contents = {
        __type: "DescribeSchemaResponse",
        schema: undefined
    };
    if (output.schema !== undefined && output.schema !== null) {
        contents.schema = deserializeAws_json1_1DatasetSchema(output.schema, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSolutionResponse = (output, context) => {
    let contents = {
        __type: "DescribeSolutionResponse",
        solution: undefined
    };
    if (output.solution !== undefined && output.solution !== null) {
        contents.solution = deserializeAws_json1_1Solution(output.solution, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSolutionVersionResponse = (output, context) => {
    let contents = {
        __type: "DescribeSolutionVersionResponse",
        solutionVersion: undefined
    };
    if (output.solutionVersion !== undefined && output.solutionVersion !== null) {
        contents.solutionVersion = deserializeAws_json1_1SolutionVersion(output.solutionVersion, context);
    }
    return contents;
};
const deserializeAws_json1_1EventTracker = (output, context) => {
    let contents = {
        __type: "EventTracker",
        accountId: undefined,
        creationDateTime: undefined,
        datasetGroupArn: undefined,
        eventTrackerArn: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined,
        trackingId: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
        contents.eventTrackerArn = output.eventTrackerArn;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.trackingId !== undefined && output.trackingId !== null) {
        contents.trackingId = output.trackingId;
    }
    return contents;
};
const deserializeAws_json1_1EventTrackerSummary = (output, context) => {
    let contents = {
        __type: "EventTrackerSummary",
        creationDateTime: undefined,
        eventTrackerArn: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
        contents.eventTrackerArn = output.eventTrackerArn;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1EventTrackers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventTrackerSummary(entry, context));
};
const deserializeAws_json1_1FeatureTransformation = (output, context) => {
    let contents = {
        __type: "FeatureTransformation",
        creationDateTime: undefined,
        defaultParameters: undefined,
        featureTransformationArn: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.defaultParameters !== undefined &&
        output.defaultParameters !== null) {
        contents.defaultParameters = deserializeAws_json1_1FeaturizationParameters(output.defaultParameters, context);
    }
    if (output.featureTransformationArn !== undefined &&
        output.featureTransformationArn !== null) {
        contents.featureTransformationArn = output.featureTransformationArn;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1FeatureTransformationParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1FeaturizationParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1GetSolutionMetricsResponse = (output, context) => {
    let contents = {
        __type: "GetSolutionMetricsResponse",
        metrics: undefined,
        solutionVersionArn: undefined
    };
    if (output.metrics !== undefined && output.metrics !== null) {
        contents.metrics = deserializeAws_json1_1Metrics(output.metrics, context);
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    return contents;
};
const deserializeAws_json1_1HPOConfig = (output, context) => {
    let contents = {
        __type: "HPOConfig",
        algorithmHyperParameterRanges: undefined,
        hpoObjective: undefined,
        hpoResourceConfig: undefined
    };
    if (output.algorithmHyperParameterRanges !== undefined &&
        output.algorithmHyperParameterRanges !== null) {
        contents.algorithmHyperParameterRanges = deserializeAws_json1_1HyperParameterRanges(output.algorithmHyperParameterRanges, context);
    }
    if (output.hpoObjective !== undefined && output.hpoObjective !== null) {
        contents.hpoObjective = deserializeAws_json1_1HPOObjective(output.hpoObjective, context);
    }
    if (output.hpoResourceConfig !== undefined &&
        output.hpoResourceConfig !== null) {
        contents.hpoResourceConfig = deserializeAws_json1_1HPOResourceConfig(output.hpoResourceConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1HPOObjective = (output, context) => {
    let contents = {
        __type: "HPOObjective",
        metricName: undefined,
        metricRegex: undefined,
        type: undefined
    };
    if (output.metricName !== undefined && output.metricName !== null) {
        contents.metricName = output.metricName;
    }
    if (output.metricRegex !== undefined && output.metricRegex !== null) {
        contents.metricRegex = output.metricRegex;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1HPOResourceConfig = (output, context) => {
    let contents = {
        __type: "HPOResourceConfig",
        maxNumberOfTrainingJobs: undefined,
        maxParallelTrainingJobs: undefined
    };
    if (output.maxNumberOfTrainingJobs !== undefined &&
        output.maxNumberOfTrainingJobs !== null) {
        contents.maxNumberOfTrainingJobs = output.maxNumberOfTrainingJobs;
    }
    if (output.maxParallelTrainingJobs !== undefined &&
        output.maxParallelTrainingJobs !== null) {
        contents.maxParallelTrainingJobs = output.maxParallelTrainingJobs;
    }
    return contents;
};
const deserializeAws_json1_1HyperParameterRanges = (output, context) => {
    let contents = {
        __type: "HyperParameterRanges",
        categoricalHyperParameterRanges: undefined,
        continuousHyperParameterRanges: undefined,
        integerHyperParameterRanges: undefined
    };
    if (output.categoricalHyperParameterRanges !== undefined &&
        output.categoricalHyperParameterRanges !== null) {
        contents.categoricalHyperParameterRanges = deserializeAws_json1_1CategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context);
    }
    if (output.continuousHyperParameterRanges !== undefined &&
        output.continuousHyperParameterRanges !== null) {
        contents.continuousHyperParameterRanges = deserializeAws_json1_1ContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context);
    }
    if (output.integerHyperParameterRanges !== undefined &&
        output.integerHyperParameterRanges !== null) {
        contents.integerHyperParameterRanges = deserializeAws_json1_1IntegerHyperParameterRanges(output.integerHyperParameterRanges, context);
    }
    return contents;
};
const deserializeAws_json1_1HyperParameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1IntegerHyperParameterRange = (output, context) => {
    let contents = {
        __type: "IntegerHyperParameterRange",
        maxValue: undefined,
        minValue: undefined,
        name: undefined
    };
    if (output.maxValue !== undefined && output.maxValue !== null) {
        contents.maxValue = output.maxValue;
    }
    if (output.minValue !== undefined && output.minValue !== null) {
        contents.minValue = output.minValue;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1IntegerHyperParameterRanges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IntegerHyperParameterRange(entry, context));
};
const deserializeAws_json1_1ListBatchInferenceJobsResponse = (output, context) => {
    let contents = {
        __type: "ListBatchInferenceJobsResponse",
        batchInferenceJobs: undefined,
        nextToken: undefined
    };
    if (output.batchInferenceJobs !== undefined &&
        output.batchInferenceJobs !== null) {
        contents.batchInferenceJobs = deserializeAws_json1_1BatchInferenceJobs(output.batchInferenceJobs, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCampaignsResponse = (output, context) => {
    let contents = {
        __type: "ListCampaignsResponse",
        campaigns: undefined,
        nextToken: undefined
    };
    if (output.campaigns !== undefined && output.campaigns !== null) {
        contents.campaigns = deserializeAws_json1_1Campaigns(output.campaigns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDatasetGroupsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetGroupsResponse",
        datasetGroups: undefined,
        nextToken: undefined
    };
    if (output.datasetGroups !== undefined && output.datasetGroups !== null) {
        contents.datasetGroups = deserializeAws_json1_1DatasetGroups(output.datasetGroups, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDatasetImportJobsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetImportJobsResponse",
        datasetImportJobs: undefined,
        nextToken: undefined
    };
    if (output.datasetImportJobs !== undefined &&
        output.datasetImportJobs !== null) {
        contents.datasetImportJobs = deserializeAws_json1_1DatasetImportJobs(output.datasetImportJobs, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDatasetsResponse = (output, context) => {
    let contents = {
        __type: "ListDatasetsResponse",
        datasets: undefined,
        nextToken: undefined
    };
    if (output.datasets !== undefined && output.datasets !== null) {
        contents.datasets = deserializeAws_json1_1Datasets(output.datasets, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEventTrackersResponse = (output, context) => {
    let contents = {
        __type: "ListEventTrackersResponse",
        eventTrackers: undefined,
        nextToken: undefined
    };
    if (output.eventTrackers !== undefined && output.eventTrackers !== null) {
        contents.eventTrackers = deserializeAws_json1_1EventTrackers(output.eventTrackers, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListRecipesResponse = (output, context) => {
    let contents = {
        __type: "ListRecipesResponse",
        nextToken: undefined,
        recipes: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.recipes !== undefined && output.recipes !== null) {
        contents.recipes = deserializeAws_json1_1Recipes(output.recipes, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSchemasResponse = (output, context) => {
    let contents = {
        __type: "ListSchemasResponse",
        nextToken: undefined,
        schemas: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.schemas !== undefined && output.schemas !== null) {
        contents.schemas = deserializeAws_json1_1Schemas(output.schemas, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSolutionVersionsResponse = (output, context) => {
    let contents = {
        __type: "ListSolutionVersionsResponse",
        nextToken: undefined,
        solutionVersions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.solutionVersions !== undefined &&
        output.solutionVersions !== null) {
        contents.solutionVersions = deserializeAws_json1_1SolutionVersions(output.solutionVersions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListSolutionsResponse = (output, context) => {
    let contents = {
        __type: "ListSolutionsResponse",
        nextToken: undefined,
        solutions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.solutions !== undefined && output.solutions !== null) {
        contents.solutions = deserializeAws_json1_1Solutions(output.solutions, context);
    }
    return contents;
};
const deserializeAws_json1_1Metrics = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Recipe = (output, context) => {
    let contents = {
        __type: "Recipe",
        algorithmArn: undefined,
        creationDateTime: undefined,
        description: undefined,
        featureTransformationArn: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        recipeArn: undefined,
        recipeType: undefined,
        status: undefined
    };
    if (output.algorithmArn !== undefined && output.algorithmArn !== null) {
        contents.algorithmArn = output.algorithmArn;
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.featureTransformationArn !== undefined &&
        output.featureTransformationArn !== null) {
        contents.featureTransformationArn = output.featureTransformationArn;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.recipeArn !== undefined && output.recipeArn !== null) {
        contents.recipeArn = output.recipeArn;
    }
    if (output.recipeType !== undefined && output.recipeType !== null) {
        contents.recipeType = output.recipeType;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1RecipeSummary = (output, context) => {
    let contents = {
        __type: "RecipeSummary",
        creationDateTime: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        recipeArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.recipeArn !== undefined && output.recipeArn !== null) {
        contents.recipeArn = output.recipeArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1Recipes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RecipeSummary(entry, context));
};
const deserializeAws_json1_1ResourceConfig = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1S3DataConfig = (output, context) => {
    let contents = {
        __type: "S3DataConfig",
        kmsKeyArn: undefined,
        path: undefined
    };
    if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
        contents.kmsKeyArn = output.kmsKeyArn;
    }
    if (output.path !== undefined && output.path !== null) {
        contents.path = output.path;
    }
    return contents;
};
const deserializeAws_json1_1Schemas = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DatasetSchemaSummary(entry, context));
};
const deserializeAws_json1_1Solution = (output, context) => {
    let contents = {
        __type: "Solution",
        autoMLResult: undefined,
        creationDateTime: undefined,
        datasetGroupArn: undefined,
        eventType: undefined,
        lastUpdatedDateTime: undefined,
        latestSolutionVersion: undefined,
        name: undefined,
        performAutoML: undefined,
        performHPO: undefined,
        recipeArn: undefined,
        solutionArn: undefined,
        solutionConfig: undefined,
        status: undefined
    };
    if (output.autoMLResult !== undefined && output.autoMLResult !== null) {
        contents.autoMLResult = deserializeAws_json1_1AutoMLResult(output.autoMLResult, context);
    }
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.eventType !== undefined && output.eventType !== null) {
        contents.eventType = output.eventType;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.latestSolutionVersion !== undefined &&
        output.latestSolutionVersion !== null) {
        contents.latestSolutionVersion = deserializeAws_json1_1SolutionVersionSummary(output.latestSolutionVersion, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.performAutoML !== undefined && output.performAutoML !== null) {
        contents.performAutoML = output.performAutoML;
    }
    if (output.performHPO !== undefined && output.performHPO !== null) {
        contents.performHPO = output.performHPO;
    }
    if (output.recipeArn !== undefined && output.recipeArn !== null) {
        contents.recipeArn = output.recipeArn;
    }
    if (output.solutionArn !== undefined && output.solutionArn !== null) {
        contents.solutionArn = output.solutionArn;
    }
    if (output.solutionConfig !== undefined && output.solutionConfig !== null) {
        contents.solutionConfig = deserializeAws_json1_1SolutionConfig(output.solutionConfig, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1SolutionConfig = (output, context) => {
    let contents = {
        __type: "SolutionConfig",
        algorithmHyperParameters: undefined,
        autoMLConfig: undefined,
        eventValueThreshold: undefined,
        featureTransformationParameters: undefined,
        hpoConfig: undefined
    };
    if (output.algorithmHyperParameters !== undefined &&
        output.algorithmHyperParameters !== null) {
        contents.algorithmHyperParameters = deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context);
    }
    if (output.autoMLConfig !== undefined && output.autoMLConfig !== null) {
        contents.autoMLConfig = deserializeAws_json1_1AutoMLConfig(output.autoMLConfig, context);
    }
    if (output.eventValueThreshold !== undefined &&
        output.eventValueThreshold !== null) {
        contents.eventValueThreshold = output.eventValueThreshold;
    }
    if (output.featureTransformationParameters !== undefined &&
        output.featureTransformationParameters !== null) {
        contents.featureTransformationParameters = deserializeAws_json1_1FeatureTransformationParameters(output.featureTransformationParameters, context);
    }
    if (output.hpoConfig !== undefined && output.hpoConfig !== null) {
        contents.hpoConfig = deserializeAws_json1_1HPOConfig(output.hpoConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1SolutionSummary = (output, context) => {
    let contents = {
        __type: "SolutionSummary",
        creationDateTime: undefined,
        lastUpdatedDateTime: undefined,
        name: undefined,
        solutionArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.solutionArn !== undefined && output.solutionArn !== null) {
        contents.solutionArn = output.solutionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1SolutionVersion = (output, context) => {
    let contents = {
        __type: "SolutionVersion",
        creationDateTime: undefined,
        datasetGroupArn: undefined,
        eventType: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        performAutoML: undefined,
        performHPO: undefined,
        recipeArn: undefined,
        solutionArn: undefined,
        solutionConfig: undefined,
        solutionVersionArn: undefined,
        status: undefined,
        trainingHours: undefined,
        trainingMode: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
        contents.datasetGroupArn = output.datasetGroupArn;
    }
    if (output.eventType !== undefined && output.eventType !== null) {
        contents.eventType = output.eventType;
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.performAutoML !== undefined && output.performAutoML !== null) {
        contents.performAutoML = output.performAutoML;
    }
    if (output.performHPO !== undefined && output.performHPO !== null) {
        contents.performHPO = output.performHPO;
    }
    if (output.recipeArn !== undefined && output.recipeArn !== null) {
        contents.recipeArn = output.recipeArn;
    }
    if (output.solutionArn !== undefined && output.solutionArn !== null) {
        contents.solutionArn = output.solutionArn;
    }
    if (output.solutionConfig !== undefined && output.solutionConfig !== null) {
        contents.solutionConfig = deserializeAws_json1_1SolutionConfig(output.solutionConfig, context);
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.trainingHours !== undefined && output.trainingHours !== null) {
        contents.trainingHours = output.trainingHours;
    }
    if (output.trainingMode !== undefined && output.trainingMode !== null) {
        contents.trainingMode = output.trainingMode;
    }
    return contents;
};
const deserializeAws_json1_1SolutionVersionSummary = (output, context) => {
    let contents = {
        __type: "SolutionVersionSummary",
        creationDateTime: undefined,
        failureReason: undefined,
        lastUpdatedDateTime: undefined,
        solutionVersionArn: undefined,
        status: undefined
    };
    if (output.creationDateTime !== undefined &&
        output.creationDateTime !== null) {
        contents.creationDateTime = new Date(Math.round(output.creationDateTime * 1000));
    }
    if (output.failureReason !== undefined && output.failureReason !== null) {
        contents.failureReason = output.failureReason;
    }
    if (output.lastUpdatedDateTime !== undefined &&
        output.lastUpdatedDateTime !== null) {
        contents.lastUpdatedDateTime = new Date(Math.round(output.lastUpdatedDateTime * 1000));
    }
    if (output.solutionVersionArn !== undefined &&
        output.solutionVersionArn !== null) {
        contents.solutionVersionArn = output.solutionVersionArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1SolutionVersions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SolutionVersionSummary(entry, context));
};
const deserializeAws_json1_1Solutions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SolutionSummary(entry, context));
};
const deserializeAws_json1_1UpdateCampaignResponse = (output, context) => {
    let contents = {
        __type: "UpdateCampaignResponse",
        campaignArn: undefined
    };
    if (output.campaignArn !== undefined && output.campaignArn !== null) {
        contents.campaignArn = output.campaignArn;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
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
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
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