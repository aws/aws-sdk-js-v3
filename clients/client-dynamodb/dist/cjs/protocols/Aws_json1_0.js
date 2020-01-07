"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_0DescribeEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeEndpointsCommand = serializeAws_json1_0DescribeEndpointsCommand;
async function serializeAws_json1_0BatchGetItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.BatchGetItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0BatchGetItemCommand = serializeAws_json1_0BatchGetItemCommand;
async function serializeAws_json1_0BatchWriteItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.BatchWriteItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0BatchWriteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0BatchWriteItemCommand = serializeAws_json1_0BatchWriteItemCommand;
async function serializeAws_json1_0CreateBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.CreateBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateBackupCommand = serializeAws_json1_0CreateBackupCommand;
async function serializeAws_json1_0CreateGlobalTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.CreateGlobalTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateGlobalTableCommand = serializeAws_json1_0CreateGlobalTableCommand;
async function serializeAws_json1_0CreateTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.CreateTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateTableCommand = serializeAws_json1_0CreateTableCommand;
async function serializeAws_json1_0DeleteBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteBackupCommand = serializeAws_json1_0DeleteBackupCommand;
async function serializeAws_json1_0DeleteItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteItemCommand = serializeAws_json1_0DeleteItemCommand;
async function serializeAws_json1_0DeleteTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteTableCommand = serializeAws_json1_0DeleteTableCommand;
async function serializeAws_json1_0DescribeBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeBackupCommand = serializeAws_json1_0DescribeBackupCommand;
async function serializeAws_json1_0DescribeContinuousBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeContinuousBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeContinuousBackupsCommand = serializeAws_json1_0DescribeContinuousBackupsCommand;
async function serializeAws_json1_0DescribeContributorInsightsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeContributorInsights";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeContributorInsightsCommand = serializeAws_json1_0DescribeContributorInsightsCommand;
async function serializeAws_json1_0DescribeGlobalTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeGlobalTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeGlobalTableCommand = serializeAws_json1_0DescribeGlobalTableCommand;
async function serializeAws_json1_0DescribeGlobalTableSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeGlobalTableSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeGlobalTableSettingsCommand = serializeAws_json1_0DescribeGlobalTableSettingsCommand;
async function serializeAws_json1_0DescribeLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeLimits";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeLimitsCommand = serializeAws_json1_0DescribeLimitsCommand;
async function serializeAws_json1_0DescribeTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeTableCommand = serializeAws_json1_0DescribeTableCommand;
async function serializeAws_json1_0DescribeTableReplicaAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTableReplicaAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = serializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
async function serializeAws_json1_0DescribeTimeToLiveCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTimeToLive";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeTimeToLiveCommand = serializeAws_json1_0DescribeTimeToLiveCommand;
async function serializeAws_json1_0GetItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.GetItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetItemCommand = serializeAws_json1_0GetItemCommand;
async function serializeAws_json1_0ListBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.ListBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListBackupsCommand = serializeAws_json1_0ListBackupsCommand;
async function serializeAws_json1_0ListContributorInsightsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.ListContributorInsights";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListContributorInsightsCommand = serializeAws_json1_0ListContributorInsightsCommand;
async function serializeAws_json1_0ListGlobalTablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.ListGlobalTables";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListGlobalTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListGlobalTablesCommand = serializeAws_json1_0ListGlobalTablesCommand;
async function serializeAws_json1_0ListTablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.ListTables";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListTablesCommand = serializeAws_json1_0ListTablesCommand;
async function serializeAws_json1_0ListTagsOfResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.ListTagsOfResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsOfResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListTagsOfResourceCommand = serializeAws_json1_0ListTagsOfResourceCommand;
async function serializeAws_json1_0PutItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.PutItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0PutItemCommand = serializeAws_json1_0PutItemCommand;
async function serializeAws_json1_0QueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.Query";
    let body;
    body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0QueryCommand = serializeAws_json1_0QueryCommand;
