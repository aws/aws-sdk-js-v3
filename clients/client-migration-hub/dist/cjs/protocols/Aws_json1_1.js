"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssociateCreatedArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.AssociateCreatedArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateCreatedArtifactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateCreatedArtifactCommand = serializeAws_json1_1AssociateCreatedArtifactCommand;
async function serializeAws_json1_1AssociateDiscoveredResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.AssociateDiscoveredResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDiscoveredResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateDiscoveredResourceCommand = serializeAws_json1_1AssociateDiscoveredResourceCommand;
async function serializeAws_json1_1CreateProgressUpdateStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.CreateProgressUpdateStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProgressUpdateStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProgressUpdateStreamCommand = serializeAws_json1_1CreateProgressUpdateStreamCommand;
async function serializeAws_json1_1DeleteProgressUpdateStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.DeleteProgressUpdateStream";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProgressUpdateStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteProgressUpdateStreamCommand = serializeAws_json1_1DeleteProgressUpdateStreamCommand;
async function serializeAws_json1_1DescribeApplicationStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.DescribeApplicationState";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeApplicationStateCommand = serializeAws_json1_1DescribeApplicationStateCommand;
async function serializeAws_json1_1DescribeMigrationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.DescribeMigrationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMigrationTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMigrationTaskCommand = serializeAws_json1_1DescribeMigrationTaskCommand;
async function serializeAws_json1_1DisassociateCreatedArtifactCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.DisassociateCreatedArtifact";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateCreatedArtifactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateCreatedArtifactCommand = serializeAws_json1_1DisassociateCreatedArtifactCommand;
async function serializeAws_json1_1DisassociateDiscoveredResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.DisassociateDiscoveredResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDiscoveredResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateDiscoveredResourceCommand = serializeAws_json1_1DisassociateDiscoveredResourceCommand;
async function serializeAws_json1_1ImportMigrationTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ImportMigrationTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportMigrationTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportMigrationTaskCommand = serializeAws_json1_1ImportMigrationTaskCommand;
async function serializeAws_json1_1ListApplicationStatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ListApplicationStates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationStatesCommand = serializeAws_json1_1ListApplicationStatesCommand;
async function serializeAws_json1_1ListCreatedArtifactsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ListCreatedArtifacts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCreatedArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCreatedArtifactsCommand = serializeAws_json1_1ListCreatedArtifactsCommand;
async function serializeAws_json1_1ListDiscoveredResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ListDiscoveredResources";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDiscoveredResourcesCommand = serializeAws_json1_1ListDiscoveredResourcesCommand;
async function serializeAws_json1_1ListMigrationTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ListMigrationTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMigrationTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListMigrationTasksCommand = serializeAws_json1_1ListMigrationTasksCommand;
async function serializeAws_json1_1ListProgressUpdateStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.ListProgressUpdateStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProgressUpdateStreamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListProgressUpdateStreamsCommand = serializeAws_json1_1ListProgressUpdateStreamsCommand;
async function serializeAws_json1_1NotifyApplicationStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.NotifyApplicationState";
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyApplicationStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1NotifyApplicationStateCommand = serializeAws_json1_1NotifyApplicationStateCommand;
async function serializeAws_json1_1NotifyMigrationTaskStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.NotifyMigrationTaskState";
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyMigrationTaskStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1NotifyMigrationTaskStateCommand = serializeAws_json1_1NotifyMigrationTaskStateCommand;
async function serializeAws_json1_1PutResourceAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AWSMigrationHub.PutResourceAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourceAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutResourceAttributesCommand = serializeAws_json1_1PutResourceAttributesCommand;
async function deserializeAws_json1_1AssociateCreatedArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateCreatedArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateCreatedArtifactResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateCreatedArtifactResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateCreatedArtifactCommand = deserializeAws_json1_1AssociateCreatedArtifactCommand;
async function deserializeAws_json1_1AssociateCreatedArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AssociateDiscoveredResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateDiscoveredResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDiscoveredResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateDiscoveredResourceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateDiscoveredResourceCommand = deserializeAws_json1_1AssociateDiscoveredResourceCommand;
async function deserializeAws_json1_1AssociateDiscoveredResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyErrorException":
        case "com.amazon.aws.migration#PolicyErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateProgressUpdateStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProgressUpdateStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProgressUpdateStreamResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProgressUpdateStreamResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProgressUpdateStreamCommand = deserializeAws_json1_1CreateProgressUpdateStreamCommand;
