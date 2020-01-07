"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AcceptMatchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.AcceptMatch";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptMatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptMatchCommand = serializeAws_json1_1AcceptMatchCommand;
async function serializeAws_json1_1CreateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
async function serializeAws_json1_1CreateBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateBuildCommand = serializeAws_json1_1CreateBuildCommand;
async function serializeAws_json1_1CreateFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateFleetCommand = serializeAws_json1_1CreateFleetCommand;
async function serializeAws_json1_1CreateGameSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateGameSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGameSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGameSessionCommand = serializeAws_json1_1CreateGameSessionCommand;
async function serializeAws_json1_1CreateGameSessionQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateGameSessionQueue";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGameSessionQueueCommand = serializeAws_json1_1CreateGameSessionQueueCommand;
async function serializeAws_json1_1CreateMatchmakingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateMatchmakingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMatchmakingConfigurationCommand = serializeAws_json1_1CreateMatchmakingConfigurationCommand;
async function serializeAws_json1_1CreateMatchmakingRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateMatchmakingRuleSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateMatchmakingRuleSetCommand = serializeAws_json1_1CreateMatchmakingRuleSetCommand;
async function serializeAws_json1_1CreatePlayerSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreatePlayerSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePlayerSessionCommand = serializeAws_json1_1CreatePlayerSessionCommand;
async function serializeAws_json1_1CreatePlayerSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreatePlayerSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreatePlayerSessionsCommand = serializeAws_json1_1CreatePlayerSessionsCommand;
async function serializeAws_json1_1CreateScriptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateScript";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateScriptCommand = serializeAws_json1_1CreateScriptCommand;
async function serializeAws_json1_1CreateVpcPeeringAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateVpcPeeringAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringAuthorizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = serializeAws_json1_1CreateVpcPeeringAuthorizationCommand;
async function serializeAws_json1_1CreateVpcPeeringConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.CreateVpcPeeringConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateVpcPeeringConnectionCommand = serializeAws_json1_1CreateVpcPeeringConnectionCommand;
async function serializeAws_json1_1DeleteAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
async function serializeAws_json1_1DeleteBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteBuildCommand = serializeAws_json1_1DeleteBuildCommand;
async function serializeAws_json1_1DeleteFleetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteFleet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFleetCommand = serializeAws_json1_1DeleteFleetCommand;
async function serializeAws_json1_1DeleteGameSessionQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteGameSessionQueue";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteGameSessionQueueCommand = serializeAws_json1_1DeleteGameSessionQueueCommand;
async function serializeAws_json1_1DeleteMatchmakingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteMatchmakingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMatchmakingConfigurationCommand = serializeAws_json1_1DeleteMatchmakingConfigurationCommand;
async function serializeAws_json1_1DeleteMatchmakingRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteMatchmakingRuleSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteMatchmakingRuleSetCommand = serializeAws_json1_1DeleteMatchmakingRuleSetCommand;
async function serializeAws_json1_1DeleteScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteScalingPolicyCommand = serializeAws_json1_1DeleteScalingPolicyCommand;
async function serializeAws_json1_1DeleteScriptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteScript";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteScriptCommand = serializeAws_json1_1DeleteScriptCommand;
async function serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteVpcPeeringAuthorization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringAuthorizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand;
async function serializeAws_json1_1DeleteVpcPeeringConnectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DeleteVpcPeeringConnection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteVpcPeeringConnectionCommand = serializeAws_json1_1DeleteVpcPeeringConnectionCommand;
async function serializeAws_json1_1DescribeAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAliasCommand = serializeAws_json1_1DescribeAliasCommand;
async function serializeAws_json1_1DescribeBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeBuildCommand = serializeAws_json1_1DescribeBuildCommand;
async function serializeAws_json1_1DescribeEC2InstanceLimitsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeEC2InstanceLimits";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEC2InstanceLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEC2InstanceLimitsCommand = serializeAws_json1_1DescribeEC2InstanceLimitsCommand;
async function serializeAws_json1_1DescribeFleetAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeFleetAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetAttributesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetAttributesCommand = serializeAws_json1_1DescribeFleetAttributesCommand;
async function serializeAws_json1_1DescribeFleetCapacityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeFleetCapacity";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetCapacityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetCapacityCommand = serializeAws_json1_1DescribeFleetCapacityCommand;
async function serializeAws_json1_1DescribeFleetEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeFleetEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetEventsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetEventsCommand = serializeAws_json1_1DescribeFleetEventsCommand;
async function serializeAws_json1_1DescribeFleetPortSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeFleetPortSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetPortSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetPortSettingsCommand = serializeAws_json1_1DescribeFleetPortSettingsCommand;
async function serializeAws_json1_1DescribeFleetUtilizationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeFleetUtilization";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetUtilizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeFleetUtilizationCommand = serializeAws_json1_1DescribeFleetUtilizationCommand;
async function serializeAws_json1_1DescribeGameSessionDetailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeGameSessionDetails";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGameSessionDetailsCommand = serializeAws_json1_1DescribeGameSessionDetailsCommand;
async function serializeAws_json1_1DescribeGameSessionPlacementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeGameSessionPlacement";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGameSessionPlacementCommand = serializeAws_json1_1DescribeGameSessionPlacementCommand;
async function serializeAws_json1_1DescribeGameSessionQueuesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeGameSessionQueues";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionQueuesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGameSessionQueuesCommand = serializeAws_json1_1DescribeGameSessionQueuesCommand;
async function serializeAws_json1_1DescribeGameSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeGameSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeGameSessionsCommand = serializeAws_json1_1DescribeGameSessionsCommand;
async function serializeAws_json1_1DescribeInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstancesCommand = serializeAws_json1_1DescribeInstancesCommand;
async function serializeAws_json1_1DescribeMatchmakingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeMatchmaking";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMatchmakingCommand = serializeAws_json1_1DescribeMatchmakingCommand;
async function serializeAws_json1_1DescribeMatchmakingConfigurationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeMatchmakingConfigurations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingConfigurationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = serializeAws_json1_1DescribeMatchmakingConfigurationsCommand;
async function serializeAws_json1_1DescribeMatchmakingRuleSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeMatchmakingRuleSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingRuleSetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = serializeAws_json1_1DescribeMatchmakingRuleSetsCommand;
async function serializeAws_json1_1DescribePlayerSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribePlayerSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePlayerSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePlayerSessionsCommand = serializeAws_json1_1DescribePlayerSessionsCommand;
async function serializeAws_json1_1DescribeRuntimeConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeRuntimeConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRuntimeConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRuntimeConfigurationCommand = serializeAws_json1_1DescribeRuntimeConfigurationCommand;
async function serializeAws_json1_1DescribeScalingPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeScalingPolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScalingPoliciesCommand = serializeAws_json1_1DescribeScalingPoliciesCommand;
async function serializeAws_json1_1DescribeScriptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeScript";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeScriptCommand = serializeAws_json1_1DescribeScriptCommand;
async function serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeVpcPeeringAuthorizations";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand;
async function serializeAws_json1_1DescribeVpcPeeringConnectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.DescribeVpcPeeringConnections";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringConnectionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = serializeAws_json1_1DescribeVpcPeeringConnectionsCommand;
async function serializeAws_json1_1GetGameSessionLogUrlCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.GetGameSessionLogUrl";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGameSessionLogUrlInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetGameSessionLogUrlCommand = serializeAws_json1_1GetGameSessionLogUrlCommand;
async function serializeAws_json1_1GetInstanceAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.GetInstanceAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInstanceAccessCommand = serializeAws_json1_1GetInstanceAccessCommand;
async function serializeAws_json1_1ListAliasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ListAliases";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
async function serializeAws_json1_1ListBuildsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ListBuilds";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBuildsCommand = serializeAws_json1_1ListBuildsCommand;
async function serializeAws_json1_1ListFleetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ListFleets";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFleetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFleetsCommand = serializeAws_json1_1ListFleetsCommand;
async function serializeAws_json1_1ListScriptsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ListScripts";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListScriptsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListScriptsCommand = serializeAws_json1_1ListScriptsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1PutScalingPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.PutScalingPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutScalingPolicyCommand = serializeAws_json1_1PutScalingPolicyCommand;
async function serializeAws_json1_1RequestUploadCredentialsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.RequestUploadCredentials";
    let body;
    body = JSON.stringify(serializeAws_json1_1RequestUploadCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RequestUploadCredentialsCommand = serializeAws_json1_1RequestUploadCredentialsCommand;
async function serializeAws_json1_1ResolveAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ResolveAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ResolveAliasCommand = serializeAws_json1_1ResolveAliasCommand;
async function serializeAws_json1_1SearchGameSessionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.SearchGameSessions";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchGameSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchGameSessionsCommand = serializeAws_json1_1SearchGameSessionsCommand;
async function serializeAws_json1_1StartFleetActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StartFleetActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartFleetActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartFleetActionsCommand = serializeAws_json1_1StartFleetActionsCommand;
async function serializeAws_json1_1StartGameSessionPlacementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StartGameSessionPlacement";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartGameSessionPlacementCommand = serializeAws_json1_1StartGameSessionPlacementCommand;
async function serializeAws_json1_1StartMatchBackfillCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StartMatchBackfill";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMatchBackfillInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMatchBackfillCommand = serializeAws_json1_1StartMatchBackfillCommand;
async function serializeAws_json1_1StartMatchmakingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StartMatchmaking";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartMatchmakingCommand = serializeAws_json1_1StartMatchmakingCommand;
async function serializeAws_json1_1StopFleetActionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StopFleetActions";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopFleetActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopFleetActionsCommand = serializeAws_json1_1StopFleetActionsCommand;
async function serializeAws_json1_1StopGameSessionPlacementCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StopGameSessionPlacement";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopGameSessionPlacementCommand = serializeAws_json1_1StopGameSessionPlacementCommand;
async function serializeAws_json1_1StopMatchmakingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.StopMatchmaking";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopMatchmakingCommand = serializeAws_json1_1StopMatchmakingCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAliasCommand = serializeAws_json1_1UpdateAliasCommand;
async function serializeAws_json1_1UpdateBuildCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateBuild";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateBuildCommand = serializeAws_json1_1UpdateBuildCommand;
async function serializeAws_json1_1UpdateFleetAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateFleetAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetAttributesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFleetAttributesCommand = serializeAws_json1_1UpdateFleetAttributesCommand;
async function serializeAws_json1_1UpdateFleetCapacityCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateFleetCapacity";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetCapacityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFleetCapacityCommand = serializeAws_json1_1UpdateFleetCapacityCommand;
async function serializeAws_json1_1UpdateFleetPortSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateFleetPortSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetPortSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateFleetPortSettingsCommand = serializeAws_json1_1UpdateFleetPortSettingsCommand;
async function serializeAws_json1_1UpdateGameSessionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateGameSession";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGameSessionCommand = serializeAws_json1_1UpdateGameSessionCommand;
async function serializeAws_json1_1UpdateGameSessionQueueCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateGameSessionQueue";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateGameSessionQueueCommand = serializeAws_json1_1UpdateGameSessionQueueCommand;
async function serializeAws_json1_1UpdateMatchmakingConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateMatchmakingConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMatchmakingConfigurationCommand = serializeAws_json1_1UpdateMatchmakingConfigurationCommand;
async function serializeAws_json1_1UpdateRuntimeConfigurationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateRuntimeConfiguration";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuntimeConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRuntimeConfigurationCommand = serializeAws_json1_1UpdateRuntimeConfigurationCommand;
async function serializeAws_json1_1UpdateScriptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.UpdateScript";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateScriptCommand = serializeAws_json1_1UpdateScriptCommand;
async function serializeAws_json1_1ValidateMatchmakingRuleSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "GameLift.ValidateMatchmakingRuleSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1ValidateMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ValidateMatchmakingRuleSetCommand = serializeAws_json1_1ValidateMatchmakingRuleSetCommand;
async function deserializeAws_json1_1AcceptMatchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptMatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptMatchOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptMatchOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptMatchCommand = deserializeAws_json1_1AcceptMatchCommand;
async function deserializeAws_json1_1AcceptMatchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAliasOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
async function deserializeAws_json1_1CreateAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBuildOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateBuildOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateBuildCommand = deserializeAws_json1_1CreateBuildCommand;
async function deserializeAws_json1_1CreateBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFleetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateFleetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateFleetCommand = deserializeAws_json1_1CreateFleetCommand;
async function deserializeAws_json1_1CreateFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGameSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGameSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGameSessionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGameSessionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGameSessionCommand = deserializeAws_json1_1CreateGameSessionCommand;
async function deserializeAws_json1_1CreateGameSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "FleetCapacityExceededException":
        case "com.amazonaws.gameliftapi.v20151001#FleetCapacityExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1FleetCapacityExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.gameliftapi.v20151001#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateGameSessionQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGameSessionQueueOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGameSessionQueueOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGameSessionQueueCommand = deserializeAws_json1_1CreateGameSessionQueueCommand;
async function deserializeAws_json1_1CreateGameSessionQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateMatchmakingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMatchmakingConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMatchmakingConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMatchmakingConfigurationCommand = deserializeAws_json1_1CreateMatchmakingConfigurationCommand;
async function deserializeAws_json1_1CreateMatchmakingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateMatchmakingRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMatchmakingRuleSetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateMatchmakingRuleSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateMatchmakingRuleSetCommand = deserializeAws_json1_1CreateMatchmakingRuleSetCommand;
async function deserializeAws_json1_1CreateMatchmakingRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePlayerSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePlayerSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePlayerSessionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePlayerSessionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePlayerSessionCommand = deserializeAws_json1_1CreatePlayerSessionCommand;
async function deserializeAws_json1_1CreatePlayerSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "GameSessionFullException":
        case "com.amazonaws.gameliftapi.v20151001#GameSessionFullException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidGameSessionStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreatePlayerSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreatePlayerSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePlayerSessionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreatePlayerSessionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreatePlayerSessionsCommand = deserializeAws_json1_1CreatePlayerSessionsCommand;
async function deserializeAws_json1_1CreatePlayerSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "GameSessionFullException":
        case "com.amazonaws.gameliftapi.v20151001#GameSessionFullException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidGameSessionStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateScriptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateScriptOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateScriptOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateScriptCommand = deserializeAws_json1_1CreateScriptCommand;
async function deserializeAws_json1_1CreateScriptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVpcPeeringAuthorizationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand;
async function deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateVpcPeeringConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateVpcPeeringConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVpcPeeringConnectionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateVpcPeeringConnectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateVpcPeeringConnectionCommand = deserializeAws_json1_1CreateVpcPeeringConnectionCommand;
async function deserializeAws_json1_1CreateVpcPeeringConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
async function deserializeAws_json1_1DeleteAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteBuildCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteBuildCommand = deserializeAws_json1_1DeleteBuildCommand;
async function deserializeAws_json1_1DeleteBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteFleetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFleetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFleetCommand = deserializeAws_json1_1DeleteFleetCommand;
async function deserializeAws_json1_1DeleteFleetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteGameSessionQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGameSessionQueueOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteGameSessionQueueOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteGameSessionQueueCommand = deserializeAws_json1_1DeleteGameSessionQueueCommand;
async function deserializeAws_json1_1DeleteGameSessionQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteMatchmakingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMatchmakingConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMatchmakingConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = deserializeAws_json1_1DeleteMatchmakingConfigurationCommand;
async function deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteMatchmakingRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMatchmakingRuleSetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteMatchmakingRuleSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = deserializeAws_json1_1DeleteMatchmakingRuleSetCommand;
async function deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteScalingPolicyCommand = deserializeAws_json1_1DeleteScalingPolicyCommand;
async function deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteScriptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteScriptCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteScriptCommand = deserializeAws_json1_1DeleteScriptCommand;
async function deserializeAws_json1_1DeleteScriptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteVpcPeeringAuthorizationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand;
async function deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteVpcPeeringConnectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVpcPeeringConnectionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteVpcPeeringConnectionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = deserializeAws_json1_1DeleteVpcPeeringConnectionCommand;
async function deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAliasOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAliasOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAliasCommand = deserializeAws_json1_1DescribeAliasCommand;
async function deserializeAws_json1_1DescribeAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBuildOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeBuildOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeBuildCommand = deserializeAws_json1_1DescribeBuildCommand;
async function deserializeAws_json1_1DescribeBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeEC2InstanceLimitsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEC2InstanceLimitsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEC2InstanceLimitsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = deserializeAws_json1_1DescribeEC2InstanceLimitsCommand;
async function deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetAttributesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetAttributesCommand = deserializeAws_json1_1DescribeFleetAttributesCommand;
async function deserializeAws_json1_1DescribeFleetAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetCapacityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetCapacityOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetCapacityOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetCapacityCommand = deserializeAws_json1_1DescribeFleetCapacityCommand;
async function deserializeAws_json1_1DescribeFleetCapacityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetEventsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetEventsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetEventsCommand = deserializeAws_json1_1DescribeFleetEventsCommand;
async function deserializeAws_json1_1DescribeFleetEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetPortSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetPortSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetPortSettingsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetPortSettingsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetPortSettingsCommand = deserializeAws_json1_1DescribeFleetPortSettingsCommand;
async function deserializeAws_json1_1DescribeFleetPortSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeFleetUtilizationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeFleetUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetUtilizationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeFleetUtilizationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeFleetUtilizationCommand = deserializeAws_json1_1DescribeFleetUtilizationCommand;
async function deserializeAws_json1_1DescribeFleetUtilizationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGameSessionDetailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGameSessionDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionDetailsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGameSessionDetailsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGameSessionDetailsCommand = deserializeAws_json1_1DescribeGameSessionDetailsCommand;
async function deserializeAws_json1_1DescribeGameSessionDetailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGameSessionPlacementCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionPlacementOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGameSessionPlacementOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGameSessionPlacementCommand = deserializeAws_json1_1DescribeGameSessionPlacementCommand;
async function deserializeAws_json1_1DescribeGameSessionPlacementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGameSessionQueuesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGameSessionQueuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionQueuesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGameSessionQueuesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGameSessionQueuesCommand = deserializeAws_json1_1DescribeGameSessionQueuesCommand;
async function deserializeAws_json1_1DescribeGameSessionQueuesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeGameSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeGameSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeGameSessionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeGameSessionsCommand = deserializeAws_json1_1DescribeGameSessionsCommand;
async function deserializeAws_json1_1DescribeGameSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeInstancesCommand = deserializeAws_json1_1DescribeInstancesCommand;
async function deserializeAws_json1_1DescribeInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMatchmakingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMatchmakingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMatchmakingCommand = deserializeAws_json1_1DescribeMatchmakingCommand;
async function deserializeAws_json1_1DescribeMatchmakingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMatchmakingConfigurationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand;
async function deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMatchmakingRuleSetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand;
async function deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePlayerSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePlayerSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePlayerSessionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePlayerSessionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePlayerSessionsCommand = deserializeAws_json1_1DescribePlayerSessionsCommand;
async function deserializeAws_json1_1DescribePlayerSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeRuntimeConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRuntimeConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRuntimeConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRuntimeConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRuntimeConfigurationCommand = deserializeAws_json1_1DescribeRuntimeConfigurationCommand;
async function deserializeAws_json1_1DescribeRuntimeConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScalingPoliciesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScalingPoliciesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScalingPoliciesCommand = deserializeAws_json1_1DescribeScalingPoliciesCommand;
async function deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeScriptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScriptOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScriptOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeScriptCommand = deserializeAws_json1_1DescribeScriptCommand;
async function deserializeAws_json1_1DescribeScriptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeVpcPeeringAuthorizationsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand;
async function deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeVpcPeeringConnectionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand;
async function deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetGameSessionLogUrlCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetGameSessionLogUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGameSessionLogUrlOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetGameSessionLogUrlOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetGameSessionLogUrlCommand = deserializeAws_json1_1GetGameSessionLogUrlCommand;
async function deserializeAws_json1_1GetGameSessionLogUrlCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1GetInstanceAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInstanceAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceAccessOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInstanceAccessOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInstanceAccessCommand = deserializeAws_json1_1GetInstanceAccessCommand;
async function deserializeAws_json1_1GetInstanceAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAliasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAliasesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
async function deserializeAws_json1_1ListAliasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListBuildsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBuildsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBuildsCommand = deserializeAws_json1_1ListBuildsCommand;
async function deserializeAws_json1_1ListBuildsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListFleetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFleetsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFleetsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFleetsCommand = deserializeAws_json1_1ListFleetsCommand;
async function deserializeAws_json1_1ListFleetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListScriptsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListScriptsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListScriptsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListScriptsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListScriptsCommand = deserializeAws_json1_1ListScriptsCommand;
async function deserializeAws_json1_1ListScriptsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutScalingPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutScalingPolicyOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutScalingPolicyOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutScalingPolicyCommand = deserializeAws_json1_1PutScalingPolicyCommand;
async function deserializeAws_json1_1PutScalingPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RequestUploadCredentialsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RequestUploadCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RequestUploadCredentialsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RequestUploadCredentialsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RequestUploadCredentialsCommand = deserializeAws_json1_1RequestUploadCredentialsCommand;
async function deserializeAws_json1_1RequestUploadCredentialsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ResolveAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ResolveAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveAliasOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ResolveAliasOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ResolveAliasCommand = deserializeAws_json1_1ResolveAliasCommand;
async function deserializeAws_json1_1ResolveAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SearchGameSessionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchGameSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchGameSessionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchGameSessionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchGameSessionsCommand = deserializeAws_json1_1SearchGameSessionsCommand;
async function deserializeAws_json1_1SearchGameSessionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gameliftapi.v20151001#TerminalRoutingStrategyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartFleetActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartFleetActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartFleetActionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartFleetActionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartFleetActionsCommand = deserializeAws_json1_1StartFleetActionsCommand;
async function deserializeAws_json1_1StartFleetActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartGameSessionPlacementCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartGameSessionPlacementOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartGameSessionPlacementOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartGameSessionPlacementCommand = deserializeAws_json1_1StartGameSessionPlacementCommand;
async function deserializeAws_json1_1StartGameSessionPlacementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartMatchBackfillCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMatchBackfillCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMatchBackfillOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMatchBackfillOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMatchBackfillCommand = deserializeAws_json1_1StartMatchBackfillCommand;
async function deserializeAws_json1_1StartMatchBackfillCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StartMatchmakingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMatchmakingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartMatchmakingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartMatchmakingCommand = deserializeAws_json1_1StartMatchmakingCommand;
async function deserializeAws_json1_1StartMatchmakingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopFleetActionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopFleetActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopFleetActionsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopFleetActionsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopFleetActionsCommand = deserializeAws_json1_1StopFleetActionsCommand;
async function deserializeAws_json1_1StopFleetActionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopGameSessionPlacementCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopGameSessionPlacementOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopGameSessionPlacementOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopGameSessionPlacementCommand = deserializeAws_json1_1StopGameSessionPlacementCommand;
async function deserializeAws_json1_1StopGameSessionPlacementCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopMatchmakingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopMatchmakingOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopMatchmakingOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopMatchmakingCommand = deserializeAws_json1_1StopMatchmakingCommand;
async function deserializeAws_json1_1StopMatchmakingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gameliftapi.v20151001#TaggingFailedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAliasOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAliasOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAliasCommand = deserializeAws_json1_1UpdateAliasCommand;
async function deserializeAws_json1_1UpdateAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateBuildCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBuildOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateBuildOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateBuildCommand = deserializeAws_json1_1UpdateBuildCommand;
async function deserializeAws_json1_1UpdateBuildCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateFleetAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFleetAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetAttributesOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFleetAttributesOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFleetAttributesCommand = deserializeAws_json1_1UpdateFleetAttributesCommand;
async function deserializeAws_json1_1UpdateFleetAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateFleetCapacityCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFleetCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetCapacityOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFleetCapacityOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFleetCapacityCommand = deserializeAws_json1_1UpdateFleetCapacityCommand;
async function deserializeAws_json1_1UpdateFleetCapacityCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateFleetPortSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateFleetPortSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetPortSettingsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateFleetPortSettingsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateFleetPortSettingsCommand = deserializeAws_json1_1UpdateFleetPortSettingsCommand;
async function deserializeAws_json1_1UpdateFleetPortSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.gameliftapi.v20151001#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGameSessionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGameSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameSessionOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGameSessionOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGameSessionCommand = deserializeAws_json1_1UpdateGameSessionCommand;
async function deserializeAws_json1_1UpdateGameSessionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gameliftapi.v20151001#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidGameSessionStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateGameSessionQueueCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameSessionQueueOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateGameSessionQueueOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateGameSessionQueueCommand = deserializeAws_json1_1UpdateGameSessionQueueCommand;
async function deserializeAws_json1_1UpdateGameSessionQueueCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateMatchmakingConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMatchmakingConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateMatchmakingConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = deserializeAws_json1_1UpdateMatchmakingConfigurationCommand;
async function deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateRuntimeConfigurationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRuntimeConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuntimeConfigurationOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateRuntimeConfigurationOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRuntimeConfigurationCommand = deserializeAws_json1_1UpdateRuntimeConfigurationCommand;
async function deserializeAws_json1_1UpdateRuntimeConfigurationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidFleetStatusException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateScriptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateScriptOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateScriptOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateScriptCommand = deserializeAws_json1_1UpdateScriptCommand;
async function deserializeAws_json1_1UpdateScriptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazonaws.gameliftapi.v20151001#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gameliftapi.v20151001#UnauthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ValidateMatchmakingRuleSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ValidateMatchmakingRuleSetOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ValidateMatchmakingRuleSetOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = deserializeAws_json1_1ValidateMatchmakingRuleSetCommand;
async function deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gameliftapi.v20151001#InternalServiceException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gameliftapi.v20151001#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gameliftapi.v20151001#UnsupportedRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = Object.assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1FleetCapacityExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FleetCapacityExceededException(body, context);
    const contents = Object.assign({ name: "FleetCapacityExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1GameSessionFullExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GameSessionFullException(body, context);
    const contents = Object.assign({ name: "GameSessionFullException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = Object.assign({ name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFleetStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFleetStatusException(body, context);
    const contents = Object.assign({ name: "InvalidFleetStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGameSessionStatusException(body, context);
    const contents = Object.assign({ name: "InvalidGameSessionStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TaggingFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaggingFailedException(body, context);
    const contents = Object.assign({ name: "TaggingFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TerminalRoutingStrategyException(body, context);
    const contents = Object.assign({ name: "TerminalRoutingStrategyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
    const contents = Object.assign({ name: "UnauthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedRegionException(body, context);
    const contents = Object.assign({ name: "UnsupportedRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcceptMatchInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptanceType !== undefined) {
        bodyParams["AcceptanceType"] = input.AcceptanceType;
    }
    if (input.PlayerIds !== undefined) {
        bodyParams["PlayerIds"] = serializeAws_json1_1StringList(input.PlayerIds, context);
    }
    if (input.TicketId !== undefined) {
        bodyParams["TicketId"] = input.TicketId;
    }
    return bodyParams;
};
const serializeAws_json1_1AttributeValue = (input, context) => {
    const bodyParams = {};
    if (input.N !== undefined) {
        bodyParams["N"] = input.N;
    }
    if (input.S !== undefined) {
        bodyParams["S"] = input.S;
    }
    if (input.SDM !== undefined) {
        bodyParams["SDM"] = serializeAws_json1_1StringDoubleMap(input.SDM, context);
    }
    if (input.SL !== undefined) {
        bodyParams["SL"] = serializeAws_json1_1StringList(input.SL, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CertificateConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.CertificateType !== undefined) {
        bodyParams["CertificateType"] = input.CertificateType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAliasInput = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoutingStrategy !== undefined) {
        bodyParams["RoutingStrategy"] = serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.OperatingSystem !== undefined) {
        bodyParams["OperatingSystem"] = input.OperatingSystem;
    }
    if (input.StorageLocation !== undefined) {
        bodyParams["StorageLocation"] = serializeAws_json1_1S3Location(input.StorageLocation, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateFleetInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    if (input.CertificateConfiguration !== undefined) {
        bodyParams["CertificateConfiguration"] = serializeAws_json1_1CertificateConfiguration(input.CertificateConfiguration, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.EC2InboundPermissions !== undefined) {
        bodyParams["EC2InboundPermissions"] = serializeAws_json1_1IpPermissionsList(input.EC2InboundPermissions, context);
    }
    if (input.EC2InstanceType !== undefined) {
        bodyParams["EC2InstanceType"] = input.EC2InstanceType;
    }
    if (input.FleetType !== undefined) {
        bodyParams["FleetType"] = input.FleetType;
    }
    if (input.InstanceRoleArn !== undefined) {
        bodyParams["InstanceRoleArn"] = input.InstanceRoleArn;
    }
    if (input.LogPaths !== undefined) {
        bodyParams["LogPaths"] = serializeAws_json1_1StringList(input.LogPaths, context);
    }
    if (input.MetricGroups !== undefined) {
        bodyParams["MetricGroups"] = serializeAws_json1_1MetricGroupList(input.MetricGroups, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NewGameSessionProtectionPolicy !== undefined) {
        bodyParams["NewGameSessionProtectionPolicy"] =
            input.NewGameSessionProtectionPolicy;
    }
    if (input.PeerVpcAwsAccountId !== undefined) {
        bodyParams["PeerVpcAwsAccountId"] = input.PeerVpcAwsAccountId;
    }
    if (input.PeerVpcId !== undefined) {
        bodyParams["PeerVpcId"] = input.PeerVpcId;
    }
    if (input.ResourceCreationLimitPolicy !== undefined) {
        bodyParams["ResourceCreationLimitPolicy"] = serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context);
    }
    if (input.RuntimeConfiguration !== undefined) {
        bodyParams["RuntimeConfiguration"] = serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context);
    }
    if (input.ScriptId !== undefined) {
        bodyParams["ScriptId"] = input.ScriptId;
    }
    if (input.ServerLaunchParameters !== undefined) {
        bodyParams["ServerLaunchParameters"] = input.ServerLaunchParameters;
    }
    if (input.ServerLaunchPath !== undefined) {
        bodyParams["ServerLaunchPath"] = input.ServerLaunchPath;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGameSessionInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    if (input.CreatorId !== undefined) {
        bodyParams["CreatorId"] = input.CreatorId;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.GameProperties !== undefined) {
        bodyParams["GameProperties"] = serializeAws_json1_1GamePropertyList(input.GameProperties, context);
    }
    if (input.GameSessionData !== undefined) {
        bodyParams["GameSessionData"] = input.GameSessionData;
    }
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.IdempotencyToken !== undefined) {
        bodyParams["IdempotencyToken"] = input.IdempotencyToken;
    }
    if (input.MaximumPlayerSessionCount !== undefined) {
        bodyParams["MaximumPlayerSessionCount"] = input.MaximumPlayerSessionCount;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGameSessionQueueInput = (input, context) => {
    const bodyParams = {};
    if (input.Destinations !== undefined) {
        bodyParams["Destinations"] = serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PlayerLatencyPolicies !== undefined) {
        bodyParams["PlayerLatencyPolicies"] = serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.TimeoutInSeconds !== undefined) {
        bodyParams["TimeoutInSeconds"] = input.TimeoutInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMatchmakingConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptanceRequired !== undefined) {
        bodyParams["AcceptanceRequired"] = input.AcceptanceRequired;
    }
    if (input.AcceptanceTimeoutSeconds !== undefined) {
        bodyParams["AcceptanceTimeoutSeconds"] = input.AcceptanceTimeoutSeconds;
    }
    if (input.AdditionalPlayerCount !== undefined) {
        bodyParams["AdditionalPlayerCount"] = input.AdditionalPlayerCount;
    }
    if (input.BackfillMode !== undefined) {
        bodyParams["BackfillMode"] = input.BackfillMode;
    }
    if (input.CustomEventData !== undefined) {
        bodyParams["CustomEventData"] = input.CustomEventData;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GameProperties !== undefined) {
        bodyParams["GameProperties"] = serializeAws_json1_1GamePropertyList(input.GameProperties, context);
    }
    if (input.GameSessionData !== undefined) {
        bodyParams["GameSessionData"] = input.GameSessionData;
    }
    if (input.GameSessionQueueArns !== undefined) {
        bodyParams["GameSessionQueueArns"] = serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NotificationTarget !== undefined) {
        bodyParams["NotificationTarget"] = input.NotificationTarget;
    }
    if (input.RequestTimeoutSeconds !== undefined) {
        bodyParams["RequestTimeoutSeconds"] = input.RequestTimeoutSeconds;
    }
    if (input.RuleSetName !== undefined) {
        bodyParams["RuleSetName"] = input.RuleSetName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateMatchmakingRuleSetInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RuleSetBody !== undefined) {
        bodyParams["RuleSetBody"] = input.RuleSetBody;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePlayerSessionInput = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.PlayerData !== undefined) {
        bodyParams["PlayerData"] = input.PlayerData;
    }
    if (input.PlayerId !== undefined) {
        bodyParams["PlayerId"] = input.PlayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreatePlayerSessionsInput = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.PlayerDataMap !== undefined) {
        bodyParams["PlayerDataMap"] = serializeAws_json1_1PlayerDataMap(input.PlayerDataMap, context);
    }
    if (input.PlayerIds !== undefined) {
        bodyParams["PlayerIds"] = serializeAws_json1_1PlayerIdList(input.PlayerIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateScriptInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.StorageLocation !== undefined) {
        bodyParams["StorageLocation"] = serializeAws_json1_1S3Location(input.StorageLocation, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    if (input.ZipFile !== undefined) {
        bodyParams["ZipFile"] = Buffer.from(input.ZipFile).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1CreateVpcPeeringAuthorizationInput = (input, context) => {
    const bodyParams = {};
    if (input.GameLiftAwsAccountId !== undefined) {
        bodyParams["GameLiftAwsAccountId"] = input.GameLiftAwsAccountId;
    }
    if (input.PeerVpcId !== undefined) {
        bodyParams["PeerVpcId"] = input.PeerVpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateVpcPeeringConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.PeerVpcAwsAccountId !== undefined) {
        bodyParams["PeerVpcAwsAccountId"] = input.PeerVpcAwsAccountId;
    }
    if (input.PeerVpcId !== undefined) {
        bodyParams["PeerVpcId"] = input.PeerVpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAliasInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFleetInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteGameSessionQueueInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMatchmakingConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteMatchmakingRuleSetInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteScalingPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteScriptInput = (input, context) => {
    const bodyParams = {};
    if (input.ScriptId !== undefined) {
        bodyParams["ScriptId"] = input.ScriptId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVpcPeeringAuthorizationInput = (input, context) => {
    const bodyParams = {};
    if (input.GameLiftAwsAccountId !== undefined) {
        bodyParams["GameLiftAwsAccountId"] = input.GameLiftAwsAccountId;
    }
    if (input.PeerVpcId !== undefined) {
        bodyParams["PeerVpcId"] = input.PeerVpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteVpcPeeringConnectionInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.VpcPeeringConnectionId !== undefined) {
        bodyParams["VpcPeeringConnectionId"] = input.VpcPeeringConnectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAliasInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEC2InstanceLimitsInput = (input, context) => {
    const bodyParams = {};
    if (input.EC2InstanceType !== undefined) {
        bodyParams["EC2InstanceType"] = input.EC2InstanceType;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetAttributesInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetIds !== undefined) {
        bodyParams["FleetIds"] = serializeAws_json1_1FleetIdList(input.FleetIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetCapacityInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetIds !== undefined) {
        bodyParams["FleetIds"] = serializeAws_json1_1FleetIdList(input.FleetIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetEventsInput = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetPortSettingsInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeFleetUtilizationInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetIds !== undefined) {
        bodyParams["FleetIds"] = serializeAws_json1_1FleetIdList(input.FleetIds, context);
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGameSessionDetailsInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StatusFilter !== undefined) {
        bodyParams["StatusFilter"] = input.StatusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGameSessionPlacementInput = (input, context) => {
    const bodyParams = {};
    if (input.PlacementId !== undefined) {
        bodyParams["PlacementId"] = input.PlacementId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGameSessionQueuesInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1GameSessionQueueNameList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeGameSessionsInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StatusFilter !== undefined) {
        bodyParams["StatusFilter"] = input.StatusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstancesInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMatchmakingConfigurationsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1MatchmakingConfigurationNameList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.RuleSetName !== undefined) {
        bodyParams["RuleSetName"] = input.RuleSetName;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMatchmakingInput = (input, context) => {
    const bodyParams = {};
    if (input.TicketIds !== undefined) {
        bodyParams["TicketIds"] = serializeAws_json1_1MatchmakingIdList(input.TicketIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeMatchmakingRuleSetsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Names !== undefined) {
        bodyParams["Names"] = serializeAws_json1_1MatchmakingRuleSetNameList(input.Names, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePlayerSessionsInput = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PlayerId !== undefined) {
        bodyParams["PlayerId"] = input.PlayerId;
    }
    if (input.PlayerSessionId !== undefined) {
        bodyParams["PlayerSessionId"] = input.PlayerSessionId;
    }
    if (input.PlayerSessionStatusFilter !== undefined) {
        bodyParams["PlayerSessionStatusFilter"] = input.PlayerSessionStatusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRuntimeConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScalingPoliciesInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StatusFilter !== undefined) {
        bodyParams["StatusFilter"] = input.StatusFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeScriptInput = (input, context) => {
    const bodyParams = {};
    if (input.ScriptId !== undefined) {
        bodyParams["ScriptId"] = input.ScriptId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1DescribeVpcPeeringConnectionsInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1DesiredPlayerSession = (input, context) => {
    const bodyParams = {};
    if (input.PlayerData !== undefined) {
        bodyParams["PlayerData"] = input.PlayerData;
    }
    if (input.PlayerId !== undefined) {
        bodyParams["PlayerId"] = input.PlayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DesiredPlayerSessionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DesiredPlayerSession(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FleetActionList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FleetIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GameProperty = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1GamePropertyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1GameProperty(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GameSessionQueueDestination = (input, context) => {
    const bodyParams = {};
    if (input.DestinationArn !== undefined) {
        bodyParams["DestinationArn"] = input.DestinationArn;
    }
    return bodyParams;
};
const serializeAws_json1_1GameSessionQueueDestinationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1GameSessionQueueDestination(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GameSessionQueueNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetGameSessionLogUrlInput = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInstanceAccessInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1IpPermission = (input, context) => {
    const bodyParams = {};
    if (input.FromPort !== undefined) {
        bodyParams["FromPort"] = input.FromPort;
    }
    if (input.IpRange !== undefined) {
        bodyParams["IpRange"] = input.IpRange;
    }
    if (input.Protocol !== undefined) {
        bodyParams["Protocol"] = input.Protocol;
    }
    if (input.ToPort !== undefined) {
        bodyParams["ToPort"] = input.ToPort;
    }
    return bodyParams;
};
const serializeAws_json1_1IpPermissionsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1IpPermission(entry, context));
    }
    return contents;
};
const serializeAws_json1_1LatencyMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ListAliasesInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.RoutingStrategyType !== undefined) {
        bodyParams["RoutingStrategyType"] = input.RoutingStrategyType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBuildsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFleetsInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ScriptId !== undefined) {
        bodyParams["ScriptId"] = input.ScriptId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListScriptsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    return bodyParams;
};
const serializeAws_json1_1MatchmakingConfigurationNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MatchmakingIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MatchmakingRuleSetNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1MetricGroupList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Player = (input, context) => {
    const bodyParams = {};
    if (input.LatencyInMs !== undefined) {
        bodyParams["LatencyInMs"] = serializeAws_json1_1LatencyMap(input.LatencyInMs, context);
    }
    if (input.PlayerAttributes !== undefined) {
        bodyParams["PlayerAttributes"] = serializeAws_json1_1PlayerAttributeMap(input.PlayerAttributes, context);
    }
    if (input.PlayerId !== undefined) {
        bodyParams["PlayerId"] = input.PlayerId;
    }
    if (input.Team !== undefined) {
        bodyParams["Team"] = input.Team;
    }
    return bodyParams;
};
const serializeAws_json1_1PlayerAttributeMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1AttributeValue(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1PlayerDataMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1PlayerIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1PlayerLatency = (input, context) => {
    const bodyParams = {};
    if (input.LatencyInMilliseconds !== undefined) {
        bodyParams["LatencyInMilliseconds"] = input.LatencyInMilliseconds;
    }
    if (input.PlayerId !== undefined) {
        bodyParams["PlayerId"] = input.PlayerId;
    }
    if (input.RegionIdentifier !== undefined) {
        bodyParams["RegionIdentifier"] = input.RegionIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1PlayerLatencyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PlayerLatency(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlayerLatencyPolicy = (input, context) => {
    const bodyParams = {};
    if (input.MaximumIndividualPlayerLatencyMilliseconds !== undefined) {
        bodyParams["MaximumIndividualPlayerLatencyMilliseconds"] =
            input.MaximumIndividualPlayerLatencyMilliseconds;
    }
    if (input.PolicyDurationSeconds !== undefined) {
        bodyParams["PolicyDurationSeconds"] = input.PolicyDurationSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1PlayerLatencyPolicyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PlayerLatencyPolicy(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlayerList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Player(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutScalingPolicyInput = (input, context) => {
    const bodyParams = {};
    if (input.ComparisonOperator !== undefined) {
        bodyParams["ComparisonOperator"] = input.ComparisonOperator;
    }
    if (input.EvaluationPeriods !== undefined) {
        bodyParams["EvaluationPeriods"] = input.EvaluationPeriods;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.MetricName !== undefined) {
        bodyParams["MetricName"] = input.MetricName;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PolicyType !== undefined) {
        bodyParams["PolicyType"] = input.PolicyType;
    }
    if (input.ScalingAdjustment !== undefined) {
        bodyParams["ScalingAdjustment"] = input.ScalingAdjustment;
    }
    if (input.ScalingAdjustmentType !== undefined) {
        bodyParams["ScalingAdjustmentType"] = input.ScalingAdjustmentType;
    }
    if (input.TargetConfiguration !== undefined) {
        bodyParams["TargetConfiguration"] = serializeAws_json1_1TargetConfiguration(input.TargetConfiguration, context);
    }
    if (input.Threshold !== undefined) {
        bodyParams["Threshold"] = input.Threshold;
    }
    return bodyParams;
};
const serializeAws_json1_1QueueArnsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1RequestUploadCredentialsInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResolveAliasInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceCreationLimitPolicy = (input, context) => {
    const bodyParams = {};
    if (input.NewGameSessionsPerCreator !== undefined) {
        bodyParams["NewGameSessionsPerCreator"] = input.NewGameSessionsPerCreator;
    }
    if (input.PolicyPeriodInMinutes !== undefined) {
        bodyParams["PolicyPeriodInMinutes"] = input.PolicyPeriodInMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1RoutingStrategy = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = input.Message;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1RuntimeConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionActivationTimeoutSeconds !== undefined) {
        bodyParams["GameSessionActivationTimeoutSeconds"] =
            input.GameSessionActivationTimeoutSeconds;
    }
    if (input.MaxConcurrentGameSessionActivations !== undefined) {
        bodyParams["MaxConcurrentGameSessionActivations"] =
            input.MaxConcurrentGameSessionActivations;
    }
    if (input.ServerProcesses !== undefined) {
        bodyParams["ServerProcesses"] = serializeAws_json1_1ServerProcessList(input.ServerProcesses, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Location = (input, context) => {
    const bodyParams = {};
    if (input.Bucket !== undefined) {
        bodyParams["Bucket"] = input.Bucket;
    }
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.ObjectVersion !== undefined) {
        bodyParams["ObjectVersion"] = input.ObjectVersion;
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchGameSessionsInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    if (input.FilterExpression !== undefined) {
        bodyParams["FilterExpression"] = input.FilterExpression;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortExpression !== undefined) {
        bodyParams["SortExpression"] = input.SortExpression;
    }
    return bodyParams;
};
const serializeAws_json1_1ServerProcess = (input, context) => {
    const bodyParams = {};
    if (input.ConcurrentExecutions !== undefined) {
        bodyParams["ConcurrentExecutions"] = input.ConcurrentExecutions;
    }
    if (input.LaunchPath !== undefined) {
        bodyParams["LaunchPath"] = input.LaunchPath;
    }
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = input.Parameters;
    }
    return bodyParams;
};
const serializeAws_json1_1ServerProcessList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServerProcess(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StartFleetActionsInput = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1FleetActionList(input.Actions, context);
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartGameSessionPlacementInput = (input, context) => {
    const bodyParams = {};
    if (input.DesiredPlayerSessions !== undefined) {
        bodyParams["DesiredPlayerSessions"] = serializeAws_json1_1DesiredPlayerSessionList(input.DesiredPlayerSessions, context);
    }
    if (input.GameProperties !== undefined) {
        bodyParams["GameProperties"] = serializeAws_json1_1GamePropertyList(input.GameProperties, context);
    }
    if (input.GameSessionData !== undefined) {
        bodyParams["GameSessionData"] = input.GameSessionData;
    }
    if (input.GameSessionName !== undefined) {
        bodyParams["GameSessionName"] = input.GameSessionName;
    }
    if (input.GameSessionQueueName !== undefined) {
        bodyParams["GameSessionQueueName"] = input.GameSessionQueueName;
    }
    if (input.MaximumPlayerSessionCount !== undefined) {
        bodyParams["MaximumPlayerSessionCount"] = input.MaximumPlayerSessionCount;
    }
    if (input.PlacementId !== undefined) {
        bodyParams["PlacementId"] = input.PlacementId;
    }
    if (input.PlayerLatencies !== undefined) {
        bodyParams["PlayerLatencies"] = serializeAws_json1_1PlayerLatencyList(input.PlayerLatencies, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartMatchBackfillInput = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationName !== undefined) {
        bodyParams["ConfigurationName"] = input.ConfigurationName;
    }
    if (input.GameSessionArn !== undefined) {
        bodyParams["GameSessionArn"] = input.GameSessionArn;
    }
    if (input.Players !== undefined) {
        bodyParams["Players"] = serializeAws_json1_1PlayerList(input.Players, context);
    }
    if (input.TicketId !== undefined) {
        bodyParams["TicketId"] = input.TicketId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartMatchmakingInput = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationName !== undefined) {
        bodyParams["ConfigurationName"] = input.ConfigurationName;
    }
    if (input.Players !== undefined) {
        bodyParams["Players"] = serializeAws_json1_1PlayerList(input.Players, context);
    }
    if (input.TicketId !== undefined) {
        bodyParams["TicketId"] = input.TicketId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopFleetActionsInput = (input, context) => {
    const bodyParams = {};
    if (input.Actions !== undefined) {
        bodyParams["Actions"] = serializeAws_json1_1FleetActionList(input.Actions, context);
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopGameSessionPlacementInput = (input, context) => {
    const bodyParams = {};
    if (input.PlacementId !== undefined) {
        bodyParams["PlacementId"] = input.PlacementId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopMatchmakingInput = (input, context) => {
    const bodyParams = {};
    if (input.TicketId !== undefined) {
        bodyParams["TicketId"] = input.TicketId;
    }
    return bodyParams;
};
const serializeAws_json1_1StringDoubleMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TargetConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.TargetValue !== undefined) {
        bodyParams["TargetValue"] = input.TargetValue;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceARN !== undefined) {
        bodyParams["ResourceARN"] = input.ResourceARN;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAliasInput = (input, context) => {
    const bodyParams = {};
    if (input.AliasId !== undefined) {
        bodyParams["AliasId"] = input.AliasId;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.RoutingStrategy !== undefined) {
        bodyParams["RoutingStrategy"] = serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateBuildInput = (input, context) => {
    const bodyParams = {};
    if (input.BuildId !== undefined) {
        bodyParams["BuildId"] = input.BuildId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFleetAttributesInput = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.MetricGroups !== undefined) {
        bodyParams["MetricGroups"] = serializeAws_json1_1MetricGroupList(input.MetricGroups, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NewGameSessionProtectionPolicy !== undefined) {
        bodyParams["NewGameSessionProtectionPolicy"] =
            input.NewGameSessionProtectionPolicy;
    }
    if (input.ResourceCreationLimitPolicy !== undefined) {
        bodyParams["ResourceCreationLimitPolicy"] = serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFleetCapacityInput = (input, context) => {
    const bodyParams = {};
    if (input.DesiredInstances !== undefined) {
        bodyParams["DesiredInstances"] = input.DesiredInstances;
    }
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.MaxSize !== undefined) {
        bodyParams["MaxSize"] = input.MaxSize;
    }
    if (input.MinSize !== undefined) {
        bodyParams["MinSize"] = input.MinSize;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateFleetPortSettingsInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.InboundPermissionAuthorizations !== undefined) {
        bodyParams["InboundPermissionAuthorizations"] = serializeAws_json1_1IpPermissionsList(input.InboundPermissionAuthorizations, context);
    }
    if (input.InboundPermissionRevocations !== undefined) {
        bodyParams["InboundPermissionRevocations"] = serializeAws_json1_1IpPermissionsList(input.InboundPermissionRevocations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGameSessionInput = (input, context) => {
    const bodyParams = {};
    if (input.GameSessionId !== undefined) {
        bodyParams["GameSessionId"] = input.GameSessionId;
    }
    if (input.MaximumPlayerSessionCount !== undefined) {
        bodyParams["MaximumPlayerSessionCount"] = input.MaximumPlayerSessionCount;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PlayerSessionCreationPolicy !== undefined) {
        bodyParams["PlayerSessionCreationPolicy"] =
            input.PlayerSessionCreationPolicy;
    }
    if (input.ProtectionPolicy !== undefined) {
        bodyParams["ProtectionPolicy"] = input.ProtectionPolicy;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateGameSessionQueueInput = (input, context) => {
    const bodyParams = {};
    if (input.Destinations !== undefined) {
        bodyParams["Destinations"] = serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.PlayerLatencyPolicies !== undefined) {
        bodyParams["PlayerLatencyPolicies"] = serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context);
    }
    if (input.TimeoutInSeconds !== undefined) {
        bodyParams["TimeoutInSeconds"] = input.TimeoutInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMatchmakingConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.AcceptanceRequired !== undefined) {
        bodyParams["AcceptanceRequired"] = input.AcceptanceRequired;
    }
    if (input.AcceptanceTimeoutSeconds !== undefined) {
        bodyParams["AcceptanceTimeoutSeconds"] = input.AcceptanceTimeoutSeconds;
    }
    if (input.AdditionalPlayerCount !== undefined) {
        bodyParams["AdditionalPlayerCount"] = input.AdditionalPlayerCount;
    }
    if (input.BackfillMode !== undefined) {
        bodyParams["BackfillMode"] = input.BackfillMode;
    }
    if (input.CustomEventData !== undefined) {
        bodyParams["CustomEventData"] = input.CustomEventData;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.GameProperties !== undefined) {
        bodyParams["GameProperties"] = serializeAws_json1_1GamePropertyList(input.GameProperties, context);
    }
    if (input.GameSessionData !== undefined) {
        bodyParams["GameSessionData"] = input.GameSessionData;
    }
    if (input.GameSessionQueueArns !== undefined) {
        bodyParams["GameSessionQueueArns"] = serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.NotificationTarget !== undefined) {
        bodyParams["NotificationTarget"] = input.NotificationTarget;
    }
    if (input.RequestTimeoutSeconds !== undefined) {
        bodyParams["RequestTimeoutSeconds"] = input.RequestTimeoutSeconds;
    }
    if (input.RuleSetName !== undefined) {
        bodyParams["RuleSetName"] = input.RuleSetName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRuntimeConfigurationInput = (input, context) => {
    const bodyParams = {};
    if (input.FleetId !== undefined) {
        bodyParams["FleetId"] = input.FleetId;
    }
    if (input.RuntimeConfiguration !== undefined) {
        bodyParams["RuntimeConfiguration"] = serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateScriptInput = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ScriptId !== undefined) {
        bodyParams["ScriptId"] = input.ScriptId;
    }
    if (input.StorageLocation !== undefined) {
        bodyParams["StorageLocation"] = serializeAws_json1_1S3Location(input.StorageLocation, context);
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    if (input.ZipFile !== undefined) {
        bodyParams["ZipFile"] = Buffer.from(input.ZipFile).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1ValidateMatchmakingRuleSetInput = (input, context) => {
    const bodyParams = {};
    if (input.RuleSetBody !== undefined) {
        bodyParams["RuleSetBody"] = input.RuleSetBody;
    }
    return bodyParams;
};
const deserializeAws_json1_1AcceptMatchOutput = (output, context) => {
    let contents = {
        __type: "AcceptMatchOutput"
    };
    return contents;
};
const deserializeAws_json1_1Alias = (output, context) => {
    let contents = {
        __type: "Alias",
        AliasArn: undefined,
        AliasId: undefined,
        CreationTime: undefined,
        Description: undefined,
        LastUpdatedTime: undefined,
        Name: undefined,
        RoutingStrategy: undefined
    };
    if (output.AliasArn !== undefined && output.AliasArn !== null) {
        contents.AliasArn = output.AliasArn;
    }
    if (output.AliasId !== undefined && output.AliasId !== null) {
        contents.AliasId = output.AliasId;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
        contents.LastUpdatedTime = new Date(Math.round(output.LastUpdatedTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RoutingStrategy !== undefined && output.RoutingStrategy !== null) {
        contents.RoutingStrategy = deserializeAws_json1_1RoutingStrategy(output.RoutingStrategy, context);
    }
    return contents;
};
const deserializeAws_json1_1AliasList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Alias(entry, context));
};
const deserializeAws_json1_1AttributeValue = (output, context) => {
    let contents = {
        __type: "AttributeValue",
        N: undefined,
        S: undefined,
        SDM: undefined,
        SL: undefined
    };
    if (output.N !== undefined && output.N !== null) {
        contents.N = output.N;
    }
    if (output.S !== undefined && output.S !== null) {
        contents.S = output.S;
    }
    if (output.SDM !== undefined && output.SDM !== null) {
        contents.SDM = deserializeAws_json1_1StringDoubleMap(output.SDM, context);
    }
    if (output.SL !== undefined && output.SL !== null) {
        contents.SL = deserializeAws_json1_1StringList(output.SL, context);
    }
    return contents;
};
const deserializeAws_json1_1AwsCredentials = (output, context) => {
    let contents = {
        __type: "AwsCredentials",
        AccessKeyId: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined
    };
    if (output.AccessKeyId !== undefined && output.AccessKeyId !== null) {
        contents.AccessKeyId = output.AccessKeyId;
    }
    if (output.SecretAccessKey !== undefined && output.SecretAccessKey !== null) {
        contents.SecretAccessKey = output.SecretAccessKey;
    }
    if (output.SessionToken !== undefined && output.SessionToken !== null) {
        contents.SessionToken = output.SessionToken;
    }
    return contents;
};
const deserializeAws_json1_1Build = (output, context) => {
    let contents = {
        __type: "Build",
        BuildArn: undefined,
        BuildId: undefined,
        CreationTime: undefined,
        Name: undefined,
        OperatingSystem: undefined,
        SizeOnDisk: undefined,
        Status: undefined,
        Version: undefined
    };
    if (output.BuildArn !== undefined && output.BuildArn !== null) {
        contents.BuildArn = output.BuildArn;
    }
    if (output.BuildId !== undefined && output.BuildId !== null) {
        contents.BuildId = output.BuildId;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.SizeOnDisk !== undefined && output.SizeOnDisk !== null) {
        contents.SizeOnDisk = output.SizeOnDisk;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1BuildList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Build(entry, context));
};
const deserializeAws_json1_1CertificateConfiguration = (output, context) => {
    let contents = {
        __type: "CertificateConfiguration",
        CertificateType: undefined
    };
    if (output.CertificateType !== undefined && output.CertificateType !== null) {
        contents.CertificateType = output.CertificateType;
    }
    return contents;
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    let contents = {
        __type: "ConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateAliasOutput = (output, context) => {
    let contents = {
        __type: "CreateAliasOutput",
        Alias: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = deserializeAws_json1_1Alias(output.Alias, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateBuildOutput = (output, context) => {
    let contents = {
        __type: "CreateBuildOutput",
        Build: undefined,
        StorageLocation: undefined,
        UploadCredentials: undefined
    };
    if (output.Build !== undefined && output.Build !== null) {
        contents.Build = deserializeAws_json1_1Build(output.Build, context);
    }
    if (output.StorageLocation !== undefined && output.StorageLocation !== null) {
        contents.StorageLocation = deserializeAws_json1_1S3Location(output.StorageLocation, context);
    }
    if (output.UploadCredentials !== undefined &&
        output.UploadCredentials !== null) {
        contents.UploadCredentials = deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateFleetOutput = (output, context) => {
    let contents = {
        __type: "CreateFleetOutput",
        FleetAttributes: undefined
    };
    if (output.FleetAttributes !== undefined && output.FleetAttributes !== null) {
        contents.FleetAttributes = deserializeAws_json1_1FleetAttributes(output.FleetAttributes, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateGameSessionOutput = (output, context) => {
    let contents = {
        __type: "CreateGameSessionOutput",
        GameSession: undefined
    };
    if (output.GameSession !== undefined && output.GameSession !== null) {
        contents.GameSession = deserializeAws_json1_1GameSession(output.GameSession, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateGameSessionQueueOutput = (output, context) => {
    let contents = {
        __type: "CreateGameSessionQueueOutput",
        GameSessionQueue: undefined
    };
    if (output.GameSessionQueue !== undefined &&
        output.GameSessionQueue !== null) {
        contents.GameSessionQueue = deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateMatchmakingConfigurationOutput = (output, context) => {
    let contents = {
        __type: "CreateMatchmakingConfigurationOutput",
        Configuration: undefined
    };
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateMatchmakingRuleSetOutput = (output, context) => {
    let contents = {
        __type: "CreateMatchmakingRuleSetOutput",
        RuleSet: undefined
    };
    if (output.RuleSet !== undefined && output.RuleSet !== null) {
        contents.RuleSet = deserializeAws_json1_1MatchmakingRuleSet(output.RuleSet, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePlayerSessionOutput = (output, context) => {
    let contents = {
        __type: "CreatePlayerSessionOutput",
        PlayerSession: undefined
    };
    if (output.PlayerSession !== undefined && output.PlayerSession !== null) {
        contents.PlayerSession = deserializeAws_json1_1PlayerSession(output.PlayerSession, context);
    }
    return contents;
};
const deserializeAws_json1_1CreatePlayerSessionsOutput = (output, context) => {
    let contents = {
        __type: "CreatePlayerSessionsOutput",
        PlayerSessions: undefined
    };
    if (output.PlayerSessions !== undefined && output.PlayerSessions !== null) {
        contents.PlayerSessions = deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateScriptOutput = (output, context) => {
    let contents = {
        __type: "CreateScriptOutput",
        Script: undefined
    };
    if (output.Script !== undefined && output.Script !== null) {
        contents.Script = deserializeAws_json1_1Script(output.Script, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput = (output, context) => {
    let contents = {
        __type: "CreateVpcPeeringAuthorizationOutput",
        VpcPeeringAuthorization: undefined
    };
    if (output.VpcPeeringAuthorization !== undefined &&
        output.VpcPeeringAuthorization !== null) {
        contents.VpcPeeringAuthorization = deserializeAws_json1_1VpcPeeringAuthorization(output.VpcPeeringAuthorization, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateVpcPeeringConnectionOutput = (output, context) => {
    let contents = {
        __type: "CreateVpcPeeringConnectionOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteGameSessionQueueOutput = (output, context) => {
    let contents = {
        __type: "DeleteGameSessionQueueOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteMatchmakingConfigurationOutput = (output, context) => {
    let contents = {
        __type: "DeleteMatchmakingConfigurationOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteMatchmakingRuleSetOutput = (output, context) => {
    let contents = {
        __type: "DeleteMatchmakingRuleSetOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput = (output, context) => {
    let contents = {
        __type: "DeleteVpcPeeringAuthorizationOutput"
    };
    return contents;
};
const deserializeAws_json1_1DeleteVpcPeeringConnectionOutput = (output, context) => {
    let contents = {
        __type: "DeleteVpcPeeringConnectionOutput"
    };
    return contents;
};
const deserializeAws_json1_1DescribeAliasOutput = (output, context) => {
    let contents = {
        __type: "DescribeAliasOutput",
        Alias: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = deserializeAws_json1_1Alias(output.Alias, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeBuildOutput = (output, context) => {
    let contents = {
        __type: "DescribeBuildOutput",
        Build: undefined
    };
    if (output.Build !== undefined && output.Build !== null) {
        contents.Build = deserializeAws_json1_1Build(output.Build, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEC2InstanceLimitsOutput = (output, context) => {
    let contents = {
        __type: "DescribeEC2InstanceLimitsOutput",
        EC2InstanceLimits: undefined
    };
    if (output.EC2InstanceLimits !== undefined &&
        output.EC2InstanceLimits !== null) {
        contents.EC2InstanceLimits = deserializeAws_json1_1EC2InstanceLimitList(output.EC2InstanceLimits, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetAttributesOutput = (output, context) => {
    let contents = {
        __type: "DescribeFleetAttributesOutput",
        FleetAttributes: undefined,
        NextToken: undefined
    };
    if (output.FleetAttributes !== undefined && output.FleetAttributes !== null) {
        contents.FleetAttributes = deserializeAws_json1_1FleetAttributesList(output.FleetAttributes, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetCapacityOutput = (output, context) => {
    let contents = {
        __type: "DescribeFleetCapacityOutput",
        FleetCapacity: undefined,
        NextToken: undefined
    };
    if (output.FleetCapacity !== undefined && output.FleetCapacity !== null) {
        contents.FleetCapacity = deserializeAws_json1_1FleetCapacityList(output.FleetCapacity, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetEventsOutput = (output, context) => {
    let contents = {
        __type: "DescribeFleetEventsOutput",
        Events: undefined,
        NextToken: undefined
    };
    if (output.Events !== undefined && output.Events !== null) {
        contents.Events = deserializeAws_json1_1EventList(output.Events, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetPortSettingsOutput = (output, context) => {
    let contents = {
        __type: "DescribeFleetPortSettingsOutput",
        InboundPermissions: undefined
    };
    if (output.InboundPermissions !== undefined &&
        output.InboundPermissions !== null) {
        contents.InboundPermissions = deserializeAws_json1_1IpPermissionsList(output.InboundPermissions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeFleetUtilizationOutput = (output, context) => {
    let contents = {
        __type: "DescribeFleetUtilizationOutput",
        FleetUtilization: undefined,
        NextToken: undefined
    };
    if (output.FleetUtilization !== undefined &&
        output.FleetUtilization !== null) {
        contents.FleetUtilization = deserializeAws_json1_1FleetUtilizationList(output.FleetUtilization, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeGameSessionDetailsOutput = (output, context) => {
    let contents = {
        __type: "DescribeGameSessionDetailsOutput",
        GameSessionDetails: undefined,
        NextToken: undefined
    };
    if (output.GameSessionDetails !== undefined &&
        output.GameSessionDetails !== null) {
        contents.GameSessionDetails = deserializeAws_json1_1GameSessionDetailList(output.GameSessionDetails, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeGameSessionPlacementOutput = (output, context) => {
    let contents = {
        __type: "DescribeGameSessionPlacementOutput",
        GameSessionPlacement: undefined
    };
    if (output.GameSessionPlacement !== undefined &&
        output.GameSessionPlacement !== null) {
        contents.GameSessionPlacement = deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeGameSessionQueuesOutput = (output, context) => {
    let contents = {
        __type: "DescribeGameSessionQueuesOutput",
        GameSessionQueues: undefined,
        NextToken: undefined
    };
    if (output.GameSessionQueues !== undefined &&
        output.GameSessionQueues !== null) {
        contents.GameSessionQueues = deserializeAws_json1_1GameSessionQueueList(output.GameSessionQueues, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeGameSessionsOutput = (output, context) => {
    let contents = {
        __type: "DescribeGameSessionsOutput",
        GameSessions: undefined,
        NextToken: undefined
    };
    if (output.GameSessions !== undefined && output.GameSessions !== null) {
        contents.GameSessions = deserializeAws_json1_1GameSessionList(output.GameSessions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstancesOutput = (output, context) => {
    let contents = {
        __type: "DescribeInstancesOutput",
        Instances: undefined,
        NextToken: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1InstanceList(output.Instances, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput = (output, context) => {
    let contents = {
        __type: "DescribeMatchmakingConfigurationsOutput",
        Configurations: undefined,
        NextToken: undefined
    };
    if (output.Configurations !== undefined && output.Configurations !== null) {
        contents.Configurations = deserializeAws_json1_1MatchmakingConfigurationList(output.Configurations, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeMatchmakingOutput = (output, context) => {
    let contents = {
        __type: "DescribeMatchmakingOutput",
        TicketList: undefined
    };
    if (output.TicketList !== undefined && output.TicketList !== null) {
        contents.TicketList = deserializeAws_json1_1MatchmakingTicketList(output.TicketList, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput = (output, context) => {
    let contents = {
        __type: "DescribeMatchmakingRuleSetsOutput",
        NextToken: undefined,
        RuleSets: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.RuleSets !== undefined && output.RuleSets !== null) {
        contents.RuleSets = deserializeAws_json1_1MatchmakingRuleSetList(output.RuleSets, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePlayerSessionsOutput = (output, context) => {
    let contents = {
        __type: "DescribePlayerSessionsOutput",
        NextToken: undefined,
        PlayerSessions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PlayerSessions !== undefined && output.PlayerSessions !== null) {
        contents.PlayerSessions = deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRuntimeConfigurationOutput = (output, context) => {
    let contents = {
        __type: "DescribeRuntimeConfigurationOutput",
        RuntimeConfiguration: undefined
    };
    if (output.RuntimeConfiguration !== undefined &&
        output.RuntimeConfiguration !== null) {
        contents.RuntimeConfiguration = deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeScalingPoliciesOutput = (output, context) => {
    let contents = {
        __type: "DescribeScalingPoliciesOutput",
        NextToken: undefined,
        ScalingPolicies: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ScalingPolicies !== undefined && output.ScalingPolicies !== null) {
        contents.ScalingPolicies = deserializeAws_json1_1ScalingPolicyList(output.ScalingPolicies, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeScriptOutput = (output, context) => {
    let contents = {
        __type: "DescribeScriptOutput",
        Script: undefined
    };
    if (output.Script !== undefined && output.Script !== null) {
        contents.Script = deserializeAws_json1_1Script(output.Script, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput = (output, context) => {
    let contents = {
        __type: "DescribeVpcPeeringAuthorizationsOutput",
        VpcPeeringAuthorizations: undefined
    };
    if (output.VpcPeeringAuthorizations !== undefined &&
        output.VpcPeeringAuthorizations !== null) {
        contents.VpcPeeringAuthorizations = deserializeAws_json1_1VpcPeeringAuthorizationList(output.VpcPeeringAuthorizations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput = (output, context) => {
    let contents = {
        __type: "DescribeVpcPeeringConnectionsOutput",
        VpcPeeringConnections: undefined
    };
    if (output.VpcPeeringConnections !== undefined &&
        output.VpcPeeringConnections !== null) {
        contents.VpcPeeringConnections = deserializeAws_json1_1VpcPeeringConnectionList(output.VpcPeeringConnections, context);
    }
    return contents;
};
const deserializeAws_json1_1EC2InstanceCounts = (output, context) => {
    let contents = {
        __type: "EC2InstanceCounts",
        ACTIVE: undefined,
        DESIRED: undefined,
        IDLE: undefined,
        MAXIMUM: undefined,
        MINIMUM: undefined,
        PENDING: undefined,
        TERMINATING: undefined
    };
    if (output.ACTIVE !== undefined && output.ACTIVE !== null) {
        contents.ACTIVE = output.ACTIVE;
    }
    if (output.DESIRED !== undefined && output.DESIRED !== null) {
        contents.DESIRED = output.DESIRED;
    }
    if (output.IDLE !== undefined && output.IDLE !== null) {
        contents.IDLE = output.IDLE;
    }
    if (output.MAXIMUM !== undefined && output.MAXIMUM !== null) {
        contents.MAXIMUM = output.MAXIMUM;
    }
    if (output.MINIMUM !== undefined && output.MINIMUM !== null) {
        contents.MINIMUM = output.MINIMUM;
    }
    if (output.PENDING !== undefined && output.PENDING !== null) {
        contents.PENDING = output.PENDING;
    }
    if (output.TERMINATING !== undefined && output.TERMINATING !== null) {
        contents.TERMINATING = output.TERMINATING;
    }
    return contents;
};
const deserializeAws_json1_1EC2InstanceLimit = (output, context) => {
    let contents = {
        __type: "EC2InstanceLimit",
        CurrentInstances: undefined,
        EC2InstanceType: undefined,
        InstanceLimit: undefined
    };
    if (output.CurrentInstances !== undefined &&
        output.CurrentInstances !== null) {
        contents.CurrentInstances = output.CurrentInstances;
    }
    if (output.EC2InstanceType !== undefined && output.EC2InstanceType !== null) {
        contents.EC2InstanceType = output.EC2InstanceType;
    }
    if (output.InstanceLimit !== undefined && output.InstanceLimit !== null) {
        contents.InstanceLimit = output.InstanceLimit;
    }
    return contents;
};
const deserializeAws_json1_1EC2InstanceLimitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EC2InstanceLimit(entry, context));
};
const deserializeAws_json1_1Event = (output, context) => {
    let contents = {
        __type: "Event",
        EventCode: undefined,
        EventId: undefined,
        EventTime: undefined,
        Message: undefined,
        PreSignedLogUrl: undefined,
        ResourceId: undefined
    };
    if (output.EventCode !== undefined && output.EventCode !== null) {
        contents.EventCode = output.EventCode;
    }
    if (output.EventId !== undefined && output.EventId !== null) {
        contents.EventId = output.EventId;
    }
    if (output.EventTime !== undefined && output.EventTime !== null) {
        contents.EventTime = new Date(Math.round(output.EventTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.PreSignedLogUrl !== undefined && output.PreSignedLogUrl !== null) {
        contents.PreSignedLogUrl = output.PreSignedLogUrl;
    }
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    return contents;
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Event(entry, context));
};
const deserializeAws_json1_1FleetActionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FleetAttributes = (output, context) => {
    let contents = {
        __type: "FleetAttributes",
        BuildArn: undefined,
        BuildId: undefined,
        CertificateConfiguration: undefined,
        CreationTime: undefined,
        Description: undefined,
        FleetArn: undefined,
        FleetId: undefined,
        FleetType: undefined,
        InstanceRoleArn: undefined,
        InstanceType: undefined,
        LogPaths: undefined,
        MetricGroups: undefined,
        Name: undefined,
        NewGameSessionProtectionPolicy: undefined,
        OperatingSystem: undefined,
        ResourceCreationLimitPolicy: undefined,
        ScriptArn: undefined,
        ScriptId: undefined,
        ServerLaunchParameters: undefined,
        ServerLaunchPath: undefined,
        Status: undefined,
        StoppedActions: undefined,
        TerminationTime: undefined
    };
    if (output.BuildArn !== undefined && output.BuildArn !== null) {
        contents.BuildArn = output.BuildArn;
    }
    if (output.BuildId !== undefined && output.BuildId !== null) {
        contents.BuildId = output.BuildId;
    }
    if (output.CertificateConfiguration !== undefined &&
        output.CertificateConfiguration !== null) {
        contents.CertificateConfiguration = deserializeAws_json1_1CertificateConfiguration(output.CertificateConfiguration, context);
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.FleetArn !== undefined && output.FleetArn !== null) {
        contents.FleetArn = output.FleetArn;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.FleetType !== undefined && output.FleetType !== null) {
        contents.FleetType = output.FleetType;
    }
    if (output.InstanceRoleArn !== undefined && output.InstanceRoleArn !== null) {
        contents.InstanceRoleArn = output.InstanceRoleArn;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LogPaths !== undefined && output.LogPaths !== null) {
        contents.LogPaths = deserializeAws_json1_1StringList(output.LogPaths, context);
    }
    if (output.MetricGroups !== undefined && output.MetricGroups !== null) {
        contents.MetricGroups = deserializeAws_json1_1MetricGroupList(output.MetricGroups, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NewGameSessionProtectionPolicy !== undefined &&
        output.NewGameSessionProtectionPolicy !== null) {
        contents.NewGameSessionProtectionPolicy =
            output.NewGameSessionProtectionPolicy;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.ResourceCreationLimitPolicy !== undefined &&
        output.ResourceCreationLimitPolicy !== null) {
        contents.ResourceCreationLimitPolicy = deserializeAws_json1_1ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context);
    }
    if (output.ScriptArn !== undefined && output.ScriptArn !== null) {
        contents.ScriptArn = output.ScriptArn;
    }
    if (output.ScriptId !== undefined && output.ScriptId !== null) {
        contents.ScriptId = output.ScriptId;
    }
    if (output.ServerLaunchParameters !== undefined &&
        output.ServerLaunchParameters !== null) {
        contents.ServerLaunchParameters = output.ServerLaunchParameters;
    }
    if (output.ServerLaunchPath !== undefined &&
        output.ServerLaunchPath !== null) {
        contents.ServerLaunchPath = output.ServerLaunchPath;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StoppedActions !== undefined && output.StoppedActions !== null) {
        contents.StoppedActions = deserializeAws_json1_1FleetActionList(output.StoppedActions, context);
    }
    if (output.TerminationTime !== undefined && output.TerminationTime !== null) {
        contents.TerminationTime = new Date(Math.round(output.TerminationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1FleetAttributesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FleetAttributes(entry, context));
};
const deserializeAws_json1_1FleetCapacity = (output, context) => {
    let contents = {
        __type: "FleetCapacity",
        FleetId: undefined,
        InstanceCounts: undefined,
        InstanceType: undefined
    };
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.InstanceCounts !== undefined && output.InstanceCounts !== null) {
        contents.InstanceCounts = deserializeAws_json1_1EC2InstanceCounts(output.InstanceCounts, context);
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    return contents;
};
const deserializeAws_json1_1FleetCapacityExceededException = (output, context) => {
    let contents = {
        __type: "FleetCapacityExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1FleetCapacityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FleetCapacity(entry, context));
};
const deserializeAws_json1_1FleetIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FleetUtilization = (output, context) => {
    let contents = {
        __type: "FleetUtilization",
        ActiveGameSessionCount: undefined,
        ActiveServerProcessCount: undefined,
        CurrentPlayerSessionCount: undefined,
        FleetId: undefined,
        MaximumPlayerSessionCount: undefined
    };
    if (output.ActiveGameSessionCount !== undefined &&
        output.ActiveGameSessionCount !== null) {
        contents.ActiveGameSessionCount = output.ActiveGameSessionCount;
    }
    if (output.ActiveServerProcessCount !== undefined &&
        output.ActiveServerProcessCount !== null) {
        contents.ActiveServerProcessCount = output.ActiveServerProcessCount;
    }
    if (output.CurrentPlayerSessionCount !== undefined &&
        output.CurrentPlayerSessionCount !== null) {
        contents.CurrentPlayerSessionCount = output.CurrentPlayerSessionCount;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.MaximumPlayerSessionCount !== undefined &&
        output.MaximumPlayerSessionCount !== null) {
        contents.MaximumPlayerSessionCount = output.MaximumPlayerSessionCount;
    }
    return contents;
};
const deserializeAws_json1_1FleetUtilizationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FleetUtilization(entry, context));
};
const deserializeAws_json1_1GameProperty = (output, context) => {
    let contents = {
        __type: "GameProperty",
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
const deserializeAws_json1_1GamePropertyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GameProperty(entry, context));
};
const deserializeAws_json1_1GameSession = (output, context) => {
    let contents = {
        __type: "GameSession",
        CreationTime: undefined,
        CreatorId: undefined,
        CurrentPlayerSessionCount: undefined,
        DnsName: undefined,
        FleetArn: undefined,
        FleetId: undefined,
        GameProperties: undefined,
        GameSessionData: undefined,
        GameSessionId: undefined,
        IpAddress: undefined,
        MatchmakerData: undefined,
        MaximumPlayerSessionCount: undefined,
        Name: undefined,
        PlayerSessionCreationPolicy: undefined,
        Port: undefined,
        Status: undefined,
        StatusReason: undefined,
        TerminationTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.CreatorId !== undefined && output.CreatorId !== null) {
        contents.CreatorId = output.CreatorId;
    }
    if (output.CurrentPlayerSessionCount !== undefined &&
        output.CurrentPlayerSessionCount !== null) {
        contents.CurrentPlayerSessionCount = output.CurrentPlayerSessionCount;
    }
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.FleetArn !== undefined && output.FleetArn !== null) {
        contents.FleetArn = output.FleetArn;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.GameProperties !== undefined && output.GameProperties !== null) {
        contents.GameProperties = deserializeAws_json1_1GamePropertyList(output.GameProperties, context);
    }
    if (output.GameSessionData !== undefined && output.GameSessionData !== null) {
        contents.GameSessionData = output.GameSessionData;
    }
    if (output.GameSessionId !== undefined && output.GameSessionId !== null) {
        contents.GameSessionId = output.GameSessionId;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.MatchmakerData !== undefined && output.MatchmakerData !== null) {
        contents.MatchmakerData = output.MatchmakerData;
    }
    if (output.MaximumPlayerSessionCount !== undefined &&
        output.MaximumPlayerSessionCount !== null) {
        contents.MaximumPlayerSessionCount = output.MaximumPlayerSessionCount;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PlayerSessionCreationPolicy !== undefined &&
        output.PlayerSessionCreationPolicy !== null) {
        contents.PlayerSessionCreationPolicy = output.PlayerSessionCreationPolicy;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusReason !== undefined && output.StatusReason !== null) {
        contents.StatusReason = output.StatusReason;
    }
    if (output.TerminationTime !== undefined && output.TerminationTime !== null) {
        contents.TerminationTime = new Date(Math.round(output.TerminationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1GameSessionConnectionInfo = (output, context) => {
    let contents = {
        __type: "GameSessionConnectionInfo",
        DnsName: undefined,
        GameSessionArn: undefined,
        IpAddress: undefined,
        MatchedPlayerSessions: undefined,
        Port: undefined
    };
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.GameSessionArn !== undefined && output.GameSessionArn !== null) {
        contents.GameSessionArn = output.GameSessionArn;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.MatchedPlayerSessions !== undefined &&
        output.MatchedPlayerSessions !== null) {
        contents.MatchedPlayerSessions = deserializeAws_json1_1MatchedPlayerSessionList(output.MatchedPlayerSessions, context);
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionDetail = (output, context) => {
    let contents = {
        __type: "GameSessionDetail",
        GameSession: undefined,
        ProtectionPolicy: undefined
    };
    if (output.GameSession !== undefined && output.GameSession !== null) {
        contents.GameSession = deserializeAws_json1_1GameSession(output.GameSession, context);
    }
    if (output.ProtectionPolicy !== undefined &&
        output.ProtectionPolicy !== null) {
        contents.ProtectionPolicy = output.ProtectionPolicy;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GameSessionDetail(entry, context));
};
const deserializeAws_json1_1GameSessionFullException = (output, context) => {
    let contents = {
        __type: "GameSessionFullException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GameSession(entry, context));
};
const deserializeAws_json1_1GameSessionPlacement = (output, context) => {
    let contents = {
        __type: "GameSessionPlacement",
        DnsName: undefined,
        EndTime: undefined,
        GameProperties: undefined,
        GameSessionArn: undefined,
        GameSessionData: undefined,
        GameSessionId: undefined,
        GameSessionName: undefined,
        GameSessionQueueName: undefined,
        GameSessionRegion: undefined,
        IpAddress: undefined,
        MatchmakerData: undefined,
        MaximumPlayerSessionCount: undefined,
        PlacedPlayerSessions: undefined,
        PlacementId: undefined,
        PlayerLatencies: undefined,
        Port: undefined,
        StartTime: undefined,
        Status: undefined
    };
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.GameProperties !== undefined && output.GameProperties !== null) {
        contents.GameProperties = deserializeAws_json1_1GamePropertyList(output.GameProperties, context);
    }
    if (output.GameSessionArn !== undefined && output.GameSessionArn !== null) {
        contents.GameSessionArn = output.GameSessionArn;
    }
    if (output.GameSessionData !== undefined && output.GameSessionData !== null) {
        contents.GameSessionData = output.GameSessionData;
    }
    if (output.GameSessionId !== undefined && output.GameSessionId !== null) {
        contents.GameSessionId = output.GameSessionId;
    }
    if (output.GameSessionName !== undefined && output.GameSessionName !== null) {
        contents.GameSessionName = output.GameSessionName;
    }
    if (output.GameSessionQueueName !== undefined &&
        output.GameSessionQueueName !== null) {
        contents.GameSessionQueueName = output.GameSessionQueueName;
    }
    if (output.GameSessionRegion !== undefined &&
        output.GameSessionRegion !== null) {
        contents.GameSessionRegion = output.GameSessionRegion;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.MatchmakerData !== undefined && output.MatchmakerData !== null) {
        contents.MatchmakerData = output.MatchmakerData;
    }
    if (output.MaximumPlayerSessionCount !== undefined &&
        output.MaximumPlayerSessionCount !== null) {
        contents.MaximumPlayerSessionCount = output.MaximumPlayerSessionCount;
    }
    if (output.PlacedPlayerSessions !== undefined &&
        output.PlacedPlayerSessions !== null) {
        contents.PlacedPlayerSessions = deserializeAws_json1_1PlacedPlayerSessionList(output.PlacedPlayerSessions, context);
    }
    if (output.PlacementId !== undefined && output.PlacementId !== null) {
        contents.PlacementId = output.PlacementId;
    }
    if (output.PlayerLatencies !== undefined && output.PlayerLatencies !== null) {
        contents.PlayerLatencies = deserializeAws_json1_1PlayerLatencyList(output.PlayerLatencies, context);
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionQueue = (output, context) => {
    let contents = {
        __type: "GameSessionQueue",
        Destinations: undefined,
        GameSessionQueueArn: undefined,
        Name: undefined,
        PlayerLatencyPolicies: undefined,
        TimeoutInSeconds: undefined
    };
    if (output.Destinations !== undefined && output.Destinations !== null) {
        contents.Destinations = deserializeAws_json1_1GameSessionQueueDestinationList(output.Destinations, context);
    }
    if (output.GameSessionQueueArn !== undefined &&
        output.GameSessionQueueArn !== null) {
        contents.GameSessionQueueArn = output.GameSessionQueueArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PlayerLatencyPolicies !== undefined &&
        output.PlayerLatencyPolicies !== null) {
        contents.PlayerLatencyPolicies = deserializeAws_json1_1PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context);
    }
    if (output.TimeoutInSeconds !== undefined &&
        output.TimeoutInSeconds !== null) {
        contents.TimeoutInSeconds = output.TimeoutInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionQueueDestination = (output, context) => {
    let contents = {
        __type: "GameSessionQueueDestination",
        DestinationArn: undefined
    };
    if (output.DestinationArn !== undefined && output.DestinationArn !== null) {
        contents.DestinationArn = output.DestinationArn;
    }
    return contents;
};
const deserializeAws_json1_1GameSessionQueueDestinationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GameSessionQueueDestination(entry, context));
};
const deserializeAws_json1_1GameSessionQueueList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GameSessionQueue(entry, context));
};
const deserializeAws_json1_1GetGameSessionLogUrlOutput = (output, context) => {
    let contents = {
        __type: "GetGameSessionLogUrlOutput",
        PreSignedUrl: undefined
    };
    if (output.PreSignedUrl !== undefined && output.PreSignedUrl !== null) {
        contents.PreSignedUrl = output.PreSignedUrl;
    }
    return contents;
};
const deserializeAws_json1_1GetInstanceAccessOutput = (output, context) => {
    let contents = {
        __type: "GetInstanceAccessOutput",
        InstanceAccess: undefined
    };
    if (output.InstanceAccess !== undefined && output.InstanceAccess !== null) {
        contents.InstanceAccess = deserializeAws_json1_1InstanceAccess(output.InstanceAccess, context);
    }
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        CreationTime: undefined,
        DnsName: undefined,
        FleetId: undefined,
        InstanceId: undefined,
        IpAddress: undefined,
        OperatingSystem: undefined,
        Status: undefined,
        Type: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1InstanceAccess = (output, context) => {
    let contents = {
        __type: "InstanceAccess",
        Credentials: undefined,
        FleetId: undefined,
        InstanceId: undefined,
        IpAddress: undefined,
        OperatingSystem: undefined
    };
    if (output.Credentials !== undefined && output.Credentials !== null) {
        contents.Credentials = deserializeAws_json1_1InstanceCredentials(output.Credentials, context);
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.OperatingSystem !== undefined && output.OperatingSystem !== null) {
        contents.OperatingSystem = output.OperatingSystem;
    }
    return contents;
};
const deserializeAws_json1_1InstanceCredentials = (output, context) => {
    let contents = {
        __type: "InstanceCredentials",
        Secret: undefined,
        UserName: undefined
    };
    if (output.Secret !== undefined && output.Secret !== null) {
        contents.Secret = output.Secret;
    }
    if (output.UserName !== undefined && output.UserName !== null) {
        contents.UserName = output.UserName;
    }
    return contents;
};
const deserializeAws_json1_1InstanceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Instance(entry, context));
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    let contents = {
        __type: "InternalServiceException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFleetStatusException = (output, context) => {
    let contents = {
        __type: "InvalidFleetStatusException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGameSessionStatusException = (output, context) => {
    let contents = {
        __type: "InvalidGameSessionStatusException",
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
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IpPermission = (output, context) => {
    let contents = {
        __type: "IpPermission",
        FromPort: undefined,
        IpRange: undefined,
        Protocol: undefined,
        ToPort: undefined
    };
    if (output.FromPort !== undefined && output.FromPort !== null) {
        contents.FromPort = output.FromPort;
    }
    if (output.IpRange !== undefined && output.IpRange !== null) {
        contents.IpRange = output.IpRange;
    }
    if (output.Protocol !== undefined && output.Protocol !== null) {
        contents.Protocol = output.Protocol;
    }
    if (output.ToPort !== undefined && output.ToPort !== null) {
        contents.ToPort = output.ToPort;
    }
    return contents;
};
const deserializeAws_json1_1IpPermissionsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1IpPermission(entry, context));
};
const deserializeAws_json1_1LatencyMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListAliasesOutput = (output, context) => {
    let contents = {
        __type: "ListAliasesOutput",
        Aliases: undefined,
        NextToken: undefined
    };
    if (output.Aliases !== undefined && output.Aliases !== null) {
        contents.Aliases = deserializeAws_json1_1AliasList(output.Aliases, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListBuildsOutput = (output, context) => {
    let contents = {
        __type: "ListBuildsOutput",
        Builds: undefined,
        NextToken: undefined
    };
    if (output.Builds !== undefined && output.Builds !== null) {
        contents.Builds = deserializeAws_json1_1BuildList(output.Builds, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListFleetsOutput = (output, context) => {
    let contents = {
        __type: "ListFleetsOutput",
        FleetIds: undefined,
        NextToken: undefined
    };
    if (output.FleetIds !== undefined && output.FleetIds !== null) {
        contents.FleetIds = deserializeAws_json1_1FleetIdList(output.FleetIds, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListScriptsOutput = (output, context) => {
    let contents = {
        __type: "ListScriptsOutput",
        NextToken: undefined,
        Scripts: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Scripts !== undefined && output.Scripts !== null) {
        contents.Scripts = deserializeAws_json1_1ScriptList(output.Scripts, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        Tags: undefined
    };
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1MatchedPlayerSession = (output, context) => {
    let contents = {
        __type: "MatchedPlayerSession",
        PlayerId: undefined,
        PlayerSessionId: undefined
    };
    if (output.PlayerId !== undefined && output.PlayerId !== null) {
        contents.PlayerId = output.PlayerId;
    }
    if (output.PlayerSessionId !== undefined && output.PlayerSessionId !== null) {
        contents.PlayerSessionId = output.PlayerSessionId;
    }
    return contents;
};
const deserializeAws_json1_1MatchedPlayerSessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MatchedPlayerSession(entry, context));
};
const deserializeAws_json1_1MatchmakingConfiguration = (output, context) => {
    let contents = {
        __type: "MatchmakingConfiguration",
        AcceptanceRequired: undefined,
        AcceptanceTimeoutSeconds: undefined,
        AdditionalPlayerCount: undefined,
        BackfillMode: undefined,
        ConfigurationArn: undefined,
        CreationTime: undefined,
        CustomEventData: undefined,
        Description: undefined,
        GameProperties: undefined,
        GameSessionData: undefined,
        GameSessionQueueArns: undefined,
        Name: undefined,
        NotificationTarget: undefined,
        RequestTimeoutSeconds: undefined,
        RuleSetArn: undefined,
        RuleSetName: undefined
    };
    if (output.AcceptanceRequired !== undefined &&
        output.AcceptanceRequired !== null) {
        contents.AcceptanceRequired = output.AcceptanceRequired;
    }
    if (output.AcceptanceTimeoutSeconds !== undefined &&
        output.AcceptanceTimeoutSeconds !== null) {
        contents.AcceptanceTimeoutSeconds = output.AcceptanceTimeoutSeconds;
    }
    if (output.AdditionalPlayerCount !== undefined &&
        output.AdditionalPlayerCount !== null) {
        contents.AdditionalPlayerCount = output.AdditionalPlayerCount;
    }
    if (output.BackfillMode !== undefined && output.BackfillMode !== null) {
        contents.BackfillMode = output.BackfillMode;
    }
    if (output.ConfigurationArn !== undefined &&
        output.ConfigurationArn !== null) {
        contents.ConfigurationArn = output.ConfigurationArn;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.CustomEventData !== undefined && output.CustomEventData !== null) {
        contents.CustomEventData = output.CustomEventData;
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.GameProperties !== undefined && output.GameProperties !== null) {
        contents.GameProperties = deserializeAws_json1_1GamePropertyList(output.GameProperties, context);
    }
    if (output.GameSessionData !== undefined && output.GameSessionData !== null) {
        contents.GameSessionData = output.GameSessionData;
    }
    if (output.GameSessionQueueArns !== undefined &&
        output.GameSessionQueueArns !== null) {
        contents.GameSessionQueueArns = deserializeAws_json1_1QueueArnsList(output.GameSessionQueueArns, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NotificationTarget !== undefined &&
        output.NotificationTarget !== null) {
        contents.NotificationTarget = output.NotificationTarget;
    }
    if (output.RequestTimeoutSeconds !== undefined &&
        output.RequestTimeoutSeconds !== null) {
        contents.RequestTimeoutSeconds = output.RequestTimeoutSeconds;
    }
    if (output.RuleSetArn !== undefined && output.RuleSetArn !== null) {
        contents.RuleSetArn = output.RuleSetArn;
    }
    if (output.RuleSetName !== undefined && output.RuleSetName !== null) {
        contents.RuleSetName = output.RuleSetName;
    }
    return contents;
};
const deserializeAws_json1_1MatchmakingConfigurationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MatchmakingConfiguration(entry, context));
};
const deserializeAws_json1_1MatchmakingRuleSet = (output, context) => {
    let contents = {
        __type: "MatchmakingRuleSet",
        CreationTime: undefined,
        RuleSetArn: undefined,
        RuleSetBody: undefined,
        RuleSetName: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.RuleSetArn !== undefined && output.RuleSetArn !== null) {
        contents.RuleSetArn = output.RuleSetArn;
    }
    if (output.RuleSetBody !== undefined && output.RuleSetBody !== null) {
        contents.RuleSetBody = output.RuleSetBody;
    }
    if (output.RuleSetName !== undefined && output.RuleSetName !== null) {
        contents.RuleSetName = output.RuleSetName;
    }
    return contents;
};
const deserializeAws_json1_1MatchmakingRuleSetList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MatchmakingRuleSet(entry, context));
};
const deserializeAws_json1_1MatchmakingTicket = (output, context) => {
    let contents = {
        __type: "MatchmakingTicket",
        ConfigurationArn: undefined,
        ConfigurationName: undefined,
        EndTime: undefined,
        EstimatedWaitTime: undefined,
        GameSessionConnectionInfo: undefined,
        Players: undefined,
        StartTime: undefined,
        Status: undefined,
        StatusMessage: undefined,
        StatusReason: undefined,
        TicketId: undefined
    };
    if (output.ConfigurationArn !== undefined &&
        output.ConfigurationArn !== null) {
        contents.ConfigurationArn = output.ConfigurationArn;
    }
    if (output.ConfigurationName !== undefined &&
        output.ConfigurationName !== null) {
        contents.ConfigurationName = output.ConfigurationName;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.EstimatedWaitTime !== undefined &&
        output.EstimatedWaitTime !== null) {
        contents.EstimatedWaitTime = output.EstimatedWaitTime;
    }
    if (output.GameSessionConnectionInfo !== undefined &&
        output.GameSessionConnectionInfo !== null) {
        contents.GameSessionConnectionInfo = deserializeAws_json1_1GameSessionConnectionInfo(output.GameSessionConnectionInfo, context);
    }
    if (output.Players !== undefined && output.Players !== null) {
        contents.Players = deserializeAws_json1_1PlayerList(output.Players, context);
    }
    if (output.StartTime !== undefined && output.StartTime !== null) {
        contents.StartTime = new Date(Math.round(output.StartTime * 1000));
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.StatusReason !== undefined && output.StatusReason !== null) {
        contents.StatusReason = output.StatusReason;
    }
    if (output.TicketId !== undefined && output.TicketId !== null) {
        contents.TicketId = output.TicketId;
    }
    return contents;
};
const deserializeAws_json1_1MatchmakingTicketList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MatchmakingTicket(entry, context));
};
const deserializeAws_json1_1MetricGroupList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PlacedPlayerSession = (output, context) => {
    let contents = {
        __type: "PlacedPlayerSession",
        PlayerId: undefined,
        PlayerSessionId: undefined
    };
    if (output.PlayerId !== undefined && output.PlayerId !== null) {
        contents.PlayerId = output.PlayerId;
    }
    if (output.PlayerSessionId !== undefined && output.PlayerSessionId !== null) {
        contents.PlayerSessionId = output.PlayerSessionId;
    }
    return contents;
};
const deserializeAws_json1_1PlacedPlayerSessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlacedPlayerSession(entry, context));
};
const deserializeAws_json1_1Player = (output, context) => {
    let contents = {
        __type: "Player",
        LatencyInMs: undefined,
        PlayerAttributes: undefined,
        PlayerId: undefined,
        Team: undefined
    };
    if (output.LatencyInMs !== undefined && output.LatencyInMs !== null) {
        contents.LatencyInMs = deserializeAws_json1_1LatencyMap(output.LatencyInMs, context);
    }
    if (output.PlayerAttributes !== undefined &&
        output.PlayerAttributes !== null) {
        contents.PlayerAttributes = deserializeAws_json1_1PlayerAttributeMap(output.PlayerAttributes, context);
    }
    if (output.PlayerId !== undefined && output.PlayerId !== null) {
        contents.PlayerId = output.PlayerId;
    }
    if (output.Team !== undefined && output.Team !== null) {
        contents.Team = output.Team;
    }
    return contents;
};
const deserializeAws_json1_1PlayerAttributeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1PlayerLatency = (output, context) => {
    let contents = {
        __type: "PlayerLatency",
        LatencyInMilliseconds: undefined,
        PlayerId: undefined,
        RegionIdentifier: undefined
    };
    if (output.LatencyInMilliseconds !== undefined &&
        output.LatencyInMilliseconds !== null) {
        contents.LatencyInMilliseconds = output.LatencyInMilliseconds;
    }
    if (output.PlayerId !== undefined && output.PlayerId !== null) {
        contents.PlayerId = output.PlayerId;
    }
    if (output.RegionIdentifier !== undefined &&
        output.RegionIdentifier !== null) {
        contents.RegionIdentifier = output.RegionIdentifier;
    }
    return contents;
};
const deserializeAws_json1_1PlayerLatencyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlayerLatency(entry, context));
};
const deserializeAws_json1_1PlayerLatencyPolicy = (output, context) => {
    let contents = {
        __type: "PlayerLatencyPolicy",
        MaximumIndividualPlayerLatencyMilliseconds: undefined,
        PolicyDurationSeconds: undefined
    };
    if (output.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
        output.MaximumIndividualPlayerLatencyMilliseconds !== null) {
        contents.MaximumIndividualPlayerLatencyMilliseconds =
            output.MaximumIndividualPlayerLatencyMilliseconds;
    }
    if (output.PolicyDurationSeconds !== undefined &&
        output.PolicyDurationSeconds !== null) {
        contents.PolicyDurationSeconds = output.PolicyDurationSeconds;
    }
    return contents;
};
const deserializeAws_json1_1PlayerLatencyPolicyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlayerLatencyPolicy(entry, context));
};
const deserializeAws_json1_1PlayerList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Player(entry, context));
};
const deserializeAws_json1_1PlayerSession = (output, context) => {
    let contents = {
        __type: "PlayerSession",
        CreationTime: undefined,
        DnsName: undefined,
        FleetArn: undefined,
        FleetId: undefined,
        GameSessionId: undefined,
        IpAddress: undefined,
        PlayerData: undefined,
        PlayerId: undefined,
        PlayerSessionId: undefined,
        Port: undefined,
        Status: undefined,
        TerminationTime: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.FleetArn !== undefined && output.FleetArn !== null) {
        contents.FleetArn = output.FleetArn;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.GameSessionId !== undefined && output.GameSessionId !== null) {
        contents.GameSessionId = output.GameSessionId;
    }
    if (output.IpAddress !== undefined && output.IpAddress !== null) {
        contents.IpAddress = output.IpAddress;
    }
    if (output.PlayerData !== undefined && output.PlayerData !== null) {
        contents.PlayerData = output.PlayerData;
    }
    if (output.PlayerId !== undefined && output.PlayerId !== null) {
        contents.PlayerId = output.PlayerId;
    }
    if (output.PlayerSessionId !== undefined && output.PlayerSessionId !== null) {
        contents.PlayerSessionId = output.PlayerSessionId;
    }
    if (output.Port !== undefined && output.Port !== null) {
        contents.Port = output.Port;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TerminationTime !== undefined && output.TerminationTime !== null) {
        contents.TerminationTime = new Date(Math.round(output.TerminationTime * 1000));
    }
    return contents;
};
const deserializeAws_json1_1PlayerSessionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlayerSession(entry, context));
};
const deserializeAws_json1_1PutScalingPolicyOutput = (output, context) => {
    let contents = {
        __type: "PutScalingPolicyOutput",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1QueueArnsList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RequestUploadCredentialsOutput = (output, context) => {
    let contents = {
        __type: "RequestUploadCredentialsOutput",
        StorageLocation: undefined,
        UploadCredentials: undefined
    };
    if (output.StorageLocation !== undefined && output.StorageLocation !== null) {
        contents.StorageLocation = deserializeAws_json1_1S3Location(output.StorageLocation, context);
    }
    if (output.UploadCredentials !== undefined &&
        output.UploadCredentials !== null) {
        contents.UploadCredentials = deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context);
    }
    return contents;
};
const deserializeAws_json1_1ResolveAliasOutput = (output, context) => {
    let contents = {
        __type: "ResolveAliasOutput",
        FleetArn: undefined,
        FleetId: undefined
    };
    if (output.FleetArn !== undefined && output.FleetArn !== null) {
        contents.FleetArn = output.FleetArn;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    return contents;
};
const deserializeAws_json1_1ResourceCreationLimitPolicy = (output, context) => {
    let contents = {
        __type: "ResourceCreationLimitPolicy",
        NewGameSessionsPerCreator: undefined,
        PolicyPeriodInMinutes: undefined
    };
    if (output.NewGameSessionsPerCreator !== undefined &&
        output.NewGameSessionsPerCreator !== null) {
        contents.NewGameSessionsPerCreator = output.NewGameSessionsPerCreator;
    }
    if (output.PolicyPeriodInMinutes !== undefined &&
        output.PolicyPeriodInMinutes !== null) {
        contents.PolicyPeriodInMinutes = output.PolicyPeriodInMinutes;
    }
    return contents;
};
const deserializeAws_json1_1RoutingStrategy = (output, context) => {
    let contents = {
        __type: "RoutingStrategy",
        FleetId: undefined,
        Message: undefined,
        Type: undefined
    };
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1RuntimeConfiguration = (output, context) => {
    let contents = {
        __type: "RuntimeConfiguration",
        GameSessionActivationTimeoutSeconds: undefined,
        MaxConcurrentGameSessionActivations: undefined,
        ServerProcesses: undefined
    };
    if (output.GameSessionActivationTimeoutSeconds !== undefined &&
        output.GameSessionActivationTimeoutSeconds !== null) {
        contents.GameSessionActivationTimeoutSeconds =
            output.GameSessionActivationTimeoutSeconds;
    }
    if (output.MaxConcurrentGameSessionActivations !== undefined &&
        output.MaxConcurrentGameSessionActivations !== null) {
        contents.MaxConcurrentGameSessionActivations =
            output.MaxConcurrentGameSessionActivations;
    }
    if (output.ServerProcesses !== undefined && output.ServerProcesses !== null) {
        contents.ServerProcesses = deserializeAws_json1_1ServerProcessList(output.ServerProcesses, context);
    }
    return contents;
};
const deserializeAws_json1_1S3Location = (output, context) => {
    let contents = {
        __type: "S3Location",
        Bucket: undefined,
        Key: undefined,
        ObjectVersion: undefined,
        RoleArn: undefined
    };
    if (output.Bucket !== undefined && output.Bucket !== null) {
        contents.Bucket = output.Bucket;
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.ObjectVersion !== undefined && output.ObjectVersion !== null) {
        contents.ObjectVersion = output.ObjectVersion;
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    return contents;
};
const deserializeAws_json1_1ScalingPolicy = (output, context) => {
    let contents = {
        __type: "ScalingPolicy",
        ComparisonOperator: undefined,
        EvaluationPeriods: undefined,
        FleetId: undefined,
        MetricName: undefined,
        Name: undefined,
        PolicyType: undefined,
        ScalingAdjustment: undefined,
        ScalingAdjustmentType: undefined,
        Status: undefined,
        TargetConfiguration: undefined,
        Threshold: undefined
    };
    if (output.ComparisonOperator !== undefined &&
        output.ComparisonOperator !== null) {
        contents.ComparisonOperator = output.ComparisonOperator;
    }
    if (output.EvaluationPeriods !== undefined &&
        output.EvaluationPeriods !== null) {
        contents.EvaluationPeriods = output.EvaluationPeriods;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.MetricName !== undefined && output.MetricName !== null) {
        contents.MetricName = output.MetricName;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.PolicyType !== undefined && output.PolicyType !== null) {
        contents.PolicyType = output.PolicyType;
    }
    if (output.ScalingAdjustment !== undefined &&
        output.ScalingAdjustment !== null) {
        contents.ScalingAdjustment = output.ScalingAdjustment;
    }
    if (output.ScalingAdjustmentType !== undefined &&
        output.ScalingAdjustmentType !== null) {
        contents.ScalingAdjustmentType = output.ScalingAdjustmentType;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TargetConfiguration !== undefined &&
        output.TargetConfiguration !== null) {
        contents.TargetConfiguration = deserializeAws_json1_1TargetConfiguration(output.TargetConfiguration, context);
    }
    if (output.Threshold !== undefined && output.Threshold !== null) {
        contents.Threshold = output.Threshold;
    }
    return contents;
};
const deserializeAws_json1_1ScalingPolicyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ScalingPolicy(entry, context));
};
const deserializeAws_json1_1Script = (output, context) => {
    let contents = {
        __type: "Script",
        CreationTime: undefined,
        Name: undefined,
        ScriptArn: undefined,
        ScriptId: undefined,
        SizeOnDisk: undefined,
        StorageLocation: undefined,
        Version: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ScriptArn !== undefined && output.ScriptArn !== null) {
        contents.ScriptArn = output.ScriptArn;
    }
    if (output.ScriptId !== undefined && output.ScriptId !== null) {
        contents.ScriptId = output.ScriptId;
    }
    if (output.SizeOnDisk !== undefined && output.SizeOnDisk !== null) {
        contents.SizeOnDisk = output.SizeOnDisk;
    }
    if (output.StorageLocation !== undefined && output.StorageLocation !== null) {
        contents.StorageLocation = deserializeAws_json1_1S3Location(output.StorageLocation, context);
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1ScriptList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Script(entry, context));
};
const deserializeAws_json1_1SearchGameSessionsOutput = (output, context) => {
    let contents = {
        __type: "SearchGameSessionsOutput",
        GameSessions: undefined,
        NextToken: undefined
    };
    if (output.GameSessions !== undefined && output.GameSessions !== null) {
        contents.GameSessions = deserializeAws_json1_1GameSessionList(output.GameSessions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ServerProcess = (output, context) => {
    let contents = {
        __type: "ServerProcess",
        ConcurrentExecutions: undefined,
        LaunchPath: undefined,
        Parameters: undefined
    };
    if (output.ConcurrentExecutions !== undefined &&
        output.ConcurrentExecutions !== null) {
        contents.ConcurrentExecutions = output.ConcurrentExecutions;
    }
    if (output.LaunchPath !== undefined && output.LaunchPath !== null) {
        contents.LaunchPath = output.LaunchPath;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = output.Parameters;
    }
    return contents;
};
const deserializeAws_json1_1ServerProcessList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServerProcess(entry, context));
};
const deserializeAws_json1_1StartFleetActionsOutput = (output, context) => {
    let contents = {
        __type: "StartFleetActionsOutput"
    };
    return contents;
};
const deserializeAws_json1_1StartGameSessionPlacementOutput = (output, context) => {
    let contents = {
        __type: "StartGameSessionPlacementOutput",
        GameSessionPlacement: undefined
    };
    if (output.GameSessionPlacement !== undefined &&
        output.GameSessionPlacement !== null) {
        contents.GameSessionPlacement = deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context);
    }
    return contents;
};
const deserializeAws_json1_1StartMatchBackfillOutput = (output, context) => {
    let contents = {
        __type: "StartMatchBackfillOutput",
        MatchmakingTicket: undefined
    };
    if (output.MatchmakingTicket !== undefined &&
        output.MatchmakingTicket !== null) {
        contents.MatchmakingTicket = deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context);
    }
    return contents;
};
const deserializeAws_json1_1StartMatchmakingOutput = (output, context) => {
    let contents = {
        __type: "StartMatchmakingOutput",
        MatchmakingTicket: undefined
    };
    if (output.MatchmakingTicket !== undefined &&
        output.MatchmakingTicket !== null) {
        contents.MatchmakingTicket = deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context);
    }
    return contents;
};
const deserializeAws_json1_1StopFleetActionsOutput = (output, context) => {
    let contents = {
        __type: "StopFleetActionsOutput"
    };
    return contents;
};
const deserializeAws_json1_1StopGameSessionPlacementOutput = (output, context) => {
    let contents = {
        __type: "StopGameSessionPlacementOutput",
        GameSessionPlacement: undefined
    };
    if (output.GameSessionPlacement !== undefined &&
        output.GameSessionPlacement !== null) {
        contents.GameSessionPlacement = deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context);
    }
    return contents;
};
const deserializeAws_json1_1StopMatchmakingOutput = (output, context) => {
    let contents = {
        __type: "StopMatchmakingOutput"
    };
    return contents;
};
const deserializeAws_json1_1StringDoubleMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TaggingFailedException = (output, context) => {
    let contents = {
        __type: "TaggingFailedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TargetConfiguration = (output, context) => {
    let contents = {
        __type: "TargetConfiguration",
        TargetValue: undefined
    };
    if (output.TargetValue !== undefined && output.TargetValue !== null) {
        contents.TargetValue = output.TargetValue;
    }
    return contents;
};
const deserializeAws_json1_1TerminalRoutingStrategyException = (output, context) => {
    let contents = {
        __type: "TerminalRoutingStrategyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnauthorizedException = (output, context) => {
    let contents = {
        __type: "UnauthorizedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UnsupportedRegionException = (output, context) => {
    let contents = {
        __type: "UnsupportedRegionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateAliasOutput = (output, context) => {
    let contents = {
        __type: "UpdateAliasOutput",
        Alias: undefined
    };
    if (output.Alias !== undefined && output.Alias !== null) {
        contents.Alias = deserializeAws_json1_1Alias(output.Alias, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateBuildOutput = (output, context) => {
    let contents = {
        __type: "UpdateBuildOutput",
        Build: undefined
    };
    if (output.Build !== undefined && output.Build !== null) {
        contents.Build = deserializeAws_json1_1Build(output.Build, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateFleetAttributesOutput = (output, context) => {
    let contents = {
        __type: "UpdateFleetAttributesOutput",
        FleetId: undefined
    };
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateFleetCapacityOutput = (output, context) => {
    let contents = {
        __type: "UpdateFleetCapacityOutput",
        FleetId: undefined
    };
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateFleetPortSettingsOutput = (output, context) => {
    let contents = {
        __type: "UpdateFleetPortSettingsOutput",
        FleetId: undefined
    };
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    return contents;
};
const deserializeAws_json1_1UpdateGameSessionOutput = (output, context) => {
    let contents = {
        __type: "UpdateGameSessionOutput",
        GameSession: undefined
    };
    if (output.GameSession !== undefined && output.GameSession !== null) {
        contents.GameSession = deserializeAws_json1_1GameSession(output.GameSession, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateGameSessionQueueOutput = (output, context) => {
    let contents = {
        __type: "UpdateGameSessionQueueOutput",
        GameSessionQueue: undefined
    };
    if (output.GameSessionQueue !== undefined &&
        output.GameSessionQueue !== null) {
        contents.GameSessionQueue = deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateMatchmakingConfigurationOutput = (output, context) => {
    let contents = {
        __type: "UpdateMatchmakingConfigurationOutput",
        Configuration: undefined
    };
    if (output.Configuration !== undefined && output.Configuration !== null) {
        contents.Configuration = deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateRuntimeConfigurationOutput = (output, context) => {
    let contents = {
        __type: "UpdateRuntimeConfigurationOutput",
        RuntimeConfiguration: undefined
    };
    if (output.RuntimeConfiguration !== undefined &&
        output.RuntimeConfiguration !== null) {
        contents.RuntimeConfiguration = deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateScriptOutput = (output, context) => {
    let contents = {
        __type: "UpdateScriptOutput",
        Script: undefined
    };
    if (output.Script !== undefined && output.Script !== null) {
        contents.Script = deserializeAws_json1_1Script(output.Script, context);
    }
    return contents;
};
const deserializeAws_json1_1ValidateMatchmakingRuleSetOutput = (output, context) => {
    let contents = {
        __type: "ValidateMatchmakingRuleSetOutput",
        Valid: undefined
    };
    if (output.Valid !== undefined && output.Valid !== null) {
        contents.Valid = output.Valid;
    }
    return contents;
};
const deserializeAws_json1_1VpcPeeringAuthorization = (output, context) => {
    let contents = {
        __type: "VpcPeeringAuthorization",
        CreationTime: undefined,
        ExpirationTime: undefined,
        GameLiftAwsAccountId: undefined,
        PeerVpcAwsAccountId: undefined,
        PeerVpcId: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
        contents.ExpirationTime = new Date(Math.round(output.ExpirationTime * 1000));
    }
    if (output.GameLiftAwsAccountId !== undefined &&
        output.GameLiftAwsAccountId !== null) {
        contents.GameLiftAwsAccountId = output.GameLiftAwsAccountId;
    }
    if (output.PeerVpcAwsAccountId !== undefined &&
        output.PeerVpcAwsAccountId !== null) {
        contents.PeerVpcAwsAccountId = output.PeerVpcAwsAccountId;
    }
    if (output.PeerVpcId !== undefined && output.PeerVpcId !== null) {
        contents.PeerVpcId = output.PeerVpcId;
    }
    return contents;
};
const deserializeAws_json1_1VpcPeeringAuthorizationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VpcPeeringAuthorization(entry, context));
};
const deserializeAws_json1_1VpcPeeringConnection = (output, context) => {
    let contents = {
        __type: "VpcPeeringConnection",
        FleetArn: undefined,
        FleetId: undefined,
        GameLiftVpcId: undefined,
        IpV4CidrBlock: undefined,
        PeerVpcId: undefined,
        Status: undefined,
        VpcPeeringConnectionId: undefined
    };
    if (output.FleetArn !== undefined && output.FleetArn !== null) {
        contents.FleetArn = output.FleetArn;
    }
    if (output.FleetId !== undefined && output.FleetId !== null) {
        contents.FleetId = output.FleetId;
    }
    if (output.GameLiftVpcId !== undefined && output.GameLiftVpcId !== null) {
        contents.GameLiftVpcId = output.GameLiftVpcId;
    }
    if (output.IpV4CidrBlock !== undefined && output.IpV4CidrBlock !== null) {
        contents.IpV4CidrBlock = output.IpV4CidrBlock;
    }
    if (output.PeerVpcId !== undefined && output.PeerVpcId !== null) {
        contents.PeerVpcId = output.PeerVpcId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = deserializeAws_json1_1VpcPeeringConnectionStatus(output.Status, context);
    }
    if (output.VpcPeeringConnectionId !== undefined &&
        output.VpcPeeringConnectionId !== null) {
        contents.VpcPeeringConnectionId = output.VpcPeeringConnectionId;
    }
    return contents;
};
const deserializeAws_json1_1VpcPeeringConnectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VpcPeeringConnection(entry, context));
};
const deserializeAws_json1_1VpcPeeringConnectionStatus = (output, context) => {
    let contents = {
        __type: "VpcPeeringConnectionStatus",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
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