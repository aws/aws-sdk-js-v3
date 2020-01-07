"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1BatchGetNamedQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.BatchGetNamedQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetNamedQueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetNamedQueryCommand = serializeAws_json1_1BatchGetNamedQueryCommand;
async function serializeAws_json1_1BatchGetQueryExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.BatchGetQueryExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetQueryExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetQueryExecutionCommand = serializeAws_json1_1BatchGetQueryExecutionCommand;
async function serializeAws_json1_1CreateNamedQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.CreateNamedQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNamedQueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateNamedQueryCommand = serializeAws_json1_1CreateNamedQueryCommand;
async function serializeAws_json1_1CreateWorkGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.CreateWorkGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWorkGroupCommand = serializeAws_json1_1CreateWorkGroupCommand;
async function serializeAws_json1_1DeleteNamedQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.DeleteNamedQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNamedQueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteNamedQueryCommand = serializeAws_json1_1DeleteNamedQueryCommand;
async function serializeAws_json1_1DeleteWorkGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.DeleteWorkGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWorkGroupCommand = serializeAws_json1_1DeleteWorkGroupCommand;
async function serializeAws_json1_1GetNamedQueryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.GetNamedQuery";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNamedQueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetNamedQueryCommand = serializeAws_json1_1GetNamedQueryCommand;
async function serializeAws_json1_1GetQueryExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.GetQueryExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQueryExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetQueryExecutionCommand = serializeAws_json1_1GetQueryExecutionCommand;
async function serializeAws_json1_1GetQueryResultsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.GetQueryResults";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQueryResultsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetQueryResultsCommand = serializeAws_json1_1GetQueryResultsCommand;
async function serializeAws_json1_1GetWorkGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.GetWorkGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWorkGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetWorkGroupCommand = serializeAws_json1_1GetWorkGroupCommand;
async function serializeAws_json1_1ListNamedQueriesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.ListNamedQueries";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNamedQueriesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListNamedQueriesCommand = serializeAws_json1_1ListNamedQueriesCommand;
async function serializeAws_json1_1ListQueryExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.ListQueryExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQueryExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListQueryExecutionsCommand = serializeAws_json1_1ListQueryExecutionsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListWorkGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.ListWorkGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWorkGroupsCommand = serializeAws_json1_1ListWorkGroupsCommand;
async function serializeAws_json1_1StartQueryExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.StartQueryExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartQueryExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartQueryExecutionCommand = serializeAws_json1_1StartQueryExecutionCommand;
async function serializeAws_json1_1StopQueryExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.StopQueryExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopQueryExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopQueryExecutionCommand = serializeAws_json1_1StopQueryExecutionCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateWorkGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonAthena.UpdateWorkGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateWorkGroupCommand = serializeAws_json1_1UpdateWorkGroupCommand;
async function deserializeAws_json1_1BatchGetNamedQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetNamedQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetNamedQueryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetNamedQueryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetNamedQueryCommand = deserializeAws_json1_1BatchGetNamedQueryCommand;
async function deserializeAws_json1_1BatchGetNamedQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1BatchGetQueryExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetQueryExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetQueryExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetQueryExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetQueryExecutionCommand = deserializeAws_json1_1BatchGetQueryExecutionCommand;
async function deserializeAws_json1_1BatchGetQueryExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1CreateNamedQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateNamedQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNamedQueryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateNamedQueryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateNamedQueryCommand = deserializeAws_json1_1CreateNamedQueryCommand;
async function deserializeAws_json1_1CreateNamedQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1CreateWorkGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWorkGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWorkGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWorkGroupCommand = deserializeAws_json1_1CreateWorkGroupCommand;
async function deserializeAws_json1_1CreateWorkGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1DeleteNamedQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteNamedQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNamedQueryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteNamedQueryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteNamedQueryCommand = deserializeAws_json1_1DeleteNamedQueryCommand;
async function deserializeAws_json1_1DeleteNamedQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1DeleteWorkGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWorkGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWorkGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWorkGroupCommand = deserializeAws_json1_1DeleteWorkGroupCommand;
async function deserializeAws_json1_1DeleteWorkGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1GetNamedQueryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetNamedQueryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNamedQueryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetNamedQueryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetNamedQueryCommand = deserializeAws_json1_1GetNamedQueryCommand;
async function deserializeAws_json1_1GetNamedQueryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1GetQueryExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetQueryExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQueryExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQueryExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetQueryExecutionCommand = deserializeAws_json1_1GetQueryExecutionCommand;
async function deserializeAws_json1_1GetQueryExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1GetQueryResultsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQueryResultsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQueryResultsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetQueryResultsCommand = deserializeAws_json1_1GetQueryResultsCommand;
async function deserializeAws_json1_1GetQueryResultsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1GetWorkGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetWorkGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWorkGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetWorkGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetWorkGroupCommand = deserializeAws_json1_1GetWorkGroupCommand;
async function deserializeAws_json1_1GetWorkGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1ListNamedQueriesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListNamedQueriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNamedQueriesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListNamedQueriesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListNamedQueriesCommand = deserializeAws_json1_1ListNamedQueriesCommand;
async function deserializeAws_json1_1ListNamedQueriesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1ListQueryExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListQueryExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQueryExecutionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListQueryExecutionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListQueryExecutionsCommand = deserializeAws_json1_1ListQueryExecutionsCommand;
async function deserializeAws_json1_1ListQueryExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
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
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.athena.webservice#ResourceNotFoundException":
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
async function deserializeAws_json1_1ListWorkGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWorkGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWorkGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWorkGroupsCommand = deserializeAws_json1_1ListWorkGroupsCommand;
async function deserializeAws_json1_1ListWorkGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1StartQueryExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartQueryExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartQueryExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartQueryExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartQueryExecutionCommand = deserializeAws_json1_1StartQueryExecutionCommand;
async function deserializeAws_json1_1StartQueryExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.athena.webservice#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopQueryExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopQueryExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopQueryExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopQueryExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopQueryExecutionCommand = deserializeAws_json1_1StopQueryExecutionCommand;
async function deserializeAws_json1_1StopQueryExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
    contents = deserializeAws_json1_1TagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceOutput" }, contents);
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
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.athena.webservice#ResourceNotFoundException":
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceOutput" }, contents);
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
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.athena.webservice#ResourceNotFoundException":
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
async function deserializeAws_json1_1UpdateWorkGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateWorkGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateWorkGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateWorkGroupCommand = deserializeAws_json1_1UpdateWorkGroupCommand;
async function deserializeAws_json1_1UpdateWorkGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.athena.webservice#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.athena.webservice#InvalidRequestException":
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
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchGetNamedQueryInput = (input, context) => {
    const bodyParams = {};
    if (input.NamedQueryIds !== undefined) {
        bodyParams["NamedQueryIds"] = serializeAws_json1_1NamedQueryIdList(input.NamedQueryIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetQueryExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.QueryExecutionIds !== undefined) {
        bodyParams["QueryExecutionIds"] = serializeAws_json1_1QueryExecutionIdList(input.QueryExecutionIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateNamedQueryInput = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.Database !== undefined) {
        bodyParams["Database"] = input.Database;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.QueryString !== undefined) {
        bodyParams["QueryString"] = input.QueryString;
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWorkGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.Configuration !== undefined) {
        bodyParams["Configuration"] = serializeAws_json1_1WorkGroupConfiguration(input.Configuration, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteNamedQueryInput = (input, context) => {
    const bodyParams = {};
    if (input.NamedQueryId === undefined) {
        input.NamedQueryId = uuid_1.v4();
    }
    if (input.NamedQueryId !== undefined) {
        bodyParams["NamedQueryId"] = input.NamedQueryId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWorkGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.RecursiveDeleteOption !== undefined) {
        bodyParams["RecursiveDeleteOption"] = input.RecursiveDeleteOption;
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionOption !== undefined) {
        bodyParams["EncryptionOption"] = input.EncryptionOption;
    }
    if (input.KmsKey !== undefined) {
        bodyParams["KmsKey"] = input.KmsKey;
    }
    return bodyParams;
};
const serializeAws_json1_1GetNamedQueryInput = (input, context) => {
    const bodyParams = {};
    if (input.NamedQueryId !== undefined) {
        bodyParams["NamedQueryId"] = input.NamedQueryId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetQueryExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.QueryExecutionId !== undefined) {
        bodyParams["QueryExecutionId"] = input.QueryExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetQueryResultsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.QueryExecutionId !== undefined) {
        bodyParams["QueryExecutionId"] = input.QueryExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetWorkGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1ListNamedQueriesInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1ListQueryExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWorkGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NamedQueryIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1QueryExecutionContext = (input, context) => {
    const bodyParams = {};
    if (input.Database !== undefined) {
        bodyParams["Database"] = input.Database;
    }
    return bodyParams;
};
const serializeAws_json1_1QueryExecutionIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ResultConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.OutputLocation !== undefined) {
        bodyParams["OutputLocation"] = input.OutputLocation;
    }
    return bodyParams;
};
const serializeAws_json1_1ResultConfigurationUpdates = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionConfiguration !== undefined) {
        bodyParams["EncryptionConfiguration"] = serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context);
    }
    if (input.OutputLocation !== undefined) {
        bodyParams["OutputLocation"] = input.OutputLocation;
    }
    if (input.RemoveEncryptionConfiguration !== undefined) {
        bodyParams["RemoveEncryptionConfiguration"] =
            input.RemoveEncryptionConfiguration;
    }
    if (input.RemoveOutputLocation !== undefined) {
        bodyParams["RemoveOutputLocation"] = input.RemoveOutputLocation;
    }
    return bodyParams;
};
const serializeAws_json1_1StartQueryExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.QueryExecutionContext !== undefined) {
        bodyParams["QueryExecutionContext"] = serializeAws_json1_1QueryExecutionContext(input.QueryExecutionContext, context);
    }
    if (input.QueryString !== undefined) {
        bodyParams["QueryString"] = input.QueryString;
    }
    if (input.ResultConfiguration !== undefined) {
        bodyParams["ResultConfiguration"] = serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context);
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1StopQueryExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.QueryExecutionId === undefined) {
        input.QueryExecutionId = uuid_1.v4();
    }
    if (input.QueryExecutionId !== undefined) {
        bodyParams["QueryExecutionId"] = input.QueryExecutionId;
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateWorkGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationUpdates !== undefined) {
        bodyParams["ConfigurationUpdates"] = serializeAws_json1_1WorkGroupConfigurationUpdates(input.ConfigurationUpdates, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.State !== undefined) {
        bodyParams["State"] = input.State;
    }
    if (input.WorkGroup !== undefined) {
        bodyParams["WorkGroup"] = input.WorkGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1WorkGroupConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BytesScannedCutoffPerQuery !== undefined) {
        bodyParams["BytesScannedCutoffPerQuery"] = input.BytesScannedCutoffPerQuery;
    }
    if (input.EnforceWorkGroupConfiguration !== undefined) {
        bodyParams["EnforceWorkGroupConfiguration"] =
            input.EnforceWorkGroupConfiguration;
    }
    if (input.PublishCloudWatchMetricsEnabled !== undefined) {
        bodyParams["PublishCloudWatchMetricsEnabled"] =
            input.PublishCloudWatchMetricsEnabled;
    }
    if (input.RequesterPaysEnabled !== undefined) {
        bodyParams["RequesterPaysEnabled"] = input.RequesterPaysEnabled;
    }
    if (input.ResultConfiguration !== undefined) {
        bodyParams["ResultConfiguration"] = serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1WorkGroupConfigurationUpdates = (input, context) => {
    const bodyParams = {};
    if (input.BytesScannedCutoffPerQuery !== undefined) {
        bodyParams["BytesScannedCutoffPerQuery"] = input.BytesScannedCutoffPerQuery;
    }
    if (input.EnforceWorkGroupConfiguration !== undefined) {
        bodyParams["EnforceWorkGroupConfiguration"] =
            input.EnforceWorkGroupConfiguration;
    }
    if (input.PublishCloudWatchMetricsEnabled !== undefined) {
        bodyParams["PublishCloudWatchMetricsEnabled"] =
            input.PublishCloudWatchMetricsEnabled;
    }
    if (input.RemoveBytesScannedCutoffPerQuery !== undefined) {
        bodyParams["RemoveBytesScannedCutoffPerQuery"] =
            input.RemoveBytesScannedCutoffPerQuery;
    }
    if (input.RequesterPaysEnabled !== undefined) {
        bodyParams["RequesterPaysEnabled"] = input.RequesterPaysEnabled;
    }
    if (input.ResultConfigurationUpdates !== undefined) {
        bodyParams["ResultConfigurationUpdates"] = serializeAws_json1_1ResultConfigurationUpdates(input.ResultConfigurationUpdates, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1BatchGetNamedQueryOutput = (output, context) => {
    let contents = {
        __type: "BatchGetNamedQueryOutput",
        NamedQueries: undefined,
        UnprocessedNamedQueryIds: undefined
    };
    if (output.NamedQueries !== undefined && output.NamedQueries !== null) {
        contents.NamedQueries = deserializeAws_json1_1NamedQueryList(output.NamedQueries, context);
    }
    if (output.UnprocessedNamedQueryIds !== undefined &&
        output.UnprocessedNamedQueryIds !== null) {
        contents.UnprocessedNamedQueryIds = deserializeAws_json1_1UnprocessedNamedQueryIdList(output.UnprocessedNamedQueryIds, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetQueryExecutionOutput = (output, context) => {
    let contents = {
        __type: "BatchGetQueryExecutionOutput",
        QueryExecutions: undefined,
        UnprocessedQueryExecutionIds: undefined
    };
    if (output.QueryExecutions !== undefined && output.QueryExecutions !== null) {
        contents.QueryExecutions = deserializeAws_json1_1QueryExecutionList(output.QueryExecutions, context);
    }
    if (output.UnprocessedQueryExecutionIds !== undefined &&
        output.UnprocessedQueryExecutionIds !== null) {
        contents.UnprocessedQueryExecutionIds = deserializeAws_json1_1UnprocessedQueryExecutionIdList(output.UnprocessedQueryExecutionIds, context);
    }
    return contents;
};
const deserializeAws_json1_1ColumnInfo = (output, context) => {
    let contents = {
        __type: "ColumnInfo",
        CaseSensitive: undefined,
        CatalogName: undefined,
        Label: undefined,
        Name: undefined,
        Nullable: undefined,
        Precision: undefined,
        Scale: undefined,
        SchemaName: undefined,
        TableName: undefined,
        Type: undefined
    };
    if (output.CaseSensitive !== undefined && output.CaseSensitive !== null) {
        contents.CaseSensitive = output.CaseSensitive;
    }
    if (output.CatalogName !== undefined && output.CatalogName !== null) {
        contents.CatalogName = output.CatalogName;
    }
    if (output.Label !== undefined && output.Label !== null) {
        contents.Label = output.Label;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Nullable !== undefined && output.Nullable !== null) {
        contents.Nullable = output.Nullable;
    }
    if (output.Precision !== undefined && output.Precision !== null) {
        contents.Precision = output.Precision;
    }
    if (output.Scale !== undefined && output.Scale !== null) {
        contents.Scale = output.Scale;
    }
    if (output.SchemaName !== undefined && output.SchemaName !== null) {
        contents.SchemaName = output.SchemaName;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ColumnInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ColumnInfo(entry, context));
};
const deserializeAws_json1_1CreateNamedQueryOutput = (output, context) => {
    let contents = {
        __type: "CreateNamedQueryOutput",
        NamedQueryId: undefined
    };
    if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
        contents.NamedQueryId = output.NamedQueryId;
    }
    return contents;
};
const deserializeAws_json1_1CreateWorkGroupOutput = (output, context) => {
    let contents = {
        __type: "CreateWorkGroupOutput"
    };
    return contents;
};
const deserializeAws_json1_1Datum = (output, context) => {
    let contents = {
        __type: "Datum",
        VarCharValue: undefined
    };
    if (output.VarCharValue !== undefined && output.VarCharValue !== null) {
        contents.VarCharValue = output.VarCharValue;
    }
    return contents;
};
const deserializeAws_json1_1DeleteNamedQueryOutput = (output, context) => {
    let contents = {
        __type: "DeleteNamedQueryOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteWorkGroupOutput = (output, context) => {
    let contents = {
        __type: "DeleteWorkGroupOutput"
    };
    return contents;
};
const deserializeAws_json1_1EncryptionConfiguration = (output, context) => {
    let contents = {
        __type: "EncryptionConfiguration",
        EncryptionOption: undefined,
        KmsKey: undefined
    };
    if (output.EncryptionOption !== undefined &&
        output.EncryptionOption !== null) {
        contents.EncryptionOption = output.EncryptionOption;
    }
    if (output.KmsKey !== undefined && output.KmsKey !== null) {
        contents.KmsKey = output.KmsKey;
    }
    return contents;
};
const deserializeAws_json1_1GetNamedQueryOutput = (output, context) => {
    let contents = {
        __type: "GetNamedQueryOutput",
        NamedQuery: undefined
    };
    if (output.NamedQuery !== undefined && output.NamedQuery !== null) {
        contents.NamedQuery = deserializeAws_json1_1NamedQuery(output.NamedQuery, context);
    }
    return contents;
};
const deserializeAws_json1_1GetQueryExecutionOutput = (output, context) => {
    let contents = {
        __type: "GetQueryExecutionOutput",
        QueryExecution: undefined
    };
    if (output.QueryExecution !== undefined && output.QueryExecution !== null) {
        contents.QueryExecution = deserializeAws_json1_1QueryExecution(output.QueryExecution, context);
    }
    return contents;
};
const deserializeAws_json1_1GetQueryResultsOutput = (output, context) => {
    let contents = {
        __type: "GetQueryResultsOutput",
        NextToken: undefined,
        ResultSet: undefined,
        UpdateCount: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResultSet !== undefined && output.ResultSet !== null) {
        contents.ResultSet = deserializeAws_json1_1ResultSet(output.ResultSet, context);
    }
    if (output.UpdateCount !== undefined && output.UpdateCount !== null) {
        contents.UpdateCount = output.UpdateCount;
    }
    return contents;
};
const deserializeAws_json1_1GetWorkGroupOutput = (output, context) => {
    let contents = {
        __type: "GetWorkGroupOutput",
        WorkGroup: undefined
    };
    if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
        contents.WorkGroup = deserializeAws_json1_1WorkGroup(output.WorkGroup, context);
    }
    return contents;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        AthenaErrorCode: undefined,
        Message: undefined
    };
    if (output.AthenaErrorCode !== undefined && output.AthenaErrorCode !== null) {
        contents.AthenaErrorCode = output.AthenaErrorCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListNamedQueriesOutput = (output, context) => {
    let contents = {
        __type: "ListNamedQueriesOutput",
        NamedQueryIds: undefined,
        NextToken: undefined
    };
    if (output.NamedQueryIds !== undefined && output.NamedQueryIds !== null) {
        contents.NamedQueryIds = deserializeAws_json1_1NamedQueryIdList(output.NamedQueryIds, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListQueryExecutionsOutput = (output, context) => {
    let contents = {
        __type: "ListQueryExecutionsOutput",
        NextToken: undefined,
        QueryExecutionIds: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.QueryExecutionIds !== undefined &&
        output.QueryExecutionIds !== null) {
        contents.QueryExecutionIds = deserializeAws_json1_1QueryExecutionIdList(output.QueryExecutionIds, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
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
const deserializeAws_json1_1ListWorkGroupsOutput = (output, context) => {
    let contents = {
        __type: "ListWorkGroupsOutput",
        NextToken: undefined,
        WorkGroups: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.WorkGroups !== undefined && output.WorkGroups !== null) {
        contents.WorkGroups = deserializeAws_json1_1WorkGroupsList(output.WorkGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1NamedQuery = (output, context) => {
    let contents = {
        __type: "NamedQuery",
        Database: undefined,
        Description: undefined,
        Name: undefined,
        NamedQueryId: undefined,
        QueryString: undefined,
        WorkGroup: undefined
    };
    if (output.Database !== undefined && output.Database !== null) {
        contents.Database = output.Database;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
        contents.NamedQueryId = output.NamedQueryId;
    }
    if (output.QueryString !== undefined && output.QueryString !== null) {
        contents.QueryString = output.QueryString;
    }
    if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
        contents.WorkGroup = output.WorkGroup;
    }
    return contents;
};
const deserializeAws_json1_1NamedQueryIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NamedQueryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NamedQuery(entry, context));
};
const deserializeAws_json1_1QueryExecution = (output, context) => {
    let contents = {
        __type: "QueryExecution",
        Query: undefined,
        QueryExecutionContext: undefined,
        QueryExecutionId: undefined,
        ResultConfiguration: undefined,
        StatementType: undefined,
        Statistics: undefined,
        Status: undefined,
        WorkGroup: undefined
    };
    if (output.Query !== undefined && output.Query !== null) {
        contents.Query = output.Query;
    }
    if (output.QueryExecutionContext !== undefined &&
        output.QueryExecutionContext !== null) {
        contents.QueryExecutionContext = deserializeAws_json1_1QueryExecutionContext(output.QueryExecutionContext, context);
    }
    if (output.QueryExecutionId !== undefined &&
        output.QueryExecutionId !== null) {
        contents.QueryExecutionId = output.QueryExecutionId;
    }
    if (output.ResultConfiguration !== undefined &&
        output.ResultConfiguration !== null) {
        contents.ResultConfiguration = deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context);
    }
    if (output.StatementType !== undefined && output.StatementType !== null) {
        contents.StatementType = output.StatementType;
    }
    if (output.Statistics !== undefined && output.Statistics !== null) {
        contents.Statistics = deserializeAws_json1_1QueryExecutionStatistics(output.Statistics, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1QueryExecutionStatus(output.Status, context);
    }
    if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
        contents.WorkGroup = output.WorkGroup;
    }
    return contents;
};
const deserializeAws_json1_1QueryExecutionContext = (output, context) => {
    let contents = {
        __type: "QueryExecutionContext",
        Database: undefined
    };
    if (output.Database !== undefined && output.Database !== null) {
        contents.Database = output.Database;
    }
    return contents;
};
const deserializeAws_json1_1QueryExecutionIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1QueryExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QueryExecution(entry, context));
};
const deserializeAws_json1_1QueryExecutionStatistics = (output, context) => {
    let contents = {
        __type: "QueryExecutionStatistics",
        DataManifestLocation: undefined,
        DataScannedInBytes: undefined,
        EngineExecutionTimeInMillis: undefined,
        QueryPlanningTimeInMillis: undefined,
        QueryQueueTimeInMillis: undefined,
        ServiceProcessingTimeInMillis: undefined,
        TotalExecutionTimeInMillis: undefined
    };
    if (output.DataManifestLocation !== undefined &&
        output.DataManifestLocation !== null) {
        contents.DataManifestLocation = output.DataManifestLocation;
    }
    if (output.DataScannedInBytes !== undefined &&
        output.DataScannedInBytes !== null) {
        contents.DataScannedInBytes = output.DataScannedInBytes;
    }
    if (output.EngineExecutionTimeInMillis !== undefined &&
        output.EngineExecutionTimeInMillis !== null) {
        contents.EngineExecutionTimeInMillis = output.EngineExecutionTimeInMillis;
    }
    if (output.QueryPlanningTimeInMillis !== undefined &&
        output.QueryPlanningTimeInMillis !== null) {
        contents.QueryPlanningTimeInMillis = output.QueryPlanningTimeInMillis;
    }
    if (output.QueryQueueTimeInMillis !== undefined &&
        output.QueryQueueTimeInMillis !== null) {
        contents.QueryQueueTimeInMillis = output.QueryQueueTimeInMillis;
    }
    if (output.ServiceProcessingTimeInMillis !== undefined &&
        output.ServiceProcessingTimeInMillis !== null) {
        contents.ServiceProcessingTimeInMillis =
            output.ServiceProcessingTimeInMillis;
    }
    if (output.TotalExecutionTimeInMillis !== undefined &&
        output.TotalExecutionTimeInMillis !== null) {
        contents.TotalExecutionTimeInMillis = output.TotalExecutionTimeInMillis;
    }
    return contents;
};
const deserializeAws_json1_1QueryExecutionStatus = (output, context) => {
    let contents = {
        __type: "QueryExecutionStatus",
        CompletionDateTime: undefined,
        State: undefined,
        StateChangeReason: undefined,
        SubmissionDateTime: undefined
    };
    if (output.CompletionDateTime !== undefined &&
        output.CompletionDateTime !== null) {
        contents.CompletionDateTime = new Date(Math.round(output.CompletionDateTime * 1000));
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    if (output.StateChangeReason !== undefined &&
        output.StateChangeReason !== null) {
        contents.StateChangeReason = output.StateChangeReason;
    }
    if (output.SubmissionDateTime !== undefined &&
        output.SubmissionDateTime !== null) {
        contents.SubmissionDateTime = new Date(Math.round(output.SubmissionDateTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined,
        ResourceName: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ResourceName !== undefined && output.ResourceName !== null) {
        contents.ResourceName = output.ResourceName;
    }
    return contents;
};
const deserializeAws_json1_1ResultConfiguration = (output, context) => {
    let contents = {
        __type: "ResultConfiguration",
        EncryptionConfiguration: undefined,
        OutputLocation: undefined
    };
    if (output.EncryptionConfiguration !== undefined &&
        output.EncryptionConfiguration !== null) {
        contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context);
    }
    if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
        contents.OutputLocation = output.OutputLocation;
    }
    return contents;
};
const deserializeAws_json1_1ResultSet = (output, context) => {
    let contents = {
        __type: "ResultSet",
        ResultSetMetadata: undefined,
        Rows: undefined
    };
    if (output.ResultSetMetadata !== undefined &&
        output.ResultSetMetadata !== null) {
        contents.ResultSetMetadata = deserializeAws_json1_1ResultSetMetadata(output.ResultSetMetadata, context);
    }
    if (output.Rows !== undefined && output.Rows !== null) {
        contents.Rows = deserializeAws_json1_1RowList(output.Rows, context);
    }
    return contents;
};
const deserializeAws_json1_1ResultSetMetadata = (output, context) => {
    let contents = {
        __type: "ResultSetMetadata",
        ColumnInfo: undefined
    };
    if (output.ColumnInfo !== undefined && output.ColumnInfo !== null) {
        contents.ColumnInfo = deserializeAws_json1_1ColumnInfoList(output.ColumnInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1Row = (output, context) => {
    let contents = {
        __type: "Row",
        Data: undefined
    };
    if (output.Data !== undefined && output.Data !== null) {
        contents.Data = deserializeAws_json1_1datumList(output.Data, context);
    }
    return contents;
};
const deserializeAws_json1_1RowList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Row(entry, context));
};
const deserializeAws_json1_1StartQueryExecutionOutput = (output, context) => {
    let contents = {
        __type: "StartQueryExecutionOutput",
        QueryExecutionId: undefined
    };
    if (output.QueryExecutionId !== undefined &&
        output.QueryExecutionId !== null) {
        contents.QueryExecutionId = output.QueryExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1StopQueryExecutionOutput = (output, context) => {
    let contents = {
        __type: "StopQueryExecutionOutput"
    };
    return contents;
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        Message: undefined,
        Reason: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_json1_1UnprocessedNamedQueryId = (output, context) => {
    let contents = {
        __type: "UnprocessedNamedQueryId",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        NamedQueryId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
        contents.NamedQueryId = output.NamedQueryId;
    }
    return contents;
};
const deserializeAws_json1_1UnprocessedNamedQueryIdList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UnprocessedNamedQueryId(entry, context));
};
const deserializeAws_json1_1UnprocessedQueryExecutionId = (output, context) => {
    let contents = {
        __type: "UnprocessedQueryExecutionId",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        QueryExecutionId: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.QueryExecutionId !== undefined &&
        output.QueryExecutionId !== null) {
        contents.QueryExecutionId = output.QueryExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1UnprocessedQueryExecutionIdList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context));
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdateWorkGroupOutput = (output, context) => {
    let contents = {
        __type: "UpdateWorkGroupOutput"
    };
    return contents;
};
const deserializeAws_json1_1WorkGroup = (output, context) => {
    let contents = {
        __type: "WorkGroup",
        Configuration: undefined,
        CreationTime: undefined,
        Description: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = deserializeAws_json1_1WorkGroupConfiguration(output.Configuration, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1WorkGroupConfiguration = (output, context) => {
    let contents = {
        __type: "WorkGroupConfiguration",
        BytesScannedCutoffPerQuery: undefined,
        EnforceWorkGroupConfiguration: undefined,
        PublishCloudWatchMetricsEnabled: undefined,
        RequesterPaysEnabled: undefined,
        ResultConfiguration: undefined
    };
    if (output.BytesScannedCutoffPerQuery !== undefined &&
        output.BytesScannedCutoffPerQuery !== null) {
        contents.BytesScannedCutoffPerQuery = output.BytesScannedCutoffPerQuery;
    }
    if (output.EnforceWorkGroupConfiguration !== undefined &&
        output.EnforceWorkGroupConfiguration !== null) {
        contents.EnforceWorkGroupConfiguration =
            output.EnforceWorkGroupConfiguration;
    }
    if (output.PublishCloudWatchMetricsEnabled !== undefined &&
        output.PublishCloudWatchMetricsEnabled !== null) {
        contents.PublishCloudWatchMetricsEnabled =
            output.PublishCloudWatchMetricsEnabled;
    }
    if (output.RequesterPaysEnabled !== undefined &&
        output.RequesterPaysEnabled !== null) {
        contents.RequesterPaysEnabled = output.RequesterPaysEnabled;
    }
    if (output.ResultConfiguration !== undefined &&
        output.ResultConfiguration !== null) {
        contents.ResultConfiguration = deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkGroupSummary = (output, context) => {
    let contents = {
        __type: "WorkGroupSummary",
        CreationTime: undefined,
        Description: undefined,
        Name: undefined,
        State: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.State !== undefined && output.State !== null) {
        contents.State = output.State;
    }
    return contents;
};
const deserializeAws_json1_1WorkGroupsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkGroupSummary(entry, context));
};
const deserializeAws_json1_1datumList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Datum(entry, context));
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