async function deserializeAws_json1_1CreateProgressUpdateStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteProgressUpdateStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProgressUpdateStreamResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteProgressUpdateStreamResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteProgressUpdateStreamCommand = deserializeAws_json1_1DeleteProgressUpdateStreamCommand;
async function deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeApplicationStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeApplicationStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeApplicationStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeApplicationStateCommand = deserializeAws_json1_1DescribeApplicationStateCommand;
async function deserializeAws_json1_1DescribeApplicationStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyErrorException":
        case "com.amazon.aws.migration#PolicyErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMigrationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMigrationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMigrationTaskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMigrationTaskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMigrationTaskCommand = deserializeAws_json1_1DescribeMigrationTaskCommand;
async function deserializeAws_json1_1DescribeMigrationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateCreatedArtifactCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateCreatedArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateCreatedArtifactResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateCreatedArtifactResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateCreatedArtifactCommand = deserializeAws_json1_1DisassociateCreatedArtifactCommand;
async function deserializeAws_json1_1DisassociateCreatedArtifactCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DisassociateDiscoveredResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDiscoveredResourceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateDiscoveredResourceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateDiscoveredResourceCommand = deserializeAws_json1_1DisassociateDiscoveredResourceCommand;
async function deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ImportMigrationTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportMigrationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportMigrationTaskResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportMigrationTaskResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportMigrationTaskCommand = deserializeAws_json1_1ImportMigrationTaskCommand;
async function deserializeAws_json1_1ImportMigrationTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListApplicationStatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationStatesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationStatesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationStatesCommand = deserializeAws_json1_1ListApplicationStatesCommand;
async function deserializeAws_json1_1ListApplicationStatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListCreatedArtifactsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCreatedArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCreatedArtifactsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCreatedArtifactsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCreatedArtifactsCommand = deserializeAws_json1_1ListCreatedArtifactsCommand;
async function deserializeAws_json1_1ListCreatedArtifactsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDiscoveredResourcesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDiscoveredResourcesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = deserializeAws_json1_1ListDiscoveredResourcesCommand;
async function deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListMigrationTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListMigrationTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMigrationTasksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListMigrationTasksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListMigrationTasksCommand = deserializeAws_json1_1ListMigrationTasksCommand;
async function deserializeAws_json1_1ListMigrationTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyErrorException":
        case "com.amazon.aws.migration#PolicyErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListProgressUpdateStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListProgressUpdateStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProgressUpdateStreamsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListProgressUpdateStreamsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListProgressUpdateStreamsCommand = deserializeAws_json1_1ListProgressUpdateStreamsCommand;
async function deserializeAws_json1_1ListProgressUpdateStreamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1NotifyApplicationStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1NotifyApplicationStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyApplicationStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "NotifyApplicationStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1NotifyApplicationStateCommand = deserializeAws_json1_1NotifyApplicationStateCommand;
async function deserializeAws_json1_1NotifyApplicationStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PolicyErrorException":
        case "com.amazon.aws.migration#PolicyErrorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1NotifyMigrationTaskStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1NotifyMigrationTaskStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyMigrationTaskStateResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "NotifyMigrationTaskStateResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1NotifyMigrationTaskStateCommand = deserializeAws_json1_1NotifyMigrationTaskStateCommand;
async function deserializeAws_json1_1NotifyMigrationTaskStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutResourceAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutResourceAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourceAttributesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutResourceAttributesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutResourceAttributesCommand = deserializeAws_json1_1PutResourceAttributesCommand;
async function deserializeAws_json1_1PutResourceAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.aws.migration#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DryRunOperation":
        case "com.amazon.aws.migration#DryRunOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HomeRegionNotSetException":
        case "com.amazon.aws.migration#HomeRegionNotSetException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazon.aws.migration#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazon.aws.migration#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.aws.migration#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceUnavailableException":
        case "com.amazon.aws.migration#ServiceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedOperation":
        case "com.amazon.aws.migration#UnauthorizedOperation":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
