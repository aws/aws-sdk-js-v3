"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1AcknowledgeJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.AcknowledgeJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcknowledgeJobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcknowledgeJobCommand = serializeAws_json1_1AcknowledgeJobCommand;
async function serializeAws_json1_1AcknowledgeThirdPartyJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.AcknowledgeThirdPartyJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcknowledgeThirdPartyJobInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcknowledgeThirdPartyJobCommand = serializeAws_json1_1AcknowledgeThirdPartyJobCommand;
async function serializeAws_json1_1CreateCustomActionTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.CreateCustomActionType";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCustomActionTypeCommand = serializeAws_json1_1CreateCustomActionTypeCommand;
async function serializeAws_json1_1CreatePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.CreatePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePipelineCommand = serializeAws_json1_1CreatePipelineCommand;
async function serializeAws_json1_1DeleteCustomActionTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.DeleteCustomActionType";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomActionTypeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCustomActionTypeCommand = serializeAws_json1_1DeleteCustomActionTypeCommand;
async function serializeAws_json1_1DeletePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.DeletePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeletePipelineCommand = serializeAws_json1_1DeletePipelineCommand;
async function serializeAws_json1_1DeleteWebhookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.DeleteWebhook";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWebhookCommand = serializeAws_json1_1DeleteWebhookCommand;
async function serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodePipeline_20150709.DeregisterWebhookWithThirdParty";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterWebhookWithThirdPartyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = serializeAws_json1_1DeregisterWebhookWithThirdPartyCommand;
async function serializeAws_json1_1DisableStageTransitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.DisableStageTransition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableStageTransitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableStageTransitionCommand = serializeAws_json1_1DisableStageTransitionCommand;
async function serializeAws_json1_1EnableStageTransitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.EnableStageTransition";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableStageTransitionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableStageTransitionCommand = serializeAws_json1_1EnableStageTransitionCommand;
async function serializeAws_json1_1GetJobDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.GetJobDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetJobDetailsCommand = serializeAws_json1_1GetJobDetailsCommand;
async function serializeAws_json1_1GetPipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPipelineCommand = serializeAws_json1_1GetPipelineCommand;
async function serializeAws_json1_1GetPipelineExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipelineExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPipelineExecutionCommand = serializeAws_json1_1GetPipelineExecutionCommand;
async function serializeAws_json1_1GetPipelineStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.GetPipelineState";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPipelineStateInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPipelineStateCommand = serializeAws_json1_1GetPipelineStateCommand;
async function serializeAws_json1_1GetThirdPartyJobDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.GetThirdPartyJobDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetThirdPartyJobDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetThirdPartyJobDetailsCommand = serializeAws_json1_1GetThirdPartyJobDetailsCommand;
async function serializeAws_json1_1ListActionExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListActionExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActionExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListActionExecutionsCommand = serializeAws_json1_1ListActionExecutionsCommand;
async function serializeAws_json1_1ListActionTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListActionTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActionTypesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListActionTypesCommand = serializeAws_json1_1ListActionTypesCommand;
async function serializeAws_json1_1ListPipelineExecutionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListPipelineExecutions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelineExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPipelineExecutionsCommand = serializeAws_json1_1ListPipelineExecutionsCommand;
async function serializeAws_json1_1ListPipelinesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListPipelines";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPipelinesCommand = serializeAws_json1_1ListPipelinesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListWebhooksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.ListWebhooks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebhooksInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWebhooksCommand = serializeAws_json1_1ListWebhooksCommand;
async function serializeAws_json1_1PollForJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PollForJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForJobsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PollForJobsCommand = serializeAws_json1_1PollForJobsCommand;
async function serializeAws_json1_1PollForThirdPartyJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PollForThirdPartyJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1PollForThirdPartyJobsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PollForThirdPartyJobsCommand = serializeAws_json1_1PollForThirdPartyJobsCommand;
async function serializeAws_json1_1PutActionRevisionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PutActionRevision";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutActionRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutActionRevisionCommand = serializeAws_json1_1PutActionRevisionCommand;
async function serializeAws_json1_1PutApprovalResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PutApprovalResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutApprovalResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutApprovalResultCommand = serializeAws_json1_1PutApprovalResultCommand;
async function serializeAws_json1_1PutJobFailureResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PutJobFailureResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutJobFailureResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutJobFailureResultCommand = serializeAws_json1_1PutJobFailureResultCommand;
async function serializeAws_json1_1PutJobSuccessResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PutJobSuccessResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutJobSuccessResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutJobSuccessResultCommand = serializeAws_json1_1PutJobSuccessResultCommand;
async function serializeAws_json1_1PutThirdPartyJobFailureResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodePipeline_20150709.PutThirdPartyJobFailureResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobFailureResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutThirdPartyJobFailureResultCommand = serializeAws_json1_1PutThirdPartyJobFailureResultCommand;
async function serializeAws_json1_1PutThirdPartyJobSuccessResultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodePipeline_20150709.PutThirdPartyJobSuccessResult";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutThirdPartyJobSuccessResultInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutThirdPartyJobSuccessResultCommand = serializeAws_json1_1PutThirdPartyJobSuccessResultCommand;
async function serializeAws_json1_1PutWebhookCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.PutWebhook";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutWebhookInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutWebhookCommand = serializeAws_json1_1PutWebhookCommand;
async function serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodePipeline_20150709.RegisterWebhookWithThirdParty";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterWebhookWithThirdPartyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterWebhookWithThirdPartyCommand = serializeAws_json1_1RegisterWebhookWithThirdPartyCommand;
async function serializeAws_json1_1RetryStageExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.RetryStageExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1RetryStageExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RetryStageExecutionCommand = serializeAws_json1_1RetryStageExecutionCommand;
async function serializeAws_json1_1StartPipelineExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.StartPipelineExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartPipelineExecutionCommand = serializeAws_json1_1StartPipelineExecutionCommand;
async function serializeAws_json1_1StopPipelineExecutionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.StopPipelineExecution";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopPipelineExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopPipelineExecutionCommand = serializeAws_json1_1StopPipelineExecutionCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdatePipelineCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodePipeline_20150709.UpdatePipeline";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePipelineInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdatePipelineCommand = serializeAws_json1_1UpdatePipelineCommand;
async function deserializeAws_json1_1AcknowledgeJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcknowledgeJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcknowledgeJobOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcknowledgeJobOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcknowledgeJobCommand = deserializeAws_json1_1AcknowledgeJobCommand;
async function deserializeAws_json1_1AcknowledgeJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNonceException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidNonceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1AcknowledgeThirdPartyJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcknowledgeThirdPartyJobOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcknowledgeThirdPartyJobOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcknowledgeThirdPartyJobCommand = deserializeAws_json1_1AcknowledgeThirdPartyJobCommand;
async function deserializeAws_json1_1AcknowledgeThirdPartyJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNonceException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidNonceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNonceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1CreateCustomActionTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCustomActionTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomActionTypeOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCustomActionTypeOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCustomActionTypeCommand = deserializeAws_json1_1CreateCustomActionTypeCommand;
async function deserializeAws_json1_1CreateCustomActionTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidActionDeclarationException":
        case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBlockerDeclarationException":
        case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStageDeclarationException":
        case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStructureException":
        case "com.amazonaws.codepipeline#InvalidStructureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNameInUseException":
        case "com.amazonaws.codepipeline#PipelineNameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1DeleteCustomActionTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCustomActionTypeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCustomActionTypeCommand = deserializeAws_json1_1DeleteCustomActionTypeCommand;
async function deserializeAws_json1_1DeleteCustomActionTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1DeleteWebhookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebhookOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWebhookOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWebhookCommand = deserializeAws_json1_1DeleteWebhookCommand;
async function deserializeAws_json1_1DeleteWebhookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterWebhookWithThirdPartyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand = deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommand;
async function deserializeAws_json1_1DeregisterWebhookWithThirdPartyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WebhookNotFoundException":
        case "com.amazonaws.codepipeline#WebhookNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1DisableStageTransitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableStageTransitionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableStageTransitionCommand = deserializeAws_json1_1DisableStageTransitionCommand;
async function deserializeAws_json1_1DisableStageTransitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1EnableStageTransitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableStageTransitionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableStageTransitionCommand = deserializeAws_json1_1EnableStageTransitionCommand;
async function deserializeAws_json1_1EnableStageTransitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1GetJobDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetJobDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobDetailsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetJobDetailsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetJobDetailsCommand = deserializeAws_json1_1GetJobDetailsCommand;
async function deserializeAws_json1_1GetJobDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1GetPipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPipelineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPipelineCommand = deserializeAws_json1_1GetPipelineCommand;
async function deserializeAws_json1_1GetPipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineVersionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineVersionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1GetPipelineExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPipelineExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPipelineExecutionCommand = deserializeAws_json1_1GetPipelineExecutionCommand;
async function deserializeAws_json1_1GetPipelineExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineExecutionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1GetPipelineStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPipelineStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPipelineStateOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPipelineStateOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPipelineStateCommand = deserializeAws_json1_1GetPipelineStateCommand;
async function deserializeAws_json1_1GetPipelineStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1GetThirdPartyJobDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetThirdPartyJobDetailsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetThirdPartyJobDetailsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetThirdPartyJobDetailsCommand = deserializeAws_json1_1GetThirdPartyJobDetailsCommand;
async function deserializeAws_json1_1GetThirdPartyJobDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobException":
        case "com.amazonaws.codepipeline#InvalidJobException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1ListActionExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListActionExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActionExecutionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListActionExecutionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListActionExecutionsCommand = deserializeAws_json1_1ListActionExecutionsCommand;
