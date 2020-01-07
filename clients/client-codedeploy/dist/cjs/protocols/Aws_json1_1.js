"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsToOnPremisesInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = serializeAws_json1_1AddTagsToOnPremisesInstancesCommand;
async function serializeAws_json1_1BatchGetApplicationRevisionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplicationRevisions";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetApplicationRevisionsCommand = serializeAws_json1_1BatchGetApplicationRevisionsCommand;
async function serializeAws_json1_1BatchGetApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetApplicationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetApplicationsCommand = serializeAws_json1_1BatchGetApplicationsCommand;
async function serializeAws_json1_1BatchGetDeploymentGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetDeploymentGroupsCommand = serializeAws_json1_1BatchGetDeploymentGroupsCommand;
async function serializeAws_json1_1BatchGetDeploymentInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetDeploymentInstancesCommand = serializeAws_json1_1BatchGetDeploymentInstancesCommand;
async function serializeAws_json1_1BatchGetDeploymentTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetDeploymentTargetsCommand = serializeAws_json1_1BatchGetDeploymentTargetsCommand;
async function serializeAws_json1_1BatchGetDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeployments";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetDeploymentsCommand = serializeAws_json1_1BatchGetDeploymentsCommand;
async function serializeAws_json1_1BatchGetOnPremisesInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetOnPremisesInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchGetOnPremisesInstancesCommand = serializeAws_json1_1BatchGetOnPremisesInstancesCommand;
async function serializeAws_json1_1ContinueDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ContinueDeployment";
    let body;
    body = JSON.stringify(serializeAws_json1_1ContinueDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ContinueDeploymentCommand = serializeAws_json1_1ContinueDeploymentCommand;
async function serializeAws_json1_1CreateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
async function serializeAws_json1_1CreateDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeployment";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDeploymentCommand = serializeAws_json1_1CreateDeploymentCommand;
async function serializeAws_json1_1CreateDeploymentConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDeploymentConfigCommand = serializeAws_json1_1CreateDeploymentConfigCommand;
async function serializeAws_json1_1CreateDeploymentGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDeploymentGroupCommand = serializeAws_json1_1CreateDeploymentGroupCommand;
async function serializeAws_json1_1DeleteApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
async function serializeAws_json1_1DeleteDeploymentConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeploymentConfigCommand = serializeAws_json1_1DeleteDeploymentConfigCommand;
async function serializeAws_json1_1DeleteDeploymentGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDeploymentGroupCommand = serializeAws_json1_1DeleteDeploymentGroupCommand;
async function serializeAws_json1_1DeleteGitHubAccountTokenCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteGitHubAccountToken";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGitHubAccountTokenCommand = serializeAws_json1_1DeleteGitHubAccountTokenCommand;
async function serializeAws_json1_1DeregisterOnPremisesInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.DeregisterOnPremisesInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterOnPremisesInstanceCommand = serializeAws_json1_1DeregisterOnPremisesInstanceCommand;
async function serializeAws_json1_1GetApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetApplicationCommand = serializeAws_json1_1GetApplicationCommand;
async function serializeAws_json1_1GetApplicationRevisionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplicationRevision";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApplicationRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetApplicationRevisionCommand = serializeAws_json1_1GetApplicationRevisionCommand;
async function serializeAws_json1_1GetDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeployment";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeploymentCommand = serializeAws_json1_1GetDeploymentCommand;
async function serializeAws_json1_1GetDeploymentConfigCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentConfig";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeploymentConfigCommand = serializeAws_json1_1GetDeploymentConfigCommand;
async function serializeAws_json1_1GetDeploymentGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeploymentGroupCommand = serializeAws_json1_1GetDeploymentGroupCommand;
async function serializeAws_json1_1GetDeploymentInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeploymentInstanceCommand = serializeAws_json1_1GetDeploymentInstanceCommand;
async function serializeAws_json1_1GetDeploymentTargetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentTarget";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentTargetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetDeploymentTargetCommand = serializeAws_json1_1GetDeploymentTargetCommand;
async function serializeAws_json1_1GetOnPremisesInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.GetOnPremisesInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetOnPremisesInstanceCommand = serializeAws_json1_1GetOnPremisesInstanceCommand;
async function serializeAws_json1_1ListApplicationRevisionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplicationRevisions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationRevisionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationRevisionsCommand = serializeAws_json1_1ListApplicationRevisionsCommand;
async function serializeAws_json1_1ListApplicationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplications";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
async function serializeAws_json1_1ListDeploymentConfigsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentConfigs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentConfigsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeploymentConfigsCommand = serializeAws_json1_1ListDeploymentConfigsCommand;
async function serializeAws_json1_1ListDeploymentGroupsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentGroups";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeploymentGroupsCommand = serializeAws_json1_1ListDeploymentGroupsCommand;
async function serializeAws_json1_1ListDeploymentInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeploymentInstancesCommand = serializeAws_json1_1ListDeploymentInstancesCommand;
async function serializeAws_json1_1ListDeploymentTargetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentTargets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentTargetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeploymentTargetsCommand = serializeAws_json1_1ListDeploymentTargetsCommand;
async function serializeAws_json1_1ListDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeployments";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDeploymentsCommand = serializeAws_json1_1ListDeploymentsCommand;
async function serializeAws_json1_1ListGitHubAccountTokenNamesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListGitHubAccountTokenNames";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGitHubAccountTokenNamesCommand = serializeAws_json1_1ListGitHubAccountTokenNamesCommand;
async function serializeAws_json1_1ListOnPremisesInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListOnPremisesInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListOnPremisesInstancesCommand = serializeAws_json1_1ListOnPremisesInstancesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand;
async function serializeAws_json1_1RegisterApplicationRevisionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterApplicationRevision";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterApplicationRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterApplicationRevisionCommand = serializeAws_json1_1RegisterApplicationRevisionCommand;
async function serializeAws_json1_1RegisterOnPremisesInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterOnPremisesInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterOnPremisesInstanceCommand = serializeAws_json1_1RegisterOnPremisesInstanceCommand;
async function serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand;
async function serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination";
    let body;
    body = JSON.stringify(serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand;
async function serializeAws_json1_1StopDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.StopDeployment";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopDeploymentCommand = serializeAws_json1_1StopDeploymentCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateApplicationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateApplication";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
async function serializeAws_json1_1UpdateDeploymentGroupCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateDeploymentGroup";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateDeploymentGroupCommand = serializeAws_json1_1UpdateDeploymentGroupCommand;
async function deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand;
async function deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceLimitExceededException":
        case "com.amazonaws.codedeploy#InstanceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.codedeploy#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetApplicationRevisionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetApplicationRevisionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetApplicationRevisionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetApplicationRevisionsCommand = deserializeAws_json1_1BatchGetApplicationRevisionsCommand;
async function deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetApplicationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetApplicationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetApplicationsCommand = deserializeAws_json1_1BatchGetApplicationsCommand;
async function deserializeAws_json1_1BatchGetApplicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetDeploymentGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetDeploymentGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetDeploymentGroupsCommand = deserializeAws_json1_1BatchGetDeploymentGroupsCommand;
async function deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetDeploymentInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetDeploymentInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetDeploymentInstancesCommand = deserializeAws_json1_1BatchGetDeploymentInstancesCommand;
async function deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceIdRequiredException":
        case "com.amazonaws.codedeploy#InstanceIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetDeploymentTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentTargetsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetDeploymentTargetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetDeploymentTargetsCommand = deserializeAws_json1_1BatchGetDeploymentTargetsCommand;
async function deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentTargetDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentTargetIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentTargetListSizeExceededException":
        case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentTargetIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetDeploymentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetDeploymentsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetDeploymentsCommand = deserializeAws_json1_1BatchGetDeploymentsCommand;
async function deserializeAws_json1_1BatchGetDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1BatchGetOnPremisesInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetOnPremisesInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchGetOnPremisesInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = deserializeAws_json1_1BatchGetOnPremisesInstancesCommand;
async function deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ContinueDeploymentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ContinueDeploymentCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ContinueDeploymentCommand = deserializeAws_json1_1ContinueDeploymentCommand;
async function deserializeAws_json1_1ContinueDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIsNotInReadyStateException":
        case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentStatusException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentWaitTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateApplicationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
async function deserializeAws_json1_1CreateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationAlreadyExistsException":
        case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationLimitExceededException":
        case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDeploymentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDeploymentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDeploymentCommand = deserializeAws_json1_1CreateDeploymentCommand;
async function deserializeAws_json1_1CreateDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DescriptionTooLongException":
        case "com.amazonaws.codedeploy#DescriptionTooLongException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFileExistsBehaviorException":
        case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGitHubAccountTokenException":
        case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIgnoreApplicationStopFailuresValueException":
        case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetInstancesException":
        case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidUpdateOutdatedInstancesOnlyValueException":
        case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionDoesNotExistException":
        case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDeploymentConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDeploymentConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDeploymentConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDeploymentConfigCommand = deserializeAws_json1_1CreateDeploymentConfigCommand;
async function deserializeAws_json1_1CreateDeploymentConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentConfigAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMinimumHealthyHostValueException":
        case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrafficRoutingConfigurationException":
        case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateDeploymentGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDeploymentGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDeploymentGroupCommand = deserializeAws_json1_1CreateDeploymentGroupCommand;
async function deserializeAws_json1_1CreateDeploymentGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlarmsLimitExceededException":
        case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ECSServiceMappingLimitExceededException":
        case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAlarmConfigException":
        case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBlueGreenDeploymentConfigurationException":
        case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentStyleException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEC2TagCombinationException":
        case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEC2TagException":
        case "com.amazonaws.codedeploy#InvalidEC2TagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidECSServiceException":
        case "com.amazonaws.codedeploy#InvalidECSServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codedeploy#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOnPremisesTagCombinationException":
        case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetGroupPairException":
        case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTriggerConfigException":
        case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecycleHookLimitExceededException":
        case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RoleRequiredException":
        case "com.amazonaws.codedeploy#RoleRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RoleRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagSetListLimitExceededException":
        case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TriggerTargetsLimitExceededException":
        case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
async function deserializeAws_json1_1DeleteApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDeploymentConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeploymentConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeploymentConfigCommand = deserializeAws_json1_1DeleteDeploymentConfigCommand;
async function deserializeAws_json1_1DeleteDeploymentConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentConfigInUseException":
        case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOperationException":
        case "com.amazonaws.codedeploy#InvalidOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteDeploymentGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDeploymentGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDeploymentGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDeploymentGroupCommand = deserializeAws_json1_1DeleteDeploymentGroupCommand;
async function deserializeAws_json1_1DeleteDeploymentGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGitHubAccountTokenCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGitHubAccountTokenOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGitHubAccountTokenOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGitHubAccountTokenCommand = deserializeAws_json1_1DeleteGitHubAccountTokenCommand;
async function deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "GitHubAccountTokenDoesNotExistException":
        case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "GitHubAccountTokenNameRequiredException":
        case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGitHubAccountTokenNameException":
        case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.codedeploy#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceValidationException":
        case "com.amazonaws.codedeploy#ResourceValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterOnPremisesInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = deserializeAws_json1_1DeregisterOnPremisesInstanceCommand;
async function deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApplicationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetApplicationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetApplicationCommand = deserializeAws_json1_1GetApplicationCommand;
async function deserializeAws_json1_1GetApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetApplicationRevisionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetApplicationRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApplicationRevisionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetApplicationRevisionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetApplicationRevisionCommand = deserializeAws_json1_1GetApplicationRevisionCommand;
async function deserializeAws_json1_1GetApplicationRevisionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionDoesNotExistException":
        case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeploymentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeploymentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeploymentCommand = deserializeAws_json1_1GetDeploymentCommand;
async function deserializeAws_json1_1GetDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeploymentConfigCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeploymentConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentConfigOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeploymentConfigOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeploymentConfigCommand = deserializeAws_json1_1GetDeploymentConfigCommand;
async function deserializeAws_json1_1GetDeploymentConfigCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeploymentGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeploymentGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeploymentGroupCommand = deserializeAws_json1_1GetDeploymentGroupCommand;
async function deserializeAws_json1_1GetDeploymentGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeploymentInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeploymentInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentInstanceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeploymentInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeploymentInstanceCommand = deserializeAws_json1_1GetDeploymentInstanceCommand;
async function deserializeAws_json1_1GetDeploymentInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceDoesNotExistException":
        case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceIdRequiredException":
        case "com.amazonaws.codedeploy#InstanceIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetDeploymentTargetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetDeploymentTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentTargetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetDeploymentTargetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetDeploymentTargetCommand = deserializeAws_json1_1GetDeploymentTargetCommand;
async function deserializeAws_json1_1GetDeploymentTargetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentTargetDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentTargetIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentTargetIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetOnPremisesInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetOnPremisesInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOnPremisesInstanceOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetOnPremisesInstanceOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetOnPremisesInstanceCommand = deserializeAws_json1_1GetOnPremisesInstanceCommand;
async function deserializeAws_json1_1GetOnPremisesInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListApplicationRevisionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationRevisionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationRevisionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationRevisionsCommand = deserializeAws_json1_1ListApplicationRevisionsCommand;
async function deserializeAws_json1_1ListApplicationRevisionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BucketNameFilterRequiredException":
        case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBucketNameFilterException":
        case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeployedStateFilterException":
        case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyPrefixFilterException":
        case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSortByException":
        case "com.amazonaws.codedeploy#InvalidSortByException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSortOrderException":
        case "com.amazonaws.codedeploy#InvalidSortOrderException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSortOrderExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListApplicationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListApplicationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
async function deserializeAws_json1_1ListApplicationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeploymentConfigsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeploymentConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentConfigsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeploymentConfigsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeploymentConfigsCommand = deserializeAws_json1_1ListDeploymentConfigsCommand;
async function deserializeAws_json1_1ListDeploymentConfigsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeploymentGroupsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeploymentGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentGroupsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeploymentGroupsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeploymentGroupsCommand = deserializeAws_json1_1ListDeploymentGroupsCommand;
async function deserializeAws_json1_1ListDeploymentGroupsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeploymentInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeploymentInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeploymentInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeploymentInstancesCommand = deserializeAws_json1_1ListDeploymentInstancesCommand;
async function deserializeAws_json1_1ListDeploymentInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceStatusException":
        case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetFilterNameException":
        case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeploymentTargetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeploymentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentTargetsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeploymentTargetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeploymentTargetsCommand = deserializeAws_json1_1ListDeploymentTargetsCommand;
async function deserializeAws_json1_1ListDeploymentTargetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceStatusException":
        case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListDeploymentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDeploymentsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDeploymentsCommand = deserializeAws_json1_1ListDeploymentsCommand;
async function deserializeAws_json1_1ListDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentStatusException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.codedeploy#InvalidTimeRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListGitHubAccountTokenNamesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGitHubAccountTokenNamesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGitHubAccountTokenNamesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = deserializeAws_json1_1ListGitHubAccountTokenNamesCommand;
async function deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.codedeploy#OperationNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceValidationException":
        case "com.amazonaws.codedeploy#ResourceValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListOnPremisesInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListOnPremisesInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOnPremisesInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListOnPremisesInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListOnPremisesInstancesCommand = deserializeAws_json1_1ListOnPremisesInstancesCommand;
async function deserializeAws_json1_1ListOnPremisesInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRegistrationStatusException":
        case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagFilterException":
        case "com.amazonaws.codedeploy#InvalidTagFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutLifecycleEventHookExecutionStatusOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand;
async function deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLifecycleEventHookExecutionIdException":
        case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLifecycleEventHookExecutionStatusException":
        case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecycleEventAlreadyCompletedException":
        case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterApplicationRevisionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterApplicationRevisionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterApplicationRevisionCommand = deserializeAws_json1_1RegisterApplicationRevisionCommand;
async function deserializeAws_json1_1RegisterApplicationRevisionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DescriptionTooLongException":
        case "com.amazonaws.codedeploy#DescriptionTooLongException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterOnPremisesInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterOnPremisesInstanceCommand = deserializeAws_json1_1RegisterOnPremisesInstanceCommand;
async function deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "IamArnRequiredException":
        case "com.amazonaws.codedeploy#IamArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IamArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IamSessionArnAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IamUserArnAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IamUserArnRequiredException":
        case "com.amazonaws.codedeploy#IamUserArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IamUserArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNameAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIamSessionArnException":
        case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidIamUserArnException":
        case "com.amazonaws.codedeploy#InvalidIamUserArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidIamUserArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MultipleIamArnsProvidedException":
        case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand;
async function deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InstanceLimitExceededException":
        case "com.amazonaws.codedeploy#InstanceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.codedeploy#TagLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand;
async function deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopDeploymentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopDeploymentOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDeploymentOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopDeploymentCommand = deserializeAws_json1_1StopDeploymentCommand;
async function deserializeAws_json1_1StopDeploymentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateApplicationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
async function deserializeAws_json1_1UpdateApplicationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ApplicationAlreadyExistsException":
        case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateDeploymentGroupCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeploymentGroupOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDeploymentGroupOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateDeploymentGroupCommand = deserializeAws_json1_1UpdateDeploymentGroupCommand;
async function deserializeAws_json1_1UpdateDeploymentGroupCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlarmsLimitExceededException":
        case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ECSServiceMappingLimitExceededException":
        case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAlarmConfigException":
        case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidBlueGreenDeploymentConfigurationException":
        case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidDeploymentStyleException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEC2TagCombinationException":
        case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEC2TagException":
        case "com.amazonaws.codedeploy#InvalidEC2TagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidECSServiceException":
        case "com.amazonaws.codedeploy#InvalidECSServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInputException":
        case "com.amazonaws.codedeploy#InvalidInputException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidOnPremisesTagCombinationException":
        case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTargetGroupPairException":
        case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTriggerConfigException":
        case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LifecycleHookLimitExceededException":
        case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagSetListLimitExceededException":
        case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TriggerTargetsLimitExceededException":
        case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1AlarmsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlarmsLimitExceededException(body, context);
    const contents = Object.assign({ name: "AlarmsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ApplicationAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationDoesNotExistException(body, context);
    const contents = Object.assign({ name: "ApplicationDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationLimitExceededException(body, context);
    const contents = Object.assign({ name: "ApplicationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationNameRequiredException(body, context);
    const contents = Object.assign({ name: "ApplicationNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ArnNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ArnNotSupportedException(body, context);
    const contents = Object.assign({ name: "ArnNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BatchLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BatchLimitExceededException(body, context);
    const contents = Object.assign({ name: "BatchLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BucketNameFilterRequiredException(body, context);
    const contents = Object.assign({ name: "BucketNameFilterRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentAlreadyCompletedException(body, context);
    const contents = Object.assign({ name: "DeploymentAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "DeploymentConfigAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigDoesNotExistException(body, context);
    const contents = Object.assign({ name: "DeploymentConfigDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigInUseException(body, context);
    const contents = Object.assign({ name: "DeploymentConfigInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigLimitExceededException(body, context);
    const contents = Object.assign({ name: "DeploymentConfigLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigNameRequiredException(body, context);
    const contents = Object.assign({ name: "DeploymentConfigNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentDoesNotExistException(body, context);
    const contents = Object.assign({ name: "DeploymentDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "DeploymentGroupAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupDoesNotExistException(body, context);
    const contents = Object.assign({ name: "DeploymentGroupDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupLimitExceededException(body, context);
    const contents = Object.assign({ name: "DeploymentGroupLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupNameRequiredException(body, context);
    const contents = Object.assign({ name: "DeploymentGroupNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentIdRequiredException(body, context);
    const contents = Object.assign({ name: "DeploymentIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentIsNotInReadyStateException(body, context);
    const contents = Object.assign({ name: "DeploymentIsNotInReadyStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentLimitExceededException(body, context);
    const contents = Object.assign({ name: "DeploymentLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentNotStartedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentNotStartedException(body, context);
    const contents = Object.assign({ name: "DeploymentNotStartedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetDoesNotExistException(body, context);
    const contents = Object.assign({ name: "DeploymentTargetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetIdRequiredException(body, context);
    const contents = Object.assign({ name: "DeploymentTargetIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetListSizeExceededException(body, context);
    const contents = Object.assign({ name: "DeploymentTargetListSizeExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DescriptionTooLongExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DescriptionTooLongException(body, context);
    const contents = Object.assign({ name: "DescriptionTooLongException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ECSServiceMappingLimitExceededException(body, context);
    const contents = Object.assign({ name: "ECSServiceMappingLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(body, context);
    const contents = Object.assign({ name: "GitHubAccountTokenDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(body, context);
    const contents = Object.assign({ name: "GitHubAccountTokenNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IamArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamArnRequiredException(body, context);
    const contents = Object.assign({ name: "IamArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(body, context);
    const contents = Object.assign({ name: "IamSessionArnAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(body, context);
    const contents = Object.assign({ name: "IamUserArnAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IamUserArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamUserArnRequiredException(body, context);
    const contents = Object.assign({ name: "IamUserArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceDoesNotExistException(body, context);
    const contents = Object.assign({ name: "InstanceDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceIdRequiredException(body, context);
    const contents = Object.assign({ name: "InstanceIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceLimitExceededException(body, context);
    const contents = Object.assign({ name: "InstanceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(body, context);
    const contents = Object.assign({ name: "InstanceNameAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNameRequiredException(body, context);
    const contents = Object.assign({ name: "InstanceNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNotRegisteredException(body, context);
    const contents = Object.assign({ name: "InstanceNotRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAlarmConfigException(body, context);
    const contents = Object.assign({ name: "InvalidAlarmConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidApplicationNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApplicationNameException(body, context);
    const contents = Object.assign({ name: "InvalidApplicationNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = Object.assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutoRollbackConfigException(body, context);
    const contents = Object.assign({ name: "InvalidAutoRollbackConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutoScalingGroupException(body, context);
    const contents = Object.assign({ name: "InvalidAutoScalingGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidBlueGreenDeploymentConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBucketNameFilterException(body, context);
    const contents = Object.assign({ name: "InvalidBucketNameFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidComputePlatformExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidComputePlatformException(body, context);
    const contents = Object.assign({ name: "InvalidComputePlatformException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeployedStateFilterException(body, context);
    const contents = Object.assign({ name: "InvalidDeployedStateFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentConfigNameException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentConfigNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentGroupNameException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentGroupNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentIdException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentInstanceTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentStatusException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentStyleException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentStyleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentTargetIdException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentTargetIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentWaitTypeException(body, context);
    const contents = Object.assign({ name: "InvalidDeploymentWaitTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEC2TagCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidEC2TagCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEC2TagException(body, context);
    const contents = Object.assign({ name: "InvalidEC2TagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidECSServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidECSServiceException(body, context);
    const contents = Object.assign({ name: "InvalidECSServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileExistsBehaviorException(body, context);
    const contents = Object.assign({ name: "InvalidFileExistsBehaviorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenException(body, context);
    const contents = Object.assign({ name: "InvalidGitHubAccountTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(body, context);
    const contents = Object.assign({ name: "InvalidGitHubAccountTokenNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIamSessionArnException(body, context);
    const contents = Object.assign({ name: "InvalidIamSessionArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidIamUserArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIamUserArnException(body, context);
    const contents = Object.assign({ name: "InvalidIamUserArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(body, context);
    const contents = Object.assign({ name: "InvalidIgnoreApplicationStopFailuresValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = Object.assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInstanceNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceNameException(body, context);
    const contents = Object.assign({ name: "InvalidInstanceNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceStatusException(body, context);
    const contents = Object.assign({ name: "InvalidInstanceStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceTypeException(body, context);
    const contents = Object.assign({ name: "InvalidInstanceTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyPrefixFilterException(body, context);
    const contents = Object.assign({ name: "InvalidKeyPrefixFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(body, context);
    const contents = Object.assign({ name: "InvalidLifecycleEventHookExecutionIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(body, context);
    const contents = Object.assign({ name: "InvalidLifecycleEventHookExecutionStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLoadBalancerInfoException(body, context);
    const contents = Object.assign({ name: "InvalidLoadBalancerInfoException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(body, context);
    const contents = Object.assign({ name: "InvalidMinimumHealthyHostValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidOnPremisesTagCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = Object.assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRegistrationStatusException(body, context);
    const contents = Object.assign({ name: "InvalidRegistrationStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRevisionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRevisionException(body, context);
    const contents = Object.assign({ name: "InvalidRevisionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
    const contents = Object.assign({ name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSortByExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortByException(body, context);
    const contents = Object.assign({ name: "InvalidSortByException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSortOrderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortOrderException(body, context);
    const contents = Object.assign({ name: "InvalidSortOrderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = Object.assign({ name: "InvalidTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagFilterException(body, context);
    const contents = Object.assign({ name: "InvalidTagFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagsToAddExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsToAddException(body, context);
    const contents = Object.assign({ name: "InvalidTagsToAddException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetFilterNameException(body, context);
    const contents = Object.assign({ name: "InvalidTargetFilterNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetGroupPairException(body, context);
    const contents = Object.assign({ name: "InvalidTargetGroupPairException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetInstancesException(body, context);
    const contents = Object.assign({ name: "InvalidTargetInstancesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = Object.assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(body, context);
    const contents = Object.assign({ name: "InvalidTrafficRoutingConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTriggerConfigException(body, context);
    const contents = Object.assign({ name: "InvalidTriggerConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(body, context);
    const contents = Object.assign({ name: "InvalidUpdateOutdatedInstancesOnlyValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(body, context);
    const contents = Object.assign({ name: "LifecycleEventAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecycleHookLimitExceededException(body, context);
    const contents = Object.assign({ name: "LifecycleHookLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleIamArnsProvidedException(body, context);
    const contents = Object.assign({ name: "MultipleIamArnsProvidedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = Object.assign({ name: "OperationNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceArnRequiredException(body, context);
    const contents = Object.assign({ name: "ResourceArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceValidationException(body, context);
    const contents = Object.assign({ name: "ResourceValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionDoesNotExistException(body, context);
    const contents = Object.assign({ name: "RevisionDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RevisionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionRequiredException(body, context);
    const contents = Object.assign({ name: "RevisionRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1RoleRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RoleRequiredException(body, context);
    const contents = Object.assign({ name: "RoleRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = Object.assign({ name: "TagLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagRequiredException(body, context);
    const contents = Object.assign({ name: "TagRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagSetListLimitExceededException(body, context);
    const contents = Object.assign({ name: "TagSetListLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TriggerTargetsLimitExceededException(body, context);
    const contents = Object.assign({ name: "TriggerTargetsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(body, context);
    const contents = Object.assign({ name: "UnsupportedActionForDeploymentTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsToOnPremisesInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(input.instanceNames, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Alarm = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1AlarmConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.alarms !== undefined) {
        bodyParams["alarms"] = serializeAws_json1_1AlarmList(input.alarms, context);
    }
    if (input.enabled !== undefined) {
        bodyParams["enabled"] = input.enabled;
    }
    if (input.ignorePollAlarmFailure !== undefined) {
        bodyParams["ignorePollAlarmFailure"] = input.ignorePollAlarmFailure;
    }
    return bodyParams;
};
const serializeAws_json1_1AlarmList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Alarm(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AppSpecContent = (input, context) => {
    const bodyParams = {};
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    if (input.sha256 !== undefined) {
        bodyParams["sha256"] = input.sha256;
    }
    return bodyParams;
};
const serializeAws_json1_1ApplicationsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AutoRollbackConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.enabled !== undefined) {
        bodyParams["enabled"] = input.enabled;
    }
    if (input.events !== undefined) {
        bodyParams["events"] = serializeAws_json1_1AutoRollbackEventsList(input.events, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AutoRollbackEventsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AutoScalingGroupNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1BatchGetApplicationRevisionsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.revisions !== undefined) {
        bodyParams["revisions"] = serializeAws_json1_1RevisionLocationList(input.revisions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetApplicationsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationNames !== undefined) {
        bodyParams["applicationNames"] = serializeAws_json1_1ApplicationsList(input.applicationNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetDeploymentGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.deploymentGroupNames !== undefined) {
        bodyParams["deploymentGroupNames"] = serializeAws_json1_1DeploymentGroupsList(input.deploymentGroupNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetDeploymentInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.instanceIds !== undefined) {
        bodyParams["instanceIds"] = serializeAws_json1_1InstancesList(input.instanceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetDeploymentTargetsInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.targetIds !== undefined) {
        bodyParams["targetIds"] = serializeAws_json1_1TargetIdList(input.targetIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetDeploymentsInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentIds !== undefined) {
        bodyParams["deploymentIds"] = serializeAws_json1_1DeploymentsList(input.deploymentIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchGetOnPremisesInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(input.instanceNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BlueGreenDeploymentConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.deploymentReadyOption !== undefined) {
        bodyParams["deploymentReadyOption"] = serializeAws_json1_1DeploymentReadyOption(input.deploymentReadyOption, context);
    }
    if (input.greenFleetProvisioningOption !== undefined) {
        bodyParams["greenFleetProvisioningOption"] = serializeAws_json1_1GreenFleetProvisioningOption(input.greenFleetProvisioningOption, context);
    }
    if (input.terminateBlueInstancesOnDeploymentSuccess !== undefined) {
        bodyParams["terminateBlueInstancesOnDeploymentSuccess"] = serializeAws_json1_1BlueInstanceTerminationOption(input.terminateBlueInstancesOnDeploymentSuccess, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BlueInstanceTerminationOption = (input, context) => {
    const bodyParams = {};
    if (input.action !== undefined) {
        bodyParams["action"] = input.action;
    }
    if (input.terminationWaitTimeInMinutes !== undefined) {
        bodyParams["terminationWaitTimeInMinutes"] =
            input.terminationWaitTimeInMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1ContinueDeploymentInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.deploymentWaitType !== undefined) {
        bodyParams["deploymentWaitType"] = input.deploymentWaitType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateApplicationInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.computePlatform !== undefined) {
        bodyParams["computePlatform"] = input.computePlatform;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDeploymentConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.computePlatform !== undefined) {
        bodyParams["computePlatform"] = input.computePlatform;
    }
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    if (input.minimumHealthyHosts !== undefined) {
        bodyParams["minimumHealthyHosts"] = serializeAws_json1_1MinimumHealthyHosts(input.minimumHealthyHosts, context);
    }
    if (input.trafficRoutingConfig !== undefined) {
        bodyParams["trafficRoutingConfig"] = serializeAws_json1_1TrafficRoutingConfig(input.trafficRoutingConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDeploymentGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.alarmConfiguration !== undefined) {
        bodyParams["alarmConfiguration"] = serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context);
    }
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.autoRollbackConfiguration !== undefined) {
        bodyParams["autoRollbackConfiguration"] = serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context);
    }
    if (input.autoScalingGroups !== undefined) {
        bodyParams["autoScalingGroups"] = serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context);
    }
    if (input.blueGreenDeploymentConfiguration !== undefined) {
        bodyParams["blueGreenDeploymentConfiguration"] = serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context);
    }
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    if (input.deploymentGroupName !== undefined) {
        bodyParams["deploymentGroupName"] = input.deploymentGroupName;
    }
    if (input.deploymentStyle !== undefined) {
        bodyParams["deploymentStyle"] = serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context);
    }
    if (input.ec2TagFilters !== undefined) {
        bodyParams["ec2TagFilters"] = serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context);
    }
    if (input.ec2TagSet !== undefined) {
        bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(input.ec2TagSet, context);
    }
    if (input.ecsServices !== undefined) {
        bodyParams["ecsServices"] = serializeAws_json1_1ECSServiceList(input.ecsServices, context);
    }
    if (input.loadBalancerInfo !== undefined) {
        bodyParams["loadBalancerInfo"] = serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context);
    }
    if (input.onPremisesInstanceTagFilters !== undefined) {
        bodyParams["onPremisesInstanceTagFilters"] = serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context);
    }
    if (input.onPremisesTagSet !== undefined) {
        bodyParams["onPremisesTagSet"] = serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context);
    }
    if (input.serviceRoleArn !== undefined) {
        bodyParams["serviceRoleArn"] = input.serviceRoleArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    if (input.triggerConfigurations !== undefined) {
        bodyParams["triggerConfigurations"] = serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDeploymentInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.autoRollbackConfiguration !== undefined) {
        bodyParams["autoRollbackConfiguration"] = serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context);
    }
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    if (input.deploymentGroupName !== undefined) {
        bodyParams["deploymentGroupName"] = input.deploymentGroupName;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.fileExistsBehavior !== undefined) {
        bodyParams["fileExistsBehavior"] = input.fileExistsBehavior;
    }
    if (input.ignoreApplicationStopFailures !== undefined) {
        bodyParams["ignoreApplicationStopFailures"] =
            input.ignoreApplicationStopFailures;
    }
    if (input.revision !== undefined) {
        bodyParams["revision"] = serializeAws_json1_1RevisionLocation(input.revision, context);
    }
    if (input.targetInstances !== undefined) {
        bodyParams["targetInstances"] = serializeAws_json1_1TargetInstances(input.targetInstances, context);
    }
    if (input.updateOutdatedInstancesOnly !== undefined) {
        bodyParams["updateOutdatedInstancesOnly"] =
            input.updateOutdatedInstancesOnly;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteApplicationInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDeploymentConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDeploymentGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.deploymentGroupName !== undefined) {
        bodyParams["deploymentGroupName"] = input.deploymentGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGitHubAccountTokenInput = (input, context) => {
    const bodyParams = {};
    if (input.tokenName !== undefined) {
        bodyParams["tokenName"] = input.tokenName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentGroupsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeploymentReadyOption = (input, context) => {
    const bodyParams = {};
    if (input.actionOnTimeout !== undefined) {
        bodyParams["actionOnTimeout"] = input.actionOnTimeout;
    }
    if (input.waitTimeInMinutes !== undefined) {
        bodyParams["waitTimeInMinutes"] = input.waitTimeInMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentStatusList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeploymentStyle = (input, context) => {
    const bodyParams = {};
    if (input.deploymentOption !== undefined) {
        bodyParams["deploymentOption"] = input.deploymentOption;
    }
    if (input.deploymentType !== undefined) {
        bodyParams["deploymentType"] = input.deploymentType;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1EC2TagFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1EC2TagFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EC2TagFilter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1EC2TagSet = (input, context) => {
    const bodyParams = {};
    if (input.ec2TagSetList !== undefined) {
        bodyParams["ec2TagSetList"] = serializeAws_json1_1EC2TagSetList(input.ec2TagSetList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EC2TagSetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EC2TagFilterList(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ECSService = (input, context) => {
    const bodyParams = {};
    if (input.clusterName !== undefined) {
        bodyParams["clusterName"] = input.clusterName;
    }
    if (input.serviceName !== undefined) {
        bodyParams["serviceName"] = input.serviceName;
    }
    return bodyParams;
};
const serializeAws_json1_1ECSServiceList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ECSService(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ELBInfo = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1ELBInfoList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ELBInfo(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetApplicationInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetApplicationRevisionInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.revision !== undefined) {
        bodyParams["revision"] = serializeAws_json1_1RevisionLocation(input.revision, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeploymentConfigInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeploymentGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.deploymentGroupName !== undefined) {
        bodyParams["deploymentGroupName"] = input.deploymentGroupName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeploymentInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeploymentInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.instanceId !== undefined) {
        bodyParams["instanceId"] = input.instanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetDeploymentTargetInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.targetId !== undefined) {
        bodyParams["targetId"] = input.targetId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetOnPremisesInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1GitHubLocation = (input, context) => {
    const bodyParams = {};
    if (input.commitId !== undefined) {
        bodyParams["commitId"] = input.commitId;
    }
    if (input.repository !== undefined) {
        bodyParams["repository"] = input.repository;
    }
    return bodyParams;
};
const serializeAws_json1_1GreenFleetProvisioningOption = (input, context) => {
    const bodyParams = {};
    if (input.action !== undefined) {
        bodyParams["action"] = input.action;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceStatusList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstanceTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1InstancesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListApplicationRevisionsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.deployed !== undefined) {
        bodyParams["deployed"] = input.deployed;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.s3Bucket !== undefined) {
        bodyParams["s3Bucket"] = input.s3Bucket;
    }
    if (input.s3KeyPrefix !== undefined) {
        bodyParams["s3KeyPrefix"] = input.s3KeyPrefix;
    }
    if (input.sortBy !== undefined) {
        bodyParams["sortBy"] = input.sortBy;
    }
    if (input.sortOrder !== undefined) {
        bodyParams["sortOrder"] = input.sortOrder;
    }
    return bodyParams;
};
const serializeAws_json1_1ListApplicationsInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeploymentConfigsInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeploymentGroupsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeploymentInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.instanceStatusFilter !== undefined) {
        bodyParams["instanceStatusFilter"] = serializeAws_json1_1InstanceStatusList(input.instanceStatusFilter, context);
    }
    if (input.instanceTypeFilter !== undefined) {
        bodyParams["instanceTypeFilter"] = serializeAws_json1_1InstanceTypeList(input.instanceTypeFilter, context);
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeploymentTargetsInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.targetFilters !== undefined) {
        bodyParams["targetFilters"] = serializeAws_json1_1TargetFilters(input.targetFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListDeploymentsInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.createTimeRange !== undefined) {
        bodyParams["createTimeRange"] = serializeAws_json1_1TimeRange(input.createTimeRange, context);
    }
    if (input.deploymentGroupName !== undefined) {
        bodyParams["deploymentGroupName"] = input.deploymentGroupName;
    }
    if (input.includeOnlyStatuses !== undefined) {
        bodyParams["includeOnlyStatuses"] = serializeAws_json1_1DeploymentStatusList(input.includeOnlyStatuses, context);
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGitHubAccountTokenNamesInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListOnPremisesInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.registrationStatus !== undefined) {
        bodyParams["registrationStatus"] = input.registrationStatus;
    }
    if (input.tagFilters !== undefined) {
        bodyParams["tagFilters"] = serializeAws_json1_1TagFilterList(input.tagFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListenerArnList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1LoadBalancerInfo = (input, context) => {
    const bodyParams = {};
    if (input.elbInfoList !== undefined) {
        bodyParams["elbInfoList"] = serializeAws_json1_1ELBInfoList(input.elbInfoList, context);
    }
    if (input.targetGroupInfoList !== undefined) {
        bodyParams["targetGroupInfoList"] = serializeAws_json1_1TargetGroupInfoList(input.targetGroupInfoList, context);
    }
    if (input.targetGroupPairInfoList !== undefined) {
        bodyParams["targetGroupPairInfoList"] = serializeAws_json1_1TargetGroupPairInfoList(input.targetGroupPairInfoList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1MinimumHealthyHosts = (input, context) => {
    const bodyParams = {};
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1OnPremisesTagSet = (input, context) => {
    const bodyParams = {};
    if (input.onPremisesTagSetList !== undefined) {
        bodyParams["onPremisesTagSetList"] = serializeAws_json1_1OnPremisesTagSetList(input.onPremisesTagSetList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1OnPremisesTagSetList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TagFilterList(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    if (input.lifecycleEventHookExecutionId !== undefined) {
        bodyParams["lifecycleEventHookExecutionId"] =
            input.lifecycleEventHookExecutionId;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1RawString = (input, context) => {
    const bodyParams = {};
    if (input.content !== undefined) {
        bodyParams["content"] = input.content;
    }
    if (input.sha256 !== undefined) {
        bodyParams["sha256"] = input.sha256;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterApplicationRevisionInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.description !== undefined) {
        bodyParams["description"] = input.description;
    }
    if (input.revision !== undefined) {
        bodyParams["revision"] = serializeAws_json1_1RevisionLocation(input.revision, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterOnPremisesInstanceInput = (input, context) => {
    const bodyParams = {};
    if (input.iamSessionArn !== undefined) {
        bodyParams["iamSessionArn"] = input.iamSessionArn;
    }
    if (input.iamUserArn !== undefined) {
        bodyParams["iamUserArn"] = input.iamUserArn;
    }
    if (input.instanceName !== undefined) {
        bodyParams["instanceName"] = input.instanceName;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.instanceNames !== undefined) {
        bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(input.instanceNames, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RevisionLocation = (input, context) => {
    const bodyParams = {};
    if (input.appSpecContent !== undefined) {
        bodyParams["appSpecContent"] = serializeAws_json1_1AppSpecContent(input.appSpecContent, context);
    }
    if (input.gitHubLocation !== undefined) {
        bodyParams["gitHubLocation"] = serializeAws_json1_1GitHubLocation(input.gitHubLocation, context);
    }
    if (input.revisionType !== undefined) {
        bodyParams["revisionType"] = input.revisionType;
    }
    if (input.s3Location !== undefined) {
        bodyParams["s3Location"] = serializeAws_json1_1S3Location(input.s3Location, context);
    }
    if (input.string !== undefined) {
        bodyParams["string"] = serializeAws_json1_1RawString(input.string, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RevisionLocationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1RevisionLocation(entry, context));
    }
    return contents;
};
const serializeAws_json1_1S3Location = (input, context) => {
    const bodyParams = {};
    if (input.bucket !== undefined) {
        bodyParams["bucket"] = input.bucket;
    }
    if (input.bundleType !== undefined) {
        bodyParams["bundleType"] = input.bundleType;
    }
    if (input.eTag !== undefined) {
        bodyParams["eTag"] = input.eTag;
    }
    if (input.key !== undefined) {
        bodyParams["key"] = input.key;
    }
    if (input.version !== undefined) {
        bodyParams["version"] = input.version;
    }
    return bodyParams;
};
const serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = (input, context) => {
    const bodyParams = {};
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopDeploymentInput = (input, context) => {
    const bodyParams = {};
    if (input.autoRollbackEnabled !== undefined) {
        bodyParams["autoRollbackEnabled"] = input.autoRollbackEnabled;
    }
    if (input.deploymentId !== undefined) {
        bodyParams["deploymentId"] = input.deploymentId;
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
const serializeAws_json1_1TagFilter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagFilterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TagFilter(entry, context));
    }
    return contents;
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
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetFilters = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1TargetGroupInfo = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1TargetGroupInfoList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TargetGroupInfo(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TargetGroupPairInfo = (input, context) => {
    const bodyParams = {};
    if (input.prodTrafficRoute !== undefined) {
        bodyParams["prodTrafficRoute"] = serializeAws_json1_1TrafficRoute(input.prodTrafficRoute, context);
    }
    if (input.targetGroups !== undefined) {
        bodyParams["targetGroups"] = serializeAws_json1_1TargetGroupInfoList(input.targetGroups, context);
    }
    if (input.testTrafficRoute !== undefined) {
        bodyParams["testTrafficRoute"] = serializeAws_json1_1TrafficRoute(input.testTrafficRoute, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetGroupPairInfoList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TargetGroupPairInfo(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TargetIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TargetInstances = (input, context) => {
    const bodyParams = {};
    if (input.autoScalingGroups !== undefined) {
        bodyParams["autoScalingGroups"] = serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context);
    }
    if (input.ec2TagSet !== undefined) {
        bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(input.ec2TagSet, context);
    }
    if (input.tagFilters !== undefined) {
        bodyParams["tagFilters"] = serializeAws_json1_1EC2TagFilterList(input.tagFilters, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TimeBasedCanary = (input, context) => {
    const bodyParams = {};
    if (input.canaryInterval !== undefined) {
        bodyParams["canaryInterval"] = input.canaryInterval;
    }
    if (input.canaryPercentage !== undefined) {
        bodyParams["canaryPercentage"] = input.canaryPercentage;
    }
    return bodyParams;
};
const serializeAws_json1_1TimeBasedLinear = (input, context) => {
    const bodyParams = {};
    if (input.linearInterval !== undefined) {
        bodyParams["linearInterval"] = input.linearInterval;
    }
    if (input.linearPercentage !== undefined) {
        bodyParams["linearPercentage"] = input.linearPercentage;
    }
    return bodyParams;
};
const serializeAws_json1_1TimeRange = (input, context) => {
    const bodyParams = {};
    if (input.end !== undefined) {
        bodyParams["end"] = Math.round(input.end.getTime() / 1000);
    }
    if (input.start !== undefined) {
        bodyParams["start"] = Math.round(input.start.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1TrafficRoute = (input, context) => {
    const bodyParams = {};
    if (input.listenerArns !== undefined) {
        bodyParams["listenerArns"] = serializeAws_json1_1ListenerArnList(input.listenerArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TrafficRoutingConfig = (input, context) => {
    const bodyParams = {};
    if (input.timeBasedCanary !== undefined) {
        bodyParams["timeBasedCanary"] = serializeAws_json1_1TimeBasedCanary(input.timeBasedCanary, context);
    }
    if (input.timeBasedLinear !== undefined) {
        bodyParams["timeBasedLinear"] = serializeAws_json1_1TimeBasedLinear(input.timeBasedLinear, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1TriggerConfig = (input, context) => {
    const bodyParams = {};
    if (input.triggerEvents !== undefined) {
        bodyParams["triggerEvents"] = serializeAws_json1_1TriggerEventTypeList(input.triggerEvents, context);
    }
    if (input.triggerName !== undefined) {
        bodyParams["triggerName"] = input.triggerName;
    }
    if (input.triggerTargetArn !== undefined) {
        bodyParams["triggerTargetArn"] = input.triggerTargetArn;
    }
    return bodyParams;
};
const serializeAws_json1_1TriggerConfigList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TriggerConfig(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TriggerEventTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateApplicationInput = (input, context) => {
    const bodyParams = {};
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.newApplicationName !== undefined) {
        bodyParams["newApplicationName"] = input.newApplicationName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateDeploymentGroupInput = (input, context) => {
    const bodyParams = {};
    if (input.alarmConfiguration !== undefined) {
        bodyParams["alarmConfiguration"] = serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context);
    }
    if (input.applicationName !== undefined) {
        bodyParams["applicationName"] = input.applicationName;
    }
    if (input.autoRollbackConfiguration !== undefined) {
        bodyParams["autoRollbackConfiguration"] = serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context);
    }
    if (input.autoScalingGroups !== undefined) {
        bodyParams["autoScalingGroups"] = serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context);
    }
    if (input.blueGreenDeploymentConfiguration !== undefined) {
        bodyParams["blueGreenDeploymentConfiguration"] = serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context);
    }
    if (input.currentDeploymentGroupName !== undefined) {
        bodyParams["currentDeploymentGroupName"] = input.currentDeploymentGroupName;
    }
    if (input.deploymentConfigName !== undefined) {
        bodyParams["deploymentConfigName"] = input.deploymentConfigName;
    }
    if (input.deploymentStyle !== undefined) {
        bodyParams["deploymentStyle"] = serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context);
    }
    if (input.ec2TagFilters !== undefined) {
        bodyParams["ec2TagFilters"] = serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context);
    }
    if (input.ec2TagSet !== undefined) {
        bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(input.ec2TagSet, context);
    }
    if (input.ecsServices !== undefined) {
        bodyParams["ecsServices"] = serializeAws_json1_1ECSServiceList(input.ecsServices, context);
    }
    if (input.loadBalancerInfo !== undefined) {
        bodyParams["loadBalancerInfo"] = serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context);
    }
    if (input.newDeploymentGroupName !== undefined) {
        bodyParams["newDeploymentGroupName"] = input.newDeploymentGroupName;
    }
    if (input.onPremisesInstanceTagFilters !== undefined) {
        bodyParams["onPremisesInstanceTagFilters"] = serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context);
    }
    if (input.onPremisesTagSet !== undefined) {
        bodyParams["onPremisesTagSet"] = serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context);
    }
    if (input.serviceRoleArn !== undefined) {
        bodyParams["serviceRoleArn"] = input.serviceRoleArn;
    }
    if (input.triggerConfigurations !== undefined) {
        bodyParams["triggerConfigurations"] = serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1Alarm = (output, context) => {
    let contents = {
        __type: "Alarm",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1AlarmConfiguration = (output, context) => {
    let contents = {
        __type: "AlarmConfiguration",
        alarms: undefined,
        enabled: undefined,
        ignorePollAlarmFailure: undefined
    };
    if (output.alarms !== undefined && output.alarms !== null) {
        contents.alarms = deserializeAws_json1_1AlarmList(output.alarms, context);
    }
    if (output.enabled !== undefined && output.enabled !== null) {
        contents.enabled = output.enabled;
    }
    if (output.ignorePollAlarmFailure !== undefined &&
        output.ignorePollAlarmFailure !== null) {
        contents.ignorePollAlarmFailure = output.ignorePollAlarmFailure;
    }
    return contents;
};
const deserializeAws_json1_1AlarmList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Alarm(entry, context));
};
const deserializeAws_json1_1AlarmsLimitExceededException = (output, context) => {
    let contents = {
        __type: "AlarmsLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AppSpecContent = (output, context) => {
    let contents = {
        __type: "AppSpecContent",
        content: undefined,
        sha256: undefined
    };
    if (output.content !== undefined && output.content !== null) {
        contents.content = output.content;
    }
    if (output.sha256 !== undefined && output.sha256 !== null) {
        contents.sha256 = output.sha256;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ApplicationAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationDoesNotExistException = (output, context) => {
    let contents = {
        __type: "ApplicationDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationInfo = (output, context) => {
    let contents = {
        __type: "ApplicationInfo",
        applicationId: undefined,
        applicationName: undefined,
        computePlatform: undefined,
        createTime: undefined,
        gitHubAccountName: undefined,
        linkedToGitHub: undefined
    };
    if (output.applicationId !== undefined && output.applicationId !== null) {
        contents.applicationId = output.applicationId;
    }
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.computePlatform !== undefined && output.computePlatform !== null) {
        contents.computePlatform = output.computePlatform;
    }
    if (output.createTime !== undefined && output.createTime !== null) {
        contents.createTime = new Date(Math.round(output.createTime * 1000));
    }
    if (output.gitHubAccountName !== undefined &&
        output.gitHubAccountName !== null) {
        contents.gitHubAccountName = output.gitHubAccountName;
    }
    if (output.linkedToGitHub !== undefined && output.linkedToGitHub !== null) {
        contents.linkedToGitHub = output.linkedToGitHub;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationLimitExceededException = (output, context) => {
    let contents = {
        __type: "ApplicationLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationNameRequiredException = (output, context) => {
    let contents = {
        __type: "ApplicationNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ApplicationsInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ApplicationInfo(entry, context));
};
const deserializeAws_json1_1ApplicationsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ArnNotSupportedException = (output, context) => {
    let contents = {
        __type: "ArnNotSupportedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1AutoRollbackConfiguration = (output, context) => {
    let contents = {
        __type: "AutoRollbackConfiguration",
        enabled: undefined,
        events: undefined
    };
    if (output.enabled !== undefined && output.enabled !== null) {
        contents.enabled = output.enabled;
    }
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1AutoRollbackEventsList(output.events, context);
    }
    return contents;
};
const deserializeAws_json1_1AutoRollbackEventsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1AutoScalingGroup = (output, context) => {
    let contents = {
        __type: "AutoScalingGroup",
        hook: undefined,
        name: undefined
    };
    if (output.hook !== undefined && output.hook !== null) {
        contents.hook = output.hook;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1AutoScalingGroupList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AutoScalingGroup(entry, context));
};
const deserializeAws_json1_1AutoScalingGroupNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1BatchGetApplicationRevisionsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetApplicationRevisionsOutput",
        applicationName: undefined,
        errorMessage: undefined,
        revisions: undefined
    };
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.revisions !== undefined && output.revisions !== null) {
        contents.revisions = deserializeAws_json1_1RevisionInfoList(output.revisions, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetApplicationsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetApplicationsOutput",
        applicationsInfo: undefined
    };
    if (output.applicationsInfo !== undefined &&
        output.applicationsInfo !== null) {
        contents.applicationsInfo = deserializeAws_json1_1ApplicationsInfoList(output.applicationsInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetDeploymentGroupsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetDeploymentGroupsOutput",
        deploymentGroupsInfo: undefined,
        errorMessage: undefined
    };
    if (output.deploymentGroupsInfo !== undefined &&
        output.deploymentGroupsInfo !== null) {
        contents.deploymentGroupsInfo = deserializeAws_json1_1DeploymentGroupInfoList(output.deploymentGroupsInfo, context);
    }
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    return contents;
};
const deserializeAws_json1_1BatchGetDeploymentInstancesOutput = (output, context) => {
    let contents = {
        __type: "BatchGetDeploymentInstancesOutput",
        errorMessage: undefined,
        instancesSummary: undefined
    };
    if (output.errorMessage !== undefined && output.errorMessage !== null) {
        contents.errorMessage = output.errorMessage;
    }
    if (output.instancesSummary !== undefined &&
        output.instancesSummary !== null) {
        contents.instancesSummary = deserializeAws_json1_1InstanceSummaryList(output.instancesSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetDeploymentTargetsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetDeploymentTargetsOutput",
        deploymentTargets: undefined
    };
    if (output.deploymentTargets !== undefined &&
        output.deploymentTargets !== null) {
        contents.deploymentTargets = deserializeAws_json1_1DeploymentTargetList(output.deploymentTargets, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetDeploymentsOutput = (output, context) => {
    let contents = {
        __type: "BatchGetDeploymentsOutput",
        deploymentsInfo: undefined
    };
    if (output.deploymentsInfo !== undefined && output.deploymentsInfo !== null) {
        contents.deploymentsInfo = deserializeAws_json1_1DeploymentsInfoList(output.deploymentsInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = (output, context) => {
    let contents = {
        __type: "BatchGetOnPremisesInstancesOutput",
        instanceInfos: undefined
    };
    if (output.instanceInfos !== undefined && output.instanceInfos !== null) {
        contents.instanceInfos = deserializeAws_json1_1InstanceInfoList(output.instanceInfos, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchLimitExceededException = (output, context) => {
    let contents = {
        __type: "BatchLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1BlueGreenDeploymentConfiguration = (output, context) => {
    let contents = {
        __type: "BlueGreenDeploymentConfiguration",
        deploymentReadyOption: undefined,
        greenFleetProvisioningOption: undefined,
        terminateBlueInstancesOnDeploymentSuccess: undefined
    };
    if (output.deploymentReadyOption !== undefined &&
        output.deploymentReadyOption !== null) {
        contents.deploymentReadyOption = deserializeAws_json1_1DeploymentReadyOption(output.deploymentReadyOption, context);
    }
    if (output.greenFleetProvisioningOption !== undefined &&
        output.greenFleetProvisioningOption !== null) {
        contents.greenFleetProvisioningOption = deserializeAws_json1_1GreenFleetProvisioningOption(output.greenFleetProvisioningOption, context);
    }
    if (output.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
        output.terminateBlueInstancesOnDeploymentSuccess !== null) {
        contents.terminateBlueInstancesOnDeploymentSuccess = deserializeAws_json1_1BlueInstanceTerminationOption(output.terminateBlueInstancesOnDeploymentSuccess, context);
    }
    return contents;
};
const deserializeAws_json1_1BlueInstanceTerminationOption = (output, context) => {
    let contents = {
        __type: "BlueInstanceTerminationOption",
        action: undefined,
        terminationWaitTimeInMinutes: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = output.action;
    }
    if (output.terminationWaitTimeInMinutes !== undefined &&
        output.terminationWaitTimeInMinutes !== null) {
        contents.terminationWaitTimeInMinutes = output.terminationWaitTimeInMinutes;
    }
    return contents;
};
const deserializeAws_json1_1BucketNameFilterRequiredException = (output, context) => {
    let contents = {
        __type: "BucketNameFilterRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CreateApplicationOutput = (output, context) => {
    let contents = {
        __type: "CreateApplicationOutput",
        applicationId: undefined
    };
    if (output.applicationId !== undefined && output.applicationId !== null) {
        contents.applicationId = output.applicationId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDeploymentConfigOutput = (output, context) => {
    let contents = {
        __type: "CreateDeploymentConfigOutput",
        deploymentConfigId: undefined
    };
    if (output.deploymentConfigId !== undefined &&
        output.deploymentConfigId !== null) {
        contents.deploymentConfigId = output.deploymentConfigId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDeploymentGroupOutput = (output, context) => {
    let contents = {
        __type: "CreateDeploymentGroupOutput",
        deploymentGroupId: undefined
    };
    if (output.deploymentGroupId !== undefined &&
        output.deploymentGroupId !== null) {
        contents.deploymentGroupId = output.deploymentGroupId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDeploymentOutput = (output, context) => {
    let contents = {
        __type: "CreateDeploymentOutput",
        deploymentId: undefined
    };
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    return contents;
};
const deserializeAws_json1_1DeleteDeploymentGroupOutput = (output, context) => {
    let contents = {
        __type: "DeleteDeploymentGroupOutput",
        hooksNotCleanedUp: undefined
    };
    if (output.hooksNotCleanedUp !== undefined &&
        output.hooksNotCleanedUp !== null) {
        contents.hooksNotCleanedUp = deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteGitHubAccountTokenOutput = (output, context) => {
    let contents = {
        __type: "DeleteGitHubAccountTokenOutput",
        tokenName: undefined
    };
    if (output.tokenName !== undefined && output.tokenName !== null) {
        contents.tokenName = output.tokenName;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentAlreadyCompletedException = (output, context) => {
    let contents = {
        __type: "DeploymentAlreadyCompletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "DeploymentConfigAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigDoesNotExistException = (output, context) => {
    let contents = {
        __type: "DeploymentConfigDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigInUseException = (output, context) => {
    let contents = {
        __type: "DeploymentConfigInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigInfo = (output, context) => {
    let contents = {
        __type: "DeploymentConfigInfo",
        computePlatform: undefined,
        createTime: undefined,
        deploymentConfigId: undefined,
        deploymentConfigName: undefined,
        minimumHealthyHosts: undefined,
        trafficRoutingConfig: undefined
    };
    if (output.computePlatform !== undefined && output.computePlatform !== null) {
        contents.computePlatform = output.computePlatform;
    }
    if (output.createTime !== undefined && output.createTime !== null) {
        contents.createTime = new Date(Math.round(output.createTime * 1000));
    }
    if (output.deploymentConfigId !== undefined &&
        output.deploymentConfigId !== null) {
        contents.deploymentConfigId = output.deploymentConfigId;
    }
    if (output.deploymentConfigName !== undefined &&
        output.deploymentConfigName !== null) {
        contents.deploymentConfigName = output.deploymentConfigName;
    }
    if (output.minimumHealthyHosts !== undefined &&
        output.minimumHealthyHosts !== null) {
        contents.minimumHealthyHosts = deserializeAws_json1_1MinimumHealthyHosts(output.minimumHealthyHosts, context);
    }
    if (output.trafficRoutingConfig !== undefined &&
        output.trafficRoutingConfig !== null) {
        contents.trafficRoutingConfig = deserializeAws_json1_1TrafficRoutingConfig(output.trafficRoutingConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigLimitExceededException = (output, context) => {
    let contents = {
        __type: "DeploymentConfigLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigNameRequiredException = (output, context) => {
    let contents = {
        __type: "DeploymentConfigNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfigsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeploymentDoesNotExistException = (output, context) => {
    let contents = {
        __type: "DeploymentDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "DeploymentGroupAlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupDoesNotExistException = (output, context) => {
    let contents = {
        __type: "DeploymentGroupDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupInfo = (output, context) => {
    let contents = {
        __type: "DeploymentGroupInfo",
        alarmConfiguration: undefined,
        applicationName: undefined,
        autoRollbackConfiguration: undefined,
        autoScalingGroups: undefined,
        blueGreenDeploymentConfiguration: undefined,
        computePlatform: undefined,
        deploymentConfigName: undefined,
        deploymentGroupId: undefined,
        deploymentGroupName: undefined,
        deploymentStyle: undefined,
        ec2TagFilters: undefined,
        ec2TagSet: undefined,
        ecsServices: undefined,
        lastAttemptedDeployment: undefined,
        lastSuccessfulDeployment: undefined,
        loadBalancerInfo: undefined,
        onPremisesInstanceTagFilters: undefined,
        onPremisesTagSet: undefined,
        serviceRoleArn: undefined,
        targetRevision: undefined,
        triggerConfigurations: undefined
    };
    if (output.alarmConfiguration !== undefined &&
        output.alarmConfiguration !== null) {
        contents.alarmConfiguration = deserializeAws_json1_1AlarmConfiguration(output.alarmConfiguration, context);
    }
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.autoRollbackConfiguration !== undefined &&
        output.autoRollbackConfiguration !== null) {
        contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context);
    }
    if (output.autoScalingGroups !== undefined &&
        output.autoScalingGroups !== null) {
        contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupList(output.autoScalingGroups, context);
    }
    if (output.blueGreenDeploymentConfiguration !== undefined &&
        output.blueGreenDeploymentConfiguration !== null) {
        contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context);
    }
    if (output.computePlatform !== undefined && output.computePlatform !== null) {
        contents.computePlatform = output.computePlatform;
    }
    if (output.deploymentConfigName !== undefined &&
        output.deploymentConfigName !== null) {
        contents.deploymentConfigName = output.deploymentConfigName;
    }
    if (output.deploymentGroupId !== undefined &&
        output.deploymentGroupId !== null) {
        contents.deploymentGroupId = output.deploymentGroupId;
    }
    if (output.deploymentGroupName !== undefined &&
        output.deploymentGroupName !== null) {
        contents.deploymentGroupName = output.deploymentGroupName;
    }
    if (output.deploymentStyle !== undefined && output.deploymentStyle !== null) {
        contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context);
    }
    if (output.ec2TagFilters !== undefined && output.ec2TagFilters !== null) {
        contents.ec2TagFilters = deserializeAws_json1_1EC2TagFilterList(output.ec2TagFilters, context);
    }
    if (output.ec2TagSet !== undefined && output.ec2TagSet !== null) {
        contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context);
    }
    if (output.ecsServices !== undefined && output.ecsServices !== null) {
        contents.ecsServices = deserializeAws_json1_1ECSServiceList(output.ecsServices, context);
    }
    if (output.lastAttemptedDeployment !== undefined &&
        output.lastAttemptedDeployment !== null) {
        contents.lastAttemptedDeployment = deserializeAws_json1_1LastDeploymentInfo(output.lastAttemptedDeployment, context);
    }
    if (output.lastSuccessfulDeployment !== undefined &&
        output.lastSuccessfulDeployment !== null) {
        contents.lastSuccessfulDeployment = deserializeAws_json1_1LastDeploymentInfo(output.lastSuccessfulDeployment, context);
    }
    if (output.loadBalancerInfo !== undefined &&
        output.loadBalancerInfo !== null) {
        contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context);
    }
    if (output.onPremisesInstanceTagFilters !== undefined &&
        output.onPremisesInstanceTagFilters !== null) {
        contents.onPremisesInstanceTagFilters = deserializeAws_json1_1TagFilterList(output.onPremisesInstanceTagFilters, context);
    }
    if (output.onPremisesTagSet !== undefined &&
        output.onPremisesTagSet !== null) {
        contents.onPremisesTagSet = deserializeAws_json1_1OnPremisesTagSet(output.onPremisesTagSet, context);
    }
    if (output.serviceRoleArn !== undefined && output.serviceRoleArn !== null) {
        contents.serviceRoleArn = output.serviceRoleArn;
    }
    if (output.targetRevision !== undefined && output.targetRevision !== null) {
        contents.targetRevision = deserializeAws_json1_1RevisionLocation(output.targetRevision, context);
    }
    if (output.triggerConfigurations !== undefined &&
        output.triggerConfigurations !== null) {
        contents.triggerConfigurations = deserializeAws_json1_1TriggerConfigList(output.triggerConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeploymentGroupInfo(entry, context));
};
const deserializeAws_json1_1DeploymentGroupLimitExceededException = (output, context) => {
    let contents = {
        __type: "DeploymentGroupLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupNameRequiredException = (output, context) => {
    let contents = {
        __type: "DeploymentGroupNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentGroupsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeploymentIdRequiredException = (output, context) => {
    let contents = {
        __type: "DeploymentIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentInfo = (output, context) => {
    let contents = {
        __type: "DeploymentInfo",
        additionalDeploymentStatusInfo: undefined,
        applicationName: undefined,
        autoRollbackConfiguration: undefined,
        blueGreenDeploymentConfiguration: undefined,
        completeTime: undefined,
        computePlatform: undefined,
        createTime: undefined,
        creator: undefined,
        deploymentConfigName: undefined,
        deploymentGroupName: undefined,
        deploymentId: undefined,
        deploymentOverview: undefined,
        deploymentStatusMessages: undefined,
        deploymentStyle: undefined,
        description: undefined,
        errorInformation: undefined,
        fileExistsBehavior: undefined,
        ignoreApplicationStopFailures: undefined,
        instanceTerminationWaitTimeStarted: undefined,
        loadBalancerInfo: undefined,
        previousRevision: undefined,
        revision: undefined,
        rollbackInfo: undefined,
        startTime: undefined,
        status: undefined,
        targetInstances: undefined,
        updateOutdatedInstancesOnly: undefined
    };
    if (output.additionalDeploymentStatusInfo !== undefined &&
        output.additionalDeploymentStatusInfo !== null) {
        contents.additionalDeploymentStatusInfo =
            output.additionalDeploymentStatusInfo;
    }
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.autoRollbackConfiguration !== undefined &&
        output.autoRollbackConfiguration !== null) {
        contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context);
    }
    if (output.blueGreenDeploymentConfiguration !== undefined &&
        output.blueGreenDeploymentConfiguration !== null) {
        contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context);
    }
    if (output.completeTime !== undefined && output.completeTime !== null) {
        contents.completeTime = new Date(Math.round(output.completeTime * 1000));
    }
    if (output.computePlatform !== undefined && output.computePlatform !== null) {
        contents.computePlatform = output.computePlatform;
    }
    if (output.createTime !== undefined && output.createTime !== null) {
        contents.createTime = new Date(Math.round(output.createTime * 1000));
    }
    if (output.creator !== undefined && output.creator !== null) {
        contents.creator = output.creator;
    }
    if (output.deploymentConfigName !== undefined &&
        output.deploymentConfigName !== null) {
        contents.deploymentConfigName = output.deploymentConfigName;
    }
    if (output.deploymentGroupName !== undefined &&
        output.deploymentGroupName !== null) {
        contents.deploymentGroupName = output.deploymentGroupName;
    }
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.deploymentOverview !== undefined &&
        output.deploymentOverview !== null) {
        contents.deploymentOverview = deserializeAws_json1_1DeploymentOverview(output.deploymentOverview, context);
    }
    if (output.deploymentStatusMessages !== undefined &&
        output.deploymentStatusMessages !== null) {
        contents.deploymentStatusMessages = deserializeAws_json1_1DeploymentStatusMessageList(output.deploymentStatusMessages, context);
    }
    if (output.deploymentStyle !== undefined && output.deploymentStyle !== null) {
        contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.errorInformation !== undefined &&
        output.errorInformation !== null) {
        contents.errorInformation = deserializeAws_json1_1ErrorInformation(output.errorInformation, context);
    }
    if (output.fileExistsBehavior !== undefined &&
        output.fileExistsBehavior !== null) {
        contents.fileExistsBehavior = output.fileExistsBehavior;
    }
    if (output.ignoreApplicationStopFailures !== undefined &&
        output.ignoreApplicationStopFailures !== null) {
        contents.ignoreApplicationStopFailures =
            output.ignoreApplicationStopFailures;
    }
    if (output.instanceTerminationWaitTimeStarted !== undefined &&
        output.instanceTerminationWaitTimeStarted !== null) {
        contents.instanceTerminationWaitTimeStarted =
            output.instanceTerminationWaitTimeStarted;
    }
    if (output.loadBalancerInfo !== undefined &&
        output.loadBalancerInfo !== null) {
        contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context);
    }
    if (output.previousRevision !== undefined &&
        output.previousRevision !== null) {
        contents.previousRevision = deserializeAws_json1_1RevisionLocation(output.previousRevision, context);
    }
    if (output.revision !== undefined && output.revision !== null) {
        contents.revision = deserializeAws_json1_1RevisionLocation(output.revision, context);
    }
    if (output.rollbackInfo !== undefined && output.rollbackInfo !== null) {
        contents.rollbackInfo = deserializeAws_json1_1RollbackInfo(output.rollbackInfo, context);
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetInstances !== undefined && output.targetInstances !== null) {
        contents.targetInstances = deserializeAws_json1_1TargetInstances(output.targetInstances, context);
    }
    if (output.updateOutdatedInstancesOnly !== undefined &&
        output.updateOutdatedInstancesOnly !== null) {
        contents.updateOutdatedInstancesOnly = output.updateOutdatedInstancesOnly;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentIsNotInReadyStateException = (output, context) => {
    let contents = {
        __type: "DeploymentIsNotInReadyStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentLimitExceededException = (output, context) => {
    let contents = {
        __type: "DeploymentLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentNotStartedException = (output, context) => {
    let contents = {
        __type: "DeploymentNotStartedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentOverview = (output, context) => {
    let contents = {
        __type: "DeploymentOverview",
        Failed: undefined,
        InProgress: undefined,
        Pending: undefined,
        Ready: undefined,
        Skipped: undefined,
        Succeeded: undefined
    };
    if (output.Failed !== undefined && output.Failed !== null) {
        contents.Failed = output.Failed;
    }
    if (output.InProgress !== undefined && output.InProgress !== null) {
        contents.InProgress = output.InProgress;
    }
    if (output.Pending !== undefined && output.Pending !== null) {
        contents.Pending = output.Pending;
    }
    if (output.Ready !== undefined && output.Ready !== null) {
        contents.Ready = output.Ready;
    }
    if (output.Skipped !== undefined && output.Skipped !== null) {
        contents.Skipped = output.Skipped;
    }
    if (output.Succeeded !== undefined && output.Succeeded !== null) {
        contents.Succeeded = output.Succeeded;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentReadyOption = (output, context) => {
    let contents = {
        __type: "DeploymentReadyOption",
        actionOnTimeout: undefined,
        waitTimeInMinutes: undefined
    };
    if (output.actionOnTimeout !== undefined && output.actionOnTimeout !== null) {
        contents.actionOnTimeout = output.actionOnTimeout;
    }
    if (output.waitTimeInMinutes !== undefined &&
        output.waitTimeInMinutes !== null) {
        contents.waitTimeInMinutes = output.waitTimeInMinutes;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentStatusMessageList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DeploymentStyle = (output, context) => {
    let contents = {
        __type: "DeploymentStyle",
        deploymentOption: undefined,
        deploymentType: undefined
    };
    if (output.deploymentOption !== undefined &&
        output.deploymentOption !== null) {
        contents.deploymentOption = output.deploymentOption;
    }
    if (output.deploymentType !== undefined && output.deploymentType !== null) {
        contents.deploymentType = output.deploymentType;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentTarget = (output, context) => {
    let contents = {
        __type: "DeploymentTarget",
        deploymentTargetType: undefined,
        ecsTarget: undefined,
        instanceTarget: undefined,
        lambdaTarget: undefined
    };
    if (output.deploymentTargetType !== undefined &&
        output.deploymentTargetType !== null) {
        contents.deploymentTargetType = output.deploymentTargetType;
    }
    if (output.ecsTarget !== undefined && output.ecsTarget !== null) {
        contents.ecsTarget = deserializeAws_json1_1ECSTarget(output.ecsTarget, context);
    }
    if (output.instanceTarget !== undefined && output.instanceTarget !== null) {
        contents.instanceTarget = deserializeAws_json1_1InstanceTarget(output.instanceTarget, context);
    }
    if (output.lambdaTarget !== undefined && output.lambdaTarget !== null) {
        contents.lambdaTarget = deserializeAws_json1_1LambdaTarget(output.lambdaTarget, context);
    }
    return contents;
};
const deserializeAws_json1_1DeploymentTargetDoesNotExistException = (output, context) => {
    let contents = {
        __type: "DeploymentTargetDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentTargetIdRequiredException = (output, context) => {
    let contents = {
        __type: "DeploymentTargetIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentTargetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeploymentTarget(entry, context));
};
const deserializeAws_json1_1DeploymentTargetListSizeExceededException = (output, context) => {
    let contents = {
        __type: "DeploymentTargetListSizeExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentsInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DeploymentInfo(entry, context));
};
const deserializeAws_json1_1DeploymentsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DescriptionTooLongException = (output, context) => {
    let contents = {
        __type: "DescriptionTooLongException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Diagnostics = (output, context) => {
    let contents = {
        __type: "Diagnostics",
        errorCode: undefined,
        logTail: undefined,
        message: undefined,
        scriptName: undefined
    };
    if (output.errorCode !== undefined && output.errorCode !== null) {
        contents.errorCode = output.errorCode;
    }
    if (output.logTail !== undefined && output.logTail !== null) {
        contents.logTail = output.logTail;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.scriptName !== undefined && output.scriptName !== null) {
        contents.scriptName = output.scriptName;
    }
    return contents;
};
const deserializeAws_json1_1EC2TagFilter = (output, context) => {
    let contents = {
        __type: "EC2TagFilter",
        Key: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1EC2TagFilterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EC2TagFilter(entry, context));
};
const deserializeAws_json1_1EC2TagSet = (output, context) => {
    let contents = {
        __type: "EC2TagSet",
        ec2TagSetList: undefined
    };
    if (output.ec2TagSetList !== undefined && output.ec2TagSetList !== null) {
        contents.ec2TagSetList = deserializeAws_json1_1EC2TagSetList(output.ec2TagSetList, context);
    }
    return contents;
};
const deserializeAws_json1_1EC2TagSetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EC2TagFilterList(entry, context));
};
const deserializeAws_json1_1ECSService = (output, context) => {
    let contents = {
        __type: "ECSService",
        clusterName: undefined,
        serviceName: undefined
    };
    if (output.clusterName !== undefined && output.clusterName !== null) {
        contents.clusterName = output.clusterName;
    }
    if (output.serviceName !== undefined && output.serviceName !== null) {
        contents.serviceName = output.serviceName;
    }
    return contents;
};
const deserializeAws_json1_1ECSServiceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ECSService(entry, context));
};
const deserializeAws_json1_1ECSServiceMappingLimitExceededException = (output, context) => {
    let contents = {
        __type: "ECSServiceMappingLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ECSTarget = (output, context) => {
    let contents = {
        __type: "ECSTarget",
        deploymentId: undefined,
        lastUpdatedAt: undefined,
        lifecycleEvents: undefined,
        status: undefined,
        targetArn: undefined,
        targetId: undefined,
        taskSetsInfo: undefined
    };
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
        contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetArn !== undefined && output.targetArn !== null) {
        contents.targetArn = output.targetArn;
    }
    if (output.targetId !== undefined && output.targetId !== null) {
        contents.targetId = output.targetId;
    }
    if (output.taskSetsInfo !== undefined && output.taskSetsInfo !== null) {
        contents.taskSetsInfo = deserializeAws_json1_1ECSTaskSetList(output.taskSetsInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1ECSTaskSet = (output, context) => {
    let contents = {
        __type: "ECSTaskSet",
        desiredCount: undefined,
        identifer: undefined,
        pendingCount: undefined,
        runningCount: undefined,
        status: undefined,
        targetGroup: undefined,
        taskSetLabel: undefined,
        trafficWeight: undefined
    };
    if (output.desiredCount !== undefined && output.desiredCount !== null) {
        contents.desiredCount = output.desiredCount;
    }
    if (output.identifer !== undefined && output.identifer !== null) {
        contents.identifer = output.identifer;
    }
    if (output.pendingCount !== undefined && output.pendingCount !== null) {
        contents.pendingCount = output.pendingCount;
    }
    if (output.runningCount !== undefined && output.runningCount !== null) {
        contents.runningCount = output.runningCount;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetGroup !== undefined && output.targetGroup !== null) {
        contents.targetGroup = deserializeAws_json1_1TargetGroupInfo(output.targetGroup, context);
    }
    if (output.taskSetLabel !== undefined && output.taskSetLabel !== null) {
        contents.taskSetLabel = output.taskSetLabel;
    }
    if (output.trafficWeight !== undefined && output.trafficWeight !== null) {
        contents.trafficWeight = output.trafficWeight;
    }
    return contents;
};
const deserializeAws_json1_1ECSTaskSetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ECSTaskSet(entry, context));
};
const deserializeAws_json1_1ELBInfo = (output, context) => {
    let contents = {
        __type: "ELBInfo",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1ELBInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ELBInfo(entry, context));
};
const deserializeAws_json1_1ErrorInformation = (output, context) => {
    let contents = {
        __type: "ErrorInformation",
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
const deserializeAws_json1_1GenericRevisionInfo = (output, context) => {
    let contents = {
        __type: "GenericRevisionInfo",
        deploymentGroups: undefined,
        description: undefined,
        firstUsedTime: undefined,
        lastUsedTime: undefined,
        registerTime: undefined
    };
    if (output.deploymentGroups !== undefined &&
        output.deploymentGroups !== null) {
        contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context);
    }
    if (output.description !== undefined && output.description !== null) {
        contents.description = output.description;
    }
    if (output.firstUsedTime !== undefined && output.firstUsedTime !== null) {
        contents.firstUsedTime = new Date(Math.round(output.firstUsedTime * 1000));
    }
    if (output.lastUsedTime !== undefined && output.lastUsedTime !== null) {
        contents.lastUsedTime = new Date(Math.round(output.lastUsedTime * 1000));
    }
    if (output.registerTime !== undefined && output.registerTime !== null) {
        contents.registerTime = new Date(Math.round(output.registerTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1GetApplicationOutput = (output, context) => {
    let contents = {
        __type: "GetApplicationOutput",
        application: undefined
    };
    if (output.application !== undefined && output.application !== null) {
        contents.application = deserializeAws_json1_1ApplicationInfo(output.application, context);
    }
    return contents;
};
const deserializeAws_json1_1GetApplicationRevisionOutput = (output, context) => {
    let contents = {
        __type: "GetApplicationRevisionOutput",
        applicationName: undefined,
        revision: undefined,
        revisionInfo: undefined
    };
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.revision !== undefined && output.revision !== null) {
        contents.revision = deserializeAws_json1_1RevisionLocation(output.revision, context);
    }
    if (output.revisionInfo !== undefined && output.revisionInfo !== null) {
        contents.revisionInfo = deserializeAws_json1_1GenericRevisionInfo(output.revisionInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeploymentConfigOutput = (output, context) => {
    let contents = {
        __type: "GetDeploymentConfigOutput",
        deploymentConfigInfo: undefined
    };
    if (output.deploymentConfigInfo !== undefined &&
        output.deploymentConfigInfo !== null) {
        contents.deploymentConfigInfo = deserializeAws_json1_1DeploymentConfigInfo(output.deploymentConfigInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeploymentGroupOutput = (output, context) => {
    let contents = {
        __type: "GetDeploymentGroupOutput",
        deploymentGroupInfo: undefined
    };
    if (output.deploymentGroupInfo !== undefined &&
        output.deploymentGroupInfo !== null) {
        contents.deploymentGroupInfo = deserializeAws_json1_1DeploymentGroupInfo(output.deploymentGroupInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeploymentInstanceOutput = (output, context) => {
    let contents = {
        __type: "GetDeploymentInstanceOutput",
        instanceSummary: undefined
    };
    if (output.instanceSummary !== undefined && output.instanceSummary !== null) {
        contents.instanceSummary = deserializeAws_json1_1InstanceSummary(output.instanceSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeploymentOutput = (output, context) => {
    let contents = {
        __type: "GetDeploymentOutput",
        deploymentInfo: undefined
    };
    if (output.deploymentInfo !== undefined && output.deploymentInfo !== null) {
        contents.deploymentInfo = deserializeAws_json1_1DeploymentInfo(output.deploymentInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GetDeploymentTargetOutput = (output, context) => {
    let contents = {
        __type: "GetDeploymentTargetOutput",
        deploymentTarget: undefined
    };
    if (output.deploymentTarget !== undefined &&
        output.deploymentTarget !== null) {
        contents.deploymentTarget = deserializeAws_json1_1DeploymentTarget(output.deploymentTarget, context);
    }
    return contents;
};
const deserializeAws_json1_1GetOnPremisesInstanceOutput = (output, context) => {
    let contents = {
        __type: "GetOnPremisesInstanceOutput",
        instanceInfo: undefined
    };
    if (output.instanceInfo !== undefined && output.instanceInfo !== null) {
        contents.instanceInfo = deserializeAws_json1_1InstanceInfo(output.instanceInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = (output, context) => {
    let contents = {
        __type: "GitHubAccountTokenDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GitHubAccountTokenNameRequiredException = (output, context) => {
    let contents = {
        __type: "GitHubAccountTokenNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GitHubLocation = (output, context) => {
    let contents = {
        __type: "GitHubLocation",
        commitId: undefined,
        repository: undefined
    };
    if (output.commitId !== undefined && output.commitId !== null) {
        contents.commitId = output.commitId;
    }
    if (output.repository !== undefined && output.repository !== null) {
        contents.repository = output.repository;
    }
    return contents;
};
const deserializeAws_json1_1GreenFleetProvisioningOption = (output, context) => {
    let contents = {
        __type: "GreenFleetProvisioningOption",
        action: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = output.action;
    }
    return contents;
};
const deserializeAws_json1_1IamArnRequiredException = (output, context) => {
    let contents = {
        __type: "IamArnRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = (output, context) => {
    let contents = {
        __type: "IamSessionArnAlreadyRegisteredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IamUserArnAlreadyRegisteredException = (output, context) => {
    let contents = {
        __type: "IamUserArnAlreadyRegisteredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IamUserArnRequiredException = (output, context) => {
    let contents = {
        __type: "IamUserArnRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceDoesNotExistException = (output, context) => {
    let contents = {
        __type: "InstanceDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceIdRequiredException = (output, context) => {
    let contents = {
        __type: "InstanceIdRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceInfo = (output, context) => {
    let contents = {
        __type: "InstanceInfo",
        deregisterTime: undefined,
        iamSessionArn: undefined,
        iamUserArn: undefined,
        instanceArn: undefined,
        instanceName: undefined,
        registerTime: undefined,
        tags: undefined
    };
    if (output.deregisterTime !== undefined && output.deregisterTime !== null) {
        contents.deregisterTime = new Date(Math.round(output.deregisterTime * 1000));
    }
    if (output.iamSessionArn !== undefined && output.iamSessionArn !== null) {
        contents.iamSessionArn = output.iamSessionArn;
    }
    if (output.iamUserArn !== undefined && output.iamUserArn !== null) {
        contents.iamUserArn = output.iamUserArn;
    }
    if (output.instanceArn !== undefined && output.instanceArn !== null) {
        contents.instanceArn = output.instanceArn;
    }
    if (output.instanceName !== undefined && output.instanceName !== null) {
        contents.instanceName = output.instanceName;
    }
    if (output.registerTime !== undefined && output.registerTime !== null) {
        contents.registerTime = new Date(Math.round(output.registerTime * 1000));
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1TagList(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1InstanceInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceInfo(entry, context));
};
const deserializeAws_json1_1InstanceLimitExceededException = (output, context) => {
    let contents = {
        __type: "InstanceLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceNameAlreadyRegisteredException = (output, context) => {
    let contents = {
        __type: "InstanceNameAlreadyRegisteredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InstanceNameRequiredException = (output, context) => {
    let contents = {
        __type: "InstanceNameRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceNotRegisteredException = (output, context) => {
    let contents = {
        __type: "InstanceNotRegisteredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InstanceSummary = (output, context) => {
    let contents = {
        __type: "InstanceSummary",
        deploymentId: undefined,
        instanceId: undefined,
        instanceType: undefined,
        lastUpdatedAt: undefined,
        lifecycleEvents: undefined,
        status: undefined
    };
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.instanceId !== undefined && output.instanceId !== null) {
        contents.instanceId = output.instanceId;
    }
    if (output.instanceType !== undefined && output.instanceType !== null) {
        contents.instanceType = output.instanceType;
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
        contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1InstanceSummaryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InstanceSummary(entry, context));
};
const deserializeAws_json1_1InstanceTarget = (output, context) => {
    let contents = {
        __type: "InstanceTarget",
        deploymentId: undefined,
        instanceLabel: undefined,
        lastUpdatedAt: undefined,
        lifecycleEvents: undefined,
        status: undefined,
        targetArn: undefined,
        targetId: undefined
    };
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.instanceLabel !== undefined && output.instanceLabel !== null) {
        contents.instanceLabel = output.instanceLabel;
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
        contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetArn !== undefined && output.targetArn !== null) {
        contents.targetArn = output.targetArn;
    }
    if (output.targetId !== undefined && output.targetId !== null) {
        contents.targetId = output.targetId;
    }
    return contents;
};
const deserializeAws_json1_1InstancesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1InvalidAlarmConfigException = (output, context) => {
    let contents = {
        __type: "InvalidAlarmConfigException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidApplicationNameException = (output, context) => {
    let contents = {
        __type: "InvalidApplicationNameException",
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
const deserializeAws_json1_1InvalidAutoRollbackConfigException = (output, context) => {
    let contents = {
        __type: "InvalidAutoRollbackConfigException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAutoScalingGroupException = (output, context) => {
    let contents = {
        __type: "InvalidAutoScalingGroupException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidBlueGreenDeploymentConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidBucketNameFilterException = (output, context) => {
    let contents = {
        __type: "InvalidBucketNameFilterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidComputePlatformException = (output, context) => {
    let contents = {
        __type: "InvalidComputePlatformException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeployedStateFilterException = (output, context) => {
    let contents = {
        __type: "InvalidDeployedStateFilterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentConfigNameException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentConfigNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentGroupNameException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentGroupNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentIdException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentInstanceTypeException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentInstanceTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStatusException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStyleException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentStyleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentTargetIdException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentTargetIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentWaitTypeException = (output, context) => {
    let contents = {
        __type: "InvalidDeploymentWaitTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidEC2TagCombinationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagException = (output, context) => {
    let contents = {
        __type: "InvalidEC2TagException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidECSServiceException = (output, context) => {
    let contents = {
        __type: "InvalidECSServiceException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFileExistsBehaviorException = (output, context) => {
    let contents = {
        __type: "InvalidFileExistsBehaviorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenException = (output, context) => {
    let contents = {
        __type: "InvalidGitHubAccountTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenNameException = (output, context) => {
    let contents = {
        __type: "InvalidGitHubAccountTokenNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidIamSessionArnException = (output, context) => {
    let contents = {
        __type: "InvalidIamSessionArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidIamUserArnException = (output, context) => {
    let contents = {
        __type: "InvalidIamUserArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = (output, context) => {
    let contents = {
        __type: "InvalidIgnoreApplicationStopFailuresValueException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    let contents = {
        __type: "InvalidInputException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInstanceNameException = (output, context) => {
    let contents = {
        __type: "InvalidInstanceNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInstanceStatusException = (output, context) => {
    let contents = {
        __type: "InvalidInstanceStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInstanceTypeException = (output, context) => {
    let contents = {
        __type: "InvalidInstanceTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidKeyPrefixFilterException = (output, context) => {
    let contents = {
        __type: "InvalidKeyPrefixFilterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = (output, context) => {
    let contents = {
        __type: "InvalidLifecycleEventHookExecutionIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = (output, context) => {
    let contents = {
        __type: "InvalidLifecycleEventHookExecutionStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLoadBalancerInfoException = (output, context) => {
    let contents = {
        __type: "InvalidLoadBalancerInfoException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMinimumHealthyHostValueException = (output, context) => {
    let contents = {
        __type: "InvalidMinimumHealthyHostValueException",
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
const deserializeAws_json1_1InvalidOnPremisesTagCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidOnPremisesTagCombinationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    let contents = {
        __type: "InvalidOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRegistrationStatusException = (output, context) => {
    let contents = {
        __type: "InvalidRegistrationStatusException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRevisionException = (output, context) => {
    let contents = {
        __type: "InvalidRevisionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
    let contents = {
        __type: "InvalidRoleException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSortByException = (output, context) => {
    let contents = {
        __type: "InvalidSortByException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSortOrderException = (output, context) => {
    let contents = {
        __type: "InvalidSortOrderException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    let contents = {
        __type: "InvalidTagException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagFilterException = (output, context) => {
    let contents = {
        __type: "InvalidTagFilterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagsToAddException = (output, context) => {
    let contents = {
        __type: "InvalidTagsToAddException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetFilterNameException = (output, context) => {
    let contents = {
        __type: "InvalidTargetFilterNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetGroupPairException = (output, context) => {
    let contents = {
        __type: "InvalidTargetGroupPairException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTargetInstancesException = (output, context) => {
    let contents = {
        __type: "InvalidTargetInstancesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    let contents = {
        __type: "InvalidTimeRangeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = (output, context) => {
    let contents = {
        __type: "InvalidTrafficRoutingConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTriggerConfigException = (output, context) => {
    let contents = {
        __type: "InvalidTriggerConfigException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = (output, context) => {
    let contents = {
        __type: "InvalidUpdateOutdatedInstancesOnlyValueException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LambdaFunctionInfo = (output, context) => {
    let contents = {
        __type: "LambdaFunctionInfo",
        currentVersion: undefined,
        functionAlias: undefined,
        functionName: undefined,
        targetVersion: undefined,
        targetVersionWeight: undefined
    };
    if (output.currentVersion !== undefined && output.currentVersion !== null) {
        contents.currentVersion = output.currentVersion;
    }
    if (output.functionAlias !== undefined && output.functionAlias !== null) {
        contents.functionAlias = output.functionAlias;
    }
    if (output.functionName !== undefined && output.functionName !== null) {
        contents.functionName = output.functionName;
    }
    if (output.targetVersion !== undefined && output.targetVersion !== null) {
        contents.targetVersion = output.targetVersion;
    }
    if (output.targetVersionWeight !== undefined &&
        output.targetVersionWeight !== null) {
        contents.targetVersionWeight = output.targetVersionWeight;
    }
    return contents;
};
const deserializeAws_json1_1LambdaTarget = (output, context) => {
    let contents = {
        __type: "LambdaTarget",
        deploymentId: undefined,
        lambdaFunctionInfo: undefined,
        lastUpdatedAt: undefined,
        lifecycleEvents: undefined,
        status: undefined,
        targetArn: undefined,
        targetId: undefined
    };
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.lambdaFunctionInfo !== undefined &&
        output.lambdaFunctionInfo !== null) {
        contents.lambdaFunctionInfo = deserializeAws_json1_1LambdaFunctionInfo(output.lambdaFunctionInfo, context);
    }
    if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
        contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
    }
    if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
        contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetArn !== undefined && output.targetArn !== null) {
        contents.targetArn = output.targetArn;
    }
    if (output.targetId !== undefined && output.targetId !== null) {
        contents.targetId = output.targetId;
    }
    return contents;
};
const deserializeAws_json1_1LastDeploymentInfo = (output, context) => {
    let contents = {
        __type: "LastDeploymentInfo",
        createTime: undefined,
        deploymentId: undefined,
        endTime: undefined,
        status: undefined
    };
    if (output.createTime !== undefined && output.createTime !== null) {
        contents.createTime = new Date(Math.round(output.createTime * 1000));
    }
    if (output.deploymentId !== undefined && output.deploymentId !== null) {
        contents.deploymentId = output.deploymentId;
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1LifecycleEvent = (output, context) => {
    let contents = {
        __type: "LifecycleEvent",
        diagnostics: undefined,
        endTime: undefined,
        lifecycleEventName: undefined,
        startTime: undefined,
        status: undefined
    };
    if (output.diagnostics !== undefined && output.diagnostics !== null) {
        contents.diagnostics = deserializeAws_json1_1Diagnostics(output.diagnostics, context);
    }
    if (output.endTime !== undefined && output.endTime !== null) {
        contents.endTime = new Date(Math.round(output.endTime * 1000));
    }
    if (output.lifecycleEventName !== undefined &&
        output.lifecycleEventName !== null) {
        contents.lifecycleEventName = output.lifecycleEventName;
    }
    if (output.startTime !== undefined && output.startTime !== null) {
        contents.startTime = new Date(Math.round(output.startTime * 1000));
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    return contents;
};
const deserializeAws_json1_1LifecycleEventAlreadyCompletedException = (output, context) => {
    let contents = {
        __type: "LifecycleEventAlreadyCompletedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LifecycleEventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LifecycleEvent(entry, context));
};
const deserializeAws_json1_1LifecycleHookLimitExceededException = (output, context) => {
    let contents = {
        __type: "LifecycleHookLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListApplicationRevisionsOutput = (output, context) => {
    let contents = {
        __type: "ListApplicationRevisionsOutput",
        nextToken: undefined,
        revisions: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.revisions !== undefined && output.revisions !== null) {
        contents.revisions = deserializeAws_json1_1RevisionLocationList(output.revisions, context);
    }
    return contents;
};
const deserializeAws_json1_1ListApplicationsOutput = (output, context) => {
    let contents = {
        __type: "ListApplicationsOutput",
        applications: undefined,
        nextToken: undefined
    };
    if (output.applications !== undefined && output.applications !== null) {
        contents.applications = deserializeAws_json1_1ApplicationsList(output.applications, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeploymentConfigsOutput = (output, context) => {
    let contents = {
        __type: "ListDeploymentConfigsOutput",
        deploymentConfigsList: undefined,
        nextToken: undefined
    };
    if (output.deploymentConfigsList !== undefined &&
        output.deploymentConfigsList !== null) {
        contents.deploymentConfigsList = deserializeAws_json1_1DeploymentConfigsList(output.deploymentConfigsList, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeploymentGroupsOutput = (output, context) => {
    let contents = {
        __type: "ListDeploymentGroupsOutput",
        applicationName: undefined,
        deploymentGroups: undefined,
        nextToken: undefined
    };
    if (output.applicationName !== undefined && output.applicationName !== null) {
        contents.applicationName = output.applicationName;
    }
    if (output.deploymentGroups !== undefined &&
        output.deploymentGroups !== null) {
        contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeploymentInstancesOutput = (output, context) => {
    let contents = {
        __type: "ListDeploymentInstancesOutput",
        instancesList: undefined,
        nextToken: undefined
    };
    if (output.instancesList !== undefined && output.instancesList !== null) {
        contents.instancesList = deserializeAws_json1_1InstancesList(output.instancesList, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDeploymentTargetsOutput = (output, context) => {
    let contents = {
        __type: "ListDeploymentTargetsOutput",
        nextToken: undefined,
        targetIds: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.targetIds !== undefined && output.targetIds !== null) {
        contents.targetIds = deserializeAws_json1_1TargetIdList(output.targetIds, context);
    }
    return contents;
};
const deserializeAws_json1_1ListDeploymentsOutput = (output, context) => {
    let contents = {
        __type: "ListDeploymentsOutput",
        deployments: undefined,
        nextToken: undefined
    };
    if (output.deployments !== undefined && output.deployments !== null) {
        contents.deployments = deserializeAws_json1_1DeploymentsList(output.deployments, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = (output, context) => {
    let contents = {
        __type: "ListGitHubAccountTokenNamesOutput",
        nextToken: undefined,
        tokenNameList: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.tokenNameList !== undefined && output.tokenNameList !== null) {
        contents.tokenNameList = deserializeAws_json1_1GitHubAccountTokenNameList(output.tokenNameList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListOnPremisesInstancesOutput = (output, context) => {
    let contents = {
        __type: "ListOnPremisesInstancesOutput",
        instanceNames: undefined,
        nextToken: undefined
    };
    if (output.instanceNames !== undefined && output.instanceNames !== null) {
        contents.instanceNames = deserializeAws_json1_1InstanceNameList(output.instanceNames, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
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
const deserializeAws_json1_1ListenerArnList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1LoadBalancerInfo = (output, context) => {
    let contents = {
        __type: "LoadBalancerInfo",
        elbInfoList: undefined,
        targetGroupInfoList: undefined,
        targetGroupPairInfoList: undefined
    };
    if (output.elbInfoList !== undefined && output.elbInfoList !== null) {
        contents.elbInfoList = deserializeAws_json1_1ELBInfoList(output.elbInfoList, context);
    }
    if (output.targetGroupInfoList !== undefined &&
        output.targetGroupInfoList !== null) {
        contents.targetGroupInfoList = deserializeAws_json1_1TargetGroupInfoList(output.targetGroupInfoList, context);
    }
    if (output.targetGroupPairInfoList !== undefined &&
        output.targetGroupPairInfoList !== null) {
        contents.targetGroupPairInfoList = deserializeAws_json1_1TargetGroupPairInfoList(output.targetGroupPairInfoList, context);
    }
    return contents;
};
const deserializeAws_json1_1MinimumHealthyHosts = (output, context) => {
    let contents = {
        __type: "MinimumHealthyHosts",
        type: undefined,
        value: undefined
    };
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1MultipleIamArnsProvidedException = (output, context) => {
    let contents = {
        __type: "MultipleIamArnsProvidedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1OnPremisesTagSet = (output, context) => {
    let contents = {
        __type: "OnPremisesTagSet",
        onPremisesTagSetList: undefined
    };
    if (output.onPremisesTagSetList !== undefined &&
        output.onPremisesTagSetList !== null) {
        contents.onPremisesTagSetList = deserializeAws_json1_1OnPremisesTagSetList(output.onPremisesTagSetList, context);
    }
    return contents;
};
const deserializeAws_json1_1OnPremisesTagSetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagFilterList(entry, context));
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    let contents = {
        __type: "OperationNotSupportedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = (output, context) => {
    let contents = {
        __type: "PutLifecycleEventHookExecutionStatusOutput",
        lifecycleEventHookExecutionId: undefined
    };
    if (output.lifecycleEventHookExecutionId !== undefined &&
        output.lifecycleEventHookExecutionId !== null) {
        contents.lifecycleEventHookExecutionId =
            output.lifecycleEventHookExecutionId;
    }
    return contents;
};
const deserializeAws_json1_1RawString = (output, context) => {
    let contents = {
        __type: "RawString",
        content: undefined,
        sha256: undefined
    };
    if (output.content !== undefined && output.content !== null) {
        contents.content = output.content;
    }
    if (output.sha256 !== undefined && output.sha256 !== null) {
        contents.sha256 = output.sha256;
    }
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredException = (output, context) => {
    let contents = {
        __type: "ResourceArnRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceValidationException = (output, context) => {
    let contents = {
        __type: "ResourceValidationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RevisionDoesNotExistException = (output, context) => {
    let contents = {
        __type: "RevisionDoesNotExistException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RevisionInfo = (output, context) => {
    let contents = {
        __type: "RevisionInfo",
        genericRevisionInfo: undefined,
        revisionLocation: undefined
    };
    if (output.genericRevisionInfo !== undefined &&
        output.genericRevisionInfo !== null) {
        contents.genericRevisionInfo = deserializeAws_json1_1GenericRevisionInfo(output.genericRevisionInfo, context);
    }
    if (output.revisionLocation !== undefined &&
        output.revisionLocation !== null) {
        contents.revisionLocation = deserializeAws_json1_1RevisionLocation(output.revisionLocation, context);
    }
    return contents;
};
const deserializeAws_json1_1RevisionInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RevisionInfo(entry, context));
};
const deserializeAws_json1_1RevisionLocation = (output, context) => {
    let contents = {
        __type: "RevisionLocation",
        appSpecContent: undefined,
        gitHubLocation: undefined,
        revisionType: undefined,
        s3Location: undefined,
        string: undefined
    };
    if (output.appSpecContent !== undefined && output.appSpecContent !== null) {
        contents.appSpecContent = deserializeAws_json1_1AppSpecContent(output.appSpecContent, context);
    }
    if (output.gitHubLocation !== undefined && output.gitHubLocation !== null) {
        contents.gitHubLocation = deserializeAws_json1_1GitHubLocation(output.gitHubLocation, context);
    }
    if (output.revisionType !== undefined && output.revisionType !== null) {
        contents.revisionType = output.revisionType;
    }
    if (output.s3Location !== undefined && output.s3Location !== null) {
        contents.s3Location = deserializeAws_json1_1S3Location(output.s3Location, context);
    }
    if (output.string !== undefined && output.string !== null) {
        contents.string = deserializeAws_json1_1RawString(output.string, context);
    }
    return contents;
};
const deserializeAws_json1_1RevisionLocationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RevisionLocation(entry, context));
};
const deserializeAws_json1_1RevisionRequiredException = (output, context) => {
    let contents = {
        __type: "RevisionRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RoleRequiredException = (output, context) => {
    let contents = {
        __type: "RoleRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1RollbackInfo = (output, context) => {
    let contents = {
        __type: "RollbackInfo",
        rollbackDeploymentId: undefined,
        rollbackMessage: undefined,
        rollbackTriggeringDeploymentId: undefined
    };
    if (output.rollbackDeploymentId !== undefined &&
        output.rollbackDeploymentId !== null) {
        contents.rollbackDeploymentId = output.rollbackDeploymentId;
    }
    if (output.rollbackMessage !== undefined && output.rollbackMessage !== null) {
        contents.rollbackMessage = output.rollbackMessage;
    }
    if (output.rollbackTriggeringDeploymentId !== undefined &&
        output.rollbackTriggeringDeploymentId !== null) {
        contents.rollbackTriggeringDeploymentId =
            output.rollbackTriggeringDeploymentId;
    }
    return contents;
};
const deserializeAws_json1_1S3Location = (output, context) => {
    let contents = {
        __type: "S3Location",
        bucket: undefined,
        bundleType: undefined,
        eTag: undefined,
        key: undefined,
        version: undefined
    };
    if (output.bucket !== undefined && output.bucket !== null) {
        contents.bucket = output.bucket;
    }
    if (output.bundleType !== undefined && output.bundleType !== null) {
        contents.bundleType = output.bundleType;
    }
    if (output.eTag !== undefined && output.eTag !== null) {
        contents.eTag = output.eTag;
    }
    if (output.key !== undefined && output.key !== null) {
        contents.key = output.key;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1StopDeploymentOutput = (output, context) => {
    let contents = {
        __type: "StopDeploymentOutput",
        status: undefined,
        statusMessage: undefined
    };
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusMessage !== undefined && output.statusMessage !== null) {
        contents.statusMessage = output.statusMessage;
    }
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
const deserializeAws_json1_1TagFilter = (output, context) => {
    let contents = {
        __type: "TagFilter",
        Key: undefined,
        Type: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagFilterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TagFilter(entry, context));
};
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagRequiredException = (output, context) => {
    let contents = {
        __type: "TagRequiredException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    let contents = {
        __type: "TagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1TagSetListLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagSetListLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TargetGroupInfo = (output, context) => {
    let contents = {
        __type: "TargetGroupInfo",
        name: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1TargetGroupInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetGroupInfo(entry, context));
};
const deserializeAws_json1_1TargetGroupPairInfo = (output, context) => {
    let contents = {
        __type: "TargetGroupPairInfo",
        prodTrafficRoute: undefined,
        targetGroups: undefined,
        testTrafficRoute: undefined
    };
    if (output.prodTrafficRoute !== undefined &&
        output.prodTrafficRoute !== null) {
        contents.prodTrafficRoute = deserializeAws_json1_1TrafficRoute(output.prodTrafficRoute, context);
    }
    if (output.targetGroups !== undefined && output.targetGroups !== null) {
        contents.targetGroups = deserializeAws_json1_1TargetGroupInfoList(output.targetGroups, context);
    }
    if (output.testTrafficRoute !== undefined &&
        output.testTrafficRoute !== null) {
        contents.testTrafficRoute = deserializeAws_json1_1TrafficRoute(output.testTrafficRoute, context);
    }
    return contents;
};
const deserializeAws_json1_1TargetGroupPairInfoList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TargetGroupPairInfo(entry, context));
};
const deserializeAws_json1_1TargetIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TargetInstances = (output, context) => {
    let contents = {
        __type: "TargetInstances",
        autoScalingGroups: undefined,
        ec2TagSet: undefined,
        tagFilters: undefined
    };
    if (output.autoScalingGroups !== undefined &&
        output.autoScalingGroups !== null) {
        contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupNameList(output.autoScalingGroups, context);
    }
    if (output.ec2TagSet !== undefined && output.ec2TagSet !== null) {
        contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context);
    }
    if (output.tagFilters !== undefined && output.tagFilters !== null) {
        contents.tagFilters = deserializeAws_json1_1EC2TagFilterList(output.tagFilters, context);
    }
    return contents;
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TimeBasedCanary = (output, context) => {
    let contents = {
        __type: "TimeBasedCanary",
        canaryInterval: undefined,
        canaryPercentage: undefined
    };
    if (output.canaryInterval !== undefined && output.canaryInterval !== null) {
        contents.canaryInterval = output.canaryInterval;
    }
    if (output.canaryPercentage !== undefined &&
        output.canaryPercentage !== null) {
        contents.canaryPercentage = output.canaryPercentage;
    }
    return contents;
};
const deserializeAws_json1_1TimeBasedLinear = (output, context) => {
    let contents = {
        __type: "TimeBasedLinear",
        linearInterval: undefined,
        linearPercentage: undefined
    };
    if (output.linearInterval !== undefined && output.linearInterval !== null) {
        contents.linearInterval = output.linearInterval;
    }
    if (output.linearPercentage !== undefined &&
        output.linearPercentage !== null) {
        contents.linearPercentage = output.linearPercentage;
    }
    return contents;
};
const deserializeAws_json1_1TrafficRoute = (output, context) => {
    let contents = {
        __type: "TrafficRoute",
        listenerArns: undefined
    };
    if (output.listenerArns !== undefined && output.listenerArns !== null) {
        contents.listenerArns = deserializeAws_json1_1ListenerArnList(output.listenerArns, context);
    }
    return contents;
};
const deserializeAws_json1_1TrafficRoutingConfig = (output, context) => {
    let contents = {
        __type: "TrafficRoutingConfig",
        timeBasedCanary: undefined,
        timeBasedLinear: undefined,
        type: undefined
    };
    if (output.timeBasedCanary !== undefined && output.timeBasedCanary !== null) {
        contents.timeBasedCanary = deserializeAws_json1_1TimeBasedCanary(output.timeBasedCanary, context);
    }
    if (output.timeBasedLinear !== undefined && output.timeBasedLinear !== null) {
        contents.timeBasedLinear = deserializeAws_json1_1TimeBasedLinear(output.timeBasedLinear, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1TriggerConfig = (output, context) => {
    let contents = {
        __type: "TriggerConfig",
        triggerEvents: undefined,
        triggerName: undefined,
        triggerTargetArn: undefined
    };
    if (output.triggerEvents !== undefined && output.triggerEvents !== null) {
        contents.triggerEvents = deserializeAws_json1_1TriggerEventTypeList(output.triggerEvents, context);
    }
    if (output.triggerName !== undefined && output.triggerName !== null) {
        contents.triggerName = output.triggerName;
    }
    if (output.triggerTargetArn !== undefined &&
        output.triggerTargetArn !== null) {
        contents.triggerTargetArn = output.triggerTargetArn;
    }
    return contents;
};
const deserializeAws_json1_1TriggerConfigList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TriggerConfig(entry, context));
};
const deserializeAws_json1_1TriggerEventTypeList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1TriggerTargetsLimitExceededException = (output, context) => {
    let contents = {
        __type: "TriggerTargetsLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = (output, context) => {
    let contents = {
        __type: "UnsupportedActionForDeploymentTypeException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    let contents = {
        __type: "UntagResourceOutput"
    };
    return contents;
};
const deserializeAws_json1_1UpdateDeploymentGroupOutput = (output, context) => {
    let contents = {
        __type: "UpdateDeploymentGroupOutput",
        hooksNotCleanedUp: undefined
    };
    if (output.hooksNotCleanedUp !== undefined &&
        output.hooksNotCleanedUp !== null) {
        contents.hooksNotCleanedUp = deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context);
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