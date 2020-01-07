"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1GetTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTagsCommand = serializeAws_json1_1GetTagsCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1BatchCreatePartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchCreatePartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCreatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchCreatePartitionCommand = serializeAws_json1_1BatchCreatePartitionCommand;
async function serializeAws_json1_1BatchDeleteConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchDeleteConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteConnectionCommand = serializeAws_json1_1BatchDeleteConnectionCommand;
async function serializeAws_json1_1BatchDeletePartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchDeletePartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeletePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeletePartitionCommand = serializeAws_json1_1BatchDeletePartitionCommand;
async function serializeAws_json1_1BatchDeleteTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchDeleteTable";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteTableCommand = serializeAws_json1_1BatchDeleteTableCommand;
async function serializeAws_json1_1BatchDeleteTableVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchDeleteTableVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDeleteTableVersionCommand = serializeAws_json1_1BatchDeleteTableVersionCommand;
async function serializeAws_json1_1BatchGetPartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetPartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetPartitionCommand = serializeAws_json1_1BatchGetPartitionCommand;
async function serializeAws_json1_1CreateConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateConnectionCommand = serializeAws_json1_1CreateConnectionCommand;
async function serializeAws_json1_1CreateDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDatabaseCommand = serializeAws_json1_1CreateDatabaseCommand;
async function serializeAws_json1_1CreatePartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreatePartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePartitionCommand = serializeAws_json1_1CreatePartitionCommand;
async function serializeAws_json1_1CreateTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateTable";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTableCommand = serializeAws_json1_1CreateTableCommand;
async function serializeAws_json1_1CreateUserDefinedFunctionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateUserDefinedFunction";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserDefinedFunctionCommand = serializeAws_json1_1CreateUserDefinedFunctionCommand;
async function serializeAws_json1_1DeleteConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
async function serializeAws_json1_1DeleteDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDatabaseCommand = serializeAws_json1_1DeleteDatabaseCommand;
async function serializeAws_json1_1DeletePartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeletePartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePartitionCommand = serializeAws_json1_1DeletePartitionCommand;
async function serializeAws_json1_1DeleteResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteResourcePolicyCommand = serializeAws_json1_1DeleteResourcePolicyCommand;
async function serializeAws_json1_1DeleteTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteTable";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTableCommand = serializeAws_json1_1DeleteTableCommand;
async function serializeAws_json1_1DeleteTableVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteTableVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTableVersionCommand = serializeAws_json1_1DeleteTableVersionCommand;
async function serializeAws_json1_1DeleteUserDefinedFunctionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteUserDefinedFunction";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserDefinedFunctionCommand = serializeAws_json1_1DeleteUserDefinedFunctionCommand;
async function serializeAws_json1_1GetCatalogImportStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetCatalogImportStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCatalogImportStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCatalogImportStatusCommand = serializeAws_json1_1GetCatalogImportStatusCommand;
async function serializeAws_json1_1GetConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConnectionCommand = serializeAws_json1_1GetConnectionCommand;
async function serializeAws_json1_1GetConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConnectionsCommand = serializeAws_json1_1GetConnectionsCommand;
async function serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDataCatalogEncryptionSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand;
async function serializeAws_json1_1GetDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDatabaseCommand = serializeAws_json1_1GetDatabaseCommand;
async function serializeAws_json1_1GetDatabasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDatabases";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDatabasesCommand = serializeAws_json1_1GetDatabasesCommand;
async function serializeAws_json1_1GetPartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetPartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPartitionCommand = serializeAws_json1_1GetPartitionCommand;
async function serializeAws_json1_1GetPartitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetPartitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPartitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPartitionsCommand = serializeAws_json1_1GetPartitionsCommand;
async function serializeAws_json1_1GetResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourcePolicyCommand = serializeAws_json1_1GetResourcePolicyCommand;
async function serializeAws_json1_1GetTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTable";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTableCommand = serializeAws_json1_1GetTableCommand;
async function serializeAws_json1_1GetTableVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTableVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTableVersionCommand = serializeAws_json1_1GetTableVersionCommand;
async function serializeAws_json1_1GetTableVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTableVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTableVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTableVersionsCommand = serializeAws_json1_1GetTableVersionsCommand;
async function serializeAws_json1_1GetTablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTables";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTablesCommand = serializeAws_json1_1GetTablesCommand;
async function serializeAws_json1_1GetUserDefinedFunctionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetUserDefinedFunction";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUserDefinedFunctionCommand = serializeAws_json1_1GetUserDefinedFunctionCommand;
async function serializeAws_json1_1GetUserDefinedFunctionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetUserDefinedFunctions";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetUserDefinedFunctionsCommand = serializeAws_json1_1GetUserDefinedFunctionsCommand;
async function serializeAws_json1_1ImportCatalogToGlueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ImportCatalogToGlue";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportCatalogToGlueRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportCatalogToGlueCommand = serializeAws_json1_1ImportCatalogToGlueCommand;
async function serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.PutDataCatalogEncryptionSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand;
async function serializeAws_json1_1PutResourcePolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.PutResourcePolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourcePolicyCommand = serializeAws_json1_1PutResourcePolicyCommand;
async function serializeAws_json1_1SearchTablesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.SearchTables";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchTablesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchTablesCommand = serializeAws_json1_1SearchTablesCommand;
async function serializeAws_json1_1UpdateConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateConnectionCommand = serializeAws_json1_1UpdateConnectionCommand;
async function serializeAws_json1_1UpdateDatabaseCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateDatabase";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDatabaseCommand = serializeAws_json1_1UpdateDatabaseCommand;
async function serializeAws_json1_1UpdatePartitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdatePartition";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePartitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePartitionCommand = serializeAws_json1_1UpdatePartitionCommand;
async function serializeAws_json1_1UpdateTableCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateTable";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTableRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTableCommand = serializeAws_json1_1UpdateTableCommand;
async function serializeAws_json1_1UpdateUserDefinedFunctionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateUserDefinedFunction";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserDefinedFunctionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserDefinedFunctionCommand = serializeAws_json1_1UpdateUserDefinedFunctionCommand;
async function serializeAws_json1_1BatchGetDevEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetDevEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetDevEndpointsCommand = serializeAws_json1_1BatchGetDevEndpointsCommand;
async function serializeAws_json1_1CreateDevEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateDevEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDevEndpointCommand = serializeAws_json1_1CreateDevEndpointCommand;
async function serializeAws_json1_1CreateSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateSecurityConfigurationCommand = serializeAws_json1_1CreateSecurityConfigurationCommand;
async function serializeAws_json1_1DeleteDevEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteDevEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDevEndpointCommand = serializeAws_json1_1DeleteDevEndpointCommand;
async function serializeAws_json1_1DeleteSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = serializeAws_json1_1DeleteSecurityConfigurationCommand;
async function serializeAws_json1_1GetDevEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDevEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDevEndpointCommand = serializeAws_json1_1GetDevEndpointCommand;
async function serializeAws_json1_1GetDevEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDevEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDevEndpointsCommand = serializeAws_json1_1GetDevEndpointsCommand;
async function serializeAws_json1_1GetJobBookmarkCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetJobBookmark";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobBookmarkRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobBookmarkCommand = serializeAws_json1_1GetJobBookmarkCommand;
async function serializeAws_json1_1GetSecurityConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetSecurityConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSecurityConfigurationCommand = serializeAws_json1_1GetSecurityConfigurationCommand;
async function serializeAws_json1_1GetSecurityConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetSecurityConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetSecurityConfigurationsCommand = serializeAws_json1_1GetSecurityConfigurationsCommand;
async function serializeAws_json1_1ListDevEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ListDevEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDevEndpointsCommand = serializeAws_json1_1ListDevEndpointsCommand;
async function serializeAws_json1_1ResetJobBookmarkCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ResetJobBookmark";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetJobBookmarkRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResetJobBookmarkCommand = serializeAws_json1_1ResetJobBookmarkCommand;
async function serializeAws_json1_1UpdateDevEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateDevEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDevEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDevEndpointCommand = serializeAws_json1_1UpdateDevEndpointCommand;
async function serializeAws_json1_1CancelMLTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CancelMLTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelMLTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelMLTaskRunCommand = serializeAws_json1_1CancelMLTaskRunCommand;
async function serializeAws_json1_1CreateMLTransformCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateMLTransform";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMLTransformCommand = serializeAws_json1_1CreateMLTransformCommand;
async function serializeAws_json1_1DeleteMLTransformCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteMLTransform";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMLTransformCommand = serializeAws_json1_1DeleteMLTransformCommand;
async function serializeAws_json1_1GetMLTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetMLTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMLTaskRunCommand = serializeAws_json1_1GetMLTaskRunCommand;
async function serializeAws_json1_1GetMLTaskRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetMLTaskRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTaskRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMLTaskRunsCommand = serializeAws_json1_1GetMLTaskRunsCommand;
async function serializeAws_json1_1GetMLTransformCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetMLTransform";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMLTransformCommand = serializeAws_json1_1GetMLTransformCommand;
async function serializeAws_json1_1GetMLTransformsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetMLTransforms";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMLTransformsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMLTransformsCommand = serializeAws_json1_1GetMLTransformsCommand;
async function serializeAws_json1_1StartExportLabelsTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartExportLabelsTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartExportLabelsTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartExportLabelsTaskRunCommand = serializeAws_json1_1StartExportLabelsTaskRunCommand;
async function serializeAws_json1_1StartImportLabelsTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartImportLabelsTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartImportLabelsTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartImportLabelsTaskRunCommand = serializeAws_json1_1StartImportLabelsTaskRunCommand;
async function serializeAws_json1_1StartMLEvaluationTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartMLEvaluationTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMLEvaluationTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMLEvaluationTaskRunCommand = serializeAws_json1_1StartMLEvaluationTaskRunCommand;
async function serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartMLLabelingSetGenerationTaskRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand;
async function serializeAws_json1_1UpdateMLTransformCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateMLTransform";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMLTransformRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMLTransformCommand = serializeAws_json1_1UpdateMLTransformCommand;
async function serializeAws_json1_1BatchGetJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetJobsCommand = serializeAws_json1_1BatchGetJobsCommand;
async function serializeAws_json1_1BatchGetTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetTriggersCommand = serializeAws_json1_1BatchGetTriggersCommand;
async function serializeAws_json1_1BatchGetWorkflowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetWorkflows";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetWorkflowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetWorkflowsCommand = serializeAws_json1_1BatchGetWorkflowsCommand;
async function serializeAws_json1_1BatchStopJobRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchStopJobRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchStopJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchStopJobRunCommand = serializeAws_json1_1BatchStopJobRunCommand;
async function serializeAws_json1_1CreateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateJobCommand = serializeAws_json1_1CreateJobCommand;
async function serializeAws_json1_1CreateTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTriggerCommand = serializeAws_json1_1CreateTriggerCommand;
async function serializeAws_json1_1CreateWorkflowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateWorkflow";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWorkflowCommand = serializeAws_json1_1CreateWorkflowCommand;
async function serializeAws_json1_1DeleteJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteJobCommand = serializeAws_json1_1DeleteJobCommand;
async function serializeAws_json1_1DeleteTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTriggerCommand = serializeAws_json1_1DeleteTriggerCommand;
async function serializeAws_json1_1DeleteWorkflowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteWorkflow";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWorkflowCommand = serializeAws_json1_1DeleteWorkflowCommand;
async function serializeAws_json1_1GetJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobCommand = serializeAws_json1_1GetJobCommand;
async function serializeAws_json1_1GetJobRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetJobRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobRunCommand = serializeAws_json1_1GetJobRunCommand;
async function serializeAws_json1_1GetJobRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetJobRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobRunsCommand = serializeAws_json1_1GetJobRunsCommand;
async function serializeAws_json1_1GetJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobsCommand = serializeAws_json1_1GetJobsCommand;
async function serializeAws_json1_1GetTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTriggerCommand = serializeAws_json1_1GetTriggerCommand;
async function serializeAws_json1_1GetTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTriggersCommand = serializeAws_json1_1GetTriggersCommand;
async function serializeAws_json1_1GetWorkflowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetWorkflow";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWorkflowCommand = serializeAws_json1_1GetWorkflowCommand;
async function serializeAws_json1_1GetWorkflowRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetWorkflowRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWorkflowRunCommand = serializeAws_json1_1GetWorkflowRunCommand;
async function serializeAws_json1_1GetWorkflowRunPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetWorkflowRunProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWorkflowRunPropertiesCommand = serializeAws_json1_1GetWorkflowRunPropertiesCommand;
async function serializeAws_json1_1GetWorkflowRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetWorkflowRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkflowRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWorkflowRunsCommand = serializeAws_json1_1GetWorkflowRunsCommand;
async function serializeAws_json1_1ListJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ListJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
async function serializeAws_json1_1ListTriggersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ListTriggers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTriggersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTriggersCommand = serializeAws_json1_1ListTriggersCommand;
async function serializeAws_json1_1ListWorkflowsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ListWorkflows";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWorkflowsCommand = serializeAws_json1_1ListWorkflowsCommand;
async function serializeAws_json1_1PutWorkflowRunPropertiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.PutWorkflowRunProperties";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutWorkflowRunPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutWorkflowRunPropertiesCommand = serializeAws_json1_1PutWorkflowRunPropertiesCommand;
async function serializeAws_json1_1StartJobRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartJobRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartJobRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartJobRunCommand = serializeAws_json1_1StartJobRunCommand;
async function serializeAws_json1_1StartTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTriggerCommand = serializeAws_json1_1StartTriggerCommand;
async function serializeAws_json1_1StartWorkflowRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartWorkflowRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartWorkflowRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartWorkflowRunCommand = serializeAws_json1_1StartWorkflowRunCommand;
async function serializeAws_json1_1StopTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StopTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTriggerCommand = serializeAws_json1_1StopTriggerCommand;
async function serializeAws_json1_1UpdateJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateJobCommand = serializeAws_json1_1UpdateJobCommand;
async function serializeAws_json1_1UpdateTriggerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateTrigger";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTriggerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTriggerCommand = serializeAws_json1_1UpdateTriggerCommand;
async function serializeAws_json1_1UpdateWorkflowCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateWorkflow";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkflowRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWorkflowCommand = serializeAws_json1_1UpdateWorkflowCommand;
async function serializeAws_json1_1BatchGetCrawlersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.BatchGetCrawlers";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetCrawlersCommand = serializeAws_json1_1BatchGetCrawlersCommand;
async function serializeAws_json1_1CreateClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateClassifierCommand = serializeAws_json1_1CreateClassifierCommand;
async function serializeAws_json1_1CreateCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCrawlerCommand = serializeAws_json1_1CreateCrawlerCommand;
async function serializeAws_json1_1CreateScriptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.CreateScript";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateScriptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateScriptCommand = serializeAws_json1_1CreateScriptCommand;
async function serializeAws_json1_1DeleteClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteClassifierCommand = serializeAws_json1_1DeleteClassifierCommand;
async function serializeAws_json1_1DeleteCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.DeleteCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCrawlerCommand = serializeAws_json1_1DeleteCrawlerCommand;
async function serializeAws_json1_1GetClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetClassifierCommand = serializeAws_json1_1GetClassifierCommand;
async function serializeAws_json1_1GetClassifiersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetClassifiers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetClassifiersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetClassifiersCommand = serializeAws_json1_1GetClassifiersCommand;
async function serializeAws_json1_1GetCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCrawlerCommand = serializeAws_json1_1GetCrawlerCommand;
async function serializeAws_json1_1GetCrawlerMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetCrawlerMetrics";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlerMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCrawlerMetricsCommand = serializeAws_json1_1GetCrawlerMetricsCommand;
async function serializeAws_json1_1GetCrawlersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetCrawlers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCrawlersCommand = serializeAws_json1_1GetCrawlersCommand;
async function serializeAws_json1_1GetDataflowGraphCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetDataflowGraph";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDataflowGraphRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDataflowGraphCommand = serializeAws_json1_1GetDataflowGraphCommand;
async function serializeAws_json1_1GetMappingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetMapping";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMappingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetMappingCommand = serializeAws_json1_1GetMappingCommand;
async function serializeAws_json1_1GetPlanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.GetPlan";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPlanRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPlanCommand = serializeAws_json1_1GetPlanCommand;
async function serializeAws_json1_1ListCrawlersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.ListCrawlers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCrawlersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCrawlersCommand = serializeAws_json1_1ListCrawlersCommand;
async function serializeAws_json1_1StartCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartCrawlerCommand = serializeAws_json1_1StartCrawlerCommand;
async function serializeAws_json1_1StartCrawlerScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StartCrawlerSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartCrawlerScheduleCommand = serializeAws_json1_1StartCrawlerScheduleCommand;
async function serializeAws_json1_1StopCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StopCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopCrawlerCommand = serializeAws_json1_1StopCrawlerCommand;
async function serializeAws_json1_1StopCrawlerScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.StopCrawlerSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopCrawlerScheduleCommand = serializeAws_json1_1StopCrawlerScheduleCommand;
async function serializeAws_json1_1UpdateClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateClassifierCommand = serializeAws_json1_1UpdateClassifierCommand;
async function serializeAws_json1_1UpdateCrawlerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateCrawler";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCrawlerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCrawlerCommand = serializeAws_json1_1UpdateCrawlerCommand;
async function serializeAws_json1_1UpdateCrawlerScheduleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSGlue.UpdateCrawlerSchedule";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCrawlerScheduleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCrawlerScheduleCommand = serializeAws_json1_1UpdateCrawlerScheduleCommand;
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
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchCreatePartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchCreatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCreatePartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchCreatePartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchCreatePartitionCommand = deserializeAws_json1_1BatchCreatePartitionCommand;
async function deserializeAws_json1_1BatchCreatePartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeleteConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteConnectionCommand = deserializeAws_json1_1BatchDeleteConnectionCommand;
async function deserializeAws_json1_1BatchDeleteConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeletePartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeletePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeletePartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeletePartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeletePartitionCommand = deserializeAws_json1_1BatchDeletePartitionCommand;
async function deserializeAws_json1_1BatchDeletePartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeleteTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteTableResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteTableResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteTableCommand = deserializeAws_json1_1BatchDeleteTableCommand;
async function deserializeAws_json1_1BatchDeleteTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDeleteTableVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDeleteTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteTableVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDeleteTableVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDeleteTableVersionCommand = deserializeAws_json1_1BatchDeleteTableVersionCommand;
async function deserializeAws_json1_1BatchDeleteTableVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetPartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetPartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetPartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetPartitionCommand = deserializeAws_json1_1BatchGetPartitionCommand;
async function deserializeAws_json1_1BatchGetPartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateConnectionCommand = deserializeAws_json1_1CreateConnectionCommand;
async function deserializeAws_json1_1CreateConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDatabaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDatabaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDatabaseCommand = deserializeAws_json1_1CreateDatabaseCommand;
async function deserializeAws_json1_1CreateDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreatePartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePartitionCommand = deserializeAws_json1_1CreatePartitionCommand;
async function deserializeAws_json1_1CreatePartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTableResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTableResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTableCommand = deserializeAws_json1_1CreateTableCommand;
async function deserializeAws_json1_1CreateTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateUserDefinedFunctionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserDefinedFunctionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserDefinedFunctionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserDefinedFunctionCommand = deserializeAws_json1_1CreateUserDefinedFunctionCommand;
async function deserializeAws_json1_1CreateUserDefinedFunctionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
async function deserializeAws_json1_1DeleteConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDatabaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDatabaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDatabaseCommand = deserializeAws_json1_1DeleteDatabaseCommand;
async function deserializeAws_json1_1DeleteDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeletePartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeletePartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePartitionCommand = deserializeAws_json1_1DeletePartitionCommand;
async function deserializeAws_json1_1DeletePartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteResourcePolicyCommand = deserializeAws_json1_1DeleteResourcePolicyCommand;
async function deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConditionCheckFailureException":
        case "com.amazonaws.glue.common.exceptions#ConditionCheckFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTableResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTableResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTableCommand = deserializeAws_json1_1DeleteTableCommand;
async function deserializeAws_json1_1DeleteTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTableVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTableVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTableVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTableVersionCommand = deserializeAws_json1_1DeleteTableVersionCommand;
async function deserializeAws_json1_1DeleteTableVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteUserDefinedFunctionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserDefinedFunctionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteUserDefinedFunctionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserDefinedFunctionCommand = deserializeAws_json1_1DeleteUserDefinedFunctionCommand;
async function deserializeAws_json1_1DeleteUserDefinedFunctionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCatalogImportStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCatalogImportStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCatalogImportStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCatalogImportStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCatalogImportStatusCommand = deserializeAws_json1_1GetCatalogImportStatusCommand;
async function deserializeAws_json1_1GetCatalogImportStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConnectionCommand = deserializeAws_json1_1GetConnectionCommand;
async function deserializeAws_json1_1GetConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConnectionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConnectionsCommand = deserializeAws_json1_1GetConnectionsCommand;
async function deserializeAws_json1_1GetConnectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDataCatalogEncryptionSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand;
async function deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDatabaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDatabaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDatabaseCommand = deserializeAws_json1_1GetDatabaseCommand;
async function deserializeAws_json1_1GetDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDatabasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDatabasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDatabasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDatabasesCommand = deserializeAws_json1_1GetDatabasesCommand;
async function deserializeAws_json1_1GetDatabasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPartitionCommand = deserializeAws_json1_1GetPartitionCommand;
async function deserializeAws_json1_1GetPartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPartitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPartitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPartitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPartitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPartitionsCommand = deserializeAws_json1_1GetPartitionsCommand;
async function deserializeAws_json1_1GetPartitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourcePolicyCommand = deserializeAws_json1_1GetResourcePolicyCommand;
async function deserializeAws_json1_1GetResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTableResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTableCommand = deserializeAws_json1_1GetTableCommand;
async function deserializeAws_json1_1GetTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTableVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTableVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTableVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTableVersionCommand = deserializeAws_json1_1GetTableVersionCommand;
async function deserializeAws_json1_1GetTableVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTableVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTableVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTableVersionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTableVersionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTableVersionsCommand = deserializeAws_json1_1GetTableVersionsCommand;
async function deserializeAws_json1_1GetTableVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTablesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTablesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTablesCommand = deserializeAws_json1_1GetTablesCommand;
async function deserializeAws_json1_1GetTablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetUserDefinedFunctionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserDefinedFunctionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserDefinedFunctionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUserDefinedFunctionCommand = deserializeAws_json1_1GetUserDefinedFunctionCommand;
async function deserializeAws_json1_1GetUserDefinedFunctionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetUserDefinedFunctionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetUserDefinedFunctionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUserDefinedFunctionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetUserDefinedFunctionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetUserDefinedFunctionsCommand = deserializeAws_json1_1GetUserDefinedFunctionsCommand;
async function deserializeAws_json1_1GetUserDefinedFunctionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ImportCatalogToGlueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportCatalogToGlueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportCatalogToGlueResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportCatalogToGlueResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportCatalogToGlueCommand = deserializeAws_json1_1ImportCatalogToGlueCommand;
async function deserializeAws_json1_1ImportCatalogToGlueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutDataCatalogEncryptionSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand;
async function deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutResourcePolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResourcePolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourcePolicyCommand = deserializeAws_json1_1PutResourcePolicyCommand;
async function deserializeAws_json1_1PutResourcePolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConditionCheckFailureException":
        case "com.amazonaws.glue.common.exceptions#ConditionCheckFailureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SearchTablesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchTablesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchTablesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchTablesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchTablesCommand = deserializeAws_json1_1SearchTablesCommand;
async function deserializeAws_json1_1SearchTablesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateConnectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateConnectionCommand = deserializeAws_json1_1UpdateConnectionCommand;
async function deserializeAws_json1_1UpdateConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDatabaseCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDatabaseResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDatabaseResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDatabaseCommand = deserializeAws_json1_1UpdateDatabaseCommand;
async function deserializeAws_json1_1UpdateDatabaseCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdatePartitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePartitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePartitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePartitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePartitionCommand = deserializeAws_json1_1UpdatePartitionCommand;
async function deserializeAws_json1_1UpdatePartitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateTableCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTableCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTableResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTableResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTableCommand = deserializeAws_json1_1UpdateTableCommand;
async function deserializeAws_json1_1UpdateTableCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateUserDefinedFunctionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserDefinedFunctionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUserDefinedFunctionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateUserDefinedFunctionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserDefinedFunctionCommand = deserializeAws_json1_1UpdateUserDefinedFunctionCommand;
async function deserializeAws_json1_1UpdateUserDefinedFunctionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GlueEncryptionException":
        case "com.amazonaws.glue.common.exceptions#GlueEncryptionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetDevEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDevEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetDevEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetDevEndpointsCommand = deserializeAws_json1_1BatchGetDevEndpointsCommand;
