"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CancelTaskExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CancelTaskExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelTaskExecutionCommand = serializeAws_json1_1CancelTaskExecutionCommand;
async function serializeAws_json1_1CreateAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateAgent";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAgentCommand = serializeAws_json1_1CreateAgentCommand;
async function serializeAws_json1_1CreateLocationEfsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateLocationEfs";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationEfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLocationEfsCommand = serializeAws_json1_1CreateLocationEfsCommand;
async function serializeAws_json1_1CreateLocationNfsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateLocationNfs";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationNfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLocationNfsCommand = serializeAws_json1_1CreateLocationNfsCommand;
async function serializeAws_json1_1CreateLocationS3Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateLocationS3";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationS3Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLocationS3Command = serializeAws_json1_1CreateLocationS3Command;
async function serializeAws_json1_1CreateLocationSmbCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateLocationSmb";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLocationSmbRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLocationSmbCommand = serializeAws_json1_1CreateLocationSmbCommand;
async function serializeAws_json1_1CreateTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.CreateTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTaskCommand = serializeAws_json1_1CreateTaskCommand;
async function serializeAws_json1_1DeleteAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DeleteAgent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAgentCommand = serializeAws_json1_1DeleteAgentCommand;
async function serializeAws_json1_1DeleteLocationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DeleteLocation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLocationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLocationCommand = serializeAws_json1_1DeleteLocationCommand;
async function serializeAws_json1_1DeleteTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DeleteTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTaskCommand = serializeAws_json1_1DeleteTaskCommand;
async function serializeAws_json1_1DescribeAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeAgent";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAgentCommand = serializeAws_json1_1DescribeAgentCommand;
async function serializeAws_json1_1DescribeLocationEfsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeLocationEfs";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationEfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLocationEfsCommand = serializeAws_json1_1DescribeLocationEfsCommand;
async function serializeAws_json1_1DescribeLocationNfsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeLocationNfs";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationNfsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLocationNfsCommand = serializeAws_json1_1DescribeLocationNfsCommand;
async function serializeAws_json1_1DescribeLocationS3Command(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeLocationS3";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationS3Request(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLocationS3Command = serializeAws_json1_1DescribeLocationS3Command;
async function serializeAws_json1_1DescribeLocationSmbCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeLocationSmb";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLocationSmbRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLocationSmbCommand = serializeAws_json1_1DescribeLocationSmbCommand;
async function serializeAws_json1_1DescribeTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTaskCommand = serializeAws_json1_1DescribeTaskCommand;
async function serializeAws_json1_1DescribeTaskExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.DescribeTaskExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTaskExecutionCommand = serializeAws_json1_1DescribeTaskExecutionCommand;
async function serializeAws_json1_1ListAgentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.ListAgents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAgentsCommand = serializeAws_json1_1ListAgentsCommand;
async function serializeAws_json1_1ListLocationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.ListLocations";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLocationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListLocationsCommand = serializeAws_json1_1ListLocationsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTaskExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.ListTaskExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskExecutionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTaskExecutionsCommand = serializeAws_json1_1ListTaskExecutionsCommand;
async function serializeAws_json1_1ListTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.ListTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTasksCommand = serializeAws_json1_1ListTasksCommand;
async function serializeAws_json1_1StartTaskExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.StartTaskExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTaskExecutionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTaskExecutionCommand = serializeAws_json1_1StartTaskExecutionCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.UpdateAgent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAgentCommand = serializeAws_json1_1UpdateAgentCommand;
async function serializeAws_json1_1UpdateTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "FmrsService.UpdateTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTaskCommand = serializeAws_json1_1UpdateTaskCommand;
async function deserializeAws_json1_1CancelTaskExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelTaskExecutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelTaskExecutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelTaskExecutionCommand = deserializeAws_json1_1CancelTaskExecutionCommand;
async function deserializeAws_json1_1CancelTaskExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAgentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAgentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAgentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAgentCommand = deserializeAws_json1_1CreateAgentCommand;
async function deserializeAws_json1_1CreateAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLocationEfsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLocationEfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationEfsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLocationEfsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLocationEfsCommand = deserializeAws_json1_1CreateLocationEfsCommand;
async function deserializeAws_json1_1CreateLocationEfsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLocationNfsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLocationNfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationNfsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLocationNfsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLocationNfsCommand = deserializeAws_json1_1CreateLocationNfsCommand;
async function deserializeAws_json1_1CreateLocationNfsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLocationS3Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLocationS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationS3Response(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLocationS3Response" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLocationS3Command = deserializeAws_json1_1CreateLocationS3Command;
async function deserializeAws_json1_1CreateLocationS3CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateLocationSmbCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLocationSmbCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLocationSmbResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLocationSmbResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLocationSmbCommand = deserializeAws_json1_1CreateLocationSmbCommand;
async function deserializeAws_json1_1CreateLocationSmbCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTaskCommand = deserializeAws_json1_1CreateTaskCommand;
async function deserializeAws_json1_1CreateTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAgentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAgentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAgentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAgentCommand = deserializeAws_json1_1DeleteAgentCommand;
async function deserializeAws_json1_1DeleteAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteLocationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLocationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLocationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteLocationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLocationCommand = deserializeAws_json1_1DeleteLocationCommand;
async function deserializeAws_json1_1DeleteLocationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTaskCommand = deserializeAws_json1_1DeleteTaskCommand;
async function deserializeAws_json1_1DeleteTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAgentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAgentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAgentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAgentCommand = deserializeAws_json1_1DescribeAgentCommand;
async function deserializeAws_json1_1DescribeAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLocationEfsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLocationEfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationEfsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLocationEfsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLocationEfsCommand = deserializeAws_json1_1DescribeLocationEfsCommand;
async function deserializeAws_json1_1DescribeLocationEfsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLocationNfsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLocationNfsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationNfsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLocationNfsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLocationNfsCommand = deserializeAws_json1_1DescribeLocationNfsCommand;
async function deserializeAws_json1_1DescribeLocationNfsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLocationS3Command(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLocationS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationS3Response(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLocationS3Response" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLocationS3Command = deserializeAws_json1_1DescribeLocationS3Command;
async function deserializeAws_json1_1DescribeLocationS3CommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeLocationSmbCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLocationSmbCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLocationSmbResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLocationSmbResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLocationSmbCommand = deserializeAws_json1_1DescribeLocationSmbCommand;
async function deserializeAws_json1_1DescribeLocationSmbCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTaskCommand = deserializeAws_json1_1DescribeTaskCommand;
async function deserializeAws_json1_1DescribeTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTaskExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskExecutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTaskExecutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTaskExecutionCommand = deserializeAws_json1_1DescribeTaskExecutionCommand;
async function deserializeAws_json1_1DescribeTaskExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAgentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAgentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAgentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAgentsCommand = deserializeAws_json1_1ListAgentsCommand;
async function deserializeAws_json1_1ListAgentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListLocationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLocationsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListLocationsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListLocationsCommand = deserializeAws_json1_1ListLocationsCommand;
async function deserializeAws_json1_1ListLocationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTaskExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTaskExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskExecutionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTaskExecutionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTaskExecutionsCommand = deserializeAws_json1_1ListTaskExecutionsCommand;
async function deserializeAws_json1_1ListTaskExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTasksCommand = deserializeAws_json1_1ListTasksCommand;
async function deserializeAws_json1_1ListTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartTaskExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTaskExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTaskExecutionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTaskExecutionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTaskExecutionCommand = deserializeAws_json1_1StartTaskExecutionCommand;
async function deserializeAws_json1_1StartTaskExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAgentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAgentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAgentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAgentCommand = deserializeAws_json1_1UpdateAgentCommand;
async function deserializeAws_json1_1UpdateAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTaskCommand = deserializeAws_json1_1UpdateTaskCommand;
async function deserializeAws_json1_1UpdateTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.fmrs#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.fmrs#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = Object.assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AgentArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CancelTaskExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskExecutionArn !== undefined) {
        bodyParams["TaskExecutionArn"] = input.TaskExecutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAgentRequest = (input, context) => {
    const bodyParams = {};
    if (input.ActivationKey !== undefined) {
        bodyParams["ActivationKey"] = input.ActivationKey;
    }
    if (input.AgentName !== undefined) {
        bodyParams["AgentName"] = input.AgentName;
    }
    if (input.SecurityGroupArns !== undefined) {
        bodyParams["SecurityGroupArns"] = serializeAws_json1_1PLSecurityGroupArnList(input.SecurityGroupArns, context);
    }
    if (input.SubnetArns !== undefined) {
        bodyParams["SubnetArns"] = serializeAws_json1_1PLSubnetArnList(input.SubnetArns, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VpcEndpointId !== undefined) {
        bodyParams["VpcEndpointId"] = input.VpcEndpointId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLocationEfsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Ec2Config !== undefined) {
        bodyParams["Ec2Config"] = serializeAws_json1_1Ec2Config(input.Ec2Config, context);
    }
    if (input.EfsFilesystemArn !== undefined) {
        bodyParams["EfsFilesystemArn"] = input.EfsFilesystemArn;
    }
    if (input.Subdirectory !== undefined) {
        bodyParams["Subdirectory"] = input.Subdirectory;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLocationNfsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MountOptions !== undefined) {
        bodyParams["MountOptions"] = serializeAws_json1_1NfsMountOptions(input.MountOptions, context);
    }
    if (input.OnPremConfig !== undefined) {
        bodyParams["OnPremConfig"] = serializeAws_json1_1OnPremConfig(input.OnPremConfig, context);
    }
    if (input.ServerHostname !== undefined) {
        bodyParams["ServerHostname"] = input.ServerHostname;
    }
    if (input.Subdirectory !== undefined) {
        bodyParams["Subdirectory"] = input.Subdirectory;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLocationS3Request = (input, context) => {
    const bodyParams = {};
    if (input.S3BucketArn !== undefined) {
        bodyParams["S3BucketArn"] = input.S3BucketArn;
    }
    if (input.S3Config !== undefined) {
        bodyParams["S3Config"] = serializeAws_json1_1S3Config(input.S3Config, context);
    }
    if (input.S3StorageClass !== undefined) {
        bodyParams["S3StorageClass"] = input.S3StorageClass;
    }
    if (input.Subdirectory !== undefined) {
        bodyParams["Subdirectory"] = input.Subdirectory;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLocationSmbRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentArns !== undefined) {
        bodyParams["AgentArns"] = serializeAws_json1_1AgentArnList(input.AgentArns, context);
    }
    if (input.Domain !== undefined) {
        bodyParams["Domain"] = input.Domain;
    }
    if (input.MountOptions !== undefined) {
        bodyParams["MountOptions"] = serializeAws_json1_1SmbMountOptions(input.MountOptions, context);
    }
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.ServerHostname !== undefined) {
        bodyParams["ServerHostname"] = input.ServerHostname;
    }
    if (input.Subdirectory !== undefined) {
        bodyParams["Subdirectory"] = input.Subdirectory;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.User !== undefined) {
        bodyParams["User"] = input.User;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogGroupArn !== undefined) {
        bodyParams["CloudWatchLogGroupArn"] = input.CloudWatchLogGroupArn;
    }
    if (input.DestinationLocationArn !== undefined) {
        bodyParams["DestinationLocationArn"] = input.DestinationLocationArn;
    }
    if (input.Excludes !== undefined) {
        bodyParams["Excludes"] = serializeAws_json1_1FilterList(input.Excludes, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Options !== undefined) {
        bodyParams["Options"] = serializeAws_json1_1Options(input.Options, context);
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = serializeAws_json1_1TaskSchedule(input.Schedule, context);
    }
    if (input.SourceLocationArn !== undefined) {
        bodyParams["SourceLocationArn"] = input.SourceLocationArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAgentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentArn !== undefined) {
        bodyParams["AgentArn"] = input.AgentArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLocationRequest = (input, context) => {
    const bodyParams = {};
    if (input.LocationArn !== undefined) {
        bodyParams["LocationArn"] = input.LocationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAgentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentArn !== undefined) {
        bodyParams["AgentArn"] = input.AgentArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLocationEfsRequest = (input, context) => {
    const bodyParams = {};
    if (input.LocationArn !== undefined) {
        bodyParams["LocationArn"] = input.LocationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLocationNfsRequest = (input, context) => {
    const bodyParams = {};
    if (input.LocationArn !== undefined) {
        bodyParams["LocationArn"] = input.LocationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLocationS3Request = (input, context) => {
    const bodyParams = {};
    if (input.LocationArn !== undefined) {
        bodyParams["LocationArn"] = input.LocationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLocationSmbRequest = (input, context) => {
    const bodyParams = {};
    if (input.LocationArn !== undefined) {
        bodyParams["LocationArn"] = input.LocationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTaskExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskExecutionArn !== undefined) {
        bodyParams["TaskExecutionArn"] = input.TaskExecutionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Ec2Config = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupArns !== undefined) {
        bodyParams["SecurityGroupArns"] = serializeAws_json1_1Ec2SecurityGroupArnList(input.SecurityGroupArns, context);
    }
    if (input.SubnetArn !== undefined) {
        bodyParams["SubnetArn"] = input.SubnetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Ec2SecurityGroupArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1FilterRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterRule = (input, context) => {
    const bodyParams = {};
    if (input.FilterType !== undefined) {
        bodyParams["FilterType"] = input.FilterType;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAgentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListLocationsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTaskExecutionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NfsMountOptions = (input, context) => {
    const bodyParams = {};
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1OnPremConfig = (input, context) => {
    const bodyParams = {};
    if (input.AgentArns !== undefined) {
        bodyParams["AgentArns"] = serializeAws_json1_1AgentArnList(input.AgentArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Options = (input, context) => {
    const bodyParams = {};
    if (input.Atime !== undefined) {
        bodyParams["Atime"] = input.Atime;
    }
    if (input.BytesPerSecond !== undefined) {
        bodyParams["BytesPerSecond"] = input.BytesPerSecond;
    }
    if (input.Gid !== undefined) {
        bodyParams["Gid"] = input.Gid;
    }
    if (input.Mtime !== undefined) {
        bodyParams["Mtime"] = input.Mtime;
    }
    if (input.OverwriteMode !== undefined) {
        bodyParams["OverwriteMode"] = input.OverwriteMode;
    }
    if (input.PosixPermissions !== undefined) {
        bodyParams["PosixPermissions"] = input.PosixPermissions;
    }
    if (input.PreserveDeletedFiles !== undefined) {
        bodyParams["PreserveDeletedFiles"] = input.PreserveDeletedFiles;
    }
    if (input.PreserveDevices !== undefined) {
        bodyParams["PreserveDevices"] = input.PreserveDevices;
    }
    if (input.TaskQueueing !== undefined) {
        bodyParams["TaskQueueing"] = input.TaskQueueing;
    }
    if (input.Uid !== undefined) {
        bodyParams["Uid"] = input.Uid;
    }
    if (input.VerifyMode !== undefined) {
        bodyParams["VerifyMode"] = input.VerifyMode;
    }
    return bodyParams;
};
const serializeAws_json1_1PLSecurityGroupArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PLSubnetArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1S3Config = (input, context) => {
    const bodyParams = {};
    if (input.BucketAccessRoleArn !== undefined) {
        bodyParams["BucketAccessRoleArn"] = input.BucketAccessRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SmbMountOptions = (input, context) => {
    const bodyParams = {};
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1StartTaskExecutionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Includes !== undefined) {
        bodyParams["Includes"] = serializeAws_json1_1FilterList(input.Includes, context);
    }
    if (input.OverrideOptions !== undefined) {
        bodyParams["OverrideOptions"] = serializeAws_json1_1Options(input.OverrideOptions, context);
    }
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
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
        contents.push(serializeAws_json1_1TagListEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagListEntry = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TaskSchedule = (input, context) => {
    const bodyParams = {};
    if (input.ScheduleExpression !== undefined) {
        bodyParams["ScheduleExpression"] = input.ScheduleExpression;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Keys !== undefined) {
        bodyParams["Keys"] = serializeAws_json1_1TagKeyList(input.Keys, context);
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAgentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentArn !== undefined) {
        bodyParams["AgentArn"] = input.AgentArn;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogGroupArn !== undefined) {
        bodyParams["CloudWatchLogGroupArn"] = input.CloudWatchLogGroupArn;
    }
    if (input.Excludes !== undefined) {
        bodyParams["Excludes"] = serializeAws_json1_1FilterList(input.Excludes, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Options !== undefined) {
        bodyParams["Options"] = serializeAws_json1_1Options(input.Options, context);
    }
    if (input.Schedule !== undefined) {
        bodyParams["Schedule"] = serializeAws_json1_1TaskSchedule(input.Schedule, context);
    }
    if (input.TaskArn !== undefined) {
        bodyParams["TaskArn"] = input.TaskArn;
    }
    return bodyParams;
};
const deserializeAws_json1_1AgentArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AgentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentListEntry(entry, context));
};
const deserializeAws_json1_1AgentListEntry = (output, context) => {
    let contents = {
        __type: "AgentListEntry",
        AgentArn: undefined,
        Name: undefined,
        Status: undefined
    };
    if (output.AgentArn !== undefined && output.AgentArn !== null) {
        contents.AgentArn = output.AgentArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1CancelTaskExecutionResponse = (output, context) => {
    let contents = {
        __type: "CancelTaskExecutionResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateAgentResponse = (output, context) => {
    let contents = {
        __type: "CreateAgentResponse",
        AgentArn: undefined
    };
    if (output.AgentArn !== undefined && output.AgentArn !== null) {
        contents.AgentArn = output.AgentArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLocationEfsResponse = (output, context) => {
    let contents = {
        __type: "CreateLocationEfsResponse",
        LocationArn: undefined
    };
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLocationNfsResponse = (output, context) => {
    let contents = {
        __type: "CreateLocationNfsResponse",
        LocationArn: undefined
    };
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLocationS3Response = (output, context) => {
    let contents = {
        __type: "CreateLocationS3Response",
        LocationArn: undefined
    };
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateLocationSmbResponse = (output, context) => {
    let contents = {
        __type: "CreateLocationSmbResponse",
        LocationArn: undefined
    };
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateTaskResponse = (output, context) => {
    let contents = {
        __type: "CreateTaskResponse",
        TaskArn: undefined
    };
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteAgentResponse = (output, context) => {
    let contents = {
        __type: "DeleteAgentResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteLocationResponse = (output, context) => {
    let contents = {
        __type: "DeleteLocationResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteTaskResponse = (output, context) => {
    let contents = {
        __type: "DeleteTaskResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAgentResponse = (output, context) => {
    let contents = {
        __type: "DescribeAgentResponse",
        AgentArn: undefined,
        CreationTime: undefined,
        EndpointType: undefined,
        LastConnectionTime: undefined,
        Name: undefined,
        PrivateLinkConfig: undefined,
        Status: undefined
    };
    if (output.AgentArn !== undefined && output.AgentArn !== null) {
        contents.AgentArn = output.AgentArn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.EndpointType !== undefined && output.EndpointType !== null) {
        contents.EndpointType = output.EndpointType;
    }
    if (output.LastConnectionTime !== undefined &&
        output.LastConnectionTime !== null) {
        contents.LastConnectionTime = new Date(Math.round(output.LastConnectionTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PrivateLinkConfig !== undefined &&
        output.PrivateLinkConfig !== null) {
        contents.PrivateLinkConfig = deserializeAws_json1_1PrivateLinkConfig(output.PrivateLinkConfig, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLocationEfsResponse = (output, context) => {
    let contents = {
        __type: "DescribeLocationEfsResponse",
        CreationTime: undefined,
        Ec2Config: undefined,
        LocationArn: undefined,
        LocationUri: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Ec2Config !== undefined && output.Ec2Config !== null) {
        contents.Ec2Config = deserializeAws_json1_1Ec2Config(output.Ec2Config, context);
    }
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLocationNfsResponse = (output, context) => {
    let contents = {
        __type: "DescribeLocationNfsResponse",
        CreationTime: undefined,
        LocationArn: undefined,
        LocationUri: undefined,
        MountOptions: undefined,
        OnPremConfig: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    if (output.MountOptions !== undefined && output.MountOptions !== null) {
        contents.MountOptions = deserializeAws_json1_1NfsMountOptions(output.MountOptions, context);
    }
    if (output.OnPremConfig !== undefined && output.OnPremConfig !== null) {
        contents.OnPremConfig = deserializeAws_json1_1OnPremConfig(output.OnPremConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLocationS3Response = (output, context) => {
    let contents = {
        __type: "DescribeLocationS3Response",
        CreationTime: undefined,
        LocationArn: undefined,
        LocationUri: undefined,
        S3Config: undefined,
        S3StorageClass: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    if (output.S3Config !== undefined && output.S3Config !== null) {
        contents.S3Config = deserializeAws_json1_1S3Config(output.S3Config, context);
    }
    if (output.S3StorageClass !== undefined && output.S3StorageClass !== null) {
        contents.S3StorageClass = output.S3StorageClass;
    }
    return contents;
};
const deserializeAws_json1_1DescribeLocationSmbResponse = (output, context) => {
    let contents = {
        __type: "DescribeLocationSmbResponse",
        AgentArns: undefined,
        CreationTime: undefined,
        Domain: undefined,
        LocationArn: undefined,
        LocationUri: undefined,
        MountOptions: undefined,
        User: undefined
    };
    if (output.AgentArns !== undefined && output.AgentArns !== null) {
        contents.AgentArns = deserializeAws_json1_1AgentArnList(output.AgentArns, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    if (output.MountOptions !== undefined && output.MountOptions !== null) {
        contents.MountOptions = deserializeAws_json1_1SmbMountOptions(output.MountOptions, context);
    }
    if (output.User !== undefined && output.User !== null) {
        contents.User = output.User;
    }
    return contents;
};
const deserializeAws_json1_1DescribeTaskExecutionResponse = (output, context) => {
    let contents = {
        __type: "DescribeTaskExecutionResponse",
        BytesTransferred: undefined,
        BytesWritten: undefined,
        EstimatedBytesToTransfer: undefined,
        EstimatedFilesToTransfer: undefined,
        Excludes: undefined,
        FilesTransferred: undefined,
        Includes: undefined,
        Options: undefined,
        Result: undefined,
        StartTime: undefined,
        Status: undefined,
        TaskExecutionArn: undefined
    };
    if (output.BytesTransferred !== undefined &&
        output.BytesTransferred !== null) {
        contents.BytesTransferred = output.BytesTransferred;
    }
    if (output.BytesWritten !== undefined && output.BytesWritten !== null) {
        contents.BytesWritten = output.BytesWritten;
    }
    if (output.EstimatedBytesToTransfer !== undefined &&
        output.EstimatedBytesToTransfer !== null) {
        contents.EstimatedBytesToTransfer = output.EstimatedBytesToTransfer;
    }
    if (output.EstimatedFilesToTransfer !== undefined &&
        output.EstimatedFilesToTransfer !== null) {
        contents.EstimatedFilesToTransfer = output.EstimatedFilesToTransfer;
    }
    if (output.Excludes !== undefined && output.Excludes !== null) {
        contents.Excludes = deserializeAws_json1_1FilterList(output.Excludes, context);
    }
    if (output.FilesTransferred !== undefined &&
        output.FilesTransferred !== null) {
        contents.FilesTransferred = output.FilesTransferred;
    }
    if (output.Includes !== undefined && output.Includes !== null) {
        contents.Includes = deserializeAws_json1_1FilterList(output.Includes, context);
    }
    if (output.Options !== undefined && output.Options !== null) {
        contents.Options = deserializeAws_json1_1Options(output.Options, context);
    }
    if (output.Result !== undefined && output.Result !== null) {
        contents.Result = deserializeAws_json1_1TaskExecutionResultDetail(output.Result, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskExecutionArn !== undefined &&
        output.TaskExecutionArn !== null) {
        contents.TaskExecutionArn = output.TaskExecutionArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeTaskResponse = (output, context) => {
    let contents = {
        __type: "DescribeTaskResponse",
        CloudWatchLogGroupArn: undefined,
        CreationTime: undefined,
        CurrentTaskExecutionArn: undefined,
        DestinationLocationArn: undefined,
        DestinationNetworkInterfaceArns: undefined,
        ErrorCode: undefined,
        ErrorDetail: undefined,
        Excludes: undefined,
        Name: undefined,
        Options: undefined,
        Schedule: undefined,
        SourceLocationArn: undefined,
        SourceNetworkInterfaceArns: undefined,
        Status: undefined,
        TaskArn: undefined
    };
    if (output.CloudWatchLogGroupArn !== undefined &&
        output.CloudWatchLogGroupArn !== null) {
        contents.CloudWatchLogGroupArn = output.CloudWatchLogGroupArn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.CurrentTaskExecutionArn !== undefined &&
        output.CurrentTaskExecutionArn !== null) {
        contents.CurrentTaskExecutionArn = output.CurrentTaskExecutionArn;
    }
    if (output.DestinationLocationArn !== undefined &&
        output.DestinationLocationArn !== null) {
        contents.DestinationLocationArn = output.DestinationLocationArn;
    }
    if (output.DestinationNetworkInterfaceArns !== undefined &&
        output.DestinationNetworkInterfaceArns !== null) {
        contents.DestinationNetworkInterfaceArns = deserializeAws_json1_1DestinationNetworkInterfaceArns(output.DestinationNetworkInterfaceArns, context);
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = output.ErrorDetail;
    }
    if (output.Excludes !== undefined && output.Excludes !== null) {
        contents.Excludes = deserializeAws_json1_1FilterList(output.Excludes, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Options !== undefined && output.Options !== null) {
        contents.Options = deserializeAws_json1_1Options(output.Options, context);
    }
    if (output.Schedule !== undefined && output.Schedule !== null) {
        contents.Schedule = deserializeAws_json1_1TaskSchedule(output.Schedule, context);
    }
    if (output.SourceLocationArn !== undefined &&
        output.SourceLocationArn !== null) {
        contents.SourceLocationArn = output.SourceLocationArn;
    }
    if (output.SourceNetworkInterfaceArns !== undefined &&
        output.SourceNetworkInterfaceArns !== null) {
        contents.SourceNetworkInterfaceArns = deserializeAws_json1_1SourceNetworkInterfaceArns(output.SourceNetworkInterfaceArns, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    return contents;
};
const deserializeAws_json1_1DestinationNetworkInterfaceArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Ec2Config = (output, context) => {
    let contents = {
        __type: "Ec2Config",
        SecurityGroupArns: undefined,
        SubnetArn: undefined
    };
    if (output.SecurityGroupArns !== undefined &&
        output.SecurityGroupArns !== null) {
        contents.SecurityGroupArns = deserializeAws_json1_1Ec2SecurityGroupArnList(output.SecurityGroupArns, context);
    }
    if (output.SubnetArn !== undefined && output.SubnetArn !== null) {
        contents.SubnetArn = output.SubnetArn;
    }
    return contents;
};
const deserializeAws_json1_1Ec2SecurityGroupArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FilterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FilterRule(entry, context));
};
const deserializeAws_json1_1FilterRule = (output, context) => {
    let contents = {
        __type: "FilterRule",
        FilterType: undefined,
        Value: undefined
    };
    if (output.FilterType !== undefined && output.FilterType !== null) {
        contents.FilterType = output.FilterType;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1InternalException = (output, context) => {
    let contents = {
        __type: "InternalException",
        errorCode: undefined,
        message: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        errorCode: undefined,
        message: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListAgentsResponse = (output, context) => {
    let contents = {
        __type: "ListAgentsResponse",
        Agents: undefined,
        NextToken: undefined
    };
    if (output.Agents !== undefined && output.Agents !== null) {
        contents.Agents = deserializeAws_json1_1AgentList(output.Agents, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListLocationsResponse = (output, context) => {
    let contents = {
        __type: "ListLocationsResponse",
        Locations: undefined,
        NextToken: undefined
    };
    if (output.Locations !== undefined && output.Locations !== null) {
        contents.Locations = deserializeAws_json1_1LocationList(output.Locations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTaskExecutionsResponse = (output, context) => {
    let contents = {
        __type: "ListTaskExecutionsResponse",
        NextToken: undefined,
        TaskExecutions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TaskExecutions !== undefined && output.TaskExecutions !== null) {
        contents.TaskExecutions = deserializeAws_json1_1TaskExecutionList(output.TaskExecutions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTasksResponse = (output, context) => {
    let contents = {
        __type: "ListTasksResponse",
        NextToken: undefined,
        Tasks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tasks !== undefined && output.Tasks !== null) {
        contents.Tasks = deserializeAws_json1_1TaskList(output.Tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1LocationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LocationListEntry(entry, context));
};
const deserializeAws_json1_1LocationListEntry = (output, context) => {
    let contents = {
        __type: "LocationListEntry",
        LocationArn: undefined,
        LocationUri: undefined
    };
    if (output.LocationArn !== undefined && output.LocationArn !== null) {
        contents.LocationArn = output.LocationArn;
    }
    if (output.LocationUri !== undefined && output.LocationUri !== null) {
        contents.LocationUri = output.LocationUri;
    }
    return contents;
};
const deserializeAws_json1_1NfsMountOptions = (output, context) => {
    let contents = {
        __type: "NfsMountOptions",
        Version: undefined
    };
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1OnPremConfig = (output, context) => {
    let contents = {
        __type: "OnPremConfig",
        AgentArns: undefined
    };
    if (output.AgentArns !== undefined && output.AgentArns !== null) {
        contents.AgentArns = deserializeAws_json1_1AgentArnList(output.AgentArns, context);
    }
    return contents;
};
const deserializeAws_json1_1Options = (output, context) => {
    let contents = {
        __type: "Options",
        Atime: undefined,
        BytesPerSecond: undefined,
        Gid: undefined,
        Mtime: undefined,
        OverwriteMode: undefined,
        PosixPermissions: undefined,
        PreserveDeletedFiles: undefined,
        PreserveDevices: undefined,
        TaskQueueing: undefined,
        Uid: undefined,
        VerifyMode: undefined
    };
    if (output.Atime !== undefined && output.Atime !== null) {
        contents.Atime = output.Atime;
    }
    if (output.BytesPerSecond !== undefined && output.BytesPerSecond !== null) {
        contents.BytesPerSecond = output.BytesPerSecond;
    }
    if (output.Gid !== undefined && output.Gid !== null) {
        contents.Gid = output.Gid;
    }
    if (output.Mtime !== undefined && output.Mtime !== null) {
        contents.Mtime = output.Mtime;
    }
    if (output.OverwriteMode !== undefined && output.OverwriteMode !== null) {
        contents.OverwriteMode = output.OverwriteMode;
    }
    if (output.PosixPermissions !== undefined &&
        output.PosixPermissions !== null) {
        contents.PosixPermissions = output.PosixPermissions;
    }
    if (output.PreserveDeletedFiles !== undefined &&
        output.PreserveDeletedFiles !== null) {
        contents.PreserveDeletedFiles = output.PreserveDeletedFiles;
    }
    if (output.PreserveDevices !== undefined && output.PreserveDevices !== null) {
        contents.PreserveDevices = output.PreserveDevices;
    }
    if (output.TaskQueueing !== undefined && output.TaskQueueing !== null) {
        contents.TaskQueueing = output.TaskQueueing;
    }
    if (output.Uid !== undefined && output.Uid !== null) {
        contents.Uid = output.Uid;
    }
    if (output.VerifyMode !== undefined && output.VerifyMode !== null) {
        contents.VerifyMode = output.VerifyMode;
    }
    return contents;
};
const deserializeAws_json1_1PLSecurityGroupArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PLSubnetArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1PrivateLinkConfig = (output, context) => {
    let contents = {
        __type: "PrivateLinkConfig",
        PrivateLinkEndpoint: undefined,
        SecurityGroupArns: undefined,
        SubnetArns: undefined,
        VpcEndpointId: undefined
    };
    if (output.PrivateLinkEndpoint !== undefined &&
        output.PrivateLinkEndpoint !== null) {
        contents.PrivateLinkEndpoint = output.PrivateLinkEndpoint;
    }
    if (output.SecurityGroupArns !== undefined &&
        output.SecurityGroupArns !== null) {
        contents.SecurityGroupArns = deserializeAws_json1_1PLSecurityGroupArnList(output.SecurityGroupArns, context);
    }
    if (output.SubnetArns !== undefined && output.SubnetArns !== null) {
        contents.SubnetArns = deserializeAws_json1_1PLSubnetArnList(output.SubnetArns, context);
    }
    if (output.VpcEndpointId !== undefined && output.VpcEndpointId !== null) {
        contents.VpcEndpointId = output.VpcEndpointId;
    }
    return contents;
};
const deserializeAws_json1_1S3Config = (output, context) => {
    let contents = {
        __type: "S3Config",
        BucketAccessRoleArn: undefined
    };
    if (output.BucketAccessRoleArn !== undefined &&
        output.BucketAccessRoleArn !== null) {
        contents.BucketAccessRoleArn = output.BucketAccessRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1SmbMountOptions = (output, context) => {
    let contents = {
        __type: "SmbMountOptions",
        Version: undefined
    };
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1SourceNetworkInterfaceArns = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StartTaskExecutionResponse = (output, context) => {
    let contents = {
        __type: "StartTaskExecutionResponse",
        TaskExecutionArn: undefined
    };
    if (output.TaskExecutionArn !== undefined &&
        output.TaskExecutionArn !== null) {
        contents.TaskExecutionArn = output.TaskExecutionArn;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagListEntry(entry, context));
};
const deserializeAws_json1_1TagListEntry = (output, context) => {
    let contents = {
        __type: "TagListEntry",
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TaskExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TaskExecutionListEntry(entry, context));
};
const deserializeAws_json1_1TaskExecutionListEntry = (output, context) => {
    let contents = {
        __type: "TaskExecutionListEntry",
        Status: undefined,
        TaskExecutionArn: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskExecutionArn !== undefined &&
        output.TaskExecutionArn !== null) {
        contents.TaskExecutionArn = output.TaskExecutionArn;
    }
    return contents;
};
const deserializeAws_json1_1TaskExecutionResultDetail = (output, context) => {
    let contents = {
        __type: "TaskExecutionResultDetail",
        ErrorCode: undefined,
        ErrorDetail: undefined,
        PrepareDuration: undefined,
        PrepareStatus: undefined,
        TotalDuration: undefined,
        TransferDuration: undefined,
        TransferStatus: undefined,
        VerifyDuration: undefined,
        VerifyStatus: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorDetail !== undefined && output.ErrorDetail !== null) {
        contents.ErrorDetail = output.ErrorDetail;
    }
    if (output.PrepareDuration !== undefined && output.PrepareDuration !== null) {
        contents.PrepareDuration = output.PrepareDuration;
    }
    if (output.PrepareStatus !== undefined && output.PrepareStatus !== null) {
        contents.PrepareStatus = output.PrepareStatus;
    }
    if (output.TotalDuration !== undefined && output.TotalDuration !== null) {
        contents.TotalDuration = output.TotalDuration;
    }
    if (output.TransferDuration !== undefined &&
        output.TransferDuration !== null) {
        contents.TransferDuration = output.TransferDuration;
    }
    if (output.TransferStatus !== undefined && output.TransferStatus !== null) {
        contents.TransferStatus = output.TransferStatus;
    }
    if (output.VerifyDuration !== undefined && output.VerifyDuration !== null) {
        contents.VerifyDuration = output.VerifyDuration;
    }
    if (output.VerifyStatus !== undefined && output.VerifyStatus !== null) {
        contents.VerifyStatus = output.VerifyStatus;
    }
    return contents;
};
const deserializeAws_json1_1TaskList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TaskListEntry(entry, context));
};
const deserializeAws_json1_1TaskListEntry = (output, context) => {
    let contents = {
        __type: "TaskListEntry",
        Name: undefined,
        Status: undefined,
        TaskArn: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TaskArn !== undefined && output.TaskArn !== null) {
        contents.TaskArn = output.TaskArn;
    }
    return contents;
};
const deserializeAws_json1_1TaskSchedule = (output, context) => {
    let contents = {
        __type: "TaskSchedule",
        ScheduleExpression: undefined
    };
    if (output.ScheduleExpression !== undefined &&
        output.ScheduleExpression !== null) {
        contents.ScheduleExpression = output.ScheduleExpression;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateAgentResponse = (output, context) => {
    let contents = {
        __type: "UpdateAgentResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateTaskResponse = (output, context) => {
    let contents = {
        __type: "UpdateTaskResponse"
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