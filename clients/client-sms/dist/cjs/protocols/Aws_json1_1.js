"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.CreateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAppCommand = serializeAws_json1_1CreateAppCommand;
async function serializeAws_json1_1CreateReplicationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.CreateReplicationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateReplicationJobCommand = serializeAws_json1_1CreateReplicationJobCommand;
async function serializeAws_json1_1DeleteAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.DeleteApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAppCommand = serializeAws_json1_1DeleteAppCommand;
async function serializeAws_json1_1DeleteAppLaunchConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAppLaunchConfigurationCommand = serializeAws_json1_1DeleteAppLaunchConfigurationCommand;
async function serializeAws_json1_1DeleteAppReplicationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAppReplicationConfigurationCommand = serializeAws_json1_1DeleteAppReplicationConfigurationCommand;
async function serializeAws_json1_1DeleteReplicationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteReplicationJobCommand = serializeAws_json1_1DeleteReplicationJobCommand;
async function serializeAws_json1_1DeleteServerCatalogCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServerCatalogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServerCatalogCommand = serializeAws_json1_1DeleteServerCatalogCommand;
async function serializeAws_json1_1DisassociateConnectorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.DisassociateConnector";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConnectorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateConnectorCommand = serializeAws_json1_1DisassociateConnectorCommand;
async function serializeAws_json1_1GenerateChangeSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GenerateChangeSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateChangeSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateChangeSetCommand = serializeAws_json1_1GenerateChangeSetCommand;
async function serializeAws_json1_1GenerateTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GenerateTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateTemplateCommand = serializeAws_json1_1GenerateTemplateCommand;
async function serializeAws_json1_1GetAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.GetApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAppCommand = serializeAws_json1_1GetAppCommand;
async function serializeAws_json1_1GetAppLaunchConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAppLaunchConfigurationCommand = serializeAws_json1_1GetAppLaunchConfigurationCommand;
async function serializeAws_json1_1GetAppReplicationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAppReplicationConfigurationCommand = serializeAws_json1_1GetAppReplicationConfigurationCommand;
async function serializeAws_json1_1GetConnectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GetConnectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetConnectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetConnectorsCommand = serializeAws_json1_1GetConnectorsCommand;
async function serializeAws_json1_1GetReplicationJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GetReplicationJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReplicationJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetReplicationJobsCommand = serializeAws_json1_1GetReplicationJobsCommand;
async function serializeAws_json1_1GetReplicationRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.GetReplicationRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetReplicationRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetReplicationRunsCommand = serializeAws_json1_1GetReplicationRunsCommand;
async function serializeAws_json1_1GetServersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.GetServers";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetServersCommand = serializeAws_json1_1GetServersCommand;
async function serializeAws_json1_1ImportServerCatalogCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.ImportServerCatalog";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportServerCatalogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportServerCatalogCommand = serializeAws_json1_1ImportServerCatalogCommand;
async function serializeAws_json1_1LaunchAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.LaunchApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1LaunchAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1LaunchAppCommand = serializeAws_json1_1LaunchAppCommand;
async function serializeAws_json1_1ListAppsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.ListApps";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAppsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAppsCommand = serializeAws_json1_1ListAppsCommand;
async function serializeAws_json1_1PutAppLaunchConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppLaunchConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAppLaunchConfigurationCommand = serializeAws_json1_1PutAppLaunchConfigurationCommand;
async function serializeAws_json1_1PutAppReplicationConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppReplicationConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAppReplicationConfigurationCommand = serializeAws_json1_1PutAppReplicationConfigurationCommand;
async function serializeAws_json1_1StartAppReplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.StartAppReplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAppReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAppReplicationCommand = serializeAws_json1_1StartAppReplicationCommand;
async function serializeAws_json1_1StartOnDemandReplicationRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartOnDemandReplicationRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartOnDemandReplicationRunCommand = serializeAws_json1_1StartOnDemandReplicationRunCommand;
async function serializeAws_json1_1StopAppReplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.StopAppReplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAppReplicationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopAppReplicationCommand = serializeAws_json1_1StopAppReplicationCommand;
async function serializeAws_json1_1TerminateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.TerminateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TerminateAppCommand = serializeAws_json1_1TerminateAppCommand;
async function serializeAws_json1_1UpdateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSServerMigrationService_V2016_10_24.UpdateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAppCommand = serializeAws_json1_1UpdateAppCommand;
async function serializeAws_json1_1UpdateReplicationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateReplicationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateReplicationJobCommand = serializeAws_json1_1UpdateReplicationJobCommand;
async function deserializeAws_json1_1CreateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAppCommand = deserializeAws_json1_1CreateAppCommand;
async function deserializeAws_json1_1CreateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateReplicationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateReplicationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateReplicationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateReplicationJobCommand = deserializeAws_json1_1CreateReplicationJobCommand;
async function deserializeAws_json1_1CreateReplicationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoConnectorsAvailableException":
        case "com.amazonaws.servermigration.V2016_10_24#NoConnectorsAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationJobAlreadyExistsException":
        case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerCannotBeReplicatedException":
        case "com.amazonaws.servermigration.V2016_10_24#ServerCannotBeReplicatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemporarilyUnavailableException":
        case "com.amazonaws.servermigration.V2016_10_24#TemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAppCommand = deserializeAws_json1_1DeleteAppCommand;
async function deserializeAws_json1_1DeleteAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAppLaunchConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppLaunchConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAppLaunchConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = deserializeAws_json1_1DeleteAppLaunchConfigurationCommand;
async function deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAppReplicationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAppReplicationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAppReplicationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = deserializeAws_json1_1DeleteAppReplicationConfigurationCommand;
async function deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteReplicationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteReplicationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteReplicationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteReplicationJobCommand = deserializeAws_json1_1DeleteReplicationJobCommand;
async function deserializeAws_json1_1DeleteReplicationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationJobNotFoundException":
        case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteServerCatalogCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServerCatalogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServerCatalogResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServerCatalogResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServerCatalogCommand = deserializeAws_json1_1DeleteServerCatalogCommand;