async function deserializeAws_json1_1ListActionExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineExecutionNotFoundException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1ListActionTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListActionTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActionTypesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListActionTypesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListActionTypesCommand = deserializeAws_json1_1ListActionTypesCommand;
async function deserializeAws_json1_1ListActionTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1ListPipelineExecutionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPipelineExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPipelineExecutionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPipelineExecutionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPipelineExecutionsCommand = deserializeAws_json1_1ListPipelineExecutionsCommand;
async function deserializeAws_json1_1ListPipelineExecutionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1ListWebhooksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWebhooksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWebhooksOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWebhooksOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWebhooksCommand = deserializeAws_json1_1ListWebhooksCommand;
async function deserializeAws_json1_1ListWebhooksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codepipeline#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PollForJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PollForJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForJobsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PollForJobsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PollForJobsCommand = deserializeAws_json1_1PollForJobsCommand;
async function deserializeAws_json1_1PollForJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#ActionTypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PollForThirdPartyJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PollForThirdPartyJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PollForThirdPartyJobsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PollForThirdPartyJobsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PollForThirdPartyJobsCommand = deserializeAws_json1_1PollForThirdPartyJobsCommand;
async function deserializeAws_json1_1PollForThirdPartyJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActionTypeNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#ActionTypeNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActionTypeNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutActionRevisionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutActionRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutActionRevisionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutActionRevisionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutActionRevisionCommand = deserializeAws_json1_1PutActionRevisionCommand;
async function deserializeAws_json1_1PutActionRevisionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActionNotFoundException":
        case "com.amazonaws.codepipeline#ActionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutApprovalResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutApprovalResultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutApprovalResultOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutApprovalResultOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutApprovalResultCommand = deserializeAws_json1_1PutApprovalResultCommand;
async function deserializeAws_json1_1PutApprovalResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ActionNotFoundException":
        case "com.amazonaws.codepipeline#ActionNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ActionNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApprovalAlreadyCompletedException":
        case "com.amazonaws.codepipeline#ApprovalAlreadyCompletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApprovalTokenException":
        case "com.amazonaws.codepipeline#InvalidApprovalTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApprovalTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutJobFailureResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutJobFailureResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutJobFailureResultCommand = deserializeAws_json1_1PutJobFailureResultCommand;
async function deserializeAws_json1_1PutJobFailureResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutJobSuccessResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutJobSuccessResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutJobSuccessResultCommand = deserializeAws_json1_1PutJobSuccessResultCommand;
async function deserializeAws_json1_1PutJobSuccessResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OutputVariablesSizeExceededException":
        case "com.amazonaws.codepipeline.common.frontend.service#OutputVariablesSizeExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutThirdPartyJobFailureResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutThirdPartyJobFailureResultCommand = deserializeAws_json1_1PutThirdPartyJobFailureResultCommand;
async function deserializeAws_json1_1PutThirdPartyJobFailureResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand = deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand;
async function deserializeAws_json1_1PutThirdPartyJobSuccessResultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.codepipeline#InvalidClientTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidClientTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidJobStateException":
        case "com.amazonaws.codepipeline.common.frontend.service#InvalidJobStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1PutWebhookCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutWebhookCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutWebhookOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutWebhookOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutWebhookCommand = deserializeAws_json1_1PutWebhookCommand;
async function deserializeAws_json1_1PutWebhookCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebhookAuthenticationParametersException":
        case "com.amazonaws.codepipeline#InvalidWebhookAuthenticationParametersException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidWebhookFilterPatternException":
        case "com.amazonaws.codepipeline#InvalidWebhookFilterPatternException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterWebhookWithThirdPartyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand = deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand;
async function deserializeAws_json1_1RegisterWebhookWithThirdPartyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "WebhookNotFoundException":
        case "com.amazonaws.codepipeline#WebhookNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1WebhookNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1RetryStageExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RetryStageExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetryStageExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RetryStageExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RetryStageExecutionCommand = deserializeAws_json1_1RetryStageExecutionCommand;
async function deserializeAws_json1_1RetryStageExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "NotLatestPipelineExecutionException":
        case "com.amazonaws.codepipeline#NotLatestPipelineExecutionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotFoundException":
        case "com.amazonaws.codepipeline#StageNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "StageNotRetryableException":
        case "com.amazonaws.codepipeline#StageNotRetryableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1StageNotRetryableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1StartPipelineExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartPipelineExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartPipelineExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartPipelineExecutionCommand = deserializeAws_json1_1StartPipelineExecutionCommand;
async function deserializeAws_json1_1StartPipelineExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1StopPipelineExecutionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopPipelineExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopPipelineExecutionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopPipelineExecutionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopPipelineExecutionCommand = deserializeAws_json1_1StopPipelineExecutionCommand;
async function deserializeAws_json1_1StopPipelineExecutionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DuplicatedStopRequestException":
        case "com.amazonaws.codepipeline#DuplicatedStopRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DuplicatedStopRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineExecutionNotStoppableException":
        case "com.amazonaws.codepipeline#PipelineExecutionNotStoppableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PipelineNotFoundException":
        case "com.amazonaws.codepipeline#PipelineNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.codepipeline#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
        case "ConcurrentModificationException":
        case "com.amazonaws.codepipeline#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.codepipeline#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsException":
        case "com.amazonaws.codepipeline#InvalidTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codepipeline.common.frontend.service#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