async function serializeAws_json1_0RestoreTableFromBackupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.RestoreTableFromBackup";
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableFromBackupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RestoreTableFromBackupCommand = serializeAws_json1_0RestoreTableFromBackupCommand;
async function serializeAws_json1_0RestoreTableToPointInTimeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.RestoreTableToPointInTime";
    let body;
    body = JSON.stringify(serializeAws_json1_0RestoreTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RestoreTableToPointInTimeCommand = serializeAws_json1_0RestoreTableToPointInTimeCommand;
async function serializeAws_json1_0ScanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.Scan";
    let body;
    body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ScanCommand = serializeAws_json1_0ScanCommand;
async function serializeAws_json1_0TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
async function serializeAws_json1_0TransactGetItemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.TransactGetItems";
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactGetItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TransactGetItemsCommand = serializeAws_json1_0TransactGetItemsCommand;
async function serializeAws_json1_0TransactWriteItemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.TransactWriteItems";
    let body;
    body = JSON.stringify(serializeAws_json1_0TransactWriteItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TransactWriteItemsCommand = serializeAws_json1_0TransactWriteItemsCommand;
async function serializeAws_json1_0UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
async function serializeAws_json1_0UpdateContinuousBackupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateContinuousBackups";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContinuousBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateContinuousBackupsCommand = serializeAws_json1_0UpdateContinuousBackupsCommand;
async function serializeAws_json1_0UpdateContributorInsightsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateContributorInsights";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateContributorInsightsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateContributorInsightsCommand = serializeAws_json1_0UpdateContributorInsightsCommand;
async function serializeAws_json1_0UpdateGlobalTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateGlobalTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateGlobalTableCommand = serializeAws_json1_0UpdateGlobalTableCommand;
async function serializeAws_json1_0UpdateGlobalTableSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateGlobalTableSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateGlobalTableSettingsCommand = serializeAws_json1_0UpdateGlobalTableSettingsCommand;
async function serializeAws_json1_0UpdateItemCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateItem";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateItemCommand = serializeAws_json1_0UpdateItemCommand;
async function serializeAws_json1_0UpdateTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTable";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateTableCommand = serializeAws_json1_0UpdateTableCommand;
async function serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTableReplicaAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = serializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
async function serializeAws_json1_0UpdateTimeToLiveCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTimeToLive";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateTimeToLiveInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateTimeToLiveCommand = serializeAws_json1_0UpdateTimeToLiveCommand;
async function deserializeAws_json1_0DescribeEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeEndpointsCommand = deserializeAws_json1_0DescribeEndpointsCommand;
async function deserializeAws_json1_0DescribeEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
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
async function deserializeAws_json1_0BatchGetItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0BatchGetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0BatchGetItemCommand = deserializeAws_json1_0BatchGetItemCommand;
async function deserializeAws_json1_0BatchGetItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0BatchWriteItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0BatchWriteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchWriteItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0BatchWriteItemCommand = deserializeAws_json1_0BatchWriteItemCommand;
async function deserializeAws_json1_0BatchWriteItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0CreateBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateBackupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBackupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateBackupCommand = deserializeAws_json1_0CreateBackupCommand;
async function deserializeAws_json1_0CreateBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupInUseException":
        case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb.v20120810#ContinuousBackupsUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb.v20120810#TableInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0CreateGlobalTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGlobalTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateGlobalTableCommand = deserializeAws_json1_0CreateGlobalTableCommand;
async function deserializeAws_json1_0CreateGlobalTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalTableAlreadyExistsException":
        case "com.amazonaws.dynamodb.v20120810#GlobalTableAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0CreateTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateTableCommand = deserializeAws_json1_0CreateTableCommand;
async function deserializeAws_json1_0CreateTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DeleteBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteBackupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteBackupCommand = deserializeAws_json1_0DeleteBackupCommand;
async function deserializeAws_json1_0DeleteBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupInUseException":
        case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DeleteItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteItemCommand = deserializeAws_json1_0DeleteItemCommand;
async function deserializeAws_json1_0DeleteItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DeleteTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteTableCommand = deserializeAws_json1_0DeleteTableCommand;
async function deserializeAws_json1_0DeleteTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBackupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeBackupCommand = deserializeAws_json1_0DescribeBackupCommand;
async function deserializeAws_json1_0DescribeBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeContinuousBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeContinuousBackupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeContinuousBackupsCommand = deserializeAws_json1_0DescribeContinuousBackupsCommand;
async function deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeContributorInsightsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeContributorInsightsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeContributorInsightsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeContributorInsightsCommand = deserializeAws_json1_0DescribeContributorInsightsCommand;
async function deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeGlobalTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGlobalTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeGlobalTableCommand = deserializeAws_json1_0DescribeGlobalTableCommand;
async function deserializeAws_json1_0DescribeGlobalTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeGlobalTableSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGlobalTableSettingsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeGlobalTableSettingsCommand = deserializeAws_json1_0DescribeGlobalTableSettingsCommand;
async function deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLimitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeLimitsCommand = deserializeAws_json1_0DescribeLimitsCommand;
async function deserializeAws_json1_0DescribeLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeTableCommand = deserializeAws_json1_0DescribeTableCommand;
async function deserializeAws_json1_0DescribeTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTableReplicaAutoScalingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand;
async function deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0DescribeTimeToLiveCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTimeToLiveOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeTimeToLiveCommand = deserializeAws_json1_0DescribeTimeToLiveCommand;
async function deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetItemCommand = deserializeAws_json1_0GetItemCommand;
async function deserializeAws_json1_0GetItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListBackupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBackupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListBackupsCommand = deserializeAws_json1_0ListBackupsCommand;
async function deserializeAws_json1_0ListBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListContributorInsightsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListContributorInsightsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListContributorInsightsCommand = deserializeAws_json1_0ListContributorInsightsCommand;
async function deserializeAws_json1_0ListContributorInsightsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListGlobalTablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListGlobalTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGlobalTablesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListGlobalTablesCommand = deserializeAws_json1_0ListGlobalTablesCommand;
async function deserializeAws_json1_0ListGlobalTablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListTablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTablesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTablesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListTablesCommand = deserializeAws_json1_0ListTablesCommand;
async function deserializeAws_json1_0ListTablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListTagsOfResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListTagsOfResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsOfResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListTagsOfResourceCommand = deserializeAws_json1_0ListTagsOfResourceCommand;
async function deserializeAws_json1_0ListTagsOfResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0PutItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0PutItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PutItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0PutItemCommand = deserializeAws_json1_0PutItemCommand;
async function deserializeAws_json1_0PutItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0QueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0QueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0QueryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "QueryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0QueryCommand = deserializeAws_json1_0QueryCommand;
async function deserializeAws_json1_0QueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0RestoreTableFromBackupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreTableFromBackupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RestoreTableFromBackupCommand = deserializeAws_json1_0RestoreTableFromBackupCommand;
async function deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupInUseException":
        case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb.v20120810#TableAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb.v20120810#TableInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0RestoreTableToPointInTimeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RestoreTableToPointInTimeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RestoreTableToPointInTimeCommand = deserializeAws_json1_0RestoreTableToPointInTimeCommand;
async function deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRestoreTimeException":
        case "com.amazonaws.dynamodb.v20120810#InvalidRestoreTimeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb.v20120810#PointInTimeRecoveryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb.v20120810#TableAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableInUseException":
        case "com.amazonaws.dynamodb.v20120810#TableInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ScanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ScanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ScanOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScanOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ScanCommand = deserializeAws_json1_0ScanCommand;
async function deserializeAws_json1_0ScanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
async function deserializeAws_json1_0TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0TransactGetItemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0TransactGetItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TransactGetItemsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0TransactGetItemsCommand = deserializeAws_json1_0TransactGetItemsCommand;
async function deserializeAws_json1_0TransactGetItemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb.v20120810#TransactionCanceledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0TransactWriteItemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0TransactWriteItemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TransactWriteItemsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0TransactWriteItemsCommand = deserializeAws_json1_0TransactWriteItemsCommand;
async function deserializeAws_json1_0TransactWriteItemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb.v20120810#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb.v20120810#TransactionCanceledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb.v20120810#TransactionInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
async function deserializeAws_json1_0UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateContinuousBackupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateContinuousBackupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateContinuousBackupsCommand = deserializeAws_json1_0UpdateContinuousBackupsCommand;
async function deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb.v20120810#ContinuousBackupsUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateContributorInsightsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateContributorInsightsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateContributorInsightsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateContributorInsightsCommand = deserializeAws_json1_0UpdateContributorInsightsCommand;
async function deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateGlobalTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateGlobalTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGlobalTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateGlobalTableCommand = deserializeAws_json1_0UpdateGlobalTableCommand;
async function deserializeAws_json1_0UpdateGlobalTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicaAlreadyExistsException":
        case "com.amazonaws.dynamodb.v20120810#ReplicaAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ReplicaNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateGlobalTableSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGlobalTableSettingsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateGlobalTableSettingsCommand = deserializeAws_json1_0UpdateGlobalTableSettingsCommand;
async function deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IndexNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#IndexNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0IndexNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ReplicaNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateItemCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateItemCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateItemOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateItemOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateItemCommand = deserializeAws_json1_0UpdateItemCommand;
async function deserializeAws_json1_0UpdateItemCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTableOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateTableCommand = deserializeAws_json1_0UpdateTableCommand;
async function deserializeAws_json1_0UpdateTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTableReplicaAutoScalingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand;
async function deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0UpdateTimeToLiveCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTimeToLiveOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateTimeToLiveCommand = deserializeAws_json1_0UpdateTimeToLiveCommand;
async function deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEndpointException":
        case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
    const contents = Object.assign({ name: "InvalidEndpointException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0BackupInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupInUseException(body, context);
    const contents = Object.assign({ name: "BackupInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0BackupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BackupNotFoundException(body, context);
    const contents = Object.assign({ name: "BackupNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ConditionalCheckFailedException(body, context);
    const contents = Object.assign({ name: "ConditionalCheckFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ContinuousBackupsUnavailableException(body, context);
    const contents = Object.assign({ name: "ContinuousBackupsUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "GlobalTableAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0GlobalTableNotFoundException(body, context);
    const contents = Object.assign({ name: "GlobalTableNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0IndexNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0IndexNotFoundException(body, context);
    const contents = Object.assign({ name: "IndexNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidRestoreTimeException(body, context);
    const contents = Object.assign({ name: "InvalidRestoreTimeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "ItemCollectionSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(body, context);
    const contents = Object.assign({ name: "PointInTimeRecoveryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ProvisionedThroughputExceededException(body, context);
    const contents = Object.assign({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ReplicaAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ReplicaNotFoundException(body, context);
    const contents = Object.assign({ name: "ReplicaNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0RequestLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RequestLimitExceeded(body, context);
    const contents = Object.assign({ name: "RequestLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "TableAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TableInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableInUseException(body, context);
    const contents = Object.assign({ name: "TableInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TableNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TableNotFoundException(body, context);
    const contents = Object.assign({ name: "TableNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TransactionCanceledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionCanceledException(body, context);
    const contents = Object.assign({ name: "TransactionCanceledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TransactionConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionConflictException(body, context);
    const contents = Object.assign({ name: "TransactionConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TransactionInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TransactionInProgressException(body, context);
    const contents = Object.assign({ name: "TransactionInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0DescribeEndpointsRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0AttributeDefinition = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeType !== undefined) {
        bodyParams["AttributeType"] = input.AttributeType;
    }
    return bodyParams;
};
const serializeAws_json1_0AttributeDefinitions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0AttributeDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_0AttributeNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0AttributeUpdates = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0AttributeValueUpdate(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0AttributeValue = (input, context) => {
    const bodyParams = {};
    if (input.B !== undefined) {
        bodyParams["B"] = Buffer.from(input.B).toString("utf-8");
    }
    if (input.BOOL !== undefined) {
        bodyParams["BOOL"] = input.BOOL;
    }
    if (input.BS !== undefined) {
        bodyParams["BS"] = serializeAws_json1_0BinarySetAttributeValue(input.BS, context);
    }
    if (input.L !== undefined) {
        bodyParams["L"] = serializeAws_json1_0ListAttributeValue(input.L, context);
    }
    if (input.M !== undefined) {
        bodyParams["M"] = serializeAws_json1_0MapAttributeValue(input.M, context);
    }
    if (input.N !== undefined) {
        bodyParams["N"] = input.N;
    }
    if (input.NS !== undefined) {
        bodyParams["NS"] = serializeAws_json1_0NumberSetAttributeValue(input.NS, context);
    }
    if (input.NULL !== undefined) {
        bodyParams["NULL"] = input.NULL;
    }
    if (input.S !== undefined) {
        bodyParams["S"] = input.S;
    }
    if (input.SS !== undefined) {
        bodyParams["SS"] = serializeAws_json1_0StringSetAttributeValue(input.SS, context);
    }
    return bodyParams;
};
const serializeAws_json1_0AttributeValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0AttributeValue(entry, context));
    }
    return contents;
};
const serializeAws_json1_0AttributeValueUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Action !== undefined) {
        bodyParams["Action"] = input.Action;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = serializeAws_json1_0AttributeValue(input.Value, context);
    }
    return bodyParams;
};
const serializeAws_json1_0AutoScalingPolicyUpdate = (input, context) => {
    const bodyParams = {};
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    if (input.TargetTrackingScalingPolicyConfiguration !== undefined) {
        bodyParams["TargetTrackingScalingPolicyConfiguration"] = serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(input.TargetTrackingScalingPolicyConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_0AutoScalingSettingsUpdate = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingDisabled !== undefined) {
        bodyParams["AutoScalingDisabled"] = input.AutoScalingDisabled;
    }
    if (input.AutoScalingRoleArn !== undefined) {
        bodyParams["AutoScalingRoleArn"] = input.AutoScalingRoleArn;
    }
    if (input.MaximumUnits !== undefined) {
        bodyParams["MaximumUnits"] = input.MaximumUnits;
    }
    if (input.MinimumUnits !== undefined) {
        bodyParams["MinimumUnits"] = input.MinimumUnits;
    }
    if (input.ScalingPolicyUpdate !== undefined) {
        bodyParams["ScalingPolicyUpdate"] = serializeAws_json1_0AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
    const bodyParams = {};
    if (input.DisableScaleIn !== undefined) {
        bodyParams["DisableScaleIn"] = input.DisableScaleIn;
    }
    if (input.ScaleInCooldown !== undefined) {
        bodyParams["ScaleInCooldown"] = input.ScaleInCooldown;
    }
    if (input.ScaleOutCooldown !== undefined) {
        bodyParams["ScaleOutCooldown"] = input.ScaleOutCooldown;
    }
    if (input.TargetValue !== undefined) {
        bodyParams["TargetValue"] = input.TargetValue;
    }
    return bodyParams;
};
const serializeAws_json1_0BatchGetItemInput = (input, context) => {
    const bodyParams = {};
    if (input.RequestItems !== undefined) {
        bodyParams["RequestItems"] = serializeAws_json1_0BatchGetRequestMap(input.RequestItems, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_0BatchGetRequestMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0KeysAndAttributes(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0BatchWriteItemInput = (input, context) => {
    const bodyParams = {};
    if (input.RequestItems !== undefined) {
        bodyParams["RequestItems"] = serializeAws_json1_0BatchWriteItemRequestMap(input.RequestItems, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ReturnItemCollectionMetrics !== undefined) {
        bodyParams["ReturnItemCollectionMetrics"] =
            input.ReturnItemCollectionMetrics;
    }
    return bodyParams;
};
const serializeAws_json1_0BatchWriteItemRequestMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0WriteRequests(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0BinarySetAttributeValue = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(Buffer.from(entry).toString("utf-8"));
    }
    return contents;
};
const serializeAws_json1_0Condition = (input, context) => {
    const bodyParams = {};
    if (input.AttributeValueList !== undefined) {
        bodyParams["AttributeValueList"] = serializeAws_json1_0AttributeValueList(input.AttributeValueList, context);
    }
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    return bodyParams;
};
const serializeAws_json1_0ConditionCheck = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
        bodyParams["ReturnValuesOnConditionCheckFailure"] =
            input.ReturnValuesOnConditionCheckFailure;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0CreateBackupInput = (input, context) => {
    const bodyParams = {};
    if (input.BackupName !== undefined) {
        bodyParams["BackupName"] = input.BackupName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0CreateGlobalSecondaryIndexAction = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.KeySchema !== undefined) {
        bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(input.KeySchema, context);
    }
    if (input.Projection !== undefined) {
        bodyParams["Projection"] = serializeAws_json1_0Projection(input.Projection, context);
    }
    if (input.ProvisionedThroughput !== undefined) {
        bodyParams["ProvisionedThroughput"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CreateGlobalTableInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalTableName !== undefined) {
        bodyParams["GlobalTableName"] = input.GlobalTableName;
    }
    if (input.ReplicationGroup !== undefined) {
        bodyParams["ReplicationGroup"] = serializeAws_json1_0ReplicaList(input.ReplicationGroup, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CreateReplicaAction = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0CreateReplicationGroupMemberAction = (input, context) => {
    const bodyParams = {};
    if (input.GlobalSecondaryIndexes !== undefined) {
        bodyParams["GlobalSecondaryIndexes"] = serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context);
    }
    if (input.KMSMasterKeyId !== undefined) {
        bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
    }
    if (input.ProvisionedThroughputOverride !== undefined) {
        bodyParams["ProvisionedThroughputOverride"] = serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context);
    }
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0CreateTableInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributeDefinitions !== undefined) {
        bodyParams["AttributeDefinitions"] = serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context);
    }
    if (input.BillingMode !== undefined) {
        bodyParams["BillingMode"] = input.BillingMode;
    }
    if (input.GlobalSecondaryIndexes !== undefined) {
        bodyParams["GlobalSecondaryIndexes"] = serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context);
    }
    if (input.KeySchema !== undefined) {
        bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(input.KeySchema, context);
    }
    if (input.LocalSecondaryIndexes !== undefined) {
        bodyParams["LocalSecondaryIndexes"] = serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexes, context);
    }
    if (input.ProvisionedThroughput !== undefined) {
        bodyParams["ProvisionedThroughput"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context);
    }
    if (input.SSESpecification !== undefined) {
        bodyParams["SSESpecification"] = serializeAws_json1_0SSESpecification(input.SSESpecification, context);
    }
    if (input.StreamSpecification !== undefined) {
        bodyParams["StreamSpecification"] = serializeAws_json1_0StreamSpecification(input.StreamSpecification, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_0TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_0Delete = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
        bodyParams["ReturnValuesOnConditionCheckFailure"] =
            input.ReturnValuesOnConditionCheckFailure;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteBackupInput = (input, context) => {
    const bodyParams = {};
    if (input.BackupArn !== undefined) {
        bodyParams["BackupArn"] = input.BackupArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteItemInput = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ConditionalOperator !== undefined) {
        bodyParams["ConditionalOperator"] = input.ConditionalOperator;
    }
    if (input.Expected !== undefined) {
        bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(input.Expected, context);
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ReturnItemCollectionMetrics !== undefined) {
        bodyParams["ReturnItemCollectionMetrics"] =
            input.ReturnItemCollectionMetrics;
    }
    if (input.ReturnValues !== undefined) {
        bodyParams["ReturnValues"] = input.ReturnValues;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteReplicaAction = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteReplicationGroupMemberAction = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteRequest = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteTableInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeBackupInput = (input, context) => {
    const bodyParams = {};
    if (input.BackupArn !== undefined) {
        bodyParams["BackupArn"] = input.BackupArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeContinuousBackupsInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeContributorInsightsInput = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeGlobalTableInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalTableName !== undefined) {
        bodyParams["GlobalTableName"] = input.GlobalTableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeGlobalTableSettingsInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalTableName !== undefined) {
        bodyParams["GlobalTableName"] = input.GlobalTableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeLimitsInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0DescribeTableInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeTimeToLiveInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0ExpectedAttributeMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0ExpectedAttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0ExpectedAttributeValue = (input, context) => {
    const bodyParams = {};
    if (input.AttributeValueList !== undefined) {
        bodyParams["AttributeValueList"] = serializeAws_json1_0AttributeValueList(input.AttributeValueList, context);
    }
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.Exists !== undefined) {
        bodyParams["Exists"] = input.Exists;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = serializeAws_json1_0AttributeValue(input.Value, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ExpressionAttributeNameMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_0ExpressionAttributeValueMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0FilterConditionMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0Condition(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0Get = (input, context) => {
    const bodyParams = {};
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ProjectionExpression !== undefined) {
        bodyParams["ProjectionExpression"] = input.ProjectionExpression;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0GetItemInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToGet !== undefined) {
        bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(input.AttributesToGet, context);
    }
    if (input.ConsistentRead !== undefined) {
        bodyParams["ConsistentRead"] = input.ConsistentRead;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ProjectionExpression !== undefined) {
        bodyParams["ProjectionExpression"] = input.ProjectionExpression;
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0GlobalSecondaryIndex = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.KeySchema !== undefined) {
        bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(input.KeySchema, context);
    }
    if (input.Projection !== undefined) {
        bodyParams["Projection"] = serializeAws_json1_0Projection(input.Projection, context);
    }
    if (input.ProvisionedThroughput !== undefined) {
        bodyParams["ProvisionedThroughput"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context);
    }
    return bodyParams;
};
const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined) {
        bodyParams["ProvisionedWriteCapacityAutoScalingUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0GlobalSecondaryIndexList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0GlobalSecondaryIndex(entry, context));
    }
    return contents;
};
const serializeAws_json1_0GlobalSecondaryIndexUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Create !== undefined) {
        bodyParams["Create"] = serializeAws_json1_0CreateGlobalSecondaryIndexAction(input.Create, context);
    }
    if (input.Delete !== undefined) {
        bodyParams["Delete"] = serializeAws_json1_0DeleteGlobalSecondaryIndexAction(input.Delete, context);
    }
    if (input.Update !== undefined) {
        bodyParams["Update"] = serializeAws_json1_0UpdateGlobalSecondaryIndexAction(input.Update, context);
    }
    return bodyParams;
};
const serializeAws_json1_0GlobalSecondaryIndexUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined) {
        bodyParams["ProvisionedWriteCapacityAutoScalingSettingsUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate, context);
    }
    if (input.ProvisionedWriteCapacityUnits !== undefined) {
        bodyParams["ProvisionedWriteCapacityUnits"] =
            input.ProvisionedWriteCapacityUnits;
    }
    return bodyParams;
};
const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0Key = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0KeyConditions = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0Condition(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0KeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0Key(entry, context));
    }
    return contents;
};
const serializeAws_json1_0KeySchema = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0KeySchemaElement(entry, context));
    }
    return contents;
};
const serializeAws_json1_0KeySchemaElement = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.KeyType !== undefined) {
        bodyParams["KeyType"] = input.KeyType;
    }
    return bodyParams;
};
const serializeAws_json1_0KeysAndAttributes = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToGet !== undefined) {
        bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(input.AttributesToGet, context);
    }
    if (input.ConsistentRead !== undefined) {
        bodyParams["ConsistentRead"] = input.ConsistentRead;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.Keys !== undefined) {
        bodyParams["Keys"] = serializeAws_json1_0KeyList(input.Keys, context);
    }
    if (input.ProjectionExpression !== undefined) {
        bodyParams["ProjectionExpression"] = input.ProjectionExpression;
    }
    return bodyParams;
};
const serializeAws_json1_0ListAttributeValue = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0AttributeValue(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ListBackupsInput = (input, context) => {
    const bodyParams = {};
    if (input.BackupType !== undefined) {
        bodyParams["BackupType"] = input.BackupType;
    }
    if (input.ExclusiveStartBackupArn !== undefined) {
        bodyParams["ExclusiveStartBackupArn"] = input.ExclusiveStartBackupArn;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.TimeRangeLowerBound !== undefined) {
        bodyParams["TimeRangeLowerBound"] = Math.round(input.TimeRangeLowerBound.getTime() / 1000);
    }
    if (input.TimeRangeUpperBound !== undefined) {
        bodyParams["TimeRangeUpperBound"] = Math.round(input.TimeRangeUpperBound.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_0ListContributorInsightsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0ListGlobalTablesInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartGlobalTableName !== undefined) {
        bodyParams["ExclusiveStartGlobalTableName"] =
            input.ExclusiveStartGlobalTableName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0ListTablesInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartTableName !== undefined) {
        bodyParams["ExclusiveStartTableName"] = input.ExclusiveStartTableName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_0ListTagsOfResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_0LocalSecondaryIndex = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.KeySchema !== undefined) {
        bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(input.KeySchema, context);
    }
    if (input.Projection !== undefined) {
        bodyParams["Projection"] = serializeAws_json1_0Projection(input.Projection, context);
    }
    return bodyParams;
};
const serializeAws_json1_0LocalSecondaryIndexList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0LocalSecondaryIndex(entry, context));
    }
    return contents;
};
const serializeAws_json1_0MapAttributeValue = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0NonKeyAttributeNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0NumberSetAttributeValue = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0PointInTimeRecoverySpecification = (input, context) => {
    const bodyParams = {};
    if (input.PointInTimeRecoveryEnabled !== undefined) {
        bodyParams["PointInTimeRecoveryEnabled"] = input.PointInTimeRecoveryEnabled;
    }
    return bodyParams;
};
const serializeAws_json1_0Projection = (input, context) => {
    const bodyParams = {};
    if (input.NonKeyAttributes !== undefined) {
        bodyParams["NonKeyAttributes"] = serializeAws_json1_0NonKeyAttributeNameList(input.NonKeyAttributes, context);
    }
    if (input.ProjectionType !== undefined) {
        bodyParams["ProjectionType"] = input.ProjectionType;
    }
    return bodyParams;
};
const serializeAws_json1_0ProvisionedThroughput = (input, context) => {
    const bodyParams = {};
    if (input.ReadCapacityUnits !== undefined) {
        bodyParams["ReadCapacityUnits"] = input.ReadCapacityUnits;
    }
    if (input.WriteCapacityUnits !== undefined) {
        bodyParams["WriteCapacityUnits"] = input.WriteCapacityUnits;
    }
    return bodyParams;
};
const serializeAws_json1_0ProvisionedThroughputOverride = (input, context) => {
    const bodyParams = {};
    if (input.ReadCapacityUnits !== undefined) {
        bodyParams["ReadCapacityUnits"] = input.ReadCapacityUnits;
    }
    return bodyParams;
};
const serializeAws_json1_0Put = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Item !== undefined) {
        bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(input.Item, context);
    }
    if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
        bodyParams["ReturnValuesOnConditionCheckFailure"] =
            input.ReturnValuesOnConditionCheckFailure;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0PutItemInput = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ConditionalOperator !== undefined) {
        bodyParams["ConditionalOperator"] = input.ConditionalOperator;
    }
    if (input.Expected !== undefined) {
        bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(input.Expected, context);
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Item !== undefined) {
        bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(input.Item, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ReturnItemCollectionMetrics !== undefined) {
        bodyParams["ReturnItemCollectionMetrics"] =
            input.ReturnItemCollectionMetrics;
    }
    if (input.ReturnValues !== undefined) {
        bodyParams["ReturnValues"] = input.ReturnValues;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0PutItemInputAttributeMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_0PutRequest = (input, context) => {
    const bodyParams = {};
    if (input.Item !== undefined) {
        bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(input.Item, context);
    }
    return bodyParams;
};
const serializeAws_json1_0QueryInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToGet !== undefined) {
        bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(input.AttributesToGet, context);
    }
    if (input.ConditionalOperator !== undefined) {
        bodyParams["ConditionalOperator"] = input.ConditionalOperator;
    }
    if (input.ConsistentRead !== undefined) {
        bodyParams["ConsistentRead"] = input.ConsistentRead;
    }
    if (input.ExclusiveStartKey !== undefined) {
        bodyParams["ExclusiveStartKey"] = serializeAws_json1_0Key(input.ExclusiveStartKey, context);
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.FilterExpression !== undefined) {
        bodyParams["FilterExpression"] = input.FilterExpression;
    }
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.KeyConditionExpression !== undefined) {
        bodyParams["KeyConditionExpression"] = input.KeyConditionExpression;
    }
    if (input.KeyConditions !== undefined) {
        bodyParams["KeyConditions"] = serializeAws_json1_0KeyConditions(input.KeyConditions, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.ProjectionExpression !== undefined) {
        bodyParams["ProjectionExpression"] = input.ProjectionExpression;
    }
    if (input.QueryFilter !== undefined) {
        bodyParams["QueryFilter"] = serializeAws_json1_0FilterConditionMap(input.QueryFilter, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ScanIndexForward !== undefined) {
        bodyParams["ScanIndexForward"] = input.ScanIndexForward;
    }
    if (input.Select !== undefined) {
        bodyParams["Select"] = input.Select;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0Replica = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaAutoScalingUpdate = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    if (input.ReplicaGlobalSecondaryIndexUpdates !== undefined) {
        bodyParams["ReplicaGlobalSecondaryIndexUpdates"] = serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(input.ReplicaGlobalSecondaryIndexUpdates, context);
    }
    if (input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== undefined) {
        bodyParams["ReplicaProvisionedReadCapacityAutoScalingUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaAutoScalingUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndex = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedThroughputOverride !== undefined) {
        bodyParams["ProvisionedThroughputOverride"] = serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedReadCapacityAutoScalingUpdate !== undefined) {
        bodyParams["ProvisionedReadCapacityAutoScalingUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined) {
        bodyParams["ProvisionedReadCapacityAutoScalingSettingsUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingSettingsUpdate, context);
    }
    if (input.ProvisionedReadCapacityUnits !== undefined) {
        bodyParams["ProvisionedReadCapacityUnits"] =
            input.ProvisionedReadCapacityUnits;
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0Replica(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaSettingsUpdate = (input, context) => {
    const bodyParams = {};
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    if (input.ReplicaGlobalSecondaryIndexSettingsUpdate !== undefined) {
        bodyParams["ReplicaGlobalSecondaryIndexSettingsUpdate"] = serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(input.ReplicaGlobalSecondaryIndexSettingsUpdate, context);
    }
    if (input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined) {
        bodyParams["ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate, context);
    }
    if (input.ReplicaProvisionedReadCapacityUnits !== undefined) {
        bodyParams["ReplicaProvisionedReadCapacityUnits"] =
            input.ReplicaProvisionedReadCapacityUnits;
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaSettingsUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaSettingsUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicaUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Create !== undefined) {
        bodyParams["Create"] = serializeAws_json1_0CreateReplicaAction(input.Create, context);
    }
    if (input.Delete !== undefined) {
        bodyParams["Delete"] = serializeAws_json1_0DeleteReplicaAction(input.Delete, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicaUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicaUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ReplicationGroupUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Create !== undefined) {
        bodyParams["Create"] = serializeAws_json1_0CreateReplicationGroupMemberAction(input.Create, context);
    }
    if (input.Delete !== undefined) {
        bodyParams["Delete"] = serializeAws_json1_0DeleteReplicationGroupMemberAction(input.Delete, context);
    }
    if (input.Update !== undefined) {
        bodyParams["Update"] = serializeAws_json1_0UpdateReplicationGroupMemberAction(input.Update, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ReplicationGroupUpdateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ReplicationGroupUpdate(entry, context));
    }
    return contents;
};
const serializeAws_json1_0RestoreTableFromBackupInput = (input, context) => {
    const bodyParams = {};
    if (input.BackupArn !== undefined) {
        bodyParams["BackupArn"] = input.BackupArn;
    }
    if (input.BillingModeOverride !== undefined) {
        bodyParams["BillingModeOverride"] = input.BillingModeOverride;
    }
    if (input.GlobalSecondaryIndexOverride !== undefined) {
        bodyParams["GlobalSecondaryIndexOverride"] = serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context);
    }
    if (input.LocalSecondaryIndexOverride !== undefined) {
        bodyParams["LocalSecondaryIndexOverride"] = serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context);
    }
    if (input.ProvisionedThroughputOverride !== undefined) {
        bodyParams["ProvisionedThroughputOverride"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context);
    }
    if (input.TargetTableName !== undefined) {
        bodyParams["TargetTableName"] = input.TargetTableName;
    }
    return bodyParams;
};
const serializeAws_json1_0RestoreTableToPointInTimeInput = (input, context) => {
    const bodyParams = {};
    if (input.BillingModeOverride !== undefined) {
        bodyParams["BillingModeOverride"] = input.BillingModeOverride;
    }
    if (input.GlobalSecondaryIndexOverride !== undefined) {
        bodyParams["GlobalSecondaryIndexOverride"] = serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context);
    }
    if (input.LocalSecondaryIndexOverride !== undefined) {
        bodyParams["LocalSecondaryIndexOverride"] = serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context);
    }
    if (input.ProvisionedThroughputOverride !== undefined) {
        bodyParams["ProvisionedThroughputOverride"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context);
    }
    if (input.RestoreDateTime !== undefined) {
        bodyParams["RestoreDateTime"] = Math.round(input.RestoreDateTime.getTime() / 1000);
    }
    if (input.SourceTableName !== undefined) {
        bodyParams["SourceTableName"] = input.SourceTableName;
    }
    if (input.TargetTableName !== undefined) {
        bodyParams["TargetTableName"] = input.TargetTableName;
    }
    if (input.UseLatestRestorableTime !== undefined) {
        bodyParams["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
    }
    return bodyParams;
};
const serializeAws_json1_0SSESpecification = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.KMSMasterKeyId !== undefined) {
        bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
    }
    if (input.SSEType !== undefined) {
        bodyParams["SSEType"] = input.SSEType;
    }
    return bodyParams;
};
const serializeAws_json1_0ScanInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributesToGet !== undefined) {
        bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(input.AttributesToGet, context);
    }
    if (input.ConditionalOperator !== undefined) {
        bodyParams["ConditionalOperator"] = input.ConditionalOperator;
    }
    if (input.ConsistentRead !== undefined) {
        bodyParams["ConsistentRead"] = input.ConsistentRead;
    }
    if (input.ExclusiveStartKey !== undefined) {
        bodyParams["ExclusiveStartKey"] = serializeAws_json1_0Key(input.ExclusiveStartKey, context);
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.FilterExpression !== undefined) {
        bodyParams["FilterExpression"] = input.FilterExpression;
    }
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.ProjectionExpression !== undefined) {
        bodyParams["ProjectionExpression"] = input.ProjectionExpression;
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ScanFilter !== undefined) {
        bodyParams["ScanFilter"] = serializeAws_json1_0FilterConditionMap(input.ScanFilter, context);
    }
    if (input.Segment !== undefined) {
        bodyParams["Segment"] = input.Segment;
    }
    if (input.Select !== undefined) {
        bodyParams["Select"] = input.Select;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.TotalSegments !== undefined) {
        bodyParams["TotalSegments"] = input.TotalSegments;
    }
    return bodyParams;
};
const serializeAws_json1_0StreamSpecification = (input, context) => {
    const bodyParams = {};
    if (input.StreamEnabled !== undefined) {
        bodyParams["StreamEnabled"] = input.StreamEnabled;
    }
    if (input.StreamViewType !== undefined) {
        bodyParams["StreamViewType"] = input.StreamViewType;
    }
    return bodyParams;
};
const serializeAws_json1_0StringSetAttributeValue = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_0TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_0TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_0TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TimeToLiveSpecification = (input, context) => {
    const bodyParams = {};
    if (input.AttributeName !== undefined) {
        bodyParams["AttributeName"] = input.AttributeName;
    }
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    return bodyParams;
};
const serializeAws_json1_0TransactGetItem = (input, context) => {
    const bodyParams = {};
    if (input.Get !== undefined) {
        bodyParams["Get"] = serializeAws_json1_0Get(input.Get, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TransactGetItemList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0TransactGetItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_0TransactGetItemsInput = (input, context) => {
    const bodyParams = {};
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.TransactItems !== undefined) {
        bodyParams["TransactItems"] = serializeAws_json1_0TransactGetItemList(input.TransactItems, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TransactWriteItem = (input, context) => {
    const bodyParams = {};
    if (input.ConditionCheck !== undefined) {
        bodyParams["ConditionCheck"] = serializeAws_json1_0ConditionCheck(input.ConditionCheck, context);
    }
    if (input.Delete !== undefined) {
        bodyParams["Delete"] = serializeAws_json1_0Delete(input.Delete, context);
    }
    if (input.Put !== undefined) {
        bodyParams["Put"] = serializeAws_json1_0Put(input.Put, context);
    }
    if (input.Update !== undefined) {
        bodyParams["Update"] = serializeAws_json1_0Update(input.Update, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TransactWriteItemList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0TransactWriteItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_0TransactWriteItemsInput = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ReturnItemCollectionMetrics !== undefined) {
        bodyParams["ReturnItemCollectionMetrics"] =
            input.ReturnItemCollectionMetrics;
    }
    if (input.TransactItems !== undefined) {
        bodyParams["TransactItems"] = serializeAws_json1_0TransactWriteItemList(input.TransactItems, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_0TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_0Update = (input, context) => {
    const bodyParams = {};
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
        bodyParams["ReturnValuesOnConditionCheckFailure"] =
            input.ReturnValuesOnConditionCheckFailure;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.UpdateExpression !== undefined) {
        bodyParams["UpdateExpression"] = input.UpdateExpression;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateContinuousBackupsInput = (input, context) => {
    const bodyParams = {};
    if (input.PointInTimeRecoverySpecification !== undefined) {
        bodyParams["PointInTimeRecoverySpecification"] = serializeAws_json1_0PointInTimeRecoverySpecification(input.PointInTimeRecoverySpecification, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateContributorInsightsInput = (input, context) => {
    const bodyParams = {};
    if (input.ContributorInsightsAction !== undefined) {
        bodyParams["ContributorInsightsAction"] = input.ContributorInsightsAction;
    }
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (input, context) => {
    const bodyParams = {};
    if (input.IndexName !== undefined) {
        bodyParams["IndexName"] = input.IndexName;
    }
    if (input.ProvisionedThroughput !== undefined) {
        bodyParams["ProvisionedThroughput"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateGlobalTableInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalTableName !== undefined) {
        bodyParams["GlobalTableName"] = input.GlobalTableName;
    }
    if (input.ReplicaUpdates !== undefined) {
        bodyParams["ReplicaUpdates"] = serializeAws_json1_0ReplicaUpdateList(input.ReplicaUpdates, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateGlobalTableSettingsInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalTableBillingMode !== undefined) {
        bodyParams["GlobalTableBillingMode"] = input.GlobalTableBillingMode;
    }
    if (input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== undefined) {
        bodyParams["GlobalTableGlobalSecondaryIndexSettingsUpdate"] = serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(input.GlobalTableGlobalSecondaryIndexSettingsUpdate, context);
    }
    if (input.GlobalTableName !== undefined) {
        bodyParams["GlobalTableName"] = input.GlobalTableName;
    }
    if (input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !==
        undefined) {
        bodyParams["GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate, context);
    }
    if (input.GlobalTableProvisionedWriteCapacityUnits !== undefined) {
        bodyParams["GlobalTableProvisionedWriteCapacityUnits"] =
            input.GlobalTableProvisionedWriteCapacityUnits;
    }
    if (input.ReplicaSettingsUpdate !== undefined) {
        bodyParams["ReplicaSettingsUpdate"] = serializeAws_json1_0ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateItemInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributeUpdates !== undefined) {
        bodyParams["AttributeUpdates"] = serializeAws_json1_0AttributeUpdates(input.AttributeUpdates, context);
    }
    if (input.ConditionExpression !== undefined) {
        bodyParams["ConditionExpression"] = input.ConditionExpression;
    }
    if (input.ConditionalOperator !== undefined) {
        bodyParams["ConditionalOperator"] = input.ConditionalOperator;
    }
    if (input.Expected !== undefined) {
        bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(input.Expected, context);
    }
    if (input.ExpressionAttributeNames !== undefined) {
        bodyParams["ExpressionAttributeNames"] = serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context);
    }
    if (input.ExpressionAttributeValues !== undefined) {
        bodyParams["ExpressionAttributeValues"] = serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context);
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
    }
    if (input.ReturnConsumedCapacity !== undefined) {
        bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
    }
    if (input.ReturnItemCollectionMetrics !== undefined) {
        bodyParams["ReturnItemCollectionMetrics"] =
            input.ReturnItemCollectionMetrics;
    }
    if (input.ReturnValues !== undefined) {
        bodyParams["ReturnValues"] = input.ReturnValues;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.UpdateExpression !== undefined) {
        bodyParams["UpdateExpression"] = input.UpdateExpression;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateReplicationGroupMemberAction = (input, context) => {
    const bodyParams = {};
    if (input.GlobalSecondaryIndexes !== undefined) {
        bodyParams["GlobalSecondaryIndexes"] = serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context);
    }
    if (input.KMSMasterKeyId !== undefined) {
        bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
    }
    if (input.ProvisionedThroughputOverride !== undefined) {
        bodyParams["ProvisionedThroughputOverride"] = serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context);
    }
    if (input.RegionName !== undefined) {
        bodyParams["RegionName"] = input.RegionName;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateTableInput = (input, context) => {
    const bodyParams = {};
    if (input.AttributeDefinitions !== undefined) {
        bodyParams["AttributeDefinitions"] = serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context);
    }
    if (input.BillingMode !== undefined) {
        bodyParams["BillingMode"] = input.BillingMode;
    }
    if (input.GlobalSecondaryIndexUpdates !== undefined) {
        bodyParams["GlobalSecondaryIndexUpdates"] = serializeAws_json1_0GlobalSecondaryIndexUpdateList(input.GlobalSecondaryIndexUpdates, context);
    }
    if (input.ProvisionedThroughput !== undefined) {
        bodyParams["ProvisionedThroughput"] = serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context);
    }
    if (input.ReplicaUpdates !== undefined) {
        bodyParams["ReplicaUpdates"] = serializeAws_json1_0ReplicationGroupUpdateList(input.ReplicaUpdates, context);
    }
    if (input.SSESpecification !== undefined) {
        bodyParams["SSESpecification"] = serializeAws_json1_0SSESpecification(input.SSESpecification, context);
    }
    if (input.StreamSpecification !== undefined) {
        bodyParams["StreamSpecification"] = serializeAws_json1_0StreamSpecification(input.StreamSpecification, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (input, context) => {
    const bodyParams = {};
    if (input.GlobalSecondaryIndexUpdates !== undefined) {
        bodyParams["GlobalSecondaryIndexUpdates"] = serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(input.GlobalSecondaryIndexUpdates, context);
    }
    if (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined) {
        bodyParams["ProvisionedWriteCapacityAutoScalingUpdate"] = serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context);
    }
    if (input.ReplicaUpdates !== undefined) {
        bodyParams["ReplicaUpdates"] = serializeAws_json1_0ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateTimeToLiveInput = (input, context) => {
    const bodyParams = {};
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.TimeToLiveSpecification !== undefined) {
        bodyParams["TimeToLiveSpecification"] = serializeAws_json1_0TimeToLiveSpecification(input.TimeToLiveSpecification, context);
    }
    return bodyParams;
};
const serializeAws_json1_0WriteRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeleteRequest !== undefined) {
        bodyParams["DeleteRequest"] = serializeAws_json1_0DeleteRequest(input.DeleteRequest, context);
    }
    if (input.PutRequest !== undefined) {
        bodyParams["PutRequest"] = serializeAws_json1_0PutRequest(input.PutRequest, context);
    }
    return bodyParams;
};
const serializeAws_json1_0WriteRequests = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0WriteRequest(entry, context));
    }
    return contents;
};
const deserializeAws_json1_0DescribeEndpointsResponse = (output, context) => {
    let contents = {
        __type: "DescribeEndpointsResponse",
        Endpoints: undefined
    };
    if (output.Endpoints !== undefined && output.Endpoints !== null) {
        contents.Endpoints = deserializeAws_json1_0Endpoints(output.Endpoints, context);
    }
    return contents;
};
const deserializeAws_json1_0Endpoint = (output, context) => {
    let contents = {
        __type: "Endpoint",
        Address: undefined,
        CachePeriodInMinutes: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.CachePeriodInMinutes !== undefined &&
        output.CachePeriodInMinutes !== null) {
        contents.CachePeriodInMinutes = output.CachePeriodInMinutes;
    }
    return contents;
};
const deserializeAws_json1_0Endpoints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Endpoint(entry, context));
};
const deserializeAws_json1_0InvalidEndpointException = (output, context) => {
    let contents = {
        __type: "InvalidEndpointException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0ArchivalSummary = (output, context) => {
    let contents = {
        __type: "ArchivalSummary",
        ArchivalBackupArn: undefined,
        ArchivalDateTime: undefined,
        ArchivalReason: undefined
    };
    if (output.ArchivalBackupArn !== undefined &&
        output.ArchivalBackupArn !== null) {
        contents.ArchivalBackupArn = output.ArchivalBackupArn;
    }
    if (output.ArchivalDateTime !== undefined &&
        output.ArchivalDateTime !== null) {
        contents.ArchivalDateTime = new Date(Math.round(output.ArchivalDateTime * 1000));
    }
    if (output.ArchivalReason !== undefined && output.ArchivalReason !== null) {
        contents.ArchivalReason = output.ArchivalReason;
    }
    return contents;
};
const deserializeAws_json1_0AttributeDefinition = (output, context) => {
    let contents = {
        __type: "AttributeDefinition",
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
const deserializeAws_json1_0AttributeDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AttributeDefinition(entry, context));
};
const deserializeAws_json1_0AttributeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0AttributeNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0AttributeValue = (output, context) => {
    let contents = {
        __type: "AttributeValue",
        B: undefined,
        BOOL: undefined,
        BS: undefined,
        L: undefined,
        M: undefined,
        N: undefined,
        NS: undefined,
        NULL: undefined,
        S: undefined,
        SS: undefined
    };
    if (output.B !== undefined && output.B !== null) {
        contents.B = Uint8Array.from(output.B);
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        contents.BOOL = output.BOOL;
    }
    if (output.BS !== undefined && output.BS !== null) {
        contents.BS = deserializeAws_json1_0BinarySetAttributeValue(output.BS, context);
    }
    if (output.L !== undefined && output.L !== null) {
        contents.L = deserializeAws_json1_0ListAttributeValue(output.L, context);
    }
    if (output.M !== undefined && output.M !== null) {
        contents.M = deserializeAws_json1_0MapAttributeValue(output.M, context);
    }
    if (output.N !== undefined && output.N !== null) {
        contents.N = output.N;
    }
    if (output.NS !== undefined && output.NS !== null) {
        contents.NS = deserializeAws_json1_0NumberSetAttributeValue(output.NS, context);
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        contents.NULL = output.NULL;
    }
    if (output.S !== undefined && output.S !== null) {
        contents.S = output.S;
    }
    if (output.SS !== undefined && output.SS !== null) {
        contents.SS = deserializeAws_json1_0StringSetAttributeValue(output.SS, context);
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingPolicyDescription = (output, context) => {
    let contents = {
        __type: "AutoScalingPolicyDescription",
        PolicyName: undefined,
        TargetTrackingScalingPolicyConfiguration: undefined
    };
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    if (output.TargetTrackingScalingPolicyConfiguration !== undefined &&
        output.TargetTrackingScalingPolicyConfiguration !== null) {
        contents.TargetTrackingScalingPolicyConfiguration = deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(output.TargetTrackingScalingPolicyConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingPolicyDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AutoScalingPolicyDescription(entry, context));
};
const deserializeAws_json1_0AutoScalingSettingsDescription = (output, context) => {
    let contents = {
        __type: "AutoScalingSettingsDescription",
        AutoScalingDisabled: undefined,
        AutoScalingRoleArn: undefined,
        MaximumUnits: undefined,
        MinimumUnits: undefined,
        ScalingPolicies: undefined
    };
    if (output.AutoScalingDisabled !== undefined &&
        output.AutoScalingDisabled !== null) {
        contents.AutoScalingDisabled = output.AutoScalingDisabled;
    }
    if (output.AutoScalingRoleArn !== undefined &&
        output.AutoScalingRoleArn !== null) {
        contents.AutoScalingRoleArn = output.AutoScalingRoleArn;
    }
    if (output.MaximumUnits !== undefined && output.MaximumUnits !== null) {
        contents.MaximumUnits = output.MaximumUnits;
    }
    if (output.MinimumUnits !== undefined && output.MinimumUnits !== null) {
        contents.MinimumUnits = output.MinimumUnits;
    }
    if (output.ScalingPolicies !== undefined && output.ScalingPolicies !== null) {
        contents.ScalingPolicies = deserializeAws_json1_0AutoScalingPolicyDescriptionList(output.ScalingPolicies, context);
    }
    return contents;
};
const deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
    let contents = {
        __type: "AutoScalingTargetTrackingScalingPolicyConfigurationDescription",
        DisableScaleIn: undefined,
        ScaleInCooldown: undefined,
        ScaleOutCooldown: undefined,
        TargetValue: undefined
    };
    if (output.DisableScaleIn !== undefined && output.DisableScaleIn !== null) {
        contents.DisableScaleIn = output.DisableScaleIn;
    }
    if (output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null) {
        contents.ScaleInCooldown = output.ScaleInCooldown;
    }
    if (output.ScaleOutCooldown !== undefined &&
        output.ScaleOutCooldown !== null) {
        contents.ScaleOutCooldown = output.ScaleOutCooldown;
    }
    if (output.TargetValue !== undefined && output.TargetValue !== null) {
        contents.TargetValue = output.TargetValue;
    }
    return contents;
};
const deserializeAws_json1_0BackupDescription = (output, context) => {
    let contents = {
        __type: "BackupDescription",
        BackupDetails: undefined,
        SourceTableDetails: undefined,
        SourceTableFeatureDetails: undefined
    };
    if (output.BackupDetails !== undefined && output.BackupDetails !== null) {
        contents.BackupDetails = deserializeAws_json1_0BackupDetails(output.BackupDetails, context);
    }
    if (output.SourceTableDetails !== undefined &&
        output.SourceTableDetails !== null) {
        contents.SourceTableDetails = deserializeAws_json1_0SourceTableDetails(output.SourceTableDetails, context);
    }
    if (output.SourceTableFeatureDetails !== undefined &&
        output.SourceTableFeatureDetails !== null) {
        contents.SourceTableFeatureDetails = deserializeAws_json1_0SourceTableFeatureDetails(output.SourceTableFeatureDetails, context);
    }
    return contents;
};
const deserializeAws_json1_0BackupDetails = (output, context) => {
    let contents = {
        __type: "BackupDetails",
        BackupArn: undefined,
        BackupCreationDateTime: undefined,
        BackupExpiryDateTime: undefined,
        BackupName: undefined,
        BackupSizeBytes: undefined,
        BackupStatus: undefined,
        BackupType: undefined
    };
    if (output.BackupArn !== undefined && output.BackupArn !== null) {
        contents.BackupArn = output.BackupArn;
    }
    if (output.BackupCreationDateTime !== undefined &&
        output.BackupCreationDateTime !== null) {
        contents.BackupCreationDateTime = new Date(Math.round(output.BackupCreationDateTime * 1000));
    }
    if (output.BackupExpiryDateTime !== undefined &&
        output.BackupExpiryDateTime !== null) {
        contents.BackupExpiryDateTime = new Date(Math.round(output.BackupExpiryDateTime * 1000));
    }
    if (output.BackupName !== undefined && output.BackupName !== null) {
        contents.BackupName = output.BackupName;
    }
    if (output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null) {
        contents.BackupSizeBytes = output.BackupSizeBytes;
    }
    if (output.BackupStatus !== undefined && output.BackupStatus !== null) {
        contents.BackupStatus = output.BackupStatus;
    }
    if (output.BackupType !== undefined && output.BackupType !== null) {
        contents.BackupType = output.BackupType;
    }
    return contents;
};
const deserializeAws_json1_0BackupInUseException = (output, context) => {
    let contents = {
        __type: "BackupInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0BackupNotFoundException = (output, context) => {
    let contents = {
        __type: "BackupNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0BackupSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0BackupSummary(entry, context));
};
const deserializeAws_json1_0BackupSummary = (output, context) => {
    let contents = {
        __type: "BackupSummary",
        BackupArn: undefined,
        BackupCreationDateTime: undefined,
        BackupExpiryDateTime: undefined,
        BackupName: undefined,
        BackupSizeBytes: undefined,
        BackupStatus: undefined,
        BackupType: undefined,
        TableArn: undefined,
        TableId: undefined,
        TableName: undefined
    };
    if (output.BackupArn !== undefined && output.BackupArn !== null) {
        contents.BackupArn = output.BackupArn;
    }
    if (output.BackupCreationDateTime !== undefined &&
        output.BackupCreationDateTime !== null) {
        contents.BackupCreationDateTime = new Date(Math.round(output.BackupCreationDateTime * 1000));
    }
    if (output.BackupExpiryDateTime !== undefined &&
        output.BackupExpiryDateTime !== null) {
        contents.BackupExpiryDateTime = new Date(Math.round(output.BackupExpiryDateTime * 1000));
    }
    if (output.BackupName !== undefined && output.BackupName !== null) {
        contents.BackupName = output.BackupName;
    }
    if (output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null) {
        contents.BackupSizeBytes = output.BackupSizeBytes;
    }
    if (output.BackupStatus !== undefined && output.BackupStatus !== null) {
        contents.BackupStatus = output.BackupStatus;
    }
    if (output.BackupType !== undefined && output.BackupType !== null) {
        contents.BackupType = output.BackupType;
    }
    if (output.TableArn !== undefined && output.TableArn !== null) {
        contents.TableArn = output.TableArn;
    }
    if (output.TableId !== undefined && output.TableId !== null) {
        contents.TableId = output.TableId;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0BatchGetItemOutput = (output, context) => {
    let contents = {
        __type: "BatchGetItemOutput",
        ConsumedCapacity: undefined,
        Responses: undefined,
        UnprocessedKeys: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context);
    }
    if (output.Responses !== undefined && output.Responses !== null) {
        contents.Responses = deserializeAws_json1_0BatchGetResponseMap(output.Responses, context);
    }
    if (output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null) {
        contents.UnprocessedKeys = deserializeAws_json1_0BatchGetRequestMap(output.UnprocessedKeys, context);
    }
    return contents;
};
const deserializeAws_json1_0BatchGetRequestMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0KeysAndAttributes(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0BatchGetResponseMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0ItemList(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0BatchWriteItemOutput = (output, context) => {
    let contents = {
        __type: "BatchWriteItemOutput",
        ConsumedCapacity: undefined,
        ItemCollectionMetrics: undefined,
        UnprocessedItems: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context);
    }
    if (output.ItemCollectionMetrics !== undefined &&
        output.ItemCollectionMetrics !== null) {
        contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context);
    }
    if (output.UnprocessedItems !== undefined &&
        output.UnprocessedItems !== null) {
        contents.UnprocessedItems = deserializeAws_json1_0BatchWriteItemRequestMap(output.UnprocessedItems, context);
    }
    return contents;
};
const deserializeAws_json1_0BatchWriteItemRequestMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0WriteRequests(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0BillingModeSummary = (output, context) => {
    let contents = {
        __type: "BillingModeSummary",
        BillingMode: undefined,
        LastUpdateToPayPerRequestDateTime: undefined
    };
    if (output.BillingMode !== undefined && output.BillingMode !== null) {
        contents.BillingMode = output.BillingMode;
    }
    if (output.LastUpdateToPayPerRequestDateTime !== undefined &&
        output.LastUpdateToPayPerRequestDateTime !== null) {
        contents.LastUpdateToPayPerRequestDateTime = new Date(Math.round(output.LastUpdateToPayPerRequestDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_0BinarySetAttributeValue = (output, context) => {
    return (output || []).map((entry) => Uint8Array.from(entry));
};
const deserializeAws_json1_0CancellationReason = (output, context) => {
    let contents = {
        __type: "CancellationReason",
        Code: undefined,
        Item: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Item !== undefined && output.Item !== null) {
        contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0CancellationReasonList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0CancellationReason(entry, context));
};
const deserializeAws_json1_0Capacity = (output, context) => {
    let contents = {
        __type: "Capacity",
        CapacityUnits: undefined,
        ReadCapacityUnits: undefined,
        WriteCapacityUnits: undefined
    };
    if (output.CapacityUnits !== undefined && output.CapacityUnits !== null) {
        contents.CapacityUnits = output.CapacityUnits;
    }
    if (output.ReadCapacityUnits !== undefined &&
        output.ReadCapacityUnits !== null) {
        contents.ReadCapacityUnits = output.ReadCapacityUnits;
    }
    if (output.WriteCapacityUnits !== undefined &&
        output.WriteCapacityUnits !== null) {
        contents.WriteCapacityUnits = output.WriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0ConditionalCheckFailedException = (output, context) => {
    let contents = {
        __type: "ConditionalCheckFailedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ConsumedCapacity = (output, context) => {
    let contents = {
        __type: "ConsumedCapacity",
        CapacityUnits: undefined,
        GlobalSecondaryIndexes: undefined,
        LocalSecondaryIndexes: undefined,
        ReadCapacityUnits: undefined,
        Table: undefined,
        TableName: undefined,
        WriteCapacityUnits: undefined
    };
    if (output.CapacityUnits !== undefined && output.CapacityUnits !== null) {
        contents.CapacityUnits = output.CapacityUnits;
    }
    if (output.GlobalSecondaryIndexes !== undefined &&
        output.GlobalSecondaryIndexes !== null) {
        contents.GlobalSecondaryIndexes = deserializeAws_json1_0SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context);
    }
    if (output.LocalSecondaryIndexes !== undefined &&
        output.LocalSecondaryIndexes !== null) {
        contents.LocalSecondaryIndexes = deserializeAws_json1_0SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context);
    }
    if (output.ReadCapacityUnits !== undefined &&
        output.ReadCapacityUnits !== null) {
        contents.ReadCapacityUnits = output.ReadCapacityUnits;
    }
    if (output.Table !== undefined && output.Table !== null) {
        contents.Table = deserializeAws_json1_0Capacity(output.Table, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.WriteCapacityUnits !== undefined &&
        output.WriteCapacityUnits !== null) {
        contents.WriteCapacityUnits = output.WriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0ConsumedCapacityMultiple = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ConsumedCapacity(entry, context));
};
const deserializeAws_json1_0ContinuousBackupsDescription = (output, context) => {
    let contents = {
        __type: "ContinuousBackupsDescription",
        ContinuousBackupsStatus: undefined,
        PointInTimeRecoveryDescription: undefined
    };
    if (output.ContinuousBackupsStatus !== undefined &&
        output.ContinuousBackupsStatus !== null) {
        contents.ContinuousBackupsStatus = output.ContinuousBackupsStatus;
    }
    if (output.PointInTimeRecoveryDescription !== undefined &&
        output.PointInTimeRecoveryDescription !== null) {
        contents.PointInTimeRecoveryDescription = deserializeAws_json1_0PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0ContinuousBackupsUnavailableException = (output, context) => {
    let contents = {
        __type: "ContinuousBackupsUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ContributorInsightsRuleList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0ContributorInsightsSummaries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ContributorInsightsSummary(entry, context));
};
const deserializeAws_json1_0ContributorInsightsSummary = (output, context) => {
    let contents = {
        __type: "ContributorInsightsSummary",
        ContributorInsightsStatus: undefined,
        IndexName: undefined,
        TableName: undefined
    };
    if (output.ContributorInsightsStatus !== undefined &&
        output.ContributorInsightsStatus !== null) {
        contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0CreateBackupOutput = (output, context) => {
    let contents = {
        __type: "CreateBackupOutput",
        BackupDetails: undefined
    };
    if (output.BackupDetails !== undefined && output.BackupDetails !== null) {
        contents.BackupDetails = deserializeAws_json1_0BackupDetails(output.BackupDetails, context);
    }
    return contents;
};
const deserializeAws_json1_0CreateGlobalTableOutput = (output, context) => {
    let contents = {
        __type: "CreateGlobalTableOutput",
        GlobalTableDescription: undefined
    };
    if (output.GlobalTableDescription !== undefined &&
        output.GlobalTableDescription !== null) {
        contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0CreateTableOutput = (output, context) => {
    let contents = {
        __type: "CreateTableOutput",
        TableDescription: undefined
    };
    if (output.TableDescription !== undefined &&
        output.TableDescription !== null) {
        contents.TableDescription = deserializeAws_json1_0TableDescription(output.TableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DeleteBackupOutput = (output, context) => {
    let contents = {
        __type: "DeleteBackupOutput",
        BackupDescription: undefined
    };
    if (output.BackupDescription !== undefined &&
        output.BackupDescription !== null) {
        contents.BackupDescription = deserializeAws_json1_0BackupDescription(output.BackupDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DeleteItemOutput = (output, context) => {
    let contents = {
        __type: "DeleteItemOutput",
        Attributes: undefined,
        ConsumedCapacity: undefined,
        ItemCollectionMetrics: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_0AttributeMap(output.Attributes, context);
    }
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.ItemCollectionMetrics !== undefined &&
        output.ItemCollectionMetrics !== null) {
        contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0DeleteRequest = (output, context) => {
    let contents = {
        __type: "DeleteRequest",
        Key: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = deserializeAws_json1_0Key(output.Key, context);
    }
    return contents;
};
const deserializeAws_json1_0DeleteTableOutput = (output, context) => {
    let contents = {
        __type: "DeleteTableOutput",
        TableDescription: undefined
    };
    if (output.TableDescription !== undefined &&
        output.TableDescription !== null) {
        contents.TableDescription = deserializeAws_json1_0TableDescription(output.TableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeBackupOutput = (output, context) => {
    let contents = {
        __type: "DescribeBackupOutput",
        BackupDescription: undefined
    };
    if (output.BackupDescription !== undefined &&
        output.BackupDescription !== null) {
        contents.BackupDescription = deserializeAws_json1_0BackupDescription(output.BackupDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeContinuousBackupsOutput = (output, context) => {
    let contents = {
        __type: "DescribeContinuousBackupsOutput",
        ContinuousBackupsDescription: undefined
    };
    if (output.ContinuousBackupsDescription !== undefined &&
        output.ContinuousBackupsDescription !== null) {
        contents.ContinuousBackupsDescription = deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeContributorInsightsOutput = (output, context) => {
    let contents = {
        __type: "DescribeContributorInsightsOutput",
        ContributorInsightsRuleList: undefined,
        ContributorInsightsStatus: undefined,
        FailureException: undefined,
        IndexName: undefined,
        LastUpdateDateTime: undefined,
        TableName: undefined
    };
    if (output.ContributorInsightsRuleList !== undefined &&
        output.ContributorInsightsRuleList !== null) {
        contents.ContributorInsightsRuleList = deserializeAws_json1_0ContributorInsightsRuleList(output.ContributorInsightsRuleList, context);
    }
    if (output.ContributorInsightsStatus !== undefined &&
        output.ContributorInsightsStatus !== null) {
        contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
    }
    if (output.FailureException !== undefined &&
        output.FailureException !== null) {
        contents.FailureException = deserializeAws_json1_0FailureException(output.FailureException, context);
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.LastUpdateDateTime !== undefined &&
        output.LastUpdateDateTime !== null) {
        contents.LastUpdateDateTime = new Date(Math.round(output.LastUpdateDateTime * 1000));
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0DescribeGlobalTableOutput = (output, context) => {
    let contents = {
        __type: "DescribeGlobalTableOutput",
        GlobalTableDescription: undefined
    };
    if (output.GlobalTableDescription !== undefined &&
        output.GlobalTableDescription !== null) {
        contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (output, context) => {
    let contents = {
        __type: "DescribeGlobalTableSettingsOutput",
        GlobalTableName: undefined,
        ReplicaSettings: undefined
    };
    if (output.GlobalTableName !== undefined && output.GlobalTableName !== null) {
        contents.GlobalTableName = output.GlobalTableName;
    }
    if (output.ReplicaSettings !== undefined && output.ReplicaSettings !== null) {
        contents.ReplicaSettings = deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeLimitsOutput = (output, context) => {
    let contents = {
        __type: "DescribeLimitsOutput",
        AccountMaxReadCapacityUnits: undefined,
        AccountMaxWriteCapacityUnits: undefined,
        TableMaxReadCapacityUnits: undefined,
        TableMaxWriteCapacityUnits: undefined
    };
    if (output.AccountMaxReadCapacityUnits !== undefined &&
        output.AccountMaxReadCapacityUnits !== null) {
        contents.AccountMaxReadCapacityUnits = output.AccountMaxReadCapacityUnits;
    }
    if (output.AccountMaxWriteCapacityUnits !== undefined &&
        output.AccountMaxWriteCapacityUnits !== null) {
        contents.AccountMaxWriteCapacityUnits = output.AccountMaxWriteCapacityUnits;
    }
    if (output.TableMaxReadCapacityUnits !== undefined &&
        output.TableMaxReadCapacityUnits !== null) {
        contents.TableMaxReadCapacityUnits = output.TableMaxReadCapacityUnits;
    }
    if (output.TableMaxWriteCapacityUnits !== undefined &&
        output.TableMaxWriteCapacityUnits !== null) {
        contents.TableMaxWriteCapacityUnits = output.TableMaxWriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0DescribeTableOutput = (output, context) => {
    let contents = {
        __type: "DescribeTableOutput",
        Table: undefined
    };
    if (output.Table !== undefined && output.Table !== null) {
        contents.Table = deserializeAws_json1_0TableDescription(output.Table, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (output, context) => {
    let contents = {
        __type: "DescribeTableReplicaAutoScalingOutput",
        TableAutoScalingDescription: undefined
    };
    if (output.TableAutoScalingDescription !== undefined &&
        output.TableAutoScalingDescription !== null) {
        contents.TableAutoScalingDescription = deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0DescribeTimeToLiveOutput = (output, context) => {
    let contents = {
        __type: "DescribeTimeToLiveOutput",
        TimeToLiveDescription: undefined
    };
    if (output.TimeToLiveDescription !== undefined &&
        output.TimeToLiveDescription !== null) {
        contents.TimeToLiveDescription = deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0ExpressionAttributeNameMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_0FailureException = (output, context) => {
    let contents = {
        __type: "FailureException",
        ExceptionDescription: undefined,
        ExceptionName: undefined
    };
    if (output.ExceptionDescription !== undefined &&
        output.ExceptionDescription !== null) {
        contents.ExceptionDescription = output.ExceptionDescription;
    }
    if (output.ExceptionName !== undefined && output.ExceptionName !== null) {
        contents.ExceptionName = output.ExceptionName;
    }
    return contents;
};
const deserializeAws_json1_0GetItemOutput = (output, context) => {
    let contents = {
        __type: "GetItemOutput",
        ConsumedCapacity: undefined,
        Item: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.Item !== undefined && output.Item !== null) {
        contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
    }
    return contents;
};
const deserializeAws_json1_0GlobalSecondaryIndexDescription = (output, context) => {
    let contents = {
        __type: "GlobalSecondaryIndexDescription",
        Backfilling: undefined,
        IndexArn: undefined,
        IndexName: undefined,
        IndexSizeBytes: undefined,
        IndexStatus: undefined,
        ItemCount: undefined,
        KeySchema: undefined,
        Projection: undefined,
        ProvisionedThroughput: undefined
    };
    if (output.Backfilling !== undefined && output.Backfilling !== null) {
        contents.Backfilling = output.Backfilling;
    }
    if (output.IndexArn !== undefined && output.IndexArn !== null) {
        contents.IndexArn = output.IndexArn;
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null) {
        contents.IndexSizeBytes = output.IndexSizeBytes;
    }
    if (output.IndexStatus !== undefined && output.IndexStatus !== null) {
        contents.IndexStatus = output.IndexStatus;
    }
    if (output.ItemCount !== undefined && output.ItemCount !== null) {
        contents.ItemCount = output.ItemCount;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.Projection !== undefined && output.Projection !== null) {
        contents.Projection = deserializeAws_json1_0Projection(output.Projection, context);
    }
    if (output.ProvisionedThroughput !== undefined &&
        output.ProvisionedThroughput !== null) {
        contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context);
    }
    return contents;
};
const deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context));
};
const deserializeAws_json1_0GlobalSecondaryIndexInfo = (output, context) => {
    let contents = {
        __type: "GlobalSecondaryIndexInfo",
        IndexName: undefined,
        KeySchema: undefined,
        Projection: undefined,
        ProvisionedThroughput: undefined
    };
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.Projection !== undefined && output.Projection !== null) {
        contents.Projection = deserializeAws_json1_0Projection(output.Projection, context);
    }
    if (output.ProvisionedThroughput !== undefined &&
        output.ProvisionedThroughput !== null) {
        contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context);
    }
    return contents;
};
const deserializeAws_json1_0GlobalSecondaryIndexes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context));
};
const deserializeAws_json1_0GlobalTable = (output, context) => {
    let contents = {
        __type: "GlobalTable",
        GlobalTableName: undefined,
        ReplicationGroup: undefined
    };
    if (output.GlobalTableName !== undefined && output.GlobalTableName !== null) {
        contents.GlobalTableName = output.GlobalTableName;
    }
    if (output.ReplicationGroup !== undefined &&
        output.ReplicationGroup !== null) {
        contents.ReplicationGroup = deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context);
    }
    return contents;
};
const deserializeAws_json1_0GlobalTableAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "GlobalTableAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0GlobalTableDescription = (output, context) => {
    let contents = {
        __type: "GlobalTableDescription",
        CreationDateTime: undefined,
        GlobalTableArn: undefined,
        GlobalTableName: undefined,
        GlobalTableStatus: undefined,
        ReplicationGroup: undefined
    };
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.GlobalTableArn !== undefined && output.GlobalTableArn !== null) {
        contents.GlobalTableArn = output.GlobalTableArn;
    }
    if (output.GlobalTableName !== undefined && output.GlobalTableName !== null) {
        contents.GlobalTableName = output.GlobalTableName;
    }
    if (output.GlobalTableStatus !== undefined &&
        output.GlobalTableStatus !== null) {
        contents.GlobalTableStatus = output.GlobalTableStatus;
    }
    if (output.ReplicationGroup !== undefined &&
        output.ReplicationGroup !== null) {
        contents.ReplicationGroup = deserializeAws_json1_0ReplicaDescriptionList(output.ReplicationGroup, context);
    }
    return contents;
};
const deserializeAws_json1_0GlobalTableList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0GlobalTable(entry, context));
};
const deserializeAws_json1_0GlobalTableNotFoundException = (output, context) => {
    let contents = {
        __type: "GlobalTableNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0IndexNotFoundException = (output, context) => {
    let contents = {
        __type: "IndexNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidRestoreTimeException = (output, context) => {
    let contents = {
        __type: "InvalidRestoreTimeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ItemCollectionKeyAttributeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0ItemCollectionMetrics = (output, context) => {
    let contents = {
        __type: "ItemCollectionMetrics",
        ItemCollectionKey: undefined,
        SizeEstimateRangeGB: undefined
    };
    if (output.ItemCollectionKey !== undefined &&
        output.ItemCollectionKey !== null) {
        contents.ItemCollectionKey = deserializeAws_json1_0ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context);
    }
    if (output.SizeEstimateRangeGB !== undefined &&
        output.SizeEstimateRangeGB !== null) {
        contents.SizeEstimateRangeGB = deserializeAws_json1_0ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context);
    }
    return contents;
};
const deserializeAws_json1_0ItemCollectionMetricsMultiple = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ItemCollectionMetrics(entry, context));
};
const deserializeAws_json1_0ItemCollectionMetricsPerTable = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0ItemCollectionMetricsMultiple(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0ItemCollectionSizeEstimateRange = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "ItemCollectionSizeLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ItemList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AttributeMap(entry, context));
};
const deserializeAws_json1_0ItemResponse = (output, context) => {
    let contents = {
        __type: "ItemResponse",
        Item: undefined
    };
    if (output.Item !== undefined && output.Item !== null) {
        contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
    }
    return contents;
};
const deserializeAws_json1_0ItemResponseList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ItemResponse(entry, context));
};
const deserializeAws_json1_0Key = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0KeyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Key(entry, context));
};
const deserializeAws_json1_0KeySchema = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0KeySchemaElement(entry, context));
};
const deserializeAws_json1_0KeySchemaElement = (output, context) => {
    let contents = {
        __type: "KeySchemaElement",
        AttributeName: undefined,
        KeyType: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.KeyType !== undefined && output.KeyType !== null) {
        contents.KeyType = output.KeyType;
    }
    return contents;
};
const deserializeAws_json1_0KeysAndAttributes = (output, context) => {
    let contents = {
        __type: "KeysAndAttributes",
        AttributesToGet: undefined,
        ConsistentRead: undefined,
        ExpressionAttributeNames: undefined,
        Keys: undefined,
        ProjectionExpression: undefined
    };
    if (output.AttributesToGet !== undefined && output.AttributesToGet !== null) {
        contents.AttributesToGet = deserializeAws_json1_0AttributeNameList(output.AttributesToGet, context);
    }
    if (output.ConsistentRead !== undefined && output.ConsistentRead !== null) {
        contents.ConsistentRead = output.ConsistentRead;
    }
    if (output.ExpressionAttributeNames !== undefined &&
        output.ExpressionAttributeNames !== null) {
        contents.ExpressionAttributeNames = deserializeAws_json1_0ExpressionAttributeNameMap(output.ExpressionAttributeNames, context);
    }
    if (output.Keys !== undefined && output.Keys !== null) {
        contents.Keys = deserializeAws_json1_0KeyList(output.Keys, context);
    }
    if (output.ProjectionExpression !== undefined &&
        output.ProjectionExpression !== null) {
        contents.ProjectionExpression = output.ProjectionExpression;
    }
    return contents;
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ListAttributeValue = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AttributeValue(entry, context));
};
const deserializeAws_json1_0ListBackupsOutput = (output, context) => {
    let contents = {
        __type: "ListBackupsOutput",
        BackupSummaries: undefined,
        LastEvaluatedBackupArn: undefined
    };
    if (output.BackupSummaries !== undefined && output.BackupSummaries !== null) {
        contents.BackupSummaries = deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context);
    }
    if (output.LastEvaluatedBackupArn !== undefined &&
        output.LastEvaluatedBackupArn !== null) {
        contents.LastEvaluatedBackupArn = output.LastEvaluatedBackupArn;
    }
    return contents;
};
const deserializeAws_json1_0ListContributorInsightsOutput = (output, context) => {
    let contents = {
        __type: "ListContributorInsightsOutput",
        ContributorInsightsSummaries: undefined,
        NextToken: undefined
    };
    if (output.ContributorInsightsSummaries !== undefined &&
        output.ContributorInsightsSummaries !== null) {
        contents.ContributorInsightsSummaries = deserializeAws_json1_0ContributorInsightsSummaries(output.ContributorInsightsSummaries, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_0ListGlobalTablesOutput = (output, context) => {
    let contents = {
        __type: "ListGlobalTablesOutput",
        GlobalTables: undefined,
        LastEvaluatedGlobalTableName: undefined
    };
    if (output.GlobalTables !== undefined && output.GlobalTables !== null) {
        contents.GlobalTables = deserializeAws_json1_0GlobalTableList(output.GlobalTables, context);
    }
    if (output.LastEvaluatedGlobalTableName !== undefined &&
        output.LastEvaluatedGlobalTableName !== null) {
        contents.LastEvaluatedGlobalTableName = output.LastEvaluatedGlobalTableName;
    }
    return contents;
};
const deserializeAws_json1_0ListTablesOutput = (output, context) => {
    let contents = {
        __type: "ListTablesOutput",
        LastEvaluatedTableName: undefined,
        TableNames: undefined
    };
    if (output.LastEvaluatedTableName !== undefined &&
        output.LastEvaluatedTableName !== null) {
        contents.LastEvaluatedTableName = output.LastEvaluatedTableName;
    }
    if (output.TableNames !== undefined && output.TableNames !== null) {
        contents.TableNames = deserializeAws_json1_0TableNameList(output.TableNames, context);
    }
    return contents;
};
const deserializeAws_json1_0ListTagsOfResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsOfResourceOutput",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_0TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_0LocalSecondaryIndexDescription = (output, context) => {
    let contents = {
        __type: "LocalSecondaryIndexDescription",
        IndexArn: undefined,
        IndexName: undefined,
        IndexSizeBytes: undefined,
        ItemCount: undefined,
        KeySchema: undefined,
        Projection: undefined
    };
    if (output.IndexArn !== undefined && output.IndexArn !== null) {
        contents.IndexArn = output.IndexArn;
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null) {
        contents.IndexSizeBytes = output.IndexSizeBytes;
    }
    if (output.ItemCount !== undefined && output.ItemCount !== null) {
        contents.ItemCount = output.ItemCount;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.Projection !== undefined && output.Projection !== null) {
        contents.Projection = deserializeAws_json1_0Projection(output.Projection, context);
    }
    return contents;
};
const deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context));
};
const deserializeAws_json1_0LocalSecondaryIndexInfo = (output, context) => {
    let contents = {
        __type: "LocalSecondaryIndexInfo",
        IndexName: undefined,
        KeySchema: undefined,
        Projection: undefined
    };
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.Projection !== undefined && output.Projection !== null) {
        contents.Projection = deserializeAws_json1_0Projection(output.Projection, context);
    }
    return contents;
};
const deserializeAws_json1_0LocalSecondaryIndexes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context));
};
const deserializeAws_json1_0MapAttributeValue = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0NonKeyAttributeNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0NumberSetAttributeValue = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0PointInTimeRecoveryDescription = (output, context) => {
    let contents = {
        __type: "PointInTimeRecoveryDescription",
        EarliestRestorableDateTime: undefined,
        LatestRestorableDateTime: undefined,
        PointInTimeRecoveryStatus: undefined
    };
    if (output.EarliestRestorableDateTime !== undefined &&
        output.EarliestRestorableDateTime !== null) {
        contents.EarliestRestorableDateTime = new Date(Math.round(output.EarliestRestorableDateTime * 1000));
    }
    if (output.LatestRestorableDateTime !== undefined &&
        output.LatestRestorableDateTime !== null) {
        contents.LatestRestorableDateTime = new Date(Math.round(output.LatestRestorableDateTime * 1000));
    }
    if (output.PointInTimeRecoveryStatus !== undefined &&
        output.PointInTimeRecoveryStatus !== null) {
        contents.PointInTimeRecoveryStatus = output.PointInTimeRecoveryStatus;
    }
    return contents;
};
const deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (output, context) => {
    let contents = {
        __type: "PointInTimeRecoveryUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0Projection = (output, context) => {
    let contents = {
        __type: "Projection",
        NonKeyAttributes: undefined,
        ProjectionType: undefined
    };
    if (output.NonKeyAttributes !== undefined &&
        output.NonKeyAttributes !== null) {
        contents.NonKeyAttributes = deserializeAws_json1_0NonKeyAttributeNameList(output.NonKeyAttributes, context);
    }
    if (output.ProjectionType !== undefined && output.ProjectionType !== null) {
        contents.ProjectionType = output.ProjectionType;
    }
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughput = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughput",
        ReadCapacityUnits: undefined,
        WriteCapacityUnits: undefined
    };
    if (output.ReadCapacityUnits !== undefined &&
        output.ReadCapacityUnits !== null) {
        contents.ReadCapacityUnits = output.ReadCapacityUnits;
    }
    if (output.WriteCapacityUnits !== undefined &&
        output.WriteCapacityUnits !== null) {
        contents.WriteCapacityUnits = output.WriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughputDescription = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputDescription",
        LastDecreaseDateTime: undefined,
        LastIncreaseDateTime: undefined,
        NumberOfDecreasesToday: undefined,
        ReadCapacityUnits: undefined,
        WriteCapacityUnits: undefined
    };
    if (output.LastDecreaseDateTime !== undefined &&
        output.LastDecreaseDateTime !== null) {
        contents.LastDecreaseDateTime = new Date(Math.round(output.LastDecreaseDateTime * 1000));
    }
    if (output.LastIncreaseDateTime !== undefined &&
        output.LastIncreaseDateTime !== null) {
        contents.LastIncreaseDateTime = new Date(Math.round(output.LastIncreaseDateTime * 1000));
    }
    if (output.NumberOfDecreasesToday !== undefined &&
        output.NumberOfDecreasesToday !== null) {
        contents.NumberOfDecreasesToday = output.NumberOfDecreasesToday;
    }
    if (output.ReadCapacityUnits !== undefined &&
        output.ReadCapacityUnits !== null) {
        contents.ReadCapacityUnits = output.ReadCapacityUnits;
    }
    if (output.WriteCapacityUnits !== undefined &&
        output.WriteCapacityUnits !== null) {
        contents.WriteCapacityUnits = output.WriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ProvisionedThroughputOverride = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputOverride",
        ReadCapacityUnits: undefined
    };
    if (output.ReadCapacityUnits !== undefined &&
        output.ReadCapacityUnits !== null) {
        contents.ReadCapacityUnits = output.ReadCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0PutItemInputAttributeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0PutItemOutput = (output, context) => {
    let contents = {
        __type: "PutItemOutput",
        Attributes: undefined,
        ConsumedCapacity: undefined,
        ItemCollectionMetrics: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_0AttributeMap(output.Attributes, context);
    }
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.ItemCollectionMetrics !== undefined &&
        output.ItemCollectionMetrics !== null) {
        contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0PutRequest = (output, context) => {
    let contents = {
        __type: "PutRequest",
        Item: undefined
    };
    if (output.Item !== undefined && output.Item !== null) {
        contents.Item = deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context);
    }
    return contents;
};
const deserializeAws_json1_0QueryOutput = (output, context) => {
    let contents = {
        __type: "QueryOutput",
        ConsumedCapacity: undefined,
        Count: undefined,
        Items: undefined,
        LastEvaluatedKey: undefined,
        ScannedCount: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.Items !== undefined && output.Items !== null) {
        contents.Items = deserializeAws_json1_0ItemList(output.Items, context);
    }
    if (output.LastEvaluatedKey !== undefined &&
        output.LastEvaluatedKey !== null) {
        contents.LastEvaluatedKey = deserializeAws_json1_0Key(output.LastEvaluatedKey, context);
    }
    if (output.ScannedCount !== undefined && output.ScannedCount !== null) {
        contents.ScannedCount = output.ScannedCount;
    }
    return contents;
};
const deserializeAws_json1_0Replica = (output, context) => {
    let contents = {
        __type: "Replica",
        RegionName: undefined
    };
    if (output.RegionName !== undefined && output.RegionName !== null) {
        contents.RegionName = output.RegionName;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ReplicaAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaAutoScalingDescription = (output, context) => {
    let contents = {
        __type: "ReplicaAutoScalingDescription",
        GlobalSecondaryIndexes: undefined,
        RegionName: undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: undefined,
        ReplicaStatus: undefined
    };
    if (output.GlobalSecondaryIndexes !== undefined &&
        output.GlobalSecondaryIndexes !== null) {
        contents.GlobalSecondaryIndexes = deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(output.GlobalSecondaryIndexes, context);
    }
    if (output.RegionName !== undefined && output.RegionName !== null) {
        contents.RegionName = output.RegionName;
    }
    if (output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
        output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null) {
        contents.ReplicaProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context);
    }
    if (output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
        output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null) {
        contents.ReplicaProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context);
    }
    if (output.ReplicaStatus !== undefined && output.ReplicaStatus !== null) {
        contents.ReplicaStatus = output.ReplicaStatus;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context));
};
const deserializeAws_json1_0ReplicaDescription = (output, context) => {
    let contents = {
        __type: "ReplicaDescription",
        GlobalSecondaryIndexes: undefined,
        KMSMasterKeyId: undefined,
        ProvisionedThroughputOverride: undefined,
        RegionName: undefined,
        ReplicaStatus: undefined,
        ReplicaStatusDescription: undefined,
        ReplicaStatusPercentProgress: undefined
    };
    if (output.GlobalSecondaryIndexes !== undefined &&
        output.GlobalSecondaryIndexes !== null) {
        contents.GlobalSecondaryIndexes = deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context);
    }
    if (output.KMSMasterKeyId !== undefined && output.KMSMasterKeyId !== null) {
        contents.KMSMasterKeyId = output.KMSMasterKeyId;
    }
    if (output.ProvisionedThroughputOverride !== undefined &&
        output.ProvisionedThroughputOverride !== null) {
        contents.ProvisionedThroughputOverride = deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context);
    }
    if (output.RegionName !== undefined && output.RegionName !== null) {
        contents.RegionName = output.RegionName;
    }
    if (output.ReplicaStatus !== undefined && output.ReplicaStatus !== null) {
        contents.ReplicaStatus = output.ReplicaStatus;
    }
    if (output.ReplicaStatusDescription !== undefined &&
        output.ReplicaStatusDescription !== null) {
        contents.ReplicaStatusDescription = output.ReplicaStatusDescription;
    }
    if (output.ReplicaStatusPercentProgress !== undefined &&
        output.ReplicaStatusPercentProgress !== null) {
        contents.ReplicaStatusPercentProgress = output.ReplicaStatusPercentProgress;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaDescription(entry, context));
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
    let contents = {
        __type: "ReplicaGlobalSecondaryIndexAutoScalingDescription",
        IndexName: undefined,
        IndexStatus: undefined,
        ProvisionedReadCapacityAutoScalingSettings: undefined,
        ProvisionedWriteCapacityAutoScalingSettings: undefined
    };
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.IndexStatus !== undefined && output.IndexStatus !== null) {
        contents.IndexStatus = output.IndexStatus;
    }
    if (output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
        output.ProvisionedReadCapacityAutoScalingSettings !== null) {
        contents.ProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context);
    }
    if (output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
        output.ProvisionedWriteCapacityAutoScalingSettings !== null) {
        contents.ProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context);
    }
    return contents;
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context));
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = (output, context) => {
    let contents = {
        __type: "ReplicaGlobalSecondaryIndexDescription",
        IndexName: undefined,
        ProvisionedThroughputOverride: undefined
    };
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.ProvisionedThroughputOverride !== undefined &&
        output.ProvisionedThroughputOverride !== null) {
        contents.ProvisionedThroughputOverride = deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context);
    }
    return contents;
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context));
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
    let contents = {
        __type: "ReplicaGlobalSecondaryIndexSettingsDescription",
        IndexName: undefined,
        IndexStatus: undefined,
        ProvisionedReadCapacityAutoScalingSettings: undefined,
        ProvisionedReadCapacityUnits: undefined,
        ProvisionedWriteCapacityAutoScalingSettings: undefined,
        ProvisionedWriteCapacityUnits: undefined
    };
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.IndexStatus !== undefined && output.IndexStatus !== null) {
        contents.IndexStatus = output.IndexStatus;
    }
    if (output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
        output.ProvisionedReadCapacityAutoScalingSettings !== null) {
        contents.ProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context);
    }
    if (output.ProvisionedReadCapacityUnits !== undefined &&
        output.ProvisionedReadCapacityUnits !== null) {
        contents.ProvisionedReadCapacityUnits = output.ProvisionedReadCapacityUnits;
    }
    if (output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
        output.ProvisionedWriteCapacityAutoScalingSettings !== null) {
        contents.ProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context);
    }
    if (output.ProvisionedWriteCapacityUnits !== undefined &&
        output.ProvisionedWriteCapacityUnits !== null) {
        contents.ProvisionedWriteCapacityUnits =
            output.ProvisionedWriteCapacityUnits;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(entry, context));
};
const deserializeAws_json1_0ReplicaList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Replica(entry, context));
};
const deserializeAws_json1_0ReplicaNotFoundException = (output, context) => {
    let contents = {
        __type: "ReplicaNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaSettingsDescription = (output, context) => {
    let contents = {
        __type: "ReplicaSettingsDescription",
        RegionName: undefined,
        ReplicaBillingModeSummary: undefined,
        ReplicaGlobalSecondaryIndexSettings: undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: undefined,
        ReplicaProvisionedReadCapacityUnits: undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: undefined,
        ReplicaProvisionedWriteCapacityUnits: undefined,
        ReplicaStatus: undefined
    };
    if (output.RegionName !== undefined && output.RegionName !== null) {
        contents.RegionName = output.RegionName;
    }
    if (output.ReplicaBillingModeSummary !== undefined &&
        output.ReplicaBillingModeSummary !== null) {
        contents.ReplicaBillingModeSummary = deserializeAws_json1_0BillingModeSummary(output.ReplicaBillingModeSummary, context);
    }
    if (output.ReplicaGlobalSecondaryIndexSettings !== undefined &&
        output.ReplicaGlobalSecondaryIndexSettings !== null) {
        contents.ReplicaGlobalSecondaryIndexSettings = deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(output.ReplicaGlobalSecondaryIndexSettings, context);
    }
    if (output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
        output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null) {
        contents.ReplicaProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context);
    }
    if (output.ReplicaProvisionedReadCapacityUnits !== undefined &&
        output.ReplicaProvisionedReadCapacityUnits !== null) {
        contents.ReplicaProvisionedReadCapacityUnits =
            output.ReplicaProvisionedReadCapacityUnits;
    }
    if (output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
        output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null) {
        contents.ReplicaProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context);
    }
    if (output.ReplicaProvisionedWriteCapacityUnits !== undefined &&
        output.ReplicaProvisionedWriteCapacityUnits !== null) {
        contents.ReplicaProvisionedWriteCapacityUnits =
            output.ReplicaProvisionedWriteCapacityUnits;
    }
    if (output.ReplicaStatus !== undefined && output.ReplicaStatus !== null) {
        contents.ReplicaStatus = output.ReplicaStatus;
    }
    return contents;
};
const deserializeAws_json1_0ReplicaSettingsDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ReplicaSettingsDescription(entry, context));
};
const deserializeAws_json1_0RequestLimitExceeded = (output, context) => {
    let contents = {
        __type: "RequestLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0RestoreSummary = (output, context) => {
    let contents = {
        __type: "RestoreSummary",
        RestoreDateTime: undefined,
        RestoreInProgress: undefined,
        SourceBackupArn: undefined,
        SourceTableArn: undefined
    };
    if (output.RestoreDateTime !== undefined && output.RestoreDateTime !== null) {
        contents.RestoreDateTime = new Date(Math.round(output.RestoreDateTime * 1000));
    }
    if (output.RestoreInProgress !== undefined &&
        output.RestoreInProgress !== null) {
        contents.RestoreInProgress = output.RestoreInProgress;
    }
    if (output.SourceBackupArn !== undefined && output.SourceBackupArn !== null) {
        contents.SourceBackupArn = output.SourceBackupArn;
    }
    if (output.SourceTableArn !== undefined && output.SourceTableArn !== null) {
        contents.SourceTableArn = output.SourceTableArn;
    }
    return contents;
};
const deserializeAws_json1_0RestoreTableFromBackupOutput = (output, context) => {
    let contents = {
        __type: "RestoreTableFromBackupOutput",
        TableDescription: undefined
    };
    if (output.TableDescription !== undefined &&
        output.TableDescription !== null) {
        contents.TableDescription = deserializeAws_json1_0TableDescription(output.TableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0RestoreTableToPointInTimeOutput = (output, context) => {
    let contents = {
        __type: "RestoreTableToPointInTimeOutput",
        TableDescription: undefined
    };
    if (output.TableDescription !== undefined &&
        output.TableDescription !== null) {
        contents.TableDescription = deserializeAws_json1_0TableDescription(output.TableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0SSEDescription = (output, context) => {
    let contents = {
        __type: "SSEDescription",
        InaccessibleEncryptionDateTime: undefined,
        KMSMasterKeyArn: undefined,
        SSEType: undefined,
        Status: undefined
    };
    if (output.InaccessibleEncryptionDateTime !== undefined &&
        output.InaccessibleEncryptionDateTime !== null) {
        contents.InaccessibleEncryptionDateTime = new Date(Math.round(output.InaccessibleEncryptionDateTime * 1000));
    }
    if (output.KMSMasterKeyArn !== undefined && output.KMSMasterKeyArn !== null) {
        contents.KMSMasterKeyArn = output.KMSMasterKeyArn;
    }
    if (output.SSEType !== undefined && output.SSEType !== null) {
        contents.SSEType = output.SSEType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_0ScanOutput = (output, context) => {
    let contents = {
        __type: "ScanOutput",
        ConsumedCapacity: undefined,
        Count: undefined,
        Items: undefined,
        LastEvaluatedKey: undefined,
        ScannedCount: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.Count !== undefined && output.Count !== null) {
        contents.Count = output.Count;
    }
    if (output.Items !== undefined && output.Items !== null) {
        contents.Items = deserializeAws_json1_0ItemList(output.Items, context);
    }
    if (output.LastEvaluatedKey !== undefined &&
        output.LastEvaluatedKey !== null) {
        contents.LastEvaluatedKey = deserializeAws_json1_0Key(output.LastEvaluatedKey, context);
    }
    if (output.ScannedCount !== undefined && output.ScannedCount !== null) {
        contents.ScannedCount = output.ScannedCount;
    }
    return contents;
};
const deserializeAws_json1_0SecondaryIndexesCapacityMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0Capacity(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0SourceTableDetails = (output, context) => {
    let contents = {
        __type: "SourceTableDetails",
        BillingMode: undefined,
        ItemCount: undefined,
        KeySchema: undefined,
        ProvisionedThroughput: undefined,
        TableArn: undefined,
        TableCreationDateTime: undefined,
        TableId: undefined,
        TableName: undefined,
        TableSizeBytes: undefined
    };
    if (output.BillingMode !== undefined && output.BillingMode !== null) {
        contents.BillingMode = output.BillingMode;
    }
    if (output.ItemCount !== undefined && output.ItemCount !== null) {
        contents.ItemCount = output.ItemCount;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.ProvisionedThroughput !== undefined &&
        output.ProvisionedThroughput !== null) {
        contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context);
    }
    if (output.TableArn !== undefined && output.TableArn !== null) {
        contents.TableArn = output.TableArn;
    }
    if (output.TableCreationDateTime !== undefined &&
        output.TableCreationDateTime !== null) {
        contents.TableCreationDateTime = new Date(Math.round(output.TableCreationDateTime * 1000));
    }
    if (output.TableId !== undefined && output.TableId !== null) {
        contents.TableId = output.TableId;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.TableSizeBytes !== undefined && output.TableSizeBytes !== null) {
        contents.TableSizeBytes = output.TableSizeBytes;
    }
    return contents;
};
const deserializeAws_json1_0SourceTableFeatureDetails = (output, context) => {
    let contents = {
        __type: "SourceTableFeatureDetails",
        GlobalSecondaryIndexes: undefined,
        LocalSecondaryIndexes: undefined,
        SSEDescription: undefined,
        StreamDescription: undefined,
        TimeToLiveDescription: undefined
    };
    if (output.GlobalSecondaryIndexes !== undefined &&
        output.GlobalSecondaryIndexes !== null) {
        contents.GlobalSecondaryIndexes = deserializeAws_json1_0GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context);
    }
    if (output.LocalSecondaryIndexes !== undefined &&
        output.LocalSecondaryIndexes !== null) {
        contents.LocalSecondaryIndexes = deserializeAws_json1_0LocalSecondaryIndexes(output.LocalSecondaryIndexes, context);
    }
    if (output.SSEDescription !== undefined && output.SSEDescription !== null) {
        contents.SSEDescription = deserializeAws_json1_0SSEDescription(output.SSEDescription, context);
    }
    if (output.StreamDescription !== undefined &&
        output.StreamDescription !== null) {
        contents.StreamDescription = deserializeAws_json1_0StreamSpecification(output.StreamDescription, context);
    }
    if (output.TimeToLiveDescription !== undefined &&
        output.TimeToLiveDescription !== null) {
        contents.TimeToLiveDescription = deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0StreamSpecification = (output, context) => {
    let contents = {
        __type: "StreamSpecification",
        StreamEnabled: undefined,
        StreamViewType: undefined
    };
    if (output.StreamEnabled !== undefined && output.StreamEnabled !== null) {
        contents.StreamEnabled = output.StreamEnabled;
    }
    if (output.StreamViewType !== undefined && output.StreamViewType !== null) {
        contents.StreamViewType = output.StreamViewType;
    }
    return contents;
};
const deserializeAws_json1_0StringSetAttributeValue = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0TableAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "TableAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TableAutoScalingDescription = (output, context) => {
    let contents = {
        __type: "TableAutoScalingDescription",
        Replicas: undefined,
        TableName: undefined,
        TableStatus: undefined
    };
    if (output.Replicas !== undefined && output.Replicas !== null) {
        contents.Replicas = deserializeAws_json1_0ReplicaAutoScalingDescriptionList(output.Replicas, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.TableStatus !== undefined && output.TableStatus !== null) {
        contents.TableStatus = output.TableStatus;
    }
    return contents;
};
const deserializeAws_json1_0TableDescription = (output, context) => {
    let contents = {
        __type: "TableDescription",
        ArchivalSummary: undefined,
        AttributeDefinitions: undefined,
        BillingModeSummary: undefined,
        CreationDateTime: undefined,
        GlobalSecondaryIndexes: undefined,
        GlobalTableVersion: undefined,
        ItemCount: undefined,
        KeySchema: undefined,
        LatestStreamArn: undefined,
        LatestStreamLabel: undefined,
        LocalSecondaryIndexes: undefined,
        ProvisionedThroughput: undefined,
        Replicas: undefined,
        RestoreSummary: undefined,
        SSEDescription: undefined,
        StreamSpecification: undefined,
        TableArn: undefined,
        TableId: undefined,
        TableName: undefined,
        TableSizeBytes: undefined,
        TableStatus: undefined
    };
    if (output.ArchivalSummary !== undefined && output.ArchivalSummary !== null) {
        contents.ArchivalSummary = deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context);
    }
    if (output.AttributeDefinitions !== undefined &&
        output.AttributeDefinitions !== null) {
        contents.AttributeDefinitions = deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context);
    }
    if (output.BillingModeSummary !== undefined &&
        output.BillingModeSummary !== null) {
        contents.BillingModeSummary = deserializeAws_json1_0BillingModeSummary(output.BillingModeSummary, context);
    }
    if (output.CreationDateTime !== undefined &&
        output.CreationDateTime !== null) {
        contents.CreationDateTime = new Date(Math.round(output.CreationDateTime * 1000));
    }
    if (output.GlobalSecondaryIndexes !== undefined &&
        output.GlobalSecondaryIndexes !== null) {
        contents.GlobalSecondaryIndexes = deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context);
    }
    if (output.GlobalTableVersion !== undefined &&
        output.GlobalTableVersion !== null) {
        contents.GlobalTableVersion = output.GlobalTableVersion;
    }
    if (output.ItemCount !== undefined && output.ItemCount !== null) {
        contents.ItemCount = output.ItemCount;
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.LatestStreamArn !== undefined && output.LatestStreamArn !== null) {
        contents.LatestStreamArn = output.LatestStreamArn;
    }
    if (output.LatestStreamLabel !== undefined &&
        output.LatestStreamLabel !== null) {
        contents.LatestStreamLabel = output.LatestStreamLabel;
    }
    if (output.LocalSecondaryIndexes !== undefined &&
        output.LocalSecondaryIndexes !== null) {
        contents.LocalSecondaryIndexes = deserializeAws_json1_0LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context);
    }
    if (output.ProvisionedThroughput !== undefined &&
        output.ProvisionedThroughput !== null) {
        contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context);
    }
    if (output.Replicas !== undefined && output.Replicas !== null) {
        contents.Replicas = deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context);
    }
    if (output.RestoreSummary !== undefined && output.RestoreSummary !== null) {
        contents.RestoreSummary = deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context);
    }
    if (output.SSEDescription !== undefined && output.SSEDescription !== null) {
        contents.SSEDescription = deserializeAws_json1_0SSEDescription(output.SSEDescription, context);
    }
    if (output.StreamSpecification !== undefined &&
        output.StreamSpecification !== null) {
        contents.StreamSpecification = deserializeAws_json1_0StreamSpecification(output.StreamSpecification, context);
    }
    if (output.TableArn !== undefined && output.TableArn !== null) {
        contents.TableArn = output.TableArn;
    }
    if (output.TableId !== undefined && output.TableId !== null) {
        contents.TableId = output.TableId;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.TableSizeBytes !== undefined && output.TableSizeBytes !== null) {
        contents.TableSizeBytes = output.TableSizeBytes;
    }
    if (output.TableStatus !== undefined && output.TableStatus !== null) {
        contents.TableStatus = output.TableStatus;
    }
    return contents;
};
const deserializeAws_json1_0TableInUseException = (output, context) => {
    let contents = {
        __type: "TableInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TableNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0TableNotFoundException = (output, context) => {
    let contents = {
        __type: "TableNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0Tag = (output, context) => {
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
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Tag(entry, context));
};
const deserializeAws_json1_0TimeToLiveDescription = (output, context) => {
    let contents = {
        __type: "TimeToLiveDescription",
        AttributeName: undefined,
        TimeToLiveStatus: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.TimeToLiveStatus !== undefined &&
        output.TimeToLiveStatus !== null) {
        contents.TimeToLiveStatus = output.TimeToLiveStatus;
    }
    return contents;
};
const deserializeAws_json1_0TimeToLiveSpecification = (output, context) => {
    let contents = {
        __type: "TimeToLiveSpecification",
        AttributeName: undefined,
        Enabled: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    return contents;
};
const deserializeAws_json1_0TransactGetItemsOutput = (output, context) => {
    let contents = {
        __type: "TransactGetItemsOutput",
        ConsumedCapacity: undefined,
        Responses: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context);
    }
    if (output.Responses !== undefined && output.Responses !== null) {
        contents.Responses = deserializeAws_json1_0ItemResponseList(output.Responses, context);
    }
    return contents;
};
const deserializeAws_json1_0TransactWriteItemsOutput = (output, context) => {
    let contents = {
        __type: "TransactWriteItemsOutput",
        ConsumedCapacity: undefined,
        ItemCollectionMetrics: undefined
    };
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context);
    }
    if (output.ItemCollectionMetrics !== undefined &&
        output.ItemCollectionMetrics !== null) {
        contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0TransactionCanceledException = (output, context) => {
    let contents = {
        __type: "TransactionCanceledException",
        CancellationReasons: undefined,
        Message: undefined
    };
    if (output.CancellationReasons !== undefined &&
        output.CancellationReasons !== null) {
        contents.CancellationReasons = deserializeAws_json1_0CancellationReasonList(output.CancellationReasons, context);
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0TransactionConflictException = (output, context) => {
    let contents = {
        __type: "TransactionConflictException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TransactionInProgressException = (output, context) => {
    let contents = {
        __type: "TransactionInProgressException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0UpdateContinuousBackupsOutput = (output, context) => {
    let contents = {
        __type: "UpdateContinuousBackupsOutput",
        ContinuousBackupsDescription: undefined
    };
    if (output.ContinuousBackupsDescription !== undefined &&
        output.ContinuousBackupsDescription !== null) {
        contents.ContinuousBackupsDescription = deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateContributorInsightsOutput = (output, context) => {
    let contents = {
        __type: "UpdateContributorInsightsOutput",
        ContributorInsightsStatus: undefined,
        IndexName: undefined,
        TableName: undefined
    };
    if (output.ContributorInsightsStatus !== undefined &&
        output.ContributorInsightsStatus !== null) {
        contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
    }
    if (output.IndexName !== undefined && output.IndexName !== null) {
        contents.IndexName = output.IndexName;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0UpdateGlobalTableOutput = (output, context) => {
    let contents = {
        __type: "UpdateGlobalTableOutput",
        GlobalTableDescription: undefined
    };
    if (output.GlobalTableDescription !== undefined &&
        output.GlobalTableDescription !== null) {
        contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (output, context) => {
    let contents = {
        __type: "UpdateGlobalTableSettingsOutput",
        GlobalTableName: undefined,
        ReplicaSettings: undefined
    };
    if (output.GlobalTableName !== undefined && output.GlobalTableName !== null) {
        contents.GlobalTableName = output.GlobalTableName;
    }
    if (output.ReplicaSettings !== undefined && output.ReplicaSettings !== null) {
        contents.ReplicaSettings = deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateItemOutput = (output, context) => {
    let contents = {
        __type: "UpdateItemOutput",
        Attributes: undefined,
        ConsumedCapacity: undefined,
        ItemCollectionMetrics: undefined
    };
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_0AttributeMap(output.Attributes, context);
    }
    if (output.ConsumedCapacity !== undefined &&
        output.ConsumedCapacity !== null) {
        contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context);
    }
    if (output.ItemCollectionMetrics !== undefined &&
        output.ItemCollectionMetrics !== null) {
        contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateTableOutput = (output, context) => {
    let contents = {
        __type: "UpdateTableOutput",
        TableDescription: undefined
    };
    if (output.TableDescription !== undefined &&
        output.TableDescription !== null) {
        contents.TableDescription = deserializeAws_json1_0TableDescription(output.TableDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (output, context) => {
    let contents = {
        __type: "UpdateTableReplicaAutoScalingOutput",
        TableAutoScalingDescription: undefined
    };
    if (output.TableAutoScalingDescription !== undefined &&
        output.TableAutoScalingDescription !== null) {
        contents.TableAutoScalingDescription = deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0UpdateTimeToLiveOutput = (output, context) => {
    let contents = {
        __type: "UpdateTimeToLiveOutput",
        TimeToLiveSpecification: undefined
    };
    if (output.TimeToLiveSpecification !== undefined &&
        output.TimeToLiveSpecification !== null) {
        contents.TimeToLiveSpecification = deserializeAws_json1_0TimeToLiveSpecification(output.TimeToLiveSpecification, context);
    }
    return contents;
};
const deserializeAws_json1_0WriteRequest = (output, context) => {
    let contents = {
        __type: "WriteRequest",
        DeleteRequest: undefined,
        PutRequest: undefined
    };
    if (output.DeleteRequest !== undefined && output.DeleteRequest !== null) {
        contents.DeleteRequest = deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context);
    }
    if (output.PutRequest !== undefined && output.PutRequest !== null) {
        contents.PutRequest = deserializeAws_json1_0PutRequest(output.PutRequest, context);
    }
    return contents;
};
const deserializeAws_json1_0WriteRequests = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0WriteRequest(entry, context));
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
//# sourceMappingURL=Aws_json1_0.js.map