async function deserializeAws_json1_1DeleteServerCatalogCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateConnectorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateConnectorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateConnectorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateConnectorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateConnectorCommand = deserializeAws_json1_1DisassociateConnectorCommand;
async function deserializeAws_json1_1DisassociateConnectorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GenerateChangeSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateChangeSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateChangeSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateChangeSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateChangeSetCommand = deserializeAws_json1_1GenerateChangeSetCommand;
async function deserializeAws_json1_1GenerateChangeSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GenerateTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateTemplateCommand = deserializeAws_json1_1GenerateTemplateCommand;
async function deserializeAws_json1_1GenerateTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAppCommand = deserializeAws_json1_1GetAppCommand;
async function deserializeAws_json1_1GetAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAppLaunchConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppLaunchConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAppLaunchConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAppLaunchConfigurationCommand = deserializeAws_json1_1GetAppLaunchConfigurationCommand;
async function deserializeAws_json1_1GetAppLaunchConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAppReplicationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppReplicationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAppReplicationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAppReplicationConfigurationCommand = deserializeAws_json1_1GetAppReplicationConfigurationCommand;
async function deserializeAws_json1_1GetAppReplicationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetConnectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetConnectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetConnectorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetConnectorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetConnectorsCommand = deserializeAws_json1_1GetConnectorsCommand;
async function deserializeAws_json1_1GetConnectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetReplicationJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetReplicationJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReplicationJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReplicationJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetReplicationJobsCommand = deserializeAws_json1_1GetReplicationJobsCommand;
async function deserializeAws_json1_1GetReplicationJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetReplicationRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetReplicationRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetReplicationRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetReplicationRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetReplicationRunsCommand = deserializeAws_json1_1GetReplicationRunsCommand;
async function deserializeAws_json1_1GetReplicationRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetServersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetServersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetServersCommand = deserializeAws_json1_1GetServersCommand;
async function deserializeAws_json1_1GetServersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ImportServerCatalogCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportServerCatalogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportServerCatalogResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportServerCatalogResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportServerCatalogCommand = deserializeAws_json1_1ImportServerCatalogCommand;
async function deserializeAws_json1_1ImportServerCatalogCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoConnectorsAvailableException":
        case "com.amazonaws.servermigration.V2016_10_24#NoConnectorsAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1LaunchAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1LaunchAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LaunchAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LaunchAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1LaunchAppCommand = deserializeAws_json1_1LaunchAppCommand;
async function deserializeAws_json1_1LaunchAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAppsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAppsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAppsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAppsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAppsCommand = deserializeAws_json1_1ListAppsCommand;
async function deserializeAws_json1_1ListAppsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutAppLaunchConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAppLaunchConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppLaunchConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAppLaunchConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAppLaunchConfigurationCommand = deserializeAws_json1_1PutAppLaunchConfigurationCommand;
async function deserializeAws_json1_1PutAppLaunchConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutAppReplicationConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAppReplicationConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppReplicationConfigurationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAppReplicationConfigurationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAppReplicationConfigurationCommand = deserializeAws_json1_1PutAppReplicationConfigurationCommand;
async function deserializeAws_json1_1PutAppReplicationConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartAppReplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAppReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAppReplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAppReplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAppReplicationCommand = deserializeAws_json1_1StartAppReplicationCommand;
async function deserializeAws_json1_1StartAppReplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartOnDemandReplicationRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartOnDemandReplicationRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartOnDemandReplicationRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartOnDemandReplicationRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartOnDemandReplicationRunCommand = deserializeAws_json1_1StartOnDemandReplicationRunCommand;
async function deserializeAws_json1_1StartOnDemandReplicationRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationRunLimitExceededException":
        case "com.amazonaws.servermigration.V2016_10_24#ReplicationRunLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopAppReplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopAppReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopAppReplicationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopAppReplicationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopAppReplicationCommand = deserializeAws_json1_1StopAppReplicationCommand;
