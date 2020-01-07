"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand;
async function serializeAws_json1_1BatchDeleteImportDataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.BatchDeleteImportData";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteImportDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteImportDataCommand = serializeAws_json1_1BatchDeleteImportDataCommand;
async function serializeAws_json1_1CreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.CreateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
async function serializeAws_json1_1CreateTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.CreateTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTagsCommand = serializeAws_json1_1CreateTagsCommand;
async function serializeAws_json1_1DeleteApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DeleteApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationsCommand = serializeAws_json1_1DeleteApplicationsCommand;
async function serializeAws_json1_1DeleteTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DeleteTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
async function serializeAws_json1_1DescribeAgentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DescribeAgents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAgentsCommand = serializeAws_json1_1DescribeAgentsCommand;
async function serializeAws_json1_1DescribeConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DescribeConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeConfigurationsCommand = serializeAws_json1_1DescribeConfigurationsCommand;
async function serializeAws_json1_1DescribeContinuousExportsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DescribeContinuousExports";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeContinuousExportsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeContinuousExportsCommand = serializeAws_json1_1DescribeContinuousExportsCommand;
async function serializeAws_json1_1DescribeExportConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExportConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeExportConfigurationsCommand = serializeAws_json1_1DescribeExportConfigurationsCommand;
async function serializeAws_json1_1DescribeExportTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DescribeExportTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeExportTasksCommand = serializeAws_json1_1DescribeExportTasksCommand;
async function serializeAws_json1_1DescribeImportTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DescribeImportTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImportTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeImportTasksCommand = serializeAws_json1_1DescribeImportTasksCommand;
async function serializeAws_json1_1DescribeTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DescribeTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
async function serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand;
async function serializeAws_json1_1ExportConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.ExportConfigurations";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1ExportConfigurationsCommand = serializeAws_json1_1ExportConfigurationsCommand;
async function serializeAws_json1_1GetDiscoverySummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.GetDiscoverySummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiscoverySummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDiscoverySummaryCommand = serializeAws_json1_1GetDiscoverySummaryCommand;
async function serializeAws_json1_1ListConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.ListConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListConfigurationsCommand = serializeAws_json1_1ListConfigurationsCommand;
async function serializeAws_json1_1ListServerNeighborsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.ListServerNeighbors";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServerNeighborsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServerNeighborsCommand = serializeAws_json1_1ListServerNeighborsCommand;
async function serializeAws_json1_1StartContinuousExportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.StartContinuousExport";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartContinuousExportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartContinuousExportCommand = serializeAws_json1_1StartContinuousExportCommand;
async function serializeAws_json1_1StartDataCollectionByAgentIdsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDataCollectionByAgentIdsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDataCollectionByAgentIdsCommand = serializeAws_json1_1StartDataCollectionByAgentIdsCommand;
async function serializeAws_json1_1StartExportTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.StartExportTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartExportTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartExportTaskCommand = serializeAws_json1_1StartExportTaskCommand;
async function serializeAws_json1_1StartImportTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.StartImportTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartImportTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartImportTaskCommand = serializeAws_json1_1StartImportTaskCommand;
async function serializeAws_json1_1StopContinuousExportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.StopContinuousExport";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopContinuousExportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopContinuousExportCommand = serializeAws_json1_1StopContinuousExportCommand;
async function serializeAws_json1_1StopDataCollectionByAgentIdsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDataCollectionByAgentIdsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopDataCollectionByAgentIdsCommand = serializeAws_json1_1StopDataCollectionByAgentIdsCommand;
async function serializeAws_json1_1UpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.UpdateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateConfigurationItemsToApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand;
async function deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeleteImportDataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteImportDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteImportDataResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteImportDataResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteImportDataCommand = deserializeAws_json1_1BatchDeleteImportDataCommand;
async function deserializeAws_json1_1BatchDeleteImportDataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
async function deserializeAws_json1_1CreateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTagsCommand = deserializeAws_json1_1CreateTagsCommand;
async function deserializeAws_json1_1CreateTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApplicationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteApplicationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationsCommand = deserializeAws_json1_1DeleteApplicationsCommand;
async function deserializeAws_json1_1DeleteApplicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1DeleteTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTagsResponse" }, contents);
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
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeAgentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAgentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAgentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAgentsCommand = deserializeAws_json1_1DescribeAgentsCommand;
async function deserializeAws_json1_1DescribeAgentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeConfigurationsCommand = deserializeAws_json1_1DescribeConfigurationsCommand;
async function deserializeAws_json1_1DescribeConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeContinuousExportsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeContinuousExportsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeContinuousExportsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeContinuousExportsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeContinuousExportsCommand = deserializeAws_json1_1DescribeContinuousExportsCommand;
async function deserializeAws_json1_1DescribeContinuousExportsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeExportConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeExportConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExportConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExportConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeExportConfigurationsCommand = deserializeAws_json1_1DescribeExportConfigurationsCommand;
async function deserializeAws_json1_1DescribeExportConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeExportTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExportTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeExportTasksCommand = deserializeAws_json1_1DescribeExportTasksCommand;
async function deserializeAws_json1_1DescribeExportTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeImportTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeImportTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImportTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeImportTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeImportTasksCommand = deserializeAws_json1_1DescribeImportTasksCommand;
async function deserializeAws_json1_1DescribeImportTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTagsResponse" }, contents);
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
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateConfigurationItemsFromApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand;
async function deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ExportConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ExportConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ExportConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ExportConfigurationsCommand = deserializeAws_json1_1ExportConfigurationsCommand;
async function deserializeAws_json1_1ExportConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDiscoverySummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDiscoverySummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiscoverySummaryResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDiscoverySummaryResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDiscoverySummaryCommand = deserializeAws_json1_1GetDiscoverySummaryCommand;
async function deserializeAws_json1_1GetDiscoverySummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListConfigurationsCommand = deserializeAws_json1_1ListConfigurationsCommand;
async function deserializeAws_json1_1ListConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListServerNeighborsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServerNeighborsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServerNeighborsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServerNeighborsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServerNeighborsCommand = deserializeAws_json1_1ListServerNeighborsCommand;
async function deserializeAws_json1_1ListServerNeighborsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartContinuousExportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartContinuousExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartContinuousExportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartContinuousExportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartContinuousExportCommand = deserializeAws_json1_1StartContinuousExportCommand;
async function deserializeAws_json1_1StartContinuousExportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ConflictErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDataCollectionByAgentIdsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDataCollectionByAgentIdsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDataCollectionByAgentIdsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDataCollectionByAgentIdsCommand = deserializeAws_json1_1StartDataCollectionByAgentIdsCommand;
async function deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartExportTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartExportTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartExportTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartExportTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartExportTaskCommand = deserializeAws_json1_1StartExportTaskCommand;
async function deserializeAws_json1_1StartExportTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartImportTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartImportTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartImportTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartImportTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartImportTaskCommand = deserializeAws_json1_1StartImportTaskCommand;
async function deserializeAws_json1_1StartImportTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopContinuousExportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopContinuousExportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopContinuousExportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopContinuousExportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopContinuousExportCommand = deserializeAws_json1_1StopContinuousExportCommand;
async function deserializeAws_json1_1StopContinuousExportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopDataCollectionByAgentIdsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopDataCollectionByAgentIdsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDataCollectionByAgentIdsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopDataCollectionByAgentIdsCommand = deserializeAws_json1_1StopDataCollectionByAgentIdsCommand;
async function deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateApplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1UpdateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerInternalErrorException":
        case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AuthorizationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AuthorizationErrorException(body, context);
    const contents = Object.assign({ name: "AuthorizationErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConflictErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictErrorException(body, context);
    const contents = Object.assign({ name: "ConflictErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HomeRegionNotSetException(body, context);
    const contents = Object.assign({ name: "HomeRegionNotSetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
    const contents = Object.assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1ServerInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerInternalErrorException(body, context);
    const contents = Object.assign({ name: "ServerInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AgentIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ApplicationIdsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.applicationConfigurationId !== undefined) {
        bodyParams["applicationConfigurationId"] = input.applicationConfigurationId;
    }
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(input.configurationIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeleteImportDataRequest = (input, context) => {
    const bodyParams = {};
    if (input.importTaskIds !== undefined) {
        bodyParams["importTaskIds"] = serializeAws_json1_1ToDeleteIdentifierList(input.importTaskIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConfigurationIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContinuousExportIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(input.configurationIds, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagSet(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ApplicationIdsList(input.configurationIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(input.configurationIds, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagSet(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAgentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.agentIds !== undefined) {
        bodyParams["agentIds"] = serializeAws_json1_1AgentIds(input.agentIds, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1Filters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(input.configurationIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeContinuousExportsRequest = (input, context) => {
    const bodyParams = {};
    if (input.exportIds !== undefined) {
        bodyParams["exportIds"] = serializeAws_json1_1ContinuousExportIds(input.exportIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeExportConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.exportIds !== undefined) {
        bodyParams["exportIds"] = serializeAws_json1_1ExportIds(input.exportIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeExportTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.exportIds !== undefined) {
        bodyParams["exportIds"] = serializeAws_json1_1ExportIds(input.exportIds, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1ExportFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeImportTasksFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ImportTaskFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DescribeImportTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1DescribeImportTasksFilterList(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1TagFilters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.applicationConfigurationId !== undefined) {
        bodyParams["applicationConfigurationId"] = input.applicationConfigurationId;
    }
    if (input.configurationIds !== undefined) {
        bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(input.configurationIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ExportDataFormats = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ExportFilter = (input, context) => {
    const bodyParams = {};
    if (input.condition !== undefined) {
        bodyParams["condition"] = input.condition;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1FilterValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ExportFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ExportFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ExportIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filter = (input, context) => {
    const bodyParams = {};
    if (input.condition !== undefined) {
        bodyParams["condition"] = input.condition;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1FilterValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FilterValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Filters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Filter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetDiscoverySummaryRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1ImportTaskFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1ImportTaskFilterValueList(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ImportTaskFilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationType !== undefined) {
        bodyParams["configurationType"] = input.configurationType;
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1Filters(input.filters, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.orderBy !== undefined) {
        bodyParams["orderBy"] = serializeAws_json1_1OrderByList(input.orderBy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListServerNeighborsRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationId !== undefined) {
        bodyParams["configurationId"] = input.configurationId;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.neighborConfigurationIds !== undefined) {
        bodyParams["neighborConfigurationIds"] = serializeAws_json1_1ConfigurationIdList(input.neighborConfigurationIds, context);
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.portInformationNeeded !== undefined) {
        bodyParams["portInformationNeeded"] = input.portInformationNeeded;
    }
    return bodyParams;
};
const serializeAws_json1_1OrderByElement = (input, context) => {
    const bodyParams = {};
    if (input.fieldName !== undefined) {
        bodyParams["fieldName"] = input.fieldName;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1OrderByList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OrderByElement(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StartContinuousExportRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1StartDataCollectionByAgentIdsRequest = (input, context) => {
    const bodyParams = {};
    if (input.agentIds !== undefined) {
        bodyParams["agentIds"] = serializeAws_json1_1AgentIds(input.agentIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartExportTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.endTime !== undefined) {
        bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
    }
    if (input.exportDataFormat !== undefined) {
        bodyParams["exportDataFormat"] = serializeAws_json1_1ExportDataFormats(input.exportDataFormat, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1ExportFilters(input.filters, context);
    }
    if (input.startTime !== undefined) {
        bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1StartImportTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.importUrl !== undefined) {
        bodyParams["importUrl"] = input.importUrl;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopContinuousExportRequest = (input, context) => {
    const bodyParams = {};
    if (input.exportId !== undefined) {
        bodyParams["exportId"] = input.exportId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopDataCollectionByAgentIdsRequest = (input, context) => {
    const bodyParams = {};
    if (input.agentIds !== undefined) {
        bodyParams["agentIds"] = serializeAws_json1_1AgentIds(input.agentIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1FilterValues(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TagFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TagFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagSet = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ToDeleteIdentifierList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UpdateApplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.configurationId !== undefined) {
        bodyParams["configurationId"] = input.configurationId;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const deserializeAws_json1_1AgentConfigurationStatus = (output, context) => {
    let contents = {
        __type: "AgentConfigurationStatus",
        agentId: undefined,
        description: undefined,
        operationSucceeded: undefined
    };
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.operationSucceeded !== undefined &&
        output.operationSucceeded !== null) {
        contents.operationSucceeded = output.operationSucceeded;
    }
    return contents;
};
const deserializeAws_json1_1AgentConfigurationStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentConfigurationStatus(entry, context));
};
const deserializeAws_json1_1AgentInfo = (output, context) => {
    let contents = {
        __type: "AgentInfo",
        agentId: undefined,
        agentNetworkInfoList: undefined,
        agentType: undefined,
        collectionStatus: undefined,
        connectorId: undefined,
        health: undefined,
        hostName: undefined,
        lastHealthPingTime: undefined,
        registeredTime: undefined,
        version: undefined
    };
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.agentNetworkInfoList !== undefined &&
        output.agentNetworkInfoList !== null) {
        contents.agentNetworkInfoList = deserializeAws_json1_1AgentNetworkInfoList(output.agentNetworkInfoList, context);
    }
    if (output.agentType !== undefined && output.agentType !== null) {
        contents.agentType = output.agentType;
    }
    if (output.collectionStatus !== undefined &&
        output.collectionStatus !== null) {
        contents.collectionStatus = output.collectionStatus;
    }
    if (output.connectorId !== undefined && output.connectorId !== null) {
        contents.connectorId = output.connectorId;
    }
    if (output.health !== undefined && output.health !== null) {
        contents.health = output.health;
    }
    if (output.hostName !== undefined && output.hostName !== null) {
        contents.hostName = output.hostName;
    }
    if (output.lastHealthPingTime !== undefined &&
        output.lastHealthPingTime !== null) {
        contents.lastHealthPingTime = output.lastHealthPingTime;
    }
    if (output.registeredTime !== undefined && output.registeredTime !== null) {
        contents.registeredTime = output.registeredTime;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1AgentNetworkInfo = (output, context) => {
    let contents = {
        __type: "AgentNetworkInfo",
        ipAddress: undefined,
        macAddress: undefined
    };
    if (output.ipAddress !== undefined && output.ipAddress !== null) {
        contents.ipAddress = output.ipAddress;
    }
    if (output.macAddress !== undefined && output.macAddress !== null) {
        contents.macAddress = output.macAddress;
    }
    return contents;
};
const deserializeAws_json1_1AgentNetworkInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentNetworkInfo(entry, context));
};
const deserializeAws_json1_1AgentsInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentInfo(entry, context));
};
const deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = (output, context) => {
    let contents = {
        __type: "AssociateConfigurationItemsToApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1AuthorizationErrorException = (output, context) => {
    let contents = {
        __type: "AuthorizationErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteImportDataError = (output, context) => {
    let contents = {
        __type: "BatchDeleteImportDataError",
        errorCode: undefined,
        errorDescription: undefined,
        importTaskId: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorDescription !== undefined &&
        output.errorDescription !== null) {
        contents.errorDescription = output.errorDescription;
    }
    if (output.importTaskId !== undefined && output.importTaskId !== null) {
        contents.importTaskId = output.importTaskId;
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteImportDataErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDeleteImportDataError(entry, context));
};
const deserializeAws_json1_1BatchDeleteImportDataResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteImportDataResponse",
        errors: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1BatchDeleteImportDataErrorList(output.errors, context);
    }
    return contents;
};
const deserializeAws_json1_1Configuration = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ConfigurationTag = (output, context) => {
    let contents = {
        __type: "ConfigurationTag",
        configurationId: undefined,
        configurationType: undefined,
        key: undefined,
        timeOfCreation: undefined,
        value: undefined
    };
    if (output.configurationId !== undefined && output.configurationId !== null) {
        contents.configurationId = output.configurationId;
    }
    if (output.configurationType !== undefined &&
        output.configurationType !== null) {
        contents.configurationType = output.configurationType;
    }
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.timeOfCreation !== undefined && output.timeOfCreation !== null) {
        contents.timeOfCreation = new Date(Math.round(output.timeOfCreation * 1000));
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1ConfigurationTagSet = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ConfigurationTag(entry, context));
};
const deserializeAws_json1_1Configurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Configuration(entry, context));
};
const deserializeAws_json1_1ConflictErrorException = (output, context) => {
    let contents = {
        __type: "ConflictErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ContinuousExportDescription = (output, context) => {
    let contents = {
        __type: "ContinuousExportDescription",
        dataSource: undefined,
        exportId: undefined,
        s3Bucket: undefined,
        schemaStorageConfig: undefined,
        startTime: undefined,
        status: undefined,
        statusDetail: undefined,
        stopTime: undefined
    };
    if (output.dataSource !== undefined && output.dataSource !== null) {
        contents.dataSource = output.dataSource;
    }
    if (output.exportId !== undefined && output.exportId !== null) {
        contents.exportId = output.exportId;
    }
    if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
        contents.s3Bucket = output.s3Bucket;
    }
    if (output.schemaStorageConfig !== undefined &&
        output.schemaStorageConfig !== null) {
        contents.schemaStorageConfig = deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context);
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusDetail !== undefined && output.statusDetail !== null) {
        contents.statusDetail = output.statusDetail;
    }
    if (output.stopTime !== undefined && output.stopTime !== null) {
        contents.stopTime = new Date(Math.round(output.stopTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ContinuousExportDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContinuousExportDescription(entry, context));
};
const deserializeAws_json1_1CreateApplicationResponse = (output, context) => {
    let contents = {
        __type: "CreateApplicationResponse",
        configurationId: undefined
    };
    if (output.configurationId !== undefined && output.configurationId !== null) {
        contents.configurationId = output.configurationId;
    }
    return contents;
};
const deserializeAws_json1_1CreateTagsResponse = (output, context) => {
    let contents = {
        __type: "CreateTagsResponse"
    };
    return contents;
};
const deserializeAws_json1_1CustomerAgentInfo = (output, context) => {
    let contents = {
        __type: "CustomerAgentInfo",
        activeAgents: undefined,
        blackListedAgents: undefined,
        healthyAgents: undefined,
        shutdownAgents: undefined,
        totalAgents: undefined,
        unhealthyAgents: undefined,
        unknownAgents: undefined
    };
    if (output.activeAgents !== undefined && output.activeAgents !== null) {
        contents.activeAgents = output.activeAgents;
    }
    if (output.blackListedAgents !== undefined &&
        output.blackListedAgents !== null) {
        contents.blackListedAgents = output.blackListedAgents;
    }
    if (output.healthyAgents !== undefined && output.healthyAgents !== null) {
        contents.healthyAgents = output.healthyAgents;
    }
    if (output.shutdownAgents !== undefined && output.shutdownAgents !== null) {
        contents.shutdownAgents = output.shutdownAgents;
    }
    if (output.totalAgents !== undefined && output.totalAgents !== null) {
        contents.totalAgents = output.totalAgents;
    }
    if (output.unhealthyAgents !== undefined && output.unhealthyAgents !== null) {
        contents.unhealthyAgents = output.unhealthyAgents;
    }
    if (output.unknownAgents !== undefined && output.unknownAgents !== null) {
        contents.unknownAgents = output.unknownAgents;
    }
    return contents;
};
const deserializeAws_json1_1CustomerConnectorInfo = (output, context) => {
    let contents = {
        __type: "CustomerConnectorInfo",
        activeConnectors: undefined,
        blackListedConnectors: undefined,
        healthyConnectors: undefined,
        shutdownConnectors: undefined,
        totalConnectors: undefined,
        unhealthyConnectors: undefined,
        unknownConnectors: undefined
    };
    if (output.activeConnectors !== undefined &&
        output.activeConnectors !== null) {
        contents.activeConnectors = output.activeConnectors;
    }
    if (output.blackListedConnectors !== undefined &&
        output.blackListedConnectors !== null) {
        contents.blackListedConnectors = output.blackListedConnectors;
    }
    if (output.healthyConnectors !== undefined &&
        output.healthyConnectors !== null) {
        contents.healthyConnectors = output.healthyConnectors;
    }
    if (output.shutdownConnectors !== undefined &&
        output.shutdownConnectors !== null) {
        contents.shutdownConnectors = output.shutdownConnectors;
    }
    if (output.totalConnectors !== undefined && output.totalConnectors !== null) {
        contents.totalConnectors = output.totalConnectors;
    }
    if (output.unhealthyConnectors !== undefined &&
        output.unhealthyConnectors !== null) {
        contents.unhealthyConnectors = output.unhealthyConnectors;
    }
    if (output.unknownConnectors !== undefined &&
        output.unknownConnectors !== null) {
        contents.unknownConnectors = output.unknownConnectors;
    }
    return contents;
};
const deserializeAws_json1_1DeleteApplicationsResponse = (output, context) => {
    let contents = {
        __type: "DeleteApplicationsResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTagsResponse = (output, context) => {
    let contents = {
        __type: "DeleteTagsResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAgentsResponse = (output, context) => {
    let contents = {
        __type: "DescribeAgentsResponse",
        agentsInfo: undefined,
        nextToken: undefined
    };
    if (output.agentsInfo !== undefined && output.agentsInfo !== null) {
        contents.agentsInfo = deserializeAws_json1_1AgentsInfo(output.agentsInfo, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeConfigurationsAttribute = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1DescribeConfigurationsAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context));
};
const deserializeAws_json1_1DescribeConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeConfigurationsResponse",
        configurations: undefined
    };
    if (output.configurations !== undefined && output.configurations !== null) {
        contents.configurations = deserializeAws_json1_1DescribeConfigurationsAttributes(output.configurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeContinuousExportsResponse = (output, context) => {
    let contents = {
        __type: "DescribeContinuousExportsResponse",
        descriptions: undefined,
        nextToken: undefined
    };
    if (output.descriptions !== undefined && output.descriptions !== null) {
        contents.descriptions = deserializeAws_json1_1ContinuousExportDescriptions(output.descriptions, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeExportConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "DescribeExportConfigurationsResponse",
        exportsInfo: undefined,
        nextToken: undefined
    };
    if (output.exportsInfo !== undefined && output.exportsInfo !== null) {
        contents.exportsInfo = deserializeAws_json1_1ExportsInfo(output.exportsInfo, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeExportTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeExportTasksResponse",
        exportsInfo: undefined,
        nextToken: undefined
    };
    if (output.exportsInfo !== undefined && output.exportsInfo !== null) {
        contents.exportsInfo = deserializeAws_json1_1ExportsInfo(output.exportsInfo, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeImportTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeImportTasksResponse",
        nextToken: undefined,
        tasks: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tasks !== undefined && output.tasks !== null) {
        contents.tasks = deserializeAws_json1_1ImportTaskList(output.tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTagsResponse = (output, context) => {
    let contents = {
        __type: "DescribeTagsResponse",
        nextToken: undefined,
        tags: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1ConfigurationTagSet(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = (output, context) => {
    let contents = {
        __type: "DisassociateConfigurationItemsFromApplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1ExportConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "ExportConfigurationsResponse",
        exportId: undefined
    };
    if (output.exportId !== undefined && output.exportId !== null) {
        contents.exportId = output.exportId;
    }
    return contents;
};
const deserializeAws_json1_1ExportInfo = (output, context) => {
    let contents = {
        __type: "ExportInfo",
        configurationsDownloadUrl: undefined,
        exportId: undefined,
        exportRequestTime: undefined,
        exportStatus: undefined,
        isTruncated: undefined,
        requestedEndTime: undefined,
        requestedStartTime: undefined,
        statusMessage: undefined
    };
    if (output.configurationsDownloadUrl !== undefined &&
        output.configurationsDownloadUrl !== null) {
        contents.configurationsDownloadUrl = output.configurationsDownloadUrl;
    }
    if (output.exportId !== undefined && output.exportId !== null) {
        contents.exportId = output.exportId;
    }
    if (output.exportRequestTime !== undefined &&
        output.exportRequestTime !== null) {
        contents.exportRequestTime = new Date(Math.round(output.exportRequestTime * 1000));
    }
    if (output.exportStatus !== undefined && output.exportStatus !== null) {
        contents.exportStatus = output.exportStatus;
    }
    if (output.isTruncated !== undefined && output.isTruncated !== null) {
        contents.isTruncated = output.isTruncated;
    }
    if (output.requestedEndTime !== undefined &&
        output.requestedEndTime !== null) {
        contents.requestedEndTime = new Date(Math.round(output.requestedEndTime * 1000));
    }
    if (output.requestedStartTime !== undefined &&
        output.requestedStartTime !== null) {
        contents.requestedStartTime = new Date(Math.round(output.requestedStartTime * 1000));
    }
    if (output.statusMessage !== undefined && output.statusMessage !== null) {
        contents.statusMessage = output.statusMessage;
    }
    return contents;
};
const deserializeAws_json1_1ExportsInfo = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExportInfo(entry, context));
};
const deserializeAws_json1_1GetDiscoverySummaryResponse = (output, context) => {
    let contents = {
        __type: "GetDiscoverySummaryResponse",
        agentSummary: undefined,
        applications: undefined,
        connectorSummary: undefined,
        servers: undefined,
        serversMappedToApplications: undefined,
        serversMappedtoTags: undefined
    };
    if (output.agentSummary !== undefined && output.agentSummary !== null) {
        contents.agentSummary = deserializeAws_json1_1CustomerAgentInfo(output.agentSummary, context);
    }
    if (output.applications !== undefined && output.applications !== null) {
        contents.applications = output.applications;
    }
    if (output.connectorSummary !== undefined &&
        output.connectorSummary !== null) {
        contents.connectorSummary = deserializeAws_json1_1CustomerConnectorInfo(output.connectorSummary, context);
    }
    if (output.servers !== undefined && output.servers !== null) {
        contents.servers = output.servers;
    }
    if (output.serversMappedToApplications !== undefined &&
        output.serversMappedToApplications !== null) {
        contents.serversMappedToApplications = output.serversMappedToApplications;
    }
    if (output.serversMappedtoTags !== undefined &&
        output.serversMappedtoTags !== null) {
        contents.serversMappedtoTags = output.serversMappedtoTags;
    }
    return contents;
};
const deserializeAws_json1_1HomeRegionNotSetException = (output, context) => {
    let contents = {
        __type: "HomeRegionNotSetException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ImportTask = (output, context) => {
    let contents = {
        __type: "ImportTask",
        applicationImportFailure: undefined,
        applicationImportSuccess: undefined,
        clientRequestToken: undefined,
        errorsAndFailedEntriesZip: undefined,
        importCompletionTime: undefined,
        importDeletedTime: undefined,
        importRequestTime: undefined,
        importTaskId: undefined,
        importUrl: undefined,
        name: undefined,
        serverImportFailure: undefined,
        serverImportSuccess: undefined,
        status: undefined
    };
    if (output.applicationImportFailure !== undefined &&
        output.applicationImportFailure !== null) {
        contents.applicationImportFailure = output.applicationImportFailure;
    }
    if (output.applicationImportSuccess !== undefined &&
        output.applicationImportSuccess !== null) {
        contents.applicationImportSuccess = output.applicationImportSuccess;
    }
    if (output.clientRequestToken !== undefined &&
        output.clientRequestToken !== null) {
        contents.clientRequestToken = output.clientRequestToken;
    }
    if (output.errorsAndFailedEntriesZip !== undefined &&
        output.errorsAndFailedEntriesZip !== null) {
        contents.errorsAndFailedEntriesZip = output.errorsAndFailedEntriesZip;
    }
    if (output.importCompletionTime !== undefined &&
        output.importCompletionTime !== null) {
        contents.importCompletionTime = new Date(Math.round(output.importCompletionTime * 1000));
    }
    if (output.importDeletedTime !== undefined &&
        output.importDeletedTime !== null) {
        contents.importDeletedTime = new Date(Math.round(output.importDeletedTime * 1000));
    }
    if (output.importRequestTime !== undefined &&
        output.importRequestTime !== null) {
        contents.importRequestTime = new Date(Math.round(output.importRequestTime * 1000));
    }
    if (output.importTaskId !== undefined && output.importTaskId !== null) {
        contents.importTaskId = output.importTaskId;
    }
    if (output.importUrl !== undefined && output.importUrl !== null) {
        contents.importUrl = output.importUrl;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.serverImportFailure !== undefined &&
        output.serverImportFailure !== null) {
        contents.serverImportFailure = output.serverImportFailure;
    }
    if (output.serverImportSuccess !== undefined &&
        output.serverImportSuccess !== null) {
        contents.serverImportSuccess = output.serverImportSuccess;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1ImportTaskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ImportTask(entry, context));
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterValueException = (output, context) => {
    let contents = {
        __type: "InvalidParameterValueException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "ListConfigurationsResponse",
        configurations: undefined,
        nextToken: undefined
    };
    if (output.configurations !== undefined && output.configurations !== null) {
        contents.configurations = deserializeAws_json1_1Configurations(output.configurations, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListServerNeighborsResponse = (output, context) => {
    let contents = {
        __type: "ListServerNeighborsResponse",
        knownDependencyCount: undefined,
        neighbors: undefined,
        nextToken: undefined
    };
    if (output.knownDependencyCount !== undefined &&
        output.knownDependencyCount !== null) {
        contents.knownDependencyCount = output.knownDependencyCount;
    }
    if (output.neighbors !== undefined && output.neighbors !== null) {
        contents.neighbors = deserializeAws_json1_1NeighborDetailsList(output.neighbors, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1NeighborConnectionDetail = (output, context) => {
    let contents = {
        __type: "NeighborConnectionDetail",
        connectionsCount: undefined,
        destinationPort: undefined,
        destinationServerId: undefined,
        sourceServerId: undefined,
        transportProtocol: undefined
    };
    if (output.connectionsCount !== undefined &&
        output.connectionsCount !== null) {
        contents.connectionsCount = output.connectionsCount;
    }
    if (output.destinationPort !== undefined && output.destinationPort !== null) {
        contents.destinationPort = output.destinationPort;
    }
    if (output.destinationServerId !== undefined &&
        output.destinationServerId !== null) {
        contents.destinationServerId = output.destinationServerId;
    }
    if (output.sourceServerId !== undefined && output.sourceServerId !== null) {
        contents.sourceServerId = output.sourceServerId;
    }
    if (output.transportProtocol !== undefined &&
        output.transportProtocol !== null) {
        contents.transportProtocol = output.transportProtocol;
    }
    return contents;
};
const deserializeAws_json1_1NeighborDetailsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NeighborConnectionDetail(entry, context));
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
    let contents = {
        __type: "OperationNotPermittedException",
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
const deserializeAws_json1_1SchemaStorageConfig = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ServerInternalErrorException = (output, context) => {
    let contents = {
        __type: "ServerInternalErrorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StartContinuousExportResponse = (output, context) => {
    let contents = {
        __type: "StartContinuousExportResponse",
        dataSource: undefined,
        exportId: undefined,
        s3Bucket: undefined,
        schemaStorageConfig: undefined,
        startTime: undefined
    };
    if (output.dataSource !== undefined && output.dataSource !== null) {
        contents.dataSource = output.dataSource;
    }
    if (output.exportId !== undefined && output.exportId !== null) {
        contents.exportId = output.exportId;
    }
    if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
        contents.s3Bucket = output.s3Bucket;
    }
    if (output.schemaStorageConfig !== undefined &&
        output.schemaStorageConfig !== null) {
        contents.schemaStorageConfig = deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context);
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = (output, context) => {
    let contents = {
        __type: "StartDataCollectionByAgentIdsResponse",
        agentsConfigurationStatus: undefined
    };
    if (output.agentsConfigurationStatus !== undefined &&
        output.agentsConfigurationStatus !== null) {
        contents.agentsConfigurationStatus = deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1StartExportTaskResponse = (output, context) => {
    let contents = {
        __type: "StartExportTaskResponse",
        exportId: undefined
    };
    if (output.exportId !== undefined && output.exportId !== null) {
        contents.exportId = output.exportId;
    }
    return contents;
};
const deserializeAws_json1_1StartImportTaskResponse = (output, context) => {
    let contents = {
        __type: "StartImportTaskResponse",
        task: undefined
    };
    if (output.task !== undefined && output.task !== null) {
        contents.task = deserializeAws_json1_1ImportTask(output.task, context);
    }
    return contents;
};
const deserializeAws_json1_1StopContinuousExportResponse = (output, context) => {
    let contents = {
        __type: "StopContinuousExportResponse",
        startTime: undefined,
        stopTime: undefined
    };
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.stopTime !== undefined && output.stopTime !== null) {
        contents.stopTime = new Date(Math.round(output.stopTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = (output, context) => {
    let contents = {
        __type: "StopDataCollectionByAgentIdsResponse",
        agentsConfigurationStatus: undefined
    };
    if (output.agentsConfigurationStatus !== undefined &&
        output.agentsConfigurationStatus !== null) {
        contents.agentsConfigurationStatus = deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateApplicationResponse = (output, context) => {
    let contents = {
        __type: "UpdateApplicationResponse"
    };
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