async function deserializeAws_json1_1BatchGetDevEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue.common.exceptions#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDevEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDevEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDevEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDevEndpointCommand = deserializeAws_json1_1CreateDevEndpointCommand;
async function deserializeAws_json1_1CreateDevEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue.common.exceptions#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue.common.exceptions#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.glue.common.exceptions#ValidationException":
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
async function deserializeAws_json1_1CreateSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecurityConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateSecurityConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = deserializeAws_json1_1CreateSecurityConfigurationCommand;
async function deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDevEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDevEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDevEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDevEndpointCommand = deserializeAws_json1_1DeleteDevEndpointCommand;
async function deserializeAws_json1_1DeleteDevEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecurityConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSecurityConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = deserializeAws_json1_1DeleteSecurityConfigurationCommand;
async function deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDevEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDevEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDevEndpointCommand = deserializeAws_json1_1GetDevEndpointCommand;
async function deserializeAws_json1_1GetDevEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDevEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDevEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDevEndpointsCommand = deserializeAws_json1_1GetDevEndpointsCommand;
async function deserializeAws_json1_1GetDevEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobBookmarkCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobBookmarkCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobBookmarkResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobBookmarkResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobBookmarkCommand = deserializeAws_json1_1GetJobBookmarkCommand;
async function deserializeAws_json1_1GetJobBookmarkCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.glue.common.exceptions#ValidationException":
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
async function deserializeAws_json1_1GetSecurityConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecurityConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSecurityConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSecurityConfigurationCommand = deserializeAws_json1_1GetSecurityConfigurationCommand;
async function deserializeAws_json1_1GetSecurityConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetSecurityConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetSecurityConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSecurityConfigurationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetSecurityConfigurationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetSecurityConfigurationsCommand = deserializeAws_json1_1GetSecurityConfigurationsCommand;
async function deserializeAws_json1_1GetSecurityConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDevEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDevEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDevEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDevEndpointsCommand = deserializeAws_json1_1ListDevEndpointsCommand;
async function deserializeAws_json1_1ListDevEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ResetJobBookmarkCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResetJobBookmarkCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetJobBookmarkResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResetJobBookmarkResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResetJobBookmarkCommand = deserializeAws_json1_1ResetJobBookmarkCommand;
async function deserializeAws_json1_1ResetJobBookmarkCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateDevEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDevEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDevEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDevEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDevEndpointCommand = deserializeAws_json1_1UpdateDevEndpointCommand;
async function deserializeAws_json1_1UpdateDevEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.glue.common.exceptions#ValidationException":
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
async function deserializeAws_json1_1CancelMLTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelMLTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelMLTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelMLTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelMLTaskRunCommand = deserializeAws_json1_1CancelMLTaskRunCommand;
async function deserializeAws_json1_1CancelMLTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateMLTransformCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMLTransformResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMLTransformResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMLTransformCommand = deserializeAws_json1_1CreateMLTransformCommand;
async function deserializeAws_json1_1CreateMLTransformCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue.common.exceptions#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue.common.exceptions#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteMLTransformCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMLTransformResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMLTransformResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMLTransformCommand = deserializeAws_json1_1DeleteMLTransformCommand;
async function deserializeAws_json1_1DeleteMLTransformCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMLTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMLTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMLTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMLTaskRunCommand = deserializeAws_json1_1GetMLTaskRunCommand;
async function deserializeAws_json1_1GetMLTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMLTaskRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMLTaskRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTaskRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMLTaskRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMLTaskRunsCommand = deserializeAws_json1_1GetMLTaskRunsCommand;
async function deserializeAws_json1_1GetMLTaskRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMLTransformCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTransformResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMLTransformResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMLTransformCommand = deserializeAws_json1_1GetMLTransformCommand;
async function deserializeAws_json1_1GetMLTransformCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMLTransformsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMLTransformsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMLTransformsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMLTransformsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMLTransformsCommand = deserializeAws_json1_1GetMLTransformsCommand;
async function deserializeAws_json1_1GetMLTransformsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartExportLabelsTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartExportLabelsTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartExportLabelsTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartExportLabelsTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartExportLabelsTaskRunCommand = deserializeAws_json1_1StartExportLabelsTaskRunCommand;
async function deserializeAws_json1_1StartExportLabelsTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartImportLabelsTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartImportLabelsTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartImportLabelsTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartImportLabelsTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartImportLabelsTaskRunCommand = deserializeAws_json1_1StartImportLabelsTaskRunCommand;
async function deserializeAws_json1_1StartImportLabelsTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartMLEvaluationTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMLEvaluationTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMLEvaluationTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMLEvaluationTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMLEvaluationTaskRunCommand = deserializeAws_json1_1StartMLEvaluationTaskRunCommand;
async function deserializeAws_json1_1StartMLEvaluationTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentRunsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MLTransformNotReadyException":
        case "com.amazonaws.glue.ml.coral#MLTransformNotReadyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MLTransformNotReadyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMLLabelingSetGenerationTaskRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand;
async function deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentRunsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateMLTransformCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMLTransformCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMLTransformResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMLTransformResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMLTransformCommand = deserializeAws_json1_1UpdateMLTransformCommand;
async function deserializeAws_json1_1UpdateMLTransformCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.glue.common.exceptions#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetJobsCommand = deserializeAws_json1_1BatchGetJobsCommand;
async function deserializeAws_json1_1BatchGetJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetTriggersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetTriggersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetTriggersCommand = deserializeAws_json1_1BatchGetTriggersCommand;
async function deserializeAws_json1_1BatchGetTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetWorkflowsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetWorkflowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetWorkflowsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetWorkflowsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetWorkflowsCommand = deserializeAws_json1_1BatchGetWorkflowsCommand;
async function deserializeAws_json1_1BatchGetWorkflowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchStopJobRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchStopJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchStopJobRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchStopJobRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchStopJobRunCommand = deserializeAws_json1_1BatchStopJobRunCommand;
async function deserializeAws_json1_1BatchStopJobRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateJobCommand = deserializeAws_json1_1CreateJobCommand;
async function deserializeAws_json1_1CreateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue.common.exceptions#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTriggerCommand = deserializeAws_json1_1CreateTriggerCommand;
async function deserializeAws_json1_1CreateTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.glue.common.exceptions#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateWorkflowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWorkflowResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWorkflowCommand = deserializeAws_json1_1CreateWorkflowCommand;
async function deserializeAws_json1_1CreateWorkflowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteJobCommand = deserializeAws_json1_1DeleteJobCommand;
async function deserializeAws_json1_1DeleteJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTriggerCommand = deserializeAws_json1_1DeleteTriggerCommand;
async function deserializeAws_json1_1DeleteTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteWorkflowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkflowResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWorkflowResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWorkflowCommand = deserializeAws_json1_1DeleteWorkflowCommand;
async function deserializeAws_json1_1DeleteWorkflowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobCommand = deserializeAws_json1_1GetJobCommand;
async function deserializeAws_json1_1GetJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobRunCommand = deserializeAws_json1_1GetJobRunCommand;
async function deserializeAws_json1_1GetJobRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobRunsCommand = deserializeAws_json1_1GetJobRunsCommand;
async function deserializeAws_json1_1GetJobRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobsCommand = deserializeAws_json1_1GetJobsCommand;
async function deserializeAws_json1_1GetJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTriggerCommand = deserializeAws_json1_1GetTriggerCommand;
async function deserializeAws_json1_1GetTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTriggersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTriggersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTriggersCommand = deserializeAws_json1_1GetTriggersCommand;
async function deserializeAws_json1_1GetTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetWorkflowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWorkflowResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWorkflowCommand = deserializeAws_json1_1GetWorkflowCommand;
async function deserializeAws_json1_1GetWorkflowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetWorkflowRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWorkflowRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWorkflowRunCommand = deserializeAws_json1_1GetWorkflowRunCommand;
async function deserializeAws_json1_1GetWorkflowRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetWorkflowRunPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWorkflowRunPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunPropertiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWorkflowRunPropertiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWorkflowRunPropertiesCommand = deserializeAws_json1_1GetWorkflowRunPropertiesCommand;
async function deserializeAws_json1_1GetWorkflowRunPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetWorkflowRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWorkflowRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkflowRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWorkflowRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWorkflowRunsCommand = deserializeAws_json1_1GetWorkflowRunsCommand;
async function deserializeAws_json1_1GetWorkflowRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
async function deserializeAws_json1_1ListJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTriggersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTriggersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTriggersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTriggersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTriggersCommand = deserializeAws_json1_1ListTriggersCommand;
async function deserializeAws_json1_1ListTriggersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListWorkflowsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWorkflowsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWorkflowsCommand = deserializeAws_json1_1ListWorkflowsCommand;
async function deserializeAws_json1_1ListWorkflowsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutWorkflowRunPropertiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutWorkflowRunPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutWorkflowRunPropertiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutWorkflowRunPropertiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutWorkflowRunPropertiesCommand = deserializeAws_json1_1PutWorkflowRunPropertiesCommand;
async function deserializeAws_json1_1PutWorkflowRunPropertiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartJobRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartJobRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartJobRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartJobRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartJobRunCommand = deserializeAws_json1_1StartJobRunCommand;
async function deserializeAws_json1_1StartJobRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentRunsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTriggerCommand = deserializeAws_json1_1StartTriggerCommand;
async function deserializeAws_json1_1StartTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentRunsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartWorkflowRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartWorkflowRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartWorkflowRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartWorkflowRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartWorkflowRunCommand = deserializeAws_json1_1StartWorkflowRunCommand;
async function deserializeAws_json1_1StartWorkflowRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentRunsExceededException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentRunsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTriggerCommand = deserializeAws_json1_1StopTriggerCommand;
async function deserializeAws_json1_1StopTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateJobCommand = deserializeAws_json1_1UpdateJobCommand;
async function deserializeAws_json1_1UpdateJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateTriggerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTriggerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTriggerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTriggerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTriggerCommand = deserializeAws_json1_1UpdateTriggerCommand;
async function deserializeAws_json1_1UpdateTriggerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateWorkflowCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWorkflowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkflowResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWorkflowResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWorkflowCommand = deserializeAws_json1_1UpdateWorkflowCommand;
async function deserializeAws_json1_1UpdateWorkflowCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.glue.common.exceptions#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchGetCrawlersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetCrawlersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetCrawlersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetCrawlersCommand = deserializeAws_json1_1BatchGetCrawlersCommand;
async function deserializeAws_json1_1BatchGetCrawlersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateClassifierCommand = deserializeAws_json1_1CreateClassifierCommand;
async function deserializeAws_json1_1CreateClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCrawlerCommand = deserializeAws_json1_1CreateCrawlerCommand;
async function deserializeAws_json1_1CreateCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazonaws.glue.common.exceptions#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNumberLimitExceededException":
        case "com.amazonaws.glue.common.exceptions#ResourceNumberLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateScriptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateScriptResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateScriptResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateScriptCommand = deserializeAws_json1_1CreateScriptCommand;
async function deserializeAws_json1_1CreateScriptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteClassifierCommand = deserializeAws_json1_1DeleteClassifierCommand;
async function deserializeAws_json1_1DeleteClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCrawlerCommand = deserializeAws_json1_1DeleteCrawlerCommand;
async function deserializeAws_json1_1DeleteCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CrawlerRunningException":
        case "com.amazonaws.gluedataplane.coral#CrawlerRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerTransitioningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetClassifierCommand = deserializeAws_json1_1GetClassifierCommand;
async function deserializeAws_json1_1GetClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetClassifiersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetClassifiersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetClassifiersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetClassifiersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetClassifiersCommand = deserializeAws_json1_1GetClassifiersCommand;
async function deserializeAws_json1_1GetClassifiersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCrawlerCommand = deserializeAws_json1_1GetCrawlerCommand;
async function deserializeAws_json1_1GetCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCrawlerMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCrawlerMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlerMetricsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCrawlerMetricsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCrawlerMetricsCommand = deserializeAws_json1_1GetCrawlerMetricsCommand;
async function deserializeAws_json1_1GetCrawlerMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCrawlersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCrawlersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCrawlersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCrawlersCommand = deserializeAws_json1_1GetCrawlersCommand;
async function deserializeAws_json1_1GetCrawlersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetDataflowGraphCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDataflowGraphCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDataflowGraphResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDataflowGraphResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDataflowGraphCommand = deserializeAws_json1_1GetDataflowGraphCommand;
async function deserializeAws_json1_1GetDataflowGraphCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetMappingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetMappingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMappingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetMappingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetMappingCommand = deserializeAws_json1_1GetMappingCommand;
async function deserializeAws_json1_1GetMappingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPlanCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPlanCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPlanResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPlanResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPlanCommand = deserializeAws_json1_1GetPlanCommand;
async function deserializeAws_json1_1GetPlanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.glue.common.exceptions#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCrawlersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCrawlersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCrawlersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCrawlersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCrawlersCommand = deserializeAws_json1_1ListCrawlersCommand;
async function deserializeAws_json1_1ListCrawlersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartCrawlerCommand = deserializeAws_json1_1StartCrawlerCommand;
async function deserializeAws_json1_1StartCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CrawlerRunningException":
        case "com.amazonaws.gluedataplane.coral#CrawlerRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartCrawlerScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartCrawlerScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartCrawlerScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartCrawlerScheduleCommand = deserializeAws_json1_1StartCrawlerScheduleCommand;
async function deserializeAws_json1_1StartCrawlerScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoScheduleException":
        case "com.amazonaws.gluedataplane.coral#NoScheduleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoScheduleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerRunningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerTransitioningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopCrawlerCommand = deserializeAws_json1_1StopCrawlerCommand;
async function deserializeAws_json1_1StopCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CrawlerNotRunningException":
        case "com.amazonaws.gluedataplane.coral#CrawlerNotRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CrawlerNotRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CrawlerStoppingException":
        case "com.amazonaws.gluedataplane.coral#CrawlerStoppingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CrawlerStoppingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopCrawlerScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopCrawlerScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopCrawlerScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopCrawlerScheduleCommand = deserializeAws_json1_1StopCrawlerScheduleCommand;
async function deserializeAws_json1_1StopCrawlerScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerNotRunningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerNotRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerNotRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerTransitioningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateClassifierCommand = deserializeAws_json1_1UpdateClassifierCommand;
async function deserializeAws_json1_1UpdateClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue.common.exceptions#VersionMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateCrawlerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCrawlerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCrawlerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCrawlerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCrawlerCommand = deserializeAws_json1_1UpdateCrawlerCommand;
async function deserializeAws_json1_1UpdateCrawlerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue.common.exceptions#VersionMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CrawlerRunningException":
        case "com.amazonaws.gluedataplane.coral#CrawlerRunningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateCrawlerScheduleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCrawlerScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCrawlerScheduleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCrawlerScheduleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCrawlerScheduleCommand = deserializeAws_json1_1UpdateCrawlerScheduleCommand;