async function deserializeAws_json1_1StopAppReplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1TerminateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TerminateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TerminateAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TerminateAppCommand = deserializeAws_json1_1TerminateAppCommand;
async function deserializeAws_json1_1TerminateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAppResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAppResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAppCommand = deserializeAws_json1_1UpdateAppCommand;
async function deserializeAws_json1_1UpdateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateReplicationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateReplicationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateReplicationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateReplicationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateReplicationJobCommand = deserializeAws_json1_1UpdateReplicationJobCommand;
async function deserializeAws_json1_1UpdateReplicationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalError":
        case "com.amazonaws.servermigration.V2016_10_24#InternalError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.servermigration.V2016_10_24#MissingRequiredParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.servermigration.V2016_10_24#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ReplicationJobNotFoundException":
        case "com.amazonaws.servermigration.V2016_10_24#ReplicationJobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerCannotBeReplicatedException":
        case "com.amazonaws.servermigration.V2016_10_24#ServerCannotBeReplicatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TemporarilyUnavailableException":
        case "com.amazonaws.servermigration.V2016_10_24#TemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.servermigration.V2016_10_24#UnauthorizedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1InternalErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalError(body, context);
    const contents = Object.assign({ name: "InternalError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MissingRequiredParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingRequiredParameterException(body, context);
    const contents = Object.assign({ name: "MissingRequiredParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoConnectorsAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoConnectorsAvailableException(body, context);
    const contents = Object.assign({ name: "NoConnectorsAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationJobAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ReplicationJobAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationJobNotFoundException(body, context);
    const contents = Object.assign({ name: "ReplicationJobNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReplicationRunLimitExceededException(body, context);
    const contents = Object.assign({ name: "ReplicationRunLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerCannotBeReplicatedException(body, context);
    const contents = Object.assign({ name: "ServerCannotBeReplicatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TemporarilyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TemporarilyUnavailableException(body, context);
    const contents = Object.assign({ name: "TemporarilyUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnauthorizedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedOperationException(body, context);
    const contents = Object.assign({ name: "UnauthorizedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AppIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.roleName !== undefined) {
        bodyParams["roleName"] = input.roleName;
    }
    if (input.serverGroups !== undefined) {
        bodyParams["serverGroups"] = serializeAws_json1_1ServerGroups(input.serverGroups, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateReplicationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.encrypted !== undefined) {
        bodyParams["encrypted"] = input.encrypted;
    }
    if (input.frequency !== undefined) {
        bodyParams["frequency"] = input.frequency;
    }
    if (input.kmsKeyId !== undefined) {
        bodyParams["kmsKeyId"] = input.kmsKeyId;
    }
    if (input.licenseType !== undefined) {
        bodyParams["licenseType"] = input.licenseType;
    }
    if (input.numberOfRecentAmisToKeep !== undefined) {
        bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
    }
    if (input.roleName !== undefined) {
        bodyParams["roleName"] = input.roleName;
    }
    if (input.runOnce !== undefined) {
        bodyParams["runOnce"] = input.runOnce;
    }
    if (input.seedReplicationTime !== undefined) {
        bodyParams["seedReplicationTime"] = Math.round(input.seedReplicationTime.getTime() / 1000);
    }
    if (input.serverId !== undefined) {
        bodyParams["serverId"] = input.serverId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAppLaunchConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAppReplicationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.forceStopAppReplication !== undefined) {
        bodyParams["forceStopAppReplication"] = input.forceStopAppReplication;
    }
    if (input.forceTerminateApp !== undefined) {
        bodyParams["forceTerminateApp"] = input.forceTerminateApp;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteReplicationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServerCatalogRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DisassociateConnectorRequest = (input, context) => {
    const bodyParams = {};
    if (input.connectorId !== undefined) {
        bodyParams["connectorId"] = input.connectorId;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateChangeSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.changesetFormat !== undefined) {
        bodyParams["changesetFormat"] = input.changesetFormat;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.templateFormat !== undefined) {
        bodyParams["templateFormat"] = input.templateFormat;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAppLaunchConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAppReplicationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetConnectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetReplicationJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetReplicationRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetServersRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.vmServerAddressList !== undefined) {
        bodyParams["vmServerAddressList"] = serializeAws_json1_1VmServerAddressList(input.vmServerAddressList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ImportServerCatalogRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1LaunchAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAppsRequest = (input, context) => {
    const bodyParams = {};
    if (input.appIds !== undefined) {
        bodyParams["appIds"] = serializeAws_json1_1AppIds(input.appIds, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1PutAppLaunchConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.roleName !== undefined) {
        bodyParams["roleName"] = input.roleName;
    }
    if (input.serverGroupLaunchConfigurations !== undefined) {
        bodyParams["serverGroupLaunchConfigurations"] = serializeAws_json1_1ServerGroupLaunchConfigurations(input.serverGroupLaunchConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutAppReplicationConfigurationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.serverGroupReplicationConfigurations !== undefined) {
        bodyParams["serverGroupReplicationConfigurations"] = serializeAws_json1_1ServerGroupReplicationConfigurations(input.serverGroupReplicationConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Location = (input, context) => {
    const bodyParams = {};
    if (input.bucket !== undefined) {
        bodyParams["bucket"] = input.bucket;
    }
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    return bodyParams;
};
const serializeAws_json1_1Server = (input, context) => {
    const bodyParams = {};
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    if (input.replicationJobTerminated !== undefined) {
        bodyParams["replicationJobTerminated"] = input.replicationJobTerminated;
    }
    if (input.serverId !== undefined) {
        bodyParams["serverId"] = input.serverId;
    }
    if (input.serverType !== undefined) {
        bodyParams["serverType"] = input.serverType;
    }
    if (input.vmServer !== undefined) {
        bodyParams["vmServer"] = serializeAws_json1_1VmServer(input.vmServer, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServerGroup = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.serverGroupId !== undefined) {
        bodyParams["serverGroupId"] = input.serverGroupId;
    }
    if (input.serverList !== undefined) {
        bodyParams["serverList"] = serializeAws_json1_1ServerList(input.serverList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServerGroupLaunchConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.launchOrder !== undefined) {
        bodyParams["launchOrder"] = input.launchOrder;
    }
    if (input.serverGroupId !== undefined) {
        bodyParams["serverGroupId"] = input.serverGroupId;
    }
    if (input.serverLaunchConfigurations !== undefined) {
        bodyParams["serverLaunchConfigurations"] = serializeAws_json1_1ServerLaunchConfigurations(input.serverLaunchConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServerGroupLaunchConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerGroupLaunchConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerGroupReplicationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.serverGroupId !== undefined) {
        bodyParams["serverGroupId"] = input.serverGroupId;
    }
    if (input.serverReplicationConfigurations !== undefined) {
        bodyParams["serverReplicationConfigurations"] = serializeAws_json1_1ServerReplicationConfigurations(input.serverReplicationConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServerGroupReplicationConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerGroupReplicationConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerGroups = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerGroup(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerLaunchConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.associatePublicIpAddress !== undefined) {
        bodyParams["associatePublicIpAddress"] = input.associatePublicIpAddress;
    }
    if (input.ec2KeyName !== undefined) {
        bodyParams["ec2KeyName"] = input.ec2KeyName;
    }
    if (input.instanceType !== undefined) {
        bodyParams["instanceType"] = input.instanceType;
    }
    if (input.logicalId !== undefined) {
        bodyParams["logicalId"] = input.logicalId;
    }
    if (input.securityGroup !== undefined) {
        bodyParams["securityGroup"] = input.securityGroup;
    }
    if (input.server !== undefined) {
        bodyParams["server"] = serializeAws_json1_1Server(input.server, context);
    }
    if (input.subnet !== undefined) {
        bodyParams["subnet"] = input.subnet;
    }
    if (input.userData !== undefined) {
        bodyParams["userData"] = serializeAws_json1_1UserData(input.userData, context);
    }
    if (input.vpc !== undefined) {
        bodyParams["vpc"] = input.vpc;
    }
    return bodyParams;
};
const serializeAws_json1_1ServerLaunchConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerLaunchConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Server(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerReplicationConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.server !== undefined) {
        bodyParams["server"] = serializeAws_json1_1Server(input.server, context);
    }
    if (input.serverReplicationParameters !== undefined) {
        bodyParams["serverReplicationParameters"] = serializeAws_json1_1ServerReplicationParameters(input.serverReplicationParameters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ServerReplicationConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerReplicationConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServerReplicationParameters = (input, context) => {
    const bodyParams = {};
    if (input.encrypted !== undefined) {
        bodyParams["encrypted"] = input.encrypted;
    }
    if (input.frequency !== undefined) {
        bodyParams["frequency"] = input.frequency;
    }
    if (input.kmsKeyId !== undefined) {
        bodyParams["kmsKeyId"] = input.kmsKeyId;
    }
    if (input.licenseType !== undefined) {
        bodyParams["licenseType"] = input.licenseType;
    }
    if (input.numberOfRecentAmisToKeep !== undefined) {
        bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
    }
    if (input.runOnce !== undefined) {
        bodyParams["runOnce"] = input.runOnce;
    }
    if (input.seedTime !== undefined) {
        bodyParams["seedTime"] = Math.round(input.seedTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1StartAppReplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartOnDemandReplicationRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopAppReplicationRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
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
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TerminateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.appId !== undefined) {
        bodyParams["appId"] = input.appId;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.roleName !== undefined) {
        bodyParams["roleName"] = input.roleName;
    }
    if (input.serverGroups !== undefined) {
        bodyParams["serverGroups"] = serializeAws_json1_1ServerGroups(input.serverGroups, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateReplicationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.encrypted !== undefined) {
        bodyParams["encrypted"] = input.encrypted;
    }
    if (input.frequency !== undefined) {
        bodyParams["frequency"] = input.frequency;
    }
    if (input.kmsKeyId !== undefined) {
        bodyParams["kmsKeyId"] = input.kmsKeyId;
    }
    if (input.licenseType !== undefined) {
        bodyParams["licenseType"] = input.licenseType;
    }
    if (input.nextReplicationRunStartTime !== undefined) {
        bodyParams["nextReplicationRunStartTime"] = Math.round(input.nextReplicationRunStartTime.getTime() / 1000);
    }
    if (input.numberOfRecentAmisToKeep !== undefined) {
        bodyParams["numberOfRecentAmisToKeep"] = input.numberOfRecentAmisToKeep;
    }
    if (input.replicationJobId !== undefined) {
        bodyParams["replicationJobId"] = input.replicationJobId;
    }
    if (input.roleName !== undefined) {
        bodyParams["roleName"] = input.roleName;
    }
    return bodyParams;
};
const serializeAws_json1_1UserData = (input, context) => {
    const bodyParams = {};
    if (input.s3Location !== undefined) {
        bodyParams["s3Location"] = serializeAws_json1_1S3Location(input.s3Location, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VmServer = (input, context) => {
    const bodyParams = {};
    if (input.vmManagerName !== undefined) {
        bodyParams["vmManagerName"] = input.vmManagerName;
    }
    if (input.vmManagerType !== undefined) {
        bodyParams["vmManagerType"] = input.vmManagerType;
    }
    if (input.vmName !== undefined) {
        bodyParams["vmName"] = input.vmName;
    }
    if (input.vmPath !== undefined) {
        bodyParams["vmPath"] = input.vmPath;
    }
    if (input.vmServerAddress !== undefined) {
        bodyParams["vmServerAddress"] = serializeAws_json1_1VmServerAddress(input.vmServerAddress, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VmServerAddress = (input, context) => {
    const bodyParams = {};
    if (input.vmId !== undefined) {
        bodyParams["vmId"] = input.vmId;
    }
    if (input.vmManagerId !== undefined) {
        bodyParams["vmManagerId"] = input.vmManagerId;
    }
    return bodyParams;
};
const serializeAws_json1_1VmServerAddressList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VmServerAddress(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AppSummary = (output, context) => {
    let contents = {
        __type: "AppSummary",
        appId: undefined,
        creationTime: undefined,
        description: undefined,
        lastModified: undefined,
        latestReplicationTime: undefined,
        launchDetails: undefined,
        launchStatus: undefined,
        launchStatusMessage: undefined,
        name: undefined,
        replicationStatus: undefined,
        replicationStatusMessage: undefined,
        roleName: undefined,
        status: undefined,
        statusMessage: undefined,
        totalServerGroups: undefined,
        totalServers: undefined
    };
    if (output.appId !== undefined && output.appId !== null) {
        contents.appId = output.appId;
    }
    if (output.creationTime !== undefined && output.creationTime !== null) {
        contents.creationTime = new Date(Math.round(output.creationTime * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.lastModified !== undefined && output.lastModified !== null) {
        contents.lastModified = new Date(Math.round(output.lastModified * 1000));
    }
    if (output.latestReplicationTime !== undefined &&
        output.latestReplicationTime !== null) {
        contents.latestReplicationTime = new Date(Math.round(output.latestReplicationTime * 1000));
    }
    if (output.launchDetails !== undefined && output.launchDetails !== null) {
        contents.launchDetails = deserializeAws_json1_1LaunchDetails(output.launchDetails, context);
    }
    if (output.launchStatus !== undefined && output.launchStatus !== null) {
        contents.launchStatus = output.launchStatus;
    }
    if (output.launchStatusMessage !== undefined &&
        output.launchStatusMessage !== null) {
        contents.launchStatusMessage = output.launchStatusMessage;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.replicationStatus !== undefined &&
        output.replicationStatus !== null) {
        contents.replicationStatus = output.replicationStatus;
    }
    if (output.replicationStatusMessage !== undefined &&
        output.replicationStatusMessage !== null) {
        contents.replicationStatusMessage = output.replicationStatusMessage;
    }
    if (output.roleName !== undefined && output.roleName !== null) {
        contents.roleName = output.roleName;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusMessage !== undefined && output.statusMessage !== null) {
        contents.statusMessage = output.statusMessage;
    }
    if (output.totalServerGroups !== undefined &&
        output.totalServerGroups !== null) {
        contents.totalServerGroups = output.totalServerGroups;
    }
    if (output.totalServers !== undefined && output.totalServers !== null) {
        contents.totalServers = output.totalServers;
    }
    return contents;
};
const deserializeAws_json1_1Apps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AppSummary(entry, context));
};
const deserializeAws_json1_1Connector = (output, context) => {
    let contents = {
        __type: "Connector",
        associatedOn: undefined,
        capabilityList: undefined,
        connectorId: undefined,
        ipAddress: undefined,
        macAddress: undefined,
        status: undefined,
        version: undefined,
        vmManagerId: undefined,
        vmManagerName: undefined,
        vmManagerType: undefined
    };
    if (output.associatedOn !== undefined && output.associatedOn !== null) {
        contents.associatedOn = new Date(Math.round(output.associatedOn * 1000));
    }
    if (output.capabilityList !== undefined && output.capabilityList !== null) {
        contents.capabilityList = deserializeAws_json1_1ConnectorCapabilityList(output.capabilityList, context);
    }
    if (output.connectorId !== undefined && output.connectorId !== null) {
        contents.connectorId = output.connectorId;
    }
    if (output.ipAddress !== undefined && output.ipAddress !== null) {
        contents.ipAddress = output.ipAddress;
    }
    if (output.macAddress !== undefined && output.macAddress !== null) {
        contents.macAddress = output.macAddress;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    if (output.vmManagerId !== undefined && output.vmManagerId !== null) {
        contents.vmManagerId = output.vmManagerId;
    }
    if (output.vmManagerName !== undefined && output.vmManagerName !== null) {
        contents.vmManagerName = output.vmManagerName;
    }
    if (output.vmManagerType !== undefined && output.vmManagerType !== null) {
        contents.vmManagerType = output.vmManagerType;
    }
    return contents;
};
const deserializeAws_json1_1ConnectorCapabilityList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ConnectorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Connector(entry, context));
};
const deserializeAws_json1_1CreateAppResponse = (output, context) => {
    let contents = {
        __type: "CreateAppResponse",
        appSummary: undefined,
        serverGroups: undefined,
        tags: undefined
    };
    if (output.appSummary !== undefined && output.appSummary !== null) {
        contents.appSummary = deserializeAws_json1_1AppSummary(output.appSummary, context);
    }
    if (output.serverGroups !== undefined && output.serverGroups !== null) {
        contents.serverGroups = deserializeAws_json1_1ServerGroups(output.serverGroups, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateReplicationJobResponse = (output, context) => {
    let contents = {
        __type: "CreateReplicationJobResponse",
        replicationJobId: undefined
    };
    if (output.replicationJobId !== undefined &&
        output.replicationJobId !== null) {
        contents.replicationJobId = output.replicationJobId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteAppLaunchConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteAppLaunchConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteAppReplicationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "DeleteAppReplicationConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteAppResponse = (output, context) => {
    let contents = {
        __type: "DeleteAppResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteReplicationJobResponse = (output, context) => {
    let contents = {
        __type: "DeleteReplicationJobResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteServerCatalogResponse = (output, context) => {
    let contents = {
        __type: "DeleteServerCatalogResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateConnectorResponse = (output, context) => {
    let contents = {
        __type: "DisassociateConnectorResponse"
    };
    return contents;
};
const deserializeAws_json1_1GenerateChangeSetResponse = (output, context) => {
    let contents = {
        __type: "GenerateChangeSetResponse",
        s3Location: undefined
    };
    if (output.s3Location !== undefined && output.s3Location !== null) {
        contents.s3Location = deserializeAws_json1_1S3Location(output.s3Location, context);
    }
    return contents;
};
const deserializeAws_json1_1GenerateTemplateResponse = (output, context) => {
    let contents = {
        __type: "GenerateTemplateResponse",
        s3Location: undefined
    };
    if (output.s3Location !== undefined && output.s3Location !== null) {
        contents.s3Location = deserializeAws_json1_1S3Location(output.s3Location, context);
    }
    return contents;
};
const deserializeAws_json1_1GetAppLaunchConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetAppLaunchConfigurationResponse",
        appId: undefined,
        roleName: undefined,
        serverGroupLaunchConfigurations: undefined
    };
    if (output.appId !== undefined && output.appId !== null) {
        contents.appId = output.appId;
    }
    if (output.roleName !== undefined && output.roleName !== null) {
        contents.roleName = output.roleName;
    }
    if (output.serverGroupLaunchConfigurations !== undefined &&
        output.serverGroupLaunchConfigurations !== null) {
        contents.serverGroupLaunchConfigurations = deserializeAws_json1_1ServerGroupLaunchConfigurations(output.serverGroupLaunchConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetAppReplicationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "GetAppReplicationConfigurationResponse",
        serverGroupReplicationConfigurations: undefined
    };
    if (output.serverGroupReplicationConfigurations !== undefined &&
        output.serverGroupReplicationConfigurations !== null) {
        contents.serverGroupReplicationConfigurations = deserializeAws_json1_1ServerGroupReplicationConfigurations(output.serverGroupReplicationConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1GetAppResponse = (output, context) => {
    let contents = {
        __type: "GetAppResponse",
        appSummary: undefined,
        serverGroups: undefined,
        tags: undefined
    };
    if (output.appSummary !== undefined && output.appSummary !== null) {
        contents.appSummary = deserializeAws_json1_1AppSummary(output.appSummary, context);
    }
    if (output.serverGroups !== undefined && output.serverGroups !== null) {
        contents.serverGroups = deserializeAws_json1_1ServerGroups(output.serverGroups, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1GetConnectorsResponse = (output, context) => {
    let contents = {
        __type: "GetConnectorsResponse",
        connectorList: undefined,
        nextToken: undefined
    };
    if (output.connectorList !== undefined && output.connectorList !== null) {
        contents.connectorList = deserializeAws_json1_1ConnectorList(output.connectorList, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1GetReplicationJobsResponse = (output, context) => {
    let contents = {
        __type: "GetReplicationJobsResponse",
        nextToken: undefined,
        replicationJobList: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.replicationJobList !== undefined &&
        output.replicationJobList !== null) {
        contents.replicationJobList = deserializeAws_json1_1ReplicationJobList(output.replicationJobList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetReplicationRunsResponse = (output, context) => {
    let contents = {
        __type: "GetReplicationRunsResponse",
        nextToken: undefined,
        replicationJob: undefined,
        replicationRunList: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.replicationJob !== undefined && output.replicationJob !== null) {
        contents.replicationJob = deserializeAws_json1_1ReplicationJob(output.replicationJob, context);
    }
    if (output.replicationRunList !== undefined &&
        output.replicationRunList !== null) {
        contents.replicationRunList = deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context);
    }
    return contents;
};
const deserializeAws_json1_1GetServersResponse = (output, context) => {
    let contents = {
        __type: "GetServersResponse",
        lastModifiedOn: undefined,
        nextToken: undefined,
        serverCatalogStatus: undefined,
        serverList: undefined
    };
    if (output.lastModifiedOn !== undefined && output.lastModifiedOn !== null) {
        contents.lastModifiedOn = new Date(Math.round(output.lastModifiedOn * 1000));
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.serverCatalogStatus !== undefined &&
        output.serverCatalogStatus !== null) {
        contents.serverCatalogStatus = output.serverCatalogStatus;
    }
    if (output.serverList !== undefined && output.serverList !== null) {
        contents.serverList = deserializeAws_json1_1ServerList(output.serverList, context);
    }
    return contents;
};
const deserializeAws_json1_1ImportServerCatalogResponse = (output, context) => {
    let contents = {
        __type: "ImportServerCatalogResponse"
    };
    return contents;
};
const deserializeAws_json1_1InternalError = (output, context) => {
    let contents = {
        __type: "InternalError",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
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
const deserializeAws_json1_1LaunchAppResponse = (output, context) => {
    let contents = {
        __type: "LaunchAppResponse"
    };
    return contents;
};
const deserializeAws_json1_1LaunchDetails = (output, context) => {
    let contents = {
        __type: "LaunchDetails",
        latestLaunchTime: undefined,
        stackId: undefined,
        stackName: undefined
    };
    if (output.latestLaunchTime !== undefined &&
        output.latestLaunchTime !== null) {
        contents.latestLaunchTime = new Date(Math.round(output.latestLaunchTime * 1000));
    }
    if (output.stackId !== undefined && output.stackId !== null) {
        contents.stackId = output.stackId;
    }
    if (output.stackName !== undefined && output.stackName !== null) {
        contents.stackName = output.stackName;
    }
    return contents;
};
const deserializeAws_json1_1ListAppsResponse = (output, context) => {
    let contents = {
        __type: "ListAppsResponse",
        apps: undefined,
        nextToken: undefined
    };
    if (output.apps !== undefined && output.apps !== null) {
        contents.apps = deserializeAws_json1_1Apps(output.apps, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1MissingRequiredParameterException = (output, context) => {
    let contents = {
        __type: "MissingRequiredParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NoConnectorsAvailableException = (output, context) => {
    let contents = {
        __type: "NoConnectorsAvailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
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
const deserializeAws_json1_1PutAppLaunchConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutAppLaunchConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1PutAppReplicationConfigurationResponse = (output, context) => {
    let contents = {
        __type: "PutAppReplicationConfigurationResponse"
    };
    return contents;
};
const deserializeAws_json1_1ReplicationJob = (output, context) => {
    let contents = {
        __type: "ReplicationJob",
        description: undefined,
        encrypted: undefined,
        frequency: undefined,
        kmsKeyId: undefined,
        latestAmiId: undefined,
        licenseType: undefined,
        nextReplicationRunStartTime: undefined,
        numberOfRecentAmisToKeep: undefined,
        replicationJobId: undefined,
        replicationRunList: undefined,
        roleName: undefined,
        runOnce: undefined,
        seedReplicationTime: undefined,
        serverId: undefined,
        serverType: undefined,
        state: undefined,
        statusMessage: undefined,
        vmServer: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.encrypted !== undefined && output.encrypted !== null) {
        contents.encrypted = output.encrypted;
    }
    if (output.frequency !== undefined && output.frequency !== null) {
        contents.frequency = output.frequency;
    }
    if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
        contents.kmsKeyId = output.kmsKeyId;
    }
    if (output.latestAmiId !== undefined && output.latestAmiId !== null) {
        contents.latestAmiId = output.latestAmiId;
    }
    if (output.licenseType !== undefined && output.licenseType !== null) {
        contents.licenseType = output.licenseType;
    }
    if (output.nextReplicationRunStartTime !== undefined &&
        output.nextReplicationRunStartTime !== null) {
        contents.nextReplicationRunStartTime = new Date(Math.round(output.nextReplicationRunStartTime * 1000));
    }
    if (output.numberOfRecentAmisToKeep !== undefined &&
        output.numberOfRecentAmisToKeep !== null) {
        contents.numberOfRecentAmisToKeep = output.numberOfRecentAmisToKeep;
    }
    if (output.replicationJobId !== undefined &&
        output.replicationJobId !== null) {
        contents.replicationJobId = output.replicationJobId;
    }
    if (output.replicationRunList !== undefined &&
        output.replicationRunList !== null) {
        contents.replicationRunList = deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context);
    }
    if (output.roleName !== undefined && output.roleName !== null) {
        contents.roleName = output.roleName;
    }
    if (output.runOnce !== undefined && output.runOnce !== null) {
        contents.runOnce = output.runOnce;
    }
    if (output.seedReplicationTime !== undefined &&
        output.seedReplicationTime !== null) {
        contents.seedReplicationTime = new Date(Math.round(output.seedReplicationTime * 1000));
    }
    if (output.serverId !== undefined && output.serverId !== null) {
        contents.serverId = output.serverId;
    }
    if (output.serverType !== undefined && output.serverType !== null) {
        contents.serverType = output.serverType;
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.statusMessage !== undefined && output.statusMessage !== null) {
        contents.statusMessage = output.statusMessage;
    }
    if (output.vmServer !== undefined && output.vmServer !== null) {
        contents.vmServer = deserializeAws_json1_1VmServer(output.vmServer, context);
    }
    return contents;
};
const deserializeAws_json1_1ReplicationJobAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ReplicationJobAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationJobList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationJob(entry, context));
};
const deserializeAws_json1_1ReplicationJobNotFoundException = (output, context) => {
    let contents = {
        __type: "ReplicationJobNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationRun = (output, context) => {
    let contents = {
        __type: "ReplicationRun",
        amiId: undefined,
        completedTime: undefined,
        description: undefined,
        encrypted: undefined,
        kmsKeyId: undefined,
        replicationRunId: undefined,
        scheduledStartTime: undefined,
        stageDetails: undefined,
        state: undefined,
        statusMessage: undefined,
        type: undefined
    };
    if (output.amiId !== undefined && output.amiId !== null) {
        contents.amiId = output.amiId;
    }
    if (output.completedTime !== undefined && output.completedTime !== null) {
        contents.completedTime = new Date(Math.round(output.completedTime * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.encrypted !== undefined && output.encrypted !== null) {
        contents.encrypted = output.encrypted;
    }
    if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
        contents.kmsKeyId = output.kmsKeyId;
    }
    if (output.replicationRunId !== undefined &&
        output.replicationRunId !== null) {
        contents.replicationRunId = output.replicationRunId;
    }
    if (output.scheduledStartTime !== undefined &&
        output.scheduledStartTime !== null) {
        contents.scheduledStartTime = new Date(Math.round(output.scheduledStartTime * 1000));
    }
    if (output.stageDetails !== undefined && output.stageDetails !== null) {
        contents.stageDetails = deserializeAws_json1_1ReplicationRunStageDetails(output.stageDetails, context);
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.statusMessage !== undefined && output.statusMessage !== null) {
        contents.statusMessage = output.statusMessage;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationRunLimitExceededException = (output, context) => {
    let contents = {
        __type: "ReplicationRunLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ReplicationRunList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReplicationRun(entry, context));
};
const deserializeAws_json1_1ReplicationRunStageDetails = (output, context) => {
    let contents = {
        __type: "ReplicationRunStageDetails",
        stage: undefined,
        stageProgress: undefined
    };
    if (output.stage !== undefined && output.stage !== null) {
        contents.stage = output.stage;
    }
    if (output.stageProgress !== undefined && output.stageProgress !== null) {
        contents.stageProgress = output.stageProgress;
    }
    return contents;
};
const deserializeAws_json1_1S3Location = (output, context) => {
    let contents = {
        __type: "S3Location",
        bucket: undefined,
        key: undefined
    };
    if (output.bucket !== undefined && output.bucket !== null) {
        contents.bucket = output.bucket;
    }
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    return contents;
};
const deserializeAws_json1_1Server = (output, context) => {
    let contents = {
        __type: "Server",
        replicationJobId: undefined,
        replicationJobTerminated: undefined,
        serverId: undefined,
        serverType: undefined,
        vmServer: undefined
    };
    if (output.replicationJobId !== undefined &&
        output.replicationJobId !== null) {
        contents.replicationJobId = output.replicationJobId;
    }
    if (output.replicationJobTerminated !== undefined &&
        output.replicationJobTerminated !== null) {
        contents.replicationJobTerminated = output.replicationJobTerminated;
    }
    if (output.serverId !== undefined && output.serverId !== null) {
        contents.serverId = output.serverId;
    }
    if (output.serverType !== undefined && output.serverType !== null) {
        contents.serverType = output.serverType;
    }
    if (output.vmServer !== undefined && output.vmServer !== null) {
        contents.vmServer = deserializeAws_json1_1VmServer(output.vmServer, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerCannotBeReplicatedException = (output, context) => {
    let contents = {
        __type: "ServerCannotBeReplicatedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServerGroup = (output, context) => {
    let contents = {
        __type: "ServerGroup",
        name: undefined,
        serverGroupId: undefined,
        serverList: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.serverGroupId !== undefined && output.serverGroupId !== null) {
        contents.serverGroupId = output.serverGroupId;
    }
    if (output.serverList !== undefined && output.serverList !== null) {
        contents.serverList = deserializeAws_json1_1ServerList(output.serverList, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerGroupLaunchConfiguration = (output, context) => {
    let contents = {
        __type: "ServerGroupLaunchConfiguration",
        launchOrder: undefined,
        serverGroupId: undefined,
        serverLaunchConfigurations: undefined
    };
    if (output.launchOrder !== undefined && output.launchOrder !== null) {
        contents.launchOrder = output.launchOrder;
    }
    if (output.serverGroupId !== undefined && output.serverGroupId !== null) {
        contents.serverGroupId = output.serverGroupId;
    }
    if (output.serverLaunchConfigurations !== undefined &&
        output.serverLaunchConfigurations !== null) {
        contents.serverLaunchConfigurations = deserializeAws_json1_1ServerLaunchConfigurations(output.serverLaunchConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerGroupLaunchConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerGroupLaunchConfiguration(entry, context));
};
const deserializeAws_json1_1ServerGroupReplicationConfiguration = (output, context) => {
    let contents = {
        __type: "ServerGroupReplicationConfiguration",
        serverGroupId: undefined,
        serverReplicationConfigurations: undefined
    };
    if (output.serverGroupId !== undefined && output.serverGroupId !== null) {
        contents.serverGroupId = output.serverGroupId;
    }
    if (output.serverReplicationConfigurations !== undefined &&
        output.serverReplicationConfigurations !== null) {
        contents.serverReplicationConfigurations = deserializeAws_json1_1ServerReplicationConfigurations(output.serverReplicationConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerGroupReplicationConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerGroupReplicationConfiguration(entry, context));
};
const deserializeAws_json1_1ServerGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerGroup(entry, context));
};
const deserializeAws_json1_1ServerLaunchConfiguration = (output, context) => {
    let contents = {
        __type: "ServerLaunchConfiguration",
        associatePublicIpAddress: undefined,
        ec2KeyName: undefined,
        instanceType: undefined,
        logicalId: undefined,
        securityGroup: undefined,
        server: undefined,
        subnet: undefined,
        userData: undefined,
        vpc: undefined
    };
    if (output.associatePublicIpAddress !== undefined &&
        output.associatePublicIpAddress !== null) {
        contents.associatePublicIpAddress = output.associatePublicIpAddress;
    }
    if (output.ec2KeyName !== undefined && output.ec2KeyName !== null) {
        contents.ec2KeyName = output.ec2KeyName;
    }
    if (output.instanceType !== undefined && output.instanceType !== null) {
        contents.instanceType = output.instanceType;
    }
    if (output.logicalId !== undefined && output.logicalId !== null) {
        contents.logicalId = output.logicalId;
    }
    if (output.securityGroup !== undefined && output.securityGroup !== null) {
        contents.securityGroup = output.securityGroup;
    }
    if (output.server !== undefined && output.server !== null) {
        contents.server = deserializeAws_json1_1Server(output.server, context);
    }
    if (output.subnet !== undefined && output.subnet !== null) {
        contents.subnet = output.subnet;
    }
    if (output.userData !== undefined && output.userData !== null) {
        contents.userData = deserializeAws_json1_1UserData(output.userData, context);
    }
    if (output.vpc !== undefined && output.vpc !== null) {
        contents.vpc = output.vpc;
    }
    return contents;
};
const deserializeAws_json1_1ServerLaunchConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerLaunchConfiguration(entry, context));
};
const deserializeAws_json1_1ServerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Server(entry, context));
};
const deserializeAws_json1_1ServerReplicationConfiguration = (output, context) => {
    let contents = {
        __type: "ServerReplicationConfiguration",
        server: undefined,
        serverReplicationParameters: undefined
    };
    if (output.server !== undefined && output.server !== null) {
        contents.server = deserializeAws_json1_1Server(output.server, context);
    }
    if (output.serverReplicationParameters !== undefined &&
        output.serverReplicationParameters !== null) {
        contents.serverReplicationParameters = deserializeAws_json1_1ServerReplicationParameters(output.serverReplicationParameters, context);
    }
    return contents;
};
const deserializeAws_json1_1ServerReplicationConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerReplicationConfiguration(entry, context));
};
const deserializeAws_json1_1ServerReplicationParameters = (output, context) => {
    let contents = {
        __type: "ServerReplicationParameters",
        encrypted: undefined,
        frequency: undefined,
        kmsKeyId: undefined,
        licenseType: undefined,
        numberOfRecentAmisToKeep: undefined,
        runOnce: undefined,
        seedTime: undefined
    };
    if (output.encrypted !== undefined && output.encrypted !== null) {
        contents.encrypted = output.encrypted;
    }
    if (output.frequency !== undefined && output.frequency !== null) {
        contents.frequency = output.frequency;
    }
    if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
        contents.kmsKeyId = output.kmsKeyId;
    }
    if (output.licenseType !== undefined && output.licenseType !== null) {
        contents.licenseType = output.licenseType;
    }
    if (output.numberOfRecentAmisToKeep !== undefined &&
        output.numberOfRecentAmisToKeep !== null) {
        contents.numberOfRecentAmisToKeep = output.numberOfRecentAmisToKeep;
    }
    if (output.runOnce !== undefined && output.runOnce !== null) {
        contents.runOnce = output.runOnce;
    }
    if (output.seedTime !== undefined && output.seedTime !== null) {
        contents.seedTime = new Date(Math.round(output.seedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1StartAppReplicationResponse = (output, context) => {
    let contents = {
        __type: "StartAppReplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1StartOnDemandReplicationRunResponse = (output, context) => {
    let contents = {
        __type: "StartOnDemandReplicationRunResponse",
        replicationRunId: undefined
    };
    if (output.replicationRunId !== undefined &&
        output.replicationRunId !== null) {
        contents.replicationRunId = output.replicationRunId;
    }
    return contents;
};
const deserializeAws_json1_1StopAppReplicationResponse = (output, context) => {
    let contents = {
        __type: "StopAppReplicationResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        key: undefined,
        value: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TemporarilyUnavailableException = (output, context) => {
    let contents = {
        __type: "TemporarilyUnavailableException"
    };
    return contents;
};
const deserializeAws_json1_1TerminateAppResponse = (output, context) => {
    let contents = {
        __type: "TerminateAppResponse"
    };
    return contents;
};
const deserializeAws_json1_1UnauthorizedOperationException = (output, context) => {
    let contents = {
        __type: "UnauthorizedOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateAppResponse = (output, context) => {
    let contents = {
        __type: "UpdateAppResponse",
        appSummary: undefined,
        serverGroups: undefined,
        tags: undefined
    };
    if (output.appSummary !== undefined && output.appSummary !== null) {
        contents.appSummary = deserializeAws_json1_1AppSummary(output.appSummary, context);
    }
    if (output.serverGroups !== undefined && output.serverGroups !== null) {
        contents.serverGroups = deserializeAws_json1_1ServerGroups(output.serverGroups, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateReplicationJobResponse = (output, context) => {
    let contents = {
        __type: "UpdateReplicationJobResponse"
    };
    return contents;
};
const deserializeAws_json1_1UserData = (output, context) => {
    let contents = {
        __type: "UserData",
        s3Location: undefined
    };
    if (output.s3Location !== undefined && output.s3Location !== null) {
        contents.s3Location = deserializeAws_json1_1S3Location(output.s3Location, context);
    }
    return contents;
};
const deserializeAws_json1_1VmServer = (output, context) => {
    let contents = {
        __type: "VmServer",
        vmManagerName: undefined,
        vmManagerType: undefined,
        vmName: undefined,
        vmPath: undefined,
        vmServerAddress: undefined
    };
    if (output.vmManagerName !== undefined && output.vmManagerName !== null) {
        contents.vmManagerName = output.vmManagerName;
    }
    if (output.vmManagerType !== undefined && output.vmManagerType !== null) {
        contents.vmManagerType = output.vmManagerType;
    }
    if (output.vmName !== undefined && output.vmName !== null) {
        contents.vmName = output.vmName;
    }
    if (output.vmPath !== undefined && output.vmPath !== null) {
        contents.vmPath = output.vmPath;
    }
    if (output.vmServerAddress !== undefined && output.vmServerAddress !== null) {
        contents.vmServerAddress = deserializeAws_json1_1VmServerAddress(output.vmServerAddress, context);
    }
    return contents;
};
const deserializeAws_json1_1VmServerAddress = (output, context) => {
    let contents = {
        __type: "VmServerAddress",
        vmId: undefined,
        vmManagerId: undefined
    };
    if (output.vmId !== undefined && output.vmId !== null) {
        contents.vmId = output.vmId;
    }
    if (output.vmManagerId !== undefined && output.vmManagerId !== null) {
        contents.vmManagerId = output.vmManagerId;
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