const deserializeAws_json1_1DryRunOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DryRunOperation(body, context);
    const contents = Object.assign({ name: "DryRunOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HomeRegionNotSetException(body, context);
    const contents = Object.assign({ name: "HomeRegionNotSetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PolicyErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyErrorException(body, context);
    const contents = Object.assign({ name: "PolicyErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
const deserializeAws_json1_1UnauthorizedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedOperation(body, context);
    const contents = Object.assign({ name: "UnauthorizedOperation", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1ApplicationIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssociateCreatedArtifactRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatedArtifact !== undefined) {
        bodyParams["CreatedArtifact"] = serializeAws_json1_1CreatedArtifact(input.CreatedArtifact, context);
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateDiscoveredResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DiscoveredResource !== undefined) {
        bodyParams["DiscoveredResource"] = serializeAws_json1_1DiscoveredResource(input.DiscoveredResource, context);
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProgressUpdateStreamRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.ProgressUpdateStreamName !== undefined) {
        bodyParams["ProgressUpdateStreamName"] = input.ProgressUpdateStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatedArtifact = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteProgressUpdateStreamRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.ProgressUpdateStreamName !== undefined) {
        bodyParams["ProgressUpdateStreamName"] = input.ProgressUpdateStreamName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeApplicationStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationId !== undefined) {
        bodyParams["ApplicationId"] = input.ApplicationId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMigrationTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateCreatedArtifactRequest = (input, context) => {
    const bodyParams = {};
    if (input.CreatedArtifactName !== undefined) {
        bodyParams["CreatedArtifactName"] = input.CreatedArtifactName;
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateDiscoveredResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationId !== undefined) {
        bodyParams["ConfigurationId"] = input.ConfigurationId;
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1DiscoveredResource = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationId !== undefined) {
        bodyParams["ConfigurationId"] = input.ConfigurationId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    return bodyParams;
};
const serializeAws_json1_1ImportMigrationTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationStatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationIds !== undefined) {
        bodyParams["ApplicationIds"] = serializeAws_json1_1ApplicationIds(input.ApplicationIds, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCreatedArtifactsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDiscoveredResourcesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    return bodyParams;
};
const serializeAws_json1_1ListMigrationTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceName !== undefined) {
        bodyParams["ResourceName"] = input.ResourceName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListProgressUpdateStreamsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NotifyApplicationStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.ApplicationId !== undefined) {
        bodyParams["ApplicationId"] = input.ApplicationId;
    }
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.UpdateDateTime !== undefined) {
        bodyParams["UpdateDateTime"] = Math.round(input.UpdateDateTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1NotifyMigrationTaskStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.NextUpdateSeconds !== undefined) {
        bodyParams["NextUpdateSeconds"] = input.NextUpdateSeconds;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    if (input.Task !== undefined) {
        bodyParams["Task"] = serializeAws_json1_1Task(input.Task, context);
    }
    if (input.UpdateDateTime !== undefined) {
        bodyParams["UpdateDateTime"] = Math.round(input.UpdateDateTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1PutResourceAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.DryRun !== undefined) {
        bodyParams["DryRun"] = input.DryRun;
    }
    if (input.MigrationTaskName !== undefined) {
        bodyParams["MigrationTaskName"] = input.MigrationTaskName;
    }
    if (input.ProgressUpdateStream !== undefined) {
        bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
    }
    if (input.ResourceAttributeList !== undefined) {
        bodyParams["ResourceAttributeList"] = serializeAws_json1_1ResourceAttributeList(input.ResourceAttributeList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceAttribute = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Task = (input, context) => {
    const bodyParams = {};
    if (input.ProgressPercent !== undefined) {
        bodyParams["ProgressPercent"] = input.ProgressPercent;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.StatusDetail !== undefined) {
        bodyParams["StatusDetail"] = input.StatusDetail;
    }
    return bodyParams;
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
const deserializeAws_json1_1ApplicationState = (output, context) => {
    let contents = {
        __type: "ApplicationState",
        ApplicationId: undefined,
        ApplicationStatus: undefined,
        LastUpdatedTime: undefined
    };
    if (output.ApplicationId !== undefined && output.ApplicationId !== null) {
        contents.ApplicationId = output.ApplicationId;
    }
    if (output.ApplicationStatus !== undefined &&
        output.ApplicationStatus !== null) {
        contents.ApplicationStatus = output.ApplicationStatus;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ApplicationStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApplicationState(entry, context));
};
const deserializeAws_json1_1AssociateCreatedArtifactResult = (output, context) => {
    let contents = {
        __type: "AssociateCreatedArtifactResult"
    };
    return contents;
};
const deserializeAws_json1_1AssociateDiscoveredResourceResult = (output, context) => {
    let contents = {
        __type: "AssociateDiscoveredResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1CreateProgressUpdateStreamResult = (output, context) => {
    let contents = {
        __type: "CreateProgressUpdateStreamResult"
    };
    return contents;
};
const deserializeAws_json1_1CreatedArtifact = (output, context) => {
    let contents = {
        __type: "CreatedArtifact",
        Description: undefined,
        Name: undefined
    };
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CreatedArtifactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CreatedArtifact(entry, context));
};
const deserializeAws_json1_1DeleteProgressUpdateStreamResult = (output, context) => {
    let contents = {
        __type: "DeleteProgressUpdateStreamResult"
    };
    return contents;
};
const deserializeAws_json1_1DescribeApplicationStateResult = (output, context) => {
    let contents = {
        __type: "DescribeApplicationStateResult",
        ApplicationStatus: undefined,
        LastUpdatedTime: undefined
    };
    if (output.ApplicationStatus !== undefined &&
        output.ApplicationStatus !== null) {
        contents.ApplicationStatus = output.ApplicationStatus;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DescribeMigrationTaskResult = (output, context) => {
    let contents = {
        __type: "DescribeMigrationTaskResult",
        MigrationTask: undefined
    };
    if (output.MigrationTask !== undefined && output.MigrationTask !== null) {
        contents.MigrationTask = deserializeAws_json1_1MigrationTask(output.MigrationTask, context);
    }
    return contents;
};
const deserializeAws_json1_1DisassociateCreatedArtifactResult = (output, context) => {
    let contents = {
        __type: "DisassociateCreatedArtifactResult"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateDiscoveredResourceResult = (output, context) => {
    let contents = {
        __type: "DisassociateDiscoveredResourceResult"
    };
    return contents;
};
const deserializeAws_json1_1DiscoveredResource = (output, context) => {
    let contents = {
        __type: "DiscoveredResource",
        ConfigurationId: undefined,
        Description: undefined
    };
    if (output.ConfigurationId !== undefined && output.ConfigurationId !== null) {
        contents.ConfigurationId = output.ConfigurationId;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    return contents;
};
const deserializeAws_json1_1DiscoveredResourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DiscoveredResource(entry, context));
};
const deserializeAws_json1_1DryRunOperation = (output, context) => {
    let contents = {
        __type: "DryRunOperation",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1HomeRegionNotSetException = (output, context) => {
    let contents = {
        __type: "HomeRegionNotSetException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ImportMigrationTaskResult = (output, context) => {
    let contents = {
        __type: "ImportMigrationTaskResult"
    };
    return contents;
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
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
const deserializeAws_json1_1LatestResourceAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceAttribute(entry, context));
};
const deserializeAws_json1_1ListApplicationStatesResult = (output, context) => {
    let contents = {
        __type: "ListApplicationStatesResult",
        ApplicationStateList: undefined,
        NextToken: undefined
    };
    if (output.ApplicationStateList !== undefined &&
        output.ApplicationStateList !== null) {
        contents.ApplicationStateList = deserializeAws_json1_1ApplicationStateList(output.ApplicationStateList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListCreatedArtifactsResult = (output, context) => {
    let contents = {
        __type: "ListCreatedArtifactsResult",
        CreatedArtifactList: undefined,
        NextToken: undefined
    };
    if (output.CreatedArtifactList !== undefined &&
        output.CreatedArtifactList !== null) {
        contents.CreatedArtifactList = deserializeAws_json1_1CreatedArtifactList(output.CreatedArtifactList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDiscoveredResourcesResult = (output, context) => {
    let contents = {
        __type: "ListDiscoveredResourcesResult",
        DiscoveredResourceList: undefined,
        NextToken: undefined
    };
    if (output.DiscoveredResourceList !== undefined &&
        output.DiscoveredResourceList !== null) {
        contents.DiscoveredResourceList = deserializeAws_json1_1DiscoveredResourceList(output.DiscoveredResourceList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListMigrationTasksResult = (output, context) => {
    let contents = {
        __type: "ListMigrationTasksResult",
        MigrationTaskSummaryList: undefined,
        NextToken: undefined
    };
    if (output.MigrationTaskSummaryList !== undefined &&
        output.MigrationTaskSummaryList !== null) {
        contents.MigrationTaskSummaryList = deserializeAws_json1_1MigrationTaskSummaryList(output.MigrationTaskSummaryList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListProgressUpdateStreamsResult = (output, context) => {
    let contents = {
        __type: "ListProgressUpdateStreamsResult",
        NextToken: undefined,
        ProgressUpdateStreamSummaryList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ProgressUpdateStreamSummaryList !== undefined &&
        output.ProgressUpdateStreamSummaryList !== null) {
        contents.ProgressUpdateStreamSummaryList = deserializeAws_json1_1ProgressUpdateStreamSummaryList(output.ProgressUpdateStreamSummaryList, context);
    }
    return contents;
};
const deserializeAws_json1_1MigrationTask = (output, context) => {
    let contents = {
        __type: "MigrationTask",
        MigrationTaskName: undefined,
        ProgressUpdateStream: undefined,
        ResourceAttributeList: undefined,
        Task: undefined,
        UpdateDateTime: undefined
    };
    if (output.MigrationTaskName !== undefined &&
        output.MigrationTaskName !== null) {
        contents.MigrationTaskName = output.MigrationTaskName;
    }
    if (output.ProgressUpdateStream !== undefined &&
        output.ProgressUpdateStream !== null) {
        contents.ProgressUpdateStream = output.ProgressUpdateStream;
    }
    if (output.ResourceAttributeList !== undefined &&
        output.ResourceAttributeList !== null) {
        contents.ResourceAttributeList = deserializeAws_json1_1LatestResourceAttributeList(output.ResourceAttributeList, context);
    }
    if (output.Task !== undefined && output.Task !== null) {
        contents.Task = deserializeAws_json1_1Task(output.Task, context);
    }
    if (output.UpdateDateTime !== undefined && output.UpdateDateTime !== null) {
        contents.UpdateDateTime = new Date(Math.round(output.UpdateDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1MigrationTaskSummary = (output, context) => {
    let contents = {
        __type: "MigrationTaskSummary",
        MigrationTaskName: undefined,
        ProgressPercent: undefined,
        ProgressUpdateStream: undefined,
        Status: undefined,
        StatusDetail: undefined,
        UpdateDateTime: undefined
    };
    if (output.MigrationTaskName !== undefined &&
        output.MigrationTaskName !== null) {
        contents.MigrationTaskName = output.MigrationTaskName;
    }
    if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
        contents.ProgressPercent = output.ProgressPercent;
    }
    if (output.ProgressUpdateStream !== undefined &&
        output.ProgressUpdateStream !== null) {
        contents.ProgressUpdateStream = output.ProgressUpdateStream;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
        contents.StatusDetail = output.StatusDetail;
    }
    if (output.UpdateDateTime !== undefined && output.UpdateDateTime !== null) {
        contents.UpdateDateTime = new Date(Math.round(output.UpdateDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1MigrationTaskSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MigrationTaskSummary(entry, context));
};
const deserializeAws_json1_1NotifyApplicationStateResult = (output, context) => {
    let contents = {
        __type: "NotifyApplicationStateResult"
    };
    return contents;
};
const deserializeAws_json1_1NotifyMigrationTaskStateResult = (output, context) => {
    let contents = {
        __type: "NotifyMigrationTaskStateResult"
    };
    return contents;
};
const deserializeAws_json1_1PolicyErrorException = (output, context) => {
    let contents = {
        __type: "PolicyErrorException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ProgressUpdateStreamSummary = (output, context) => {
    let contents = {
        __type: "ProgressUpdateStreamSummary",
        ProgressUpdateStreamName: undefined
    };
    if (output.ProgressUpdateStreamName !== undefined &&
        output.ProgressUpdateStreamName !== null) {
        contents.ProgressUpdateStreamName = output.ProgressUpdateStreamName;
    }
    return contents;
};
const deserializeAws_json1_1ProgressUpdateStreamSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProgressUpdateStreamSummary(entry, context));
};
const deserializeAws_json1_1PutResourceAttributesResult = (output, context) => {
    let contents = {
        __type: "PutResourceAttributesResult"
    };
    return contents;
};
const deserializeAws_json1_1ResourceAttribute = (output, context) => {
    let contents = {
        __type: "ResourceAttribute",
        Type: undefined,
        Value: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
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
const deserializeAws_json1_1Task = (output, context) => {
    let contents = {
        __type: "Task",
        ProgressPercent: undefined,
        Status: undefined,
        StatusDetail: undefined
    };
    if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
        contents.ProgressPercent = output.ProgressPercent;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
        contents.StatusDetail = output.StatusDetail;
    }
    return contents;
};
const deserializeAws_json1_1UnauthorizedOperation = (output, context) => {
    let contents = {
        __type: "UnauthorizedOperation",
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