async function deserializeAws_json1_1UpdateCrawlerScheduleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.glue.common.exceptions#EntityNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.glue.common.exceptions#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationTimeoutException":
        case "com.amazonaws.glue.common.exceptions#OperationTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VersionMismatchException":
        case "com.amazonaws.glue.common.exceptions#VersionMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "SchedulerTransitioningException":
        case "com.amazonaws.gluedataplane.coral#SchedulerTransitioningException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentRunsExceededException(body, context);
    const contents = Object.assign({ name: "ConcurrentRunsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConditionCheckFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConditionCheckFailureException(body, context);
    const contents = Object.assign({ name: "ConditionCheckFailureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = Object.assign({ name: "EntityNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GlueEncryptionException(body, context);
    const contents = Object.assign({ name: "GlueEncryptionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationTimeoutException(body, context);
    const contents = Object.assign({ name: "OperationTimeoutException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
    const contents = Object.assign({ name: "ResourceNumberLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1VersionMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1VersionMismatchException(body, context);
    const contents = Object.assign({ name: "VersionMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MLTransformNotReadyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MLTransformNotReadyException(body, context);
    const contents = Object.assign({ name: "MLTransformNotReadyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CrawlerNotRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerNotRunningException(body, context);
    const contents = Object.assign({ name: "CrawlerNotRunningException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CrawlerRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerRunningException(body, context);
    const contents = Object.assign({ name: "CrawlerRunningException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CrawlerStoppingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CrawlerStoppingException(body, context);
    const contents = Object.assign({ name: "CrawlerStoppingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoScheduleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoScheduleException(body, context);
    const contents = Object.assign({ name: "NoScheduleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SchedulerNotRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerNotRunningException(body, context);
    const contents = Object.assign({ name: "SchedulerNotRunningException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SchedulerRunningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerRunningException(body, context);
    const contents = Object.assign({ name: "SchedulerRunningException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1SchedulerTransitioningExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SchedulerTransitioningException(body, context);
    const contents = Object.assign({ name: "SchedulerTransitioningException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1GetTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagsToAdd !== undefined) {
        bodyParams["TagsToAdd"] = serializeAws_json1_1TagsMap(input.TagsToAdd, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagsToRemove !== undefined) {
        bodyParams["TagsToRemove"] = serializeAws_json1_1TagKeysList(input.TagsToRemove, context);
    }
    return bodyParams;
};
const serializeAws_json1_1NameStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagKeysList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1BatchCreatePartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionInputList !== undefined) {
        bodyParams["PartitionInputList"] = serializeAws_json1_1PartitionInputList(input.PartitionInputList, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeleteConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.ConnectionNameList !== undefined) {
        bodyParams["ConnectionNameList"] = serializeAws_json1_1DeleteConnectionNameList(input.ConnectionNameList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeletePartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionsToDelete !== undefined) {
        bodyParams["PartitionsToDelete"] = serializeAws_json1_1BatchDeletePartitionValueList(input.PartitionsToDelete, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeletePartitionValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PartitionValueList(entry, context));
    }
    return contents;
};
const serializeAws_json1_1BatchDeleteTableNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchDeleteTableRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TablesToDelete !== undefined) {
        bodyParams["TablesToDelete"] = serializeAws_json1_1BatchDeleteTableNameList(input.TablesToDelete, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDeleteTableVersionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchDeleteTableVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.VersionIds !== undefined) {
        bodyParams["VersionIds"] = serializeAws_json1_1BatchDeleteTableVersionList(input.VersionIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetPartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionsToGet !== undefined) {
        bodyParams["PartitionsToGet"] = serializeAws_json1_1BatchGetPartitionValueList(input.PartitionsToGet, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetPartitionValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PartitionValueList(entry, context));
    }
    return contents;
};
const serializeAws_json1_1BoundedPartitionValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Column = (input, context) => {
    const bodyParams = {};
    if (input.Comment !== undefined) {
        bodyParams["Comment"] = input.Comment;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1ColumnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Column(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ColumnValueStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionProperties !== undefined) {
        bodyParams["ConnectionProperties"] = serializeAws_json1_1ConnectionProperties(input.ConnectionProperties, context);
    }
    if (input.ConnectionType !== undefined) {
        bodyParams["ConnectionType"] = input.ConnectionType;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.MatchCriteria !== undefined) {
        bodyParams["MatchCriteria"] = serializeAws_json1_1MatchCriteria(input.MatchCriteria, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PhysicalConnectionRequirements !== undefined) {
        bodyParams["PhysicalConnectionRequirements"] = serializeAws_json1_1PhysicalConnectionRequirements(input.PhysicalConnectionRequirements, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ConnectionPasswordEncryption = (input, context) => {
    const bodyParams = {};
    if (input.AwsKmsKeyId !== undefined) {
        bodyParams["AwsKmsKeyId"] = input.AwsKmsKeyId;
    }
    if (input.ReturnConnectionPasswordEncrypted !== undefined) {
        bodyParams["ReturnConnectionPasswordEncrypted"] =
            input.ReturnConnectionPasswordEncrypted;
    }
    return bodyParams;
};
const serializeAws_json1_1ConnectionProperties = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1CreateConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.ConnectionInput !== undefined) {
        bodyParams["ConnectionInput"] = serializeAws_json1_1ConnectionInput(input.ConnectionInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseInput !== undefined) {
        bodyParams["DatabaseInput"] = serializeAws_json1_1DatabaseInput(input.DatabaseInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionInput !== undefined) {
        bodyParams["PartitionInput"] = serializeAws_json1_1PartitionInput(input.PartitionInput, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTableRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableInput !== undefined) {
        bodyParams["TableInput"] = serializeAws_json1_1TableInput(input.TableInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserDefinedFunctionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.FunctionInput !== undefined) {
        bodyParams["FunctionInput"] = serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataCatalogEncryptionSettings = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionPasswordEncryption !== undefined) {
        bodyParams["ConnectionPasswordEncryption"] = serializeAws_json1_1ConnectionPasswordEncryption(input.ConnectionPasswordEncryption, context);
    }
    if (input.EncryptionAtRest !== undefined) {
        bodyParams["EncryptionAtRest"] = serializeAws_json1_1EncryptionAtRest(input.EncryptionAtRest, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataLakePrincipal = (input, context) => {
    const bodyParams = {};
    if (input.DataLakePrincipalIdentifier !== undefined) {
        bodyParams["DataLakePrincipalIdentifier"] =
            input.DataLakePrincipalIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1DatabaseInput = (input, context) => {
    const bodyParams = {};
    if (input.CreateTableDefaultPermissions !== undefined) {
        bodyParams["CreateTableDefaultPermissions"] = serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LocationUri !== undefined) {
        bodyParams["LocationUri"] = input.LocationUri;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteConnectionNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.ConnectionName !== undefined) {
        bodyParams["ConnectionName"] = input.ConnectionName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionValues !== undefined) {
        bodyParams["PartitionValues"] = serializeAws_json1_1ValueStringList(input.PartitionValues, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyHashCondition !== undefined) {
        bodyParams["PolicyHashCondition"] = input.PolicyHashCondition;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTableRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTableVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.VersionId !== undefined) {
        bodyParams["VersionId"] = input.VersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserDefinedFunctionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.FunctionName !== undefined) {
        bodyParams["FunctionName"] = input.FunctionName;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionAtRest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogEncryptionMode !== undefined) {
        bodyParams["CatalogEncryptionMode"] = input.CatalogEncryptionMode;
    }
    if (input.SseAwsKmsKeyId !== undefined) {
        bodyParams["SseAwsKmsKeyId"] = input.SseAwsKmsKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCatalogImportStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.HidePassword !== undefined) {
        bodyParams["HidePassword"] = input.HidePassword;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConnectionsFilter = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionType !== undefined) {
        bodyParams["ConnectionType"] = input.ConnectionType;
    }
    if (input.MatchCriteria !== undefined) {
        bodyParams["MatchCriteria"] = serializeAws_json1_1MatchCriteria(input.MatchCriteria, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetConnectionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1GetConnectionsFilter(input.Filter, context);
    }
    if (input.HidePassword !== undefined) {
        bodyParams["HidePassword"] = input.HidePassword;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDatabasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionValues !== undefined) {
        bodyParams["PartitionValues"] = serializeAws_json1_1ValueStringList(input.PartitionValues, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPartitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Expression !== undefined) {
        bodyParams["Expression"] = input.Expression;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Segment !== undefined) {
        bodyParams["Segment"] = serializeAws_json1_1Segment(input.Segment, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetTableRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTableVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    if (input.VersionId !== undefined) {
        bodyParams["VersionId"] = input.VersionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTableVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
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
const serializeAws_json1_1GetTablesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Expression !== undefined) {
        bodyParams["Expression"] = input.Expression;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUserDefinedFunctionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.FunctionName !== undefined) {
        bodyParams["FunctionName"] = input.FunctionName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetUserDefinedFunctionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Pattern !== undefined) {
        bodyParams["Pattern"] = input.Pattern;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportCatalogToGlueRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    return bodyParams;
};
const serializeAws_json1_1LocationMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1MatchCriteria = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Order = (input, context) => {
    const bodyParams = {};
    if (input.Column !== undefined) {
        bodyParams["Column"] = input.Column;
    }
    if (input.SortOrder !== undefined) {
        bodyParams["SortOrder"] = input.SortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1OrderList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Order(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParametersMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1PartitionInput = (input, context) => {
    const bodyParams = {};
    if (input.LastAccessTime !== undefined) {
        bodyParams["LastAccessTime"] = Math.round(input.LastAccessTime.getTime() / 1000);
    }
    if (input.LastAnalyzedTime !== undefined) {
        bodyParams["LastAnalyzedTime"] = Math.round(input.LastAnalyzedTime.getTime() / 1000);
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    if (input.StorageDescriptor !== undefined) {
        bodyParams["StorageDescriptor"] = serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context);
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ValueStringList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PartitionInputList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PartitionInput(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PartitionValueList = (input, context) => {
    const bodyParams = {};
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1ValueStringList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PermissionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PhysicalConnectionRequirements = (input, context) => {
    const bodyParams = {};
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.SecurityGroupIdList !== undefined) {
        bodyParams["SecurityGroupIdList"] = serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIdList, context);
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    return bodyParams;
};
const serializeAws_json1_1PrincipalPermissions = (input, context) => {
    const bodyParams = {};
    if (input.Permissions !== undefined) {
        bodyParams["Permissions"] = serializeAws_json1_1PermissionList(input.Permissions, context);
    }
    if (input.Principal !== undefined) {
        bodyParams["Principal"] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PrincipalPermissionsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PrincipalPermissions(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PropertyPredicate = (input, context) => {
    const bodyParams = {};
    if (input.Comparator !== undefined) {
        bodyParams["Comparator"] = input.Comparator;
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DataCatalogEncryptionSettings !== undefined) {
        bodyParams["DataCatalogEncryptionSettings"] = serializeAws_json1_1DataCatalogEncryptionSettings(input.DataCatalogEncryptionSettings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutResourcePolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.PolicyExistsCondition !== undefined) {
        bodyParams["PolicyExistsCondition"] = input.PolicyExistsCondition;
    }
    if (input.PolicyHashCondition !== undefined) {
        bodyParams["PolicyHashCondition"] = input.PolicyHashCondition;
    }
    if (input.PolicyInJson !== undefined) {
        bodyParams["PolicyInJson"] = input.PolicyInJson;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceUri = (input, context) => {
    const bodyParams = {};
    if (input.ResourceType !== undefined) {
        bodyParams["ResourceType"] = input.ResourceType;
    }
    if (input.Uri !== undefined) {
        bodyParams["Uri"] = input.Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceUriList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceUri(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SearchPropertyPredicates = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PropertyPredicate(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SearchTablesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.Filters !== undefined) {
        bodyParams["Filters"] = serializeAws_json1_1SearchPropertyPredicates(input.Filters, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SearchText !== undefined) {
        bodyParams["SearchText"] = input.SearchText;
    }
    if (input.SortCriteria !== undefined) {
        bodyParams["SortCriteria"] = serializeAws_json1_1SortCriteria(input.SortCriteria, context);
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
const serializeAws_json1_1Segment = (input, context) => {
    const bodyParams = {};
    if (input.SegmentNumber !== undefined) {
        bodyParams["SegmentNumber"] = input.SegmentNumber;
    }
    if (input.TotalSegments !== undefined) {
        bodyParams["TotalSegments"] = input.TotalSegments;
    }
    return bodyParams;
};
const serializeAws_json1_1SerDeInfo = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    if (input.SerializationLibrary !== undefined) {
        bodyParams["SerializationLibrary"] = input.SerializationLibrary;
    }
    return bodyParams;
};
const serializeAws_json1_1SkewedInfo = (input, context) => {
    const bodyParams = {};
    if (input.SkewedColumnNames !== undefined) {
        bodyParams["SkewedColumnNames"] = serializeAws_json1_1NameStringList(input.SkewedColumnNames, context);
    }
    if (input.SkewedColumnValueLocationMaps !== undefined) {
        bodyParams["SkewedColumnValueLocationMaps"] = serializeAws_json1_1LocationMap(input.SkewedColumnValueLocationMaps, context);
    }
    if (input.SkewedColumnValues !== undefined) {
        bodyParams["SkewedColumnValues"] = serializeAws_json1_1ColumnValueStringList(input.SkewedColumnValues, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SortCriteria = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SortCriterion(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SortCriterion = (input, context) => {
    const bodyParams = {};
    if (input.FieldName !== undefined) {
        bodyParams["FieldName"] = input.FieldName;
    }
    if (input.Sort !== undefined) {
        bodyParams["Sort"] = input.Sort;
    }
    return bodyParams;
};
const serializeAws_json1_1StorageDescriptor = (input, context) => {
    const bodyParams = {};
    if (input.BucketColumns !== undefined) {
        bodyParams["BucketColumns"] = serializeAws_json1_1NameStringList(input.BucketColumns, context);
    }
    if (input.Columns !== undefined) {
        bodyParams["Columns"] = serializeAws_json1_1ColumnList(input.Columns, context);
    }
    if (input.Compressed !== undefined) {
        bodyParams["Compressed"] = input.Compressed;
    }
    if (input.InputFormat !== undefined) {
        bodyParams["InputFormat"] = input.InputFormat;
    }
    if (input.Location !== undefined) {
        bodyParams["Location"] = input.Location;
    }
    if (input.NumberOfBuckets !== undefined) {
        bodyParams["NumberOfBuckets"] = input.NumberOfBuckets;
    }
    if (input.OutputFormat !== undefined) {
        bodyParams["OutputFormat"] = input.OutputFormat;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    if (input.SerdeInfo !== undefined) {
        bodyParams["SerdeInfo"] = serializeAws_json1_1SerDeInfo(input.SerdeInfo, context);
    }
    if (input.SkewedInfo !== undefined) {
        bodyParams["SkewedInfo"] = serializeAws_json1_1SkewedInfo(input.SkewedInfo, context);
    }
    if (input.SortColumns !== undefined) {
        bodyParams["SortColumns"] = serializeAws_json1_1OrderList(input.SortColumns, context);
    }
    if (input.StoredAsSubDirectories !== undefined) {
        bodyParams["StoredAsSubDirectories"] = input.StoredAsSubDirectories;
    }
    return bodyParams;
};
const serializeAws_json1_1TableInput = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.LastAccessTime !== undefined) {
        bodyParams["LastAccessTime"] = Math.round(input.LastAccessTime.getTime() / 1000);
    }
    if (input.LastAnalyzedTime !== undefined) {
        bodyParams["LastAnalyzedTime"] = Math.round(input.LastAnalyzedTime.getTime() / 1000);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Owner !== undefined) {
        bodyParams["Owner"] = input.Owner;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1ParametersMap(input.Parameters, context);
    }
    if (input.PartitionKeys !== undefined) {
        bodyParams["PartitionKeys"] = serializeAws_json1_1ColumnList(input.PartitionKeys, context);
    }
    if (input.Retention !== undefined) {
        bodyParams["Retention"] = input.Retention;
    }
    if (input.StorageDescriptor !== undefined) {
        bodyParams["StorageDescriptor"] = serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context);
    }
    if (input.TableType !== undefined) {
        bodyParams["TableType"] = input.TableType;
    }
    if (input.ViewExpandedText !== undefined) {
        bodyParams["ViewExpandedText"] = input.ViewExpandedText;
    }
    if (input.ViewOriginalText !== undefined) {
        bodyParams["ViewOriginalText"] = input.ViewOriginalText;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateConnectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.ConnectionInput !== undefined) {
        bodyParams["ConnectionInput"] = serializeAws_json1_1ConnectionInput(input.ConnectionInput, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDatabaseRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseInput !== undefined) {
        bodyParams["DatabaseInput"] = serializeAws_json1_1DatabaseInput(input.DatabaseInput, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePartitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.PartitionInput !== undefined) {
        bodyParams["PartitionInput"] = serializeAws_json1_1PartitionInput(input.PartitionInput, context);
    }
    if (input.PartitionValueList !== undefined) {
        bodyParams["PartitionValueList"] = serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context);
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTableRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.SkipArchive !== undefined) {
        bodyParams["SkipArchive"] = input.SkipArchive;
    }
    if (input.TableInput !== undefined) {
        bodyParams["TableInput"] = serializeAws_json1_1TableInput(input.TableInput, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserDefinedFunctionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.FunctionInput !== undefined) {
        bodyParams["FunctionInput"] = serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context);
    }
    if (input.FunctionName !== undefined) {
        bodyParams["FunctionName"] = input.FunctionName;
    }
    return bodyParams;
};
const serializeAws_json1_1UserDefinedFunctionInput = (input, context) => {
    const bodyParams = {};
    if (input.ClassName !== undefined) {
        bodyParams["ClassName"] = input.ClassName;
    }
    if (input.FunctionName !== undefined) {
        bodyParams["FunctionName"] = input.FunctionName;
    }
    if (input.OwnerName !== undefined) {
        bodyParams["OwnerName"] = input.OwnerName;
    }
    if (input.OwnerType !== undefined) {
        bodyParams["OwnerType"] = input.OwnerType;
    }
    if (input.ResourceUris !== undefined) {
        bodyParams["ResourceUris"] = serializeAws_json1_1ResourceUriList(input.ResourceUris, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ValueStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchGetDevEndpointsRequest = (input, context) => {
    const bodyParams = {};
    if (input.DevEndpointNames !== undefined) {
        bodyParams["DevEndpointNames"] = serializeAws_json1_1DevEndpointNames(input.DevEndpointNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchEncryption = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchEncryptionMode !== undefined) {
        bodyParams["CloudWatchEncryptionMode"] = input.CloudWatchEncryptionMode;
    }
    if (input.KmsKeyArn !== undefined) {
        bodyParams["KmsKeyArn"] = input.KmsKeyArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDevEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.Arguments !== undefined) {
        bodyParams["Arguments"] = serializeAws_json1_1MapValue(input.Arguments, context);
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.ExtraJarsS3Path !== undefined) {
        bodyParams["ExtraJarsS3Path"] = input.ExtraJarsS3Path;
    }
    if (input.ExtraPythonLibsS3Path !== undefined) {
        bodyParams["ExtraPythonLibsS3Path"] = input.ExtraPythonLibsS3Path;
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.NumberOfNodes !== undefined) {
        bodyParams["NumberOfNodes"] = input.NumberOfNodes;
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.PublicKey !== undefined) {
        bodyParams["PublicKey"] = input.PublicKey;
    }
    if (input.PublicKeys !== undefined) {
        bodyParams["PublicKeys"] = serializeAws_json1_1PublicKeysList(input.PublicKeys, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1StringList(input.SecurityGroupIds, context);
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateSecurityConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDevEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteSecurityConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DevEndpointCustomLibraries = (input, context) => {
    const bodyParams = {};
    if (input.ExtraJarsS3Path !== undefined) {
        bodyParams["ExtraJarsS3Path"] = input.ExtraJarsS3Path;
    }
    if (input.ExtraPythonLibsS3Path !== undefined) {
        bodyParams["ExtraPythonLibsS3Path"] = input.ExtraPythonLibsS3Path;
    }
    return bodyParams;
};
const serializeAws_json1_1DevEndpointNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1EncryptionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchEncryption !== undefined) {
        bodyParams["CloudWatchEncryption"] = serializeAws_json1_1CloudWatchEncryption(input.CloudWatchEncryption, context);
    }
    if (input.JobBookmarksEncryption !== undefined) {
        bodyParams["JobBookmarksEncryption"] = serializeAws_json1_1JobBookmarksEncryption(input.JobBookmarksEncryption, context);
    }
    if (input.S3Encryption !== undefined) {
        bodyParams["S3Encryption"] = serializeAws_json1_1S3EncryptionList(input.S3Encryption, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetDevEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDevEndpointsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobBookmarkRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSecurityConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetSecurityConfigurationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1JobBookmarksEncryption = (input, context) => {
    const bodyParams = {};
    if (input.JobBookmarksEncryptionMode !== undefined) {
        bodyParams["JobBookmarksEncryptionMode"] = input.JobBookmarksEncryptionMode;
    }
    if (input.KmsKeyArn !== undefined) {
        bodyParams["KmsKeyArn"] = input.KmsKeyArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDevEndpointsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MapValue = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1PublicKeysList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResetJobBookmarkRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    return bodyParams;
};
const serializeAws_json1_1S3Encryption = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyArn !== undefined) {
        bodyParams["KmsKeyArn"] = input.KmsKeyArn;
    }
    if (input.S3EncryptionMode !== undefined) {
        bodyParams["S3EncryptionMode"] = input.S3EncryptionMode;
    }
    return bodyParams;
};
const serializeAws_json1_1S3EncryptionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3Encryption(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UpdateDevEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.AddArguments !== undefined) {
        bodyParams["AddArguments"] = serializeAws_json1_1MapValue(input.AddArguments, context);
    }
    if (input.AddPublicKeys !== undefined) {
        bodyParams["AddPublicKeys"] = serializeAws_json1_1PublicKeysList(input.AddPublicKeys, context);
    }
    if (input.CustomLibraries !== undefined) {
        bodyParams["CustomLibraries"] = serializeAws_json1_1DevEndpointCustomLibraries(input.CustomLibraries, context);
    }
    if (input.DeleteArguments !== undefined) {
        bodyParams["DeleteArguments"] = serializeAws_json1_1StringList(input.DeleteArguments, context);
    }
    if (input.DeletePublicKeys !== undefined) {
        bodyParams["DeletePublicKeys"] = serializeAws_json1_1PublicKeysList(input.DeletePublicKeys, context);
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.PublicKey !== undefined) {
        bodyParams["PublicKey"] = input.PublicKey;
    }
    if (input.UpdateEtlLibraries !== undefined) {
        bodyParams["UpdateEtlLibraries"] = input.UpdateEtlLibraries;
    }
    return bodyParams;
};
const serializeAws_json1_1CancelMLTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskRunId !== undefined) {
        bodyParams["TaskRunId"] = input.TaskRunId;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMLTransformRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.InputRecordTables !== undefined) {
        bodyParams["InputRecordTables"] = serializeAws_json1_1GlueTables(input.InputRecordTables, context);
    }
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MaxRetries !== undefined) {
        bodyParams["MaxRetries"] = input.MaxRetries;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1TransformParameters(input.Parameters, context);
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMLTransformRequest = (input, context) => {
    const bodyParams = {};
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1FindMatchesParameters = (input, context) => {
    const bodyParams = {};
    if (input.AccuracyCostTradeoff !== undefined) {
        bodyParams["AccuracyCostTradeoff"] = input.AccuracyCostTradeoff;
    }
    if (input.EnforceProvidedLabels !== undefined) {
        bodyParams["EnforceProvidedLabels"] = input.EnforceProvidedLabels;
    }
    if (input.PrecisionRecallTradeoff !== undefined) {
        bodyParams["PrecisionRecallTradeoff"] = input.PrecisionRecallTradeoff;
    }
    if (input.PrimaryKeyColumnName !== undefined) {
        bodyParams["PrimaryKeyColumnName"] = input.PrimaryKeyColumnName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMLTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskRunId !== undefined) {
        bodyParams["TaskRunId"] = input.TaskRunId;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMLTaskRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1TaskRunFilterCriteria(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Sort !== undefined) {
        bodyParams["Sort"] = serializeAws_json1_1TaskRunSortCriteria(input.Sort, context);
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMLTransformRequest = (input, context) => {
    const bodyParams = {};
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMLTransformsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1TransformFilterCriteria(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Sort !== undefined) {
        bodyParams["Sort"] = serializeAws_json1_1TransformSortCriteria(input.Sort, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GlueTable = (input, context) => {
    const bodyParams = {};
    if (input.CatalogId !== undefined) {
        bodyParams["CatalogId"] = input.CatalogId;
    }
    if (input.ConnectionName !== undefined) {
        bodyParams["ConnectionName"] = input.ConnectionName;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1GlueTables = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1GlueTable(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SchemaColumn = (input, context) => {
    const bodyParams = {};
    if (input.DataType !== undefined) {
        bodyParams["DataType"] = input.DataType;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StartExportLabelsTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.OutputS3Path !== undefined) {
        bodyParams["OutputS3Path"] = input.OutputS3Path;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartImportLabelsTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.InputS3Path !== undefined) {
        bodyParams["InputS3Path"] = input.InputS3Path;
    }
    if (input.ReplaceAllLabels !== undefined) {
        bodyParams["ReplaceAllLabels"] = input.ReplaceAllLabels;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartMLEvaluationTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.OutputS3Path !== undefined) {
        bodyParams["OutputS3Path"] = input.OutputS3Path;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    return bodyParams;
};
const serializeAws_json1_1TaskRunFilterCriteria = (input, context) => {
    const bodyParams = {};
    if (input.StartedAfter !== undefined) {
        bodyParams["StartedAfter"] = Math.round(input.StartedAfter.getTime() / 1000);
    }
    if (input.StartedBefore !== undefined) {
        bodyParams["StartedBefore"] = Math.round(input.StartedBefore.getTime() / 1000);
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.TaskRunType !== undefined) {
        bodyParams["TaskRunType"] = input.TaskRunType;
    }
    return bodyParams;
};
const serializeAws_json1_1TaskRunSortCriteria = (input, context) => {
    const bodyParams = {};
    if (input.Column !== undefined) {
        bodyParams["Column"] = input.Column;
    }
    if (input.SortDirection !== undefined) {
        bodyParams["SortDirection"] = input.SortDirection;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformFilterCriteria = (input, context) => {
    const bodyParams = {};
    if (input.CreatedAfter !== undefined) {
        bodyParams["CreatedAfter"] = Math.round(input.CreatedAfter.getTime() / 1000);
    }
    if (input.CreatedBefore !== undefined) {
        bodyParams["CreatedBefore"] = Math.round(input.CreatedBefore.getTime() / 1000);
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.LastModifiedAfter !== undefined) {
        bodyParams["LastModifiedAfter"] = Math.round(input.LastModifiedAfter.getTime() / 1000);
    }
    if (input.LastModifiedBefore !== undefined) {
        bodyParams["LastModifiedBefore"] = Math.round(input.LastModifiedBefore.getTime() / 1000);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Schema !== undefined) {
        bodyParams["Schema"] = serializeAws_json1_1TransformSchema(input.Schema, context);
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.TransformType !== undefined) {
        bodyParams["TransformType"] = input.TransformType;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformParameters = (input, context) => {
    const bodyParams = {};
    if (input.FindMatchesParameters !== undefined) {
        bodyParams["FindMatchesParameters"] = serializeAws_json1_1FindMatchesParameters(input.FindMatchesParameters, context);
    }
    if (input.TransformType !== undefined) {
        bodyParams["TransformType"] = input.TransformType;
    }
    return bodyParams;
};
const serializeAws_json1_1TransformSchema = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SchemaColumn(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TransformSortCriteria = (input, context) => {
    const bodyParams = {};
    if (input.Column !== undefined) {
        bodyParams["Column"] = input.Column;
    }
    if (input.SortDirection !== undefined) {
        bodyParams["SortDirection"] = input.SortDirection;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMLTransformRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MaxRetries !== undefined) {
        bodyParams["MaxRetries"] = input.MaxRetries;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1TransformParameters(input.Parameters, context);
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    if (input.TransformId !== undefined) {
        bodyParams["TransformId"] = input.TransformId;
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1Action = (input, context) => {
    const bodyParams = {};
    if (input.Arguments !== undefined) {
        bodyParams["Arguments"] = serializeAws_json1_1GenericMap(input.Arguments, context);
    }
    if (input.CrawlerName !== undefined) {
        bodyParams["CrawlerName"] = input.CrawlerName;
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.NotificationProperty !== undefined) {
        bodyParams["NotificationProperty"] = serializeAws_json1_1NotificationProperty(input.NotificationProperty, context);
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Action(entry, context));
    }
    return contents;
};
const serializeAws_json1_1BatchGetJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobNames !== undefined) {
        bodyParams["JobNames"] = serializeAws_json1_1JobNameList(input.JobNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetTriggersRequest = (input, context) => {
    const bodyParams = {};
    if (input.TriggerNames !== undefined) {
        bodyParams["TriggerNames"] = serializeAws_json1_1TriggerNameList(input.TriggerNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetWorkflowsRequest = (input, context) => {
    const bodyParams = {};
    if (input.IncludeGraph !== undefined) {
        bodyParams["IncludeGraph"] = input.IncludeGraph;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1WorkflowNames(input.Names, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchStopJobRunJobRunIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchStopJobRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobRunIds !== undefined) {
        bodyParams["JobRunIds"] = serializeAws_json1_1BatchStopJobRunJobRunIdList(input.JobRunIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Condition = (input, context) => {
    const bodyParams = {};
    if (input.CrawlState !== undefined) {
        bodyParams["CrawlState"] = input.CrawlState;
    }
    if (input.CrawlerName !== undefined) {
        bodyParams["CrawlerName"] = input.CrawlerName;
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.LogicalOperator !== undefined) {
        bodyParams["LogicalOperator"] = input.LogicalOperator;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    return bodyParams;
};
const serializeAws_json1_1ConditionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Condition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ConnectionsList = (input, context) => {
    const bodyParams = {};
    if (input.Connections !== undefined) {
        bodyParams["Connections"] = serializeAws_json1_1OrchestrationStringList(input.Connections, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllocatedCapacity !== undefined) {
        bodyParams["AllocatedCapacity"] = input.AllocatedCapacity;
    }
    if (input.Command !== undefined) {
        bodyParams["Command"] = serializeAws_json1_1JobCommand(input.Command, context);
    }
    if (input.Connections !== undefined) {
        bodyParams["Connections"] = serializeAws_json1_1ConnectionsList(input.Connections, context);
    }
    if (input.DefaultArguments !== undefined) {
        bodyParams["DefaultArguments"] = serializeAws_json1_1GenericMap(input.DefaultArguments, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ExecutionProperty !== undefined) {
        bodyParams["ExecutionProperty"] = serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context);
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.LogUri !== undefined) {
        bodyParams["LogUri"] = input.LogUri;
    }
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MaxRetries !== undefined) {
        bodyParams["MaxRetries"] = input.MaxRetries;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NotificationProperty !== undefined) {
        bodyParams["NotificationProperty"] = serializeAws_json1_1NotificationProperty(input.NotificationProperty, context);
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1ActionList(input.Actions, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Predicate !== undefined) {
        bodyParams["Predicate"] = serializeAws_json1_1Predicate(input.Predicate, context);
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.StartOnCreation !== undefined) {
        bodyParams["StartOnCreation"] = input.StartOnCreation;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.WorkflowName !== undefined) {
        bodyParams["WorkflowName"] = input.WorkflowName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWorkflowRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultRunProperties !== undefined) {
        bodyParams["DefaultRunProperties"] = serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWorkflowRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1ExecutionProperty = (input, context) => {
    const bodyParams = {};
    if (input.MaxConcurrentRuns !== undefined) {
        bodyParams["MaxConcurrentRuns"] = input.MaxConcurrentRuns;
    }
    return bodyParams;
};
const serializeAws_json1_1GenericMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1GetJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.PredecessorsIncluded !== undefined) {
        bodyParams["PredecessorsIncluded"] = input.PredecessorsIncluded;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTriggersRequest = (input, context) => {
    const bodyParams = {};
    if (input.DependentJobName !== undefined) {
        bodyParams["DependentJobName"] = input.DependentJobName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWorkflowRequest = (input, context) => {
    const bodyParams = {};
    if (input.IncludeGraph !== undefined) {
        bodyParams["IncludeGraph"] = input.IncludeGraph;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWorkflowRunPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWorkflowRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.IncludeGraph !== undefined) {
        bodyParams["IncludeGraph"] = input.IncludeGraph;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWorkflowRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.IncludeGraph !== undefined) {
        bodyParams["IncludeGraph"] = input.IncludeGraph;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1JobCommand = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PythonVersion !== undefined) {
        bodyParams["PythonVersion"] = input.PythonVersion;
    }
    if (input.ScriptLocation !== undefined) {
        bodyParams["ScriptLocation"] = input.ScriptLocation;
    }
    return bodyParams;
};
const serializeAws_json1_1JobNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1JobUpdate = (input, context) => {
    const bodyParams = {};
    if (input.AllocatedCapacity !== undefined) {
        bodyParams["AllocatedCapacity"] = input.AllocatedCapacity;
    }
    if (input.Command !== undefined) {
        bodyParams["Command"] = serializeAws_json1_1JobCommand(input.Command, context);
    }
    if (input.Connections !== undefined) {
        bodyParams["Connections"] = serializeAws_json1_1ConnectionsList(input.Connections, context);
    }
    if (input.DefaultArguments !== undefined) {
        bodyParams["DefaultArguments"] = serializeAws_json1_1GenericMap(input.DefaultArguments, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.ExecutionProperty !== undefined) {
        bodyParams["ExecutionProperty"] = serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context);
    }
    if (input.GlueVersion !== undefined) {
        bodyParams["GlueVersion"] = input.GlueVersion;
    }
    if (input.LogUri !== undefined) {
        bodyParams["LogUri"] = input.LogUri;
    }
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.MaxRetries !== undefined) {
        bodyParams["MaxRetries"] = input.MaxRetries;
    }
    if (input.NotificationProperty !== undefined) {
        bodyParams["NotificationProperty"] = serializeAws_json1_1NotificationProperty(input.NotificationProperty, context);
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTriggersRequest = (input, context) => {
    const bodyParams = {};
    if (input.DependentJobName !== undefined) {
        bodyParams["DependentJobName"] = input.DependentJobName;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListWorkflowsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationProperty = (input, context) => {
    const bodyParams = {};
    if (input.NotifyDelayAfter !== undefined) {
        bodyParams["NotifyDelayAfter"] = input.NotifyDelayAfter;
    }
    return bodyParams;
};
const serializeAws_json1_1OrchestrationStringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Predicate = (input, context) => {
    const bodyParams = {};
    if (input.Conditions !== undefined) {
        bodyParams["Conditions"] = serializeAws_json1_1ConditionList(input.Conditions, context);
    }
    if (input.Logical !== undefined) {
        bodyParams["Logical"] = input.Logical;
    }
    return bodyParams;
};
const serializeAws_json1_1PutWorkflowRunPropertiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RunId !== undefined) {
        bodyParams["RunId"] = input.RunId;
    }
    if (input.RunProperties !== undefined) {
        bodyParams["RunProperties"] = serializeAws_json1_1WorkflowRunProperties(input.RunProperties, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartJobRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllocatedCapacity !== undefined) {
        bodyParams["AllocatedCapacity"] = input.AllocatedCapacity;
    }
    if (input.Arguments !== undefined) {
        bodyParams["Arguments"] = serializeAws_json1_1GenericMap(input.Arguments, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobRunId !== undefined) {
        bodyParams["JobRunId"] = input.JobRunId;
    }
    if (input.MaxCapacity !== undefined) {
        bodyParams["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.NotificationProperty !== undefined) {
        bodyParams["NotificationProperty"] = serializeAws_json1_1NotificationProperty(input.NotificationProperty, context);
    }
    if (input.NumberOfWorkers !== undefined) {
        bodyParams["NumberOfWorkers"] = input.NumberOfWorkers;
    }
    if (input.SecurityConfiguration !== undefined) {
        bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
    }
    if (input.Timeout !== undefined) {
        bodyParams["Timeout"] = input.Timeout;
    }
    if (input.WorkerType !== undefined) {
        bodyParams["WorkerType"] = input.WorkerType;
    }
    return bodyParams;
};
const serializeAws_json1_1StartTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StartWorkflowRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1TriggerNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TriggerUpdate = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1ActionList(input.Actions, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Predicate !== undefined) {
        bodyParams["Predicate"] = serializeAws_json1_1Predicate(input.Predicate, context);
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobUpdate !== undefined) {
        bodyParams["JobUpdate"] = serializeAws_json1_1JobUpdate(input.JobUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTriggerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.TriggerUpdate !== undefined) {
        bodyParams["TriggerUpdate"] = serializeAws_json1_1TriggerUpdate(input.TriggerUpdate, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWorkflowRequest = (input, context) => {
    const bodyParams = {};
    if (input.DefaultRunProperties !== undefined) {
        bodyParams["DefaultRunProperties"] = serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1WorkflowNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1WorkflowRunProperties = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1BatchGetCrawlersRequest = (input, context) => {
    const bodyParams = {};
    if (input.CrawlerNames !== undefined) {
        bodyParams["CrawlerNames"] = serializeAws_json1_1CrawlerNameList(input.CrawlerNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CatalogEntries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CatalogEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CatalogEntry = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const serializeAws_json1_1CatalogTablesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CatalogTarget = (input, context) => {
    const bodyParams = {};
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Tables !== undefined) {
        bodyParams["Tables"] = serializeAws_json1_1CatalogTablesList(input.Tables, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CatalogTargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CatalogTarget(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ClassifierNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CodeGenEdge = (input, context) => {
    const bodyParams = {};
    if (input.Source !== undefined) {
        bodyParams["Source"] = input.Source;
    }
    if (input.Target !== undefined) {
        bodyParams["Target"] = input.Target;
    }
    if (input.TargetParameter !== undefined) {
        bodyParams["TargetParameter"] = input.TargetParameter;
    }
    return bodyParams;
};
const serializeAws_json1_1CodeGenNode = (input, context) => {
    const bodyParams = {};
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1CodeGenNodeArgs(input.Args, context);
    }
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    if (input.LineNumber !== undefined) {
        bodyParams["LineNumber"] = input.LineNumber;
    }
    if (input.NodeType !== undefined) {
        bodyParams["NodeType"] = input.NodeType;
    }
    return bodyParams;
};
const serializeAws_json1_1CodeGenNodeArg = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Param !== undefined) {
        bodyParams["Param"] = input.Param;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1CodeGenNodeArgs = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CodeGenNodeArg(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CrawlerNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CrawlerTargets = (input, context) => {
    const bodyParams = {};
    if (input.CatalogTargets !== undefined) {
        bodyParams["CatalogTargets"] = serializeAws_json1_1CatalogTargetList(input.CatalogTargets, context);
    }
    if (input.DynamoDBTargets !== undefined) {
        bodyParams["DynamoDBTargets"] = serializeAws_json1_1DynamoDBTargetList(input.DynamoDBTargets, context);
    }
    if (input.JdbcTargets !== undefined) {
        bodyParams["JdbcTargets"] = serializeAws_json1_1JdbcTargetList(input.JdbcTargets, context);
    }
    if (input.S3Targets !== undefined) {
        bodyParams["S3Targets"] = serializeAws_json1_1S3TargetList(input.S3Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.CsvClassifier !== undefined) {
        bodyParams["CsvClassifier"] = serializeAws_json1_1CreateCsvClassifierRequest(input.CsvClassifier, context);
    }
    if (input.GrokClassifier !== undefined) {
        bodyParams["GrokClassifier"] = serializeAws_json1_1CreateGrokClassifierRequest(input.GrokClassifier, context);
    }
    if (input.JsonClassifier !== undefined) {
        bodyParams["JsonClassifier"] = serializeAws_json1_1CreateJsonClassifierRequest(input.JsonClassifier, context);
    }
    if (input.XMLClassifier !== undefined) {
        bodyParams["XMLClassifier"] = serializeAws_json1_1CreateXMLClassifierRequest(input.XMLClassifier, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classifiers !== undefined) {
        bodyParams["Classifiers"] = serializeAws_json1_1ClassifierNameList(input.Classifiers, context);
    }
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = input.Configuration;
    }
    if (input.CrawlerSecurityConfiguration !== undefined) {
        bodyParams["CrawlerSecurityConfiguration"] =
            input.CrawlerSecurityConfiguration;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.SchemaChangePolicy !== undefined) {
        bodyParams["SchemaChangePolicy"] = serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context);
    }
    if (input.TablePrefix !== undefined) {
        bodyParams["TablePrefix"] = input.TablePrefix;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1CrawlerTargets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCsvClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowSingleColumn !== undefined) {
        bodyParams["AllowSingleColumn"] = input.AllowSingleColumn;
    }
    if (input.ContainsHeader !== undefined) {
        bodyParams["ContainsHeader"] = input.ContainsHeader;
    }
    if (input.Delimiter !== undefined) {
        bodyParams["Delimiter"] = input.Delimiter;
    }
    if (input.DisableValueTrimming !== undefined) {
        bodyParams["DisableValueTrimming"] = input.DisableValueTrimming;
    }
    if (input.Header !== undefined) {
        bodyParams["Header"] = serializeAws_json1_1CsvHeader(input.Header, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.QuoteSymbol !== undefined) {
        bodyParams["QuoteSymbol"] = input.QuoteSymbol;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGrokClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.CustomPatterns !== undefined) {
        bodyParams["CustomPatterns"] = input.CustomPatterns;
    }
    if (input.GrokPattern !== undefined) {
        bodyParams["GrokPattern"] = input.GrokPattern;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateJsonClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.JsonPath !== undefined) {
        bodyParams["JsonPath"] = input.JsonPath;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateScriptRequest = (input, context) => {
    const bodyParams = {};
    if (input.DagEdges !== undefined) {
        bodyParams["DagEdges"] = serializeAws_json1_1DagEdges(input.DagEdges, context);
    }
    if (input.DagNodes !== undefined) {
        bodyParams["DagNodes"] = serializeAws_json1_1DagNodes(input.DagNodes, context);
    }
    if (input.Language !== undefined) {
        bodyParams["Language"] = input.Language;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateXMLClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RowTag !== undefined) {
        bodyParams["RowTag"] = input.RowTag;
    }
    return bodyParams;
};
const serializeAws_json1_1CsvHeader = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DagEdges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CodeGenEdge(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DagNodes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CodeGenNode(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DynamoDBTarget = (input, context) => {
    const bodyParams = {};
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    return bodyParams;
};
const serializeAws_json1_1DynamoDBTargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DynamoDBTarget(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetClassifiersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCrawlerMetricsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CrawlerNameList !== undefined) {
        bodyParams["CrawlerNameList"] = serializeAws_json1_1CrawlerNameList(input.CrawlerNameList, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCrawlersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDataflowGraphRequest = (input, context) => {
    const bodyParams = {};
    if (input.PythonScript !== undefined) {
        bodyParams["PythonScript"] = input.PythonScript;
    }
    return bodyParams;
};
const serializeAws_json1_1GetMappingRequest = (input, context) => {
    const bodyParams = {};
    if (input.Location !== undefined) {
        bodyParams["Location"] = serializeAws_json1_1Location(input.Location, context);
    }
    if (input.Sinks !== undefined) {
        bodyParams["Sinks"] = serializeAws_json1_1CatalogEntries(input.Sinks, context);
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = serializeAws_json1_1CatalogEntry(input.Source, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetPlanRequest = (input, context) => {
    const bodyParams = {};
    if (input.Language !== undefined) {
        bodyParams["Language"] = input.Language;
    }
    if (input.Location !== undefined) {
        bodyParams["Location"] = serializeAws_json1_1Location(input.Location, context);
    }
    if (input.Mapping !== undefined) {
        bodyParams["Mapping"] = serializeAws_json1_1MappingList(input.Mapping, context);
    }
    if (input.Sinks !== undefined) {
        bodyParams["Sinks"] = serializeAws_json1_1CatalogEntries(input.Sinks, context);
    }
    if (input.Source !== undefined) {
        bodyParams["Source"] = serializeAws_json1_1CatalogEntry(input.Source, context);
    }
    return bodyParams;
};
const serializeAws_json1_1JdbcTarget = (input, context) => {
    const bodyParams = {};
    if (input.ConnectionName !== undefined) {
        bodyParams["ConnectionName"] = input.ConnectionName;
    }
    if (input.Exclusions !== undefined) {
        bodyParams["Exclusions"] = serializeAws_json1_1PathList(input.Exclusions, context);
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    return bodyParams;
};
const serializeAws_json1_1JdbcTargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1JdbcTarget(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListCrawlersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagsMap(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Location = (input, context) => {
    const bodyParams = {};
    if (input.DynamoDB !== undefined) {
        bodyParams["DynamoDB"] = serializeAws_json1_1CodeGenNodeArgs(input.DynamoDB, context);
    }
    if (input.Jdbc !== undefined) {
        bodyParams["Jdbc"] = serializeAws_json1_1CodeGenNodeArgs(input.Jdbc, context);
    }
    if (input.S3 !== undefined) {
        bodyParams["S3"] = serializeAws_json1_1CodeGenNodeArgs(input.S3, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MappingEntry = (input, context) => {
    const bodyParams = {};
    if (input.SourcePath !== undefined) {
        bodyParams["SourcePath"] = input.SourcePath;
    }
    if (input.SourceTable !== undefined) {
        bodyParams["SourceTable"] = input.SourceTable;
    }
    if (input.SourceType !== undefined) {
        bodyParams["SourceType"] = input.SourceType;
    }
    if (input.TargetPath !== undefined) {
        bodyParams["TargetPath"] = input.TargetPath;
    }
    if (input.TargetTable !== undefined) {
        bodyParams["TargetTable"] = input.TargetTable;
    }
    if (input.TargetType !== undefined) {
        bodyParams["TargetType"] = input.TargetType;
    }
    return bodyParams;
};
const serializeAws_json1_1MappingList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MappingEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PathList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1S3Target = (input, context) => {
    const bodyParams = {};
    if (input.Exclusions !== undefined) {
        bodyParams["Exclusions"] = serializeAws_json1_1PathList(input.Exclusions, context);
    }
    if (input.Path !== undefined) {
        bodyParams["Path"] = input.Path;
    }
    return bodyParams;
};
const serializeAws_json1_1S3TargetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1S3Target(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SchemaChangePolicy = (input, context) => {
    const bodyParams = {};
    if (input.DeleteBehavior !== undefined) {
        bodyParams["DeleteBehavior"] = input.DeleteBehavior;
    }
    if (input.UpdateBehavior !== undefined) {
        bodyParams["UpdateBehavior"] = input.UpdateBehavior;
    }
    return bodyParams;
};
const serializeAws_json1_1StartCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StartCrawlerScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.CrawlerName !== undefined) {
        bodyParams["CrawlerName"] = input.CrawlerName;
    }
    return bodyParams;
};
const serializeAws_json1_1StopCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopCrawlerScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.CrawlerName !== undefined) {
        bodyParams["CrawlerName"] = input.CrawlerName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.CsvClassifier !== undefined) {
        bodyParams["CsvClassifier"] = serializeAws_json1_1UpdateCsvClassifierRequest(input.CsvClassifier, context);
    }
    if (input.GrokClassifier !== undefined) {
        bodyParams["GrokClassifier"] = serializeAws_json1_1UpdateGrokClassifierRequest(input.GrokClassifier, context);
    }
    if (input.JsonClassifier !== undefined) {
        bodyParams["JsonClassifier"] = serializeAws_json1_1UpdateJsonClassifierRequest(input.JsonClassifier, context);
    }
    if (input.XMLClassifier !== undefined) {
        bodyParams["XMLClassifier"] = serializeAws_json1_1UpdateXMLClassifierRequest(input.XMLClassifier, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCrawlerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classifiers !== undefined) {
        bodyParams["Classifiers"] = serializeAws_json1_1ClassifierNameList(input.Classifiers, context);
    }
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = input.Configuration;
    }
    if (input.CrawlerSecurityConfiguration !== undefined) {
        bodyParams["CrawlerSecurityConfiguration"] =
            input.CrawlerSecurityConfiguration;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Role !== undefined) {
        bodyParams["Role"] = input.Role;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    if (input.SchemaChangePolicy !== undefined) {
        bodyParams["SchemaChangePolicy"] = serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context);
    }
    if (input.TablePrefix !== undefined) {
        bodyParams["TablePrefix"] = input.TablePrefix;
    }
    if (input.Targets !== undefined) {
        bodyParams["Targets"] = serializeAws_json1_1CrawlerTargets(input.Targets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCrawlerScheduleRequest = (input, context) => {
    const bodyParams = {};
    if (input.CrawlerName !== undefined) {
        bodyParams["CrawlerName"] = input.CrawlerName;
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = input.Schedule;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCsvClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowSingleColumn !== undefined) {
        bodyParams["AllowSingleColumn"] = input.AllowSingleColumn;
    }
    if (input.ContainsHeader !== undefined) {
        bodyParams["ContainsHeader"] = input.ContainsHeader;
    }
    if (input.Delimiter !== undefined) {
        bodyParams["Delimiter"] = input.Delimiter;
    }
    if (input.DisableValueTrimming !== undefined) {
        bodyParams["DisableValueTrimming"] = input.DisableValueTrimming;
    }
    if (input.Header !== undefined) {
        bodyParams["Header"] = serializeAws_json1_1CsvHeader(input.Header, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.QuoteSymbol !== undefined) {
        bodyParams["QuoteSymbol"] = input.QuoteSymbol;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGrokClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.CustomPatterns !== undefined) {
        bodyParams["CustomPatterns"] = input.CustomPatterns;
    }
    if (input.GrokPattern !== undefined) {
        bodyParams["GrokPattern"] = input.GrokPattern;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateJsonClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.JsonPath !== undefined) {
        bodyParams["JsonPath"] = input.JsonPath;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateXMLClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.Classification !== undefined) {
        bodyParams["Classification"] = input.Classification;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RowTag !== undefined) {
        bodyParams["RowTag"] = input.RowTag;
    }
    return bodyParams;
};
const deserializeAws_json1_1GetTagsResponse = (output, context) => {
    let contents = {
        __type: "GetTagsResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagsMap(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1NameStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TagsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
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
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentRunsExceededException = (output, context) => {
    let contents = {
        __type: "ConcurrentRunsExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ConditionCheckFailureException = (output, context) => {
    let contents = {
        __type: "ConditionCheckFailureException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1EntityNotFoundException = (output, context) => {
    let contents = {
        __type: "EntityNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ErrorDetail = (output, context) => {
    let contents = {
        __type: "ErrorDetail",
        ErrorCode: undefined,
        ErrorMessage: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    return contents;
};
const deserializeAws_json1_1GlueEncryptionException = (output, context) => {
    let contents = {
        __type: "GlueEncryptionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    let contents = {
        __type: "InternalServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
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
const deserializeAws_json1_1OperationTimeoutException = (output, context) => {
    let contents = {
        __type: "OperationTimeoutException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNumberLimitExceededException = (output, context) => {
    let contents = {
        __type: "ResourceNumberLimitExceededException",
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
const deserializeAws_json1_1VersionMismatchException = (output, context) => {
    let contents = {
        __type: "VersionMismatchException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1BatchCreatePartitionResponse = (output, context) => {
    let contents = {
        __type: "BatchCreatePartitionResponse",
        Errors: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1PartitionErrors(output.Errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteConnectionResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteConnectionResponse",
        Errors: undefined,
        Succeeded: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1ErrorByName(output.Errors, context);
    }
    if (output.Succeeded !== undefined && output.Succeeded !== null) {
        contents.Succeeded = deserializeAws_json1_1NameStringList(output.Succeeded, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeletePartitionResponse = (output, context) => {
    let contents = {
        __type: "BatchDeletePartitionResponse",
        Errors: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1PartitionErrors(output.Errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteTableResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteTableResponse",
        Errors: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1TableErrors(output.Errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDeleteTableVersionResponse = (output, context) => {
    let contents = {
        __type: "BatchDeleteTableVersionResponse",
        Errors: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1TableVersionErrors(output.Errors, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetPartitionResponse = (output, context) => {
    let contents = {
        __type: "BatchGetPartitionResponse",
        Partitions: undefined,
        UnprocessedKeys: undefined
    };
    if (output.Partitions !== undefined && output.Partitions !== null) {
        contents.Partitions = deserializeAws_json1_1PartitionList(output.Partitions, context);
    }
    if (output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null) {
        contents.UnprocessedKeys = deserializeAws_json1_1BatchGetPartitionValueList(output.UnprocessedKeys, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetPartitionValueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PartitionValueList(entry, context));
};
const deserializeAws_json1_1CatalogImportStatus = (output, context) => {
    let contents = {
        __type: "CatalogImportStatus",
        ImportCompleted: undefined,
        ImportTime: undefined,
        ImportedBy: undefined
    };
    if (output.ImportCompleted !== undefined && output.ImportCompleted !== null) {
        contents.ImportCompleted = output.ImportCompleted;
    }
    if (output.ImportTime !== undefined && output.ImportTime !== null) {
        contents.ImportTime = new Date(Math.round(output.ImportTime * 1000));
    }
    if (output.ImportedBy !== undefined && output.ImportedBy !== null) {
        contents.ImportedBy = output.ImportedBy;
    }
    return contents;
};
const deserializeAws_json1_1Column = (output, context) => {
    let contents = {
        __type: "Column",
        Comment: undefined,
        Name: undefined,
        Parameters: undefined,
        Type: undefined
    };
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ColumnList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Column(entry, context));
};
const deserializeAws_json1_1ColumnValueStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Connection = (output, context) => {
    let contents = {
        __type: "Connection",
        ConnectionProperties: undefined,
        ConnectionType: undefined,
        CreationTime: undefined,
        Description: undefined,
        LastUpdatedBy: undefined,
        LastUpdatedTime: undefined,
        MatchCriteria: undefined,
        Name: undefined,
        PhysicalConnectionRequirements: undefined
    };
    if (output.ConnectionProperties !== undefined &&
        output.ConnectionProperties !== null) {
        contents.ConnectionProperties = deserializeAws_json1_1ConnectionProperties(output.ConnectionProperties, context);
    }
    if (output.ConnectionType !== undefined && output.ConnectionType !== null) {
        contents.ConnectionType = output.ConnectionType;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LastUpdatedBy !== undefined && output.LastUpdatedBy !== null) {
        contents.LastUpdatedBy = output.LastUpdatedBy;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.MatchCriteria !== undefined && output.MatchCriteria !== null) {
        contents.MatchCriteria = deserializeAws_json1_1MatchCriteria(output.MatchCriteria, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PhysicalConnectionRequirements !== undefined &&
        output.PhysicalConnectionRequirements !== null) {
        contents.PhysicalConnectionRequirements = deserializeAws_json1_1PhysicalConnectionRequirements(output.PhysicalConnectionRequirements, context);
    }
    return contents;
};
const deserializeAws_json1_1ConnectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Connection(entry, context));
};
const deserializeAws_json1_1ConnectionPasswordEncryption = (output, context) => {
    let contents = {
        __type: "ConnectionPasswordEncryption",
        AwsKmsKeyId: undefined,
        ReturnConnectionPasswordEncrypted: undefined
    };
    if (output.AwsKmsKeyId !== undefined && output.AwsKmsKeyId !== null) {
        contents.AwsKmsKeyId = output.AwsKmsKeyId;
    }
    if (output.ReturnConnectionPasswordEncrypted !== undefined &&
        output.ReturnConnectionPasswordEncrypted !== null) {
        contents.ReturnConnectionPasswordEncrypted =
            output.ReturnConnectionPasswordEncrypted;
    }
    return contents;
};
const deserializeAws_json1_1ConnectionProperties = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1CreateConnectionResponse = (output, context) => {
    let contents = {
        __type: "CreateConnectionResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateDatabaseResponse = (output, context) => {
    let contents = {
        __type: "CreateDatabaseResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreatePartitionResponse = (output, context) => {
    let contents = {
        __type: "CreatePartitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateTableResponse = (output, context) => {
    let contents = {
        __type: "CreateTableResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateUserDefinedFunctionResponse = (output, context) => {
    let contents = {
        __type: "CreateUserDefinedFunctionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DataCatalogEncryptionSettings = (output, context) => {
    let contents = {
        __type: "DataCatalogEncryptionSettings",
        ConnectionPasswordEncryption: undefined,
        EncryptionAtRest: undefined
    };
    if (output.ConnectionPasswordEncryption !== undefined &&
        output.ConnectionPasswordEncryption !== null) {
        contents.ConnectionPasswordEncryption = deserializeAws_json1_1ConnectionPasswordEncryption(output.ConnectionPasswordEncryption, context);
    }
    if (output.EncryptionAtRest !== undefined &&
        output.EncryptionAtRest !== null) {
        contents.EncryptionAtRest = deserializeAws_json1_1EncryptionAtRest(output.EncryptionAtRest, context);
    }
    return contents;
};
const deserializeAws_json1_1DataLakePrincipal = (output, context) => {
    let contents = {
        __type: "DataLakePrincipal",
        DataLakePrincipalIdentifier: undefined
    };
    if (output.DataLakePrincipalIdentifier !== undefined &&
        output.DataLakePrincipalIdentifier !== null) {
        contents.DataLakePrincipalIdentifier = output.DataLakePrincipalIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1Database = (output, context) => {
    let contents = {
        __type: "Database",
        CreateTableDefaultPermissions: undefined,
        CreateTime: undefined,
        Description: undefined,
        LocationUri: undefined,
        Name: undefined,
        Parameters: undefined
    };
    if (output.CreateTableDefaultPermissions !== undefined &&
        output.CreateTableDefaultPermissions !== null) {
        contents.CreateTableDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context);
    }
    if (output.CreateTime !== undefined && output.CreateTime !== null) {
        contents.CreateTime = new Date(Math.round(output.CreateTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DatabaseList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Database(entry, context));
};
const deserializeAws_json1_1DeleteConnectionResponse = (output, context) => {
    let contents = {
        __type: "DeleteConnectionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteDatabaseResponse = (output, context) => {
    let contents = {
        __type: "DeleteDatabaseResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeletePartitionResponse = (output, context) => {
    let contents = {
        __type: "DeletePartitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "DeleteResourcePolicyResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTableResponse = (output, context) => {
    let contents = {
        __type: "DeleteTableResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTableVersionResponse = (output, context) => {
    let contents = {
        __type: "DeleteTableVersionResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteUserDefinedFunctionResponse = (output, context) => {
    let contents = {
        __type: "DeleteUserDefinedFunctionResponse"
    };
    return contents;
};
const deserializeAws_json1_1EncryptionAtRest = (output, context) => {
    let contents = {
        __type: "EncryptionAtRest",
        CatalogEncryptionMode: undefined,
        SseAwsKmsKeyId: undefined
    };
    if (output.CatalogEncryptionMode !== undefined &&
        output.CatalogEncryptionMode !== null) {
        contents.CatalogEncryptionMode = output.CatalogEncryptionMode;
    }
    if (output.SseAwsKmsKeyId !== undefined && output.SseAwsKmsKeyId !== null) {
        contents.SseAwsKmsKeyId = output.SseAwsKmsKeyId;
    }
    return contents;
};
const deserializeAws_json1_1ErrorByName = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1ErrorDetail(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1GetCatalogImportStatusResponse = (output, context) => {
    let contents = {
        __type: "GetCatalogImportStatusResponse",
        ImportStatus: undefined
    };
    if (output.ImportStatus !== undefined && output.ImportStatus !== null) {
        contents.ImportStatus = deserializeAws_json1_1CatalogImportStatus(output.ImportStatus, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConnectionResponse = (output, context) => {
    let contents = {
        __type: "GetConnectionResponse",
        Connection: undefined
    };
    if (output.Connection !== undefined && output.Connection !== null) {
        contents.Connection = deserializeAws_json1_1Connection(output.Connection, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConnectionsResponse = (output, context) => {
    let contents = {
        __type: "GetConnectionsResponse",
        ConnectionList: undefined,
        NextToken: undefined
    };
    if (output.ConnectionList !== undefined && output.ConnectionList !== null) {
        contents.ConnectionList = deserializeAws_json1_1ConnectionList(output.ConnectionList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse = (output, context) => {
    let contents = {
        __type: "GetDataCatalogEncryptionSettingsResponse",
        DataCatalogEncryptionSettings: undefined
    };
    if (output.DataCatalogEncryptionSettings !== undefined &&
        output.DataCatalogEncryptionSettings !== null) {
        contents.DataCatalogEncryptionSettings = deserializeAws_json1_1DataCatalogEncryptionSettings(output.DataCatalogEncryptionSettings, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDatabaseResponse = (output, context) => {
    let contents = {
        __type: "GetDatabaseResponse",
        Database: undefined
    };
    if (output.Database !== undefined && output.Database !== null) {
        contents.Database = deserializeAws_json1_1Database(output.Database, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDatabasesResponse = (output, context) => {
    let contents = {
        __type: "GetDatabasesResponse",
        DatabaseList: undefined,
        NextToken: undefined
    };
    if (output.DatabaseList !== undefined && output.DatabaseList !== null) {
        contents.DatabaseList = deserializeAws_json1_1DatabaseList(output.DatabaseList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetPartitionResponse = (output, context) => {
    let contents = {
        __type: "GetPartitionResponse",
        Partition: undefined
    };
    if (output.Partition !== undefined && output.Partition !== null) {
        contents.Partition = deserializeAws_json1_1Partition(output.Partition, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPartitionsResponse = (output, context) => {
    let contents = {
        __type: "GetPartitionsResponse",
        NextToken: undefined,
        Partitions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Partitions !== undefined && output.Partitions !== null) {
        contents.Partitions = deserializeAws_json1_1PartitionList(output.Partitions, context);
    }
    return contents;
};
const deserializeAws_json1_1GetResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "GetResourcePolicyResponse",
        CreateTime: undefined,
        PolicyHash: undefined,
        PolicyInJson: undefined,
        UpdateTime: undefined
    };
    if (output.CreateTime !== undefined && output.CreateTime !== null) {
        contents.CreateTime = new Date(Math.round(output.CreateTime * 1000));
    }
    if (output.PolicyHash !== undefined && output.PolicyHash !== null) {
        contents.PolicyHash = output.PolicyHash;
    }
    if (output.PolicyInJson !== undefined && output.PolicyInJson !== null) {
        contents.PolicyInJson = output.PolicyInJson;
    }
    if (output.UpdateTime !== undefined && output.UpdateTime !== null) {
        contents.UpdateTime = new Date(Math.round(output.UpdateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1GetTableResponse = (output, context) => {
    let contents = {
        __type: "GetTableResponse",
        Table: undefined
    };
    if (output.Table !== undefined && output.Table !== null) {
        contents.Table = deserializeAws_json1_1Table(output.Table, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTableVersionResponse = (output, context) => {
    let contents = {
        __type: "GetTableVersionResponse",
        TableVersion: undefined
    };
    if (output.TableVersion !== undefined && output.TableVersion !== null) {
        contents.TableVersion = deserializeAws_json1_1TableVersion(output.TableVersion, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTableVersionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TableVersion(entry, context));
};
const deserializeAws_json1_1GetTableVersionsResponse = (output, context) => {
    let contents = {
        __type: "GetTableVersionsResponse",
        NextToken: undefined,
        TableVersions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TableVersions !== undefined && output.TableVersions !== null) {
        contents.TableVersions = deserializeAws_json1_1GetTableVersionsList(output.TableVersions, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTablesResponse = (output, context) => {
    let contents = {
        __type: "GetTablesResponse",
        NextToken: undefined,
        TableList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TableList !== undefined && output.TableList !== null) {
        contents.TableList = deserializeAws_json1_1TableList(output.TableList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUserDefinedFunctionResponse = (output, context) => {
    let contents = {
        __type: "GetUserDefinedFunctionResponse",
        UserDefinedFunction: undefined
    };
    if (output.UserDefinedFunction !== undefined &&
        output.UserDefinedFunction !== null) {
        contents.UserDefinedFunction = deserializeAws_json1_1UserDefinedFunction(output.UserDefinedFunction, context);
    }
    return contents;
};
const deserializeAws_json1_1GetUserDefinedFunctionsResponse = (output, context) => {
    let contents = {
        __type: "GetUserDefinedFunctionsResponse",
        NextToken: undefined,
        UserDefinedFunctions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.UserDefinedFunctions !== undefined &&
        output.UserDefinedFunctions !== null) {
        contents.UserDefinedFunctions = deserializeAws_json1_1UserDefinedFunctionList(output.UserDefinedFunctions, context);
    }
    return contents;
};
const deserializeAws_json1_1ImportCatalogToGlueResponse = (output, context) => {
    let contents = {
        __type: "ImportCatalogToGlueResponse"
    };
    return contents;
};
const deserializeAws_json1_1LocationMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1MatchCriteria = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Order = (output, context) => {
    let contents = {
        __type: "Order",
        Column: undefined,
        SortOrder: undefined
    };
    if (output.Column !== undefined && output.Column !== null) {
        contents.Column = output.Column;
    }
    if (output.SortOrder !== undefined && output.SortOrder !== null) {
        contents.SortOrder = output.SortOrder;
    }
    return contents;
};
const deserializeAws_json1_1OrderList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Order(entry, context));
};
const deserializeAws_json1_1ParametersMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Partition = (output, context) => {
    let contents = {
        __type: "Partition",
        CreationTime: undefined,
        DatabaseName: undefined,
        LastAccessTime: undefined,
        LastAnalyzedTime: undefined,
        Parameters: undefined,
        StorageDescriptor: undefined,
        TableName: undefined,
        Values: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.LastAccessTime !== undefined && output.LastAccessTime !== null) {
        contents.LastAccessTime = new Date(Math.round(output.LastAccessTime * 1000));
    }
    if (output.LastAnalyzedTime !== undefined &&
        output.LastAnalyzedTime !== null) {
        contents.LastAnalyzedTime = new Date(Math.round(output.LastAnalyzedTime * 1000));
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    if (output.StorageDescriptor !== undefined &&
        output.StorageDescriptor !== null) {
        contents.StorageDescriptor = deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1ValueStringList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1PartitionError = (output, context) => {
    let contents = {
        __type: "PartitionError",
        ErrorDetail: undefined,
        PartitionValues: undefined
    };
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context);
    }
    if (output.PartitionValues !== undefined && output.PartitionValues !== null) {
        contents.PartitionValues = deserializeAws_json1_1ValueStringList(output.PartitionValues, context);
    }
    return contents;
};
const deserializeAws_json1_1PartitionErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PartitionError(entry, context));
};
const deserializeAws_json1_1PartitionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Partition(entry, context));
};
const deserializeAws_json1_1PartitionValueList = (output, context) => {
    let contents = {
        __type: "PartitionValueList",
        Values: undefined
    };
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1ValueStringList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1PermissionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PhysicalConnectionRequirements = (output, context) => {
    let contents = {
        __type: "PhysicalConnectionRequirements",
        AvailabilityZone: undefined,
        SecurityGroupIdList: undefined,
        SubnetId: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.SecurityGroupIdList !== undefined &&
        output.SecurityGroupIdList !== null) {
        contents.SecurityGroupIdList = deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIdList, context);
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    return contents;
};
const deserializeAws_json1_1PrincipalPermissions = (output, context) => {
    let contents = {
        __type: "PrincipalPermissions",
        Permissions: undefined,
        Principal: undefined
    };
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
    }
    if (output.Principal !== undefined && output.Principal !== null) {
        contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
    }
    return contents;
};
const deserializeAws_json1_1PrincipalPermissionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PrincipalPermissions(entry, context));
};
const deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse = (output, context) => {
    let contents = {
        __type: "PutDataCatalogEncryptionSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutResourcePolicyResponse = (output, context) => {
    let contents = {
        __type: "PutResourcePolicyResponse",
        PolicyHash: undefined
    };
    if (output.PolicyHash !== undefined && output.PolicyHash !== null) {
        contents.PolicyHash = output.PolicyHash;
    }
    return contents;
};
const deserializeAws_json1_1ResourceUri = (output, context) => {
    let contents = {
        __type: "ResourceUri",
        ResourceType: undefined,
        Uri: undefined
    };
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.Uri !== undefined && output.Uri !== null) {
        contents.Uri = output.Uri;
    }
    return contents;
};
const deserializeAws_json1_1ResourceUriList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceUri(entry, context));
};
const deserializeAws_json1_1SearchTablesResponse = (output, context) => {
    let contents = {
        __type: "SearchTablesResponse",
        NextToken: undefined,
        TableList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TableList !== undefined && output.TableList !== null) {
        contents.TableList = deserializeAws_json1_1TableList(output.TableList, context);
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SerDeInfo = (output, context) => {
    let contents = {
        __type: "SerDeInfo",
        Name: undefined,
        Parameters: undefined,
        SerializationLibrary: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    if (output.SerializationLibrary !== undefined &&
        output.SerializationLibrary !== null) {
        contents.SerializationLibrary = output.SerializationLibrary;
    }
    return contents;
};
const deserializeAws_json1_1SkewedInfo = (output, context) => {
    let contents = {
        __type: "SkewedInfo",
        SkewedColumnNames: undefined,
        SkewedColumnValueLocationMaps: undefined,
        SkewedColumnValues: undefined
    };
    if (output.SkewedColumnNames !== undefined &&
        output.SkewedColumnNames !== null) {
        contents.SkewedColumnNames = deserializeAws_json1_1NameStringList(output.SkewedColumnNames, context);
    }
    if (output.SkewedColumnValueLocationMaps !== undefined &&
        output.SkewedColumnValueLocationMaps !== null) {
        contents.SkewedColumnValueLocationMaps = deserializeAws_json1_1LocationMap(output.SkewedColumnValueLocationMaps, context);
    }
    if (output.SkewedColumnValues !== undefined &&
        output.SkewedColumnValues !== null) {
        contents.SkewedColumnValues = deserializeAws_json1_1ColumnValueStringList(output.SkewedColumnValues, context);
    }
    return contents;
};
const deserializeAws_json1_1StorageDescriptor = (output, context) => {
    let contents = {
        __type: "StorageDescriptor",
        BucketColumns: undefined,
        Columns: undefined,
        Compressed: undefined,
        InputFormat: undefined,
        Location: undefined,
        NumberOfBuckets: undefined,
        OutputFormat: undefined,
        Parameters: undefined,
        SerdeInfo: undefined,
        SkewedInfo: undefined,
        SortColumns: undefined,
        StoredAsSubDirectories: undefined
    };
    if (output.BucketColumns !== undefined && output.BucketColumns !== null) {
        contents.BucketColumns = deserializeAws_json1_1NameStringList(output.BucketColumns, context);
    }
    if (output.Columns !== undefined && output.Columns !== null) {
        contents.Columns = deserializeAws_json1_1ColumnList(output.Columns, context);
    }
    if (output.Compressed !== undefined && output.Compressed !== null) {
        contents.Compressed = output.Compressed;
    }
    if (output.InputFormat !== undefined && output.InputFormat !== null) {
        contents.InputFormat = output.InputFormat;
    }
    if (output.Location !== undefined && output.Location !== null) {
        contents.Location = output.Location;
    }
    if (output.NumberOfBuckets !== undefined && output.NumberOfBuckets !== null) {
        contents.NumberOfBuckets = output.NumberOfBuckets;
    }
    if (output.OutputFormat !== undefined && output.OutputFormat !== null) {
        contents.OutputFormat = output.OutputFormat;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    if (output.SerdeInfo !== undefined && output.SerdeInfo !== null) {
        contents.SerdeInfo = deserializeAws_json1_1SerDeInfo(output.SerdeInfo, context);
    }
    if (output.SkewedInfo !== undefined && output.SkewedInfo !== null) {
        contents.SkewedInfo = deserializeAws_json1_1SkewedInfo(output.SkewedInfo, context);
    }
    if (output.SortColumns !== undefined && output.SortColumns !== null) {
        contents.SortColumns = deserializeAws_json1_1OrderList(output.SortColumns, context);
    }
    if (output.StoredAsSubDirectories !== undefined &&
        output.StoredAsSubDirectories !== null) {
        contents.StoredAsSubDirectories = output.StoredAsSubDirectories;
    }
    return contents;
};
const deserializeAws_json1_1Table = (output, context) => {
    let contents = {
        __type: "Table",
        CreateTime: undefined,
        CreatedBy: undefined,
        DatabaseName: undefined,
        Description: undefined,
        IsRegisteredWithLakeFormation: undefined,
        LastAccessTime: undefined,
        LastAnalyzedTime: undefined,
        Name: undefined,
        Owner: undefined,
        Parameters: undefined,
        PartitionKeys: undefined,
        Retention: undefined,
        StorageDescriptor: undefined,
        TableType: undefined,
        UpdateTime: undefined,
        ViewExpandedText: undefined,
        ViewOriginalText: undefined
    };
    if (output.CreateTime !== undefined && output.CreateTime !== null) {
        contents.CreateTime = new Date(Math.round(output.CreateTime * 1000));
    }
    if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
        contents.CreatedBy = output.CreatedBy;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsRegisteredWithLakeFormation !== undefined &&
        output.IsRegisteredWithLakeFormation !== null) {
        contents.IsRegisteredWithLakeFormation =
            output.IsRegisteredWithLakeFormation;
    }
    if (output.LastAccessTime !== undefined && output.LastAccessTime !== null) {
        contents.LastAccessTime = new Date(Math.round(output.LastAccessTime * 1000));
    }
    if (output.LastAnalyzedTime !== undefined &&
        output.LastAnalyzedTime !== null) {
        contents.LastAnalyzedTime = new Date(Math.round(output.LastAnalyzedTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Owner !== undefined && output.Owner !== null) {
        contents.Owner = output.Owner;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1ParametersMap(output.Parameters, context);
    }
    if (output.PartitionKeys !== undefined && output.PartitionKeys !== null) {
        contents.PartitionKeys = deserializeAws_json1_1ColumnList(output.PartitionKeys, context);
    }
    if (output.Retention !== undefined && output.Retention !== null) {
        contents.Retention = output.Retention;
    }
    if (output.StorageDescriptor !== undefined &&
        output.StorageDescriptor !== null) {
        contents.StorageDescriptor = deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context);
    }
    if (output.TableType !== undefined && output.TableType !== null) {
        contents.TableType = output.TableType;
    }
    if (output.UpdateTime !== undefined && output.UpdateTime !== null) {
        contents.UpdateTime = new Date(Math.round(output.UpdateTime * 1000));
    }
    if (output.ViewExpandedText !== undefined &&
        output.ViewExpandedText !== null) {
        contents.ViewExpandedText = output.ViewExpandedText;
    }
    if (output.ViewOriginalText !== undefined &&
        output.ViewOriginalText !== null) {
        contents.ViewOriginalText = output.ViewOriginalText;
    }
    return contents;
};
const deserializeAws_json1_1TableError = (output, context) => {
    let contents = {
        __type: "TableError",
        ErrorDetail: undefined,
        TableName: undefined
    };
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_1TableErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TableError(entry, context));
};
const deserializeAws_json1_1TableList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Table(entry, context));
};
const deserializeAws_json1_1TableVersion = (output, context) => {
    let contents = {
        __type: "TableVersion",
        Table: undefined,
        VersionId: undefined
    };
    if (output.Table !== undefined && output.Table !== null) {
        contents.Table = deserializeAws_json1_1Table(output.Table, context);
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1TableVersionError = (output, context) => {
    let contents = {
        __type: "TableVersionError",
        ErrorDetail: undefined,
        TableName: undefined,
        VersionId: undefined
    };
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context);
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.VersionId !== undefined && output.VersionId !== null) {
        contents.VersionId = output.VersionId;
    }
    return contents;
};
const deserializeAws_json1_1TableVersionErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TableVersionError(entry, context));
};
const deserializeAws_json1_1UpdateConnectionResponse = (output, context) => {
    let contents = {
        __type: "UpdateConnectionResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDatabaseResponse = (output, context) => {
    let contents = {
        __type: "UpdateDatabaseResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdatePartitionResponse = (output, context) => {
    let contents = {
        __type: "UpdatePartitionResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateTableResponse = (output, context) => {
    let contents = {
        __type: "UpdateTableResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateUserDefinedFunctionResponse = (output, context) => {
    let contents = {
        __type: "UpdateUserDefinedFunctionResponse"
    };
    return contents;
};
const deserializeAws_json1_1UserDefinedFunction = (output, context) => {
    let contents = {
        __type: "UserDefinedFunction",
        ClassName: undefined,
        CreateTime: undefined,
        FunctionName: undefined,
        OwnerName: undefined,
        OwnerType: undefined,
        ResourceUris: undefined
    };
    if (output.ClassName !== undefined && output.ClassName !== null) {
        contents.ClassName = output.ClassName;
    }
    if (output.CreateTime !== undefined && output.CreateTime !== null) {
        contents.CreateTime = new Date(Math.round(output.CreateTime * 1000));
    }
    if (output.FunctionName !== undefined && output.FunctionName !== null) {
        contents.FunctionName = output.FunctionName;
    }
    if (output.OwnerName !== undefined && output.OwnerName !== null) {
        contents.OwnerName = output.OwnerName;
    }
    if (output.OwnerType !== undefined && output.OwnerType !== null) {
        contents.OwnerType = output.OwnerType;
    }
    if (output.ResourceUris !== undefined && output.ResourceUris !== null) {
        contents.ResourceUris = deserializeAws_json1_1ResourceUriList(output.ResourceUris, context);
    }
    return contents;
};
const deserializeAws_json1_1UserDefinedFunctionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserDefinedFunction(entry, context));
};
const deserializeAws_json1_1ValueStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BatchGetDevEndpointsResponse = (output, context) => {
    let contents = {
        __type: "BatchGetDevEndpointsResponse",
        DevEndpoints: undefined,
        DevEndpointsNotFound: undefined
    };
    if (output.DevEndpoints !== undefined && output.DevEndpoints !== null) {
        contents.DevEndpoints = deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context);
    }
    if (output.DevEndpointsNotFound !== undefined &&
        output.DevEndpointsNotFound !== null) {
        contents.DevEndpointsNotFound = deserializeAws_json1_1DevEndpointNames(output.DevEndpointsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchEncryption = (output, context) => {
    let contents = {
        __type: "CloudWatchEncryption",
        CloudWatchEncryptionMode: undefined,
        KmsKeyArn: undefined
    };
    if (output.CloudWatchEncryptionMode !== undefined &&
        output.CloudWatchEncryptionMode !== null) {
        contents.CloudWatchEncryptionMode = output.CloudWatchEncryptionMode;
    }
    if (output.KmsKeyArn !== undefined && output.KmsKeyArn !== null) {
        contents.KmsKeyArn = output.KmsKeyArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateDevEndpointResponse = (output, context) => {
    let contents = {
        __type: "CreateDevEndpointResponse",
        Arguments: undefined,
        AvailabilityZone: undefined,
        CreatedTimestamp: undefined,
        EndpointName: undefined,
        ExtraJarsS3Path: undefined,
        ExtraPythonLibsS3Path: undefined,
        FailureReason: undefined,
        GlueVersion: undefined,
        NumberOfNodes: undefined,
        NumberOfWorkers: undefined,
        RoleArn: undefined,
        SecurityConfiguration: undefined,
        SecurityGroupIds: undefined,
        Status: undefined,
        SubnetId: undefined,
        VpcId: undefined,
        WorkerType: undefined,
        YarnEndpointAddress: undefined,
        ZeppelinRemoteSparkInterpreterPort: undefined
    };
    if (output.Arguments !== undefined && output.Arguments !== null) {
        contents.Arguments = deserializeAws_json1_1MapValue(output.Arguments, context);
    }
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.CreatedTimestamp !== undefined &&
        output.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(output.CreatedTimestamp * 1000));
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.ExtraJarsS3Path !== undefined && output.ExtraJarsS3Path !== null) {
        contents.ExtraJarsS3Path = output.ExtraJarsS3Path;
    }
    if (output.ExtraPythonLibsS3Path !== undefined &&
        output.ExtraPythonLibsS3Path !== null) {
        contents.ExtraPythonLibsS3Path = output.ExtraPythonLibsS3Path;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.NumberOfNodes !== undefined && output.NumberOfNodes !== null) {
        contents.NumberOfNodes = output.NumberOfNodes;
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1StringList(output.SecurityGroupIds, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    if (output.YarnEndpointAddress !== undefined &&
        output.YarnEndpointAddress !== null) {
        contents.YarnEndpointAddress = output.YarnEndpointAddress;
    }
    if (output.ZeppelinRemoteSparkInterpreterPort !== undefined &&
        output.ZeppelinRemoteSparkInterpreterPort !== null) {
        contents.ZeppelinRemoteSparkInterpreterPort =
            output.ZeppelinRemoteSparkInterpreterPort;
    }
    return contents;
};
const deserializeAws_json1_1CreateSecurityConfigurationResponse = (output, context) => {
    let contents = {
        __type: "CreateSecurityConfigurationResponse",
        CreatedTimestamp: undefined,
        Name: undefined
    };
    if (output.CreatedTimestamp !== undefined &&
        output.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(output.CreatedTimestamp * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeleteDevEndpointResponse = (output, context) => {
    let contents = {
        __type: "DeleteDevEndpointResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteSecurityConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteSecurityConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DevEndpoint = (output, context) => {
    let contents = {
        __type: "DevEndpoint",
        Arguments: undefined,
        AvailabilityZone: undefined,
        CreatedTimestamp: undefined,
        EndpointName: undefined,
        ExtraJarsS3Path: undefined,
        ExtraPythonLibsS3Path: undefined,
        FailureReason: undefined,
        GlueVersion: undefined,
        LastModifiedTimestamp: undefined,
        LastUpdateStatus: undefined,
        NumberOfNodes: undefined,
        NumberOfWorkers: undefined,
        PrivateAddress: undefined,
        PublicAddress: undefined,
        PublicKey: undefined,
        PublicKeys: undefined,
        RoleArn: undefined,
        SecurityConfiguration: undefined,
        SecurityGroupIds: undefined,
        Status: undefined,
        SubnetId: undefined,
        VpcId: undefined,
        WorkerType: undefined,
        YarnEndpointAddress: undefined,
        ZeppelinRemoteSparkInterpreterPort: undefined
    };
    if (output.Arguments !== undefined && output.Arguments !== null) {
        contents.Arguments = deserializeAws_json1_1MapValue(output.Arguments, context);
    }
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.CreatedTimestamp !== undefined &&
        output.CreatedTimestamp !== null) {
        contents.CreatedTimestamp = new Date(Math.round(output.CreatedTimestamp * 1000));
    }
    if (output.EndpointName !== undefined && output.EndpointName !== null) {
        contents.EndpointName = output.EndpointName;
    }
    if (output.ExtraJarsS3Path !== undefined && output.ExtraJarsS3Path !== null) {
        contents.ExtraJarsS3Path = output.ExtraJarsS3Path;
    }
    if (output.ExtraPythonLibsS3Path !== undefined &&
        output.ExtraPythonLibsS3Path !== null) {
        contents.ExtraPythonLibsS3Path = output.ExtraPythonLibsS3Path;
    }
    if (output.FailureReason !== undefined && output.FailureReason !== null) {
        contents.FailureReason = output.FailureReason;
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.LastModifiedTimestamp !== undefined &&
        output.LastModifiedTimestamp !== null) {
        contents.LastModifiedTimestamp = new Date(Math.round(output.LastModifiedTimestamp * 1000));
    }
    if (output.LastUpdateStatus !== undefined &&
        output.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = output.LastUpdateStatus;
    }
    if (output.NumberOfNodes !== undefined && output.NumberOfNodes !== null) {
        contents.NumberOfNodes = output.NumberOfNodes;
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.PrivateAddress !== undefined && output.PrivateAddress !== null) {
        contents.PrivateAddress = output.PrivateAddress;
    }
    if (output.PublicAddress !== undefined && output.PublicAddress !== null) {
        contents.PublicAddress = output.PublicAddress;
    }
    if (output.PublicKey !== undefined && output.PublicKey !== null) {
        contents.PublicKey = output.PublicKey;
    }
    if (output.PublicKeys !== undefined && output.PublicKeys !== null) {
        contents.PublicKeys = deserializeAws_json1_1PublicKeysList(output.PublicKeys, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1StringList(output.SecurityGroupIds, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    if (output.YarnEndpointAddress !== undefined &&
        output.YarnEndpointAddress !== null) {
        contents.YarnEndpointAddress = output.YarnEndpointAddress;
    }
    if (output.ZeppelinRemoteSparkInterpreterPort !== undefined &&
        output.ZeppelinRemoteSparkInterpreterPort !== null) {
        contents.ZeppelinRemoteSparkInterpreterPort =
            output.ZeppelinRemoteSparkInterpreterPort;
    }
    return contents;
};
const deserializeAws_json1_1DevEndpointList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DevEndpoint(entry, context));
};
const deserializeAws_json1_1DevEndpointNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DevEndpointNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "EncryptionConfiguration",
        CloudWatchEncryption: undefined,
        JobBookmarksEncryption: undefined,
        S3Encryption: undefined
    };
    if (output.CloudWatchEncryption !== undefined &&
        output.CloudWatchEncryption !== null) {
        contents.CloudWatchEncryption = deserializeAws_json1_1CloudWatchEncryption(output.CloudWatchEncryption, context);
    }
    if (output.JobBookmarksEncryption !== undefined &&
        output.JobBookmarksEncryption !== null) {
        contents.JobBookmarksEncryption = deserializeAws_json1_1JobBookmarksEncryption(output.JobBookmarksEncryption, context);
    }
    if (output.S3Encryption !== undefined && output.S3Encryption !== null) {
        contents.S3Encryption = deserializeAws_json1_1S3EncryptionList(output.S3Encryption, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDevEndpointResponse = (output, context) => {
    let contents = {
        __type: "GetDevEndpointResponse",
        DevEndpoint: undefined
    };
    if (output.DevEndpoint !== undefined && output.DevEndpoint !== null) {
        contents.DevEndpoint = deserializeAws_json1_1DevEndpoint(output.DevEndpoint, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDevEndpointsResponse = (output, context) => {
    let contents = {
        __type: "GetDevEndpointsResponse",
        DevEndpoints: undefined,
        NextToken: undefined
    };
    if (output.DevEndpoints !== undefined && output.DevEndpoints !== null) {
        contents.DevEndpoints = deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetJobBookmarkResponse = (output, context) => {
    let contents = {
        __type: "GetJobBookmarkResponse",
        JobBookmarkEntry: undefined
    };
    if (output.JobBookmarkEntry !== undefined &&
        output.JobBookmarkEntry !== null) {
        contents.JobBookmarkEntry = deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSecurityConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetSecurityConfigurationResponse",
        SecurityConfiguration: undefined
    };
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = deserializeAws_json1_1SecurityConfiguration(output.SecurityConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1GetSecurityConfigurationsResponse = (output, context) => {
    let contents = {
        __type: "GetSecurityConfigurationsResponse",
        NextToken: undefined,
        SecurityConfigurations: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SecurityConfigurations !== undefined &&
        output.SecurityConfigurations !== null) {
        contents.SecurityConfigurations = deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1JobBookmarkEntry = (output, context) => {
    let contents = {
        __type: "JobBookmarkEntry",
        Attempt: undefined,
        JobBookmark: undefined,
        JobName: undefined,
        PreviousRunId: undefined,
        Run: undefined,
        RunId: undefined,
        Version: undefined
    };
    if (output.Attempt !== undefined && output.Attempt !== null) {
        contents.Attempt = output.Attempt;
    }
    if (output.JobBookmark !== undefined && output.JobBookmark !== null) {
        contents.JobBookmark = output.JobBookmark;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.PreviousRunId !== undefined && output.PreviousRunId !== null) {
        contents.PreviousRunId = output.PreviousRunId;
    }
    if (output.Run !== undefined && output.Run !== null) {
        contents.Run = output.Run;
    }
    if (output.RunId !== undefined && output.RunId !== null) {
        contents.RunId = output.RunId;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1JobBookmarksEncryption = (output, context) => {
    let contents = {
        __type: "JobBookmarksEncryption",
        JobBookmarksEncryptionMode: undefined,
        KmsKeyArn: undefined
    };
    if (output.JobBookmarksEncryptionMode !== undefined &&
        output.JobBookmarksEncryptionMode !== null) {
        contents.JobBookmarksEncryptionMode = output.JobBookmarksEncryptionMode;
    }
    if (output.KmsKeyArn !== undefined && output.KmsKeyArn !== null) {
        contents.KmsKeyArn = output.KmsKeyArn;
    }
    return contents;
};
const deserializeAws_json1_1ListDevEndpointsResponse = (output, context) => {
    let contents = {
        __type: "ListDevEndpointsResponse",
        DevEndpointNames: undefined,
        NextToken: undefined
    };
    if (output.DevEndpointNames !== undefined &&
        output.DevEndpointNames !== null) {
        contents.DevEndpointNames = deserializeAws_json1_1DevEndpointNameList(output.DevEndpointNames, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MapValue = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1PublicKeysList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResetJobBookmarkResponse = (output, context) => {
    let contents = {
        __type: "ResetJobBookmarkResponse",
        JobBookmarkEntry: undefined
    };
    if (output.JobBookmarkEntry !== undefined &&
        output.JobBookmarkEntry !== null) {
        contents.JobBookmarkEntry = deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context);
    }
    return contents;
};
const deserializeAws_json1_1S3Encryption = (output, context) => {
    let contents = {
        __type: "S3Encryption",
        KmsKeyArn: undefined,
        S3EncryptionMode: undefined
    };
    if (output.KmsKeyArn !== undefined && output.KmsKeyArn !== null) {
        contents.KmsKeyArn = output.KmsKeyArn;
    }
    if (output.S3EncryptionMode !== undefined &&
        output.S3EncryptionMode !== null) {
        contents.S3EncryptionMode = output.S3EncryptionMode;
    }
    return contents;
};
const deserializeAws_json1_1S3EncryptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1S3Encryption(entry, context));
};
const deserializeAws_json1_1SecurityConfiguration = (output, context) => {
    let contents = {
        __type: "SecurityConfiguration",
        CreatedTimeStamp: undefined,
        EncryptionConfiguration: undefined,
        Name: undefined
    };
    if (output.CreatedTimeStamp !== undefined &&
        output.CreatedTimeStamp !== null) {
        contents.CreatedTimeStamp = new Date(Math.round(output.CreatedTimeStamp * 1000));
    }
    if (output.EncryptionConfiguration !== undefined &&
        output.EncryptionConfiguration !== null) {
        contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1SecurityConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecurityConfiguration(entry, context));
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UpdateDevEndpointResponse = (output, context) => {
    let contents = {
        __type: "UpdateDevEndpointResponse"
    };
    return contents;
};
const deserializeAws_json1_1CancelMLTaskRunResponse = (output, context) => {
    let contents = {
        __type: "CancelMLTaskRunResponse",
        Status: undefined,
        TaskRunId: undefined,
        TransformId: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1ConfusionMatrix = (output, context) => {
    let contents = {
        __type: "ConfusionMatrix",
        NumFalseNegatives: undefined,
        NumFalsePositives: undefined,
        NumTrueNegatives: undefined,
        NumTruePositives: undefined
    };
    if (output.NumFalseNegatives !== undefined &&
        output.NumFalseNegatives !== null) {
        contents.NumFalseNegatives = output.NumFalseNegatives;
    }
    if (output.NumFalsePositives !== undefined &&
        output.NumFalsePositives !== null) {
        contents.NumFalsePositives = output.NumFalsePositives;
    }
    if (output.NumTrueNegatives !== undefined &&
        output.NumTrueNegatives !== null) {
        contents.NumTrueNegatives = output.NumTrueNegatives;
    }
    if (output.NumTruePositives !== undefined &&
        output.NumTruePositives !== null) {
        contents.NumTruePositives = output.NumTruePositives;
    }
    return contents;
};
const deserializeAws_json1_1CreateMLTransformResponse = (output, context) => {
    let contents = {
        __type: "CreateMLTransformResponse",
        TransformId: undefined
    };
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteMLTransformResponse = (output, context) => {
    let contents = {
        __type: "DeleteMLTransformResponse",
        TransformId: undefined
    };
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1EvaluationMetrics = (output, context) => {
    let contents = {
        __type: "EvaluationMetrics",
        FindMatchesMetrics: undefined,
        TransformType: undefined
    };
    if (output.FindMatchesMetrics !== undefined &&
        output.FindMatchesMetrics !== null) {
        contents.FindMatchesMetrics = deserializeAws_json1_1FindMatchesMetrics(output.FindMatchesMetrics, context);
    }
    if (output.TransformType !== undefined && output.TransformType !== null) {
        contents.TransformType = output.TransformType;
    }
    return contents;
};
const deserializeAws_json1_1ExportLabelsTaskRunProperties = (output, context) => {
    let contents = {
        __type: "ExportLabelsTaskRunProperties",
        OutputS3Path: undefined
    };
    if (output.OutputS3Path !== undefined && output.OutputS3Path !== null) {
        contents.OutputS3Path = output.OutputS3Path;
    }
    return contents;
};
const deserializeAws_json1_1FindMatchesMetrics = (output, context) => {
    let contents = {
        __type: "FindMatchesMetrics",
        AreaUnderPRCurve: undefined,
        ConfusionMatrix: undefined,
        F1: undefined,
        Precision: undefined,
        Recall: undefined
    };
    if (output.AreaUnderPRCurve !== undefined &&
        output.AreaUnderPRCurve !== null) {
        contents.AreaUnderPRCurve = output.AreaUnderPRCurve;
    }
    if (output.ConfusionMatrix !== undefined && output.ConfusionMatrix !== null) {
        contents.ConfusionMatrix = deserializeAws_json1_1ConfusionMatrix(output.ConfusionMatrix, context);
    }
    if (output.F1 !== undefined && output.F1 !== null) {
        contents.F1 = output.F1;
    }
    if (output.Precision !== undefined && output.Precision !== null) {
        contents.Precision = output.Precision;
    }
    if (output.Recall !== undefined && output.Recall !== null) {
        contents.Recall = output.Recall;
    }
    return contents;
};
const deserializeAws_json1_1FindMatchesParameters = (output, context) => {
    let contents = {
        __type: "FindMatchesParameters",
        AccuracyCostTradeoff: undefined,
        EnforceProvidedLabels: undefined,
        PrecisionRecallTradeoff: undefined,
        PrimaryKeyColumnName: undefined
    };
    if (output.AccuracyCostTradeoff !== undefined &&
        output.AccuracyCostTradeoff !== null) {
        contents.AccuracyCostTradeoff = output.AccuracyCostTradeoff;
    }
    if (output.EnforceProvidedLabels !== undefined &&
        output.EnforceProvidedLabels !== null) {
        contents.EnforceProvidedLabels = output.EnforceProvidedLabels;
    }
    if (output.PrecisionRecallTradeoff !== undefined &&
        output.PrecisionRecallTradeoff !== null) {
        contents.PrecisionRecallTradeoff = output.PrecisionRecallTradeoff;
    }
    if (output.PrimaryKeyColumnName !== undefined &&
        output.PrimaryKeyColumnName !== null) {
        contents.PrimaryKeyColumnName = output.PrimaryKeyColumnName;
    }
    return contents;
};
const deserializeAws_json1_1FindMatchesTaskRunProperties = (output, context) => {
    let contents = {
        __type: "FindMatchesTaskRunProperties",
        JobId: undefined,
        JobName: undefined,
        JobRunId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobRunId !== undefined && output.JobRunId !== null) {
        contents.JobRunId = output.JobRunId;
    }
    return contents;
};
const deserializeAws_json1_1GetMLTaskRunResponse = (output, context) => {
    let contents = {
        __type: "GetMLTaskRunResponse",
        CompletedOn: undefined,
        ErrorString: undefined,
        ExecutionTime: undefined,
        LastModifiedOn: undefined,
        LogGroupName: undefined,
        Properties: undefined,
        StartedOn: undefined,
        Status: undefined,
        TaskRunId: undefined,
        TransformId: undefined
    };
    if (output.CompletedOn !== undefined && output.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(output.CompletedOn * 1000));
    }
    if (output.ErrorString !== undefined && output.ErrorString !== null) {
        contents.ErrorString = output.ErrorString;
    }
    if (output.ExecutionTime !== undefined && output.ExecutionTime !== null) {
        contents.ExecutionTime = output.ExecutionTime;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1TaskRunProperties(output.Properties, context);
    }
    if (output.StartedOn !== undefined && output.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(output.StartedOn * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1GetMLTaskRunsResponse = (output, context) => {
    let contents = {
        __type: "GetMLTaskRunsResponse",
        NextToken: undefined,
        TaskRuns: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TaskRuns !== undefined && output.TaskRuns !== null) {
        contents.TaskRuns = deserializeAws_json1_1TaskRunList(output.TaskRuns, context);
    }
    return contents;
};
const deserializeAws_json1_1GetMLTransformResponse = (output, context) => {
    let contents = {
        __type: "GetMLTransformResponse",
        CreatedOn: undefined,
        Description: undefined,
        EvaluationMetrics: undefined,
        GlueVersion: undefined,
        InputRecordTables: undefined,
        LabelCount: undefined,
        LastModifiedOn: undefined,
        MaxCapacity: undefined,
        MaxRetries: undefined,
        Name: undefined,
        NumberOfWorkers: undefined,
        Parameters: undefined,
        Role: undefined,
        Schema: undefined,
        Status: undefined,
        Timeout: undefined,
        TransformId: undefined,
        WorkerType: undefined
    };
    if (output.CreatedOn !== undefined && output.CreatedOn !== null) {
        contents.CreatedOn = new Date(Math.round(output.CreatedOn * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EvaluationMetrics !== undefined &&
        output.EvaluationMetrics !== null) {
        contents.EvaluationMetrics = deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context);
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.InputRecordTables !== undefined &&
        output.InputRecordTables !== null) {
        contents.InputRecordTables = deserializeAws_json1_1GlueTables(output.InputRecordTables, context);
    }
    if (output.LabelCount !== undefined && output.LabelCount !== null) {
        contents.LabelCount = output.LabelCount;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MaxRetries !== undefined && output.MaxRetries !== null) {
        contents.MaxRetries = output.MaxRetries;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1TransformParameters(output.Parameters, context);
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.Schema !== undefined && output.Schema !== null) {
        contents.Schema = deserializeAws_json1_1TransformSchema(output.Schema, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    return contents;
};
const deserializeAws_json1_1GetMLTransformsResponse = (output, context) => {
    let contents = {
        __type: "GetMLTransformsResponse",
        NextToken: undefined,
        Transforms: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Transforms !== undefined && output.Transforms !== null) {
        contents.Transforms = deserializeAws_json1_1TransformList(output.Transforms, context);
    }
    return contents;
};
const deserializeAws_json1_1GlueTable = (output, context) => {
    let contents = {
        __type: "GlueTable",
        CatalogId: undefined,
        ConnectionName: undefined,
        DatabaseName: undefined,
        TableName: undefined
    };
    if (output.CatalogId !== undefined && output.CatalogId !== null) {
        contents.CatalogId = output.CatalogId;
    }
    if (output.ConnectionName !== undefined && output.ConnectionName !== null) {
        contents.ConnectionName = output.ConnectionName;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_1GlueTables = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GlueTable(entry, context));
};
const deserializeAws_json1_1ImportLabelsTaskRunProperties = (output, context) => {
    let contents = {
        __type: "ImportLabelsTaskRunProperties",
        InputS3Path: undefined,
        Replace: undefined
    };
    if (output.InputS3Path !== undefined && output.InputS3Path !== null) {
        contents.InputS3Path = output.InputS3Path;
    }
    if (output.Replace !== undefined && output.Replace !== null) {
        contents.Replace = output.Replace;
    }
    return contents;
};
const deserializeAws_json1_1LabelingSetGenerationTaskRunProperties = (output, context) => {
    let contents = {
        __type: "LabelingSetGenerationTaskRunProperties",
        OutputS3Path: undefined
    };
    if (output.OutputS3Path !== undefined && output.OutputS3Path !== null) {
        contents.OutputS3Path = output.OutputS3Path;
    }
    return contents;
};
const deserializeAws_json1_1MLTransform = (output, context) => {
    let contents = {
        __type: "MLTransform",
        CreatedOn: undefined,
        Description: undefined,
        EvaluationMetrics: undefined,
        GlueVersion: undefined,
        InputRecordTables: undefined,
        LabelCount: undefined,
        LastModifiedOn: undefined,
        MaxCapacity: undefined,
        MaxRetries: undefined,
        Name: undefined,
        NumberOfWorkers: undefined,
        Parameters: undefined,
        Role: undefined,
        Schema: undefined,
        Status: undefined,
        Timeout: undefined,
        TransformId: undefined,
        WorkerType: undefined
    };
    if (output.CreatedOn !== undefined && output.CreatedOn !== null) {
        contents.CreatedOn = new Date(Math.round(output.CreatedOn * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.EvaluationMetrics !== undefined &&
        output.EvaluationMetrics !== null) {
        contents.EvaluationMetrics = deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context);
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.InputRecordTables !== undefined &&
        output.InputRecordTables !== null) {
        contents.InputRecordTables = deserializeAws_json1_1GlueTables(output.InputRecordTables, context);
    }
    if (output.LabelCount !== undefined && output.LabelCount !== null) {
        contents.LabelCount = output.LabelCount;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MaxRetries !== undefined && output.MaxRetries !== null) {
        contents.MaxRetries = output.MaxRetries;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1TransformParameters(output.Parameters, context);
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.Schema !== undefined && output.Schema !== null) {
        contents.Schema = deserializeAws_json1_1TransformSchema(output.Schema, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    return contents;
};
const deserializeAws_json1_1MLTransformNotReadyException = (output, context) => {
    let contents = {
        __type: "MLTransformNotReadyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SchemaColumn = (output, context) => {
    let contents = {
        __type: "SchemaColumn",
        DataType: undefined,
        Name: undefined
    };
    if (output.DataType !== undefined && output.DataType !== null) {
        contents.DataType = output.DataType;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1StartExportLabelsTaskRunResponse = (output, context) => {
    let contents = {
        __type: "StartExportLabelsTaskRunResponse",
        TaskRunId: undefined
    };
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    return contents;
};
const deserializeAws_json1_1StartImportLabelsTaskRunResponse = (output, context) => {
    let contents = {
        __type: "StartImportLabelsTaskRunResponse",
        TaskRunId: undefined
    };
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    return contents;
};
const deserializeAws_json1_1StartMLEvaluationTaskRunResponse = (output, context) => {
    let contents = {
        __type: "StartMLEvaluationTaskRunResponse",
        TaskRunId: undefined
    };
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    return contents;
};
const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse = (output, context) => {
    let contents = {
        __type: "StartMLLabelingSetGenerationTaskRunResponse",
        TaskRunId: undefined
    };
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    return contents;
};
const deserializeAws_json1_1TaskRun = (output, context) => {
    let contents = {
        __type: "TaskRun",
        CompletedOn: undefined,
        ErrorString: undefined,
        ExecutionTime: undefined,
        LastModifiedOn: undefined,
        LogGroupName: undefined,
        Properties: undefined,
        StartedOn: undefined,
        Status: undefined,
        TaskRunId: undefined,
        TransformId: undefined
    };
    if (output.CompletedOn !== undefined && output.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(output.CompletedOn * 1000));
    }
    if (output.ErrorString !== undefined && output.ErrorString !== null) {
        contents.ErrorString = output.ErrorString;
    }
    if (output.ExecutionTime !== undefined && output.ExecutionTime !== null) {
        contents.ExecutionTime = output.ExecutionTime;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.Properties !== undefined && output.Properties !== null) {
        contents.Properties = deserializeAws_json1_1TaskRunProperties(output.Properties, context);
    }
    if (output.StartedOn !== undefined && output.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(output.StartedOn * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskRunId !== undefined && output.TaskRunId !== null) {
        contents.TaskRunId = output.TaskRunId;
    }
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1TaskRunList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TaskRun(entry, context));
};
const deserializeAws_json1_1TaskRunProperties = (output, context) => {
    let contents = {
        __type: "TaskRunProperties",
        ExportLabelsTaskRunProperties: undefined,
        FindMatchesTaskRunProperties: undefined,
        ImportLabelsTaskRunProperties: undefined,
        LabelingSetGenerationTaskRunProperties: undefined,
        TaskType: undefined
    };
    if (output.ExportLabelsTaskRunProperties !== undefined &&
        output.ExportLabelsTaskRunProperties !== null) {
        contents.ExportLabelsTaskRunProperties = deserializeAws_json1_1ExportLabelsTaskRunProperties(output.ExportLabelsTaskRunProperties, context);
    }
    if (output.FindMatchesTaskRunProperties !== undefined &&
        output.FindMatchesTaskRunProperties !== null) {
        contents.FindMatchesTaskRunProperties = deserializeAws_json1_1FindMatchesTaskRunProperties(output.FindMatchesTaskRunProperties, context);
    }
    if (output.ImportLabelsTaskRunProperties !== undefined &&
        output.ImportLabelsTaskRunProperties !== null) {
        contents.ImportLabelsTaskRunProperties = deserializeAws_json1_1ImportLabelsTaskRunProperties(output.ImportLabelsTaskRunProperties, context);
    }
    if (output.LabelingSetGenerationTaskRunProperties !== undefined &&
        output.LabelingSetGenerationTaskRunProperties !== null) {
        contents.LabelingSetGenerationTaskRunProperties = deserializeAws_json1_1LabelingSetGenerationTaskRunProperties(output.LabelingSetGenerationTaskRunProperties, context);
    }
    if (output.TaskType !== undefined && output.TaskType !== null) {
        contents.TaskType = output.TaskType;
    }
    return contents;
};
const deserializeAws_json1_1TransformList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MLTransform(entry, context));
};
const deserializeAws_json1_1TransformParameters = (output, context) => {
    let contents = {
        __type: "TransformParameters",
        FindMatchesParameters: undefined,
        TransformType: undefined
    };
    if (output.FindMatchesParameters !== undefined &&
        output.FindMatchesParameters !== null) {
        contents.FindMatchesParameters = deserializeAws_json1_1FindMatchesParameters(output.FindMatchesParameters, context);
    }
    if (output.TransformType !== undefined && output.TransformType !== null) {
        contents.TransformType = output.TransformType;
    }
    return contents;
};
const deserializeAws_json1_1TransformSchema = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SchemaColumn(entry, context));
};
const deserializeAws_json1_1UpdateMLTransformResponse = (output, context) => {
    let contents = {
        __type: "UpdateMLTransformResponse",
        TransformId: undefined
    };
    if (output.TransformId !== undefined && output.TransformId !== null) {
        contents.TransformId = output.TransformId;
    }
    return contents;
};
const deserializeAws_json1_1Action = (output, context) => {
    let contents = {
        __type: "Action",
        Arguments: undefined,
        CrawlerName: undefined,
        JobName: undefined,
        NotificationProperty: undefined,
        SecurityConfiguration: undefined,
        Timeout: undefined
    };
    if (output.Arguments !== undefined && output.Arguments !== null) {
        contents.Arguments = deserializeAws_json1_1GenericMap(output.Arguments, context);
    }
    if (output.CrawlerName !== undefined && output.CrawlerName !== null) {
        contents.CrawlerName = output.CrawlerName;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.NotificationProperty !== undefined &&
        output.NotificationProperty !== null) {
        contents.NotificationProperty = deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context);
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    return contents;
};
const deserializeAws_json1_1ActionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Action(entry, context));
};
const deserializeAws_json1_1BatchGetJobsResponse = (output, context) => {
    let contents = {
        __type: "BatchGetJobsResponse",
        Jobs: undefined,
        JobsNotFound: undefined
    };
    if (output.Jobs !== undefined && output.Jobs !== null) {
        contents.Jobs = deserializeAws_json1_1JobList(output.Jobs, context);
    }
    if (output.JobsNotFound !== undefined && output.JobsNotFound !== null) {
        contents.JobsNotFound = deserializeAws_json1_1JobNameList(output.JobsNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetTriggersResponse = (output, context) => {
    let contents = {
        __type: "BatchGetTriggersResponse",
        Triggers: undefined,
        TriggersNotFound: undefined
    };
    if (output.Triggers !== undefined && output.Triggers !== null) {
        contents.Triggers = deserializeAws_json1_1TriggerList(output.Triggers, context);
    }
    if (output.TriggersNotFound !== undefined &&
        output.TriggersNotFound !== null) {
        contents.TriggersNotFound = deserializeAws_json1_1TriggerNameList(output.TriggersNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetWorkflowsResponse = (output, context) => {
    let contents = {
        __type: "BatchGetWorkflowsResponse",
        MissingWorkflows: undefined,
        Workflows: undefined
    };
    if (output.MissingWorkflows !== undefined &&
        output.MissingWorkflows !== null) {
        contents.MissingWorkflows = deserializeAws_json1_1WorkflowNames(output.MissingWorkflows, context);
    }
    if (output.Workflows !== undefined && output.Workflows !== null) {
        contents.Workflows = deserializeAws_json1_1Workflows(output.Workflows, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchStopJobRunError = (output, context) => {
    let contents = {
        __type: "BatchStopJobRunError",
        ErrorDetail: undefined,
        JobName: undefined,
        JobRunId: undefined
    };
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context);
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobRunId !== undefined && output.JobRunId !== null) {
        contents.JobRunId = output.JobRunId;
    }
    return contents;
};
const deserializeAws_json1_1BatchStopJobRunErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchStopJobRunError(entry, context));
};
const deserializeAws_json1_1BatchStopJobRunResponse = (output, context) => {
    let contents = {
        __type: "BatchStopJobRunResponse",
        Errors: undefined,
        SuccessfulSubmissions: undefined
    };
    if (output.Errors !== undefined && output.Errors !== null) {
        contents.Errors = deserializeAws_json1_1BatchStopJobRunErrorList(output.Errors, context);
    }
    if (output.SuccessfulSubmissions !== undefined &&
        output.SuccessfulSubmissions !== null) {
        contents.SuccessfulSubmissions = deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList(output.SuccessfulSubmissions, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission = (output, context) => {
    let contents = {
        __type: "BatchStopJobRunSuccessfulSubmission",
        JobName: undefined,
        JobRunId: undefined
    };
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobRunId !== undefined && output.JobRunId !== null) {
        contents.JobRunId = output.JobRunId;
    }
    return contents;
};
const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission(entry, context));
};
const deserializeAws_json1_1Condition = (output, context) => {
    let contents = {
        __type: "Condition",
        CrawlState: undefined,
        CrawlerName: undefined,
        JobName: undefined,
        LogicalOperator: undefined,
        State: undefined
    };
    if (output.CrawlState !== undefined && output.CrawlState !== null) {
        contents.CrawlState = output.CrawlState;
    }
    if (output.CrawlerName !== undefined && output.CrawlerName !== null) {
        contents.CrawlerName = output.CrawlerName;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.LogicalOperator !== undefined && output.LogicalOperator !== null) {
        contents.LogicalOperator = output.LogicalOperator;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1ConditionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Condition(entry, context));
};
const deserializeAws_json1_1ConnectionsList = (output, context) => {
    let contents = {
        __type: "ConnectionsList",
        Connections: undefined
    };
    if (output.Connections !== undefined && output.Connections !== null) {
        contents.Connections = deserializeAws_json1_1OrchestrationStringList(output.Connections, context);
    }
    return contents;
};
const deserializeAws_json1_1Crawl = (output, context) => {
    let contents = {
        __type: "Crawl",
        CompletedOn: undefined,
        ErrorMessage: undefined,
        LogGroup: undefined,
        LogStream: undefined,
        StartedOn: undefined,
        State: undefined
    };
    if (output.CompletedOn !== undefined && output.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(output.CompletedOn * 1000));
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LogGroup !== undefined && output.LogGroup !== null) {
        contents.LogGroup = output.LogGroup;
    }
    if (output.LogStream !== undefined && output.LogStream !== null) {
        contents.LogStream = output.LogStream;
    }
    if (output.StartedOn !== undefined && output.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(output.StartedOn * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1CrawlList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Crawl(entry, context));
};
const deserializeAws_json1_1CrawlerNodeDetails = (output, context) => {
    let contents = {
        __type: "CrawlerNodeDetails",
        Crawls: undefined
    };
    if (output.Crawls !== undefined && output.Crawls !== null) {
        contents.Crawls = deserializeAws_json1_1CrawlList(output.Crawls, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateJobResponse = (output, context) => {
    let contents = {
        __type: "CreateJobResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CreateTriggerResponse = (output, context) => {
    let contents = {
        __type: "CreateTriggerResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CreateWorkflowResponse = (output, context) => {
    let contents = {
        __type: "CreateWorkflowResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeleteJobResponse = (output, context) => {
    let contents = {
        __type: "DeleteJobResponse",
        JobName: undefined
    };
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    return contents;
};
const deserializeAws_json1_1DeleteTriggerResponse = (output, context) => {
    let contents = {
        __type: "DeleteTriggerResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeleteWorkflowResponse = (output, context) => {
    let contents = {
        __type: "DeleteWorkflowResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1Edge = (output, context) => {
    let contents = {
        __type: "Edge",
        DestinationId: undefined,
        SourceId: undefined
    };
    if (output.DestinationId !== undefined && output.DestinationId !== null) {
        contents.DestinationId = output.DestinationId;
    }
    if (output.SourceId !== undefined && output.SourceId !== null) {
        contents.SourceId = output.SourceId;
    }
    return contents;
};
const deserializeAws_json1_1EdgeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Edge(entry, context));
};
const deserializeAws_json1_1ExecutionProperty = (output, context) => {
    let contents = {
        __type: "ExecutionProperty",
        MaxConcurrentRuns: undefined
    };
    if (output.MaxConcurrentRuns !== undefined &&
        output.MaxConcurrentRuns !== null) {
        contents.MaxConcurrentRuns = output.MaxConcurrentRuns;
    }
    return contents;
};
const deserializeAws_json1_1GenericMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1GetJobResponse = (output, context) => {
    let contents = {
        __type: "GetJobResponse",
        Job: undefined
    };
    if (output.Job !== undefined && output.Job !== null) {
        contents.Job = deserializeAws_json1_1Job(output.Job, context);
    }
    return contents;
};
const deserializeAws_json1_1GetJobRunResponse = (output, context) => {
    let contents = {
        __type: "GetJobRunResponse",
        JobRun: undefined
    };
    if (output.JobRun !== undefined && output.JobRun !== null) {
        contents.JobRun = deserializeAws_json1_1JobRun(output.JobRun, context);
    }
    return contents;
};
const deserializeAws_json1_1GetJobRunsResponse = (output, context) => {
    let contents = {
        __type: "GetJobRunsResponse",
        JobRuns: undefined,
        NextToken: undefined
    };
    if (output.JobRuns !== undefined && output.JobRuns !== null) {
        contents.JobRuns = deserializeAws_json1_1JobRunList(output.JobRuns, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetJobsResponse = (output, context) => {
    let contents = {
        __type: "GetJobsResponse",
        Jobs: undefined,
        NextToken: undefined
    };
    if (output.Jobs !== undefined && output.Jobs !== null) {
        contents.Jobs = deserializeAws_json1_1JobList(output.Jobs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetTriggerResponse = (output, context) => {
    let contents = {
        __type: "GetTriggerResponse",
        Trigger: undefined
    };
    if (output.Trigger !== undefined && output.Trigger !== null) {
        contents.Trigger = deserializeAws_json1_1Trigger(output.Trigger, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTriggersResponse = (output, context) => {
    let contents = {
        __type: "GetTriggersResponse",
        NextToken: undefined,
        Triggers: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Triggers !== undefined && output.Triggers !== null) {
        contents.Triggers = deserializeAws_json1_1TriggerList(output.Triggers, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWorkflowResponse = (output, context) => {
    let contents = {
        __type: "GetWorkflowResponse",
        Workflow: undefined
    };
    if (output.Workflow !== undefined && output.Workflow !== null) {
        contents.Workflow = deserializeAws_json1_1Workflow(output.Workflow, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWorkflowRunPropertiesResponse = (output, context) => {
    let contents = {
        __type: "GetWorkflowRunPropertiesResponse",
        RunProperties: undefined
    };
    if (output.RunProperties !== undefined && output.RunProperties !== null) {
        contents.RunProperties = deserializeAws_json1_1WorkflowRunProperties(output.RunProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWorkflowRunResponse = (output, context) => {
    let contents = {
        __type: "GetWorkflowRunResponse",
        Run: undefined
    };
    if (output.Run !== undefined && output.Run !== null) {
        contents.Run = deserializeAws_json1_1WorkflowRun(output.Run, context);
    }
    return contents;
};
const deserializeAws_json1_1GetWorkflowRunsResponse = (output, context) => {
    let contents = {
        __type: "GetWorkflowRunsResponse",
        NextToken: undefined,
        Runs: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Runs !== undefined && output.Runs !== null) {
        contents.Runs = deserializeAws_json1_1WorkflowRuns(output.Runs, context);
    }
    return contents;
};
const deserializeAws_json1_1Job = (output, context) => {
    let contents = {
        __type: "Job",
        AllocatedCapacity: undefined,
        Command: undefined,
        Connections: undefined,
        CreatedOn: undefined,
        DefaultArguments: undefined,
        Description: undefined,
        ExecutionProperty: undefined,
        GlueVersion: undefined,
        LastModifiedOn: undefined,
        LogUri: undefined,
        MaxCapacity: undefined,
        MaxRetries: undefined,
        Name: undefined,
        NotificationProperty: undefined,
        NumberOfWorkers: undefined,
        Role: undefined,
        SecurityConfiguration: undefined,
        Timeout: undefined,
        WorkerType: undefined
    };
    if (output.AllocatedCapacity !== undefined &&
        output.AllocatedCapacity !== null) {
        contents.AllocatedCapacity = output.AllocatedCapacity;
    }
    if (output.Command !== undefined && output.Command !== null) {
        contents.Command = deserializeAws_json1_1JobCommand(output.Command, context);
    }
    if (output.Connections !== undefined && output.Connections !== null) {
        contents.Connections = deserializeAws_json1_1ConnectionsList(output.Connections, context);
    }
    if (output.CreatedOn !== undefined && output.CreatedOn !== null) {
        contents.CreatedOn = new Date(Math.round(output.CreatedOn * 1000));
    }
    if (output.DefaultArguments !== undefined &&
        output.DefaultArguments !== null) {
        contents.DefaultArguments = deserializeAws_json1_1GenericMap(output.DefaultArguments, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.ExecutionProperty !== undefined &&
        output.ExecutionProperty !== null) {
        contents.ExecutionProperty = deserializeAws_json1_1ExecutionProperty(output.ExecutionProperty, context);
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.LogUri !== undefined && output.LogUri !== null) {
        contents.LogUri = output.LogUri;
    }
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.MaxRetries !== undefined && output.MaxRetries !== null) {
        contents.MaxRetries = output.MaxRetries;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NotificationProperty !== undefined &&
        output.NotificationProperty !== null) {
        contents.NotificationProperty = deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context);
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    return contents;
};
const deserializeAws_json1_1JobCommand = (output, context) => {
    let contents = {
        __type: "JobCommand",
        Name: undefined,
        PythonVersion: undefined,
        ScriptLocation: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PythonVersion !== undefined && output.PythonVersion !== null) {
        contents.PythonVersion = output.PythonVersion;
    }
    if (output.ScriptLocation !== undefined && output.ScriptLocation !== null) {
        contents.ScriptLocation = output.ScriptLocation;
    }
    return contents;
};
const deserializeAws_json1_1JobList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Job(entry, context));
};
const deserializeAws_json1_1JobNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1JobNodeDetails = (output, context) => {
    let contents = {
        __type: "JobNodeDetails",
        JobRuns: undefined
    };
    if (output.JobRuns !== undefined && output.JobRuns !== null) {
        contents.JobRuns = deserializeAws_json1_1JobRunList(output.JobRuns, context);
    }
    return contents;
};
const deserializeAws_json1_1JobRun = (output, context) => {
    let contents = {
        __type: "JobRun",
        AllocatedCapacity: undefined,
        Arguments: undefined,
        Attempt: undefined,
        CompletedOn: undefined,
        ErrorMessage: undefined,
        ExecutionTime: undefined,
        GlueVersion: undefined,
        Id: undefined,
        JobName: undefined,
        JobRunState: undefined,
        LastModifiedOn: undefined,
        LogGroupName: undefined,
        MaxCapacity: undefined,
        NotificationProperty: undefined,
        NumberOfWorkers: undefined,
        PredecessorRuns: undefined,
        PreviousRunId: undefined,
        SecurityConfiguration: undefined,
        StartedOn: undefined,
        Timeout: undefined,
        TriggerName: undefined,
        WorkerType: undefined
    };
    if (output.AllocatedCapacity !== undefined &&
        output.AllocatedCapacity !== null) {
        contents.AllocatedCapacity = output.AllocatedCapacity;
    }
    if (output.Arguments !== undefined && output.Arguments !== null) {
        contents.Arguments = deserializeAws_json1_1GenericMap(output.Arguments, context);
    }
    if (output.Attempt !== undefined && output.Attempt !== null) {
        contents.Attempt = output.Attempt;
    }
    if (output.CompletedOn !== undefined && output.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(output.CompletedOn * 1000));
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.ExecutionTime !== undefined && output.ExecutionTime !== null) {
        contents.ExecutionTime = output.ExecutionTime;
    }
    if (output.GlueVersion !== undefined && output.GlueVersion !== null) {
        contents.GlueVersion = output.GlueVersion;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobRunState !== undefined && output.JobRunState !== null) {
        contents.JobRunState = output.JobRunState;
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
        contents.MaxCapacity = output.MaxCapacity;
    }
    if (output.NotificationProperty !== undefined &&
        output.NotificationProperty !== null) {
        contents.NotificationProperty = deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context);
    }
    if (output.NumberOfWorkers !== undefined && output.NumberOfWorkers !== null) {
        contents.NumberOfWorkers = output.NumberOfWorkers;
    }
    if (output.PredecessorRuns !== undefined && output.PredecessorRuns !== null) {
        contents.PredecessorRuns = deserializeAws_json1_1PredecessorList(output.PredecessorRuns, context);
    }
    if (output.PreviousRunId !== undefined && output.PreviousRunId !== null) {
        contents.PreviousRunId = output.PreviousRunId;
    }
    if (output.SecurityConfiguration !== undefined &&
        output.SecurityConfiguration !== null) {
        contents.SecurityConfiguration = output.SecurityConfiguration;
    }
    if (output.StartedOn !== undefined && output.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(output.StartedOn * 1000));
    }
    if (output.Timeout !== undefined && output.Timeout !== null) {
        contents.Timeout = output.Timeout;
    }
    if (output.TriggerName !== undefined && output.TriggerName !== null) {
        contents.TriggerName = output.TriggerName;
    }
    if (output.WorkerType !== undefined && output.WorkerType !== null) {
        contents.WorkerType = output.WorkerType;
    }
    return contents;
};
const deserializeAws_json1_1JobRunList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1JobRun(entry, context));
};
const deserializeAws_json1_1ListJobsResponse = (output, context) => {
    let contents = {
        __type: "ListJobsResponse",
        JobNames: undefined,
        NextToken: undefined
    };
    if (output.JobNames !== undefined && output.JobNames !== null) {
        contents.JobNames = deserializeAws_json1_1JobNameList(output.JobNames, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTriggersResponse = (output, context) => {
    let contents = {
        __type: "ListTriggersResponse",
        NextToken: undefined,
        TriggerNames: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TriggerNames !== undefined && output.TriggerNames !== null) {
        contents.TriggerNames = deserializeAws_json1_1TriggerNameList(output.TriggerNames, context);
    }
    return contents;
};
const deserializeAws_json1_1ListWorkflowsResponse = (output, context) => {
    let contents = {
        __type: "ListWorkflowsResponse",
        NextToken: undefined,
        Workflows: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Workflows !== undefined && output.Workflows !== null) {
        contents.Workflows = deserializeAws_json1_1WorkflowNames(output.Workflows, context);
    }
    return contents;
};
const deserializeAws_json1_1Node = (output, context) => {
    let contents = {
        __type: "Node",
        CrawlerDetails: undefined,
        JobDetails: undefined,
        Name: undefined,
        TriggerDetails: undefined,
        Type: undefined,
        UniqueId: undefined
    };
    if (output.CrawlerDetails !== undefined && output.CrawlerDetails !== null) {
        contents.CrawlerDetails = deserializeAws_json1_1CrawlerNodeDetails(output.CrawlerDetails, context);
    }
    if (output.JobDetails !== undefined && output.JobDetails !== null) {
        contents.JobDetails = deserializeAws_json1_1JobNodeDetails(output.JobDetails, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.TriggerDetails !== undefined && output.TriggerDetails !== null) {
        contents.TriggerDetails = deserializeAws_json1_1TriggerNodeDetails(output.TriggerDetails, context);
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UniqueId !== undefined && output.UniqueId !== null) {
        contents.UniqueId = output.UniqueId;
    }
    return contents;
};
const deserializeAws_json1_1NodeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Node(entry, context));
};
const deserializeAws_json1_1NotificationProperty = (output, context) => {
    let contents = {
        __type: "NotificationProperty",
        NotifyDelayAfter: undefined
    };
    if (output.NotifyDelayAfter !== undefined &&
        output.NotifyDelayAfter !== null) {
        contents.NotifyDelayAfter = output.NotifyDelayAfter;
    }
    return contents;
};
const deserializeAws_json1_1OrchestrationStringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Predecessor = (output, context) => {
    let contents = {
        __type: "Predecessor",
        JobName: undefined,
        RunId: undefined
    };
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.RunId !== undefined && output.RunId !== null) {
        contents.RunId = output.RunId;
    }
    return contents;
};
const deserializeAws_json1_1PredecessorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Predecessor(entry, context));
};
const deserializeAws_json1_1Predicate = (output, context) => {
    let contents = {
        __type: "Predicate",
        Conditions: undefined,
        Logical: undefined
    };
    if (output.Conditions !== undefined && output.Conditions !== null) {
        contents.Conditions = deserializeAws_json1_1ConditionList(output.Conditions, context);
    }
    if (output.Logical !== undefined && output.Logical !== null) {
        contents.Logical = output.Logical;
    }
    return contents;
};
const deserializeAws_json1_1PutWorkflowRunPropertiesResponse = (output, context) => {
    let contents = {
        __type: "PutWorkflowRunPropertiesResponse"
    };
    return contents;
};
const deserializeAws_json1_1StartJobRunResponse = (output, context) => {
    let contents = {
        __type: "StartJobRunResponse",
        JobRunId: undefined
    };
    if (output.JobRunId !== undefined && output.JobRunId !== null) {
        contents.JobRunId = output.JobRunId;
    }
    return contents;
};
const deserializeAws_json1_1StartTriggerResponse = (output, context) => {
    let contents = {
        __type: "StartTriggerResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1StartWorkflowRunResponse = (output, context) => {
    let contents = {
        __type: "StartWorkflowRunResponse",
        RunId: undefined
    };
    if (output.RunId !== undefined && output.RunId !== null) {
        contents.RunId = output.RunId;
    }
    return contents;
};
const deserializeAws_json1_1StopTriggerResponse = (output, context) => {
    let contents = {
        __type: "StopTriggerResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1Trigger = (output, context) => {
    let contents = {
        __type: "Trigger",
        Actions: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Predicate: undefined,
        Schedule: undefined,
        State: undefined,
        Type: undefined,
        WorkflowName: undefined
    };
    if (output.Actions !== undefined && output.Actions !== null) {
        contents.Actions = deserializeAws_json1_1ActionList(output.Actions, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Predicate !== undefined && output.Predicate !== null) {
        contents.Predicate = deserializeAws_json1_1Predicate(output.Predicate, context);
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = output.Schedule;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.WorkflowName !== undefined && output.WorkflowName !== null) {
        contents.WorkflowName = output.WorkflowName;
    }
    return contents;
};
const deserializeAws_json1_1TriggerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Trigger(entry, context));
};
const deserializeAws_json1_1TriggerNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TriggerNodeDetails = (output, context) => {
    let contents = {
        __type: "TriggerNodeDetails",
        Trigger: undefined
    };
    if (output.Trigger !== undefined && output.Trigger !== null) {
        contents.Trigger = deserializeAws_json1_1Trigger(output.Trigger, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateJobResponse = (output, context) => {
    let contents = {
        __type: "UpdateJobResponse",
        JobName: undefined
    };
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    return contents;
};
const deserializeAws_json1_1UpdateTriggerResponse = (output, context) => {
    let contents = {
        __type: "UpdateTriggerResponse",
        Trigger: undefined
    };
    if (output.Trigger !== undefined && output.Trigger !== null) {
        contents.Trigger = deserializeAws_json1_1Trigger(output.Trigger, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateWorkflowResponse = (output, context) => {
    let contents = {
        __type: "UpdateWorkflowResponse",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1Workflow = (output, context) => {
    let contents = {
        __type: "Workflow",
        CreatedOn: undefined,
        DefaultRunProperties: undefined,
        Description: undefined,
        Graph: undefined,
        LastModifiedOn: undefined,
        LastRun: undefined,
        Name: undefined
    };
    if (output.CreatedOn !== undefined && output.CreatedOn !== null) {
        contents.CreatedOn = new Date(Math.round(output.CreatedOn * 1000));
    }
    if (output.DefaultRunProperties !== undefined &&
        output.DefaultRunProperties !== null) {
        contents.DefaultRunProperties = deserializeAws_json1_1WorkflowRunProperties(output.DefaultRunProperties, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Graph !== undefined && output.Graph !== null) {
        contents.Graph = deserializeAws_json1_1WorkflowGraph(output.Graph, context);
    }
    if (output.LastModifiedOn !== undefined && output.LastModifiedOn !== null) {
        contents.LastModifiedOn = new Date(Math.round(output.LastModifiedOn * 1000));
    }
    if (output.LastRun !== undefined && output.LastRun !== null) {
        contents.LastRun = deserializeAws_json1_1WorkflowRun(output.LastRun, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1WorkflowGraph = (output, context) => {
    let contents = {
        __type: "WorkflowGraph",
        Edges: undefined,
        Nodes: undefined
    };
    if (output.Edges !== undefined && output.Edges !== null) {
        contents.Edges = deserializeAws_json1_1EdgeList(output.Edges, context);
    }
    if (output.Nodes !== undefined && output.Nodes !== null) {
        contents.Nodes = deserializeAws_json1_1NodeList(output.Nodes, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkflowNames = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1WorkflowRun = (output, context) => {
    let contents = {
        __type: "WorkflowRun",
        CompletedOn: undefined,
        Graph: undefined,
        Name: undefined,
        StartedOn: undefined,
        Statistics: undefined,
        Status: undefined,
        WorkflowRunId: undefined,
        WorkflowRunProperties: undefined
    };
    if (output.CompletedOn !== undefined && output.CompletedOn !== null) {
        contents.CompletedOn = new Date(Math.round(output.CompletedOn * 1000));
    }
    if (output.Graph !== undefined && output.Graph !== null) {
        contents.Graph = deserializeAws_json1_1WorkflowGraph(output.Graph, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.StartedOn !== undefined && output.StartedOn !== null) {
        contents.StartedOn = new Date(Math.round(output.StartedOn * 1000));
    }
    if (output.Statistics !== undefined && output.Statistics !== null) {
        contents.Statistics = deserializeAws_json1_1WorkflowRunStatistics(output.Statistics, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.WorkflowRunId !== undefined && output.WorkflowRunId !== null) {
        contents.WorkflowRunId = output.WorkflowRunId;
    }
    if (output.WorkflowRunProperties !== undefined &&
        output.WorkflowRunProperties !== null) {
        contents.WorkflowRunProperties = deserializeAws_json1_1WorkflowRunProperties(output.WorkflowRunProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkflowRunProperties = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1WorkflowRunStatistics = (output, context) => {
    let contents = {
        __type: "WorkflowRunStatistics",
        FailedActions: undefined,
        RunningActions: undefined,
        StoppedActions: undefined,
        SucceededActions: undefined,
        TimeoutActions: undefined,
        TotalActions: undefined
    };
    if (output.FailedActions !== undefined && output.FailedActions !== null) {
        contents.FailedActions = output.FailedActions;
    }
    if (output.RunningActions !== undefined && output.RunningActions !== null) {
        contents.RunningActions = output.RunningActions;
    }
    if (output.StoppedActions !== undefined && output.StoppedActions !== null) {
        contents.StoppedActions = output.StoppedActions;
    }
    if (output.SucceededActions !== undefined &&
        output.SucceededActions !== null) {
        contents.SucceededActions = output.SucceededActions;
    }
    if (output.TimeoutActions !== undefined && output.TimeoutActions !== null) {
        contents.TimeoutActions = output.TimeoutActions;
    }
    if (output.TotalActions !== undefined && output.TotalActions !== null) {
        contents.TotalActions = output.TotalActions;
    }
    return contents;
};
const deserializeAws_json1_1WorkflowRuns = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkflowRun(entry, context));
};
const deserializeAws_json1_1Workflows = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Workflow(entry, context));
};
const deserializeAws_json1_1BatchGetCrawlersResponse = (output, context) => {
    let contents = {
        __type: "BatchGetCrawlersResponse",
        Crawlers: undefined,
        CrawlersNotFound: undefined
    };
    if (output.Crawlers !== undefined && output.Crawlers !== null) {
        contents.Crawlers = deserializeAws_json1_1CrawlerList(output.Crawlers, context);
    }
    if (output.CrawlersNotFound !== undefined &&
        output.CrawlersNotFound !== null) {
        contents.CrawlersNotFound = deserializeAws_json1_1CrawlerNameList(output.CrawlersNotFound, context);
    }
    return contents;
};
const deserializeAws_json1_1CatalogTablesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CatalogTarget = (output, context) => {
    let contents = {
        __type: "CatalogTarget",
        DatabaseName: undefined,
        Tables: undefined
    };
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Tables !== undefined && output.Tables !== null) {
        contents.Tables = deserializeAws_json1_1CatalogTablesList(output.Tables, context);
    }
    return contents;
};
const deserializeAws_json1_1CatalogTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CatalogTarget(entry, context));
};
const deserializeAws_json1_1Classifier = (output, context) => {
    let contents = {
        __type: "Classifier",
        CsvClassifier: undefined,
        GrokClassifier: undefined,
        JsonClassifier: undefined,
        XMLClassifier: undefined
    };
    if (output.CsvClassifier !== undefined && output.CsvClassifier !== null) {
        contents.CsvClassifier = deserializeAws_json1_1CsvClassifier(output.CsvClassifier, context);
    }
    if (output.GrokClassifier !== undefined && output.GrokClassifier !== null) {
        contents.GrokClassifier = deserializeAws_json1_1GrokClassifier(output.GrokClassifier, context);
    }
    if (output.JsonClassifier !== undefined && output.JsonClassifier !== null) {
        contents.JsonClassifier = deserializeAws_json1_1JsonClassifier(output.JsonClassifier, context);
    }
    if (output.XMLClassifier !== undefined && output.XMLClassifier !== null) {
        contents.XMLClassifier = deserializeAws_json1_1XMLClassifier(output.XMLClassifier, context);
    }
    return contents;
};
const deserializeAws_json1_1ClassifierList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Classifier(entry, context));
};
const deserializeAws_json1_1ClassifierNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CodeGenEdge = (output, context) => {
    let contents = {
        __type: "CodeGenEdge",
        Source: undefined,
        Target: undefined,
        TargetParameter: undefined
    };
    if (output.Source !== undefined && output.Source !== null) {
        contents.Source = output.Source;
    }
    if (output.Target !== undefined && output.Target !== null) {
        contents.Target = output.Target;
    }
    if (output.TargetParameter !== undefined && output.TargetParameter !== null) {
        contents.TargetParameter = output.TargetParameter;
    }
    return contents;
};
const deserializeAws_json1_1CodeGenNode = (output, context) => {
    let contents = {
        __type: "CodeGenNode",
        Args: undefined,
        Id: undefined,
        LineNumber: undefined,
        NodeType: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1CodeGenNodeArgs(output.Args, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.LineNumber !== undefined && output.LineNumber !== null) {
        contents.LineNumber = output.LineNumber;
    }
    if (output.NodeType !== undefined && output.NodeType !== null) {
        contents.NodeType = output.NodeType;
    }
    return contents;
};
const deserializeAws_json1_1CodeGenNodeArg = (output, context) => {
    let contents = {
        __type: "CodeGenNodeArg",
        Name: undefined,
        Param: undefined,
        Value: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Param !== undefined && output.Param !== null) {
        contents.Param = output.Param;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1CodeGenNodeArgs = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CodeGenNodeArg(entry, context));
};
const deserializeAws_json1_1Crawler = (output, context) => {
    let contents = {
        __type: "Crawler",
        Classifiers: undefined,
        Configuration: undefined,
        CrawlElapsedTime: undefined,
        CrawlerSecurityConfiguration: undefined,
        CreationTime: undefined,
        DatabaseName: undefined,
        Description: undefined,
        LastCrawl: undefined,
        LastUpdated: undefined,
        Name: undefined,
        Role: undefined,
        Schedule: undefined,
        SchemaChangePolicy: undefined,
        State: undefined,
        TablePrefix: undefined,
        Targets: undefined,
        Version: undefined
    };
    if (output.Classifiers !== undefined && output.Classifiers !== null) {
        contents.Classifiers = deserializeAws_json1_1ClassifierNameList(output.Classifiers, context);
    }
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = output.Configuration;
    }
    if (output.CrawlElapsedTime !== undefined &&
        output.CrawlElapsedTime !== null) {
        contents.CrawlElapsedTime = output.CrawlElapsedTime;
    }
    if (output.CrawlerSecurityConfiguration !== undefined &&
        output.CrawlerSecurityConfiguration !== null) {
        contents.CrawlerSecurityConfiguration = output.CrawlerSecurityConfiguration;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LastCrawl !== undefined && output.LastCrawl !== null) {
        contents.LastCrawl = deserializeAws_json1_1LastCrawlInfo(output.LastCrawl, context);
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Role !== undefined && output.Role !== null) {
        contents.Role = output.Role;
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = deserializeAws_json1_1Schedule(output.Schedule, context);
    }
    if (output.SchemaChangePolicy !== undefined &&
        output.SchemaChangePolicy !== null) {
        contents.SchemaChangePolicy = deserializeAws_json1_1SchemaChangePolicy(output.SchemaChangePolicy, context);
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.TablePrefix !== undefined && output.TablePrefix !== null) {
        contents.TablePrefix = output.TablePrefix;
    }
    if (output.Targets !== undefined && output.Targets !== null) {
        contents.Targets = deserializeAws_json1_1CrawlerTargets(output.Targets, context);
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1CrawlerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Crawler(entry, context));
};
const deserializeAws_json1_1CrawlerMetrics = (output, context) => {
    let contents = {
        __type: "CrawlerMetrics",
        CrawlerName: undefined,
        LastRuntimeSeconds: undefined,
        MedianRuntimeSeconds: undefined,
        StillEstimating: undefined,
        TablesCreated: undefined,
        TablesDeleted: undefined,
        TablesUpdated: undefined,
        TimeLeftSeconds: undefined
    };
    if (output.CrawlerName !== undefined && output.CrawlerName !== null) {
        contents.CrawlerName = output.CrawlerName;
    }
    if (output.LastRuntimeSeconds !== undefined &&
        output.LastRuntimeSeconds !== null) {
        contents.LastRuntimeSeconds = output.LastRuntimeSeconds;
    }
    if (output.MedianRuntimeSeconds !== undefined &&
        output.MedianRuntimeSeconds !== null) {
        contents.MedianRuntimeSeconds = output.MedianRuntimeSeconds;
    }
    if (output.StillEstimating !== undefined && output.StillEstimating !== null) {
        contents.StillEstimating = output.StillEstimating;
    }
    if (output.TablesCreated !== undefined && output.TablesCreated !== null) {
        contents.TablesCreated = output.TablesCreated;
    }
    if (output.TablesDeleted !== undefined && output.TablesDeleted !== null) {
        contents.TablesDeleted = output.TablesDeleted;
    }
    if (output.TablesUpdated !== undefined && output.TablesUpdated !== null) {
        contents.TablesUpdated = output.TablesUpdated;
    }
    if (output.TimeLeftSeconds !== undefined && output.TimeLeftSeconds !== null) {
        contents.TimeLeftSeconds = output.TimeLeftSeconds;
    }
    return contents;
};
const deserializeAws_json1_1CrawlerMetricsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CrawlerMetrics(entry, context));
};
const deserializeAws_json1_1CrawlerNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CrawlerNotRunningException = (output, context) => {
    let contents = {
        __type: "CrawlerNotRunningException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CrawlerRunningException = (output, context) => {
    let contents = {
        __type: "CrawlerRunningException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CrawlerStoppingException = (output, context) => {
    let contents = {
        __type: "CrawlerStoppingException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CrawlerTargets = (output, context) => {
    let contents = {
        __type: "CrawlerTargets",
        CatalogTargets: undefined,
        DynamoDBTargets: undefined,
        JdbcTargets: undefined,
        S3Targets: undefined
    };
    if (output.CatalogTargets !== undefined && output.CatalogTargets !== null) {
        contents.CatalogTargets = deserializeAws_json1_1CatalogTargetList(output.CatalogTargets, context);
    }
    if (output.DynamoDBTargets !== undefined && output.DynamoDBTargets !== null) {
        contents.DynamoDBTargets = deserializeAws_json1_1DynamoDBTargetList(output.DynamoDBTargets, context);
    }
    if (output.JdbcTargets !== undefined && output.JdbcTargets !== null) {
        contents.JdbcTargets = deserializeAws_json1_1JdbcTargetList(output.JdbcTargets, context);
    }
    if (output.S3Targets !== undefined && output.S3Targets !== null) {
        contents.S3Targets = deserializeAws_json1_1S3TargetList(output.S3Targets, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateClassifierResponse = (output, context) => {
    let contents = {
        __type: "CreateClassifierResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateCrawlerResponse = (output, context) => {
    let contents = {
        __type: "CreateCrawlerResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateScriptResponse = (output, context) => {
    let contents = {
        __type: "CreateScriptResponse",
        PythonScript: undefined,
        ScalaCode: undefined
    };
    if (output.PythonScript !== undefined && output.PythonScript !== null) {
        contents.PythonScript = output.PythonScript;
    }
    if (output.ScalaCode !== undefined && output.ScalaCode !== null) {
        contents.ScalaCode = output.ScalaCode;
    }
    return contents;
};
const deserializeAws_json1_1CsvClassifier = (output, context) => {
    let contents = {
        __type: "CsvClassifier",
        AllowSingleColumn: undefined,
        ContainsHeader: undefined,
        CreationTime: undefined,
        Delimiter: undefined,
        DisableValueTrimming: undefined,
        Header: undefined,
        LastUpdated: undefined,
        Name: undefined,
        QuoteSymbol: undefined,
        Version: undefined
    };
    if (output.AllowSingleColumn !== undefined &&
        output.AllowSingleColumn !== null) {
        contents.AllowSingleColumn = output.AllowSingleColumn;
    }
    if (output.ContainsHeader !== undefined && output.ContainsHeader !== null) {
        contents.ContainsHeader = output.ContainsHeader;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Delimiter !== undefined && output.Delimiter !== null) {
        contents.Delimiter = output.Delimiter;
    }
    if (output.DisableValueTrimming !== undefined &&
        output.DisableValueTrimming !== null) {
        contents.DisableValueTrimming = output.DisableValueTrimming;
    }
    if (output.Header !== undefined && output.Header !== null) {
        contents.Header = deserializeAws_json1_1CsvHeader(output.Header, context);
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.QuoteSymbol !== undefined && output.QuoteSymbol !== null) {
        contents.QuoteSymbol = output.QuoteSymbol;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1CsvHeader = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DagEdges = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CodeGenEdge(entry, context));
};
const deserializeAws_json1_1DagNodes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CodeGenNode(entry, context));
};
const deserializeAws_json1_1DeleteClassifierResponse = (output, context) => {
    let contents = {
        __type: "DeleteClassifierResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteCrawlerResponse = (output, context) => {
    let contents = {
        __type: "DeleteCrawlerResponse"
    };
    return contents;
};
const deserializeAws_json1_1DynamoDBTarget = (output, context) => {
    let contents = {
        __type: "DynamoDBTarget",
        Path: undefined
    };
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    return contents;
};
const deserializeAws_json1_1DynamoDBTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DynamoDBTarget(entry, context));
};
const deserializeAws_json1_1GetClassifierResponse = (output, context) => {
    let contents = {
        __type: "GetClassifierResponse",
        Classifier: undefined
    };
    if (output.Classifier !== undefined && output.Classifier !== null) {
        contents.Classifier = deserializeAws_json1_1Classifier(output.Classifier, context);
    }
    return contents;
};
const deserializeAws_json1_1GetClassifiersResponse = (output, context) => {
    let contents = {
        __type: "GetClassifiersResponse",
        Classifiers: undefined,
        NextToken: undefined
    };
    if (output.Classifiers !== undefined && output.Classifiers !== null) {
        contents.Classifiers = deserializeAws_json1_1ClassifierList(output.Classifiers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetCrawlerMetricsResponse = (output, context) => {
    let contents = {
        __type: "GetCrawlerMetricsResponse",
        CrawlerMetricsList: undefined,
        NextToken: undefined
    };
    if (output.CrawlerMetricsList !== undefined &&
        output.CrawlerMetricsList !== null) {
        contents.CrawlerMetricsList = deserializeAws_json1_1CrawlerMetricsList(output.CrawlerMetricsList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetCrawlerResponse = (output, context) => {
    let contents = {
        __type: "GetCrawlerResponse",
        Crawler: undefined
    };
    if (output.Crawler !== undefined && output.Crawler !== null) {
        contents.Crawler = deserializeAws_json1_1Crawler(output.Crawler, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCrawlersResponse = (output, context) => {
    let contents = {
        __type: "GetCrawlersResponse",
        Crawlers: undefined,
        NextToken: undefined
    };
    if (output.Crawlers !== undefined && output.Crawlers !== null) {
        contents.Crawlers = deserializeAws_json1_1CrawlerList(output.Crawlers, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetDataflowGraphResponse = (output, context) => {
    let contents = {
        __type: "GetDataflowGraphResponse",
        DagEdges: undefined,
        DagNodes: undefined
    };
    if (output.DagEdges !== undefined && output.DagEdges !== null) {
        contents.DagEdges = deserializeAws_json1_1DagEdges(output.DagEdges, context);
    }
    if (output.DagNodes !== undefined && output.DagNodes !== null) {
        contents.DagNodes = deserializeAws_json1_1DagNodes(output.DagNodes, context);
    }
    return contents;
};
const deserializeAws_json1_1GetMappingResponse = (output, context) => {
    let contents = {
        __type: "GetMappingResponse",
        Mapping: undefined
    };
    if (output.Mapping !== undefined && output.Mapping !== null) {
        contents.Mapping = deserializeAws_json1_1MappingList(output.Mapping, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPlanResponse = (output, context) => {
    let contents = {
        __type: "GetPlanResponse",
        PythonScript: undefined,
        ScalaCode: undefined
    };
    if (output.PythonScript !== undefined && output.PythonScript !== null) {
        contents.PythonScript = output.PythonScript;
    }
    if (output.ScalaCode !== undefined && output.ScalaCode !== null) {
        contents.ScalaCode = output.ScalaCode;
    }
    return contents;
};
const deserializeAws_json1_1GrokClassifier = (output, context) => {
    let contents = {
        __type: "GrokClassifier",
        Classification: undefined,
        CreationTime: undefined,
        CustomPatterns: undefined,
        GrokPattern: undefined,
        LastUpdated: undefined,
        Name: undefined,
        Version: undefined
    };
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.CustomPatterns !== undefined && output.CustomPatterns !== null) {
        contents.CustomPatterns = output.CustomPatterns;
    }
    if (output.GrokPattern !== undefined && output.GrokPattern !== null) {
        contents.GrokPattern = output.GrokPattern;
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1JdbcTarget = (output, context) => {
    let contents = {
        __type: "JdbcTarget",
        ConnectionName: undefined,
        Exclusions: undefined,
        Path: undefined
    };
    if (output.ConnectionName !== undefined && output.ConnectionName !== null) {
        contents.ConnectionName = output.ConnectionName;
    }
    if (output.Exclusions !== undefined && output.Exclusions !== null) {
        contents.Exclusions = deserializeAws_json1_1PathList(output.Exclusions, context);
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    return contents;
};
const deserializeAws_json1_1JdbcTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1JdbcTarget(entry, context));
};
const deserializeAws_json1_1JsonClassifier = (output, context) => {
    let contents = {
        __type: "JsonClassifier",
        CreationTime: undefined,
        JsonPath: undefined,
        LastUpdated: undefined,
        Name: undefined,
        Version: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.JsonPath !== undefined && output.JsonPath !== null) {
        contents.JsonPath = output.JsonPath;
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1LastCrawlInfo = (output, context) => {
    let contents = {
        __type: "LastCrawlInfo",
        ErrorMessage: undefined,
        LogGroup: undefined,
        LogStream: undefined,
        MessagePrefix: undefined,
        StartTime: undefined,
        Status: undefined
    };
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.LogGroup !== undefined && output.LogGroup !== null) {
        contents.LogGroup = output.LogGroup;
    }
    if (output.LogStream !== undefined && output.LogStream !== null) {
        contents.LogStream = output.LogStream;
    }
    if (output.MessagePrefix !== undefined && output.MessagePrefix !== null) {
        contents.MessagePrefix = output.MessagePrefix;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ListCrawlersResponse = (output, context) => {
    let contents = {
        __type: "ListCrawlersResponse",
        CrawlerNames: undefined,
        NextToken: undefined
    };
    if (output.CrawlerNames !== undefined && output.CrawlerNames !== null) {
        contents.CrawlerNames = deserializeAws_json1_1CrawlerNameList(output.CrawlerNames, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MappingEntry = (output, context) => {
    let contents = {
        __type: "MappingEntry",
        SourcePath: undefined,
        SourceTable: undefined,
        SourceType: undefined,
        TargetPath: undefined,
        TargetTable: undefined,
        TargetType: undefined
    };
    if (output.SourcePath !== undefined && output.SourcePath !== null) {
        contents.SourcePath = output.SourcePath;
    }
    if (output.SourceTable !== undefined && output.SourceTable !== null) {
        contents.SourceTable = output.SourceTable;
    }
    if (output.SourceType !== undefined && output.SourceType !== null) {
        contents.SourceType = output.SourceType;
    }
    if (output.TargetPath !== undefined && output.TargetPath !== null) {
        contents.TargetPath = output.TargetPath;
    }
    if (output.TargetTable !== undefined && output.TargetTable !== null) {
        contents.TargetTable = output.TargetTable;
    }
    if (output.TargetType !== undefined && output.TargetType !== null) {
        contents.TargetType = output.TargetType;
    }
    return contents;
};
const deserializeAws_json1_1MappingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MappingEntry(entry, context));
};
const deserializeAws_json1_1NoScheduleException = (output, context) => {
    let contents = {
        __type: "NoScheduleException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PathList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1S3Target = (output, context) => {
    let contents = {
        __type: "S3Target",
        Exclusions: undefined,
        Path: undefined
    };
    if (output.Exclusions !== undefined && output.Exclusions !== null) {
        contents.Exclusions = deserializeAws_json1_1PathList(output.Exclusions, context);
    }
    if (output.Path !== undefined && output.Path !== null) {
        contents.Path = output.Path;
    }
    return contents;
};
const deserializeAws_json1_1S3TargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1S3Target(entry, context));
};
const deserializeAws_json1_1Schedule = (output, context) => {
    let contents = {
        __type: "Schedule",
        ScheduleExpression: undefined,
        State: undefined
    };
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1SchedulerNotRunningException = (output, context) => {
    let contents = {
        __type: "SchedulerNotRunningException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SchedulerRunningException = (output, context) => {
    let contents = {
        __type: "SchedulerRunningException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SchedulerTransitioningException = (output, context) => {
    let contents = {
        __type: "SchedulerTransitioningException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SchemaChangePolicy = (output, context) => {
    let contents = {
        __type: "SchemaChangePolicy",
        DeleteBehavior: undefined,
        UpdateBehavior: undefined
    };
    if (output.DeleteBehavior !== undefined && output.DeleteBehavior !== null) {
        contents.DeleteBehavior = output.DeleteBehavior;
    }
    if (output.UpdateBehavior !== undefined && output.UpdateBehavior !== null) {
        contents.UpdateBehavior = output.UpdateBehavior;
    }
    return contents;
};
const deserializeAws_json1_1StartCrawlerResponse = (output, context) => {
    let contents = {
        __type: "StartCrawlerResponse"
    };
    return contents;
};
const deserializeAws_json1_1StartCrawlerScheduleResponse = (output, context) => {
    let contents = {
        __type: "StartCrawlerScheduleResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopCrawlerResponse = (output, context) => {
    let contents = {
        __type: "StopCrawlerResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopCrawlerScheduleResponse = (output, context) => {
    let contents = {
        __type: "StopCrawlerScheduleResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateClassifierResponse = (output, context) => {
    let contents = {
        __type: "UpdateClassifierResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateCrawlerResponse = (output, context) => {
    let contents = {
        __type: "UpdateCrawlerResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateCrawlerScheduleResponse = (output, context) => {
    let contents = {
        __type: "UpdateCrawlerScheduleResponse"
    };
    return contents;
};
const deserializeAws_json1_1XMLClassifier = (output, context) => {
    let contents = {
        __type: "XMLClassifier",
        Classification: undefined,
        CreationTime: undefined,
        LastUpdated: undefined,
        Name: undefined,
        RowTag: undefined,
        Version: undefined
    };
    if (output.Classification !== undefined && output.Classification !== null) {
        contents.Classification = output.Classification;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
        contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RowTag !== undefined && output.RowTag !== null) {
        contents.RowTag = output.RowTag;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
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