async function deserializeAws_json1_1UpdatePipelineCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdatePipelineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePipelineOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdatePipelineOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdatePipelineCommand = deserializeAws_json1_1UpdatePipelineCommand;
async function deserializeAws_json1_1UpdatePipelineCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidActionDeclarationException":
        case "com.amazonaws.codepipeline#InvalidActionDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidActionDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBlockerDeclarationException":
        case "com.amazonaws.codepipeline#InvalidBlockerDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStageDeclarationException":
        case "com.amazonaws.codepipeline#InvalidStageDeclarationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStageDeclarationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidStructureException":
        case "com.amazonaws.codepipeline#InvalidStructureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidStructureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.codepipeline#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.codepipeline.common.frontend.service#ValidationException":
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
const deserializeAws_json1_1ActionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActionNotFoundException(body, context);
    const contents = Object.assign({ name: "ActionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApprovalAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApprovalAlreadyCompletedException(body, context);
    const contents = Object.assign({ name: "ApprovalAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DuplicatedStopRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatedStopRequestException(body, context);
    const contents = Object.assign({ name: "DuplicatedStopRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidActionDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidActionDeclarationException(body, context);
    const contents = Object.assign({ name: "InvalidActionDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApprovalTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApprovalTokenException(body, context);
    const contents = Object.assign({ name: "InvalidApprovalTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = Object.assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidBlockerDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlockerDeclarationException(body, context);
    const contents = Object.assign({ name: "InvalidBlockerDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidClientTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidClientTokenException(body, context);
    const contents = Object.assign({ name: "InvalidClientTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidJobExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobException(body, context);
    const contents = Object.assign({ name: "InvalidJobException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStageDeclarationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStageDeclarationException(body, context);
    const contents = Object.assign({ name: "InvalidStageDeclarationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidStructureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStructureException(body, context);
    const contents = Object.assign({ name: "InvalidStructureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsException(body, context);
    const contents = Object.assign({ name: "InvalidTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidWebhookAuthenticationParametersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidWebhookAuthenticationParametersException(body, context);
    const contents = Object.assign({ name: "InvalidWebhookAuthenticationParametersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidWebhookFilterPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidWebhookFilterPatternException(body, context);
    const contents = Object.assign({ name: "InvalidWebhookFilterPatternException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotLatestPipelineExecutionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotLatestPipelineExecutionException(body, context);
    const contents = Object.assign({ name: "NotLatestPipelineExecutionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineExecutionNotFoundException(body, context);
    const contents = Object.assign({ name: "PipelineExecutionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotStoppableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineExecutionNotStoppableException(body, context);
    const contents = Object.assign({ name: "PipelineExecutionNotStoppableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineNameInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNameInUseException(body, context);
    const contents = Object.assign({ name: "PipelineNameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineNotFoundException(body, context);
    const contents = Object.assign({ name: "PipelineNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PipelineVersionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PipelineVersionNotFoundException(body, context);
    const contents = Object.assign({ name: "PipelineVersionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1StageNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StageNotFoundException(body, context);
    const contents = Object.assign({ name: "StageNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1StageNotRetryableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1StageNotRetryableException(body, context);
    const contents = Object.assign({ name: "StageNotRetryableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1WebhookNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WebhookNotFoundException(body, context);
    const contents = Object.assign({ name: "WebhookNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ActionTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ActionTypeNotFoundException(body, context);
    const contents = Object.assign({ name: "ActionTypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
    const contents = Object.assign({ name: "InvalidJobStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNonceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNonceException(body, context);
    const contents = Object.assign({ name: "InvalidNonceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1JobNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1JobNotFoundException(body, context);
    const contents = Object.assign({ name: "JobNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OutputVariablesSizeExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OutputVariablesSizeExceededException(body, context);
    const contents = Object.assign({ name: "OutputVariablesSizeExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcknowledgeJobInput = (input, context) => {
    const bodyParams = {};
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    if (input.nonce !== undefined) {
        bodyParams["nonce"] = input.nonce;
    }
    return bodyParams;
};
const serializeAws_json1_1AcknowledgeThirdPartyJobInput = (input, context) => {
    const bodyParams = {};
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    if (input.nonce !== undefined) {
        bodyParams["nonce"] = input.nonce;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionConfigurationProperty = (input, context) => {
    const bodyParams = {};
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.queryable !== undefined) {
        bodyParams["queryable"] = input.queryable;
    }
    if (input.required !== undefined) {
        bodyParams["required"] = input.required;
    }
    if (input.secret !== undefined) {
        bodyParams["secret"] = input.secret;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionConfigurationPropertyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ActionConfigurationProperty(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ActionDeclaration = (input, context) => {
    const bodyParams = {};
    if (input.actionTypeId !== undefined) {
        bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(input.actionTypeId, context);
    }
    if (input.configuration !== undefined) {
        bodyParams["configuration"] = serializeAws_json1_1ActionConfigurationMap(input.configuration, context);
    }
    if (input.inputArtifacts !== undefined) {
        bodyParams["inputArtifacts"] = serializeAws_json1_1InputArtifactList(input.inputArtifacts, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.namespace !== undefined) {
        bodyParams["namespace"] = input.namespace;
    }
    if (input.outputArtifacts !== undefined) {
        bodyParams["outputArtifacts"] = serializeAws_json1_1OutputArtifactList(input.outputArtifacts, context);
    }
    if (input.region !== undefined) {
        bodyParams["region"] = input.region;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.runOrder !== undefined) {
        bodyParams["runOrder"] = input.runOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionExecutionFilter = (input, context) => {
    const bodyParams = {};
    if (input.pipelineExecutionId !== undefined) {
        bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionRevision = (input, context) => {
    const bodyParams = {};
    if (input.created !== undefined) {
        bodyParams["created"] = Math.round(input.created.getTime() / 1000);
    }
    if (input.revisionChangeId !== undefined) {
        bodyParams["revisionChangeId"] = input.revisionChangeId;
    }
    if (input.revisionId !== undefined) {
        bodyParams["revisionId"] = input.revisionId;
    }
    return bodyParams;
};
const serializeAws_json1_1ActionTypeSettings = (input, context) => {
    const bodyParams = {};
    if (input.entityUrlTemplate !== undefined) {
        bodyParams["entityUrlTemplate"] = input.entityUrlTemplate;
    }
    if (input.executionUrlTemplate !== undefined) {
        bodyParams["executionUrlTemplate"] = input.executionUrlTemplate;
    }
    if (input.revisionUrlTemplate !== undefined) {
        bodyParams["revisionUrlTemplate"] = input.revisionUrlTemplate;
    }
    if (input.thirdPartyConfigurationUrl !== undefined) {
        bodyParams["thirdPartyConfigurationUrl"] = input.thirdPartyConfigurationUrl;
    }
    return bodyParams;
};
const serializeAws_json1_1ApprovalResult = (input, context) => {
    const bodyParams = {};
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    if (input.summary !== undefined) {
        bodyParams["summary"] = input.summary;
    }
    return bodyParams;
};
const serializeAws_json1_1ArtifactDetails = (input, context) => {
    const bodyParams = {};
    if (input.maximumCount !== undefined) {
        bodyParams["maximumCount"] = input.maximumCount;
    }
    if (input.minimumCount !== undefined) {
        bodyParams["minimumCount"] = input.minimumCount;
    }
    return bodyParams;
};
const serializeAws_json1_1ArtifactStore = (input, context) => {
    const bodyParams = {};
    if (input.encryptionKey !== undefined) {
        bodyParams["encryptionKey"] = serializeAws_json1_1EncryptionKey(input.encryptionKey, context);
    }
    if (input.location !== undefined) {
        bodyParams["location"] = input.location;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ArtifactStoreMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1ArtifactStore(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1BlockerDeclaration = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCustomActionTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.category !== undefined) {
        bodyParams["category"] = input.category;
    }
    if (input.configurationProperties !== undefined) {
        bodyParams["configurationProperties"] = serializeAws_json1_1ActionConfigurationPropertyList(input.configurationProperties, context);
    }
    if (input.inputArtifactDetails !== undefined) {
        bodyParams["inputArtifactDetails"] = serializeAws_json1_1ArtifactDetails(input.inputArtifactDetails, context);
    }
    if (input.outputArtifactDetails !== undefined) {
        bodyParams["outputArtifactDetails"] = serializeAws_json1_1ArtifactDetails(input.outputArtifactDetails, context);
    }
    if (input.provider !== undefined) {
        bodyParams["provider"] = input.provider;
    }
    if (input.settings !== undefined) {
        bodyParams["settings"] = serializeAws_json1_1ActionTypeSettings(input.settings, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.pipeline !== undefined) {
        bodyParams["pipeline"] = serializeAws_json1_1PipelineDeclaration(input.pipeline, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCustomActionTypeInput = (input, context) => {
    const bodyParams = {};
    if (input.category !== undefined) {
        bodyParams["category"] = input.category;
    }
    if (input.provider !== undefined) {
        bodyParams["provider"] = input.provider;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1DeletePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWebhookInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterWebhookWithThirdPartyInput = (input, context) => {
    const bodyParams = {};
    if (input.webhookName !== undefined) {
        bodyParams["webhookName"] = input.webhookName;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableStageTransitionInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.stageName !== undefined) {
        bodyParams["stageName"] = input.stageName;
    }
    if (input.transitionType !== undefined) {
        bodyParams["transitionType"] = input.transitionType;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableStageTransitionInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.stageName !== undefined) {
        bodyParams["stageName"] = input.stageName;
    }
    if (input.transitionType !== undefined) {
        bodyParams["transitionType"] = input.transitionType;
    }
    return bodyParams;
};
const serializeAws_json1_1GetJobDetailsInput = (input, context) => {
    const bodyParams = {};
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPipelineExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineExecutionId !== undefined) {
        bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPipelineStateInput = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetThirdPartyJobDetailsInput = (input, context) => {
    const bodyParams = {};
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    return bodyParams;
};
const serializeAws_json1_1InputArtifact = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1InputArtifactList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InputArtifact(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListActionExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1ActionExecutionFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListActionTypesInput = (input, context) => {
    const bodyParams = {};
    if (input.actionOwnerFilter !== undefined) {
        bodyParams["actionOwnerFilter"] = input.actionOwnerFilter;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPipelineExecutionsInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    return bodyParams;
};
const serializeAws_json1_1ListPipelinesInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWebhooksInput = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputArtifact = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputArtifactList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1OutputArtifact(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PipelineDeclaration = (input, context) => {
    const bodyParams = {};
    if (input.artifactStore !== undefined) {
        bodyParams["artifactStore"] = serializeAws_json1_1ArtifactStore(input.artifactStore, context);
    }
    if (input.artifactStores !== undefined) {
        bodyParams["artifactStores"] = serializeAws_json1_1ArtifactStoreMap(input.artifactStores, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    if (input.stages !== undefined) {
        bodyParams["stages"] = serializeAws_json1_1PipelineStageDeclarationList(input.stages, context);
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1PipelineStageDeclarationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1StageDeclaration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PollForJobsInput = (input, context) => {
    const bodyParams = {};
    if (input.actionTypeId !== undefined) {
        bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(input.actionTypeId, context);
    }
    if (input.maxBatchSize !== undefined) {
        bodyParams["maxBatchSize"] = input.maxBatchSize;
    }
    if (input.queryParam !== undefined) {
        bodyParams["queryParam"] = serializeAws_json1_1QueryParamMap(input.queryParam, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PollForThirdPartyJobsInput = (input, context) => {
    const bodyParams = {};
    if (input.actionTypeId !== undefined) {
        bodyParams["actionTypeId"] = serializeAws_json1_1ActionTypeId(input.actionTypeId, context);
    }
    if (input.maxBatchSize !== undefined) {
        bodyParams["maxBatchSize"] = input.maxBatchSize;
    }
    return bodyParams;
};
const serializeAws_json1_1PutActionRevisionInput = (input, context) => {
    const bodyParams = {};
    if (input.actionName !== undefined) {
        bodyParams["actionName"] = input.actionName;
    }
    if (input.actionRevision !== undefined) {
        bodyParams["actionRevision"] = serializeAws_json1_1ActionRevision(input.actionRevision, context);
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.stageName !== undefined) {
        bodyParams["stageName"] = input.stageName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutApprovalResultInput = (input, context) => {
    const bodyParams = {};
    if (input.actionName !== undefined) {
        bodyParams["actionName"] = input.actionName;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.result !== undefined) {
        bodyParams["result"] = serializeAws_json1_1ApprovalResult(input.result, context);
    }
    if (input.stageName !== undefined) {
        bodyParams["stageName"] = input.stageName;
    }
    if (input.token !== undefined) {
        bodyParams["token"] = input.token;
    }
    return bodyParams;
};
const serializeAws_json1_1PutJobFailureResultInput = (input, context) => {
    const bodyParams = {};
    if (input.failureDetails !== undefined) {
        bodyParams["failureDetails"] = serializeAws_json1_1FailureDetails(input.failureDetails, context);
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutJobSuccessResultInput = (input, context) => {
    const bodyParams = {};
    if (input.continuationToken !== undefined) {
        bodyParams["continuationToken"] = input.continuationToken;
    }
    if (input.currentRevision !== undefined) {
        bodyParams["currentRevision"] = serializeAws_json1_1CurrentRevision(input.currentRevision, context);
    }
    if (input.executionDetails !== undefined) {
        bodyParams["executionDetails"] = serializeAws_json1_1ExecutionDetails(input.executionDetails, context);
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    if (input.outputVariables !== undefined) {
        bodyParams["outputVariables"] = serializeAws_json1_1OutputVariablesMap(input.outputVariables, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PutThirdPartyJobFailureResultInput = (input, context) => {
    const bodyParams = {};
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.failureDetails !== undefined) {
        bodyParams["failureDetails"] = serializeAws_json1_1FailureDetails(input.failureDetails, context);
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutThirdPartyJobSuccessResultInput = (input, context) => {
    const bodyParams = {};
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.continuationToken !== undefined) {
        bodyParams["continuationToken"] = input.continuationToken;
    }
    if (input.currentRevision !== undefined) {
        bodyParams["currentRevision"] = serializeAws_json1_1CurrentRevision(input.currentRevision, context);
    }
    if (input.executionDetails !== undefined) {
        bodyParams["executionDetails"] = serializeAws_json1_1ExecutionDetails(input.executionDetails, context);
    }
    if (input.jobId !== undefined) {
        bodyParams["jobId"] = input.jobId;
    }
    return bodyParams;
};
const serializeAws_json1_1PutWebhookInput = (input, context) => {
    const bodyParams = {};
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.webhook !== undefined) {
        bodyParams["webhook"] = serializeAws_json1_1WebhookDefinition(input.webhook, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterWebhookWithThirdPartyInput = (input, context) => {
    const bodyParams = {};
    if (input.webhookName !== undefined) {
        bodyParams["webhookName"] = input.webhookName;
    }
    return bodyParams;
};
const serializeAws_json1_1RetryStageExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.pipelineExecutionId !== undefined) {
        bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.retryMode !== undefined) {
        bodyParams["retryMode"] = input.retryMode;
    }
    if (input.stageName !== undefined) {
        bodyParams["stageName"] = input.stageName;
    }
    return bodyParams;
};
const serializeAws_json1_1StageActionDeclarationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ActionDeclaration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StageBlockerDeclarationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1BlockerDeclaration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StageDeclaration = (input, context) => {
    const bodyParams = {};
    if (input.actions !== undefined) {
        bodyParams["actions"] = serializeAws_json1_1StageActionDeclarationList(input.actions, context);
    }
    if (input.blockers !== undefined) {
        bodyParams["blockers"] = serializeAws_json1_1StageBlockerDeclarationList(input.blockers, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1StartPipelineExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.clientRequestToken === undefined) {
        input.clientRequestToken = uuid_1.v4();
    }
    if (input.clientRequestToken !== undefined) {
        bodyParams["clientRequestToken"] = input.clientRequestToken;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopPipelineExecutionInput = (input, context) => {
    const bodyParams = {};
    if (input.abandon !== undefined) {
        bodyParams["abandon"] = input.abandon;
    }
    if (input.pipelineExecutionId !== undefined) {
        bodyParams["pipelineExecutionId"] = input.pipelineExecutionId;
    }
    if (input.pipelineName !== undefined) {
        bodyParams["pipelineName"] = input.pipelineName;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
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
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdatePipelineInput = (input, context) => {
    const bodyParams = {};
    if (input.pipeline !== undefined) {
        bodyParams["pipeline"] = serializeAws_json1_1PipelineDeclaration(input.pipeline, context);
    }
    return bodyParams;
};
const serializeAws_json1_1WebhookAuthConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.AllowedIPRange !== undefined) {
        bodyParams["AllowedIPRange"] = input.AllowedIPRange;
    }
    if (input.SecretToken !== undefined) {
        bodyParams["SecretToken"] = input.SecretToken;
    }
    return bodyParams;
};
const serializeAws_json1_1WebhookDefinition = (input, context) => {
    const bodyParams = {};
    if (input.authentication !== undefined) {
        bodyParams["authentication"] = input.authentication;
    }
    if (input.authenticationConfiguration !== undefined) {
        bodyParams["authenticationConfiguration"] = serializeAws_json1_1WebhookAuthConfiguration(input.authenticationConfiguration, context);
    }
    if (input.filters !== undefined) {
        bodyParams["filters"] = serializeAws_json1_1WebhookFilters(input.filters, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.targetAction !== undefined) {
        bodyParams["targetAction"] = input.targetAction;
    }
    if (input.targetPipeline !== undefined) {
        bodyParams["targetPipeline"] = input.targetPipeline;
    }
    return bodyParams;
};
const serializeAws_json1_1WebhookFilterRule = (input, context) => {
    const bodyParams = {};
    if (input.jsonPath !== undefined) {
        bodyParams["jsonPath"] = input.jsonPath;
    }
    if (input.matchEquals !== undefined) {
        bodyParams["matchEquals"] = input.matchEquals;
    }
    return bodyParams;
};
const serializeAws_json1_1WebhookFilters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1WebhookFilterRule(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ActionConfigurationMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ActionTypeId = (input, context) => {
    const bodyParams = {};
    if (input.category !== undefined) {
        bodyParams["category"] = input.category;
    }
    if (input.owner !== undefined) {
        bodyParams["owner"] = input.owner;
    }
    if (input.provider !== undefined) {
        bodyParams["provider"] = input.provider;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1CurrentRevision = (input, context) => {
    const bodyParams = {};
    if (input.changeIdentifier !== undefined) {
        bodyParams["changeIdentifier"] = input.changeIdentifier;
    }
    if (input.created !== undefined) {
        bodyParams["created"] = Math.round(input.created.getTime() / 1000);
    }
    if (input.revision !== undefined) {
        bodyParams["revision"] = input.revision;
    }
    if (input.revisionSummary !== undefined) {
        bodyParams["revisionSummary"] = input.revisionSummary;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionKey = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ExecutionDetails = (input, context) => {
    const bodyParams = {};
    if (input.externalExecutionId !== undefined) {
        bodyParams["externalExecutionId"] = input.externalExecutionId;
    }
    if (input.percentComplete !== undefined) {
        bodyParams["percentComplete"] = input.percentComplete;
    }
    if (input.summary !== undefined) {
        bodyParams["summary"] = input.summary;
    }
    return bodyParams;
};
const serializeAws_json1_1FailureDetails = (input, context) => {
    const bodyParams = {};
    if (input.externalExecutionId !== undefined) {
        bodyParams["externalExecutionId"] = input.externalExecutionId;
    }
    if (input.message !== undefined) {
        bodyParams["message"] = input.message;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputVariablesMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1QueryParamMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AcknowledgeJobOutput = (output, context) => {
    let contents = {
        __type: "AcknowledgeJobOutput",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1AcknowledgeThirdPartyJobOutput = (output, context) => {
    let contents = {
        __type: "AcknowledgeThirdPartyJobOutput",
        status: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1ActionConfigurationProperty = (output, context) => {
    let contents = {
        __type: "ActionConfigurationProperty",
        description: undefined,
        key: undefined,
        name: undefined,
        queryable: undefined,
        required: undefined,
        secret: undefined,
        type: undefined
    };
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.queryable !== undefined && output.queryable !== null) {
        contents.queryable = output.queryable;
    }
    if (output.required !== undefined && output.required !== null) {
        contents.required = output.required;
    }
    if (output.secret !== undefined && output.secret !== null) {
        contents.secret = output.secret;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ActionConfigurationPropertyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActionConfigurationProperty(entry, context));
};
const deserializeAws_json1_1ActionDeclaration = (output, context) => {
    let contents = {
        __type: "ActionDeclaration",
        actionTypeId: undefined,
        configuration: undefined,
        inputArtifacts: undefined,
        name: undefined,
        namespace: undefined,
        outputArtifacts: undefined,
        region: undefined,
        roleArn: undefined,
        runOrder: undefined
    };
    if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
        contents.actionTypeId = deserializeAws_json1_1ActionTypeId(output.actionTypeId, context);
    }
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_1ActionConfigurationMap(output.configuration, context);
    }
    if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
        contents.inputArtifacts = deserializeAws_json1_1InputArtifactList(output.inputArtifacts, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.namespace !== undefined && output.namespace !== null) {
        contents.namespace = output.namespace;
    }
    if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
        contents.outputArtifacts = deserializeAws_json1_1OutputArtifactList(output.outputArtifacts, context);
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.runOrder !== undefined && output.runOrder !== null) {
        contents.runOrder = output.runOrder;
    }
    return contents;
};
const deserializeAws_json1_1ActionExecution = (output, context) => {
    let contents = {
        __type: "ActionExecution",
        errorDetails: undefined,
        externalExecutionId: undefined,
        externalExecutionUrl: undefined,
        lastStatusChange: undefined,
        lastUpdatedBy: undefined,
        percentComplete: undefined,
        status: undefined,
        summary: undefined,
        token: undefined
    };
    if (output.errorDetails !== undefined && output.errorDetails !== null) {
        contents.errorDetails = deserializeAws_json1_1ErrorDetails(output.errorDetails, context);
    }
    if (output.externalExecutionId !== undefined &&
        output.externalExecutionId !== null) {
        contents.externalExecutionId = output.externalExecutionId;
    }
    if (output.externalExecutionUrl !== undefined &&
        output.externalExecutionUrl !== null) {
        contents.externalExecutionUrl = output.externalExecutionUrl;
    }
    if (output.lastStatusChange !== undefined &&
        output.lastStatusChange !== null) {
        contents.lastStatusChange = new Date(Math.round(output.lastStatusChange * 1000));
    }
    if (output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null) {
        contents.lastUpdatedBy = output.lastUpdatedBy;
    }
    if (output.percentComplete !== undefined && output.percentComplete !== null) {
        contents.percentComplete = output.percentComplete;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.summary !== undefined && output.summary !== null) {
        contents.summary = output.summary;
    }
    if (output.token !== undefined && output.token !== null) {
        contents.token = output.token;
    }
    return contents;
};
const deserializeAws_json1_1ActionExecutionDetail = (output, context) => {
    let contents = {
        __type: "ActionExecutionDetail",
        actionExecutionId: undefined,
        actionName: undefined,
        input: undefined,
        lastUpdateTime: undefined,
        output: undefined,
        pipelineExecutionId: undefined,
        pipelineVersion: undefined,
        stageName: undefined,
        startTime: undefined,
        status: undefined
    };
    if (output.actionExecutionId !== undefined &&
        output.actionExecutionId !== null) {
        contents.actionExecutionId = output.actionExecutionId;
    }
    if (output.actionName !== undefined && output.actionName !== null) {
        contents.actionName = output.actionName;
    }
    if (output.input !== undefined && output.input !== null) {
        contents.input = deserializeAws_json1_1ActionExecutionInput(output.input, context);
    }
    if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
        contents.lastUpdateTime = new Date(Math.round(output.lastUpdateTime * 1000));
    }
    if (output.output !== undefined && output.output !== null) {
        contents.output = deserializeAws_json1_1ActionExecutionOutput(output.output, context);
    }
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
        contents.pipelineVersion = output.pipelineVersion;
    }
    if (output.stageName !== undefined && output.stageName !== null) {
        contents.stageName = output.stageName;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1ActionExecutionDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActionExecutionDetail(entry, context));
};
const deserializeAws_json1_1ActionExecutionInput = (output, context) => {
    let contents = {
        __type: "ActionExecutionInput",
        actionTypeId: undefined,
        configuration: undefined,
        inputArtifacts: undefined,
        namespace: undefined,
        region: undefined,
        resolvedConfiguration: undefined,
        roleArn: undefined
    };
    if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
        contents.actionTypeId = deserializeAws_json1_1ActionTypeId(output.actionTypeId, context);
    }
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_1ActionConfigurationMap(output.configuration, context);
    }
    if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
        contents.inputArtifacts = deserializeAws_json1_1ArtifactDetailList(output.inputArtifacts, context);
    }
    if (output.namespace !== undefined && output.namespace !== null) {
        contents.namespace = output.namespace;
    }
    if (output.region !== undefined && output.region !== null) {
        contents.region = output.region;
    }
    if (output.resolvedConfiguration !== undefined &&
        output.resolvedConfiguration !== null) {
        contents.resolvedConfiguration = deserializeAws_json1_1ResolvedActionConfigurationMap(output.resolvedConfiguration, context);
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    return contents;
};
const deserializeAws_json1_1ActionExecutionOutput = (output, context) => {
    let contents = {
        __type: "ActionExecutionOutput",
        executionResult: undefined,
        outputArtifacts: undefined,
        outputVariables: undefined
    };
    if (output.executionResult !== undefined && output.executionResult !== null) {
        contents.executionResult = deserializeAws_json1_1ActionExecutionResult(output.executionResult, context);
    }
    if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
        contents.outputArtifacts = deserializeAws_json1_1ArtifactDetailList(output.outputArtifacts, context);
    }
    if (output.outputVariables !== undefined && output.outputVariables !== null) {
        contents.outputVariables = deserializeAws_json1_1OutputVariablesMap(output.outputVariables, context);
    }
    return contents;
};
const deserializeAws_json1_1ActionExecutionResult = (output, context) => {
    let contents = {
        __type: "ActionExecutionResult",
        externalExecutionId: undefined,
        externalExecutionSummary: undefined,
        externalExecutionUrl: undefined
    };
    if (output.externalExecutionId !== undefined &&
        output.externalExecutionId !== null) {
        contents.externalExecutionId = output.externalExecutionId;
    }
    if (output.externalExecutionSummary !== undefined &&
        output.externalExecutionSummary !== null) {
        contents.externalExecutionSummary = output.externalExecutionSummary;
    }
    if (output.externalExecutionUrl !== undefined &&
        output.externalExecutionUrl !== null) {
        contents.externalExecutionUrl = output.externalExecutionUrl;
    }
    return contents;
};
const deserializeAws_json1_1ActionNotFoundException = (output, context) => {
    let contents = {
        __type: "ActionNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ActionRevision = (output, context) => {
    let contents = {
        __type: "ActionRevision",
        created: undefined,
        revisionChangeId: undefined,
        revisionId: undefined
    };
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.revisionChangeId !== undefined &&
        output.revisionChangeId !== null) {
        contents.revisionChangeId = output.revisionChangeId;
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    return contents;
};
const deserializeAws_json1_1ActionState = (output, context) => {
    let contents = {
        __type: "ActionState",
        actionName: undefined,
        currentRevision: undefined,
        entityUrl: undefined,
        latestExecution: undefined,
        revisionUrl: undefined
    };
    if (output.actionName !== undefined && output.actionName !== null) {
        contents.actionName = output.actionName;
    }
    if (output.currentRevision !== undefined && output.currentRevision !== null) {
        contents.currentRevision = deserializeAws_json1_1ActionRevision(output.currentRevision, context);
    }
    if (output.entityUrl !== undefined && output.entityUrl !== null) {
        contents.entityUrl = output.entityUrl;
    }
    if (output.latestExecution !== undefined && output.latestExecution !== null) {
        contents.latestExecution = deserializeAws_json1_1ActionExecution(output.latestExecution, context);
    }
    if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
        contents.revisionUrl = output.revisionUrl;
    }
    return contents;
};
const deserializeAws_json1_1ActionStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActionState(entry, context));
};
const deserializeAws_json1_1ActionType = (output, context) => {
    let contents = {
        __type: "ActionType",
        actionConfigurationProperties: undefined,
        id: undefined,
        inputArtifactDetails: undefined,
        outputArtifactDetails: undefined,
        settings: undefined
    };
    if (output.actionConfigurationProperties !== undefined &&
        output.actionConfigurationProperties !== null) {
        contents.actionConfigurationProperties = deserializeAws_json1_1ActionConfigurationPropertyList(output.actionConfigurationProperties, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = deserializeAws_json1_1ActionTypeId(output.id, context);
    }
    if (output.inputArtifactDetails !== undefined &&
        output.inputArtifactDetails !== null) {
        contents.inputArtifactDetails = deserializeAws_json1_1ArtifactDetails(output.inputArtifactDetails, context);
    }
    if (output.outputArtifactDetails !== undefined &&
        output.outputArtifactDetails !== null) {
        contents.outputArtifactDetails = deserializeAws_json1_1ArtifactDetails(output.outputArtifactDetails, context);
    }
    if (output.settings !== undefined && output.settings !== null) {
        contents.settings = deserializeAws_json1_1ActionTypeSettings(output.settings, context);
    }
    return contents;
};
const deserializeAws_json1_1ActionTypeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActionType(entry, context));
};
const deserializeAws_json1_1ActionTypeSettings = (output, context) => {
    let contents = {
        __type: "ActionTypeSettings",
        entityUrlTemplate: undefined,
        executionUrlTemplate: undefined,
        revisionUrlTemplate: undefined,
        thirdPartyConfigurationUrl: undefined
    };
    if (output.entityUrlTemplate !== undefined &&
        output.entityUrlTemplate !== null) {
        contents.entityUrlTemplate = output.entityUrlTemplate;
    }
    if (output.executionUrlTemplate !== undefined &&
        output.executionUrlTemplate !== null) {
        contents.executionUrlTemplate = output.executionUrlTemplate;
    }
    if (output.revisionUrlTemplate !== undefined &&
        output.revisionUrlTemplate !== null) {
        contents.revisionUrlTemplate = output.revisionUrlTemplate;
    }
    if (output.thirdPartyConfigurationUrl !== undefined &&
        output.thirdPartyConfigurationUrl !== null) {
        contents.thirdPartyConfigurationUrl = output.thirdPartyConfigurationUrl;
    }
    return contents;
};
const deserializeAws_json1_1ApprovalAlreadyCompletedException = (output, context) => {
    let contents = {
        __type: "ApprovalAlreadyCompletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ArtifactDetail = (output, context) => {
    let contents = {
        __type: "ArtifactDetail",
        name: undefined,
        s3location: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.s3location !== undefined && output.s3location !== null) {
        contents.s3location = deserializeAws_json1_1S3Location(output.s3location, context);
    }
    return contents;
};
const deserializeAws_json1_1ArtifactDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ArtifactDetail(entry, context));
};
const deserializeAws_json1_1ArtifactDetails = (output, context) => {
    let contents = {
        __type: "ArtifactDetails",
        maximumCount: undefined,
        minimumCount: undefined
    };
    if (output.maximumCount !== undefined && output.maximumCount !== null) {
        contents.maximumCount = output.maximumCount;
    }
    if (output.minimumCount !== undefined && output.minimumCount !== null) {
        contents.minimumCount = output.minimumCount;
    }
    return contents;
};
const deserializeAws_json1_1ArtifactRevision = (output, context) => {
    let contents = {
        __type: "ArtifactRevision",
        created: undefined,
        name: undefined,
        revisionChangeIdentifier: undefined,
        revisionId: undefined,
        revisionSummary: undefined,
        revisionUrl: undefined
    };
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.revisionChangeIdentifier !== undefined &&
        output.revisionChangeIdentifier !== null) {
        contents.revisionChangeIdentifier = output.revisionChangeIdentifier;
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    if (output.revisionSummary !== undefined && output.revisionSummary !== null) {
        contents.revisionSummary = output.revisionSummary;
    }
    if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
        contents.revisionUrl = output.revisionUrl;
    }
    return contents;
};
const deserializeAws_json1_1ArtifactRevisionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ArtifactRevision(entry, context));
};
const deserializeAws_json1_1ArtifactStore = (output, context) => {
    let contents = {
        __type: "ArtifactStore",
        encryptionKey: undefined,
        location: undefined,
        type: undefined
    };
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = deserializeAws_json1_1EncryptionKey(output.encryptionKey, context);
    }
    if (output.location !== undefined && output.location !== null) {
        contents.location = output.location;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ArtifactStoreMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1ArtifactStore(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1BlockerDeclaration = (output, context) => {
    let contents = {
        __type: "BlockerDeclaration",
        name: undefined,
        type: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CreateCustomActionTypeOutput = (output, context) => {
    let contents = {
        __type: "CreateCustomActionTypeOutput",
        actionType: undefined,
        tags: undefined
    };
    if (output.actionType !== undefined && output.actionType !== null) {
        contents.actionType = deserializeAws_json1_1ActionType(output.actionType, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePipelineOutput = (output, context) => {
    let contents = {
        __type: "CreatePipelineOutput",
        pipeline: undefined,
        tags: undefined
    };
    if (output.pipeline !== undefined && output.pipeline !== null) {
        contents.pipeline = deserializeAws_json1_1PipelineDeclaration(output.pipeline, context);
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteWebhookOutput = (output, context) => {
    let contents = {
        __type: "DeleteWebhookOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeregisterWebhookWithThirdPartyOutput = (output, context) => {
    let contents = {
        __type: "DeregisterWebhookWithThirdPartyOutput"
    };
    return contents;
};
const deserializeAws_json1_1DuplicatedStopRequestException = (output, context) => {
    let contents = {
        __type: "DuplicatedStopRequestException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ErrorDetails = (output, context) => {
    let contents = {
        __type: "ErrorDetails",
        code: undefined,
        message: undefined
    };
    if (output.code !== undefined && output.code !== null) {
        contents.code = output.code;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ExecutionTrigger = (output, context) => {
    let contents = {
        __type: "ExecutionTrigger",
        triggerDetail: undefined,
        triggerType: undefined
    };
    if (output.triggerDetail !== undefined && output.triggerDetail !== null) {
        contents.triggerDetail = output.triggerDetail;
    }
    if (output.triggerType !== undefined && output.triggerType !== null) {
        contents.triggerType = output.triggerType;
    }
    return contents;
};
const deserializeAws_json1_1GetJobDetailsOutput = (output, context) => {
    let contents = {
        __type: "GetJobDetailsOutput",
        jobDetails: undefined
    };
    if (output.jobDetails !== undefined && output.jobDetails !== null) {
        contents.jobDetails = deserializeAws_json1_1JobDetails(output.jobDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPipelineExecutionOutput = (output, context) => {
    let contents = {
        __type: "GetPipelineExecutionOutput",
        pipelineExecution: undefined
    };
    if (output.pipelineExecution !== undefined &&
        output.pipelineExecution !== null) {
        contents.pipelineExecution = deserializeAws_json1_1PipelineExecution(output.pipelineExecution, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPipelineOutput = (output, context) => {
    let contents = {
        __type: "GetPipelineOutput",
        metadata: undefined,
        pipeline: undefined
    };
    if (output.metadata !== undefined && output.metadata !== null) {
        contents.metadata = deserializeAws_json1_1PipelineMetadata(output.metadata, context);
    }
    if (output.pipeline !== undefined && output.pipeline !== null) {
        contents.pipeline = deserializeAws_json1_1PipelineDeclaration(output.pipeline, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPipelineStateOutput = (output, context) => {
    let contents = {
        __type: "GetPipelineStateOutput",
        created: undefined,
        pipelineName: undefined,
        pipelineVersion: undefined,
        stageStates: undefined,
        updated: undefined
    };
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.pipelineName !== undefined && output.pipelineName !== null) {
        contents.pipelineName = output.pipelineName;
    }
    if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
        contents.pipelineVersion = output.pipelineVersion;
    }
    if (output.stageStates !== undefined && output.stageStates !== null) {
        contents.stageStates = deserializeAws_json1_1StageStateList(output.stageStates, context);
    }
    if (output.updated !== undefined && output.updated !== null) {
        contents.updated = new Date(Math.round(output.updated * 1000));
    }
    return contents;
};
const deserializeAws_json1_1GetThirdPartyJobDetailsOutput = (output, context) => {
    let contents = {
        __type: "GetThirdPartyJobDetailsOutput",
        jobDetails: undefined
    };
    if (output.jobDetails !== undefined && output.jobDetails !== null) {
        contents.jobDetails = deserializeAws_json1_1ThirdPartyJobDetails(output.jobDetails, context);
    }
    return contents;
};
const deserializeAws_json1_1InputArtifact = (output, context) => {
    let contents = {
        __type: "InputArtifact",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1InputArtifactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InputArtifact(entry, context));
};
const deserializeAws_json1_1InvalidActionDeclarationException = (output, context) => {
    let contents = {
        __type: "InvalidActionDeclarationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApprovalTokenException = (output, context) => {
    let contents = {
        __type: "InvalidApprovalTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    let contents = {
        __type: "InvalidArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidBlockerDeclarationException = (output, context) => {
    let contents = {
        __type: "InvalidBlockerDeclarationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidClientTokenException = (output, context) => {
    let contents = {
        __type: "InvalidClientTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidJobException = (output, context) => {
    let contents = {
        __type: "InvalidJobException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidStageDeclarationException = (output, context) => {
    let contents = {
        __type: "InvalidStageDeclarationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidStructureException = (output, context) => {
    let contents = {
        __type: "InvalidStructureException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagsException = (output, context) => {
    let contents = {
        __type: "InvalidTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidWebhookAuthenticationParametersException = (output, context) => {
    let contents = {
        __type: "InvalidWebhookAuthenticationParametersException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidWebhookFilterPatternException = (output, context) => {
    let contents = {
        __type: "InvalidWebhookFilterPatternException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Job = (output, context) => {
    let contents = {
        __type: "Job",
        accountId: undefined,
        data: undefined,
        id: undefined,
        nonce: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.data !== undefined && output.data !== null) {
        contents.data = deserializeAws_json1_1JobData(output.data, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.nonce !== undefined && output.nonce !== null) {
        contents.nonce = output.nonce;
    }
    return contents;
};
const deserializeAws_json1_1JobData = (output, context) => {
    let contents = {
        __type: "JobData",
        actionConfiguration: undefined,
        actionTypeId: undefined,
        artifactCredentials: undefined,
        continuationToken: undefined,
        encryptionKey: undefined,
        inputArtifacts: undefined,
        outputArtifacts: undefined,
        pipelineContext: undefined
    };
    if (output.actionConfiguration !== undefined &&
        output.actionConfiguration !== null) {
        contents.actionConfiguration = deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context);
    }
    if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
        contents.actionTypeId = deserializeAws_json1_1ActionTypeId(output.actionTypeId, context);
    }
    if (output.artifactCredentials !== undefined &&
        output.artifactCredentials !== null) {
        contents.artifactCredentials = deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context);
    }
    if (output.continuationToken !== undefined &&
        output.continuationToken !== null) {
        contents.continuationToken = output.continuationToken;
    }
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = deserializeAws_json1_1EncryptionKey(output.encryptionKey, context);
    }
    if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
        contents.inputArtifacts = deserializeAws_json1_1ArtifactList(output.inputArtifacts, context);
    }
    if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
        contents.outputArtifacts = deserializeAws_json1_1ArtifactList(output.outputArtifacts, context);
    }
    if (output.pipelineContext !== undefined && output.pipelineContext !== null) {
        contents.pipelineContext = deserializeAws_json1_1PipelineContext(output.pipelineContext, context);
    }
    return contents;
};
const deserializeAws_json1_1JobDetails = (output, context) => {
    let contents = {
        __type: "JobDetails",
        accountId: undefined,
        data: undefined,
        id: undefined
    };
    if (output.accountId !== undefined && output.accountId !== null) {
        contents.accountId = output.accountId;
    }
    if (output.data !== undefined && output.data !== null) {
        contents.data = deserializeAws_json1_1JobData(output.data, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    return contents;
};
const deserializeAws_json1_1JobList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Job(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListActionExecutionsOutput = (output, context) => {
    let contents = {
        __type: "ListActionExecutionsOutput",
        actionExecutionDetails: undefined,
        nextToken: undefined
    };
    if (output.actionExecutionDetails !== undefined &&
        output.actionExecutionDetails !== null) {
        contents.actionExecutionDetails = deserializeAws_json1_1ActionExecutionDetailList(output.actionExecutionDetails, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListActionTypesOutput = (output, context) => {
    let contents = {
        __type: "ListActionTypesOutput",
        actionTypes: undefined,
        nextToken: undefined
    };
    if (output.actionTypes !== undefined && output.actionTypes !== null) {
        contents.actionTypes = deserializeAws_json1_1ActionTypeList(output.actionTypes, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListPipelineExecutionsOutput = (output, context) => {
    let contents = {
        __type: "ListPipelineExecutionsOutput",
        nextToken: undefined,
        pipelineExecutionSummaries: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.pipelineExecutionSummaries !== undefined &&
        output.pipelineExecutionSummaries !== null) {
        contents.pipelineExecutionSummaries = deserializeAws_json1_1PipelineExecutionSummaryList(output.pipelineExecutionSummaries, context);
    }
    return contents;
};
const deserializeAws_json1_1ListPipelinesOutput = (output, context) => {
    let contents = {
        __type: "ListPipelinesOutput",
        nextToken: undefined,
        pipelines: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.pipelines !== undefined && output.pipelines !== null) {
        contents.pipelines = deserializeAws_json1_1PipelineList(output.pipelines, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceOutput",
        nextToken: undefined,
        tags: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListWebhookItem = (output, context) => {
    let contents = {
        __type: "ListWebhookItem",
        arn: undefined,
        definition: undefined,
        errorCode: undefined,
        errorMessage: undefined,
        lastTriggered: undefined,
        tags: undefined,
        url: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.definition !== undefined && output.definition !== null) {
        contents.definition = deserializeAws_json1_1WebhookDefinition(output.definition, context);
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.lastTriggered !== undefined && output.lastTriggered !== null) {
        contents.lastTriggered = new Date(Math.round(output.lastTriggered * 1000));
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1ListWebhooksOutput = (output, context) => {
    let contents = {
        __type: "ListWebhooksOutput",
        NextToken: undefined,
        webhooks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.webhooks !== undefined && output.webhooks !== null) {
        contents.webhooks = deserializeAws_json1_1WebhookList(output.webhooks, context);
    }
    return contents;
};
const deserializeAws_json1_1NotLatestPipelineExecutionException = (output, context) => {
    let contents = {
        __type: "NotLatestPipelineExecutionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OutputArtifact = (output, context) => {
    let contents = {
        __type: "OutputArtifact",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1OutputArtifactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OutputArtifact(entry, context));
};
const deserializeAws_json1_1PipelineDeclaration = (output, context) => {
    let contents = {
        __type: "PipelineDeclaration",
        artifactStore: undefined,
        artifactStores: undefined,
        name: undefined,
        roleArn: undefined,
        stages: undefined,
        version: undefined
    };
    if (output.artifactStore !== undefined && output.artifactStore !== null) {
        contents.artifactStore = deserializeAws_json1_1ArtifactStore(output.artifactStore, context);
    }
    if (output.artifactStores !== undefined && output.artifactStores !== null) {
        contents.artifactStores = deserializeAws_json1_1ArtifactStoreMap(output.artifactStores, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.stages !== undefined && output.stages !== null) {
        contents.stages = deserializeAws_json1_1PipelineStageDeclarationList(output.stages, context);
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1PipelineExecution = (output, context) => {
    let contents = {
        __type: "PipelineExecution",
        artifactRevisions: undefined,
        pipelineExecutionId: undefined,
        pipelineName: undefined,
        pipelineVersion: undefined,
        status: undefined
    };
    if (output.artifactRevisions !== undefined &&
        output.artifactRevisions !== null) {
        contents.artifactRevisions = deserializeAws_json1_1ArtifactRevisionList(output.artifactRevisions, context);
    }
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    if (output.pipelineName !== undefined && output.pipelineName !== null) {
        contents.pipelineName = output.pipelineName;
    }
    if (output.pipelineVersion !== undefined && output.pipelineVersion !== null) {
        contents.pipelineVersion = output.pipelineVersion;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotFoundException = (output, context) => {
    let contents = {
        __type: "PipelineExecutionNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PipelineExecutionNotStoppableException = (output, context) => {
    let contents = {
        __type: "PipelineExecutionNotStoppableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PipelineExecutionSummary = (output, context) => {
    let contents = {
        __type: "PipelineExecutionSummary",
        lastUpdateTime: undefined,
        pipelineExecutionId: undefined,
        sourceRevisions: undefined,
        startTime: undefined,
        status: undefined,
        stopTrigger: undefined,
        trigger: undefined
    };
    if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
        contents.lastUpdateTime = new Date(Math.round(output.lastUpdateTime * 1000));
    }
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    if (output.sourceRevisions !== undefined && output.sourceRevisions !== null) {
        contents.sourceRevisions = deserializeAws_json1_1SourceRevisionList(output.sourceRevisions, context);
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.stopTrigger !== undefined && output.stopTrigger !== null) {
        contents.stopTrigger = deserializeAws_json1_1StopExecutionTrigger(output.stopTrigger, context);
    }
    if (output.trigger !== undefined && output.trigger !== null) {
        contents.trigger = deserializeAws_json1_1ExecutionTrigger(output.trigger, context);
    }
    return contents;
};
const deserializeAws_json1_1PipelineExecutionSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PipelineExecutionSummary(entry, context));
};
const deserializeAws_json1_1PipelineList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PipelineSummary(entry, context));
};
const deserializeAws_json1_1PipelineMetadata = (output, context) => {
    let contents = {
        __type: "PipelineMetadata",
        created: undefined,
        pipelineArn: undefined,
        updated: undefined
    };
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.pipelineArn !== undefined && output.pipelineArn !== null) {
        contents.pipelineArn = output.pipelineArn;
    }
    if (output.updated !== undefined && output.updated !== null) {
        contents.updated = new Date(Math.round(output.updated * 1000));
    }
    return contents;
};
const deserializeAws_json1_1PipelineNameInUseException = (output, context) => {
    let contents = {
        __type: "PipelineNameInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1PipelineStageDeclarationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StageDeclaration(entry, context));
};
const deserializeAws_json1_1PipelineSummary = (output, context) => {
    let contents = {
        __type: "PipelineSummary",
        created: undefined,
        name: undefined,
        updated: undefined,
        version: undefined
    };
    if (output.created !== undefined && output.created !== null) {
        contents.created = new Date(Math.round(output.created * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.updated !== undefined && output.updated !== null) {
        contents.updated = new Date(Math.round(output.updated * 1000));
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1PipelineVersionNotFoundException = (output, context) => {
    let contents = {
        __type: "PipelineVersionNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PollForJobsOutput = (output, context) => {
    let contents = {
        __type: "PollForJobsOutput",
        jobs: undefined
    };
    if (output.jobs !== undefined && output.jobs !== null) {
        contents.jobs = deserializeAws_json1_1JobList(output.jobs, context);
    }
    return contents;
};
const deserializeAws_json1_1PollForThirdPartyJobsOutput = (output, context) => {
    let contents = {
        __type: "PollForThirdPartyJobsOutput",
        jobs: undefined
    };
    if (output.jobs !== undefined && output.jobs !== null) {
        contents.jobs = deserializeAws_json1_1ThirdPartyJobList(output.jobs, context);
    }
    return contents;
};
const deserializeAws_json1_1PutActionRevisionOutput = (output, context) => {
    let contents = {
        __type: "PutActionRevisionOutput",
        newRevision: undefined,
        pipelineExecutionId: undefined
    };
    if (output.newRevision !== undefined && output.newRevision !== null) {
        contents.newRevision = output.newRevision;
    }
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1PutApprovalResultOutput = (output, context) => {
    let contents = {
        __type: "PutApprovalResultOutput",
        approvedAt: undefined
    };
    if (output.approvedAt !== undefined && output.approvedAt !== null) {
        contents.approvedAt = new Date(Math.round(output.approvedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1PutWebhookOutput = (output, context) => {
    let contents = {
        __type: "PutWebhookOutput",
        webhook: undefined
    };
    if (output.webhook !== undefined && output.webhook !== null) {
        contents.webhook = deserializeAws_json1_1ListWebhookItem(output.webhook, context);
    }
    return contents;
};
const deserializeAws_json1_1RegisterWebhookWithThirdPartyOutput = (output, context) => {
    let contents = {
        __type: "RegisterWebhookWithThirdPartyOutput"
    };
    return contents;
};
const deserializeAws_json1_1ResolvedActionConfigurationMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1RetryStageExecutionOutput = (output, context) => {
    let contents = {
        __type: "RetryStageExecutionOutput",
        pipelineExecutionId: undefined
    };
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
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
const deserializeAws_json1_1SourceRevision = (output, context) => {
    let contents = {
        __type: "SourceRevision",
        actionName: undefined,
        revisionId: undefined,
        revisionSummary: undefined,
        revisionUrl: undefined
    };
    if (output.actionName !== undefined && output.actionName !== null) {
        contents.actionName = output.actionName;
    }
    if (output.revisionId !== undefined && output.revisionId !== null) {
        contents.revisionId = output.revisionId;
    }
    if (output.revisionSummary !== undefined && output.revisionSummary !== null) {
        contents.revisionSummary = output.revisionSummary;
    }
    if (output.revisionUrl !== undefined && output.revisionUrl !== null) {
        contents.revisionUrl = output.revisionUrl;
    }
    return contents;
};
const deserializeAws_json1_1SourceRevisionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SourceRevision(entry, context));
};
const deserializeAws_json1_1StageActionDeclarationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ActionDeclaration(entry, context));
};
const deserializeAws_json1_1StageBlockerDeclarationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BlockerDeclaration(entry, context));
};
const deserializeAws_json1_1StageDeclaration = (output, context) => {
    let contents = {
        __type: "StageDeclaration",
        actions: undefined,
        blockers: undefined,
        name: undefined
    };
    if (output.actions !== undefined && output.actions !== null) {
        contents.actions = deserializeAws_json1_1StageActionDeclarationList(output.actions, context);
    }
    if (output.blockers !== undefined && output.blockers !== null) {
        contents.blockers = deserializeAws_json1_1StageBlockerDeclarationList(output.blockers, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1StageExecution = (output, context) => {
    let contents = {
        __type: "StageExecution",
        pipelineExecutionId: undefined,
        status: undefined
    };
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1StageNotFoundException = (output, context) => {
    let contents = {
        __type: "StageNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StageNotRetryableException = (output, context) => {
    let contents = {
        __type: "StageNotRetryableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StageState = (output, context) => {
    let contents = {
        __type: "StageState",
        actionStates: undefined,
        inboundTransitionState: undefined,
        latestExecution: undefined,
        stageName: undefined
    };
    if (output.actionStates !== undefined && output.actionStates !== null) {
        contents.actionStates = deserializeAws_json1_1ActionStateList(output.actionStates, context);
    }
    if (output.inboundTransitionState !== undefined &&
        output.inboundTransitionState !== null) {
        contents.inboundTransitionState = deserializeAws_json1_1TransitionState(output.inboundTransitionState, context);
    }
    if (output.latestExecution !== undefined && output.latestExecution !== null) {
        contents.latestExecution = deserializeAws_json1_1StageExecution(output.latestExecution, context);
    }
    if (output.stageName !== undefined && output.stageName !== null) {
        contents.stageName = output.stageName;
    }
    return contents;
};
const deserializeAws_json1_1StageStateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StageState(entry, context));
};
const deserializeAws_json1_1StartPipelineExecutionOutput = (output, context) => {
    let contents = {
        __type: "StartPipelineExecutionOutput",
        pipelineExecutionId: undefined
    };
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1StopExecutionTrigger = (output, context) => {
    let contents = {
        __type: "StopExecutionTrigger",
        reason: undefined
    };
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    return contents;
};
const deserializeAws_json1_1StopPipelineExecutionOutput = (output, context) => {
    let contents = {
        __type: "StopPipelineExecutionOutput",
        pipelineExecutionId: undefined
    };
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1ThirdPartyJob = (output, context) => {
    let contents = {
        __type: "ThirdPartyJob",
        clientId: undefined,
        jobId: undefined
    };
    if (output.clientId !== undefined && output.clientId !== null) {
        contents.clientId = output.clientId;
    }
    if (output.jobId !== undefined && output.jobId !== null) {
        contents.jobId = output.jobId;
    }
    return contents;
};
const deserializeAws_json1_1ThirdPartyJobData = (output, context) => {
    let contents = {
        __type: "ThirdPartyJobData",
        actionConfiguration: undefined,
        actionTypeId: undefined,
        artifactCredentials: undefined,
        continuationToken: undefined,
        encryptionKey: undefined,
        inputArtifacts: undefined,
        outputArtifacts: undefined,
        pipelineContext: undefined
    };
    if (output.actionConfiguration !== undefined &&
        output.actionConfiguration !== null) {
        contents.actionConfiguration = deserializeAws_json1_1ActionConfiguration(output.actionConfiguration, context);
    }
    if (output.actionTypeId !== undefined && output.actionTypeId !== null) {
        contents.actionTypeId = deserializeAws_json1_1ActionTypeId(output.actionTypeId, context);
    }
    if (output.artifactCredentials !== undefined &&
        output.artifactCredentials !== null) {
        contents.artifactCredentials = deserializeAws_json1_1AWSSessionCredentials(output.artifactCredentials, context);
    }
    if (output.continuationToken !== undefined &&
        output.continuationToken !== null) {
        contents.continuationToken = output.continuationToken;
    }
    if (output.encryptionKey !== undefined && output.encryptionKey !== null) {
        contents.encryptionKey = deserializeAws_json1_1EncryptionKey(output.encryptionKey, context);
    }
    if (output.inputArtifacts !== undefined && output.inputArtifacts !== null) {
        contents.inputArtifacts = deserializeAws_json1_1ArtifactList(output.inputArtifacts, context);
    }
    if (output.outputArtifacts !== undefined && output.outputArtifacts !== null) {
        contents.outputArtifacts = deserializeAws_json1_1ArtifactList(output.outputArtifacts, context);
    }
    if (output.pipelineContext !== undefined && output.pipelineContext !== null) {
        contents.pipelineContext = deserializeAws_json1_1PipelineContext(output.pipelineContext, context);
    }
    return contents;
};
const deserializeAws_json1_1ThirdPartyJobDetails = (output, context) => {
    let contents = {
        __type: "ThirdPartyJobDetails",
        data: undefined,
        id: undefined,
        nonce: undefined
    };
    if (output.data !== undefined && output.data !== null) {
        contents.data = deserializeAws_json1_1ThirdPartyJobData(output.data, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.nonce !== undefined && output.nonce !== null) {
        contents.nonce = output.nonce;
    }
    return contents;
};
const deserializeAws_json1_1ThirdPartyJobList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ThirdPartyJob(entry, context));
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TransitionState = (output, context) => {
    let contents = {
        __type: "TransitionState",
        disabledReason: undefined,
        enabled: undefined,
        lastChangedAt: undefined,
        lastChangedBy: undefined
    };
    if (output.disabledReason !== undefined && output.disabledReason !== null) {
        contents.disabledReason = output.disabledReason;
    }
    if (output.enabled !== undefined && output.enabled !== null) {
        contents.enabled = output.enabled;
    }
    if (output.lastChangedAt !== undefined && output.lastChangedAt !== null) {
        contents.lastChangedAt = new Date(Math.round(output.lastChangedAt * 1000));
    }
    if (output.lastChangedBy !== undefined && output.lastChangedBy !== null) {
        contents.lastChangedBy = output.lastChangedBy;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdatePipelineOutput = (output, context) => {
    let contents = {
        __type: "UpdatePipelineOutput",
        pipeline: undefined
    };
    if (output.pipeline !== undefined && output.pipeline !== null) {
        contents.pipeline = deserializeAws_json1_1PipelineDeclaration(output.pipeline, context);
    }
    return contents;
};
const deserializeAws_json1_1WebhookAuthConfiguration = (output, context) => {
    let contents = {
        __type: "WebhookAuthConfiguration",
        AllowedIPRange: undefined,
        SecretToken: undefined
    };
    if (output.AllowedIPRange !== undefined && output.AllowedIPRange !== null) {
        contents.AllowedIPRange = output.AllowedIPRange;
    }
    if (output.SecretToken !== undefined && output.SecretToken !== null) {
        contents.SecretToken = output.SecretToken;
    }
    return contents;
};
const deserializeAws_json1_1WebhookDefinition = (output, context) => {
    let contents = {
        __type: "WebhookDefinition",
        authentication: undefined,
        authenticationConfiguration: undefined,
        filters: undefined,
        name: undefined,
        targetAction: undefined,
        targetPipeline: undefined
    };
    if (output.authentication !== undefined && output.authentication !== null) {
        contents.authentication = output.authentication;
    }
    if (output.authenticationConfiguration !== undefined &&
        output.authenticationConfiguration !== null) {
        contents.authenticationConfiguration = deserializeAws_json1_1WebhookAuthConfiguration(output.authenticationConfiguration, context);
    }
    if (output.filters !== undefined && output.filters !== null) {
        contents.filters = deserializeAws_json1_1WebhookFilters(output.filters, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.targetAction !== undefined && output.targetAction !== null) {
        contents.targetAction = output.targetAction;
    }
    if (output.targetPipeline !== undefined && output.targetPipeline !== null) {
        contents.targetPipeline = output.targetPipeline;
    }
    return contents;
};
const deserializeAws_json1_1WebhookFilterRule = (output, context) => {
    let contents = {
        __type: "WebhookFilterRule",
        jsonPath: undefined,
        matchEquals: undefined
    };
    if (output.jsonPath !== undefined && output.jsonPath !== null) {
        contents.jsonPath = output.jsonPath;
    }
    if (output.matchEquals !== undefined && output.matchEquals !== null) {
        contents.matchEquals = output.matchEquals;
    }
    return contents;
};
const deserializeAws_json1_1WebhookFilters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WebhookFilterRule(entry, context));
};
const deserializeAws_json1_1WebhookList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ListWebhookItem(entry, context));
};
const deserializeAws_json1_1WebhookNotFoundException = (output, context) => {
    let contents = {
        __type: "WebhookNotFoundException"
    };
    return contents;
};
const deserializeAws_json1_1AWSSessionCredentials = (output, context) => {
    let contents = {
        __type: "AWSSessionCredentials",
        accessKeyId: undefined,
        secretAccessKey: undefined,
        sessionToken: undefined
    };
    if (output.accessKeyId !== undefined && output.accessKeyId !== null) {
        contents.accessKeyId = output.accessKeyId;
    }
    if (output.secretAccessKey !== undefined && output.secretAccessKey !== null) {
        contents.secretAccessKey = output.secretAccessKey;
    }
    if (output.sessionToken !== undefined && output.sessionToken !== null) {
        contents.sessionToken = output.sessionToken;
    }
    return contents;
};
const deserializeAws_json1_1ActionConfiguration = (output, context) => {
    let contents = {
        __type: "ActionConfiguration",
        configuration: undefined
    };
    if (output.configuration !== undefined && output.configuration !== null) {
        contents.configuration = deserializeAws_json1_1ActionConfigurationMap(output.configuration, context);
    }
    return contents;
};
const deserializeAws_json1_1ActionConfigurationMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ActionContext = (output, context) => {
    let contents = {
        __type: "ActionContext",
        actionExecutionId: undefined,
        name: undefined
    };
    if (output.actionExecutionId !== undefined &&
        output.actionExecutionId !== null) {
        contents.actionExecutionId = output.actionExecutionId;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ActionTypeId = (output, context) => {
    let contents = {
        __type: "ActionTypeId",
        category: undefined,
        owner: undefined,
        provider: undefined,
        version: undefined
    };
    if (output.category !== undefined && output.category !== null) {
        contents.category = output.category;
    }
    if (output.owner !== undefined && output.owner !== null) {
        contents.owner = output.owner;
    }
    if (output.provider !== undefined && output.provider !== null) {
        contents.provider = output.provider;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1ActionTypeNotFoundException = (output, context) => {
    let contents = {
        __type: "ActionTypeNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Artifact = (output, context) => {
    let contents = {
        __type: "Artifact",
        location: undefined,
        name: undefined,
        revision: undefined
    };
    if (output.location !== undefined && output.location !== null) {
        contents.location = deserializeAws_json1_1ArtifactLocation(output.location, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.revision !== undefined && output.revision !== null) {
        contents.revision = output.revision;
    }
    return contents;
};
const deserializeAws_json1_1ArtifactList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Artifact(entry, context));
};
const deserializeAws_json1_1ArtifactLocation = (output, context) => {
    let contents = {
        __type: "ArtifactLocation",
        s3Location: undefined,
        type: undefined
    };
    if (output.s3Location !== undefined && output.s3Location !== null) {
        contents.s3Location = deserializeAws_json1_1S3ArtifactLocation(output.s3Location, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionKey = (output, context) => {
    let contents = {
        __type: "EncryptionKey",
        id: undefined,
        type: undefined
    };
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1InvalidJobStateException = (output, context) => {
    let contents = {
        __type: "InvalidJobStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNonceException = (output, context) => {
    let contents = {
        __type: "InvalidNonceException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1JobNotFoundException = (output, context) => {
    let contents = {
        __type: "JobNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OutputVariablesMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1OutputVariablesSizeExceededException = (output, context) => {
    let contents = {
        __type: "OutputVariablesSizeExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PipelineContext = (output, context) => {
    let contents = {
        __type: "PipelineContext",
        action: undefined,
        pipelineArn: undefined,
        pipelineExecutionId: undefined,
        pipelineName: undefined,
        stage: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_json1_1ActionContext(output.action, context);
    }
    if (output.pipelineArn !== undefined && output.pipelineArn !== null) {
        contents.pipelineArn = output.pipelineArn;
    }
    if (output.pipelineExecutionId !== undefined &&
        output.pipelineExecutionId !== null) {
        contents.pipelineExecutionId = output.pipelineExecutionId;
    }
    if (output.pipelineName !== undefined && output.pipelineName !== null) {
        contents.pipelineName = output.pipelineName;
    }
    if (output.stage !== undefined && output.stage !== null) {
        contents.stage = deserializeAws_json1_1StageContext(output.stage, context);
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
const deserializeAws_json1_1S3ArtifactLocation = (output, context) => {
    let contents = {
        __type: "S3ArtifactLocation",
        bucketName: undefined,
        objectKey: undefined
    };
    if (output.bucketName !== undefined && output.bucketName !== null) {
        contents.bucketName = output.bucketName;
    }
    if (output.objectKey !== undefined && output.objectKey !== null) {
        contents.objectKey = output.objectKey;
    }
    return contents;
};
const deserializeAws_json1_1StageContext = (output, context) => {
    let contents = {
        __type: "StageContext",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    let contents = {
        __type: "ValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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