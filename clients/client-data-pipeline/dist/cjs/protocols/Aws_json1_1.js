"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1ActivatePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.ActivatePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ActivatePipelineCommand = serializeAws_json1_1ActivatePipelineCommand;
async function serializeAws_json1_1AddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.AddTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
async function serializeAws_json1_1CreatePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.CreatePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePipelineCommand = serializeAws_json1_1CreatePipelineCommand;
async function serializeAws_json1_1DeactivatePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.DeactivatePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeactivatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeactivatePipelineCommand = serializeAws_json1_1DeactivatePipelineCommand;
async function serializeAws_json1_1DeletePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.DeletePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePipelineCommand = serializeAws_json1_1DeletePipelineCommand;
async function serializeAws_json1_1DescribeObjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.DescribeObjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeObjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeObjectsCommand = serializeAws_json1_1DescribeObjectsCommand;
async function serializeAws_json1_1DescribePipelinesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.DescribePipelines";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePipelinesCommand = serializeAws_json1_1DescribePipelinesCommand;
async function serializeAws_json1_1EvaluateExpressionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.EvaluateExpression";
    let body;
    body = JSON.stringify(serializeAws_json1_1EvaluateExpressionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EvaluateExpressionCommand = serializeAws_json1_1EvaluateExpressionCommand;
async function serializeAws_json1_1GetPipelineDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.GetPipelineDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPipelineDefinitionCommand = serializeAws_json1_1GetPipelineDefinitionCommand;
async function serializeAws_json1_1ListPipelinesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.ListPipelines";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPipelinesCommand = serializeAws_json1_1ListPipelinesCommand;
async function serializeAws_json1_1PollForTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.PollForTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PollForTaskCommand = serializeAws_json1_1PollForTaskCommand;
async function serializeAws_json1_1PutPipelineDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.PutPipelineDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutPipelineDefinitionCommand = serializeAws_json1_1PutPipelineDefinitionCommand;
async function serializeAws_json1_1QueryObjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.QueryObjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1QueryObjectsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1QueryObjectsCommand = serializeAws_json1_1QueryObjectsCommand;
async function serializeAws_json1_1RemoveTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.RemoveTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
async function serializeAws_json1_1ReportTaskProgressCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.ReportTaskProgress";
    let body;
    body = JSON.stringify(serializeAws_json1_1ReportTaskProgressInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ReportTaskProgressCommand = serializeAws_json1_1ReportTaskProgressCommand;
async function serializeAws_json1_1ReportTaskRunnerHeartbeatCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.ReportTaskRunnerHeartbeat";
    let body;
    body = JSON.stringify(serializeAws_json1_1ReportTaskRunnerHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = serializeAws_json1_1ReportTaskRunnerHeartbeatCommand;
async function serializeAws_json1_1SetStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.SetStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetStatusCommand = serializeAws_json1_1SetStatusCommand;
async function serializeAws_json1_1SetTaskStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.SetTaskStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTaskStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetTaskStatusCommand = serializeAws_json1_1SetTaskStatusCommand;
async function serializeAws_json1_1ValidatePipelineDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "DataPipeline.ValidatePipelineDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1ValidatePipelineDefinitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ValidatePipelineDefinitionCommand = serializeAws_json1_1ValidatePipelineDefinitionCommand;
async function deserializeAws_json1_1ActivatePipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ActivatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ActivatePipelineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivatePipelineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ActivatePipelineCommand = deserializeAws_json1_1ActivatePipelineCommand;
async function deserializeAws_json1_1ActivatePipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1AddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
async function deserializeAws_json1_1AddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePipelineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePipelineCommand = deserializeAws_json1_1CreatePipelineCommand;
async function deserializeAws_json1_1CreatePipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1DeactivatePipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeactivatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeactivatePipelineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeactivatePipelineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeactivatePipelineCommand = deserializeAws_json1_1DeactivatePipelineCommand;
async function deserializeAws_json1_1DeactivatePipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeletePipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeletePipelineCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeletePipelineCommand = deserializeAws_json1_1DeletePipelineCommand;
async function deserializeAws_json1_1DeletePipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeObjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeObjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeObjectsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeObjectsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeObjectsCommand = deserializeAws_json1_1DescribeObjectsCommand;
async function deserializeAws_json1_1DescribeObjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePipelinesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePipelinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePipelinesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePipelinesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePipelinesCommand = deserializeAws_json1_1DescribePipelinesCommand;
async function deserializeAws_json1_1DescribePipelinesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1EvaluateExpressionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EvaluateExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EvaluateExpressionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EvaluateExpressionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EvaluateExpressionCommand = deserializeAws_json1_1EvaluateExpressionCommand;
async function deserializeAws_json1_1EvaluateExpressionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskNotFoundException":
        case "com.amazon.setl.webservice#TaskNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetPipelineDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineDefinitionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPipelineDefinitionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPipelineDefinitionCommand = deserializeAws_json1_1GetPipelineDefinitionCommand;
async function deserializeAws_json1_1GetPipelineDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListPipelinesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPipelinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPipelinesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPipelinesCommand = deserializeAws_json1_1ListPipelinesCommand;
async function deserializeAws_json1_1ListPipelinesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1PollForTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PollForTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForTaskOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PollForTaskOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PollForTaskCommand = deserializeAws_json1_1PollForTaskCommand;
async function deserializeAws_json1_1PollForTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskNotFoundException":
        case "com.amazon.setl.webservice#TaskNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutPipelineDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutPipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPipelineDefinitionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutPipelineDefinitionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutPipelineDefinitionCommand = deserializeAws_json1_1PutPipelineDefinitionCommand;
async function deserializeAws_json1_1PutPipelineDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1QueryObjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1QueryObjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1QueryObjectsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "QueryObjectsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1QueryObjectsCommand = deserializeAws_json1_1QueryObjectsCommand;
async function deserializeAws_json1_1QueryObjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RemoveTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
async function deserializeAws_json1_1RemoveTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ReportTaskProgressCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ReportTaskProgressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReportTaskProgressOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReportTaskProgressOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ReportTaskProgressCommand = deserializeAws_json1_1ReportTaskProgressCommand;
async function deserializeAws_json1_1ReportTaskProgressCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskNotFoundException":
        case "com.amazon.setl.webservice#TaskNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReportTaskRunnerHeartbeatOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand;
async function deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
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
async function deserializeAws_json1_1SetStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetStatusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetStatusCommand = deserializeAws_json1_1SetStatusCommand;
async function deserializeAws_json1_1SetStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetTaskStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetTaskStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetTaskStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SetTaskStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetTaskStatusCommand = deserializeAws_json1_1SetTaskStatusCommand;
async function deserializeAws_json1_1SetTaskStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskNotFoundException":
        case "com.amazon.setl.webservice#TaskNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ValidatePipelineDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ValidatePipelineDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ValidatePipelineDefinitionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ValidatePipelineDefinitionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ValidatePipelineDefinitionCommand = deserializeAws_json1_1ValidatePipelineDefinitionCommand;
async function deserializeAws_json1_1ValidatePipelineDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "com.amazon.setl.webservice#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazon.setl.webservice#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineDeletedException":
        case "com.amazon.setl.webservice#PipelineDeletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazon.setl.webservice#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = Object.assign({ name: "InternalServiceError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineDeletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineDeletedException(body, context);
    const contents = Object.assign({ name: "PipelineDeletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNotFoundException(body, context);
    const contents = Object.assign({ name: "PipelineNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TaskNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaskNotFoundException(body, context);
    const contents = Object.assign({ name: "TaskNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1ActivatePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.parameterValues !== undefined) {
        bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(input.parameterValues, context);
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.startTimestamp !== undefined) {
        bodyParams["startTimestamp"] = Math.round(input.startTimestamp.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1tagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1tagList(input.tags, context);
    }
    if (input.uniqueId !== undefined) {
        bodyParams["uniqueId"] = input.uniqueId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeactivatePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.cancelActive !== undefined) {
        bodyParams["cancelActive"] = input.cancelActive;
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeObjectsInput = (input, context) => {
    const bodyParams = {};
    if (input.evaluateExpressions !== undefined) {
        bodyParams["evaluateExpressions"] = input.evaluateExpressions;
    }
    if (input.marker !== undefined) {
        bodyParams["marker"] = input.marker;
    }
    if (input.objectIds !== undefined) {
        bodyParams["objectIds"] = serializeAws_json1_1idList(input.objectIds, context);
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePipelinesInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineIds !== undefined) {
        bodyParams["pipelineIds"] = serializeAws_json1_1idList(input.pipelineIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EvaluateExpressionInput = (input, context) => {
    const bodyParams = {};
    if (input.expression !== undefined) {
        bodyParams["expression"] = input.expression;
    }
    if (input.objectId !== undefined) {
        bodyParams["objectId"] = input.objectId;
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    return bodyParams;
};
const serializeAws_json1_1Field = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.refValue !== undefined) {
        bodyParams["refValue"] = input.refValue;
    }
    if (input.stringValue !== undefined) {
        bodyParams["stringValue"] = input.stringValue;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPipelineDefinitionInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceIdentity = (input, context) => {
    const bodyParams = {};
    if (input.document !== undefined) {
        bodyParams["document"] = input.document;
    }
    if (input.signature !== undefined) {
        bodyParams["signature"] = input.signature;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPipelinesInput = (input, context) => {
    const bodyParams = {};
    if (input.marker !== undefined) {
        bodyParams["marker"] = input.marker;
    }
    return bodyParams;
};
const serializeAws_json1_1Operator = (input, context) => {
    const bodyParams = {};
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.values !== undefined) {
        bodyParams["values"] = serializeAws_json1_1stringList(input.values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterAttribute = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.stringValue !== undefined) {
        bodyParams["stringValue"] = input.stringValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParameterObject = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1ParameterAttributeList(input.attributes, context);
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterObjectList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterObject(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ParameterValue = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.stringValue !== undefined) {
        bodyParams["stringValue"] = input.stringValue;
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterValue(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PipelineObject = (input, context) => {
    const bodyParams = {};
    if (input.fields !== undefined) {
        bodyParams["fields"] = serializeAws_json1_1fieldList(input.fields, context);
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1PipelineObjectList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PipelineObject(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PollForTaskInput = (input, context) => {
    const bodyParams = {};
    if (input.hostname !== undefined) {
        bodyParams["hostname"] = input.hostname;
    }
    if (input.instanceIdentity !== undefined) {
        bodyParams["instanceIdentity"] = serializeAws_json1_1InstanceIdentity(input.instanceIdentity, context);
    }
    if (input.workerGroup !== undefined) {
        bodyParams["workerGroup"] = input.workerGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1PutPipelineDefinitionInput = (input, context) => {
    const bodyParams = {};
    if (input.parameterObjects !== undefined) {
        bodyParams["parameterObjects"] = serializeAws_json1_1ParameterObjectList(input.parameterObjects, context);
    }
    if (input.parameterValues !== undefined) {
        bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(input.parameterValues, context);
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.pipelineObjects !== undefined) {
        bodyParams["pipelineObjects"] = serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Query = (input, context) => {
    const bodyParams = {};
    if (input.selectors !== undefined) {
        bodyParams["selectors"] = serializeAws_json1_1SelectorList(input.selectors, context);
    }
    return bodyParams;
};
const serializeAws_json1_1QueryObjectsInput = (input, context) => {
    const bodyParams = {};
    if (input.limit !== undefined) {
        bodyParams["limit"] = input.limit;
    }
    if (input.marker !== undefined) {
        bodyParams["marker"] = input.marker;
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.query !== undefined) {
        bodyParams["query"] = serializeAws_json1_1Query(input.query, context);
    }
    if (input.sphere !== undefined) {
        bodyParams["sphere"] = input.sphere;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1stringList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ReportTaskProgressInput = (input, context) => {
    const bodyParams = {};
    if (input.fields !== undefined) {
        bodyParams["fields"] = serializeAws_json1_1fieldList(input.fields, context);
    }
    if (input.taskId !== undefined) {
        bodyParams["taskId"] = input.taskId;
    }
    return bodyParams;
};
const serializeAws_json1_1ReportTaskRunnerHeartbeatInput = (input, context) => {
    const bodyParams = {};
    if (input.hostname !== undefined) {
        bodyParams["hostname"] = input.hostname;
    }
    if (input.taskrunnerId !== undefined) {
        bodyParams["taskrunnerId"] = input.taskrunnerId;
    }
    if (input.workerGroup !== undefined) {
        bodyParams["workerGroup"] = input.workerGroup;
    }
    return bodyParams;
};
const serializeAws_json1_1Selector = (input, context) => {
    const bodyParams = {};
    if (input.fieldName !== undefined) {
        bodyParams["fieldName"] = input.fieldName;
    }
    if (input.operator !== undefined) {
        bodyParams["operator"] = serializeAws_json1_1Operator(input.operator, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SelectorList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Selector(entry, context));
    }
    return contents;
};
const serializeAws_json1_1SetStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.objectIds !== undefined) {
        bodyParams["objectIds"] = serializeAws_json1_1idList(input.objectIds, context);
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1SetTaskStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.errorId !== undefined) {
        bodyParams["errorId"] = input.errorId;
    }
    if (input.errorMessage !== undefined) {
        bodyParams["errorMessage"] = input.errorMessage;
    }
    if (input.errorStackTrace !== undefined) {
        bodyParams["errorStackTrace"] = input.errorStackTrace;
    }
    if (input.taskId !== undefined) {
        bodyParams["taskId"] = input.taskId;
    }
    if (input.taskStatus !== undefined) {
        bodyParams["taskStatus"] = input.taskStatus;
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
const serializeAws_json1_1ValidatePipelineDefinitionInput = (input, context) => {
    const bodyParams = {};
    if (input.parameterObjects !== undefined) {
        bodyParams["parameterObjects"] = serializeAws_json1_1ParameterObjectList(input.parameterObjects, context);
    }
    if (input.parameterValues !== undefined) {
        bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(input.parameterValues, context);
    }
    if (input.pipelineId !== undefined) {
        bodyParams["pipelineId"] = input.pipelineId;
    }
    if (input.pipelineObjects !== undefined) {
        bodyParams["pipelineObjects"] = serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context);
    }
    return bodyParams;
};
const serializeAws_json1_1fieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Field(entry, context));
    }
    return contents;
};
const serializeAws_json1_1idList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1stringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1tagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1ActivatePipelineOutput = (output, context) => {
    let contents = {
        __type: "ActivatePipelineOutput"
    };
    return contents;
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    let contents = {
        __type: "AddTagsOutput"
    };
    return contents;
};
const deserializeAws_json1_1CreatePipelineOutput = (output, context) => {
    let contents = {
        __type: "CreatePipelineOutput",
        pipelineId: undefined
    };
    if (output.pipelineId !== undefined && output.pipelineId !== null) {
        contents.pipelineId = output.pipelineId;
    }
    return contents;
};
const deserializeAws_json1_1DeactivatePipelineOutput = (output, context) => {
    let contents = {
        __type: "DeactivatePipelineOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeObjectsOutput = (output, context) => {
    let contents = {
        __type: "DescribeObjectsOutput",
        hasMoreResults: undefined,
        marker: undefined,
        pipelineObjects: undefined
    };
    if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
        contents.hasMoreResults = output.hasMoreResults;
    }
    if (output.marker !== undefined && output.marker !== null) {
        contents.marker = output.marker;
    }
    if (output.pipelineObjects !== undefined && output.pipelineObjects !== null) {
        contents.pipelineObjects = deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePipelinesOutput = (output, context) => {
    let contents = {
        __type: "DescribePipelinesOutput",
        pipelineDescriptionList: undefined
    };
    if (output.pipelineDescriptionList !== undefined &&
        output.pipelineDescriptionList !== null) {
        contents.pipelineDescriptionList = deserializeAws_json1_1PipelineDescriptionList(output.pipelineDescriptionList, context);
    }
    return contents;
};
const deserializeAws_json1_1EvaluateExpressionOutput = (output, context) => {
    let contents = {
        __type: "EvaluateExpressionOutput",
        evaluatedExpression: undefined
    };
    if (output.evaluatedExpression !== undefined &&
        output.evaluatedExpression !== null) {
        contents.evaluatedExpression = output.evaluatedExpression;
    }
    return contents;
};
const deserializeAws_json1_1Field = (output, context) => {
    let contents = {
        __type: "Field",
        key: undefined,
        refValue: undefined,
        stringValue: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.refValue !== undefined && output.refValue !== null) {
        contents.refValue = output.refValue;
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        contents.stringValue = output.stringValue;
    }
    return contents;
};
const deserializeAws_json1_1GetPipelineDefinitionOutput = (output, context) => {
    let contents = {
        __type: "GetPipelineDefinitionOutput",
        parameterObjects: undefined,
        parameterValues: undefined,
        pipelineObjects: undefined
    };
    if (output.parameterObjects !== undefined &&
        output.parameterObjects !== null) {
        contents.parameterObjects = deserializeAws_json1_1ParameterObjectList(output.parameterObjects, context);
    }
    if (output.parameterValues !== undefined && output.parameterValues !== null) {
        contents.parameterValues = deserializeAws_json1_1ParameterValueList(output.parameterValues, context);
    }
    if (output.pipelineObjects !== undefined && output.pipelineObjects !== null) {
        contents.pipelineObjects = deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context);
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    let contents = {
        __type: "InternalServiceError",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListPipelinesOutput = (output, context) => {
    let contents = {
        __type: "ListPipelinesOutput",
        hasMoreResults: undefined,
        marker: undefined,
        pipelineIdList: undefined
    };
    if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
        contents.hasMoreResults = output.hasMoreResults;
    }
    if (output.marker !== undefined && output.marker !== null) {
        contents.marker = output.marker;
    }
    if (output.pipelineIdList !== undefined && output.pipelineIdList !== null) {
        contents.pipelineIdList = deserializeAws_json1_1pipelineList(output.pipelineIdList, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterAttribute = (output, context) => {
    let contents = {
        __type: "ParameterAttribute",
        key: undefined,
        stringValue: undefined
    };
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        contents.stringValue = output.stringValue;
    }
    return contents;
};
const deserializeAws_json1_1ParameterAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterAttribute(entry, context));
};
const deserializeAws_json1_1ParameterObject = (output, context) => {
    let contents = {
        __type: "ParameterObject",
        attributes: undefined,
        id: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1ParameterAttributeList(output.attributes, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    return contents;
};
const deserializeAws_json1_1ParameterObjectList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterObject(entry, context));
};
const deserializeAws_json1_1ParameterValue = (output, context) => {
    let contents = {
        __type: "ParameterValue",
        id: undefined,
        stringValue: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.stringValue !== undefined && output.stringValue !== null) {
        contents.stringValue = output.stringValue;
    }
    return contents;
};
const deserializeAws_json1_1ParameterValueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterValue(entry, context));
};
const deserializeAws_json1_1PipelineDeletedException = (output, context) => {
    let contents = {
        __type: "PipelineDeletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PipelineDescription = (output, context) => {
    let contents = {
        __type: "PipelineDescription",
        description: undefined,
        fields: undefined,
        name: undefined,
        pipelineId: undefined,
        tags: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.fields !== undefined && output.fields !== null) {
        contents.fields = deserializeAws_json1_1fieldList(output.fields, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.pipelineId !== undefined && output.pipelineId !== null) {
        contents.pipelineId = output.pipelineId;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1tagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1PipelineDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PipelineDescription(entry, context));
};
const deserializeAws_json1_1PipelineIdName = (output, context) => {
    let contents = {
        __type: "PipelineIdName",
        id: undefined,
        name: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1PipelineNotFoundException = (output, context) => {
    let contents = {
        __type: "PipelineNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PipelineObject = (output, context) => {
    let contents = {
        __type: "PipelineObject",
        fields: undefined,
        id: undefined,
        name: undefined
    };
    if (output.fields !== undefined && output.fields !== null) {
        contents.fields = deserializeAws_json1_1fieldList(output.fields, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1PipelineObjectList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PipelineObject(entry, context));
};
const deserializeAws_json1_1PipelineObjectMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1PipelineObject(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1PollForTaskOutput = (output, context) => {
    let contents = {
        __type: "PollForTaskOutput",
        taskObject: undefined
    };
    if (output.taskObject !== undefined && output.taskObject !== null) {
        contents.taskObject = deserializeAws_json1_1TaskObject(output.taskObject, context);
    }
    return contents;
};
const deserializeAws_json1_1PutPipelineDefinitionOutput = (output, context) => {
    let contents = {
        __type: "PutPipelineDefinitionOutput",
        errored: undefined,
        validationErrors: undefined,
        validationWarnings: undefined
    };
    if (output.errored !== undefined && output.errored !== null) {
        contents.errored = output.errored;
    }
    if (output.validationErrors !== undefined &&
        output.validationErrors !== null) {
        contents.validationErrors = deserializeAws_json1_1ValidationErrors(output.validationErrors, context);
    }
    if (output.validationWarnings !== undefined &&
        output.validationWarnings !== null) {
        contents.validationWarnings = deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context);
    }
    return contents;
};
const deserializeAws_json1_1QueryObjectsOutput = (output, context) => {
    let contents = {
        __type: "QueryObjectsOutput",
        hasMoreResults: undefined,
        ids: undefined,
        marker: undefined
    };
    if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
        contents.hasMoreResults = output.hasMoreResults;
    }
    if (output.ids !== undefined && output.ids !== null) {
        contents.ids = deserializeAws_json1_1idList(output.ids, context);
    }
    if (output.marker !== undefined && output.marker !== null) {
        contents.marker = output.marker;
    }
    return contents;
};
const deserializeAws_json1_1RemoveTagsOutput = (output, context) => {
    let contents = {
        __type: "RemoveTagsOutput"
    };
    return contents;
};
const deserializeAws_json1_1ReportTaskProgressOutput = (output, context) => {
    let contents = {
        __type: "ReportTaskProgressOutput",
        canceled: undefined
    };
    if (output.canceled !== undefined && output.canceled !== null) {
        contents.canceled = output.canceled;
    }
    return contents;
};
const deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput = (output, context) => {
    let contents = {
        __type: "ReportTaskRunnerHeartbeatOutput",
        terminate: undefined
    };
    if (output.terminate !== undefined && output.terminate !== null) {
        contents.terminate = output.terminate;
    }
    return contents;
};
const deserializeAws_json1_1SetTaskStatusOutput = (output, context) => {
    let contents = {
        __type: "SetTaskStatusOutput"
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
const deserializeAws_json1_1TaskNotFoundException = (output, context) => {
    let contents = {
        __type: "TaskNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TaskObject = (output, context) => {
    let contents = {
        __type: "TaskObject",
        attemptId: undefined,
        objects: undefined,
        pipelineId: undefined,
        taskId: undefined
    };
    if (output.attemptId !== undefined && output.attemptId !== null) {
        contents.attemptId = output.attemptId;
    }
    if (output.objects !== undefined && output.objects !== null) {
        contents.objects = deserializeAws_json1_1PipelineObjectMap(output.objects, context);
    }
    if (output.pipelineId !== undefined && output.pipelineId !== null) {
        contents.pipelineId = output.pipelineId;
    }
    if (output.taskId !== undefined && output.taskId !== null) {
        contents.taskId = output.taskId;
    }
    return contents;
};
const deserializeAws_json1_1ValidatePipelineDefinitionOutput = (output, context) => {
    let contents = {
        __type: "ValidatePipelineDefinitionOutput",
        errored: undefined,
        validationErrors: undefined,
        validationWarnings: undefined
    };
    if (output.errored !== undefined && output.errored !== null) {
        contents.errored = output.errored;
    }
    if (output.validationErrors !== undefined &&
        output.validationErrors !== null) {
        contents.validationErrors = deserializeAws_json1_1ValidationErrors(output.validationErrors, context);
    }
    if (output.validationWarnings !== undefined &&
        output.validationWarnings !== null) {
        contents.validationWarnings = deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context);
    }
    return contents;
};
const deserializeAws_json1_1ValidationError = (output, context) => {
    let contents = {
        __type: "ValidationError",
        errors: undefined,
        id: undefined
    };
    if (output.errors !== undefined && output.errors !== null) {
        contents.errors = deserializeAws_json1_1validationMessages(output.errors, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    return contents;
};
const deserializeAws_json1_1ValidationErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ValidationError(entry, context));
};
const deserializeAws_json1_1ValidationWarning = (output, context) => {
    let contents = {
        __type: "ValidationWarning",
        id: undefined,
        warnings: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.warnings !== undefined && output.warnings !== null) {
        contents.warnings = deserializeAws_json1_1validationMessages(output.warnings, context);
    }
    return contents;
};
const deserializeAws_json1_1ValidationWarnings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ValidationWarning(entry, context));
};
const deserializeAws_json1_1fieldList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Field(entry, context));
};
const deserializeAws_json1_1idList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1pipelineList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PipelineIdName(entry, context));
};
const deserializeAws_json1_1tagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1validationMessages = (output, context) => {
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