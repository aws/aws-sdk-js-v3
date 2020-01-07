"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0CountClosedWorkflowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "SimpleWorkflowService.CountClosedWorkflowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_0CountClosedWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CountClosedWorkflowExecutionsCommand = serializeAws_json1_0CountClosedWorkflowExecutionsCommand;
async function serializeAws_json1_0CountOpenWorkflowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.CountOpenWorkflowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_0CountOpenWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CountOpenWorkflowExecutionsCommand = serializeAws_json1_0CountOpenWorkflowExecutionsCommand;
async function serializeAws_json1_0CountPendingActivityTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.CountPendingActivityTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_0CountPendingActivityTasksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CountPendingActivityTasksCommand = serializeAws_json1_0CountPendingActivityTasksCommand;
async function serializeAws_json1_0CountPendingDecisionTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.CountPendingDecisionTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_0CountPendingDecisionTasksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0CountPendingDecisionTasksCommand = serializeAws_json1_0CountPendingDecisionTasksCommand;
async function serializeAws_json1_0DeprecateActivityTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateActivityType";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeprecateActivityTypeCommand = serializeAws_json1_0DeprecateActivityTypeCommand;
async function serializeAws_json1_0DeprecateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeprecateDomainCommand = serializeAws_json1_0DeprecateDomainCommand;
async function serializeAws_json1_0DeprecateWorkflowTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateWorkflowType";
    let body;
    body = JSON.stringify(serializeAws_json1_0DeprecateWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DeprecateWorkflowTypeCommand = serializeAws_json1_0DeprecateWorkflowTypeCommand;
async function serializeAws_json1_0DescribeActivityTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeActivityType";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeActivityTypeCommand = serializeAws_json1_0DescribeActivityTypeCommand;
async function serializeAws_json1_0DescribeDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeDomainCommand = serializeAws_json1_0DescribeDomainCommand;
async function serializeAws_json1_0DescribeWorkflowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeWorkflowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeWorkflowExecutionCommand = serializeAws_json1_0DescribeWorkflowExecutionCommand;
async function serializeAws_json1_0DescribeWorkflowTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeWorkflowType";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeWorkflowTypeCommand = serializeAws_json1_0DescribeWorkflowTypeCommand;
async function serializeAws_json1_0GetWorkflowExecutionHistoryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.GetWorkflowExecutionHistory";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetWorkflowExecutionHistoryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetWorkflowExecutionHistoryCommand = serializeAws_json1_0GetWorkflowExecutionHistoryCommand;
async function serializeAws_json1_0ListActivityTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.ListActivityTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListActivityTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListActivityTypesCommand = serializeAws_json1_0ListActivityTypesCommand;
async function serializeAws_json1_0ListClosedWorkflowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "SimpleWorkflowService.ListClosedWorkflowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListClosedWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListClosedWorkflowExecutionsCommand = serializeAws_json1_0ListClosedWorkflowExecutionsCommand;
async function serializeAws_json1_0ListDomainsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.ListDomains";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListDomainsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListDomainsCommand = serializeAws_json1_0ListDomainsCommand;
async function serializeAws_json1_0ListOpenWorkflowExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.ListOpenWorkflowExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListOpenWorkflowExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListOpenWorkflowExecutionsCommand = serializeAws_json1_0ListOpenWorkflowExecutionsCommand;
async function serializeAws_json1_0ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
async function serializeAws_json1_0ListWorkflowTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.ListWorkflowTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListWorkflowTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListWorkflowTypesCommand = serializeAws_json1_0ListWorkflowTypesCommand;
async function serializeAws_json1_0PollForActivityTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.PollForActivityTask";
    let body;
    body = JSON.stringify(serializeAws_json1_0PollForActivityTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0PollForActivityTaskCommand = serializeAws_json1_0PollForActivityTaskCommand;
async function serializeAws_json1_0PollForDecisionTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.PollForDecisionTask";
    let body;
    body = JSON.stringify(serializeAws_json1_0PollForDecisionTaskInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0PollForDecisionTaskCommand = serializeAws_json1_0PollForDecisionTaskCommand;
async function serializeAws_json1_0RecordActivityTaskHeartbeatCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RecordActivityTaskHeartbeat";
    let body;
    body = JSON.stringify(serializeAws_json1_0RecordActivityTaskHeartbeatInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RecordActivityTaskHeartbeatCommand = serializeAws_json1_0RecordActivityTaskHeartbeatCommand;
async function serializeAws_json1_0RegisterActivityTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterActivityType";
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RegisterActivityTypeCommand = serializeAws_json1_0RegisterActivityTypeCommand;
async function serializeAws_json1_0RegisterDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RegisterDomainCommand = serializeAws_json1_0RegisterDomainCommand;
async function serializeAws_json1_0RegisterWorkflowTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterWorkflowType";
    let body;
    body = JSON.stringify(serializeAws_json1_0RegisterWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RegisterWorkflowTypeCommand = serializeAws_json1_0RegisterWorkflowTypeCommand;
async function serializeAws_json1_0RequestCancelWorkflowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "SimpleWorkflowService.RequestCancelWorkflowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0RequestCancelWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RequestCancelWorkflowExecutionCommand = serializeAws_json1_0RequestCancelWorkflowExecutionCommand;
async function serializeAws_json1_0RespondActivityTaskCanceledCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RespondActivityTaskCanceled";
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCanceledInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RespondActivityTaskCanceledCommand = serializeAws_json1_0RespondActivityTaskCanceledCommand;
async function serializeAws_json1_0RespondActivityTaskCompletedCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "SimpleWorkflowService.RespondActivityTaskCompleted";
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCompletedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RespondActivityTaskCompletedCommand = serializeAws_json1_0RespondActivityTaskCompletedCommand;
async function serializeAws_json1_0RespondActivityTaskFailedCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.RespondActivityTaskFailed";
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondActivityTaskFailedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RespondActivityTaskFailedCommand = serializeAws_json1_0RespondActivityTaskFailedCommand;
async function serializeAws_json1_0RespondDecisionTaskCompletedCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] =
        "SimpleWorkflowService.RespondDecisionTaskCompleted";
    let body;
    body = JSON.stringify(serializeAws_json1_0RespondDecisionTaskCompletedInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0RespondDecisionTaskCompletedCommand = serializeAws_json1_0RespondDecisionTaskCompletedCommand;
async function serializeAws_json1_0SignalWorkflowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.SignalWorkflowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0SignalWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0SignalWorkflowExecutionCommand = serializeAws_json1_0SignalWorkflowExecutionCommand;
async function serializeAws_json1_0StartWorkflowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.StartWorkflowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0StartWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0StartWorkflowExecutionCommand = serializeAws_json1_0StartWorkflowExecutionCommand;
async function serializeAws_json1_0TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
async function serializeAws_json1_0TerminateWorkflowExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.TerminateWorkflowExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_0TerminateWorkflowExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0TerminateWorkflowExecutionCommand = serializeAws_json1_0TerminateWorkflowExecutionCommand;
async function serializeAws_json1_0UndeprecateActivityTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateActivityType";
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateActivityTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UndeprecateActivityTypeCommand = serializeAws_json1_0UndeprecateActivityTypeCommand;
async function serializeAws_json1_0UndeprecateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateDomain";
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateDomainInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UndeprecateDomainCommand = serializeAws_json1_0UndeprecateDomainCommand;
async function serializeAws_json1_0UndeprecateWorkflowTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateWorkflowType";
    let body;
    body = JSON.stringify(serializeAws_json1_0UndeprecateWorkflowTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UndeprecateWorkflowTypeCommand = serializeAws_json1_0UndeprecateWorkflowTypeCommand;
async function serializeAws_json1_0UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "SimpleWorkflowService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
async function deserializeAws_json1_0CountClosedWorkflowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowExecutionCount" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = deserializeAws_json1_0CountClosedWorkflowExecutionsCommand;
async function deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0CountOpenWorkflowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowExecutionCount" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = deserializeAws_json1_0CountOpenWorkflowExecutionsCommand;
async function deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0CountPendingActivityTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CountPendingActivityTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PendingTaskCount(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PendingTaskCount" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CountPendingActivityTasksCommand = deserializeAws_json1_0CountPendingActivityTasksCommand;
async function deserializeAws_json1_0CountPendingActivityTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0CountPendingDecisionTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0CountPendingDecisionTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PendingTaskCount(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PendingTaskCount" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0CountPendingDecisionTasksCommand = deserializeAws_json1_0CountPendingDecisionTasksCommand;
async function deserializeAws_json1_0CountPendingDecisionTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DeprecateActivityTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeprecateActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeprecateActivityTypeCommand = deserializeAws_json1_0DeprecateActivityTypeCommand;
async function deserializeAws_json1_0DeprecateActivityTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DeprecateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeprecateDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeprecateDomainCommand = deserializeAws_json1_0DeprecateDomainCommand;
async function deserializeAws_json1_0DeprecateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DomainDeprecatedFault":
        case "com.amazonaws.swf.base.model#DomainDeprecatedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0DomainDeprecatedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DeprecateWorkflowTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DeprecateWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DeprecateWorkflowTypeCommand = deserializeAws_json1_0DeprecateWorkflowTypeCommand;
async function deserializeAws_json1_0DeprecateWorkflowTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeActivityTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeActivityTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTypeDetail(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivityTypeDetail" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeActivityTypeCommand = deserializeAws_json1_0DescribeActivityTypeCommand;
async function deserializeAws_json1_0DescribeActivityTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DomainDetail(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DomainDetail" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeDomainCommand = deserializeAws_json1_0DescribeDomainCommand;
async function deserializeAws_json1_0DescribeDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeWorkflowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeWorkflowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionDetail(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowExecutionDetail" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeWorkflowExecutionCommand = deserializeAws_json1_0DescribeWorkflowExecutionCommand;
async function deserializeAws_json1_0DescribeWorkflowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0DescribeWorkflowTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeWorkflowTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowTypeDetail(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowTypeDetail" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeWorkflowTypeCommand = deserializeAws_json1_0DescribeWorkflowTypeCommand;
async function deserializeAws_json1_0DescribeWorkflowTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0GetWorkflowExecutionHistoryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0History(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "History" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = deserializeAws_json1_0GetWorkflowExecutionHistoryCommand;
async function deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListActivityTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListActivityTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTypeInfos(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivityTypeInfos" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListActivityTypesCommand = deserializeAws_json1_0ListActivityTypesCommand;
async function deserializeAws_json1_0ListActivityTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListClosedWorkflowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowExecutionInfos" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = deserializeAws_json1_0ListClosedWorkflowExecutionsCommand;
async function deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListDomainsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DomainInfos(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DomainInfos" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListDomainsCommand = deserializeAws_json1_0ListDomainsCommand;
async function deserializeAws_json1_0ListDomainsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListOpenWorkflowExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowExecutionInfos" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = deserializeAws_json1_0ListOpenWorkflowExecutionsCommand;
async function deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0ListWorkflowTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListWorkflowTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0WorkflowTypeInfos(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "WorkflowTypeInfos" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListWorkflowTypesCommand = deserializeAws_json1_0ListWorkflowTypesCommand;
async function deserializeAws_json1_0ListWorkflowTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0PollForActivityTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0PollForActivityTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTask(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivityTask" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0PollForActivityTaskCommand = deserializeAws_json1_0PollForActivityTaskCommand;
async function deserializeAws_json1_0PollForActivityTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0PollForDecisionTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0PollForDecisionTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DecisionTask(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DecisionTask" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0PollForDecisionTaskCommand = deserializeAws_json1_0PollForDecisionTaskCommand;
async function deserializeAws_json1_0PollForDecisionTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RecordActivityTaskHeartbeatCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ActivityTaskStatus(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ActivityTaskStatus" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = deserializeAws_json1_0RecordActivityTaskHeartbeatCommand;
async function deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RegisterActivityTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RegisterActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RegisterActivityTypeCommand = deserializeAws_json1_0RegisterActivityTypeCommand;
async function deserializeAws_json1_0RegisterActivityTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RegisterDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RegisterDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RegisterDomainCommand = deserializeAws_json1_0RegisterDomainCommand;
async function deserializeAws_json1_0RegisterDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DomainAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsFault":
        case "com.amazonaws.swf.base.model#TooManyTagsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RegisterWorkflowTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RegisterWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RegisterWorkflowTypeCommand = deserializeAws_json1_0RegisterWorkflowTypeCommand;
async function deserializeAws_json1_0RegisterWorkflowTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RequestCancelWorkflowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = deserializeAws_json1_0RequestCancelWorkflowExecutionCommand;
async function deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RespondActivityTaskCanceledCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RespondActivityTaskCanceledCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RespondActivityTaskCanceledCommand = deserializeAws_json1_0RespondActivityTaskCanceledCommand;
async function deserializeAws_json1_0RespondActivityTaskCanceledCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RespondActivityTaskCompletedCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RespondActivityTaskCompletedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RespondActivityTaskCompletedCommand = deserializeAws_json1_0RespondActivityTaskCompletedCommand;
async function deserializeAws_json1_0RespondActivityTaskCompletedCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RespondActivityTaskFailedCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RespondActivityTaskFailedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RespondActivityTaskFailedCommand = deserializeAws_json1_0RespondActivityTaskFailedCommand;
async function deserializeAws_json1_0RespondActivityTaskFailedCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0RespondDecisionTaskCompletedCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0RespondDecisionTaskCompletedCommand = deserializeAws_json1_0RespondDecisionTaskCompletedCommand;
async function deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0SignalWorkflowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0SignalWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0SignalWorkflowExecutionCommand = deserializeAws_json1_0SignalWorkflowExecutionCommand;
async function deserializeAws_json1_0SignalWorkflowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0StartWorkflowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0StartWorkflowExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0Run(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "Run" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0StartWorkflowExecutionCommand = deserializeAws_json1_0StartWorkflowExecutionCommand;
async function deserializeAws_json1_0StartWorkflowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DefaultUndefinedFault":
        case "com.amazonaws.swf.base.model#DefaultUndefinedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0DefaultUndefinedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeDeprecatedFault":
        case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "WorkflowExecutionAlreadyStartedFault":
        case "com.amazonaws.swf.base.model#WorkflowExecutionAlreadyStartedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsFault":
        case "com.amazonaws.swf.base.model#TooManyTagsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0TerminateWorkflowExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0TerminateWorkflowExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0TerminateWorkflowExecutionCommand = deserializeAws_json1_0TerminateWorkflowExecutionCommand;
async function deserializeAws_json1_0TerminateWorkflowExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0UndeprecateActivityTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UndeprecateActivityTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UndeprecateActivityTypeCommand = deserializeAws_json1_0UndeprecateActivityTypeCommand;
async function deserializeAws_json1_0UndeprecateActivityTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0UndeprecateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UndeprecateDomainCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UndeprecateDomainCommand = deserializeAws_json1_0UndeprecateDomainCommand;
async function deserializeAws_json1_0UndeprecateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DomainAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_0UndeprecateWorkflowTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0UndeprecateWorkflowTypeCommand = deserializeAws_json1_0UndeprecateWorkflowTypeCommand;
async function deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TypeAlreadyExistsFault":
        case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "LimitExceededFault":
        case "com.amazonaws.swf.base.model#LimitExceededFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedFault":
        case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnknownResourceFault":
        case "com.amazonaws.swf.base.model#UnknownResourceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_0DefaultUndefinedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DefaultUndefinedFault(body, context);
    const contents = Object.assign({ name: "DefaultUndefinedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0DomainAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DomainAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "DomainAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0DomainDeprecatedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0DomainDeprecatedFault(body, context);
    const contents = Object.assign({ name: "DomainDeprecatedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0LimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededFault(body, context);
    const contents = Object.assign({ name: "LimitExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0OperationNotPermittedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OperationNotPermittedFault(body, context);
    const contents = Object.assign({ name: "OperationNotPermittedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TooManyTagsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TooManyTagsFault(body, context);
    const contents = Object.assign({ name: "TooManyTagsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TypeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TypeAlreadyExistsFault(body, context);
    const contents = Object.assign({ name: "TypeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TypeDeprecatedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TypeDeprecatedFault(body, context);
    const contents = Object.assign({ name: "TypeDeprecatedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0UnknownResourceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0UnknownResourceFault(body, context);
    const contents = Object.assign({ name: "UnknownResourceFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(body, context);
    const contents = Object.assign({ name: "WorkflowExecutionAlreadyStartedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0ActivityType = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_0CancelTimerDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.timerId !== undefined) {
        bodyParams["timerId"] = input.timerId;
    }
    return bodyParams;
};
const serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    return bodyParams;
};
const serializeAws_json1_0CloseStatusFilter = (input, context) => {
    const bodyParams = {};
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.result !== undefined) {
        bodyParams["result"] = input.result;
    }
    return bodyParams;
};
const serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.childPolicy !== undefined) {
        bodyParams["childPolicy"] = input.childPolicy;
    }
    if (input.executionStartToCloseTimeout !== undefined) {
        bodyParams["executionStartToCloseTimeout"] =
            input.executionStartToCloseTimeout;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.lambdaRole !== undefined) {
        bodyParams["lambdaRole"] = input.lambdaRole;
    }
    if (input.tagList !== undefined) {
        bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    if (input.taskPriority !== undefined) {
        bodyParams["taskPriority"] = input.taskPriority;
    }
    if (input.taskStartToCloseTimeout !== undefined) {
        bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
    }
    if (input.workflowTypeVersion !== undefined) {
        bodyParams["workflowTypeVersion"] = input.workflowTypeVersion;
    }
    return bodyParams;
};
const serializeAws_json1_0Decision = (input, context) => {
    const bodyParams = {};
    if (input.cancelTimerDecisionAttributes !== undefined) {
        bodyParams["cancelTimerDecisionAttributes"] = serializeAws_json1_0CancelTimerDecisionAttributes(input.cancelTimerDecisionAttributes, context);
    }
    if (input.cancelWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["cancelWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(input.cancelWorkflowExecutionDecisionAttributes, context);
    }
    if (input.completeWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["completeWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(input.completeWorkflowExecutionDecisionAttributes, context);
    }
    if (input.continueAsNewWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["continueAsNewWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(input.continueAsNewWorkflowExecutionDecisionAttributes, context);
    }
    if (input.decisionType !== undefined) {
        bodyParams["decisionType"] = input.decisionType;
    }
    if (input.failWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["failWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(input.failWorkflowExecutionDecisionAttributes, context);
    }
    if (input.recordMarkerDecisionAttributes !== undefined) {
        bodyParams["recordMarkerDecisionAttributes"] = serializeAws_json1_0RecordMarkerDecisionAttributes(input.recordMarkerDecisionAttributes, context);
    }
    if (input.requestCancelActivityTaskDecisionAttributes !== undefined) {
        bodyParams["requestCancelActivityTaskDecisionAttributes"] = serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(input.requestCancelActivityTaskDecisionAttributes, context);
    }
    if (input.requestCancelExternalWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["requestCancelExternalWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(input.requestCancelExternalWorkflowExecutionDecisionAttributes, context);
    }
    if (input.scheduleActivityTaskDecisionAttributes !== undefined) {
        bodyParams["scheduleActivityTaskDecisionAttributes"] = serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(input.scheduleActivityTaskDecisionAttributes, context);
    }
    if (input.scheduleLambdaFunctionDecisionAttributes !== undefined) {
        bodyParams["scheduleLambdaFunctionDecisionAttributes"] = serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(input.scheduleLambdaFunctionDecisionAttributes, context);
    }
    if (input.signalExternalWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["signalExternalWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(input.signalExternalWorkflowExecutionDecisionAttributes, context);
    }
    if (input.startChildWorkflowExecutionDecisionAttributes !== undefined) {
        bodyParams["startChildWorkflowExecutionDecisionAttributes"] = serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(input.startChildWorkflowExecutionDecisionAttributes, context);
    }
    if (input.startTimerDecisionAttributes !== undefined) {
        bodyParams["startTimerDecisionAttributes"] = serializeAws_json1_0StartTimerDecisionAttributes(input.startTimerDecisionAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_0DecisionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0Decision(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ExecutionTimeFilter = (input, context) => {
    const bodyParams = {};
    if (input.latestDate !== undefined) {
        bodyParams["latestDate"] = Math.round(input.latestDate.getTime() / 1000);
    }
    if (input.oldestDate !== undefined) {
        bodyParams["oldestDate"] = Math.round(input.oldestDate.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    return bodyParams;
};
const serializeAws_json1_0RecordMarkerDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.markerName !== undefined) {
        bodyParams["markerName"] = input.markerName;
    }
    return bodyParams;
};
const serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.activityId !== undefined) {
        bodyParams["activityId"] = input.activityId;
    }
    return bodyParams;
};
const serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0ResourceTag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_0ResourceTagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0ResourceTagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ResourceTag(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.activityId !== undefined) {
        bodyParams["activityId"] = input.activityId;
    }
    if (input.activityType !== undefined) {
        bodyParams["activityType"] = serializeAws_json1_0ActivityType(input.activityType, context);
    }
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.heartbeatTimeout !== undefined) {
        bodyParams["heartbeatTimeout"] = input.heartbeatTimeout;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.scheduleToCloseTimeout !== undefined) {
        bodyParams["scheduleToCloseTimeout"] = input.scheduleToCloseTimeout;
    }
    if (input.scheduleToStartTimeout !== undefined) {
        bodyParams["scheduleToStartTimeout"] = input.scheduleToStartTimeout;
    }
    if (input.startToCloseTimeout !== undefined) {
        bodyParams["startToCloseTimeout"] = input.startToCloseTimeout;
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    if (input.taskPriority !== undefined) {
        bodyParams["taskPriority"] = input.taskPriority;
    }
    return bodyParams;
};
const serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.startToCloseTimeout !== undefined) {
        bodyParams["startToCloseTimeout"] = input.startToCloseTimeout;
    }
    return bodyParams;
};
const serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.signalName !== undefined) {
        bodyParams["signalName"] = input.signalName;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.childPolicy !== undefined) {
        bodyParams["childPolicy"] = input.childPolicy;
    }
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.executionStartToCloseTimeout !== undefined) {
        bodyParams["executionStartToCloseTimeout"] =
            input.executionStartToCloseTimeout;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.lambdaRole !== undefined) {
        bodyParams["lambdaRole"] = input.lambdaRole;
    }
    if (input.tagList !== undefined) {
        bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    if (input.taskPriority !== undefined) {
        bodyParams["taskPriority"] = input.taskPriority;
    }
    if (input.taskStartToCloseTimeout !== undefined) {
        bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    if (input.workflowType !== undefined) {
        bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(input.workflowType, context);
    }
    return bodyParams;
};
const serializeAws_json1_0StartTimerDecisionAttributes = (input, context) => {
    const bodyParams = {};
    if (input.control !== undefined) {
        bodyParams["control"] = input.control;
    }
    if (input.startToFireTimeout !== undefined) {
        bodyParams["startToFireTimeout"] = input.startToFireTimeout;
    }
    if (input.timerId !== undefined) {
        bodyParams["timerId"] = input.timerId;
    }
    return bodyParams;
};
const serializeAws_json1_0TagFilter = (input, context) => {
    const bodyParams = {};
    if (input.tag !== undefined) {
        bodyParams["tag"] = input.tag;
    }
    return bodyParams;
};
const serializeAws_json1_0TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_0TaskList = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_0WorkflowExecution = (input, context) => {
    const bodyParams = {};
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0WorkflowExecutionFilter = (input, context) => {
    const bodyParams = {};
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0WorkflowType = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_0WorkflowTypeFilter = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_0CountClosedWorkflowExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.closeStatusFilter !== undefined) {
        bodyParams["closeStatusFilter"] = serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context);
    }
    if (input.closeTimeFilter !== undefined) {
        bodyParams["closeTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context);
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.executionFilter !== undefined) {
        bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context);
    }
    if (input.startTimeFilter !== undefined) {
        bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context);
    }
    if (input.tagFilter !== undefined) {
        bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(input.tagFilter, context);
    }
    if (input.typeFilter !== undefined) {
        bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CountOpenWorkflowExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.executionFilter !== undefined) {
        bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context);
    }
    if (input.startTimeFilter !== undefined) {
        bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context);
    }
    if (input.tagFilter !== undefined) {
        bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(input.tagFilter, context);
    }
    if (input.typeFilter !== undefined) {
        bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CountPendingActivityTasksInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    return bodyParams;
};
const serializeAws_json1_0CountPendingDecisionTasksInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    return bodyParams;
};
const serializeAws_json1_0DeprecateActivityTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.activityType !== undefined) {
        bodyParams["activityType"] = serializeAws_json1_0ActivityType(input.activityType, context);
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    return bodyParams;
};
const serializeAws_json1_0DeprecateDomainInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_0DeprecateWorkflowTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.workflowType !== undefined) {
        bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(input.workflowType, context);
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeActivityTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.activityType !== undefined) {
        bodyParams["activityType"] = serializeAws_json1_0ActivityType(input.activityType, context);
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeDomainInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeWorkflowExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.execution !== undefined) {
        bodyParams["execution"] = serializeAws_json1_0WorkflowExecution(input.execution, context);
    }
    return bodyParams;
};
const serializeAws_json1_0DescribeWorkflowTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.workflowType !== undefined) {
        bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(input.workflowType, context);
    }
    return bodyParams;
};
const serializeAws_json1_0GetWorkflowExecutionHistoryInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.execution !== undefined) {
        bodyParams["execution"] = serializeAws_json1_0WorkflowExecution(input.execution, context);
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_0ListActivityTypesInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.registrationStatus !== undefined) {
        bodyParams["registrationStatus"] = input.registrationStatus;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_0ListClosedWorkflowExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.closeStatusFilter !== undefined) {
        bodyParams["closeStatusFilter"] = serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context);
    }
    if (input.closeTimeFilter !== undefined) {
        bodyParams["closeTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context);
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.executionFilter !== undefined) {
        bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context);
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    if (input.startTimeFilter !== undefined) {
        bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context);
    }
    if (input.tagFilter !== undefined) {
        bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(input.tagFilter, context);
    }
    if (input.typeFilter !== undefined) {
        bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context);
    }
    return bodyParams;
};
const serializeAws_json1_0ListDomainsInput = (input, context) => {
    const bodyParams = {};
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.registrationStatus !== undefined) {
        bodyParams["registrationStatus"] = input.registrationStatus;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_0ListOpenWorkflowExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.executionFilter !== undefined) {
        bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context);
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    if (input.startTimeFilter !== undefined) {
        bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context);
    }
    if (input.tagFilter !== undefined) {
        bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(input.tagFilter, context);
    }
    if (input.typeFilter !== undefined) {
        bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context);
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
const serializeAws_json1_0ListWorkflowTypesInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.registrationStatus !== undefined) {
        bodyParams["registrationStatus"] = input.registrationStatus;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    return bodyParams;
};
const serializeAws_json1_0PollForActivityTaskInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.identity !== undefined) {
        bodyParams["identity"] = input.identity;
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    return bodyParams;
};
const serializeAws_json1_0PollForDecisionTaskInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.identity !== undefined) {
        bodyParams["identity"] = input.identity;
    }
    if (input.maximumPageSize !== undefined) {
        bodyParams["maximumPageSize"] = input.maximumPageSize;
    }
    if (input.nextPageToken !== undefined) {
        bodyParams["nextPageToken"] = input.nextPageToken;
    }
    if (input.reverseOrder !== undefined) {
        bodyParams["reverseOrder"] = input.reverseOrder;
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    return bodyParams;
};
const serializeAws_json1_0RecordActivityTaskHeartbeatInput = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0RegisterActivityTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.defaultTaskHeartbeatTimeout !== undefined) {
        bodyParams["defaultTaskHeartbeatTimeout"] =
            input.defaultTaskHeartbeatTimeout;
    }
    if (input.defaultTaskList !== undefined) {
        bodyParams["defaultTaskList"] = serializeAws_json1_0TaskList(input.defaultTaskList, context);
    }
    if (input.defaultTaskPriority !== undefined) {
        bodyParams["defaultTaskPriority"] = input.defaultTaskPriority;
    }
    if (input.defaultTaskScheduleToCloseTimeout !== undefined) {
        bodyParams["defaultTaskScheduleToCloseTimeout"] =
            input.defaultTaskScheduleToCloseTimeout;
    }
    if (input.defaultTaskScheduleToStartTimeout !== undefined) {
        bodyParams["defaultTaskScheduleToStartTimeout"] =
            input.defaultTaskScheduleToStartTimeout;
    }
    if (input.defaultTaskStartToCloseTimeout !== undefined) {
        bodyParams["defaultTaskStartToCloseTimeout"] =
            input.defaultTaskStartToCloseTimeout;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_0RegisterDomainInput = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_0ResourceTagList(input.tags, context);
    }
    if (input.workflowExecutionRetentionPeriodInDays !== undefined) {
        bodyParams["workflowExecutionRetentionPeriodInDays"] =
            input.workflowExecutionRetentionPeriodInDays;
    }
    return bodyParams;
};
const serializeAws_json1_0RegisterWorkflowTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.defaultChildPolicy !== undefined) {
        bodyParams["defaultChildPolicy"] = input.defaultChildPolicy;
    }
    if (input.defaultExecutionStartToCloseTimeout !== undefined) {
        bodyParams["defaultExecutionStartToCloseTimeout"] =
            input.defaultExecutionStartToCloseTimeout;
    }
    if (input.defaultLambdaRole !== undefined) {
        bodyParams["defaultLambdaRole"] = input.defaultLambdaRole;
    }
    if (input.defaultTaskList !== undefined) {
        bodyParams["defaultTaskList"] = serializeAws_json1_0TaskList(input.defaultTaskList, context);
    }
    if (input.defaultTaskPriority !== undefined) {
        bodyParams["defaultTaskPriority"] = input.defaultTaskPriority;
    }
    if (input.defaultTaskStartToCloseTimeout !== undefined) {
        bodyParams["defaultTaskStartToCloseTimeout"] =
            input.defaultTaskStartToCloseTimeout;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_0RequestCancelWorkflowExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0RespondActivityTaskCanceledInput = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0RespondActivityTaskCompletedInput = (input, context) => {
    const bodyParams = {};
    if (input.result !== undefined) {
        bodyParams["result"] = input.result;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0RespondActivityTaskFailedInput = (input, context) => {
    const bodyParams = {};
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0RespondDecisionTaskCompletedInput = (input, context) => {
    const bodyParams = {};
    if (input.decisions !== undefined) {
        bodyParams["decisions"] = serializeAws_json1_0DecisionList(input.decisions, context);
    }
    if (input.executionContext !== undefined) {
        bodyParams["executionContext"] = input.executionContext;
    }
    if (input.taskToken !== undefined) {
        bodyParams["taskToken"] = input.taskToken;
    }
    return bodyParams;
};
const serializeAws_json1_0SignalWorkflowExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.signalName !== undefined) {
        bodyParams["signalName"] = input.signalName;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0StartWorkflowExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.childPolicy !== undefined) {
        bodyParams["childPolicy"] = input.childPolicy;
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.executionStartToCloseTimeout !== undefined) {
        bodyParams["executionStartToCloseTimeout"] =
            input.executionStartToCloseTimeout;
    }
    if (input.input !== undefined) {
        bodyParams["input"] = input.input;
    }
    if (input.lambdaRole !== undefined) {
        bodyParams["lambdaRole"] = input.lambdaRole;
    }
    if (input.tagList !== undefined) {
        bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
    }
    if (input.taskList !== undefined) {
        bodyParams["taskList"] = serializeAws_json1_0TaskList(input.taskList, context);
    }
    if (input.taskPriority !== undefined) {
        bodyParams["taskPriority"] = input.taskPriority;
    }
    if (input.taskStartToCloseTimeout !== undefined) {
        bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    if (input.workflowType !== undefined) {
        bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(input.workflowType, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_0ResourceTagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_0TerminateWorkflowExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.childPolicy !== undefined) {
        bodyParams["childPolicy"] = input.childPolicy;
    }
    if (input.details !== undefined) {
        bodyParams["details"] = input.details;
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.runId !== undefined) {
        bodyParams["runId"] = input.runId;
    }
    if (input.workflowId !== undefined) {
        bodyParams["workflowId"] = input.workflowId;
    }
    return bodyParams;
};
const serializeAws_json1_0UndeprecateActivityTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.activityType !== undefined) {
        bodyParams["activityType"] = serializeAws_json1_0ActivityType(input.activityType, context);
    }
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    return bodyParams;
};
const serializeAws_json1_0UndeprecateDomainInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_0UndeprecateWorkflowTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.domain !== undefined) {
        bodyParams["domain"] = input.domain;
    }
    if (input.workflowType !== undefined) {
        bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(input.workflowType, context);
    }
    return bodyParams;
};
const serializeAws_json1_0UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_0ResourceTagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const deserializeAws_json1_0ActivityTask = (output, context) => {
    let contents = {
        __type: "ActivityTask",
        activityId: undefined,
        activityType: undefined,
        input: undefined,
        startedEventId: undefined,
        taskToken: undefined,
        workflowExecution: undefined
    };
    if (output.activityId !== undefined && output.activityId !== null) {
        contents.activityId = output.activityId;
    }
    if (output.activityType !== undefined && output.activityType !== null) {
        contents.activityType = deserializeAws_json1_0ActivityType(output.activityType, context);
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.taskToken !== undefined && output.taskToken !== null) {
        contents.taskToken = output.taskToken;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskCancelRequestedEventAttributes",
        activityId: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.activityId !== undefined && output.activityId !== null) {
        contents.activityId = output.activityId;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskCanceledEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskCanceledEventAttributes",
        details: undefined,
        latestCancelRequestedEventId: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.latestCancelRequestedEventId !== undefined &&
        output.latestCancelRequestedEventId !== null) {
        contents.latestCancelRequestedEventId = output.latestCancelRequestedEventId;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskCompletedEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskCompletedEventAttributes",
        result: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskFailedEventAttributes",
        details: undefined,
        reason: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskScheduledEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskScheduledEventAttributes",
        activityId: undefined,
        activityType: undefined,
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        heartbeatTimeout: undefined,
        input: undefined,
        scheduleToCloseTimeout: undefined,
        scheduleToStartTimeout: undefined,
        startToCloseTimeout: undefined,
        taskList: undefined,
        taskPriority: undefined
    };
    if (output.activityId !== undefined && output.activityId !== null) {
        contents.activityId = output.activityId;
    }
    if (output.activityType !== undefined && output.activityType !== null) {
        contents.activityType = deserializeAws_json1_0ActivityType(output.activityType, context);
    }
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.heartbeatTimeout !== undefined &&
        output.heartbeatTimeout !== null) {
        contents.heartbeatTimeout = output.heartbeatTimeout;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.scheduleToCloseTimeout !== undefined &&
        output.scheduleToCloseTimeout !== null) {
        contents.scheduleToCloseTimeout = output.scheduleToCloseTimeout;
    }
    if (output.scheduleToStartTimeout !== undefined &&
        output.scheduleToStartTimeout !== null) {
        contents.scheduleToStartTimeout = output.scheduleToStartTimeout;
    }
    if (output.startToCloseTimeout !== undefined &&
        output.startToCloseTimeout !== null) {
        contents.startToCloseTimeout = output.startToCloseTimeout;
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskStartedEventAttributes",
        identity: undefined,
        scheduledEventId: undefined
    };
    if (output.identity !== undefined && output.identity !== null) {
        contents.identity = output.identity;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskStatus = (output, context) => {
    let contents = {
        __type: "ActivityTaskStatus",
        cancelRequested: undefined
    };
    if (output.cancelRequested !== undefined && output.cancelRequested !== null) {
        contents.cancelRequested = output.cancelRequested;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTaskTimedOutEventAttributes = (output, context) => {
    let contents = {
        __type: "ActivityTaskTimedOutEventAttributes",
        details: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined,
        timeoutType: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timeoutType !== undefined && output.timeoutType !== null) {
        contents.timeoutType = output.timeoutType;
    }
    return contents;
};
const deserializeAws_json1_0ActivityType = (output, context) => {
    let contents = {
        __type: "ActivityType",
        name: undefined,
        version: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTypeConfiguration = (output, context) => {
    let contents = {
        __type: "ActivityTypeConfiguration",
        defaultTaskHeartbeatTimeout: undefined,
        defaultTaskList: undefined,
        defaultTaskPriority: undefined,
        defaultTaskScheduleToCloseTimeout: undefined,
        defaultTaskScheduleToStartTimeout: undefined,
        defaultTaskStartToCloseTimeout: undefined
    };
    if (output.defaultTaskHeartbeatTimeout !== undefined &&
        output.defaultTaskHeartbeatTimeout !== null) {
        contents.defaultTaskHeartbeatTimeout = output.defaultTaskHeartbeatTimeout;
    }
    if (output.defaultTaskList !== undefined && output.defaultTaskList !== null) {
        contents.defaultTaskList = deserializeAws_json1_0TaskList(output.defaultTaskList, context);
    }
    if (output.defaultTaskPriority !== undefined &&
        output.defaultTaskPriority !== null) {
        contents.defaultTaskPriority = output.defaultTaskPriority;
    }
    if (output.defaultTaskScheduleToCloseTimeout !== undefined &&
        output.defaultTaskScheduleToCloseTimeout !== null) {
        contents.defaultTaskScheduleToCloseTimeout =
            output.defaultTaskScheduleToCloseTimeout;
    }
    if (output.defaultTaskScheduleToStartTimeout !== undefined &&
        output.defaultTaskScheduleToStartTimeout !== null) {
        contents.defaultTaskScheduleToStartTimeout =
            output.defaultTaskScheduleToStartTimeout;
    }
    if (output.defaultTaskStartToCloseTimeout !== undefined &&
        output.defaultTaskStartToCloseTimeout !== null) {
        contents.defaultTaskStartToCloseTimeout =
            output.defaultTaskStartToCloseTimeout;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTypeDetail = (output, context) => {
    let contents = {
        __type: "ActivityTypeDetail",
        configuration: undefined,
        typeInfo: undefined
    };
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_0ActivityTypeConfiguration(output.configuration, context);
    }
    if (output.typeInfo !== undefined && output.typeInfo !== null) {
        contents.typeInfo = deserializeAws_json1_0ActivityTypeInfo(output.typeInfo, context);
    }
    return contents;
};
const deserializeAws_json1_0ActivityTypeInfo = (output, context) => {
    let contents = {
        __type: "ActivityTypeInfo",
        activityType: undefined,
        creationDate: undefined,
        deprecationDate: undefined,
        description: undefined,
        status: undefined
    };
    if (output.activityType !== undefined && output.activityType !== null) {
        contents.activityType = deserializeAws_json1_0ActivityType(output.activityType, context);
    }
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.deprecationDate !== undefined && output.deprecationDate !== null) {
        contents.deprecationDate = new Date(Math.round(output.deprecationDate * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_0ActivityTypeInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ActivityTypeInfo(entry, context));
};
const deserializeAws_json1_0ActivityTypeInfos = (output, context) => {
    let contents = {
        __type: "ActivityTypeInfos",
        nextPageToken: undefined,
        typeInfos: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.typeInfos !== undefined && output.typeInfos !== null) {
        contents.typeInfos = deserializeAws_json1_0ActivityTypeInfoList(output.typeInfos, context);
    }
    return contents;
};
const deserializeAws_json1_0CancelTimerFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "CancelTimerFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined,
        timerId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.timerId !== undefined && output.timerId !== null) {
        contents.timerId = output.timerId;
    }
    return contents;
};
const deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "CancelWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionCanceledEventAttributes",
        details: undefined,
        initiatedEventId: undefined,
        startedEventId: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionCompletedEventAttributes",
        initiatedEventId: undefined,
        result: undefined,
        startedEventId: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionFailedEventAttributes",
        details: undefined,
        initiatedEventId: undefined,
        reason: undefined,
        startedEventId: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionStartedEventAttributes",
        initiatedEventId: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionTerminatedEventAttributes",
        initiatedEventId: undefined,
        startedEventId: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes = (output, context) => {
    let contents = {
        __type: "ChildWorkflowExecutionTimedOutEventAttributes",
        initiatedEventId: undefined,
        startedEventId: undefined,
        timeoutType: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timeoutType !== undefined && output.timeoutType !== null) {
        contents.timeoutType = output.timeoutType;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "CompleteWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "ContinueAsNewWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0DecisionTask = (output, context) => {
    let contents = {
        __type: "DecisionTask",
        events: undefined,
        nextPageToken: undefined,
        previousStartedEventId: undefined,
        startedEventId: undefined,
        taskToken: undefined,
        workflowExecution: undefined,
        workflowType: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_0HistoryEventList(output.events, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.previousStartedEventId !== undefined &&
        output.previousStartedEventId !== null) {
        contents.previousStartedEventId = output.previousStartedEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.taskToken !== undefined && output.taskToken !== null) {
        contents.taskToken = output.taskToken;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0DecisionTaskCompletedEventAttributes = (output, context) => {
    let contents = {
        __type: "DecisionTaskCompletedEventAttributes",
        executionContext: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.executionContext !== undefined &&
        output.executionContext !== null) {
        contents.executionContext = output.executionContext;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0DecisionTaskScheduledEventAttributes = (output, context) => {
    let contents = {
        __type: "DecisionTaskScheduledEventAttributes",
        startToCloseTimeout: undefined,
        taskList: undefined,
        taskPriority: undefined
    };
    if (output.startToCloseTimeout !== undefined &&
        output.startToCloseTimeout !== null) {
        contents.startToCloseTimeout = output.startToCloseTimeout;
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    return contents;
};
const deserializeAws_json1_0DecisionTaskStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "DecisionTaskStartedEventAttributes",
        identity: undefined,
        scheduledEventId: undefined
    };
    if (output.identity !== undefined && output.identity !== null) {
        contents.identity = output.identity;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    return contents;
};
const deserializeAws_json1_0DecisionTaskTimedOutEventAttributes = (output, context) => {
    let contents = {
        __type: "DecisionTaskTimedOutEventAttributes",
        scheduledEventId: undefined,
        startedEventId: undefined,
        timeoutType: undefined
    };
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timeoutType !== undefined && output.timeoutType !== null) {
        contents.timeoutType = output.timeoutType;
    }
    return contents;
};
const deserializeAws_json1_0DefaultUndefinedFault = (output, context) => {
    let contents = {
        __type: "DefaultUndefinedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0DomainAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "DomainAlreadyExistsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0DomainConfiguration = (output, context) => {
    let contents = {
        __type: "DomainConfiguration",
        workflowExecutionRetentionPeriodInDays: undefined
    };
    if (output.workflowExecutionRetentionPeriodInDays !== undefined &&
        output.workflowExecutionRetentionPeriodInDays !== null) {
        contents.workflowExecutionRetentionPeriodInDays =
            output.workflowExecutionRetentionPeriodInDays;
    }
    return contents;
};
const deserializeAws_json1_0DomainDeprecatedFault = (output, context) => {
    let contents = {
        __type: "DomainDeprecatedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0DomainDetail = (output, context) => {
    let contents = {
        __type: "DomainDetail",
        configuration: undefined,
        domainInfo: undefined
    };
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_0DomainConfiguration(output.configuration, context);
    }
    if (output.domainInfo !== undefined && output.domainInfo !== null) {
        contents.domainInfo = deserializeAws_json1_0DomainInfo(output.domainInfo, context);
    }
    return contents;
};
const deserializeAws_json1_0DomainInfo = (output, context) => {
    let contents = {
        __type: "DomainInfo",
        arn: undefined,
        description: undefined,
        name: undefined,
        status: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_0DomainInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0DomainInfo(entry, context));
};
const deserializeAws_json1_0DomainInfos = (output, context) => {
    let contents = {
        __type: "DomainInfos",
        domainInfos: undefined,
        nextPageToken: undefined
    };
    if (output.domainInfos !== undefined && output.domainInfos !== null) {
        contents.domainInfos = deserializeAws_json1_0DomainInfoList(output.domainInfos, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes = (output, context) => {
    let contents = {
        __type: "ExternalWorkflowExecutionCancelRequestedEventAttributes",
        initiatedEventId: undefined,
        workflowExecution: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    return contents;
};
const deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes = (output, context) => {
    let contents = {
        __type: "ExternalWorkflowExecutionSignaledEventAttributes",
        initiatedEventId: undefined,
        workflowExecution: undefined
    };
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.workflowExecution !== undefined &&
        output.workflowExecution !== null) {
        contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context);
    }
    return contents;
};
const deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "FailWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0History = (output, context) => {
    let contents = {
        __type: "History",
        events: undefined,
        nextPageToken: undefined
    };
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_0HistoryEventList(output.events, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_0HistoryEvent = (output, context) => {
    let contents = {
        __type: "HistoryEvent",
        activityTaskCancelRequestedEventAttributes: undefined,
        activityTaskCanceledEventAttributes: undefined,
        activityTaskCompletedEventAttributes: undefined,
        activityTaskFailedEventAttributes: undefined,
        activityTaskScheduledEventAttributes: undefined,
        activityTaskStartedEventAttributes: undefined,
        activityTaskTimedOutEventAttributes: undefined,
        cancelTimerFailedEventAttributes: undefined,
        cancelWorkflowExecutionFailedEventAttributes: undefined,
        childWorkflowExecutionCanceledEventAttributes: undefined,
        childWorkflowExecutionCompletedEventAttributes: undefined,
        childWorkflowExecutionFailedEventAttributes: undefined,
        childWorkflowExecutionStartedEventAttributes: undefined,
        childWorkflowExecutionTerminatedEventAttributes: undefined,
        childWorkflowExecutionTimedOutEventAttributes: undefined,
        completeWorkflowExecutionFailedEventAttributes: undefined,
        continueAsNewWorkflowExecutionFailedEventAttributes: undefined,
        decisionTaskCompletedEventAttributes: undefined,
        decisionTaskScheduledEventAttributes: undefined,
        decisionTaskStartedEventAttributes: undefined,
        decisionTaskTimedOutEventAttributes: undefined,
        eventId: undefined,
        eventTimestamp: undefined,
        eventType: undefined,
        externalWorkflowExecutionCancelRequestedEventAttributes: undefined,
        externalWorkflowExecutionSignaledEventAttributes: undefined,
        failWorkflowExecutionFailedEventAttributes: undefined,
        lambdaFunctionCompletedEventAttributes: undefined,
        lambdaFunctionFailedEventAttributes: undefined,
        lambdaFunctionScheduledEventAttributes: undefined,
        lambdaFunctionStartedEventAttributes: undefined,
        lambdaFunctionTimedOutEventAttributes: undefined,
        markerRecordedEventAttributes: undefined,
        recordMarkerFailedEventAttributes: undefined,
        requestCancelActivityTaskFailedEventAttributes: undefined,
        requestCancelExternalWorkflowExecutionFailedEventAttributes: undefined,
        requestCancelExternalWorkflowExecutionInitiatedEventAttributes: undefined,
        scheduleActivityTaskFailedEventAttributes: undefined,
        scheduleLambdaFunctionFailedEventAttributes: undefined,
        signalExternalWorkflowExecutionFailedEventAttributes: undefined,
        signalExternalWorkflowExecutionInitiatedEventAttributes: undefined,
        startChildWorkflowExecutionFailedEventAttributes: undefined,
        startChildWorkflowExecutionInitiatedEventAttributes: undefined,
        startLambdaFunctionFailedEventAttributes: undefined,
        startTimerFailedEventAttributes: undefined,
        timerCanceledEventAttributes: undefined,
        timerFiredEventAttributes: undefined,
        timerStartedEventAttributes: undefined,
        workflowExecutionCancelRequestedEventAttributes: undefined,
        workflowExecutionCanceledEventAttributes: undefined,
        workflowExecutionCompletedEventAttributes: undefined,
        workflowExecutionContinuedAsNewEventAttributes: undefined,
        workflowExecutionFailedEventAttributes: undefined,
        workflowExecutionSignaledEventAttributes: undefined,
        workflowExecutionStartedEventAttributes: undefined,
        workflowExecutionTerminatedEventAttributes: undefined,
        workflowExecutionTimedOutEventAttributes: undefined
    };
    if (output.activityTaskCancelRequestedEventAttributes !== undefined &&
        output.activityTaskCancelRequestedEventAttributes !== null) {
        contents.activityTaskCancelRequestedEventAttributes = deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(output.activityTaskCancelRequestedEventAttributes, context);
    }
    if (output.activityTaskCanceledEventAttributes !== undefined &&
        output.activityTaskCanceledEventAttributes !== null) {
        contents.activityTaskCanceledEventAttributes = deserializeAws_json1_0ActivityTaskCanceledEventAttributes(output.activityTaskCanceledEventAttributes, context);
    }
    if (output.activityTaskCompletedEventAttributes !== undefined &&
        output.activityTaskCompletedEventAttributes !== null) {
        contents.activityTaskCompletedEventAttributes = deserializeAws_json1_0ActivityTaskCompletedEventAttributes(output.activityTaskCompletedEventAttributes, context);
    }
    if (output.activityTaskFailedEventAttributes !== undefined &&
        output.activityTaskFailedEventAttributes !== null) {
        contents.activityTaskFailedEventAttributes = deserializeAws_json1_0ActivityTaskFailedEventAttributes(output.activityTaskFailedEventAttributes, context);
    }
    if (output.activityTaskScheduledEventAttributes !== undefined &&
        output.activityTaskScheduledEventAttributes !== null) {
        contents.activityTaskScheduledEventAttributes = deserializeAws_json1_0ActivityTaskScheduledEventAttributes(output.activityTaskScheduledEventAttributes, context);
    }
    if (output.activityTaskStartedEventAttributes !== undefined &&
        output.activityTaskStartedEventAttributes !== null) {
        contents.activityTaskStartedEventAttributes = deserializeAws_json1_0ActivityTaskStartedEventAttributes(output.activityTaskStartedEventAttributes, context);
    }
    if (output.activityTaskTimedOutEventAttributes !== undefined &&
        output.activityTaskTimedOutEventAttributes !== null) {
        contents.activityTaskTimedOutEventAttributes = deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(output.activityTaskTimedOutEventAttributes, context);
    }
    if (output.cancelTimerFailedEventAttributes !== undefined &&
        output.cancelTimerFailedEventAttributes !== null) {
        contents.cancelTimerFailedEventAttributes = deserializeAws_json1_0CancelTimerFailedEventAttributes(output.cancelTimerFailedEventAttributes, context);
    }
    if (output.cancelWorkflowExecutionFailedEventAttributes !== undefined &&
        output.cancelWorkflowExecutionFailedEventAttributes !== null) {
        contents.cancelWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(output.cancelWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.childWorkflowExecutionCanceledEventAttributes !== undefined &&
        output.childWorkflowExecutionCanceledEventAttributes !== null) {
        contents.childWorkflowExecutionCanceledEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(output.childWorkflowExecutionCanceledEventAttributes, context);
    }
    if (output.childWorkflowExecutionCompletedEventAttributes !== undefined &&
        output.childWorkflowExecutionCompletedEventAttributes !== null) {
        contents.childWorkflowExecutionCompletedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(output.childWorkflowExecutionCompletedEventAttributes, context);
    }
    if (output.childWorkflowExecutionFailedEventAttributes !== undefined &&
        output.childWorkflowExecutionFailedEventAttributes !== null) {
        contents.childWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(output.childWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.childWorkflowExecutionStartedEventAttributes !== undefined &&
        output.childWorkflowExecutionStartedEventAttributes !== null) {
        contents.childWorkflowExecutionStartedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(output.childWorkflowExecutionStartedEventAttributes, context);
    }
    if (output.childWorkflowExecutionTerminatedEventAttributes !== undefined &&
        output.childWorkflowExecutionTerminatedEventAttributes !== null) {
        contents.childWorkflowExecutionTerminatedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(output.childWorkflowExecutionTerminatedEventAttributes, context);
    }
    if (output.childWorkflowExecutionTimedOutEventAttributes !== undefined &&
        output.childWorkflowExecutionTimedOutEventAttributes !== null) {
        contents.childWorkflowExecutionTimedOutEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(output.childWorkflowExecutionTimedOutEventAttributes, context);
    }
    if (output.completeWorkflowExecutionFailedEventAttributes !== undefined &&
        output.completeWorkflowExecutionFailedEventAttributes !== null) {
        contents.completeWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(output.completeWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined &&
        output.continueAsNewWorkflowExecutionFailedEventAttributes !== null) {
        contents.continueAsNewWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(output.continueAsNewWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.decisionTaskCompletedEventAttributes !== undefined &&
        output.decisionTaskCompletedEventAttributes !== null) {
        contents.decisionTaskCompletedEventAttributes = deserializeAws_json1_0DecisionTaskCompletedEventAttributes(output.decisionTaskCompletedEventAttributes, context);
    }
    if (output.decisionTaskScheduledEventAttributes !== undefined &&
        output.decisionTaskScheduledEventAttributes !== null) {
        contents.decisionTaskScheduledEventAttributes = deserializeAws_json1_0DecisionTaskScheduledEventAttributes(output.decisionTaskScheduledEventAttributes, context);
    }
    if (output.decisionTaskStartedEventAttributes !== undefined &&
        output.decisionTaskStartedEventAttributes !== null) {
        contents.decisionTaskStartedEventAttributes = deserializeAws_json1_0DecisionTaskStartedEventAttributes(output.decisionTaskStartedEventAttributes, context);
    }
    if (output.decisionTaskTimedOutEventAttributes !== undefined &&
        output.decisionTaskTimedOutEventAttributes !== null) {
        contents.decisionTaskTimedOutEventAttributes = deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(output.decisionTaskTimedOutEventAttributes, context);
    }
    if (output.eventId !== undefined && output.eventId !== null) {
        contents.eventId = output.eventId;
    }
    if (output.eventTimestamp !== undefined && output.eventTimestamp !== null) {
        contents.eventTimestamp = new Date(Math.round(output.eventTimestamp * 1000));
    }
    if (output.eventType !== undefined && output.eventType !== null) {
        contents.eventType = output.eventType;
    }
    if (output.externalWorkflowExecutionCancelRequestedEventAttributes !==
        undefined &&
        output.externalWorkflowExecutionCancelRequestedEventAttributes !== null) {
        contents.externalWorkflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(output.externalWorkflowExecutionCancelRequestedEventAttributes, context);
    }
    if (output.externalWorkflowExecutionSignaledEventAttributes !== undefined &&
        output.externalWorkflowExecutionSignaledEventAttributes !== null) {
        contents.externalWorkflowExecutionSignaledEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(output.externalWorkflowExecutionSignaledEventAttributes, context);
    }
    if (output.failWorkflowExecutionFailedEventAttributes !== undefined &&
        output.failWorkflowExecutionFailedEventAttributes !== null) {
        contents.failWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(output.failWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.lambdaFunctionCompletedEventAttributes !== undefined &&
        output.lambdaFunctionCompletedEventAttributes !== null) {
        contents.lambdaFunctionCompletedEventAttributes = deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(output.lambdaFunctionCompletedEventAttributes, context);
    }
    if (output.lambdaFunctionFailedEventAttributes !== undefined &&
        output.lambdaFunctionFailedEventAttributes !== null) {
        contents.lambdaFunctionFailedEventAttributes = deserializeAws_json1_0LambdaFunctionFailedEventAttributes(output.lambdaFunctionFailedEventAttributes, context);
    }
    if (output.lambdaFunctionScheduledEventAttributes !== undefined &&
        output.lambdaFunctionScheduledEventAttributes !== null) {
        contents.lambdaFunctionScheduledEventAttributes = deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(output.lambdaFunctionScheduledEventAttributes, context);
    }
    if (output.lambdaFunctionStartedEventAttributes !== undefined &&
        output.lambdaFunctionStartedEventAttributes !== null) {
        contents.lambdaFunctionStartedEventAttributes = deserializeAws_json1_0LambdaFunctionStartedEventAttributes(output.lambdaFunctionStartedEventAttributes, context);
    }
    if (output.lambdaFunctionTimedOutEventAttributes !== undefined &&
        output.lambdaFunctionTimedOutEventAttributes !== null) {
        contents.lambdaFunctionTimedOutEventAttributes = deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(output.lambdaFunctionTimedOutEventAttributes, context);
    }
    if (output.markerRecordedEventAttributes !== undefined &&
        output.markerRecordedEventAttributes !== null) {
        contents.markerRecordedEventAttributes = deserializeAws_json1_0MarkerRecordedEventAttributes(output.markerRecordedEventAttributes, context);
    }
    if (output.recordMarkerFailedEventAttributes !== undefined &&
        output.recordMarkerFailedEventAttributes !== null) {
        contents.recordMarkerFailedEventAttributes = deserializeAws_json1_0RecordMarkerFailedEventAttributes(output.recordMarkerFailedEventAttributes, context);
    }
    if (output.requestCancelActivityTaskFailedEventAttributes !== undefined &&
        output.requestCancelActivityTaskFailedEventAttributes !== null) {
        contents.requestCancelActivityTaskFailedEventAttributes = deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(output.requestCancelActivityTaskFailedEventAttributes, context);
    }
    if (output.requestCancelExternalWorkflowExecutionFailedEventAttributes !==
        undefined &&
        output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== null) {
        contents.requestCancelExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(output.requestCancelExternalWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !==
        undefined &&
        output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !==
            null) {
        contents.requestCancelExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes, context);
    }
    if (output.scheduleActivityTaskFailedEventAttributes !== undefined &&
        output.scheduleActivityTaskFailedEventAttributes !== null) {
        contents.scheduleActivityTaskFailedEventAttributes = deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(output.scheduleActivityTaskFailedEventAttributes, context);
    }
    if (output.scheduleLambdaFunctionFailedEventAttributes !== undefined &&
        output.scheduleLambdaFunctionFailedEventAttributes !== null) {
        contents.scheduleLambdaFunctionFailedEventAttributes = deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(output.scheduleLambdaFunctionFailedEventAttributes, context);
    }
    if (output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined &&
        output.signalExternalWorkflowExecutionFailedEventAttributes !== null) {
        contents.signalExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(output.signalExternalWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.signalExternalWorkflowExecutionInitiatedEventAttributes !==
        undefined &&
        output.signalExternalWorkflowExecutionInitiatedEventAttributes !== null) {
        contents.signalExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(output.signalExternalWorkflowExecutionInitiatedEventAttributes, context);
    }
    if (output.startChildWorkflowExecutionFailedEventAttributes !== undefined &&
        output.startChildWorkflowExecutionFailedEventAttributes !== null) {
        contents.startChildWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(output.startChildWorkflowExecutionFailedEventAttributes, context);
    }
    if (output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined &&
        output.startChildWorkflowExecutionInitiatedEventAttributes !== null) {
        contents.startChildWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(output.startChildWorkflowExecutionInitiatedEventAttributes, context);
    }
    if (output.startLambdaFunctionFailedEventAttributes !== undefined &&
        output.startLambdaFunctionFailedEventAttributes !== null) {
        contents.startLambdaFunctionFailedEventAttributes = deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(output.startLambdaFunctionFailedEventAttributes, context);
    }
    if (output.startTimerFailedEventAttributes !== undefined &&
        output.startTimerFailedEventAttributes !== null) {
        contents.startTimerFailedEventAttributes = deserializeAws_json1_0StartTimerFailedEventAttributes(output.startTimerFailedEventAttributes, context);
    }
    if (output.timerCanceledEventAttributes !== undefined &&
        output.timerCanceledEventAttributes !== null) {
        contents.timerCanceledEventAttributes = deserializeAws_json1_0TimerCanceledEventAttributes(output.timerCanceledEventAttributes, context);
    }
    if (output.timerFiredEventAttributes !== undefined &&
        output.timerFiredEventAttributes !== null) {
        contents.timerFiredEventAttributes = deserializeAws_json1_0TimerFiredEventAttributes(output.timerFiredEventAttributes, context);
    }
    if (output.timerStartedEventAttributes !== undefined &&
        output.timerStartedEventAttributes !== null) {
        contents.timerStartedEventAttributes = deserializeAws_json1_0TimerStartedEventAttributes(output.timerStartedEventAttributes, context);
    }
    if (output.workflowExecutionCancelRequestedEventAttributes !== undefined &&
        output.workflowExecutionCancelRequestedEventAttributes !== null) {
        contents.workflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(output.workflowExecutionCancelRequestedEventAttributes, context);
    }
    if (output.workflowExecutionCanceledEventAttributes !== undefined &&
        output.workflowExecutionCanceledEventAttributes !== null) {
        contents.workflowExecutionCanceledEventAttributes = deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(output.workflowExecutionCanceledEventAttributes, context);
    }
    if (output.workflowExecutionCompletedEventAttributes !== undefined &&
        output.workflowExecutionCompletedEventAttributes !== null) {
        contents.workflowExecutionCompletedEventAttributes = deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(output.workflowExecutionCompletedEventAttributes, context);
    }
    if (output.workflowExecutionContinuedAsNewEventAttributes !== undefined &&
        output.workflowExecutionContinuedAsNewEventAttributes !== null) {
        contents.workflowExecutionContinuedAsNewEventAttributes = deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(output.workflowExecutionContinuedAsNewEventAttributes, context);
    }
    if (output.workflowExecutionFailedEventAttributes !== undefined &&
        output.workflowExecutionFailedEventAttributes !== null) {
        contents.workflowExecutionFailedEventAttributes = deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(output.workflowExecutionFailedEventAttributes, context);
    }
    if (output.workflowExecutionSignaledEventAttributes !== undefined &&
        output.workflowExecutionSignaledEventAttributes !== null) {
        contents.workflowExecutionSignaledEventAttributes = deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(output.workflowExecutionSignaledEventAttributes, context);
    }
    if (output.workflowExecutionStartedEventAttributes !== undefined &&
        output.workflowExecutionStartedEventAttributes !== null) {
        contents.workflowExecutionStartedEventAttributes = deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(output.workflowExecutionStartedEventAttributes, context);
    }
    if (output.workflowExecutionTerminatedEventAttributes !== undefined &&
        output.workflowExecutionTerminatedEventAttributes !== null) {
        contents.workflowExecutionTerminatedEventAttributes = deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(output.workflowExecutionTerminatedEventAttributes, context);
    }
    if (output.workflowExecutionTimedOutEventAttributes !== undefined &&
        output.workflowExecutionTimedOutEventAttributes !== null) {
        contents.workflowExecutionTimedOutEventAttributes = deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes(output.workflowExecutionTimedOutEventAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_0HistoryEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0HistoryEvent(entry, context));
};
const deserializeAws_json1_0LambdaFunctionCompletedEventAttributes = (output, context) => {
    let contents = {
        __type: "LambdaFunctionCompletedEventAttributes",
        result: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "LambdaFunctionFailedEventAttributes",
        details: undefined,
        reason: undefined,
        scheduledEventId: undefined,
        startedEventId: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionScheduledEventAttributes = (output, context) => {
    let contents = {
        __type: "LambdaFunctionScheduledEventAttributes",
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        id: undefined,
        input: undefined,
        name: undefined,
        startToCloseTimeout: undefined
    };
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.startToCloseTimeout !== undefined &&
        output.startToCloseTimeout !== null) {
        contents.startToCloseTimeout = output.startToCloseTimeout;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "LambdaFunctionStartedEventAttributes",
        scheduledEventId: undefined
    };
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    return contents;
};
const deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes = (output, context) => {
    let contents = {
        __type: "LambdaFunctionTimedOutEventAttributes",
        scheduledEventId: undefined,
        startedEventId: undefined,
        timeoutType: undefined
    };
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timeoutType !== undefined && output.timeoutType !== null) {
        contents.timeoutType = output.timeoutType;
    }
    return contents;
};
const deserializeAws_json1_0LimitExceededFault = (output, context) => {
    let contents = {
        __type: "LimitExceededFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0MarkerRecordedEventAttributes = (output, context) => {
    let contents = {
        __type: "MarkerRecordedEventAttributes",
        decisionTaskCompletedEventId: undefined,
        details: undefined,
        markerName: undefined
    };
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.markerName !== undefined && output.markerName !== null) {
        contents.markerName = output.markerName;
    }
    return contents;
};
const deserializeAws_json1_0OperationNotPermittedFault = (output, context) => {
    let contents = {
        __type: "OperationNotPermittedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0PendingTaskCount = (output, context) => {
    let contents = {
        __type: "PendingTaskCount",
        count: undefined,
        truncated: undefined
    };
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    if (output.truncated !== undefined && output.truncated !== null) {
        contents.truncated = output.truncated;
    }
    return contents;
};
const deserializeAws_json1_0RecordMarkerFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "RecordMarkerFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined,
        markerName: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.markerName !== undefined && output.markerName !== null) {
        contents.markerName = output.markerName;
    }
    return contents;
};
const deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "RequestCancelActivityTaskFailedEventAttributes",
        activityId: undefined,
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.activityId !== undefined && output.activityId !== null) {
        contents.activityId = output.activityId;
    }
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "RequestCancelExternalWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        initiatedEventId: undefined,
        runId: undefined,
        workflowId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    return contents;
};
const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    let contents = {
        __type: "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes",
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        runId: undefined,
        workflowId: undefined
    };
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    return contents;
};
const deserializeAws_json1_0ResourceTag = (output, context) => {
    let contents = {
        __type: "ResourceTag",
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
const deserializeAws_json1_0ResourceTagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ResourceTag(entry, context));
};
const deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "ScheduleActivityTaskFailedEventAttributes",
        activityId: undefined,
        activityType: undefined,
        cause: undefined,
        decisionTaskCompletedEventId: undefined
    };
    if (output.activityId !== undefined && output.activityId !== null) {
        contents.activityId = output.activityId;
    }
    if (output.activityType !== undefined && output.activityType !== null) {
        contents.activityType = deserializeAws_json1_0ActivityType(output.activityType, context);
    }
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    return contents;
};
const deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "ScheduleLambdaFunctionFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined,
        id: undefined,
        name: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "SignalExternalWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        initiatedEventId: undefined,
        runId: undefined,
        workflowId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    return contents;
};
const deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    let contents = {
        __type: "SignalExternalWorkflowExecutionInitiatedEventAttributes",
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        input: undefined,
        runId: undefined,
        signalName: undefined,
        workflowId: undefined
    };
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
    }
    if (output.signalName !== undefined && output.signalName !== null) {
        contents.signalName = output.signalName;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    return contents;
};
const deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "StartChildWorkflowExecutionFailedEventAttributes",
        cause: undefined,
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        initiatedEventId: undefined,
        workflowId: undefined,
        workflowType: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.initiatedEventId !== undefined &&
        output.initiatedEventId !== null) {
        contents.initiatedEventId = output.initiatedEventId;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes = (output, context) => {
    let contents = {
        __type: "StartChildWorkflowExecutionInitiatedEventAttributes",
        childPolicy: undefined,
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        executionStartToCloseTimeout: undefined,
        input: undefined,
        lambdaRole: undefined,
        tagList: undefined,
        taskList: undefined,
        taskPriority: undefined,
        taskStartToCloseTimeout: undefined,
        workflowId: undefined,
        workflowType: undefined
    };
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.executionStartToCloseTimeout !== undefined &&
        output.executionStartToCloseTimeout !== null) {
        contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
        contents.lambdaRole = output.lambdaRole;
    }
    if (output.tagList !== undefined && output.tagList !== null) {
        contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    if (output.taskStartToCloseTimeout !== undefined &&
        output.taskStartToCloseTimeout !== null) {
        contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "StartLambdaFunctionFailedEventAttributes",
        cause: undefined,
        message: undefined,
        scheduledEventId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.scheduledEventId !== undefined &&
        output.scheduledEventId !== null) {
        contents.scheduledEventId = output.scheduledEventId;
    }
    return contents;
};
const deserializeAws_json1_0StartTimerFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "StartTimerFailedEventAttributes",
        cause: undefined,
        decisionTaskCompletedEventId: undefined,
        timerId: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.timerId !== undefined && output.timerId !== null) {
        contents.timerId = output.timerId;
    }
    return contents;
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0TaskList = (output, context) => {
    let contents = {
        __type: "TaskList",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_0TimerCanceledEventAttributes = (output, context) => {
    let contents = {
        __type: "TimerCanceledEventAttributes",
        decisionTaskCompletedEventId: undefined,
        startedEventId: undefined,
        timerId: undefined
    };
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timerId !== undefined && output.timerId !== null) {
        contents.timerId = output.timerId;
    }
    return contents;
};
const deserializeAws_json1_0TimerFiredEventAttributes = (output, context) => {
    let contents = {
        __type: "TimerFiredEventAttributes",
        startedEventId: undefined,
        timerId: undefined
    };
    if (output.startedEventId !== undefined && output.startedEventId !== null) {
        contents.startedEventId = output.startedEventId;
    }
    if (output.timerId !== undefined && output.timerId !== null) {
        contents.timerId = output.timerId;
    }
    return contents;
};
const deserializeAws_json1_0TimerStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "TimerStartedEventAttributes",
        control: undefined,
        decisionTaskCompletedEventId: undefined,
        startToFireTimeout: undefined,
        timerId: undefined
    };
    if (output.control !== undefined && output.control !== null) {
        contents.control = output.control;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.startToFireTimeout !== undefined &&
        output.startToFireTimeout !== null) {
        contents.startToFireTimeout = output.startToFireTimeout;
    }
    if (output.timerId !== undefined && output.timerId !== null) {
        contents.timerId = output.timerId;
    }
    return contents;
};
const deserializeAws_json1_0TooManyTagsFault = (output, context) => {
    let contents = {
        __type: "TooManyTagsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TypeAlreadyExistsFault = (output, context) => {
    let contents = {
        __type: "TypeAlreadyExistsFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0TypeDeprecatedFault = (output, context) => {
    let contents = {
        __type: "TypeDeprecatedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0UnknownResourceFault = (output, context) => {
    let contents = {
        __type: "UnknownResourceFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecution = (output, context) => {
    let contents = {
        __type: "WorkflowExecution",
        runId: undefined,
        workflowId: undefined
    };
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
    }
    if (output.workflowId !== undefined && output.workflowId !== null) {
        contents.workflowId = output.workflowId;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionAlreadyStartedFault",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionCancelRequestedEventAttributes",
        cause: undefined,
        externalInitiatedEventId: undefined,
        externalWorkflowExecution: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.externalInitiatedEventId !== undefined &&
        output.externalInitiatedEventId !== null) {
        contents.externalInitiatedEventId = output.externalInitiatedEventId;
    }
    if (output.externalWorkflowExecution !== undefined &&
        output.externalWorkflowExecution !== null) {
        contents.externalWorkflowExecution = deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionCanceledEventAttributes",
        decisionTaskCompletedEventId: undefined,
        details: undefined
    };
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionCompletedEventAttributes",
        decisionTaskCompletedEventId: undefined,
        result: undefined
    };
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.result !== undefined && output.result !== null) {
        contents.result = output.result;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionConfiguration = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionConfiguration",
        childPolicy: undefined,
        executionStartToCloseTimeout: undefined,
        lambdaRole: undefined,
        taskList: undefined,
        taskPriority: undefined,
        taskStartToCloseTimeout: undefined
    };
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.executionStartToCloseTimeout !== undefined &&
        output.executionStartToCloseTimeout !== null) {
        contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
    }
    if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
        contents.lambdaRole = output.lambdaRole;
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    if (output.taskStartToCloseTimeout !== undefined &&
        output.taskStartToCloseTimeout !== null) {
        contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionContinuedAsNewEventAttributes",
        childPolicy: undefined,
        decisionTaskCompletedEventId: undefined,
        executionStartToCloseTimeout: undefined,
        input: undefined,
        lambdaRole: undefined,
        newExecutionRunId: undefined,
        tagList: undefined,
        taskList: undefined,
        taskPriority: undefined,
        taskStartToCloseTimeout: undefined,
        workflowType: undefined
    };
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.executionStartToCloseTimeout !== undefined &&
        output.executionStartToCloseTimeout !== null) {
        contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
        contents.lambdaRole = output.lambdaRole;
    }
    if (output.newExecutionRunId !== undefined &&
        output.newExecutionRunId !== null) {
        contents.newExecutionRunId = output.newExecutionRunId;
    }
    if (output.tagList !== undefined && output.tagList !== null) {
        contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    if (output.taskStartToCloseTimeout !== undefined &&
        output.taskStartToCloseTimeout !== null) {
        contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionCount = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionCount",
        count: undefined,
        truncated: undefined
    };
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    if (output.truncated !== undefined && output.truncated !== null) {
        contents.truncated = output.truncated;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionDetail = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionDetail",
        executionConfiguration: undefined,
        executionInfo: undefined,
        latestActivityTaskTimestamp: undefined,
        latestExecutionContext: undefined,
        openCounts: undefined
    };
    if (output.executionConfiguration !== undefined &&
        output.executionConfiguration !== null) {
        contents.executionConfiguration = deserializeAws_json1_0WorkflowExecutionConfiguration(output.executionConfiguration, context);
    }
    if (output.executionInfo !== undefined && output.executionInfo !== null) {
        contents.executionInfo = deserializeAws_json1_0WorkflowExecutionInfo(output.executionInfo, context);
    }
    if (output.latestActivityTaskTimestamp !== undefined &&
        output.latestActivityTaskTimestamp !== null) {
        contents.latestActivityTaskTimestamp = new Date(Math.round(output.latestActivityTaskTimestamp * 1000));
    }
    if (output.latestExecutionContext !== undefined &&
        output.latestExecutionContext !== null) {
        contents.latestExecutionContext = output.latestExecutionContext;
    }
    if (output.openCounts !== undefined && output.openCounts !== null) {
        contents.openCounts = deserializeAws_json1_0WorkflowExecutionOpenCounts(output.openCounts, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionFailedEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionFailedEventAttributes",
        decisionTaskCompletedEventId: undefined,
        details: undefined,
        reason: undefined
    };
    if (output.decisionTaskCompletedEventId !== undefined &&
        output.decisionTaskCompletedEventId !== null) {
        contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
    }
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionInfo = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionInfo",
        cancelRequested: undefined,
        closeStatus: undefined,
        closeTimestamp: undefined,
        execution: undefined,
        executionStatus: undefined,
        parent: undefined,
        startTimestamp: undefined,
        tagList: undefined,
        workflowType: undefined
    };
    if (output.cancelRequested !== undefined && output.cancelRequested !== null) {
        contents.cancelRequested = output.cancelRequested;
    }
    if (output.closeStatus !== undefined && output.closeStatus !== null) {
        contents.closeStatus = output.closeStatus;
    }
    if (output.closeTimestamp !== undefined && output.closeTimestamp !== null) {
        contents.closeTimestamp = new Date(Math.round(output.closeTimestamp * 1000));
    }
    if (output.execution !== undefined && output.execution !== null) {
        contents.execution = deserializeAws_json1_0WorkflowExecution(output.execution, context);
    }
    if (output.executionStatus !== undefined && output.executionStatus !== null) {
        contents.executionStatus = output.executionStatus;
    }
    if (output.parent !== undefined && output.parent !== null) {
        contents.parent = deserializeAws_json1_0WorkflowExecution(output.parent, context);
    }
    if (output.startTimestamp !== undefined && output.startTimestamp !== null) {
        contents.startTimestamp = new Date(Math.round(output.startTimestamp * 1000));
    }
    if (output.tagList !== undefined && output.tagList !== null) {
        contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0WorkflowExecutionInfo(entry, context));
};
const deserializeAws_json1_0WorkflowExecutionInfos = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionInfos",
        executionInfos: undefined,
        nextPageToken: undefined
    };
    if (output.executionInfos !== undefined && output.executionInfos !== null) {
        contents.executionInfos = deserializeAws_json1_0WorkflowExecutionInfoList(output.executionInfos, context);
    }
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionOpenCounts = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionOpenCounts",
        openActivityTasks: undefined,
        openChildWorkflowExecutions: undefined,
        openDecisionTasks: undefined,
        openLambdaFunctions: undefined,
        openTimers: undefined
    };
    if (output.openActivityTasks !== undefined &&
        output.openActivityTasks !== null) {
        contents.openActivityTasks = output.openActivityTasks;
    }
    if (output.openChildWorkflowExecutions !== undefined &&
        output.openChildWorkflowExecutions !== null) {
        contents.openChildWorkflowExecutions = output.openChildWorkflowExecutions;
    }
    if (output.openDecisionTasks !== undefined &&
        output.openDecisionTasks !== null) {
        contents.openDecisionTasks = output.openDecisionTasks;
    }
    if (output.openLambdaFunctions !== undefined &&
        output.openLambdaFunctions !== null) {
        contents.openLambdaFunctions = output.openLambdaFunctions;
    }
    if (output.openTimers !== undefined && output.openTimers !== null) {
        contents.openTimers = output.openTimers;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionSignaledEventAttributes",
        externalInitiatedEventId: undefined,
        externalWorkflowExecution: undefined,
        input: undefined,
        signalName: undefined
    };
    if (output.externalInitiatedEventId !== undefined &&
        output.externalInitiatedEventId !== null) {
        contents.externalInitiatedEventId = output.externalInitiatedEventId;
    }
    if (output.externalWorkflowExecution !== undefined &&
        output.externalWorkflowExecution !== null) {
        contents.externalWorkflowExecution = deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context);
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.signalName !== undefined && output.signalName !== null) {
        contents.signalName = output.signalName;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionStartedEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionStartedEventAttributes",
        childPolicy: undefined,
        continuedExecutionRunId: undefined,
        executionStartToCloseTimeout: undefined,
        input: undefined,
        lambdaRole: undefined,
        parentInitiatedEventId: undefined,
        parentWorkflowExecution: undefined,
        tagList: undefined,
        taskList: undefined,
        taskPriority: undefined,
        taskStartToCloseTimeout: undefined,
        workflowType: undefined
    };
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.continuedExecutionRunId !== undefined &&
        output.continuedExecutionRunId !== null) {
        contents.continuedExecutionRunId = output.continuedExecutionRunId;
    }
    if (output.executionStartToCloseTimeout !== undefined &&
        output.executionStartToCloseTimeout !== null) {
        contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = output.input;
    }
    if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
        contents.lambdaRole = output.lambdaRole;
    }
    if (output.parentInitiatedEventId !== undefined &&
        output.parentInitiatedEventId !== null) {
        contents.parentInitiatedEventId = output.parentInitiatedEventId;
    }
    if (output.parentWorkflowExecution !== undefined &&
        output.parentWorkflowExecution !== null) {
        contents.parentWorkflowExecution = deserializeAws_json1_0WorkflowExecution(output.parentWorkflowExecution, context);
    }
    if (output.tagList !== undefined && output.tagList !== null) {
        contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
    }
    if (output.taskList !== undefined && output.taskList !== null) {
        contents.taskList = deserializeAws_json1_0TaskList(output.taskList, context);
    }
    if (output.taskPriority !== undefined && output.taskPriority !== null) {
        contents.taskPriority = output.taskPriority;
    }
    if (output.taskStartToCloseTimeout !== undefined &&
        output.taskStartToCloseTimeout !== null) {
        contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionTerminatedEventAttributes",
        cause: undefined,
        childPolicy: undefined,
        details: undefined,
        reason: undefined
    };
    if (output.cause !== undefined && output.cause !== null) {
        contents.cause = output.cause;
    }
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.details !== undefined && output.details !== null) {
        contents.details = output.details;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes = (output, context) => {
    let contents = {
        __type: "WorkflowExecutionTimedOutEventAttributes",
        childPolicy: undefined,
        timeoutType: undefined
    };
    if (output.childPolicy !== undefined && output.childPolicy !== null) {
        contents.childPolicy = output.childPolicy;
    }
    if (output.timeoutType !== undefined && output.timeoutType !== null) {
        contents.timeoutType = output.timeoutType;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowType = (output, context) => {
    let contents = {
        __type: "WorkflowType",
        name: undefined,
        version: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowTypeConfiguration = (output, context) => {
    let contents = {
        __type: "WorkflowTypeConfiguration",
        defaultChildPolicy: undefined,
        defaultExecutionStartToCloseTimeout: undefined,
        defaultLambdaRole: undefined,
        defaultTaskList: undefined,
        defaultTaskPriority: undefined,
        defaultTaskStartToCloseTimeout: undefined
    };
    if (output.defaultChildPolicy !== undefined &&
        output.defaultChildPolicy !== null) {
        contents.defaultChildPolicy = output.defaultChildPolicy;
    }
    if (output.defaultExecutionStartToCloseTimeout !== undefined &&
        output.defaultExecutionStartToCloseTimeout !== null) {
        contents.defaultExecutionStartToCloseTimeout =
            output.defaultExecutionStartToCloseTimeout;
    }
    if (output.defaultLambdaRole !== undefined &&
        output.defaultLambdaRole !== null) {
        contents.defaultLambdaRole = output.defaultLambdaRole;
    }
    if (output.defaultTaskList !== undefined && output.defaultTaskList !== null) {
        contents.defaultTaskList = deserializeAws_json1_0TaskList(output.defaultTaskList, context);
    }
    if (output.defaultTaskPriority !== undefined &&
        output.defaultTaskPriority !== null) {
        contents.defaultTaskPriority = output.defaultTaskPriority;
    }
    if (output.defaultTaskStartToCloseTimeout !== undefined &&
        output.defaultTaskStartToCloseTimeout !== null) {
        contents.defaultTaskStartToCloseTimeout =
            output.defaultTaskStartToCloseTimeout;
    }
    return contents;
};
const deserializeAws_json1_0WorkflowTypeDetail = (output, context) => {
    let contents = {
        __type: "WorkflowTypeDetail",
        configuration: undefined,
        typeInfo: undefined
    };
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_0WorkflowTypeConfiguration(output.configuration, context);
    }
    if (output.typeInfo !== undefined && output.typeInfo !== null) {
        contents.typeInfo = deserializeAws_json1_0WorkflowTypeInfo(output.typeInfo, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowTypeInfo = (output, context) => {
    let contents = {
        __type: "WorkflowTypeInfo",
        creationDate: undefined,
        deprecationDate: undefined,
        description: undefined,
        status: undefined,
        workflowType: undefined
    };
    if (output.creationDate !== undefined && output.creationDate !== null) {
        contents.creationDate = new Date(Math.round(output.creationDate * 1000));
    }
    if (output.deprecationDate !== undefined && output.deprecationDate !== null) {
        contents.deprecationDate = new Date(Math.round(output.deprecationDate * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.workflowType !== undefined && output.workflowType !== null) {
        contents.workflowType = deserializeAws_json1_0WorkflowType(output.workflowType, context);
    }
    return contents;
};
const deserializeAws_json1_0WorkflowTypeInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0WorkflowTypeInfo(entry, context));
};
const deserializeAws_json1_0WorkflowTypeInfos = (output, context) => {
    let contents = {
        __type: "WorkflowTypeInfos",
        nextPageToken: undefined,
        typeInfos: undefined
    };
    if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
        contents.nextPageToken = output.nextPageToken;
    }
    if (output.typeInfos !== undefined && output.typeInfos !== null) {
        contents.typeInfos = deserializeAws_json1_0WorkflowTypeInfoList(output.typeInfos, context);
    }
    return contents;
};
const deserializeAws_json1_0ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_0ResourceTagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_0Run = (output, context) => {
    let contents = {
        __type: "Run",
        runId: undefined
    };
    if (output.runId !== undefined && output.runId !== null) {
        contents.runId = output.runId;
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