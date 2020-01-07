"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0CreateActivityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.CreateActivity";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateActivityCommand = serializeAws_json1_0CreateActivityCommand;
async function serializeAws_json1_0CreateStateMachineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.CreateStateMachine";
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CreateStateMachineCommand = serializeAws_json1_0CreateStateMachineCommand;
async function serializeAws_json1_0DeleteActivityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DeleteActivity";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteActivityCommand = serializeAws_json1_0DeleteActivityCommand;
async function serializeAws_json1_0DeleteStateMachineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DeleteStateMachine";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeleteStateMachineCommand = serializeAws_json1_0DeleteStateMachineCommand;
async function serializeAws_json1_0DescribeActivityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DescribeActivity";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeActivityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeActivityCommand = serializeAws_json1_0DescribeActivityCommand;
async function serializeAws_json1_0DescribeExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DescribeExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeExecutionCommand = serializeAws_json1_0DescribeExecutionCommand;
async function serializeAws_json1_0DescribeStateMachineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DescribeStateMachine";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeStateMachineCommand = serializeAws_json1_0DescribeStateMachineCommand;
async function serializeAws_json1_0DescribeStateMachineForExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.DescribeStateMachineForExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStateMachineForExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeStateMachineForExecutionCommand = serializeAws_json1_0DescribeStateMachineForExecutionCommand;
async function serializeAws_json1_0GetActivityTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.GetActivityTask";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetActivityTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetActivityTaskCommand = serializeAws_json1_0GetActivityTaskCommand;
async function serializeAws_json1_0GetExecutionHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.GetExecutionHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetExecutionHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetExecutionHistoryCommand = serializeAws_json1_0GetExecutionHistoryCommand;
async function serializeAws_json1_0ListActivitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.ListActivities";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListActivitiesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListActivitiesCommand = serializeAws_json1_0ListActivitiesCommand;
async function serializeAws_json1_0ListExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.ListExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListExecutionsCommand = serializeAws_json1_0ListExecutionsCommand;
async function serializeAws_json1_0ListStateMachinesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.ListStateMachines";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListStateMachinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListStateMachinesCommand = serializeAws_json1_0ListStateMachinesCommand;
async function serializeAws_json1_0ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
async function serializeAws_json1_0SendTaskFailureCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskFailure";
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskFailureInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0SendTaskFailureCommand = serializeAws_json1_0SendTaskFailureCommand;
async function serializeAws_json1_0SendTaskHeartbeatCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskHeartbeat";
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0SendTaskHeartbeatCommand = serializeAws_json1_0SendTaskHeartbeatCommand;
async function serializeAws_json1_0SendTaskSuccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskSuccess";
    let body;
    body = JSON.stringify(serializeAws_json1_0SendTaskSuccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0SendTaskSuccessCommand = serializeAws_json1_0SendTaskSuccessCommand;
async function serializeAws_json1_0StartExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.StartExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0StartExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0StartExecutionCommand = serializeAws_json1_0StartExecutionCommand;
async function serializeAws_json1_0StopExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.StopExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0StopExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0StopExecutionCommand = serializeAws_json1_0StopExecutionCommand;
async function serializeAws_json1_0TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
async function serializeAws_json1_0UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
async function serializeAws_json1_0UpdateStateMachineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "AWSStepFunctions.UpdateStateMachine";
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateStateMachineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UpdateStateMachineCommand = serializeAws_json1_0UpdateStateMachineCommand;
async function deserializeAws_json1_0CreateActivityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateActivityOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateActivityOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateActivityCommand = deserializeAws_json1_0CreateActivityCommand;
async function deserializeAws_json1_0CreateActivityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActivityLimitExceeded":
        case "com.amazonaws.swf.service.v2.model#ActivityLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ActivityLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidName":
        case "com.amazonaws.swf.service.v2.model#InvalidName":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTags":
        case "com.amazonaws.swf.service.v2.model#TooManyTags":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0CreateStateMachineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CreateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateStateMachineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStateMachineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CreateStateMachineCommand = deserializeAws_json1_0CreateStateMachineCommand;
async function deserializeAws_json1_0CreateStateMachineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDefinition":
        case "com.amazonaws.swf.service.v2.model#InvalidDefinition":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.swf.service.v2.model#InvalidLoggingConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidName":
        case "com.amazonaws.swf.service.v2.model#InvalidName":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineAlreadyExists":
        case "com.amazonaws.swf.service.v2.model#StateMachineAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineLimitExceeded":
        case "com.amazonaws.swf.service.v2.model#StateMachineLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.swf.service.v2.model#StateMachineTypeNotSupported":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTags":
        case "com.amazonaws.swf.service.v2.model#TooManyTags":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DeleteActivityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteActivityOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteActivityOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteActivityCommand = deserializeAws_json1_0DeleteActivityCommand;
async function deserializeAws_json1_0DeleteActivityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DeleteStateMachineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeleteStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteStateMachineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteStateMachineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeleteStateMachineCommand = deserializeAws_json1_0DeleteStateMachineCommand;
async function deserializeAws_json1_0DeleteStateMachineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeActivityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeActivityOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeActivityOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeActivityCommand = deserializeAws_json1_0DescribeActivityCommand;
async function deserializeAws_json1_0DescribeActivityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ActivityDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeExecutionCommand = deserializeAws_json1_0DescribeExecutionCommand;
async function deserializeAws_json1_0DescribeExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeStateMachineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStateMachineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStateMachineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeStateMachineCommand = deserializeAws_json1_0DescribeStateMachineCommand;
async function deserializeAws_json1_0DescribeStateMachineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeStateMachineForExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStateMachineForExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStateMachineForExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeStateMachineForExecutionCommand = deserializeAws_json1_0DescribeStateMachineForExecutionCommand;
async function deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0GetActivityTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetActivityTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetActivityTaskOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetActivityTaskOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetActivityTaskCommand = deserializeAws_json1_0GetActivityTaskCommand;
async function deserializeAws_json1_0GetActivityTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ActivityDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ActivityWorkerLimitExceeded":
        case "com.amazonaws.swf.service.v2.model#ActivityWorkerLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ActivityWorkerLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0GetExecutionHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetExecutionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetExecutionHistoryOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetExecutionHistoryOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetExecutionHistoryCommand = deserializeAws_json1_0GetExecutionHistoryCommand;
async function deserializeAws_json1_0GetExecutionHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListActivitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListActivitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListActivitiesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListActivitiesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListActivitiesCommand = deserializeAws_json1_0ListActivitiesCommand;
async function deserializeAws_json1_0ListActivitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListExecutionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListExecutionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListExecutionsCommand = deserializeAws_json1_0ListExecutionsCommand;
async function deserializeAws_json1_0ListExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.swf.service.v2.model#StateMachineTypeNotSupported":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListStateMachinesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListStateMachinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListStateMachinesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStateMachinesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListStateMachinesCommand = deserializeAws_json1_0ListStateMachinesCommand;
async function deserializeAws_json1_0ListStateMachinesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
async function deserializeAws_json1_0ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0SendTaskFailureCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0SendTaskFailureCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskFailureOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendTaskFailureOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0SendTaskFailureCommand = deserializeAws_json1_0SendTaskFailureCommand;
async function deserializeAws_json1_0SendTaskFailureCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskTimedOut":
        case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0SendTaskHeartbeatCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskHeartbeatOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendTaskHeartbeatOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0SendTaskHeartbeatCommand = deserializeAws_json1_0SendTaskHeartbeatCommand;
async function deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskTimedOut":
        case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0SendTaskSuccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0SendTaskSuccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendTaskSuccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendTaskSuccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0SendTaskSuccessCommand = deserializeAws_json1_0SendTaskSuccessCommand;
async function deserializeAws_json1_0SendTaskSuccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidOutput":
        case "com.amazonaws.swf.service.v2.model#InvalidOutput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidOutputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidToken":
        case "com.amazonaws.swf.service.v2.model#InvalidToken":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskTimedOut":
        case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0StartExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0StartExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StartExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0StartExecutionCommand = deserializeAws_json1_0StartExecutionCommand;
async function deserializeAws_json1_0StartExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExecutionAlreadyExists":
        case "com.amazonaws.swf.service.v2.model#ExecutionAlreadyExists":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionAlreadyExistsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExecutionLimitExceeded":
        case "com.amazonaws.swf.service.v2.model#ExecutionLimitExceeded":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionLimitExceededResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidExecutionInput":
        case "com.amazonaws.swf.service.v2.model#InvalidExecutionInput":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidName":
        case "com.amazonaws.swf.service.v2.model#InvalidName":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0StopExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0StopExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0StopExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0StopExecutionCommand = deserializeAws_json1_0StopExecutionCommand;
async function deserializeAws_json1_0StopExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceOutput" }, contents);
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
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTags":
        case "com.amazonaws.swf.service.v2.model#TooManyTags":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UntagResourceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceOutput" }, contents);
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
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFound":
        case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0UpdateStateMachineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UpdateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateStateMachineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateStateMachineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UpdateStateMachineCommand = deserializeAws_json1_0UpdateStateMachineCommand;
async function deserializeAws_json1_0UpdateStateMachineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.swf.service.v2.model#InvalidArn":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDefinition":
        case "com.amazonaws.swf.service.v2.model#InvalidDefinition":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.swf.service.v2.model#InvalidLoggingConfiguration":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingRequiredParameter":
        case "com.amazonaws.swf.service.v2.model#MissingRequiredParameter":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0MissingRequiredParameterResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDeleting":
        case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StateMachineDoesNotExist":
        case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_0ActivityDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityDoesNotExist(body, context);
    const contents = Object.assign({ name: "ActivityDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ActivityLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityLimitExceeded(body, context);
    const contents = Object.assign({ name: "ActivityLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ActivityWorkerLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ActivityWorkerLimitExceeded(body, context);
    const contents = Object.assign({ name: "ActivityWorkerLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ExecutionAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionAlreadyExists(body, context);
    const contents = Object.assign({ name: "ExecutionAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ExecutionDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionDoesNotExist(body, context);
    const contents = Object.assign({ name: "ExecutionDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ExecutionLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExecutionLimitExceeded(body, context);
    const contents = Object.assign({ name: "ExecutionLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidArnResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidArn(body, context);
    const contents = Object.assign({ name: "InvalidArn", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidDefinitionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidDefinition(body, context);
    const contents = Object.assign({ name: "InvalidDefinition", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidExecutionInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidExecutionInput(body, context);
    const contents = Object.assign({ name: "InvalidExecutionInput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidLoggingConfigurationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidLoggingConfiguration(body, context);
    const contents = Object.assign({ name: "InvalidLoggingConfiguration", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidNameResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidName(body, context);
    const contents = Object.assign({ name: "InvalidName", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidOutputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidOutput(body, context);
    const contents = Object.assign({ name: "InvalidOutput", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidToken(body, context);
    const contents = Object.assign({ name: "InvalidToken", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0MissingRequiredParameterResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0MissingRequiredParameter(body, context);
    const contents = Object.assign({ name: "MissingRequiredParameter", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFound(body, context);
    const contents = Object.assign({ name: "ResourceNotFound", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0StateMachineAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineAlreadyExists(body, context);
    const contents = Object.assign({ name: "StateMachineAlreadyExists", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0StateMachineDeletingResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineDeleting(body, context);
    const contents = Object.assign({ name: "StateMachineDeleting", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0StateMachineDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineDoesNotExist(body, context);
    const contents = Object.assign({ name: "StateMachineDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0StateMachineLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineLimitExceeded(body, context);
    const contents = Object.assign({ name: "StateMachineLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0StateMachineTypeNotSupportedResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0StateMachineTypeNotSupported(body, context);
    const contents = Object.assign({ name: "StateMachineTypeNotSupported", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TaskDoesNotExistResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TaskDoesNotExist(body, context);
    const contents = Object.assign({ name: "TaskDoesNotExist", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TaskTimedOutResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TaskTimedOut(body, context);
    const contents = Object.assign({ name: "TaskTimedOut", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TooManyTagsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TooManyTags(body, context);
    const contents = Object.assign({ name: "TooManyTags", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0CloudWatchLogsLogGroup = (input, context) => {
    const bodyParams = {};
    if (input.logGroupArn !== undefined) {
        bodyParams["logGroupArn"] = input.logGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_0LogDestination = (input, context) => {
    const bodyParams = {};
    if (input.cloudWatchLogsLogGroup !== undefined) {
        bodyParams["cloudWatchLogsLogGroup"] = serializeAws_json1_0CloudWatchLogsLogGroup(input.cloudWatchLogsLogGroup, context);
    }
    return bodyParams;
};
const serializeAws_json1_0LogDestinationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0LogDestination(entry, context));
    }
    return contents;
};
const serializeAws_json1_0LoggingConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.destinations !== undefined) {
        bodyParams["destinations"] = serializeAws_json1_0LogDestinationList(input.destinations, context);
    }
    if (input.includeExecutionData !== undefined) {
        bodyParams["includeExecutionData"] = input.includeExecutionData;
    }
    if (input.level !== undefined) {
        bodyParams["level"] = input.level;
    }
    return bodyParams;
};
const serializeAws_json1_0CreateActivityInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CreateStateMachineInput = (input, context) => {
    const bodyParams = {};
    if (input.definition !== undefined) {
        bodyParams["definition"] = input.definition;
    }
    if (input.loggingConfiguration !== undefined) {
        bodyParams["loggingConfiguration"] = serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteActivityInput = (input, context) => {
    const bodyParams = {};
    if (input.activityArn !== undefined) {
        bodyParams["activityArn"] = input.activityArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DeleteStateMachineInput = (input, context) => {
    const bodyParams = {};
    if (input.stateMachineArn !== undefined) {
        bodyParams["stateMachineArn"] = input.stateMachineArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeActivityInput = (input, context) => {
    const bodyParams = {};
    if (input.activityArn !== undefined) {
        bodyParams["activityArn"] = input.activityArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.executionArn !== undefined) {
        bodyParams["executionArn"] = input.executionArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeStateMachineForExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.executionArn !== undefined) {
        bodyParams["executionArn"] = input.executionArn;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeStateMachineInput = (input, context) => {
    const bodyParams = {};
    if (input.stateMachineArn !== undefined) {
        bodyParams["stateMachineArn"] = input.stateMachineArn;
    }
    return bodyParams;
};
const serializeAws_json1_0GetActivityTaskInput = (input, context) => {
    const bodyParams = {};
    if (input.activityArn !== undefined) {
        bodyParams["activityArn"] = input.activityArn;
    }
    if (input.workerName !== undefined) {
        bodyParams["workerName"] = input.workerName;
    }
    return bodyParams;
};
const serializeAws_json1_0GetExecutionHistoryInput = (input, context) => {
    const bodyParams = {};
    if (input.executionArn !== undefined) {
        bodyParams["executionArn"] = input.executionArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_0ListActivitiesInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_0ListExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.stateMachineArn !== undefined) {
        bodyParams["stateMachineArn"] = input.stateMachineArn;
    }
    if (input.statusFilter !== undefined) {
        bodyParams["statusFilter"] = input.statusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_0ListStateMachinesInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_0ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_0SendTaskFailureInput = (input, context) => {
    const bodyParams = {};
    if (input.cause !== undefined) {
        bodyParams["cause"] = input.cause;
    }
    if (input.error !== undefined) {
        bodyParams["error"] = input.error;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0SendTaskHeartbeatInput = (input, context) => {
    const bodyParams = {};
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0SendTaskSuccessInput = (input, context) => {
    const bodyParams = {};
    if (input.output !== undefined) {
        bodyParams["output"] = input.output;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0StartExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.stateMachineArn !== undefined) {
        bodyParams["stateMachineArn"] = input.stateMachineArn;
    }
    return bodyParams;
};
const serializeAws_json1_0StopExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.cause !== undefined) {
        bodyParams["cause"] = input.cause;
    }
    if (input.error !== undefined) {
        bodyParams["error"] = input.error;
    }
    if (input.executionArn !== undefined) {
        bodyParams["executionArn"] = input.executionArn;
    }
    return bodyParams;
};
const serializeAws_json1_0Tag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
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
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_0TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UpdateStateMachineInput = (input, context) => {
    const bodyParams = {};
    if (input.definition !== undefined) {
        bodyParams["definition"] = input.definition;
    }
    if (input.loggingConfiguration !== undefined) {
        bodyParams["loggingConfiguration"] = serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context);
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.stateMachineArn !== undefined) {
        bodyParams["stateMachineArn"] = input.stateMachineArn;
    }
    return bodyParams;
};
const deserializeAws_json1_0ActivityFailedEventDetails = (output, context) => {
    let contents = {
        __type: "ActivityFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0ActivityScheduleFailedEventDetails = (output, context) => {
    let contents = {
        __type: "ActivityScheduleFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0ActivityScheduledEventDetails = (output, context) => {
    let contents = {
        __type: "ActivityScheduledEventDetails",
        heartbeatInSeconds: undefined,
        input: undefined,
        resource: undefined,
        timeoutInSeconds: undefined
    };
    if (output.heartbeatInSeconds !== undefined &&
        output.heartbeatInSeconds !== null) {
        contents.heartbeatInSeconds = output.heartbeatInSeconds;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.timeoutInSeconds !== undefined &&
        output.timeoutInSeconds !== null) {
        contents.timeoutInSeconds = output.timeoutInSeconds;
    }
    return contents;
};
const deserializeAws_json1_0ActivityStartedEventDetails = (output, context) => {
    let contents = {
        __type: "ActivityStartedEventDetails",
        workerName: undefined
    };
    if (output.workerName !== undefined && output.workerName !== null) {
        contents.workerName = output.workerName;
    }
    return contents;
};
const deserializeAws_json1_0ActivitySucceededEventDetails = (output, context) => {
    let contents = {
        __type: "ActivitySucceededEventDetails",
        output: undefined
    };
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTimedOutEventDetails = (output, context) => {
    let contents = {
        __type: "ActivityTimedOutEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0CloudWatchLogsLogGroup = (output, context) => {
    let contents = {
        __type: "CloudWatchLogsLogGroup",
        logGroupArn: undefined
    };
    if (output.logGroupArn !== undefined && output.logGroupArn !== null) {
        contents.logGroupArn = output.logGroupArn;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionAbortedEventDetails = (output, context) => {
    let contents = {
        __type: "ExecutionAbortedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionFailedEventDetails = (output, context) => {
    let contents = {
        __type: "ExecutionFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionStartedEventDetails = (output, context) => {
    let contents = {
        __type: "ExecutionStartedEventDetails",
        input: undefined,
        roleArn: undefined
    };
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionSucceededEventDetails = (output, context) => {
    let contents = {
        __type: "ExecutionSucceededEventDetails",
        output: undefined
    };
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionTimedOutEventDetails = (output, context) => {
    let contents = {
        __type: "ExecutionTimedOutEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0HistoryEvent = (output, context) => {
    let contents = {
        __type: "HistoryEvent",
        activityFailedEventDetails: undefined,
        activityScheduleFailedEventDetails: undefined,
        activityScheduledEventDetails: undefined,
        activityStartedEventDetails: undefined,
        activitySucceededEventDetails: undefined,
        activityTimedOutEventDetails: undefined,
        executionAbortedEventDetails: undefined,
        executionFailedEventDetails: undefined,
        executionStartedEventDetails: undefined,
        executionSucceededEventDetails: undefined,
        executionTimedOutEventDetails: undefined,
        id: undefined,
        lambdaFunctionFailedEventDetails: undefined,
        lambdaFunctionScheduleFailedEventDetails: undefined,
        lambdaFunctionScheduledEventDetails: undefined,
        lambdaFunctionStartFailedEventDetails: undefined,
        lambdaFunctionSucceededEventDetails: undefined,
        lambdaFunctionTimedOutEventDetails: undefined,
        mapIterationAbortedEventDetails: undefined,
        mapIterationFailedEventDetails: undefined,
        mapIterationStartedEventDetails: undefined,
        mapIterationSucceededEventDetails: undefined,
        mapStateStartedEventDetails: undefined,
        previousEventId: undefined,
        stateEnteredEventDetails: undefined,
        stateExitedEventDetails: undefined,
        taskFailedEventDetails: undefined,
        taskScheduledEventDetails: undefined,
        taskStartFailedEventDetails: undefined,
        taskStartedEventDetails: undefined,
        taskSubmitFailedEventDetails: undefined,
        taskSubmittedEventDetails: undefined,
        taskSucceededEventDetails: undefined,
        taskTimedOutEventDetails: undefined,
        timestamp: undefined,
        type: undefined
    };
    if (output.activityFailedEventDetails !== undefined &&
        output.activityFailedEventDetails !== null) {
        contents.activityFailedEventDetails = deserializeAws_json1_0ActivityFailedEventDetails(output.activityFailedEventDetails, context);
    }
    if (output.activityScheduleFailedEventDetails !== undefined &&
        output.activityScheduleFailedEventDetails !== null) {
        contents.activityScheduleFailedEventDetails = deserializeAws_json1_0ActivityScheduleFailedEventDetails(output.activityScheduleFailedEventDetails, context);
    }
    if (output.activityScheduledEventDetails !== undefined &&
        output.activityScheduledEventDetails !== null) {
        contents.activityScheduledEventDetails = deserializeAws_json1_0ActivityScheduledEventDetails(output.activityScheduledEventDetails, context);
    }
    if (output.activityStartedEventDetails !== undefined &&
        output.activityStartedEventDetails !== null) {
        contents.activityStartedEventDetails = deserializeAws_json1_0ActivityStartedEventDetails(output.activityStartedEventDetails, context);
    }
    if (output.activitySucceededEventDetails !== undefined &&
        output.activitySucceededEventDetails !== null) {
        contents.activitySucceededEventDetails = deserializeAws_json1_0ActivitySucceededEventDetails(output.activitySucceededEventDetails, context);
    }
    if (output.activityTimedOutEventDetails !== undefined &&
        output.activityTimedOutEventDetails !== null) {
        contents.activityTimedOutEventDetails = deserializeAws_json1_0ActivityTimedOutEventDetails(output.activityTimedOutEventDetails, context);
    }
    if (output.executionAbortedEventDetails !== undefined &&
        output.executionAbortedEventDetails !== null) {
        contents.executionAbortedEventDetails = deserializeAws_json1_0ExecutionAbortedEventDetails(output.executionAbortedEventDetails, context);
    }
    if (output.executionFailedEventDetails !== undefined &&
        output.executionFailedEventDetails !== null) {
        contents.executionFailedEventDetails = deserializeAws_json1_0ExecutionFailedEventDetails(output.executionFailedEventDetails, context);
    }
    if (output.executionStartedEventDetails !== undefined &&
        output.executionStartedEventDetails !== null) {
        contents.executionStartedEventDetails = deserializeAws_json1_0ExecutionStartedEventDetails(output.executionStartedEventDetails, context);
    }
    if (output.executionSucceededEventDetails !== undefined &&
        output.executionSucceededEventDetails !== null) {
        contents.executionSucceededEventDetails = deserializeAws_json1_0ExecutionSucceededEventDetails(output.executionSucceededEventDetails, context);
    }
    if (output.executionTimedOutEventDetails !== undefined &&
        output.executionTimedOutEventDetails !== null) {
        contents.executionTimedOutEventDetails = deserializeAws_json1_0ExecutionTimedOutEventDetails(output.executionTimedOutEventDetails, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.lambdaFunctionFailedEventDetails !== undefined &&
        output.lambdaFunctionFailedEventDetails !== null) {
        contents.lambdaFunctionFailedEventDetails = deserializeAws_json1_0LambdaFunctionFailedEventDetails(output.lambdaFunctionFailedEventDetails, context);
    }
    if (output.lambdaFunctionScheduleFailedEventDetails !== undefined &&
        output.lambdaFunctionScheduleFailedEventDetails !== null) {
        contents.lambdaFunctionScheduleFailedEventDetails = deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails(output.lambdaFunctionScheduleFailedEventDetails, context);
    }
    if (output.lambdaFunctionScheduledEventDetails !== undefined &&
        output.lambdaFunctionScheduledEventDetails !== null) {
        contents.lambdaFunctionScheduledEventDetails = deserializeAws_json1_0LambdaFunctionScheduledEventDetails(output.lambdaFunctionScheduledEventDetails, context);
    }
    if (output.lambdaFunctionStartFailedEventDetails !== undefined &&
        output.lambdaFunctionStartFailedEventDetails !== null) {
        contents.lambdaFunctionStartFailedEventDetails = deserializeAws_json1_0LambdaFunctionStartFailedEventDetails(output.lambdaFunctionStartFailedEventDetails, context);
    }
    if (output.lambdaFunctionSucceededEventDetails !== undefined &&
        output.lambdaFunctionSucceededEventDetails !== null) {
        contents.lambdaFunctionSucceededEventDetails = deserializeAws_json1_0LambdaFunctionSucceededEventDetails(output.lambdaFunctionSucceededEventDetails, context);
    }
    if (output.lambdaFunctionTimedOutEventDetails !== undefined &&
        output.lambdaFunctionTimedOutEventDetails !== null) {
        contents.lambdaFunctionTimedOutEventDetails = deserializeAws_json1_0LambdaFunctionTimedOutEventDetails(output.lambdaFunctionTimedOutEventDetails, context);
    }
    if (output.mapIterationAbortedEventDetails !== undefined &&
        output.mapIterationAbortedEventDetails !== null) {
        contents.mapIterationAbortedEventDetails = deserializeAws_json1_0MapIterationEventDetails(output.mapIterationAbortedEventDetails, context);
    }
    if (output.mapIterationFailedEventDetails !== undefined &&
        output.mapIterationFailedEventDetails !== null) {
        contents.mapIterationFailedEventDetails = deserializeAws_json1_0MapIterationEventDetails(output.mapIterationFailedEventDetails, context);
    }
    if (output.mapIterationStartedEventDetails !== undefined &&
        output.mapIterationStartedEventDetails !== null) {
        contents.mapIterationStartedEventDetails = deserializeAws_json1_0MapIterationEventDetails(output.mapIterationStartedEventDetails, context);
    }
    if (output.mapIterationSucceededEventDetails !== undefined &&
        output.mapIterationSucceededEventDetails !== null) {
        contents.mapIterationSucceededEventDetails = deserializeAws_json1_0MapIterationEventDetails(output.mapIterationSucceededEventDetails, context);
    }
    if (output.mapStateStartedEventDetails !== undefined &&
        output.mapStateStartedEventDetails !== null) {
        contents.mapStateStartedEventDetails = deserializeAws_json1_0MapStateStartedEventDetails(output.mapStateStartedEventDetails, context);
    }
    if (output.previousEventId !== undefined && output.previousEventId !== null) {
        contents.previousEventId = output.previousEventId;
    }
    if (output.stateEnteredEventDetails !== undefined &&
        output.stateEnteredEventDetails !== null) {
        contents.stateEnteredEventDetails = deserializeAws_json1_0StateEnteredEventDetails(output.stateEnteredEventDetails, context);
    }
    if (output.stateExitedEventDetails !== undefined &&
        output.stateExitedEventDetails !== null) {
        contents.stateExitedEventDetails = deserializeAws_json1_0StateExitedEventDetails(output.stateExitedEventDetails, context);
    }
    if (output.taskFailedEventDetails !== undefined &&
        output.taskFailedEventDetails !== null) {
        contents.taskFailedEventDetails = deserializeAws_json1_0TaskFailedEventDetails(output.taskFailedEventDetails, context);
    }
    if (output.taskScheduledEventDetails !== undefined &&
        output.taskScheduledEventDetails !== null) {
        contents.taskScheduledEventDetails = deserializeAws_json1_0TaskScheduledEventDetails(output.taskScheduledEventDetails, context);
    }
    if (output.taskStartFailedEventDetails !== undefined &&
        output.taskStartFailedEventDetails !== null) {
        contents.taskStartFailedEventDetails = deserializeAws_json1_0TaskStartFailedEventDetails(output.taskStartFailedEventDetails, context);
    }
    if (output.taskStartedEventDetails !== undefined &&
        output.taskStartedEventDetails !== null) {
        contents.taskStartedEventDetails = deserializeAws_json1_0TaskStartedEventDetails(output.taskStartedEventDetails, context);
    }
    if (output.taskSubmitFailedEventDetails !== undefined &&
        output.taskSubmitFailedEventDetails !== null) {
        contents.taskSubmitFailedEventDetails = deserializeAws_json1_0TaskSubmitFailedEventDetails(output.taskSubmitFailedEventDetails, context);
    }
    if (output.taskSubmittedEventDetails !== undefined &&
        output.taskSubmittedEventDetails !== null) {
        contents.taskSubmittedEventDetails = deserializeAws_json1_0TaskSubmittedEventDetails(output.taskSubmittedEventDetails, context);
    }
    if (output.taskSucceededEventDetails !== undefined &&
        output.taskSucceededEventDetails !== null) {
        contents.taskSucceededEventDetails = deserializeAws_json1_0TaskSucceededEventDetails(output.taskSucceededEventDetails, context);
    }
    if (output.taskTimedOutEventDetails !== undefined &&
        output.taskTimedOutEventDetails !== null) {
        contents.taskTimedOutEventDetails = deserializeAws_json1_0TaskTimedOutEventDetails(output.taskTimedOutEventDetails, context);
    }
    if (output.timestamp !== undefined && output.timestamp !== null) {
        contents.timestamp = new Date(Math.round(output.timestamp * 1000));
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_0HistoryEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0HistoryEvent(entry, context));
};
const deserializeAws_json1_0LambdaFunctionFailedEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionScheduleFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionScheduledEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionScheduledEventDetails",
        input: undefined,
        resource: undefined,
        timeoutInSeconds: undefined
    };
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.timeoutInSeconds !== undefined &&
        output.timeoutInSeconds !== null) {
        contents.timeoutInSeconds = output.timeoutInSeconds;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionStartFailedEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionStartFailedEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionSucceededEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionSucceededEventDetails",
        output: undefined
    };
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionTimedOutEventDetails = (output, context) => {
    let contents = {
        __type: "LambdaFunctionTimedOutEventDetails",
        cause: undefined,
        error: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    return contents;
};
const deserializeAws_json1_0LogDestination = (output, context) => {
    let contents = {
        __type: "LogDestination",
        cloudWatchLogsLogGroup: undefined
    };
    if (output.cloudWatchLogsLogGroup !== undefined &&
        output.cloudWatchLogsLogGroup !== null) {
        contents.cloudWatchLogsLogGroup = deserializeAws_json1_0CloudWatchLogsLogGroup(output.cloudWatchLogsLogGroup, context);
    }
    return contents;
};
const deserializeAws_json1_0LogDestinationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0LogDestination(entry, context));
};
const deserializeAws_json1_0LoggingConfiguration = (output, context) => {
    let contents = {
        __type: "LoggingConfiguration",
        destinations: undefined,
        includeExecutionData: undefined,
        level: undefined
    };
    if (output.destinations !== undefined && output.destinations !== null) {
        contents.destinations = deserializeAws_json1_0LogDestinationList(output.destinations, context);
    }
    if (output.includeExecutionData !== undefined &&
        output.includeExecutionData !== null) {
        contents.includeExecutionData = output.includeExecutionData;
    }
    if (output.level !== undefined && output.level !== null) {
        contents.level = output.level;
    }
    return contents;
};
const deserializeAws_json1_0MapIterationEventDetails = (output, context) => {
    let contents = {
        __type: "MapIterationEventDetails",
        index: undefined,
        name: undefined
    };
    if (output.index !== undefined && output.index !== null) {
        contents.index = output.index;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0MapStateStartedEventDetails = (output, context) => {
    let contents = {
        __type: "MapStateStartedEventDetails",
        length: undefined
    };
    if (output.length !== undefined && output.length !== null) {
        contents.length = output.length;
    }
    return contents;
};
const deserializeAws_json1_0StateEnteredEventDetails = (output, context) => {
    let contents = {
        __type: "StateEnteredEventDetails",
        input: undefined,
        name: undefined
    };
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0StateExitedEventDetails = (output, context) => {
    let contents = {
        __type: "StateExitedEventDetails",
        name: undefined,
        output: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    return contents;
};
const deserializeAws_json1_0TaskFailedEventDetails = (output, context) => {
    let contents = {
        __type: "TaskFailedEventDetails",
        cause: undefined,
        error: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskScheduledEventDetails = (output, context) => {
    let contents = {
        __type: "TaskScheduledEventDetails",
        parameters: undefined,
        region: undefined,
        resource: undefined,
        resourceType: undefined,
        timeoutInSeconds: undefined
    };
    if (output.parameters !== undefined && output.parameters !== null) {
        contents.parameters = output.parameters;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.timeoutInSeconds !== undefined &&
        output.timeoutInSeconds !== null) {
        contents.timeoutInSeconds = output.timeoutInSeconds;
    }
    return contents;
};
const deserializeAws_json1_0TaskStartFailedEventDetails = (output, context) => {
    let contents = {
        __type: "TaskStartFailedEventDetails",
        cause: undefined,
        error: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskStartedEventDetails = (output, context) => {
    let contents = {
        __type: "TaskStartedEventDetails",
        resource: undefined,
        resourceType: undefined
    };
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskSubmitFailedEventDetails = (output, context) => {
    let contents = {
        __type: "TaskSubmitFailedEventDetails",
        cause: undefined,
        error: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskSubmittedEventDetails = (output, context) => {
    let contents = {
        __type: "TaskSubmittedEventDetails",
        output: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskSucceededEventDetails = (output, context) => {
    let contents = {
        __type: "TaskSucceededEventDetails",
        output: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0TaskTimedOutEventDetails = (output, context) => {
    let contents = {
        __type: "TaskTimedOutEventDetails",
        cause: undefined,
        error: undefined,
        resource: undefined,
        resourceType: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_json1_0ActivityDoesNotExist = (output, context) => {
    let contents = {
        __type: "ActivityDoesNotExist",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ActivityLimitExceeded = (output, context) => {
    let contents = {
        __type: "ActivityLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ActivityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ActivityListItem(entry, context));
};
const deserializeAws_json1_0ActivityListItem = (output, context) => {
    let contents = {
        __type: "ActivityListItem",
        activityArn: undefined,
        creationDate: undefined,
        name: undefined
    };
    if (output.activityArn !== undefined && output.activityArn !== null) {
        contents.activityArn = output.activityArn;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0ActivityWorkerLimitExceeded = (output, context) => {
    let contents = {
        __type: "ActivityWorkerLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0CreateActivityOutput = (output, context) => {
    let contents = {
        __type: "CreateActivityOutput",
        activityArn: undefined,
        creationDate: undefined
    };
    if (output.activityArn !== undefined && output.activityArn !== null) {
        contents.activityArn = output.activityArn;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0CreateStateMachineOutput = (output, context) => {
    let contents = {
        __type: "CreateStateMachineOutput",
        creationDate: undefined,
        stateMachineArn: undefined
    };
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    return contents;
};
const deserializeAws_json1_0DeleteActivityOutput = (output, context) => {
    let contents = {
        __type: "DeleteActivityOutput"
    };
    return contents;
};
const deserializeAws_json1_0DeleteStateMachineOutput = (output, context) => {
    let contents = {
        __type: "DeleteStateMachineOutput"
    };
    return contents;
};
const deserializeAws_json1_0DescribeActivityOutput = (output, context) => {
    let contents = {
        __type: "DescribeActivityOutput",
        activityArn: undefined,
        creationDate: undefined,
        name: undefined
    };
    if (output.activityArn !== undefined && output.activityArn !== null) {
        contents.activityArn = output.activityArn;
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0DescribeExecutionOutput = (output, context) => {
    let contents = {
        __type: "DescribeExecutionOutput",
        executionArn: undefined,
        input: undefined,
        name: undefined,
        output: undefined,
        startDate: undefined,
        stateMachineArn: undefined,
        status: undefined,
        stopDate: undefined
    };
    if (output.executionArn !== undefined && output.executionArn !== null) {
        contents.executionArn = output.executionArn;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.output !== undefined && output.output !== null) {
        contents.output = output.output;
    }
    if (output.startDate !== undefined && output.startDate !== null) {
        contents.startDate = new Date(Math.round(output.startDate * 1000));
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopDate !== undefined && output.stopDate !== null) {
        contents.stopDate = new Date(Math.round(output.stopDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0DescribeStateMachineForExecutionOutput = (output, context) => {
    let contents = {
        __type: "DescribeStateMachineForExecutionOutput",
        definition: undefined,
        name: undefined,
        roleArn: undefined,
        stateMachineArn: undefined,
        updateDate: undefined
    };
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = output.definition;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    if (output.updateDate !== undefined && output.updateDate !== null) {
        contents.updateDate = new Date(Math.round(output.updateDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0DescribeStateMachineOutput = (output, context) => {
    let contents = {
        __type: "DescribeStateMachineOutput",
        creationDate: undefined,
        definition: undefined,
        loggingConfiguration: undefined,
        name: undefined,
        roleArn: undefined,
        stateMachineArn: undefined,
        status: undefined,
        type: undefined
    };
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = output.definition;
    }
    if (output.loggingConfiguration !== undefined &&
        output.loggingConfiguration !== null) {
        contents.loggingConfiguration = deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionAlreadyExists = (output, context) => {
    let contents = {
        __type: "ExecutionAlreadyExists",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionDoesNotExist = (output, context) => {
    let contents = {
        __type: "ExecutionDoesNotExist",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionLimitExceeded = (output, context) => {
    let contents = {
        __type: "ExecutionLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ExecutionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ExecutionListItem(entry, context));
};
const deserializeAws_json1_0ExecutionListItem = (output, context) => {
    let contents = {
        __type: "ExecutionListItem",
        executionArn: undefined,
        name: undefined,
        startDate: undefined,
        stateMachineArn: undefined,
        status: undefined,
        stopDate: undefined
    };
    if (output.executionArn !== undefined && output.executionArn !== null) {
        contents.executionArn = output.executionArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.startDate !== undefined && output.startDate !== null) {
        contents.startDate = new Date(Math.round(output.startDate * 1000));
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopDate !== undefined && output.stopDate !== null) {
        contents.stopDate = new Date(Math.round(output.stopDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0GetActivityTaskOutput = (output, context) => {
    let contents = {
        __type: "GetActivityTaskOutput",
        input: undefined,
        taskToken: undefined
    };
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.taskToken !== undefined && output.taskToken !== null) {
        contents.taskToken = output.taskToken;
    }
    return contents;
};
const deserializeAws_json1_0GetExecutionHistoryOutput = (output, context) => {
    let contents = {
        __type: "GetExecutionHistoryOutput",
        events: undefined,
        nextToken: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_0HistoryEventList(output.events, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_0InvalidArn = (output, context) => {
    let contents = {
        __type: "InvalidArn",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidDefinition = (output, context) => {
    let contents = {
        __type: "InvalidDefinition",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidExecutionInput = (output, context) => {
    let contents = {
        __type: "InvalidExecutionInput",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidLoggingConfiguration = (output, context) => {
    let contents = {
        __type: "InvalidLoggingConfiguration",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidName = (output, context) => {
    let contents = {
        __type: "InvalidName",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidOutput = (output, context) => {
    let contents = {
        __type: "InvalidOutput",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0InvalidToken = (output, context) => {
    let contents = {
        __type: "InvalidToken",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ListActivitiesOutput = (output, context) => {
    let contents = {
        __type: "ListActivitiesOutput",
        activities: undefined,
        nextToken: undefined
    };
    if (output.activities !== undefined && output.activities !== null) {
        contents.activities = deserializeAws_json1_0ActivityList(output.activities, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_0ListExecutionsOutput = (output, context) => {
    let contents = {
        __type: "ListExecutionsOutput",
        executions: undefined,
        nextToken: undefined
    };
    if (output.executions !== undefined && output.executions !== null) {
        contents.executions = deserializeAws_json1_0ExecutionList(output.executions, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_0ListStateMachinesOutput = (output, context) => {
    let contents = {
        __type: "ListStateMachinesOutput",
        nextToken: undefined,
        stateMachines: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.stateMachines !== undefined && output.stateMachines !== null) {
        contents.stateMachines = deserializeAws_json1_0StateMachineList(output.stateMachines, context);
    }
    return contents;
};
const deserializeAws_json1_0ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_0TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_0MissingRequiredParameter = (output, context) => {
    let contents = {
        __type: "MissingRequiredParameter",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ResourceNotFound = (output, context) => {
    let contents = {
        __type: "ResourceNotFound",
        message: undefined,
        resourceName: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    return contents;
};
const deserializeAws_json1_0SendTaskFailureOutput = (output, context) => {
    let contents = {
        __type: "SendTaskFailureOutput"
    };
    return contents;
};
const deserializeAws_json1_0SendTaskHeartbeatOutput = (output, context) => {
    let contents = {
        __type: "SendTaskHeartbeatOutput"
    };
    return contents;
};
const deserializeAws_json1_0SendTaskSuccessOutput = (output, context) => {
    let contents = {
        __type: "SendTaskSuccessOutput"
    };
    return contents;
};
const deserializeAws_json1_0StartExecutionOutput = (output, context) => {
    let contents = {
        __type: "StartExecutionOutput",
        executionArn: undefined,
        startDate: undefined
    };
    if (output.executionArn !== undefined && output.executionArn !== null) {
        contents.executionArn = output.executionArn;
    }
    if (output.startDate !== undefined && output.startDate !== null) {
        contents.startDate = new Date(Math.round(output.startDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0StateMachineAlreadyExists = (output, context) => {
    let contents = {
        __type: "StateMachineAlreadyExists",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StateMachineDeleting = (output, context) => {
    let contents = {
        __type: "StateMachineDeleting",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StateMachineDoesNotExist = (output, context) => {
    let contents = {
        __type: "StateMachineDoesNotExist",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StateMachineLimitExceeded = (output, context) => {
    let contents = {
        __type: "StateMachineLimitExceeded",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StateMachineList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0StateMachineListItem(entry, context));
};
const deserializeAws_json1_0StateMachineListItem = (output, context) => {
    let contents = {
        __type: "StateMachineListItem",
        creationDate: undefined,
        name: undefined,
        stateMachineArn: undefined,
        type: undefined
    };
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
        contents.stateMachineArn = output.stateMachineArn;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_0StateMachineTypeNotSupported = (output, context) => {
    let contents = {
        __type: "StateMachineTypeNotSupported",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StopExecutionOutput = (output, context) => {
    let contents = {
        __type: "StopExecutionOutput",
        stopDate: undefined
    };
    if (output.stopDate !== undefined && output.stopDate !== null) {
        contents.stopDate = new Date(Math.round(output.stopDate * 1000));
    }
    return contents;
};
const deserializeAws_json1_0Tag = (output, context) => {
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
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Tag(entry, context));
};
const deserializeAws_json1_0TagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_0TaskDoesNotExist = (output, context) => {
    let contents = {
        __type: "TaskDoesNotExist",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TaskTimedOut = (output, context) => {
    let contents = {
        __type: "TaskTimedOut",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TooManyTags = (output, context) => {
    let contents = {
        __type: "TooManyTags",
        message: undefined,
        resourceName: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.resourceName !== undefined && output.resourceName !== null) {
        contents.resourceName = output.resourceName;
    }
    return contents;
};
const deserializeAws_json1_0UntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_0UpdateStateMachineOutput = (output, context) => {
    let contents = {
        __type: "UpdateStateMachineOutput",
        updateDate: undefined
    };
    if (output.updateDate !== undefined && output.updateDate !== null) {
        contents.updateDate = new Date(Math.round(output.updateDate * 1000));
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
//# sourceMappingURL=Aws_json1_0.js.map