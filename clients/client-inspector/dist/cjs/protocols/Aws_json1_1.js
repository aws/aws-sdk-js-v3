"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddAttributesToFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.AddAttributesToFindings";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddAttributesToFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddAttributesToFindingsCommand = serializeAws_json1_1AddAttributesToFindingsCommand;
async function serializeAws_json1_1CreateAssessmentTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.CreateAssessmentTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAssessmentTargetCommand = serializeAws_json1_1CreateAssessmentTargetCommand;
async function serializeAws_json1_1CreateAssessmentTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.CreateAssessmentTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAssessmentTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAssessmentTemplateCommand = serializeAws_json1_1CreateAssessmentTemplateCommand;
async function serializeAws_json1_1CreateExclusionsPreviewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.CreateExclusionsPreview";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateExclusionsPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateExclusionsPreviewCommand = serializeAws_json1_1CreateExclusionsPreviewCommand;
async function serializeAws_json1_1CreateResourceGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.CreateResourceGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateResourceGroupCommand = serializeAws_json1_1CreateResourceGroupCommand;
async function serializeAws_json1_1DeleteAssessmentRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAssessmentRunCommand = serializeAws_json1_1DeleteAssessmentRunCommand;
async function serializeAws_json1_1DeleteAssessmentTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAssessmentTargetCommand = serializeAws_json1_1DeleteAssessmentTargetCommand;
async function serializeAws_json1_1DeleteAssessmentTemplateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DeleteAssessmentTemplate";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAssessmentTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAssessmentTemplateCommand = serializeAws_json1_1DeleteAssessmentTemplateCommand;
async function serializeAws_json1_1DescribeAssessmentRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssessmentRunsCommand = serializeAws_json1_1DescribeAssessmentRunsCommand;
async function serializeAws_json1_1DescribeAssessmentTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssessmentTargetsCommand = serializeAws_json1_1DescribeAssessmentTargetsCommand;
async function serializeAws_json1_1DescribeAssessmentTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeAssessmentTemplates";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAssessmentTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAssessmentTemplatesCommand = serializeAws_json1_1DescribeAssessmentTemplatesCommand;
async function serializeAws_json1_1DescribeCrossAccountAccessRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeCrossAccountAccessRole";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeCrossAccountAccessRoleCommand = serializeAws_json1_1DescribeCrossAccountAccessRoleCommand;
async function serializeAws_json1_1DescribeExclusionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeExclusions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeExclusionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeExclusionsCommand = serializeAws_json1_1DescribeExclusionsCommand;
async function serializeAws_json1_1DescribeFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeFindings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFindingsCommand = serializeAws_json1_1DescribeFindingsCommand;
async function serializeAws_json1_1DescribeResourceGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeResourceGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeResourceGroupsCommand = serializeAws_json1_1DescribeResourceGroupsCommand;
async function serializeAws_json1_1DescribeRulesPackagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.DescribeRulesPackages";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRulesPackagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRulesPackagesCommand = serializeAws_json1_1DescribeRulesPackagesCommand;
async function serializeAws_json1_1GetAssessmentReportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.GetAssessmentReport";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssessmentReportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAssessmentReportCommand = serializeAws_json1_1GetAssessmentReportCommand;
async function serializeAws_json1_1GetExclusionsPreviewCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.GetExclusionsPreview";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExclusionsPreviewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetExclusionsPreviewCommand = serializeAws_json1_1GetExclusionsPreviewCommand;
async function serializeAws_json1_1GetTelemetryMetadataCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.GetTelemetryMetadata";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTelemetryMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTelemetryMetadataCommand = serializeAws_json1_1GetTelemetryMetadataCommand;
async function serializeAws_json1_1ListAssessmentRunAgentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListAssessmentRunAgents";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentRunAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssessmentRunAgentsCommand = serializeAws_json1_1ListAssessmentRunAgentsCommand;
async function serializeAws_json1_1ListAssessmentRunsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListAssessmentRuns";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssessmentRunsCommand = serializeAws_json1_1ListAssessmentRunsCommand;
async function serializeAws_json1_1ListAssessmentTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListAssessmentTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssessmentTargetsCommand = serializeAws_json1_1ListAssessmentTargetsCommand;
async function serializeAws_json1_1ListAssessmentTemplatesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListAssessmentTemplates";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssessmentTemplatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssessmentTemplatesCommand = serializeAws_json1_1ListAssessmentTemplatesCommand;
async function serializeAws_json1_1ListEventSubscriptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListEventSubscriptions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventSubscriptionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEventSubscriptionsCommand = serializeAws_json1_1ListEventSubscriptionsCommand;
async function serializeAws_json1_1ListExclusionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListExclusions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListExclusionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListExclusionsCommand = serializeAws_json1_1ListExclusionsCommand;
async function serializeAws_json1_1ListFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListFindings";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFindingsCommand = serializeAws_json1_1ListFindingsCommand;
async function serializeAws_json1_1ListRulesPackagesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListRulesPackages";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesPackagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRulesPackagesCommand = serializeAws_json1_1ListRulesPackagesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PreviewAgentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.PreviewAgents";
    let body;
    body = JSON.stringify(serializeAws_json1_1PreviewAgentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PreviewAgentsCommand = serializeAws_json1_1PreviewAgentsCommand;
async function serializeAws_json1_1RegisterCrossAccountAccessRoleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.RegisterCrossAccountAccessRole";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterCrossAccountAccessRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterCrossAccountAccessRoleCommand = serializeAws_json1_1RegisterCrossAccountAccessRoleCommand;
async function serializeAws_json1_1RemoveAttributesFromFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.RemoveAttributesFromFindings";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAttributesFromFindingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveAttributesFromFindingsCommand = serializeAws_json1_1RemoveAttributesFromFindingsCommand;
async function serializeAws_json1_1SetTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.SetTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetTagsForResourceCommand = serializeAws_json1_1SetTagsForResourceCommand;
async function serializeAws_json1_1StartAssessmentRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.StartAssessmentRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartAssessmentRunCommand = serializeAws_json1_1StartAssessmentRunCommand;
async function serializeAws_json1_1StopAssessmentRunCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.StopAssessmentRun";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopAssessmentRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopAssessmentRunCommand = serializeAws_json1_1StopAssessmentRunCommand;
async function serializeAws_json1_1SubscribeToEventCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.SubscribeToEvent";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubscribeToEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubscribeToEventCommand = serializeAws_json1_1SubscribeToEventCommand;
async function serializeAws_json1_1UnsubscribeFromEventCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.UnsubscribeFromEvent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnsubscribeFromEventRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnsubscribeFromEventCommand = serializeAws_json1_1UnsubscribeFromEventCommand;
async function serializeAws_json1_1UpdateAssessmentTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "InspectorService.UpdateAssessmentTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAssessmentTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAssessmentTargetCommand = serializeAws_json1_1UpdateAssessmentTargetCommand;
async function deserializeAws_json1_1AddAttributesToFindingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddAttributesToFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddAttributesToFindingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddAttributesToFindingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddAttributesToFindingsCommand = deserializeAws_json1_1AddAttributesToFindingsCommand;
async function deserializeAws_json1_1AddAttributesToFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAssessmentTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAssessmentTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssessmentTargetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAssessmentTargetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAssessmentTargetCommand = deserializeAws_json1_1CreateAssessmentTargetCommand;
async function deserializeAws_json1_1CreateAssessmentTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector.v20160216#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAssessmentTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAssessmentTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAssessmentTemplateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAssessmentTemplateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAssessmentTemplateCommand = deserializeAws_json1_1CreateAssessmentTemplateCommand;
async function deserializeAws_json1_1CreateAssessmentTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector.v20160216#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateExclusionsPreviewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateExclusionsPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateExclusionsPreviewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateExclusionsPreviewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateExclusionsPreviewCommand = deserializeAws_json1_1CreateExclusionsPreviewCommand;
async function deserializeAws_json1_1CreateExclusionsPreviewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PreviewGenerationInProgressException":
        case "com.amazonaws.inspector.v20160216#PreviewGenerationInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateResourceGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateResourceGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceGroupResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateResourceGroupResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateResourceGroupCommand = deserializeAws_json1_1CreateResourceGroupCommand;
async function deserializeAws_json1_1CreateResourceGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector.v20160216#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAssessmentRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAssessmentRunCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAssessmentRunCommand = deserializeAws_json1_1DeleteAssessmentRunCommand;
async function deserializeAws_json1_1DeleteAssessmentRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAssessmentTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAssessmentTargetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAssessmentTargetCommand = deserializeAws_json1_1DeleteAssessmentTargetCommand;
async function deserializeAws_json1_1DeleteAssessmentTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAssessmentTemplateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAssessmentTemplateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAssessmentTemplateCommand = deserializeAws_json1_1DeleteAssessmentTemplateCommand;
async function deserializeAws_json1_1DeleteAssessmentTemplateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAssessmentRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssessmentRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssessmentRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssessmentRunsCommand = deserializeAws_json1_1DescribeAssessmentRunsCommand;
async function deserializeAws_json1_1DescribeAssessmentRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAssessmentTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssessmentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentTargetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssessmentTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssessmentTargetsCommand = deserializeAws_json1_1DescribeAssessmentTargetsCommand;
async function deserializeAws_json1_1DescribeAssessmentTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAssessmentTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAssessmentTemplatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAssessmentTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAssessmentTemplatesCommand = deserializeAws_json1_1DescribeAssessmentTemplatesCommand;
async function deserializeAws_json1_1DescribeAssessmentTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCrossAccountAccessRoleResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand = deserializeAws_json1_1DescribeCrossAccountAccessRoleCommand;
async function deserializeAws_json1_1DescribeCrossAccountAccessRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeExclusionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeExclusionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeExclusionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExclusionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeExclusionsCommand = deserializeAws_json1_1DescribeExclusionsCommand;
async function deserializeAws_json1_1DescribeExclusionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFindingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFindingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFindingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFindingsCommand = deserializeAws_json1_1DescribeFindingsCommand;
async function deserializeAws_json1_1DescribeFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeResourceGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeResourceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceGroupsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeResourceGroupsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeResourceGroupsCommand = deserializeAws_json1_1DescribeResourceGroupsCommand;
async function deserializeAws_json1_1DescribeResourceGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeRulesPackagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRulesPackagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRulesPackagesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRulesPackagesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRulesPackagesCommand = deserializeAws_json1_1DescribeRulesPackagesCommand;
async function deserializeAws_json1_1DescribeRulesPackagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetAssessmentReportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAssessmentReportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssessmentReportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAssessmentReportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAssessmentReportCommand = deserializeAws_json1_1GetAssessmentReportCommand;
async function deserializeAws_json1_1GetAssessmentReportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AssessmentRunInProgressException":
        case "com.amazonaws.inspector.v20160216#AssessmentRunInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AssessmentRunInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.inspector.v20160216#UnsupportedFeatureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetExclusionsPreviewCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetExclusionsPreviewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExclusionsPreviewResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetExclusionsPreviewResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetExclusionsPreviewCommand = deserializeAws_json1_1GetExclusionsPreviewCommand;
async function deserializeAws_json1_1GetExclusionsPreviewCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetTelemetryMetadataCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTelemetryMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTelemetryMetadataResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTelemetryMetadataResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTelemetryMetadataCommand = deserializeAws_json1_1GetTelemetryMetadataCommand;
async function deserializeAws_json1_1GetTelemetryMetadataCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssessmentRunAgentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssessmentRunAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentRunAgentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssessmentRunAgentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssessmentRunAgentsCommand = deserializeAws_json1_1ListAssessmentRunAgentsCommand;
async function deserializeAws_json1_1ListAssessmentRunAgentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssessmentRunsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssessmentRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentRunsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssessmentRunsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssessmentRunsCommand = deserializeAws_json1_1ListAssessmentRunsCommand;
async function deserializeAws_json1_1ListAssessmentRunsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssessmentTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssessmentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentTargetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssessmentTargetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssessmentTargetsCommand = deserializeAws_json1_1ListAssessmentTargetsCommand;
async function deserializeAws_json1_1ListAssessmentTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAssessmentTemplatesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssessmentTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssessmentTemplatesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssessmentTemplatesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssessmentTemplatesCommand = deserializeAws_json1_1ListAssessmentTemplatesCommand;
async function deserializeAws_json1_1ListAssessmentTemplatesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListEventSubscriptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventSubscriptionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEventSubscriptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEventSubscriptionsCommand = deserializeAws_json1_1ListEventSubscriptionsCommand;
async function deserializeAws_json1_1ListEventSubscriptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListExclusionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListExclusionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListExclusionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListExclusionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListExclusionsCommand = deserializeAws_json1_1ListExclusionsCommand;
async function deserializeAws_json1_1ListExclusionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListFindingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFindingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFindingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFindingsCommand = deserializeAws_json1_1ListFindingsCommand;
async function deserializeAws_json1_1ListFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListRulesPackagesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRulesPackagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesPackagesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListRulesPackagesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRulesPackagesCommand = deserializeAws_json1_1ListRulesPackagesCommand;
async function deserializeAws_json1_1ListRulesPackagesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PreviewAgentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PreviewAgentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PreviewAgentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PreviewAgentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PreviewAgentsCommand = deserializeAws_json1_1PreviewAgentsCommand;
async function deserializeAws_json1_1PreviewAgentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand = deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand;
async function deserializeAws_json1_1RegisterCrossAccountAccessRoleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RemoveAttributesFromFindingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveAttributesFromFindingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveAttributesFromFindingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveAttributesFromFindingsCommand = deserializeAws_json1_1RemoveAttributesFromFindingsCommand;
async function deserializeAws_json1_1RemoveAttributesFromFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SetTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetTagsForResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetTagsForResourceCommand = deserializeAws_json1_1SetTagsForResourceCommand;
async function deserializeAws_json1_1SetTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartAssessmentRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartAssessmentRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartAssessmentRunResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartAssessmentRunResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartAssessmentRunCommand = deserializeAws_json1_1StartAssessmentRunCommand;
async function deserializeAws_json1_1StartAssessmentRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "AgentsAlreadyRunningAssessmentException":
        case "com.amazonaws.inspector.v20160216#AgentsAlreadyRunningAssessmentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCrossAccountRoleException":
        case "com.amazonaws.inspector.v20160216#InvalidCrossAccountRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector.v20160216#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopAssessmentRunCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopAssessmentRunCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopAssessmentRunCommand = deserializeAws_json1_1StopAssessmentRunCommand;
async function deserializeAws_json1_1StopAssessmentRunCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SubscribeToEventCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubscribeToEventCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubscribeToEventCommand = deserializeAws_json1_1SubscribeToEventCommand;
async function deserializeAws_json1_1SubscribeToEventCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.inspector.v20160216#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UnsubscribeFromEventCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnsubscribeFromEventCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnsubscribeFromEventCommand = deserializeAws_json1_1UnsubscribeFromEventCommand;
async function deserializeAws_json1_1UnsubscribeFromEventCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAssessmentTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAssessmentTargetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAssessmentTargetCommand = deserializeAws_json1_1UpdateAssessmentTargetCommand;
async function deserializeAws_json1_1UpdateAssessmentTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.inspector.v20160216#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.amazonaws.inspector.v20160216#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.inspector.v20160216#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoSuchEntityException":
        case "com.amazonaws.inspector.v20160216#NoSuchEntityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoSuchEntityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceTemporarilyUnavailableException":
        case "com.amazonaws.inspector.v20160216#ServiceTemporarilyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
const deserializeAws_json1_1AgentsAlreadyRunningAssessmentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AgentsAlreadyRunningAssessmentException(body, context);
    const contents = Object.assign({ name: "AgentsAlreadyRunningAssessmentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AssessmentRunInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AssessmentRunInProgressException(body, context);
    const contents = Object.assign({ name: "AssessmentRunInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = Object.assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCrossAccountRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCrossAccountRoleException(body, context);
    const contents = Object.assign({ name: "InvalidCrossAccountRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoSuchEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchEntityException(body, context);
    const contents = Object.assign({ name: "NoSuchEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PreviewGenerationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PreviewGenerationInProgressException(body, context);
    const contents = Object.assign({ name: "PreviewGenerationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceTemporarilyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceTemporarilyUnavailableException(body, context);
    const contents = Object.assign({ name: "ServiceTemporarilyUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureException(body, context);
    const contents = Object.assign({ name: "UnsupportedFeatureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddAttributesToFindingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1UserAttributeList(input.attributes, context);
    }
    if (input.findingArns !== undefined) {
        bodyParams["findingArns"] = serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AddRemoveAttributesFindingArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AgentFilter = (input, context) => {
    const bodyParams = {};
    if (input.agentHealthCodes !== undefined) {
        bodyParams["agentHealthCodes"] = serializeAws_json1_1AgentHealthCodeList(input.agentHealthCodes, context);
    }
    if (input.agentHealths !== undefined) {
        bodyParams["agentHealths"] = serializeAws_json1_1AgentHealthList(input.agentHealths, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AgentHealthCodeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AgentHealthList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AgentIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssessmentRunFilter = (input, context) => {
    const bodyParams = {};
    if (input.completionTimeRange !== undefined) {
        bodyParams["completionTimeRange"] = serializeAws_json1_1TimestampRange(input.completionTimeRange, context);
    }
    if (input.durationRange !== undefined) {
        bodyParams["durationRange"] = serializeAws_json1_1DurationRange(input.durationRange, context);
    }
    if (input.namePattern !== undefined) {
        bodyParams["namePattern"] = input.namePattern;
    }
    if (input.rulesPackageArns !== undefined) {
        bodyParams["rulesPackageArns"] = serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context);
    }
    if (input.startTimeRange !== undefined) {
        bodyParams["startTimeRange"] = serializeAws_json1_1TimestampRange(input.startTimeRange, context);
    }
    if (input.stateChangeTimeRange !== undefined) {
        bodyParams["stateChangeTimeRange"] = serializeAws_json1_1TimestampRange(input.stateChangeTimeRange, context);
    }
    if (input.states !== undefined) {
        bodyParams["states"] = serializeAws_json1_1AssessmentRunStateList(input.states, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssessmentRunStateList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssessmentTargetFilter = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetNamePattern !== undefined) {
        bodyParams["assessmentTargetNamePattern"] =
            input.assessmentTargetNamePattern;
    }
    return bodyParams;
};
const serializeAws_json1_1AssessmentTemplateFilter = (input, context) => {
    const bodyParams = {};
    if (input.durationRange !== undefined) {
        bodyParams["durationRange"] = serializeAws_json1_1DurationRange(input.durationRange, context);
    }
    if (input.namePattern !== undefined) {
        bodyParams["namePattern"] = input.namePattern;
    }
    if (input.rulesPackageArns !== undefined) {
        bodyParams["rulesPackageArns"] = serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssessmentTemplateRulesPackageArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Attribute = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Attribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AutoScalingGroupList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchDescribeArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchDescribeExclusionsArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateAssessmentTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetName !== undefined) {
        bodyParams["assessmentTargetName"] = input.assessmentTargetName;
    }
    if (input.resourceGroupArn !== undefined) {
        bodyParams["resourceGroupArn"] = input.resourceGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAssessmentTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetArn !== undefined) {
        bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
    }
    if (input.assessmentTemplateName !== undefined) {
        bodyParams["assessmentTemplateName"] = input.assessmentTemplateName;
    }
    if (input.durationInSeconds !== undefined) {
        bodyParams["durationInSeconds"] = input.durationInSeconds;
    }
    if (input.rulesPackageArns !== undefined) {
        bodyParams["rulesPackageArns"] = serializeAws_json1_1AssessmentTemplateRulesPackageArnList(input.rulesPackageArns, context);
    }
    if (input.userAttributesForFindings !== undefined) {
        bodyParams["userAttributesForFindings"] = serializeAws_json1_1UserAttributeList(input.userAttributesForFindings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateExclusionsPreviewRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTemplateArn !== undefined) {
        bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateResourceGroupRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceGroupTags !== undefined) {
        bodyParams["resourceGroupTags"] = serializeAws_json1_1ResourceGroupTags(input.resourceGroupTags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAssessmentRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAssessmentTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetArn !== undefined) {
        bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAssessmentTemplateRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTemplateArn !== undefined) {
        bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssessmentRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArns !== undefined) {
        bodyParams["assessmentRunArns"] = serializeAws_json1_1BatchDescribeArnList(input.assessmentRunArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssessmentTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetArns !== undefined) {
        bodyParams["assessmentTargetArns"] = serializeAws_json1_1BatchDescribeArnList(input.assessmentTargetArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAssessmentTemplatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTemplateArns !== undefined) {
        bodyParams["assessmentTemplateArns"] = serializeAws_json1_1BatchDescribeArnList(input.assessmentTemplateArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeExclusionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.exclusionArns !== undefined) {
        bodyParams["exclusionArns"] = serializeAws_json1_1BatchDescribeExclusionsArnList(input.exclusionArns, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFindingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.findingArns !== undefined) {
        bodyParams["findingArns"] = serializeAws_json1_1BatchDescribeArnList(input.findingArns, context);
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeResourceGroupsRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceGroupArns !== undefined) {
        bodyParams["resourceGroupArns"] = serializeAws_json1_1BatchDescribeArnList(input.resourceGroupArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRulesPackagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.rulesPackageArns !== undefined) {
        bodyParams["rulesPackageArns"] = serializeAws_json1_1BatchDescribeArnList(input.rulesPackageArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DurationRange = (input, context) => {
    const bodyParams = {};
    if (input.maxSeconds !== undefined) {
        bodyParams["maxSeconds"] = input.maxSeconds;
    }
    if (input.minSeconds !== undefined) {
        bodyParams["minSeconds"] = input.minSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1FilterRulesPackageArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FindingFilter = (input, context) => {
    const bodyParams = {};
    if (input.agentIds !== undefined) {
        bodyParams["agentIds"] = serializeAws_json1_1AgentIdList(input.agentIds, context);
    }
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1AttributeList(input.attributes, context);
    }
    if (input.autoScalingGroups !== undefined) {
        bodyParams["autoScalingGroups"] = serializeAws_json1_1AutoScalingGroupList(input.autoScalingGroups, context);
    }
    if (input.creationTimeRange !== undefined) {
        bodyParams["creationTimeRange"] = serializeAws_json1_1TimestampRange(input.creationTimeRange, context);
    }
    if (input.ruleNames !== undefined) {
        bodyParams["ruleNames"] = serializeAws_json1_1RuleNameList(input.ruleNames, context);
    }
    if (input.rulesPackageArns !== undefined) {
        bodyParams["rulesPackageArns"] = serializeAws_json1_1FilterRulesPackageArnList(input.rulesPackageArns, context);
    }
    if (input.severities !== undefined) {
        bodyParams["severities"] = serializeAws_json1_1SeverityList(input.severities, context);
    }
    if (input.userAttributes !== undefined) {
        bodyParams["userAttributes"] = serializeAws_json1_1AttributeList(input.userAttributes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetAssessmentReportRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    if (input.reportFileFormat !== undefined) {
        bodyParams["reportFileFormat"] = input.reportFileFormat;
    }
    if (input.reportType !== undefined) {
        bodyParams["reportType"] = input.reportType;
    }
    return bodyParams;
};
const serializeAws_json1_1GetExclusionsPreviewRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTemplateArn !== undefined) {
        bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
    }
    if (input.locale !== undefined) {
        bodyParams["locale"] = input.locale;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.previewToken !== undefined) {
        bodyParams["previewToken"] = input.previewToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTelemetryMetadataRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssessmentRunAgentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1AgentFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssessmentRunsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTemplateArns !== undefined) {
        bodyParams["assessmentTemplateArns"] = serializeAws_json1_1ListParentArnList(input.assessmentTemplateArns, context);
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1AssessmentRunFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssessmentTargetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1AssessmentTargetFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAssessmentTemplatesRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetArns !== undefined) {
        bodyParams["assessmentTargetArns"] = serializeAws_json1_1ListParentArnList(input.assessmentTargetArns, context);
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1AssessmentTemplateFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEventSubscriptionsRequest = (input, context) => {
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
const serializeAws_json1_1ListExclusionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFindingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArns !== undefined) {
        bodyParams["assessmentRunArns"] = serializeAws_json1_1ListParentArnList(input.assessmentRunArns, context);
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_json1_1FindingFilter(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListParentArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListRulesPackagesRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1PreviewAgentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.previewAgentsArn !== undefined) {
        bodyParams["previewAgentsArn"] = input.previewAgentsArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterCrossAccountAccessRoleRequest = (input, context) => {
    const bodyParams = {};
    if (input.roleArn !== undefined) {
        bodyParams["roleArn"] = input.roleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveAttributesFromFindingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributeKeys !== undefined) {
        bodyParams["attributeKeys"] = serializeAws_json1_1UserAttributeKeyList(input.attributeKeys, context);
    }
    if (input.findingArns !== undefined) {
        bodyParams["findingArns"] = serializeAws_json1_1AddRemoveAttributesFindingArnList(input.findingArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceGroupTag = (input, context) => {
    const bodyParams = {};
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceGroupTags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceGroupTag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RuleNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SetTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SeverityList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartAssessmentRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunName !== undefined) {
        bodyParams["assessmentRunName"] = input.assessmentRunName;
    }
    if (input.assessmentTemplateArn !== undefined) {
        bodyParams["assessmentTemplateArn"] = input.assessmentTemplateArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StopAssessmentRunRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentRunArn !== undefined) {
        bodyParams["assessmentRunArn"] = input.assessmentRunArn;
    }
    if (input.stopAction !== undefined) {
        bodyParams["stopAction"] = input.stopAction;
    }
    return bodyParams;
};
const serializeAws_json1_1SubscribeToEventRequest = (input, context) => {
    const bodyParams = {};
    if (input.event !== undefined) {
        bodyParams["event"] = input.event;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.topicArn !== undefined) {
        bodyParams["topicArn"] = input.topicArn;
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
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TimestampRange = (input, context) => {
    const bodyParams = {};
    if (input.beginDate !== undefined) {
        bodyParams["beginDate"] = Math.round(input.beginDate.getTime() / 1000);
    }
    if (input.endDate !== undefined) {
        bodyParams["endDate"] = Math.round(input.endDate.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UnsubscribeFromEventRequest = (input, context) => {
    const bodyParams = {};
    if (input.event !== undefined) {
        bodyParams["event"] = input.event;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.topicArn !== undefined) {
        bodyParams["topicArn"] = input.topicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAssessmentTargetRequest = (input, context) => {
    const bodyParams = {};
    if (input.assessmentTargetArn !== undefined) {
        bodyParams["assessmentTargetArn"] = input.assessmentTargetArn;
    }
    if (input.assessmentTargetName !== undefined) {
        bodyParams["assessmentTargetName"] = input.assessmentTargetName;
    }
    if (input.resourceGroupArn !== undefined) {
        bodyParams["resourceGroupArn"] = input.resourceGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UserAttributeKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UserAttributeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Attribute(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        canRetry: undefined,
        errorCode: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AddAttributesToFindingsResponse = (output, context) => {
    let contents = {
        __type: "AddAttributesToFindingsResponse",
        failedItems: undefined
    };
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1AgentAlreadyRunningAssessment = (output, context) => {
    let contents = {
        __type: "AgentAlreadyRunningAssessment",
        agentId: undefined,
        assessmentRunArn: undefined
    };
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.assessmentRunArn !== undefined &&
        output.assessmentRunArn !== null) {
        contents.assessmentRunArn = output.assessmentRunArn;
    }
    return contents;
};
const deserializeAws_json1_1AgentAlreadyRunningAssessmentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentAlreadyRunningAssessment(entry, context));
};
const deserializeAws_json1_1AgentPreview = (output, context) => {
    let contents = {
        __type: "AgentPreview",
        agentHealth: undefined,
        agentId: undefined,
        agentVersion: undefined,
        autoScalingGroup: undefined,
        hostname: undefined,
        ipv4Address: undefined,
        kernelVersion: undefined,
        operatingSystem: undefined
    };
    if (output.agentHealth !== undefined && output.agentHealth !== null) {
        contents.agentHealth = output.agentHealth;
    }
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.agentVersion !== undefined && output.agentVersion !== null) {
        contents.agentVersion = output.agentVersion;
    }
    if (output.autoScalingGroup !== undefined &&
        output.autoScalingGroup !== null) {
        contents.autoScalingGroup = output.autoScalingGroup;
    }
    if (output.hostname !== undefined && output.hostname !== null) {
        contents.hostname = output.hostname;
    }
    if (output.ipv4Address !== undefined && output.ipv4Address !== null) {
        contents.ipv4Address = output.ipv4Address;
    }
    if (output.kernelVersion !== undefined && output.kernelVersion !== null) {
        contents.kernelVersion = output.kernelVersion;
    }
    if (output.operatingSystem !== undefined && output.operatingSystem !== null) {
        contents.operatingSystem = output.operatingSystem;
    }
    return contents;
};
const deserializeAws_json1_1AgentPreviewList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentPreview(entry, context));
};
const deserializeAws_json1_1AgentsAlreadyRunningAssessmentException = (output, context) => {
    let contents = {
        __type: "AgentsAlreadyRunningAssessmentException",
        agents: undefined,
        agentsTruncated: undefined,
        canRetry: undefined,
        message: undefined
    };
    if (output.agents !== undefined && output.agents !== null) {
        contents.agents = deserializeAws_json1_1AgentAlreadyRunningAssessmentList(output.agents, context);
    }
    if (output.agentsTruncated !== undefined && output.agentsTruncated !== null) {
        contents.agentsTruncated = output.agentsTruncated;
    }
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRulesPackageArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AssessmentRun = (output, context) => {
    let contents = {
        __type: "AssessmentRun",
        arn: undefined,
        assessmentTemplateArn: undefined,
        completedAt: undefined,
        createdAt: undefined,
        dataCollected: undefined,
        durationInSeconds: undefined,
        findingCounts: undefined,
        name: undefined,
        notifications: undefined,
        rulesPackageArns: undefined,
        startedAt: undefined,
        state: undefined,
        stateChangedAt: undefined,
        stateChanges: undefined,
        userAttributesForFindings: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.assessmentTemplateArn !== undefined &&
        output.assessmentTemplateArn !== null) {
        contents.assessmentTemplateArn = output.assessmentTemplateArn;
    }
    if (output.completedAt !== undefined && output.completedAt !== null) {
        contents.completedAt = new Date(Math.round(output.completedAt * 1000));
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.dataCollected !== undefined && output.dataCollected !== null) {
        contents.dataCollected = output.dataCollected;
    }
    if (output.durationInSeconds !== undefined &&
        output.durationInSeconds !== null) {
        contents.durationInSeconds = output.durationInSeconds;
    }
    if (output.findingCounts !== undefined && output.findingCounts !== null) {
        contents.findingCounts = deserializeAws_json1_1AssessmentRunFindingCounts(output.findingCounts, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.notifications !== undefined && output.notifications !== null) {
        contents.notifications = deserializeAws_json1_1AssessmentRunNotificationList(output.notifications, context);
    }
    if (output.rulesPackageArns !== undefined &&
        output.rulesPackageArns !== null) {
        contents.rulesPackageArns = deserializeAws_json1_1AssessmentRulesPackageArnList(output.rulesPackageArns, context);
    }
    if (output.startedAt !== undefined && output.startedAt !== null) {
        contents.startedAt = new Date(Math.round(output.startedAt * 1000));
    }
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.stateChangedAt !== undefined && output.stateChangedAt !== null) {
        contents.stateChangedAt = new Date(Math.round(output.stateChangedAt * 1000));
    }
    if (output.stateChanges !== undefined && output.stateChanges !== null) {
        contents.stateChanges = deserializeAws_json1_1AssessmentRunStateChangeList(output.stateChanges, context);
    }
    if (output.userAttributesForFindings !== undefined &&
        output.userAttributesForFindings !== null) {
        contents.userAttributesForFindings = deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context);
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRunAgent = (output, context) => {
    let contents = {
        __type: "AssessmentRunAgent",
        agentHealth: undefined,
        agentHealthCode: undefined,
        agentHealthDetails: undefined,
        agentId: undefined,
        assessmentRunArn: undefined,
        autoScalingGroup: undefined,
        telemetryMetadata: undefined
    };
    if (output.agentHealth !== undefined && output.agentHealth !== null) {
        contents.agentHealth = output.agentHealth;
    }
    if (output.agentHealthCode !== undefined && output.agentHealthCode !== null) {
        contents.agentHealthCode = output.agentHealthCode;
    }
    if (output.agentHealthDetails !== undefined &&
        output.agentHealthDetails !== null) {
        contents.agentHealthDetails = output.agentHealthDetails;
    }
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.assessmentRunArn !== undefined &&
        output.assessmentRunArn !== null) {
        contents.assessmentRunArn = output.assessmentRunArn;
    }
    if (output.autoScalingGroup !== undefined &&
        output.autoScalingGroup !== null) {
        contents.autoScalingGroup = output.autoScalingGroup;
    }
    if (output.telemetryMetadata !== undefined &&
        output.telemetryMetadata !== null) {
        contents.telemetryMetadata = deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRunAgentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentRunAgent(entry, context));
};
const deserializeAws_json1_1AssessmentRunFindingCounts = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1AssessmentRunInProgressArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AssessmentRunInProgressException = (output, context) => {
    let contents = {
        __type: "AssessmentRunInProgressException",
        assessmentRunArns: undefined,
        assessmentRunArnsTruncated: undefined,
        canRetry: undefined,
        message: undefined
    };
    if (output.assessmentRunArns !== undefined &&
        output.assessmentRunArns !== null) {
        contents.assessmentRunArns = deserializeAws_json1_1AssessmentRunInProgressArnList(output.assessmentRunArns, context);
    }
    if (output.assessmentRunArnsTruncated !== undefined &&
        output.assessmentRunArnsTruncated !== null) {
        contents.assessmentRunArnsTruncated = output.assessmentRunArnsTruncated;
    }
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRunList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentRun(entry, context));
};
const deserializeAws_json1_1AssessmentRunNotification = (output, context) => {
    let contents = {
        __type: "AssessmentRunNotification",
        date: undefined,
        error: undefined,
        event: undefined,
        message: undefined,
        snsPublishStatusCode: undefined,
        snsTopicArn: undefined
    };
    if (output.date !== undefined && output.date !== null) {
        contents.date = new Date(Math.round(output.date * 1000));
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.event !== undefined && output.event !== null) {
        contents.event = output.event;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.snsPublishStatusCode !== undefined &&
        output.snsPublishStatusCode !== null) {
        contents.snsPublishStatusCode = output.snsPublishStatusCode;
    }
    if (output.snsTopicArn !== undefined && output.snsTopicArn !== null) {
        contents.snsTopicArn = output.snsTopicArn;
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRunNotificationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentRunNotification(entry, context));
};
const deserializeAws_json1_1AssessmentRunStateChange = (output, context) => {
    let contents = {
        __type: "AssessmentRunStateChange",
        state: undefined,
        stateChangedAt: undefined
    };
    if (output.state !== undefined && output.state !== null) {
        contents.state = output.state;
    }
    if (output.stateChangedAt !== undefined && output.stateChangedAt !== null) {
        contents.stateChangedAt = new Date(Math.round(output.stateChangedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AssessmentRunStateChangeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentRunStateChange(entry, context));
};
const deserializeAws_json1_1AssessmentTarget = (output, context) => {
    let contents = {
        __type: "AssessmentTarget",
        arn: undefined,
        createdAt: undefined,
        name: undefined,
        resourceGroupArn: undefined,
        updatedAt: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceGroupArn !== undefined &&
        output.resourceGroupArn !== null) {
        contents.resourceGroupArn = output.resourceGroupArn;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1AssessmentTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentTarget(entry, context));
};
const deserializeAws_json1_1AssessmentTemplate = (output, context) => {
    let contents = {
        __type: "AssessmentTemplate",
        arn: undefined,
        assessmentRunCount: undefined,
        assessmentTargetArn: undefined,
        createdAt: undefined,
        durationInSeconds: undefined,
        lastAssessmentRunArn: undefined,
        name: undefined,
        rulesPackageArns: undefined,
        userAttributesForFindings: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.assessmentRunCount !== undefined &&
        output.assessmentRunCount !== null) {
        contents.assessmentRunCount = output.assessmentRunCount;
    }
    if (output.assessmentTargetArn !== undefined &&
        output.assessmentTargetArn !== null) {
        contents.assessmentTargetArn = output.assessmentTargetArn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.durationInSeconds !== undefined &&
        output.durationInSeconds !== null) {
        contents.durationInSeconds = output.durationInSeconds;
    }
    if (output.lastAssessmentRunArn !== undefined &&
        output.lastAssessmentRunArn !== null) {
        contents.lastAssessmentRunArn = output.lastAssessmentRunArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.rulesPackageArns !== undefined &&
        output.rulesPackageArns !== null) {
        contents.rulesPackageArns = deserializeAws_json1_1AssessmentTemplateRulesPackageArnList(output.rulesPackageArns, context);
    }
    if (output.userAttributesForFindings !== undefined &&
        output.userAttributesForFindings !== null) {
        contents.userAttributesForFindings = deserializeAws_json1_1UserAttributeList(output.userAttributesForFindings, context);
    }
    return contents;
};
const deserializeAws_json1_1AssessmentTemplateList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AssessmentTemplate(entry, context));
};
const deserializeAws_json1_1AssessmentTemplateRulesPackageArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AssetAttributes = (output, context) => {
    let contents = {
        __type: "AssetAttributes",
        agentId: undefined,
        amiId: undefined,
        autoScalingGroup: undefined,
        hostname: undefined,
        ipv4Addresses: undefined,
        networkInterfaces: undefined,
        schemaVersion: undefined,
        tags: undefined
    };
    if (output.agentId !== undefined && output.agentId !== null) {
        contents.agentId = output.agentId;
    }
    if (output.amiId !== undefined && output.amiId !== null) {
        contents.amiId = output.amiId;
    }
    if (output.autoScalingGroup !== undefined &&
        output.autoScalingGroup !== null) {
        contents.autoScalingGroup = output.autoScalingGroup;
    }
    if (output.hostname !== undefined && output.hostname !== null) {
        contents.hostname = output.hostname;
    }
    if (output.ipv4Addresses !== undefined && output.ipv4Addresses !== null) {
        contents.ipv4Addresses = deserializeAws_json1_1Ipv4AddressList(output.ipv4Addresses, context);
    }
    if (output.networkInterfaces !== undefined &&
        output.networkInterfaces !== null) {
        contents.networkInterfaces = deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context);
    }
    if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
        contents.schemaVersion = output.schemaVersion;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1Attribute = (output, context) => {
    let contents = {
        __type: "Attribute",
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
const deserializeAws_json1_1AttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1CreateAssessmentTargetResponse = (output, context) => {
    let contents = {
        __type: "CreateAssessmentTargetResponse",
        assessmentTargetArn: undefined
    };
    if (output.assessmentTargetArn !== undefined &&
        output.assessmentTargetArn !== null) {
        contents.assessmentTargetArn = output.assessmentTargetArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateAssessmentTemplateResponse = (output, context) => {
    let contents = {
        __type: "CreateAssessmentTemplateResponse",
        assessmentTemplateArn: undefined
    };
    if (output.assessmentTemplateArn !== undefined &&
        output.assessmentTemplateArn !== null) {
        contents.assessmentTemplateArn = output.assessmentTemplateArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateExclusionsPreviewResponse = (output, context) => {
    let contents = {
        __type: "CreateExclusionsPreviewResponse",
        previewToken: undefined
    };
    if (output.previewToken !== undefined && output.previewToken !== null) {
        contents.previewToken = output.previewToken;
    }
    return contents;
};
const deserializeAws_json1_1CreateResourceGroupResponse = (output, context) => {
    let contents = {
        __type: "CreateResourceGroupResponse",
        resourceGroupArn: undefined
    };
    if (output.resourceGroupArn !== undefined &&
        output.resourceGroupArn !== null) {
        contents.resourceGroupArn = output.resourceGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssessmentRunsResponse = (output, context) => {
    let contents = {
        __type: "DescribeAssessmentRunsResponse",
        assessmentRuns: undefined,
        failedItems: undefined
    };
    if (output.assessmentRuns !== undefined && output.assessmentRuns !== null) {
        contents.assessmentRuns = deserializeAws_json1_1AssessmentRunList(output.assessmentRuns, context);
    }
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssessmentTargetsResponse = (output, context) => {
    let contents = {
        __type: "DescribeAssessmentTargetsResponse",
        assessmentTargets: undefined,
        failedItems: undefined
    };
    if (output.assessmentTargets !== undefined &&
        output.assessmentTargets !== null) {
        contents.assessmentTargets = deserializeAws_json1_1AssessmentTargetList(output.assessmentTargets, context);
    }
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAssessmentTemplatesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAssessmentTemplatesResponse",
        assessmentTemplates: undefined,
        failedItems: undefined
    };
    if (output.assessmentTemplates !== undefined &&
        output.assessmentTemplates !== null) {
        contents.assessmentTemplates = deserializeAws_json1_1AssessmentTemplateList(output.assessmentTemplates, context);
    }
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCrossAccountAccessRoleResponse = (output, context) => {
    let contents = {
        __type: "DescribeCrossAccountAccessRoleResponse",
        registeredAt: undefined,
        roleArn: undefined,
        valid: undefined
    };
    if (output.registeredAt !== undefined && output.registeredAt !== null) {
        contents.registeredAt = new Date(Math.round(output.registeredAt * 1000));
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.valid !== undefined && output.valid !== null) {
        contents.valid = output.valid;
    }
    return contents;
};
const deserializeAws_json1_1DescribeExclusionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeExclusionsResponse",
        exclusions: undefined,
        failedItems: undefined
    };
    if (output.exclusions !== undefined && output.exclusions !== null) {
        contents.exclusions = deserializeAws_json1_1ExclusionMap(output.exclusions, context);
    }
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeFindingsResponse = (output, context) => {
    let contents = {
        __type: "DescribeFindingsResponse",
        failedItems: undefined,
        findings: undefined
    };
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    if (output.findings !== undefined && output.findings !== null) {
        contents.findings = deserializeAws_json1_1FindingList(output.findings, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeResourceGroupsResponse = (output, context) => {
    let contents = {
        __type: "DescribeResourceGroupsResponse",
        failedItems: undefined,
        resourceGroups: undefined
    };
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    if (output.resourceGroups !== undefined && output.resourceGroups !== null) {
        contents.resourceGroups = deserializeAws_json1_1ResourceGroupList(output.resourceGroups, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRulesPackagesResponse = (output, context) => {
    let contents = {
        __type: "DescribeRulesPackagesResponse",
        failedItems: undefined,
        rulesPackages: undefined
    };
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    if (output.rulesPackages !== undefined && output.rulesPackages !== null) {
        contents.rulesPackages = deserializeAws_json1_1RulesPackageList(output.rulesPackages, context);
    }
    return contents;
};
const deserializeAws_json1_1EventSubscription = (output, context) => {
    let contents = {
        __type: "EventSubscription",
        event: undefined,
        subscribedAt: undefined
    };
    if (output.event !== undefined && output.event !== null) {
        contents.event = output.event;
    }
    if (output.subscribedAt !== undefined && output.subscribedAt !== null) {
        contents.subscribedAt = new Date(Math.round(output.subscribedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1EventSubscriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventSubscription(entry, context));
};
const deserializeAws_json1_1Exclusion = (output, context) => {
    let contents = {
        __type: "Exclusion",
        arn: undefined,
        attributes: undefined,
        description: undefined,
        recommendation: undefined,
        scopes: undefined,
        title: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1AttributeList(output.attributes, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.recommendation !== undefined && output.recommendation !== null) {
        contents.recommendation = output.recommendation;
    }
    if (output.scopes !== undefined && output.scopes !== null) {
        contents.scopes = deserializeAws_json1_1ScopeList(output.scopes, context);
    }
    if (output.title !== undefined && output.title !== null) {
        contents.title = output.title;
    }
    return contents;
};
const deserializeAws_json1_1ExclusionMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1Exclusion(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1ExclusionPreview = (output, context) => {
    let contents = {
        __type: "ExclusionPreview",
        attributes: undefined,
        description: undefined,
        recommendation: undefined,
        scopes: undefined,
        title: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1AttributeList(output.attributes, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.recommendation !== undefined && output.recommendation !== null) {
        contents.recommendation = output.recommendation;
    }
    if (output.scopes !== undefined && output.scopes !== null) {
        contents.scopes = deserializeAws_json1_1ScopeList(output.scopes, context);
    }
    if (output.title !== undefined && output.title !== null) {
        contents.title = output.title;
    }
    return contents;
};
const deserializeAws_json1_1ExclusionPreviewList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ExclusionPreview(entry, context));
};
const deserializeAws_json1_1FailedItemDetails = (output, context) => {
    let contents = {
        __type: "FailedItemDetails",
        failureCode: undefined,
        retryable: undefined
    };
    if (output.failureCode !== undefined && output.failureCode !== null) {
        contents.failureCode = output.failureCode;
    }
    if (output.retryable !== undefined && output.retryable !== null) {
        contents.retryable = output.retryable;
    }
    return contents;
};
const deserializeAws_json1_1FailedItems = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1FailedItemDetails(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1Finding = (output, context) => {
    let contents = {
        __type: "Finding",
        arn: undefined,
        assetAttributes: undefined,
        assetType: undefined,
        attributes: undefined,
        confidence: undefined,
        createdAt: undefined,
        description: undefined,
        id: undefined,
        indicatorOfCompromise: undefined,
        numericSeverity: undefined,
        recommendation: undefined,
        schemaVersion: undefined,
        service: undefined,
        serviceAttributes: undefined,
        severity: undefined,
        title: undefined,
        updatedAt: undefined,
        userAttributes: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.assetAttributes !== undefined && output.assetAttributes !== null) {
        contents.assetAttributes = deserializeAws_json1_1AssetAttributes(output.assetAttributes, context);
    }
    if (output.assetType !== undefined && output.assetType !== null) {
        contents.assetType = output.assetType;
    }
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1AttributeList(output.attributes, context);
    }
    if (output.confidence !== undefined && output.confidence !== null) {
        contents.confidence = output.confidence;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.indicatorOfCompromise !== undefined &&
        output.indicatorOfCompromise !== null) {
        contents.indicatorOfCompromise = output.indicatorOfCompromise;
    }
    if (output.numericSeverity !== undefined && output.numericSeverity !== null) {
        contents.numericSeverity = output.numericSeverity;
    }
    if (output.recommendation !== undefined && output.recommendation !== null) {
        contents.recommendation = output.recommendation;
    }
    if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
        contents.schemaVersion = output.schemaVersion;
    }
    if (output.service !== undefined && output.service !== null) {
        contents.service = output.service;
    }
    if (output.serviceAttributes !== undefined &&
        output.serviceAttributes !== null) {
        contents.serviceAttributes = deserializeAws_json1_1InspectorServiceAttributes(output.serviceAttributes, context);
    }
    if (output.severity !== undefined && output.severity !== null) {
        contents.severity = output.severity;
    }
    if (output.title !== undefined && output.title !== null) {
        contents.title = output.title;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    if (output.userAttributes !== undefined && output.userAttributes !== null) {
        contents.userAttributes = deserializeAws_json1_1UserAttributeList(output.userAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1FindingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Finding(entry, context));
};
const deserializeAws_json1_1GetAssessmentReportResponse = (output, context) => {
    let contents = {
        __type: "GetAssessmentReportResponse",
        status: undefined,
        url: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.url !== undefined && output.url !== null) {
        contents.url = output.url;
    }
    return contents;
};
const deserializeAws_json1_1GetExclusionsPreviewResponse = (output, context) => {
    let contents = {
        __type: "GetExclusionsPreviewResponse",
        exclusionPreviews: undefined,
        nextToken: undefined,
        previewStatus: undefined
    };
    if (output.exclusionPreviews !== undefined &&
        output.exclusionPreviews !== null) {
        contents.exclusionPreviews = deserializeAws_json1_1ExclusionPreviewList(output.exclusionPreviews, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.previewStatus !== undefined && output.previewStatus !== null) {
        contents.previewStatus = output.previewStatus;
    }
    return contents;
};
const deserializeAws_json1_1GetTelemetryMetadataResponse = (output, context) => {
    let contents = {
        __type: "GetTelemetryMetadataResponse",
        telemetryMetadata: undefined
    };
    if (output.telemetryMetadata !== undefined &&
        output.telemetryMetadata !== null) {
        contents.telemetryMetadata = deserializeAws_json1_1TelemetryMetadataList(output.telemetryMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1InspectorServiceAttributes = (output, context) => {
    let contents = {
        __type: "InspectorServiceAttributes",
        assessmentRunArn: undefined,
        rulesPackageArn: undefined,
        schemaVersion: undefined
    };
    if (output.assessmentRunArn !== undefined &&
        output.assessmentRunArn !== null) {
        contents.assessmentRunArn = output.assessmentRunArn;
    }
    if (output.rulesPackageArn !== undefined && output.rulesPackageArn !== null) {
        contents.rulesPackageArn = output.rulesPackageArn;
    }
    if (output.schemaVersion !== undefined && output.schemaVersion !== null) {
        contents.schemaVersion = output.schemaVersion;
    }
    return contents;
};
const deserializeAws_json1_1InternalException = (output, context) => {
    let contents = {
        __type: "InternalException",
        canRetry: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCrossAccountRoleException = (output, context) => {
    let contents = {
        __type: "InvalidCrossAccountRoleException",
        canRetry: undefined,
        errorCode: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        canRetry: undefined,
        errorCode: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Ipv4AddressList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Ipv6Addresses = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        canRetry: undefined,
        errorCode: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListAssessmentRunAgentsResponse = (output, context) => {
    let contents = {
        __type: "ListAssessmentRunAgentsResponse",
        assessmentRunAgents: undefined,
        nextToken: undefined
    };
    if (output.assessmentRunAgents !== undefined &&
        output.assessmentRunAgents !== null) {
        contents.assessmentRunAgents = deserializeAws_json1_1AssessmentRunAgentList(output.assessmentRunAgents, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssessmentRunsResponse = (output, context) => {
    let contents = {
        __type: "ListAssessmentRunsResponse",
        assessmentRunArns: undefined,
        nextToken: undefined
    };
    if (output.assessmentRunArns !== undefined &&
        output.assessmentRunArns !== null) {
        contents.assessmentRunArns = deserializeAws_json1_1ListReturnedArnList(output.assessmentRunArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssessmentTargetsResponse = (output, context) => {
    let contents = {
        __type: "ListAssessmentTargetsResponse",
        assessmentTargetArns: undefined,
        nextToken: undefined
    };
    if (output.assessmentTargetArns !== undefined &&
        output.assessmentTargetArns !== null) {
        contents.assessmentTargetArns = deserializeAws_json1_1ListReturnedArnList(output.assessmentTargetArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListAssessmentTemplatesResponse = (output, context) => {
    let contents = {
        __type: "ListAssessmentTemplatesResponse",
        assessmentTemplateArns: undefined,
        nextToken: undefined
    };
    if (output.assessmentTemplateArns !== undefined &&
        output.assessmentTemplateArns !== null) {
        contents.assessmentTemplateArns = deserializeAws_json1_1ListReturnedArnList(output.assessmentTemplateArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEventSubscriptionsResponse = (output, context) => {
    let contents = {
        __type: "ListEventSubscriptionsResponse",
        nextToken: undefined,
        subscriptions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.subscriptions !== undefined && output.subscriptions !== null) {
        contents.subscriptions = deserializeAws_json1_1SubscriptionList(output.subscriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListExclusionsResponse = (output, context) => {
    let contents = {
        __type: "ListExclusionsResponse",
        exclusionArns: undefined,
        nextToken: undefined
    };
    if (output.exclusionArns !== undefined && output.exclusionArns !== null) {
        contents.exclusionArns = deserializeAws_json1_1ListReturnedArnList(output.exclusionArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListFindingsResponse = (output, context) => {
    let contents = {
        __type: "ListFindingsResponse",
        findingArns: undefined,
        nextToken: undefined
    };
    if (output.findingArns !== undefined && output.findingArns !== null) {
        contents.findingArns = deserializeAws_json1_1ListReturnedArnList(output.findingArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListReturnedArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ListRulesPackagesResponse = (output, context) => {
    let contents = {
        __type: "ListRulesPackagesResponse",
        nextToken: undefined,
        rulesPackageArns: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.rulesPackageArns !== undefined &&
        output.rulesPackageArns !== null) {
        contents.rulesPackageArns = deserializeAws_json1_1ListReturnedArnList(output.rulesPackageArns, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    let contents = {
        __type: "NetworkInterface",
        ipv6Addresses: undefined,
        networkInterfaceId: undefined,
        privateDnsName: undefined,
        privateIpAddress: undefined,
        privateIpAddresses: undefined,
        publicDnsName: undefined,
        publicIp: undefined,
        securityGroups: undefined,
        subnetId: undefined,
        vpcId: undefined
    };
    if (output.ipv6Addresses !== undefined && output.ipv6Addresses !== null) {
        contents.ipv6Addresses = deserializeAws_json1_1Ipv6Addresses(output.ipv6Addresses, context);
    }
    if (output.networkInterfaceId !== undefined &&
        output.networkInterfaceId !== null) {
        contents.networkInterfaceId = output.networkInterfaceId;
    }
    if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
        contents.privateDnsName = output.privateDnsName;
    }
    if (output.privateIpAddress !== undefined &&
        output.privateIpAddress !== null) {
        contents.privateIpAddress = output.privateIpAddress;
    }
    if (output.privateIpAddresses !== undefined &&
        output.privateIpAddresses !== null) {
        contents.privateIpAddresses = deserializeAws_json1_1PrivateIpAddresses(output.privateIpAddresses, context);
    }
    if (output.publicDnsName !== undefined && output.publicDnsName !== null) {
        contents.publicDnsName = output.publicDnsName;
    }
    if (output.publicIp !== undefined && output.publicIp !== null) {
        contents.publicIp = output.publicIp;
    }
    if (output.securityGroups !== undefined && output.securityGroups !== null) {
        contents.securityGroups = deserializeAws_json1_1SecurityGroups(output.securityGroups, context);
    }
    if (output.subnetId !== undefined && output.subnetId !== null) {
        contents.subnetId = output.subnetId;
    }
    if (output.vpcId !== undefined && output.vpcId !== null) {
        contents.vpcId = output.vpcId;
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterfaces = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkInterface(entry, context));
};
const deserializeAws_json1_1NoSuchEntityException = (output, context) => {
    let contents = {
        __type: "NoSuchEntityException",
        canRetry: undefined,
        errorCode: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PreviewAgentsResponse = (output, context) => {
    let contents = {
        __type: "PreviewAgentsResponse",
        agentPreviews: undefined,
        nextToken: undefined
    };
    if (output.agentPreviews !== undefined && output.agentPreviews !== null) {
        contents.agentPreviews = deserializeAws_json1_1AgentPreviewList(output.agentPreviews, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1PreviewGenerationInProgressException = (output, context) => {
    let contents = {
        __type: "PreviewGenerationInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PrivateIp = (output, context) => {
    let contents = {
        __type: "PrivateIp",
        privateDnsName: undefined,
        privateIpAddress: undefined
    };
    if (output.privateDnsName !== undefined && output.privateDnsName !== null) {
        contents.privateDnsName = output.privateDnsName;
    }
    if (output.privateIpAddress !== undefined &&
        output.privateIpAddress !== null) {
        contents.privateIpAddress = output.privateIpAddress;
    }
    return contents;
};
const deserializeAws_json1_1PrivateIpAddresses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PrivateIp(entry, context));
};
const deserializeAws_json1_1RemoveAttributesFromFindingsResponse = (output, context) => {
    let contents = {
        __type: "RemoveAttributesFromFindingsResponse",
        failedItems: undefined
    };
    if (output.failedItems !== undefined && output.failedItems !== null) {
        contents.failedItems = deserializeAws_json1_1FailedItems(output.failedItems, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceGroup = (output, context) => {
    let contents = {
        __type: "ResourceGroup",
        arn: undefined,
        createdAt: undefined,
        tags: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1ResourceGroupTags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceGroup(entry, context));
};
const deserializeAws_json1_1ResourceGroupTag = (output, context) => {
    let contents = {
        __type: "ResourceGroupTag",
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
const deserializeAws_json1_1ResourceGroupTags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceGroupTag(entry, context));
};
const deserializeAws_json1_1RulesPackage = (output, context) => {
    let contents = {
        __type: "RulesPackage",
        arn: undefined,
        description: undefined,
        name: undefined,
        provider: undefined,
        version: undefined
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
    if (output.provider !== undefined && output.provider !== null) {
        contents.provider = output.provider;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1RulesPackageList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RulesPackage(entry, context));
};
const deserializeAws_json1_1Scope = (output, context) => {
    let contents = {
        __type: "Scope",
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
const deserializeAws_json1_1ScopeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Scope(entry, context));
};
const deserializeAws_json1_1SecurityGroup = (output, context) => {
    let contents = {
        __type: "SecurityGroup",
        groupId: undefined,
        groupName: undefined
    };
    if (output.groupId !== undefined && output.groupId !== null) {
        contents.groupId = output.groupId;
    }
    if (output.groupName !== undefined && output.groupName !== null) {
        contents.groupName = output.groupName;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroups = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SecurityGroup(entry, context));
};
const deserializeAws_json1_1ServiceTemporarilyUnavailableException = (output, context) => {
    let contents = {
        __type: "ServiceTemporarilyUnavailableException",
        canRetry: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1StartAssessmentRunResponse = (output, context) => {
    let contents = {
        __type: "StartAssessmentRunResponse",
        assessmentRunArn: undefined
    };
    if (output.assessmentRunArn !== undefined &&
        output.assessmentRunArn !== null) {
        contents.assessmentRunArn = output.assessmentRunArn;
    }
    return contents;
};
const deserializeAws_json1_1Subscription = (output, context) => {
    let contents = {
        __type: "Subscription",
        eventSubscriptions: undefined,
        resourceArn: undefined,
        topicArn: undefined
    };
    if (output.eventSubscriptions !== undefined &&
        output.eventSubscriptions !== null) {
        contents.eventSubscriptions = deserializeAws_json1_1EventSubscriptionList(output.eventSubscriptions, context);
    }
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    if (output.topicArn !== undefined && output.topicArn !== null) {
        contents.topicArn = output.topicArn;
    }
    return contents;
};
const deserializeAws_json1_1SubscriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Subscription(entry, context));
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
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TelemetryMetadata = (output, context) => {
    let contents = {
        __type: "TelemetryMetadata",
        count: undefined,
        dataSize: undefined,
        messageType: undefined
    };
    if (output.count !== undefined && output.count !== null) {
        contents.count = output.count;
    }
    if (output.dataSize !== undefined && output.dataSize !== null) {
        contents.dataSize = output.dataSize;
    }
    if (output.messageType !== undefined && output.messageType !== null) {
        contents.messageType = output.messageType;
    }
    return contents;
};
const deserializeAws_json1_1TelemetryMetadataList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TelemetryMetadata(entry, context));
};
const deserializeAws_json1_1UnsupportedFeatureException = (output, context) => {
    let contents = {
        __type: "UnsupportedFeatureException",
        canRetry: undefined,
        message: undefined
    };
    if (output.canRetry !== undefined && output.canRetry !== null) {
        contents.canRetry = output.canRetry;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UserAttributeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
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