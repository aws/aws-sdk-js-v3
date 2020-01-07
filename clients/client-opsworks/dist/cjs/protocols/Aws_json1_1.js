"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AssignInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.AssignInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssignInstanceCommand = serializeAws_json1_1AssignInstanceCommand;
async function serializeAws_json1_1AssignVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.AssignVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssignVolumeCommand = serializeAws_json1_1AssignVolumeCommand;
async function serializeAws_json1_1AssociateElasticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.AssociateElasticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateElasticIpCommand = serializeAws_json1_1AssociateElasticIpCommand;
async function serializeAws_json1_1AttachElasticLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.AttachElasticLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachElasticLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AttachElasticLoadBalancerCommand = serializeAws_json1_1AttachElasticLoadBalancerCommand;
async function serializeAws_json1_1CloneStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CloneStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1CloneStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CloneStackCommand = serializeAws_json1_1CloneStackCommand;
async function serializeAws_json1_1CreateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAppCommand = serializeAws_json1_1CreateAppCommand;
async function serializeAws_json1_1CreateDeploymentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateDeployment";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDeploymentCommand = serializeAws_json1_1CreateDeploymentCommand;
async function serializeAws_json1_1CreateInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateInstanceCommand = serializeAws_json1_1CreateInstanceCommand;
async function serializeAws_json1_1CreateLayerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateLayer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateLayerCommand = serializeAws_json1_1CreateLayerCommand;
async function serializeAws_json1_1CreateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStackCommand = serializeAws_json1_1CreateStackCommand;
async function serializeAws_json1_1CreateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.CreateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateUserProfileCommand = serializeAws_json1_1CreateUserProfileCommand;
async function serializeAws_json1_1DeleteAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeleteApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAppCommand = serializeAws_json1_1DeleteAppCommand;
async function serializeAws_json1_1DeleteInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeleteInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteInstanceCommand = serializeAws_json1_1DeleteInstanceCommand;
async function serializeAws_json1_1DeleteLayerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeleteLayer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteLayerCommand = serializeAws_json1_1DeleteLayerCommand;
async function serializeAws_json1_1DeleteStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeleteStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteStackCommand = serializeAws_json1_1DeleteStackCommand;
async function serializeAws_json1_1DeleteUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeleteUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteUserProfileCommand = serializeAws_json1_1DeleteUserProfileCommand;
async function serializeAws_json1_1DeregisterEcsClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeregisterEcsCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterEcsClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterEcsClusterCommand = serializeAws_json1_1DeregisterEcsClusterCommand;
async function serializeAws_json1_1DeregisterElasticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeregisterElasticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterElasticIpCommand = serializeAws_json1_1DeregisterElasticIpCommand;
async function serializeAws_json1_1DeregisterInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeregisterInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterInstanceCommand = serializeAws_json1_1DeregisterInstanceCommand;
async function serializeAws_json1_1DeregisterRdsDbInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeregisterRdsDbInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterRdsDbInstanceCommand = serializeAws_json1_1DeregisterRdsDbInstanceCommand;
async function serializeAws_json1_1DeregisterVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DeregisterVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterVolumeCommand = serializeAws_json1_1DeregisterVolumeCommand;
async function serializeAws_json1_1DescribeAgentVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeAgentVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAgentVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAgentVersionsCommand = serializeAws_json1_1DescribeAgentVersionsCommand;
async function serializeAws_json1_1DescribeAppsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeApps";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAppsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeAppsCommand = serializeAws_json1_1DescribeAppsCommand;
async function serializeAws_json1_1DescribeCommandsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeCommands";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCommandsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCommandsCommand = serializeAws_json1_1DescribeCommandsCommand;
async function serializeAws_json1_1DescribeDeploymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeDeployments";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeploymentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDeploymentsCommand = serializeAws_json1_1DescribeDeploymentsCommand;
async function serializeAws_json1_1DescribeEcsClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeEcsClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEcsClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEcsClustersCommand = serializeAws_json1_1DescribeEcsClustersCommand;
async function serializeAws_json1_1DescribeElasticIpsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeElasticIps";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeElasticIpsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeElasticIpsCommand = serializeAws_json1_1DescribeElasticIpsCommand;
async function serializeAws_json1_1DescribeElasticLoadBalancersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeElasticLoadBalancers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeElasticLoadBalancersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeElasticLoadBalancersCommand = serializeAws_json1_1DescribeElasticLoadBalancersCommand;
async function serializeAws_json1_1DescribeInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeInstancesCommand = serializeAws_json1_1DescribeInstancesCommand;
async function serializeAws_json1_1DescribeLayersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeLayers";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLayersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLayersCommand = serializeAws_json1_1DescribeLayersCommand;
async function serializeAws_json1_1DescribeLoadBasedAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeLoadBasedAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLoadBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeLoadBasedAutoScalingCommand = serializeAws_json1_1DescribeLoadBasedAutoScalingCommand;
async function serializeAws_json1_1DescribeMyUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeMyUserProfile";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeMyUserProfileCommand = serializeAws_json1_1DescribeMyUserProfileCommand;
async function serializeAws_json1_1DescribeOperatingSystemsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeOperatingSystems";
    return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
}
exports.serializeAws_json1_1DescribeOperatingSystemsCommand = serializeAws_json1_1DescribeOperatingSystemsCommand;
async function serializeAws_json1_1DescribePermissionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribePermissions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribePermissionsCommand = serializeAws_json1_1DescribePermissionsCommand;
async function serializeAws_json1_1DescribeRaidArraysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeRaidArrays";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRaidArraysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRaidArraysCommand = serializeAws_json1_1DescribeRaidArraysCommand;
async function serializeAws_json1_1DescribeRdsDbInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeRdsDbInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRdsDbInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeRdsDbInstancesCommand = serializeAws_json1_1DescribeRdsDbInstancesCommand;
async function serializeAws_json1_1DescribeServiceErrorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeServiceErrors";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceErrorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServiceErrorsCommand = serializeAws_json1_1DescribeServiceErrorsCommand;
async function serializeAws_json1_1DescribeStackProvisioningParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "OpsWorks_20130218.DescribeStackProvisioningParameters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStackProvisioningParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStackProvisioningParametersCommand = serializeAws_json1_1DescribeStackProvisioningParametersCommand;
async function serializeAws_json1_1DescribeStackSummaryCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeStackSummary";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStackSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStackSummaryCommand = serializeAws_json1_1DescribeStackSummaryCommand;
async function serializeAws_json1_1DescribeStacksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeStacks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStacksCommand = serializeAws_json1_1DescribeStacksCommand;
async function serializeAws_json1_1DescribeTimeBasedAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeTimeBasedAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTimeBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTimeBasedAutoScalingCommand = serializeAws_json1_1DescribeTimeBasedAutoScalingCommand;
async function serializeAws_json1_1DescribeUserProfilesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeUserProfiles";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeUserProfilesCommand = serializeAws_json1_1DescribeUserProfilesCommand;
async function serializeAws_json1_1DescribeVolumesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DescribeVolumes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVolumesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeVolumesCommand = serializeAws_json1_1DescribeVolumesCommand;
async function serializeAws_json1_1DetachElasticLoadBalancerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DetachElasticLoadBalancer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachElasticLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetachElasticLoadBalancerCommand = serializeAws_json1_1DetachElasticLoadBalancerCommand;
async function serializeAws_json1_1DisassociateElasticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.DisassociateElasticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateElasticIpCommand = serializeAws_json1_1DisassociateElasticIpCommand;
async function serializeAws_json1_1GetHostnameSuggestionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.GetHostnameSuggestion";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHostnameSuggestionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetHostnameSuggestionCommand = serializeAws_json1_1GetHostnameSuggestionCommand;
async function serializeAws_json1_1GrantAccessCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.GrantAccess";
    let body;
    body = JSON.stringify(serializeAws_json1_1GrantAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GrantAccessCommand = serializeAws_json1_1GrantAccessCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1RebootInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RebootInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RebootInstanceCommand = serializeAws_json1_1RebootInstanceCommand;
async function serializeAws_json1_1RegisterEcsClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RegisterEcsCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterEcsClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterEcsClusterCommand = serializeAws_json1_1RegisterEcsClusterCommand;
async function serializeAws_json1_1RegisterElasticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RegisterElasticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterElasticIpCommand = serializeAws_json1_1RegisterElasticIpCommand;
async function serializeAws_json1_1RegisterInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RegisterInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterInstanceCommand = serializeAws_json1_1RegisterInstanceCommand;
async function serializeAws_json1_1RegisterRdsDbInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RegisterRdsDbInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterRdsDbInstanceCommand = serializeAws_json1_1RegisterRdsDbInstanceCommand;
async function serializeAws_json1_1RegisterVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.RegisterVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterVolumeCommand = serializeAws_json1_1RegisterVolumeCommand;
async function serializeAws_json1_1SetLoadBasedAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.SetLoadBasedAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetLoadBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetLoadBasedAutoScalingCommand = serializeAws_json1_1SetLoadBasedAutoScalingCommand;
async function serializeAws_json1_1SetPermissionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.SetPermission";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetPermissionCommand = serializeAws_json1_1SetPermissionCommand;
async function serializeAws_json1_1SetTimeBasedAutoScalingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.SetTimeBasedAutoScaling";
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTimeBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SetTimeBasedAutoScalingCommand = serializeAws_json1_1SetTimeBasedAutoScalingCommand;
async function serializeAws_json1_1StartInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.StartInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartInstanceCommand = serializeAws_json1_1StartInstanceCommand;
async function serializeAws_json1_1StartStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.StartStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartStackCommand = serializeAws_json1_1StartStackCommand;
async function serializeAws_json1_1StopInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.StopInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopInstanceCommand = serializeAws_json1_1StopInstanceCommand;
async function serializeAws_json1_1StopStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.StopStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopStackCommand = serializeAws_json1_1StopStackCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UnassignInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UnassignInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnassignInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnassignInstanceCommand = serializeAws_json1_1UnassignInstanceCommand;
async function serializeAws_json1_1UnassignVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UnassignVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1UnassignVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UnassignVolumeCommand = serializeAws_json1_1UnassignVolumeCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAppCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateApp";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAppCommand = serializeAws_json1_1UpdateAppCommand;
async function serializeAws_json1_1UpdateElasticIpCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateElasticIp";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateElasticIpCommand = serializeAws_json1_1UpdateElasticIpCommand;
async function serializeAws_json1_1UpdateInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateInstanceCommand = serializeAws_json1_1UpdateInstanceCommand;
async function serializeAws_json1_1UpdateLayerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateLayer";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateLayerCommand = serializeAws_json1_1UpdateLayerCommand;
async function serializeAws_json1_1UpdateMyUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateMyUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMyUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateMyUserProfileCommand = serializeAws_json1_1UpdateMyUserProfileCommand;
async function serializeAws_json1_1UpdateRdsDbInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateRdsDbInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateRdsDbInstanceCommand = serializeAws_json1_1UpdateRdsDbInstanceCommand;
async function serializeAws_json1_1UpdateStackCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateStack";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateStackCommand = serializeAws_json1_1UpdateStackCommand;
async function serializeAws_json1_1UpdateUserProfileCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateUserProfile";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateUserProfileCommand = serializeAws_json1_1UpdateUserProfileCommand;
async function serializeAws_json1_1UpdateVolumeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "OpsWorks_20130218.UpdateVolume";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateVolumeCommand = serializeAws_json1_1UpdateVolumeCommand;
async function deserializeAws_json1_1AssignInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssignInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssignInstanceCommand = deserializeAws_json1_1AssignInstanceCommand;
async function deserializeAws_json1_1AssignInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1AssignVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssignVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssignVolumeCommand = deserializeAws_json1_1AssignVolumeCommand;
async function deserializeAws_json1_1AssignVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1AssociateElasticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateElasticIpCommand = deserializeAws_json1_1AssociateElasticIpCommand;
async function deserializeAws_json1_1AssociateElasticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1AttachElasticLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AttachElasticLoadBalancerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AttachElasticLoadBalancerCommand = deserializeAws_json1_1AttachElasticLoadBalancerCommand;
async function deserializeAws_json1_1AttachElasticLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CloneStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CloneStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CloneStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CloneStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CloneStackCommand = deserializeAws_json1_1CloneStackCommand;
async function deserializeAws_json1_1CloneStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAppResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAppResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAppCommand = deserializeAws_json1_1CreateAppCommand;
async function deserializeAws_json1_1CreateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateDeploymentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDeploymentResult" }, contents);
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateInstanceCommand = deserializeAws_json1_1CreateInstanceCommand;
async function deserializeAws_json1_1CreateInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateLayerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateLayerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLayerResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateLayerResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateLayerCommand = deserializeAws_json1_1CreateLayerCommand;
async function deserializeAws_json1_1CreateLayerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStackResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStackResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStackCommand = deserializeAws_json1_1CreateStackCommand;
async function deserializeAws_json1_1CreateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1CreateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateUserProfileCommand = deserializeAws_json1_1CreateUserProfileCommand;
async function deserializeAws_json1_1CreateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeleteAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAppCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAppCommand = deserializeAws_json1_1DeleteAppCommand;
async function deserializeAws_json1_1DeleteAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeleteInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteInstanceCommand = deserializeAws_json1_1DeleteInstanceCommand;
async function deserializeAws_json1_1DeleteInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeleteLayerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteLayerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteLayerCommand = deserializeAws_json1_1DeleteLayerCommand;
async function deserializeAws_json1_1DeleteLayerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeleteStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteStackCommand = deserializeAws_json1_1DeleteStackCommand;
async function deserializeAws_json1_1DeleteStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeleteUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteUserProfileCommand = deserializeAws_json1_1DeleteUserProfileCommand;
async function deserializeAws_json1_1DeleteUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeregisterEcsClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterEcsClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterEcsClusterCommand = deserializeAws_json1_1DeregisterEcsClusterCommand;
async function deserializeAws_json1_1DeregisterEcsClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeregisterElasticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterElasticIpCommand = deserializeAws_json1_1DeregisterElasticIpCommand;
async function deserializeAws_json1_1DeregisterElasticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeregisterInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterInstanceCommand = deserializeAws_json1_1DeregisterInstanceCommand;
async function deserializeAws_json1_1DeregisterInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeregisterRdsDbInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterRdsDbInstanceCommand = deserializeAws_json1_1DeregisterRdsDbInstanceCommand;
async function deserializeAws_json1_1DeregisterRdsDbInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DeregisterVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterVolumeCommand = deserializeAws_json1_1DeregisterVolumeCommand;
async function deserializeAws_json1_1DeregisterVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeAgentVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAgentVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAgentVersionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAgentVersionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAgentVersionsCommand = deserializeAws_json1_1DescribeAgentVersionsCommand;
async function deserializeAws_json1_1DescribeAgentVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeAppsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeAppsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAppsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAppsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeAppsCommand = deserializeAws_json1_1DescribeAppsCommand;
async function deserializeAws_json1_1DescribeAppsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeCommandsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCommandsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCommandsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCommandsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCommandsCommand = deserializeAws_json1_1DescribeCommandsCommand;
async function deserializeAws_json1_1DescribeCommandsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeDeploymentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeploymentsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDeploymentsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDeploymentsCommand = deserializeAws_json1_1DescribeDeploymentsCommand;
async function deserializeAws_json1_1DescribeDeploymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeEcsClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEcsClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEcsClustersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEcsClustersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEcsClustersCommand = deserializeAws_json1_1DescribeEcsClustersCommand;
async function deserializeAws_json1_1DescribeEcsClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeElasticIpsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeElasticIpsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeElasticIpsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeElasticIpsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeElasticIpsCommand = deserializeAws_json1_1DescribeElasticIpsCommand;
async function deserializeAws_json1_1DescribeElasticIpsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeElasticLoadBalancersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeElasticLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeElasticLoadBalancersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeElasticLoadBalancersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeElasticLoadBalancersCommand = deserializeAws_json1_1DescribeElasticLoadBalancersCommand;
async function deserializeAws_json1_1DescribeElasticLoadBalancersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeInstancesResult" }, contents);
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeLayersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLayersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLayersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLayersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLayersCommand = deserializeAws_json1_1DescribeLayersCommand;
async function deserializeAws_json1_1DescribeLayersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLoadBasedAutoScalingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeLoadBasedAutoScalingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand = deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand;
async function deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeMyUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeMyUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMyUserProfileResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeMyUserProfileResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeMyUserProfileCommand = deserializeAws_json1_1DescribeMyUserProfileCommand;
async function deserializeAws_json1_1DescribeMyUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeOperatingSystemsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeOperatingSystemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOperatingSystemsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeOperatingSystemsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeOperatingSystemsCommand = deserializeAws_json1_1DescribeOperatingSystemsCommand;
async function deserializeAws_json1_1DescribeOperatingSystemsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribePermissionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePermissionsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribePermissionsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribePermissionsCommand = deserializeAws_json1_1DescribePermissionsCommand;
async function deserializeAws_json1_1DescribePermissionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeRaidArraysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRaidArraysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRaidArraysResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRaidArraysResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRaidArraysCommand = deserializeAws_json1_1DescribeRaidArraysCommand;
async function deserializeAws_json1_1DescribeRaidArraysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeRdsDbInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeRdsDbInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRdsDbInstancesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeRdsDbInstancesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeRdsDbInstancesCommand = deserializeAws_json1_1DescribeRdsDbInstancesCommand;
async function deserializeAws_json1_1DescribeRdsDbInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeServiceErrorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServiceErrorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceErrorsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServiceErrorsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServiceErrorsCommand = deserializeAws_json1_1DescribeServiceErrorsCommand;
async function deserializeAws_json1_1DescribeServiceErrorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeStackProvisioningParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStackProvisioningParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStackProvisioningParametersResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackProvisioningParametersResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStackProvisioningParametersCommand = deserializeAws_json1_1DescribeStackProvisioningParametersCommand;
async function deserializeAws_json1_1DescribeStackProvisioningParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeStackSummaryCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStackSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStackSummaryResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStackSummaryResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStackSummaryCommand = deserializeAws_json1_1DescribeStackSummaryCommand;
async function deserializeAws_json1_1DescribeStackSummaryCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeStacksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStacksResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStacksResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStacksCommand = deserializeAws_json1_1DescribeStacksCommand;
async function deserializeAws_json1_1DescribeStacksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTimeBasedAutoScalingResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTimeBasedAutoScalingResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand = deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand;
async function deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeUserProfilesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeUserProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserProfilesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeUserProfilesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeUserProfilesCommand = deserializeAws_json1_1DescribeUserProfilesCommand;
async function deserializeAws_json1_1DescribeUserProfilesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DescribeVolumesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVolumesResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeVolumesResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeVolumesCommand = deserializeAws_json1_1DescribeVolumesCommand;
async function deserializeAws_json1_1DescribeVolumesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1DetachElasticLoadBalancerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetachElasticLoadBalancerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetachElasticLoadBalancerCommand = deserializeAws_json1_1DetachElasticLoadBalancerCommand;
async function deserializeAws_json1_1DetachElasticLoadBalancerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
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
async function deserializeAws_json1_1DisassociateElasticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateElasticIpCommand = deserializeAws_json1_1DisassociateElasticIpCommand;
async function deserializeAws_json1_1DisassociateElasticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1GetHostnameSuggestionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetHostnameSuggestionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHostnameSuggestionResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetHostnameSuggestionResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetHostnameSuggestionCommand = deserializeAws_json1_1GetHostnameSuggestionCommand;
async function deserializeAws_json1_1GetHostnameSuggestionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1GrantAccessCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GrantAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GrantAccessResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GrantAccessResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GrantAccessCommand = deserializeAws_json1_1GrantAccessCommand;
async function deserializeAws_json1_1GrantAccessCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RebootInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RebootInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RebootInstanceCommand = deserializeAws_json1_1RebootInstanceCommand;
async function deserializeAws_json1_1RebootInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RegisterEcsClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterEcsClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterEcsClusterResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterEcsClusterResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterEcsClusterCommand = deserializeAws_json1_1RegisterEcsClusterCommand;
async function deserializeAws_json1_1RegisterEcsClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RegisterElasticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterElasticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterElasticIpResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterElasticIpResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterElasticIpCommand = deserializeAws_json1_1RegisterElasticIpCommand;
async function deserializeAws_json1_1RegisterElasticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RegisterInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterInstanceResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterInstanceResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterInstanceCommand = deserializeAws_json1_1RegisterInstanceCommand;
async function deserializeAws_json1_1RegisterInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RegisterRdsDbInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterRdsDbInstanceCommand = deserializeAws_json1_1RegisterRdsDbInstanceCommand;
async function deserializeAws_json1_1RegisterRdsDbInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1RegisterVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterVolumeResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterVolumeResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterVolumeCommand = deserializeAws_json1_1RegisterVolumeCommand;
async function deserializeAws_json1_1RegisterVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1SetLoadBasedAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetLoadBasedAutoScalingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetLoadBasedAutoScalingCommand = deserializeAws_json1_1SetLoadBasedAutoScalingCommand;
async function deserializeAws_json1_1SetLoadBasedAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1SetPermissionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetPermissionCommand = deserializeAws_json1_1SetPermissionCommand;
async function deserializeAws_json1_1SetPermissionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1SetTimeBasedAutoScalingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SetTimeBasedAutoScalingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SetTimeBasedAutoScalingCommand = deserializeAws_json1_1SetTimeBasedAutoScalingCommand;
async function deserializeAws_json1_1SetTimeBasedAutoScalingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1StartInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartInstanceCommand = deserializeAws_json1_1StartInstanceCommand;
async function deserializeAws_json1_1StartInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1StartStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartStackCommand = deserializeAws_json1_1StartStackCommand;
async function deserializeAws_json1_1StartStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1StopInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopInstanceCommand = deserializeAws_json1_1StopInstanceCommand;
async function deserializeAws_json1_1StopInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1StopStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopStackCommand = deserializeAws_json1_1StopStackCommand;
async function deserializeAws_json1_1StopStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UnassignInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnassignInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnassignInstanceCommand = deserializeAws_json1_1UnassignInstanceCommand;
async function deserializeAws_json1_1UnassignInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UnassignVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UnassignVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UnassignVolumeCommand = deserializeAws_json1_1UnassignVolumeCommand;
async function deserializeAws_json1_1UnassignVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateAppCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAppCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAppCommand = deserializeAws_json1_1UpdateAppCommand;
async function deserializeAws_json1_1UpdateAppCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateElasticIpCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateElasticIpCommand = deserializeAws_json1_1UpdateElasticIpCommand;
async function deserializeAws_json1_1UpdateElasticIpCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateInstanceCommand = deserializeAws_json1_1UpdateInstanceCommand;
async function deserializeAws_json1_1UpdateInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateLayerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateLayerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateLayerCommand = deserializeAws_json1_1UpdateLayerCommand;
async function deserializeAws_json1_1UpdateLayerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateMyUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateMyUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateMyUserProfileCommand = deserializeAws_json1_1UpdateMyUserProfileCommand;
async function deserializeAws_json1_1UpdateMyUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateRdsDbInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateRdsDbInstanceCommand = deserializeAws_json1_1UpdateRdsDbInstanceCommand;
async function deserializeAws_json1_1UpdateRdsDbInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateStackCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateStackCommand = deserializeAws_json1_1UpdateStackCommand;
async function deserializeAws_json1_1UpdateStackCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateUserProfileCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateUserProfileCommand = deserializeAws_json1_1UpdateUserProfileCommand;
async function deserializeAws_json1_1UpdateUserProfileCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
async function deserializeAws_json1_1UpdateVolumeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateVolumeCommand = deserializeAws_json1_1UpdateVolumeCommand;
async function deserializeAws_json1_1UpdateVolumeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
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
const serializeAws_json1_1AppAttributes = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1AssignInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1AssignVolumeRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.VolumeId !== undefined) {
        bodyParams["VolumeId"] = input.VolumeId;
    }
    return bodyParams;
};
const serializeAws_json1_1AssociateElasticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticIp !== undefined) {
        bodyParams["ElasticIp"] = input.ElasticIp;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachElasticLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticLoadBalancerName !== undefined) {
        bodyParams["ElasticLoadBalancerName"] = input.ElasticLoadBalancerName;
    }
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1AutoScalingThresholds = (input, context) => {
    const bodyParams = {};
    if (input.Alarms !== undefined) {
        bodyParams["Alarms"] = serializeAws_json1_1Strings(input.Alarms, context);
    }
    if (input.CpuThreshold !== undefined) {
        bodyParams["CpuThreshold"] = input.CpuThreshold;
    }
    if (input.IgnoreMetricsTime !== undefined) {
        bodyParams["IgnoreMetricsTime"] = input.IgnoreMetricsTime;
    }
    if (input.InstanceCount !== undefined) {
        bodyParams["InstanceCount"] = input.InstanceCount;
    }
    if (input.LoadThreshold !== undefined) {
        bodyParams["LoadThreshold"] = input.LoadThreshold;
    }
    if (input.MemoryThreshold !== undefined) {
        bodyParams["MemoryThreshold"] = input.MemoryThreshold;
    }
    if (input.ThresholdsWaitTime !== undefined) {
        bodyParams["ThresholdsWaitTime"] = input.ThresholdsWaitTime;
    }
    return bodyParams;
};
const serializeAws_json1_1BlockDeviceMapping = (input, context) => {
    const bodyParams = {};
    if (input.DeviceName !== undefined) {
        bodyParams["DeviceName"] = input.DeviceName;
    }
    if (input.Ebs !== undefined) {
        bodyParams["Ebs"] = serializeAws_json1_1EbsBlockDevice(input.Ebs, context);
    }
    if (input.NoDevice !== undefined) {
        bodyParams["NoDevice"] = input.NoDevice;
    }
    if (input.VirtualName !== undefined) {
        bodyParams["VirtualName"] = input.VirtualName;
    }
    return bodyParams;
};
const serializeAws_json1_1BlockDeviceMappings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1BlockDeviceMapping(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ChefConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.BerkshelfVersion !== undefined) {
        bodyParams["BerkshelfVersion"] = input.BerkshelfVersion;
    }
    if (input.ManageBerkshelf !== undefined) {
        bodyParams["ManageBerkshelf"] = input.ManageBerkshelf;
    }
    return bodyParams;
};
const serializeAws_json1_1CloneStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentVersion !== undefined) {
        bodyParams["AgentVersion"] = input.AgentVersion;
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1StackAttributes(input.Attributes, context);
    }
    if (input.ChefConfiguration !== undefined) {
        bodyParams["ChefConfiguration"] = serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context);
    }
    if (input.CloneAppIds !== undefined) {
        bodyParams["CloneAppIds"] = serializeAws_json1_1Strings(input.CloneAppIds, context);
    }
    if (input.ClonePermissions !== undefined) {
        bodyParams["ClonePermissions"] = input.ClonePermissions;
    }
    if (input.ConfigurationManager !== undefined) {
        bodyParams["ConfigurationManager"] = serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context);
    }
    if (input.CustomCookbooksSource !== undefined) {
        bodyParams["CustomCookbooksSource"] = serializeAws_json1_1Source(input.CustomCookbooksSource, context);
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.DefaultAvailabilityZone !== undefined) {
        bodyParams["DefaultAvailabilityZone"] = input.DefaultAvailabilityZone;
    }
    if (input.DefaultInstanceProfileArn !== undefined) {
        bodyParams["DefaultInstanceProfileArn"] = input.DefaultInstanceProfileArn;
    }
    if (input.DefaultOs !== undefined) {
        bodyParams["DefaultOs"] = input.DefaultOs;
    }
    if (input.DefaultRootDeviceType !== undefined) {
        bodyParams["DefaultRootDeviceType"] = input.DefaultRootDeviceType;
    }
    if (input.DefaultSshKeyName !== undefined) {
        bodyParams["DefaultSshKeyName"] = input.DefaultSshKeyName;
    }
    if (input.DefaultSubnetId !== undefined) {
        bodyParams["DefaultSubnetId"] = input.DefaultSubnetId;
    }
    if (input.HostnameTheme !== undefined) {
        bodyParams["HostnameTheme"] = input.HostnameTheme;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.SourceStackId !== undefined) {
        bodyParams["SourceStackId"] = input.SourceStackId;
    }
    if (input.UseCustomCookbooks !== undefined) {
        bodyParams["UseCustomCookbooks"] = input.UseCustomCookbooks;
    }
    if (input.UseOpsworksSecurityGroups !== undefined) {
        bodyParams["UseOpsworksSecurityGroups"] = input.UseOpsworksSecurityGroups;
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLogsConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Enabled !== undefined) {
        bodyParams["Enabled"] = input.Enabled;
    }
    if (input.LogStreams !== undefined) {
        bodyParams["LogStreams"] = serializeAws_json1_1CloudWatchLogsLogStreams(input.LogStreams, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLogsLogStream = (input, context) => {
    const bodyParams = {};
    if (input.BatchCount !== undefined) {
        bodyParams["BatchCount"] = input.BatchCount;
    }
    if (input.BatchSize !== undefined) {
        bodyParams["BatchSize"] = input.BatchSize;
    }
    if (input.BufferDuration !== undefined) {
        bodyParams["BufferDuration"] = input.BufferDuration;
    }
    if (input.DatetimeFormat !== undefined) {
        bodyParams["DatetimeFormat"] = input.DatetimeFormat;
    }
    if (input.Encoding !== undefined) {
        bodyParams["Encoding"] = input.Encoding;
    }
    if (input.File !== undefined) {
        bodyParams["File"] = input.File;
    }
    if (input.FileFingerprintLines !== undefined) {
        bodyParams["FileFingerprintLines"] = input.FileFingerprintLines;
    }
    if (input.InitialPosition !== undefined) {
        bodyParams["InitialPosition"] = input.InitialPosition;
    }
    if (input.LogGroupName !== undefined) {
        bodyParams["LogGroupName"] = input.LogGroupName;
    }
    if (input.MultiLineStartPattern !== undefined) {
        bodyParams["MultiLineStartPattern"] = input.MultiLineStartPattern;
    }
    if (input.TimeZone !== undefined) {
        bodyParams["TimeZone"] = input.TimeZone;
    }
    return bodyParams;
};
const serializeAws_json1_1CloudWatchLogsLogStreams = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CloudWatchLogsLogStream(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppSource !== undefined) {
        bodyParams["AppSource"] = serializeAws_json1_1Source(input.AppSource, context);
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1AppAttributes(input.Attributes, context);
    }
    if (input.DataSources !== undefined) {
        bodyParams["DataSources"] = serializeAws_json1_1DataSources(input.DataSources, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Domains !== undefined) {
        bodyParams["Domains"] = serializeAws_json1_1Strings(input.Domains, context);
    }
    if (input.EnableSsl !== undefined) {
        bodyParams["EnableSsl"] = input.EnableSsl;
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1EnvironmentVariables(input.Environment, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Shortname !== undefined) {
        bodyParams["Shortname"] = input.Shortname;
    }
    if (input.SslConfiguration !== undefined) {
        bodyParams["SslConfiguration"] = serializeAws_json1_1SslConfiguration(input.SslConfiguration, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDeploymentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppId !== undefined) {
        bodyParams["AppId"] = input.AppId;
    }
    if (input.Command !== undefined) {
        bodyParams["Command"] = serializeAws_json1_1DeploymentCommand(input.Command, context);
    }
    if (input.Comment !== undefined) {
        bodyParams["Comment"] = input.Comment;
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1Strings(input.InstanceIds, context);
    }
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentVersion !== undefined) {
        bodyParams["AgentVersion"] = input.AgentVersion;
    }
    if (input.AmiId !== undefined) {
        bodyParams["AmiId"] = input.AmiId;
    }
    if (input.Architecture !== undefined) {
        bodyParams["Architecture"] = input.Architecture;
    }
    if (input.AutoScalingType !== undefined) {
        bodyParams["AutoScalingType"] = input.AutoScalingType;
    }
    if (input.AvailabilityZone !== undefined) {
        bodyParams["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.BlockDeviceMappings !== undefined) {
        bodyParams["BlockDeviceMappings"] = serializeAws_json1_1BlockDeviceMappings(input.BlockDeviceMappings, context);
    }
    if (input.EbsOptimized !== undefined) {
        bodyParams["EbsOptimized"] = input.EbsOptimized;
    }
    if (input.Hostname !== undefined) {
        bodyParams["Hostname"] = input.Hostname;
    }
    if (input.InstallUpdatesOnBoot !== undefined) {
        bodyParams["InstallUpdatesOnBoot"] = input.InstallUpdatesOnBoot;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    if (input.Os !== undefined) {
        bodyParams["Os"] = input.Os;
    }
    if (input.RootDeviceType !== undefined) {
        bodyParams["RootDeviceType"] = input.RootDeviceType;
    }
    if (input.SshKeyName !== undefined) {
        bodyParams["SshKeyName"] = input.SshKeyName;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    if (input.SubnetId !== undefined) {
        bodyParams["SubnetId"] = input.SubnetId;
    }
    if (input.Tenancy !== undefined) {
        bodyParams["Tenancy"] = input.Tenancy;
    }
    if (input.VirtualizationType !== undefined) {
        bodyParams["VirtualizationType"] = input.VirtualizationType;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateLayerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1LayerAttributes(input.Attributes, context);
    }
    if (input.AutoAssignElasticIps !== undefined) {
        bodyParams["AutoAssignElasticIps"] = input.AutoAssignElasticIps;
    }
    if (input.AutoAssignPublicIps !== undefined) {
        bodyParams["AutoAssignPublicIps"] = input.AutoAssignPublicIps;
    }
    if (input.CloudWatchLogsConfiguration !== undefined) {
        bodyParams["CloudWatchLogsConfiguration"] = serializeAws_json1_1CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context);
    }
    if (input.CustomInstanceProfileArn !== undefined) {
        bodyParams["CustomInstanceProfileArn"] = input.CustomInstanceProfileArn;
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.CustomRecipes !== undefined) {
        bodyParams["CustomRecipes"] = serializeAws_json1_1Recipes(input.CustomRecipes, context);
    }
    if (input.CustomSecurityGroupIds !== undefined) {
        bodyParams["CustomSecurityGroupIds"] = serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context);
    }
    if (input.EnableAutoHealing !== undefined) {
        bodyParams["EnableAutoHealing"] = input.EnableAutoHealing;
    }
    if (input.InstallUpdatesOnBoot !== undefined) {
        bodyParams["InstallUpdatesOnBoot"] = input.InstallUpdatesOnBoot;
    }
    if (input.LifecycleEventConfiguration !== undefined) {
        bodyParams["LifecycleEventConfiguration"] = serializeAws_json1_1LifecycleEventConfiguration(input.LifecycleEventConfiguration, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Packages !== undefined) {
        bodyParams["Packages"] = serializeAws_json1_1Strings(input.Packages, context);
    }
    if (input.Shortname !== undefined) {
        bodyParams["Shortname"] = input.Shortname;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.UseEbsOptimizedInstances !== undefined) {
        bodyParams["UseEbsOptimizedInstances"] = input.UseEbsOptimizedInstances;
    }
    if (input.VolumeConfigurations !== undefined) {
        bodyParams["VolumeConfigurations"] = serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentVersion !== undefined) {
        bodyParams["AgentVersion"] = input.AgentVersion;
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1StackAttributes(input.Attributes, context);
    }
    if (input.ChefConfiguration !== undefined) {
        bodyParams["ChefConfiguration"] = serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context);
    }
    if (input.ConfigurationManager !== undefined) {
        bodyParams["ConfigurationManager"] = serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context);
    }
    if (input.CustomCookbooksSource !== undefined) {
        bodyParams["CustomCookbooksSource"] = serializeAws_json1_1Source(input.CustomCookbooksSource, context);
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.DefaultAvailabilityZone !== undefined) {
        bodyParams["DefaultAvailabilityZone"] = input.DefaultAvailabilityZone;
    }
    if (input.DefaultInstanceProfileArn !== undefined) {
        bodyParams["DefaultInstanceProfileArn"] = input.DefaultInstanceProfileArn;
    }
    if (input.DefaultOs !== undefined) {
        bodyParams["DefaultOs"] = input.DefaultOs;
    }
    if (input.DefaultRootDeviceType !== undefined) {
        bodyParams["DefaultRootDeviceType"] = input.DefaultRootDeviceType;
    }
    if (input.DefaultSshKeyName !== undefined) {
        bodyParams["DefaultSshKeyName"] = input.DefaultSshKeyName;
    }
    if (input.DefaultSubnetId !== undefined) {
        bodyParams["DefaultSubnetId"] = input.DefaultSubnetId;
    }
    if (input.HostnameTheme !== undefined) {
        bodyParams["HostnameTheme"] = input.HostnameTheme;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Region !== undefined) {
        bodyParams["Region"] = input.Region;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.UseCustomCookbooks !== undefined) {
        bodyParams["UseCustomCookbooks"] = input.UseCustomCookbooks;
    }
    if (input.UseOpsworksSecurityGroups !== undefined) {
        bodyParams["UseOpsworksSecurityGroups"] = input.UseOpsworksSecurityGroups;
    }
    if (input.VpcId !== undefined) {
        bodyParams["VpcId"] = input.VpcId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowSelfManagement !== undefined) {
        bodyParams["AllowSelfManagement"] = input.AllowSelfManagement;
    }
    if (input.IamUserArn !== undefined) {
        bodyParams["IamUserArn"] = input.IamUserArn;
    }
    if (input.SshPublicKey !== undefined) {
        bodyParams["SshPublicKey"] = input.SshPublicKey;
    }
    if (input.SshUsername !== undefined) {
        bodyParams["SshUsername"] = input.SshUsername;
    }
    return bodyParams;
};
const serializeAws_json1_1DailyAutoScalingSchedule = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1DataSource = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    if (input.DatabaseName !== undefined) {
        bodyParams["DatabaseName"] = input.DatabaseName;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1DataSources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DataSource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppId !== undefined) {
        bodyParams["AppId"] = input.AppId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DeleteElasticIp !== undefined) {
        bodyParams["DeleteElasticIp"] = input.DeleteElasticIp;
    }
    if (input.DeleteVolumes !== undefined) {
        bodyParams["DeleteVolumes"] = input.DeleteVolumes;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteLayerRequest = (input, context) => {
    const bodyParams = {};
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.IamUserArn !== undefined) {
        bodyParams["IamUserArn"] = input.IamUserArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentCommand = (input, context) => {
    const bodyParams = {};
    if (input.Args !== undefined) {
        bodyParams["Args"] = serializeAws_json1_1DeploymentCommandArgs(input.Args, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentCommandArgs = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_json1_1Strings(input[key], context);
    });
    return mapParams;
};
const serializeAws_json1_1DeregisterEcsClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.EcsClusterArn !== undefined) {
        bodyParams["EcsClusterArn"] = input.EcsClusterArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterElasticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticIp !== undefined) {
        bodyParams["ElasticIp"] = input.ElasticIp;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterRdsDbInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.RdsDbInstanceArn !== undefined) {
        bodyParams["RdsDbInstanceArn"] = input.RdsDbInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterVolumeRequest = (input, context) => {
    const bodyParams = {};
    if (input.VolumeId !== undefined) {
        bodyParams["VolumeId"] = input.VolumeId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAgentVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ConfigurationManager !== undefined) {
        bodyParams["ConfigurationManager"] = serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeAppsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppIds !== undefined) {
        bodyParams["AppIds"] = serializeAws_json1_1Strings(input.AppIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCommandsRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommandIds !== undefined) {
        bodyParams["CommandIds"] = serializeAws_json1_1Strings(input.CommandIds, context);
    }
    if (input.DeploymentId !== undefined) {
        bodyParams["DeploymentId"] = input.DeploymentId;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDeploymentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppId !== undefined) {
        bodyParams["AppId"] = input.AppId;
    }
    if (input.DeploymentIds !== undefined) {
        bodyParams["DeploymentIds"] = serializeAws_json1_1Strings(input.DeploymentIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEcsClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.EcsClusterArns !== undefined) {
        bodyParams["EcsClusterArns"] = serializeAws_json1_1Strings(input.EcsClusterArns, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeElasticIpsRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.Ips !== undefined) {
        bodyParams["Ips"] = serializeAws_json1_1Strings(input.Ips, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeElasticLoadBalancersRequest = (input, context) => {
    const bodyParams = {};
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1Strings(input.InstanceIds, context);
    }
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLayersRequest = (input, context) => {
    const bodyParams = {};
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeLoadBasedAutoScalingRequest = (input, context) => {
    const bodyParams = {};
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribePermissionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.IamUserArn !== undefined) {
        bodyParams["IamUserArn"] = input.IamUserArn;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRaidArraysRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.RaidArrayIds !== undefined) {
        bodyParams["RaidArrayIds"] = serializeAws_json1_1Strings(input.RaidArrayIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeRdsDbInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.RdsDbInstanceArns !== undefined) {
        bodyParams["RdsDbInstanceArns"] = serializeAws_json1_1Strings(input.RdsDbInstanceArns, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServiceErrorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ServiceErrorIds !== undefined) {
        bodyParams["ServiceErrorIds"] = serializeAws_json1_1Strings(input.ServiceErrorIds, context);
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStackProvisioningParametersRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStackSummaryRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStacksRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackIds !== undefined) {
        bodyParams["StackIds"] = serializeAws_json1_1Strings(input.StackIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTimeBasedAutoScalingRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceIds !== undefined) {
        bodyParams["InstanceIds"] = serializeAws_json1_1Strings(input.InstanceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeUserProfilesRequest = (input, context) => {
    const bodyParams = {};
    if (input.IamUserArns !== undefined) {
        bodyParams["IamUserArns"] = serializeAws_json1_1Strings(input.IamUserArns, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeVolumesRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.RaidArrayId !== undefined) {
        bodyParams["RaidArrayId"] = input.RaidArrayId;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    if (input.VolumeIds !== undefined) {
        bodyParams["VolumeIds"] = serializeAws_json1_1Strings(input.VolumeIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DetachElasticLoadBalancerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticLoadBalancerName !== undefined) {
        bodyParams["ElasticLoadBalancerName"] = input.ElasticLoadBalancerName;
    }
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateElasticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticIp !== undefined) {
        bodyParams["ElasticIp"] = input.ElasticIp;
    }
    return bodyParams;
};
const serializeAws_json1_1EbsBlockDevice = (input, context) => {
    const bodyParams = {};
    if (input.DeleteOnTermination !== undefined) {
        bodyParams["DeleteOnTermination"] = input.DeleteOnTermination;
    }
    if (input.Iops !== undefined) {
        bodyParams["Iops"] = input.Iops;
    }
    if (input.SnapshotId !== undefined) {
        bodyParams["SnapshotId"] = input.SnapshotId;
    }
    if (input.VolumeSize !== undefined) {
        bodyParams["VolumeSize"] = input.VolumeSize;
    }
    if (input.VolumeType !== undefined) {
        bodyParams["VolumeType"] = input.VolumeType;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentVariable = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Secure !== undefined) {
        bodyParams["Secure"] = input.Secure;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EnvironmentVariable(entry, context));
    }
    return contents;
};
const serializeAws_json1_1GetHostnameSuggestionRequest = (input, context) => {
    const bodyParams = {};
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    return bodyParams;
};
const serializeAws_json1_1GrantAccessRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.ValidForInMinutes !== undefined) {
        bodyParams["ValidForInMinutes"] = input.ValidForInMinutes;
    }
    return bodyParams;
};
const serializeAws_json1_1InstanceIdentity = (input, context) => {
    const bodyParams = {};
    if (input.Document !== undefined) {
        bodyParams["Document"] = input.Document;
    }
    if (input.Signature !== undefined) {
        bodyParams["Signature"] = input.Signature;
    }
    return bodyParams;
};
const serializeAws_json1_1LayerAttributes = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1LifecycleEventConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Shutdown !== undefined) {
        bodyParams["Shutdown"] = serializeAws_json1_1ShutdownEventConfiguration(input.Shutdown, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
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
const serializeAws_json1_1RebootInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1Recipes = (input, context) => {
    const bodyParams = {};
    if (input.Configure !== undefined) {
        bodyParams["Configure"] = serializeAws_json1_1Strings(input.Configure, context);
    }
    if (input.Deploy !== undefined) {
        bodyParams["Deploy"] = serializeAws_json1_1Strings(input.Deploy, context);
    }
    if (input.Setup !== undefined) {
        bodyParams["Setup"] = serializeAws_json1_1Strings(input.Setup, context);
    }
    if (input.Shutdown !== undefined) {
        bodyParams["Shutdown"] = serializeAws_json1_1Strings(input.Shutdown, context);
    }
    if (input.Undeploy !== undefined) {
        bodyParams["Undeploy"] = serializeAws_json1_1Strings(input.Undeploy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterEcsClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.EcsClusterArn !== undefined) {
        bodyParams["EcsClusterArn"] = input.EcsClusterArn;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterElasticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticIp !== undefined) {
        bodyParams["ElasticIp"] = input.ElasticIp;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Hostname !== undefined) {
        bodyParams["Hostname"] = input.Hostname;
    }
    if (input.InstanceIdentity !== undefined) {
        bodyParams["InstanceIdentity"] = serializeAws_json1_1InstanceIdentity(input.InstanceIdentity, context);
    }
    if (input.PrivateIp !== undefined) {
        bodyParams["PrivateIp"] = input.PrivateIp;
    }
    if (input.PublicIp !== undefined) {
        bodyParams["PublicIp"] = input.PublicIp;
    }
    if (input.RsaPublicKey !== undefined) {
        bodyParams["RsaPublicKey"] = input.RsaPublicKey;
    }
    if (input.RsaPublicKeyFingerprint !== undefined) {
        bodyParams["RsaPublicKeyFingerprint"] = input.RsaPublicKeyFingerprint;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterRdsDbInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DbPassword !== undefined) {
        bodyParams["DbPassword"] = input.DbPassword;
    }
    if (input.DbUser !== undefined) {
        bodyParams["DbUser"] = input.DbUser;
    }
    if (input.RdsDbInstanceArn !== undefined) {
        bodyParams["RdsDbInstanceArn"] = input.RdsDbInstanceArn;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterVolumeRequest = (input, context) => {
    const bodyParams = {};
    if (input.Ec2VolumeId !== undefined) {
        bodyParams["Ec2VolumeId"] = input.Ec2VolumeId;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1SetLoadBasedAutoScalingRequest = (input, context) => {
    const bodyParams = {};
    if (input.DownScaling !== undefined) {
        bodyParams["DownScaling"] = serializeAws_json1_1AutoScalingThresholds(input.DownScaling, context);
    }
    if (input.Enable !== undefined) {
        bodyParams["Enable"] = input.Enable;
    }
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    if (input.UpScaling !== undefined) {
        bodyParams["UpScaling"] = serializeAws_json1_1AutoScalingThresholds(input.UpScaling, context);
    }
    return bodyParams;
};
const serializeAws_json1_1SetPermissionRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowSsh !== undefined) {
        bodyParams["AllowSsh"] = input.AllowSsh;
    }
    if (input.AllowSudo !== undefined) {
        bodyParams["AllowSudo"] = input.AllowSudo;
    }
    if (input.IamUserArn !== undefined) {
        bodyParams["IamUserArn"] = input.IamUserArn;
    }
    if (input.Level !== undefined) {
        bodyParams["Level"] = input.Level;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1SetTimeBasedAutoScalingRequest = (input, context) => {
    const bodyParams = {};
    if (input.AutoScalingSchedule !== undefined) {
        bodyParams["AutoScalingSchedule"] = serializeAws_json1_1WeeklyAutoScalingSchedule(input.AutoScalingSchedule, context);
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1ShutdownEventConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.DelayUntilElbConnectionsDrained !== undefined) {
        bodyParams["DelayUntilElbConnectionsDrained"] =
            input.DelayUntilElbConnectionsDrained;
    }
    if (input.ExecutionTimeout !== undefined) {
        bodyParams["ExecutionTimeout"] = input.ExecutionTimeout;
    }
    return bodyParams;
};
const serializeAws_json1_1Source = (input, context) => {
    const bodyParams = {};
    if (input.Password !== undefined) {
        bodyParams["Password"] = input.Password;
    }
    if (input.Revision !== undefined) {
        bodyParams["Revision"] = input.Revision;
    }
    if (input.SshKey !== undefined) {
        bodyParams["SshKey"] = input.SshKey;
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Url !== undefined) {
        bodyParams["Url"] = input.Url;
    }
    if (input.Username !== undefined) {
        bodyParams["Username"] = input.Username;
    }
    return bodyParams;
};
const serializeAws_json1_1SslConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Certificate !== undefined) {
        bodyParams["Certificate"] = input.Certificate;
    }
    if (input.Chain !== undefined) {
        bodyParams["Chain"] = input.Chain;
    }
    if (input.PrivateKey !== undefined) {
        bodyParams["PrivateKey"] = input.PrivateKey;
    }
    return bodyParams;
};
const serializeAws_json1_1StackAttributes = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1StackConfigurationManager = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1StartInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1StartStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.Force !== undefined) {
        bodyParams["Force"] = input.Force;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    return bodyParams;
};
const serializeAws_json1_1Strings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1UnassignInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    return bodyParams;
};
const serializeAws_json1_1UnassignVolumeRequest = (input, context) => {
    const bodyParams = {};
    if (input.VolumeId !== undefined) {
        bodyParams["VolumeId"] = input.VolumeId;
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAppRequest = (input, context) => {
    const bodyParams = {};
    if (input.AppId !== undefined) {
        bodyParams["AppId"] = input.AppId;
    }
    if (input.AppSource !== undefined) {
        bodyParams["AppSource"] = serializeAws_json1_1Source(input.AppSource, context);
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1AppAttributes(input.Attributes, context);
    }
    if (input.DataSources !== undefined) {
        bodyParams["DataSources"] = serializeAws_json1_1DataSources(input.DataSources, context);
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Domains !== undefined) {
        bodyParams["Domains"] = serializeAws_json1_1Strings(input.Domains, context);
    }
    if (input.EnableSsl !== undefined) {
        bodyParams["EnableSsl"] = input.EnableSsl;
    }
    if (input.Environment !== undefined) {
        bodyParams["Environment"] = serializeAws_json1_1EnvironmentVariables(input.Environment, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.SslConfiguration !== undefined) {
        bodyParams["SslConfiguration"] = serializeAws_json1_1SslConfiguration(input.SslConfiguration, context);
    }
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateElasticIpRequest = (input, context) => {
    const bodyParams = {};
    if (input.ElasticIp !== undefined) {
        bodyParams["ElasticIp"] = input.ElasticIp;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentVersion !== undefined) {
        bodyParams["AgentVersion"] = input.AgentVersion;
    }
    if (input.AmiId !== undefined) {
        bodyParams["AmiId"] = input.AmiId;
    }
    if (input.Architecture !== undefined) {
        bodyParams["Architecture"] = input.Architecture;
    }
    if (input.AutoScalingType !== undefined) {
        bodyParams["AutoScalingType"] = input.AutoScalingType;
    }
    if (input.EbsOptimized !== undefined) {
        bodyParams["EbsOptimized"] = input.EbsOptimized;
    }
    if (input.Hostname !== undefined) {
        bodyParams["Hostname"] = input.Hostname;
    }
    if (input.InstallUpdatesOnBoot !== undefined) {
        bodyParams["InstallUpdatesOnBoot"] = input.InstallUpdatesOnBoot;
    }
    if (input.InstanceId !== undefined) {
        bodyParams["InstanceId"] = input.InstanceId;
    }
    if (input.InstanceType !== undefined) {
        bodyParams["InstanceType"] = input.InstanceType;
    }
    if (input.LayerIds !== undefined) {
        bodyParams["LayerIds"] = serializeAws_json1_1Strings(input.LayerIds, context);
    }
    if (input.Os !== undefined) {
        bodyParams["Os"] = input.Os;
    }
    if (input.SshKeyName !== undefined) {
        bodyParams["SshKeyName"] = input.SshKeyName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateLayerRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1LayerAttributes(input.Attributes, context);
    }
    if (input.AutoAssignElasticIps !== undefined) {
        bodyParams["AutoAssignElasticIps"] = input.AutoAssignElasticIps;
    }
    if (input.AutoAssignPublicIps !== undefined) {
        bodyParams["AutoAssignPublicIps"] = input.AutoAssignPublicIps;
    }
    if (input.CloudWatchLogsConfiguration !== undefined) {
        bodyParams["CloudWatchLogsConfiguration"] = serializeAws_json1_1CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context);
    }
    if (input.CustomInstanceProfileArn !== undefined) {
        bodyParams["CustomInstanceProfileArn"] = input.CustomInstanceProfileArn;
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.CustomRecipes !== undefined) {
        bodyParams["CustomRecipes"] = serializeAws_json1_1Recipes(input.CustomRecipes, context);
    }
    if (input.CustomSecurityGroupIds !== undefined) {
        bodyParams["CustomSecurityGroupIds"] = serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context);
    }
    if (input.EnableAutoHealing !== undefined) {
        bodyParams["EnableAutoHealing"] = input.EnableAutoHealing;
    }
    if (input.InstallUpdatesOnBoot !== undefined) {
        bodyParams["InstallUpdatesOnBoot"] = input.InstallUpdatesOnBoot;
    }
    if (input.LayerId !== undefined) {
        bodyParams["LayerId"] = input.LayerId;
    }
    if (input.LifecycleEventConfiguration !== undefined) {
        bodyParams["LifecycleEventConfiguration"] = serializeAws_json1_1LifecycleEventConfiguration(input.LifecycleEventConfiguration, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Packages !== undefined) {
        bodyParams["Packages"] = serializeAws_json1_1Strings(input.Packages, context);
    }
    if (input.Shortname !== undefined) {
        bodyParams["Shortname"] = input.Shortname;
    }
    if (input.UseEbsOptimizedInstances !== undefined) {
        bodyParams["UseEbsOptimizedInstances"] = input.UseEbsOptimizedInstances;
    }
    if (input.VolumeConfigurations !== undefined) {
        bodyParams["VolumeConfigurations"] = serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateMyUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.SshPublicKey !== undefined) {
        bodyParams["SshPublicKey"] = input.SshPublicKey;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateRdsDbInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.DbPassword !== undefined) {
        bodyParams["DbPassword"] = input.DbPassword;
    }
    if (input.DbUser !== undefined) {
        bodyParams["DbUser"] = input.DbUser;
    }
    if (input.RdsDbInstanceArn !== undefined) {
        bodyParams["RdsDbInstanceArn"] = input.RdsDbInstanceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateStackRequest = (input, context) => {
    const bodyParams = {};
    if (input.AgentVersion !== undefined) {
        bodyParams["AgentVersion"] = input.AgentVersion;
    }
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1StackAttributes(input.Attributes, context);
    }
    if (input.ChefConfiguration !== undefined) {
        bodyParams["ChefConfiguration"] = serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context);
    }
    if (input.ConfigurationManager !== undefined) {
        bodyParams["ConfigurationManager"] = serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context);
    }
    if (input.CustomCookbooksSource !== undefined) {
        bodyParams["CustomCookbooksSource"] = serializeAws_json1_1Source(input.CustomCookbooksSource, context);
    }
    if (input.CustomJson !== undefined) {
        bodyParams["CustomJson"] = input.CustomJson;
    }
    if (input.DefaultAvailabilityZone !== undefined) {
        bodyParams["DefaultAvailabilityZone"] = input.DefaultAvailabilityZone;
    }
    if (input.DefaultInstanceProfileArn !== undefined) {
        bodyParams["DefaultInstanceProfileArn"] = input.DefaultInstanceProfileArn;
    }
    if (input.DefaultOs !== undefined) {
        bodyParams["DefaultOs"] = input.DefaultOs;
    }
    if (input.DefaultRootDeviceType !== undefined) {
        bodyParams["DefaultRootDeviceType"] = input.DefaultRootDeviceType;
    }
    if (input.DefaultSshKeyName !== undefined) {
        bodyParams["DefaultSshKeyName"] = input.DefaultSshKeyName;
    }
    if (input.DefaultSubnetId !== undefined) {
        bodyParams["DefaultSubnetId"] = input.DefaultSubnetId;
    }
    if (input.HostnameTheme !== undefined) {
        bodyParams["HostnameTheme"] = input.HostnameTheme;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.ServiceRoleArn !== undefined) {
        bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
    }
    if (input.StackId !== undefined) {
        bodyParams["StackId"] = input.StackId;
    }
    if (input.UseCustomCookbooks !== undefined) {
        bodyParams["UseCustomCookbooks"] = input.UseCustomCookbooks;
    }
    if (input.UseOpsworksSecurityGroups !== undefined) {
        bodyParams["UseOpsworksSecurityGroups"] = input.UseOpsworksSecurityGroups;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateUserProfileRequest = (input, context) => {
    const bodyParams = {};
    if (input.AllowSelfManagement !== undefined) {
        bodyParams["AllowSelfManagement"] = input.AllowSelfManagement;
    }
    if (input.IamUserArn !== undefined) {
        bodyParams["IamUserArn"] = input.IamUserArn;
    }
    if (input.SshPublicKey !== undefined) {
        bodyParams["SshPublicKey"] = input.SshPublicKey;
    }
    if (input.SshUsername !== undefined) {
        bodyParams["SshUsername"] = input.SshUsername;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateVolumeRequest = (input, context) => {
    const bodyParams = {};
    if (input.MountPoint !== undefined) {
        bodyParams["MountPoint"] = input.MountPoint;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.VolumeId !== undefined) {
        bodyParams["VolumeId"] = input.VolumeId;
    }
    return bodyParams;
};
const serializeAws_json1_1VolumeConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.Encrypted !== undefined) {
        bodyParams["Encrypted"] = input.Encrypted;
    }
    if (input.Iops !== undefined) {
        bodyParams["Iops"] = input.Iops;
    }
    if (input.MountPoint !== undefined) {
        bodyParams["MountPoint"] = input.MountPoint;
    }
    if (input.NumberOfDisks !== undefined) {
        bodyParams["NumberOfDisks"] = input.NumberOfDisks;
    }
    if (input.RaidLevel !== undefined) {
        bodyParams["RaidLevel"] = input.RaidLevel;
    }
    if (input.Size !== undefined) {
        bodyParams["Size"] = input.Size;
    }
    if (input.VolumeType !== undefined) {
        bodyParams["VolumeType"] = input.VolumeType;
    }
    return bodyParams;
};
const serializeAws_json1_1VolumeConfigurations = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VolumeConfiguration(entry, context));
    }
    return contents;
};
const serializeAws_json1_1WeeklyAutoScalingSchedule = (input, context) => {
    const bodyParams = {};
    if (input.Friday !== undefined) {
        bodyParams["Friday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Friday, context);
    }
    if (input.Monday !== undefined) {
        bodyParams["Monday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Monday, context);
    }
    if (input.Saturday !== undefined) {
        bodyParams["Saturday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Saturday, context);
    }
    if (input.Sunday !== undefined) {
        bodyParams["Sunday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Sunday, context);
    }
    if (input.Thursday !== undefined) {
        bodyParams["Thursday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Thursday, context);
    }
    if (input.Tuesday !== undefined) {
        bodyParams["Tuesday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Tuesday, context);
    }
    if (input.Wednesday !== undefined) {
        bodyParams["Wednesday"] = serializeAws_json1_1DailyAutoScalingSchedule(input.Wednesday, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AgentVersion = (output, context) => {
    let contents = {
        __type: "AgentVersion",
        ConfigurationManager: undefined,
        Version: undefined
    };
    if (output.ConfigurationManager !== undefined &&
        output.ConfigurationManager !== null) {
        contents.ConfigurationManager = deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context);
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1AgentVersions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AgentVersion(entry, context));
};
const deserializeAws_json1_1App = (output, context) => {
    let contents = {
        __type: "App",
        AppId: undefined,
        AppSource: undefined,
        Attributes: undefined,
        CreatedAt: undefined,
        DataSources: undefined,
        Description: undefined,
        Domains: undefined,
        EnableSsl: undefined,
        Environment: undefined,
        Name: undefined,
        Shortname: undefined,
        SslConfiguration: undefined,
        StackId: undefined,
        Type: undefined
    };
    if (output.AppId !== undefined && output.AppId !== null) {
        contents.AppId = output.AppId;
    }
    if (output.AppSource !== undefined && output.AppSource !== null) {
        contents.AppSource = deserializeAws_json1_1Source(output.AppSource, context);
    }
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1AppAttributes(output.Attributes, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.DataSources !== undefined && output.DataSources !== null) {
        contents.DataSources = deserializeAws_json1_1DataSources(output.DataSources, context);
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Domains !== undefined && output.Domains !== null) {
        contents.Domains = deserializeAws_json1_1Strings(output.Domains, context);
    }
    if (output.EnableSsl !== undefined && output.EnableSsl !== null) {
        contents.EnableSsl = output.EnableSsl;
    }
    if (output.Environment !== undefined && output.Environment !== null) {
        contents.Environment = deserializeAws_json1_1EnvironmentVariables(output.Environment, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Shortname !== undefined && output.Shortname !== null) {
        contents.Shortname = output.Shortname;
    }
    if (output.SslConfiguration !== undefined &&
        output.SslConfiguration !== null) {
        contents.SslConfiguration = deserializeAws_json1_1SslConfiguration(output.SslConfiguration, context);
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1AppAttributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Apps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1App(entry, context));
};
const deserializeAws_json1_1AutoScalingThresholds = (output, context) => {
    let contents = {
        __type: "AutoScalingThresholds",
        Alarms: undefined,
        CpuThreshold: undefined,
        IgnoreMetricsTime: undefined,
        InstanceCount: undefined,
        LoadThreshold: undefined,
        MemoryThreshold: undefined,
        ThresholdsWaitTime: undefined
    };
    if (output.Alarms !== undefined && output.Alarms !== null) {
        contents.Alarms = deserializeAws_json1_1Strings(output.Alarms, context);
    }
    if (output.CpuThreshold !== undefined && output.CpuThreshold !== null) {
        contents.CpuThreshold = output.CpuThreshold;
    }
    if (output.IgnoreMetricsTime !== undefined &&
        output.IgnoreMetricsTime !== null) {
        contents.IgnoreMetricsTime = output.IgnoreMetricsTime;
    }
    if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
        contents.InstanceCount = output.InstanceCount;
    }
    if (output.LoadThreshold !== undefined && output.LoadThreshold !== null) {
        contents.LoadThreshold = output.LoadThreshold;
    }
    if (output.MemoryThreshold !== undefined && output.MemoryThreshold !== null) {
        contents.MemoryThreshold = output.MemoryThreshold;
    }
    if (output.ThresholdsWaitTime !== undefined &&
        output.ThresholdsWaitTime !== null) {
        contents.ThresholdsWaitTime = output.ThresholdsWaitTime;
    }
    return contents;
};
const deserializeAws_json1_1BlockDeviceMapping = (output, context) => {
    let contents = {
        __type: "BlockDeviceMapping",
        DeviceName: undefined,
        Ebs: undefined,
        NoDevice: undefined,
        VirtualName: undefined
    };
    if (output.DeviceName !== undefined && output.DeviceName !== null) {
        contents.DeviceName = output.DeviceName;
    }
    if (output.Ebs !== undefined && output.Ebs !== null) {
        contents.Ebs = deserializeAws_json1_1EbsBlockDevice(output.Ebs, context);
    }
    if (output.NoDevice !== undefined && output.NoDevice !== null) {
        contents.NoDevice = output.NoDevice;
    }
    if (output.VirtualName !== undefined && output.VirtualName !== null) {
        contents.VirtualName = output.VirtualName;
    }
    return contents;
};
const deserializeAws_json1_1BlockDeviceMappings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BlockDeviceMapping(entry, context));
};
const deserializeAws_json1_1ChefConfiguration = (output, context) => {
    let contents = {
        __type: "ChefConfiguration",
        BerkshelfVersion: undefined,
        ManageBerkshelf: undefined
    };
    if (output.BerkshelfVersion !== undefined &&
        output.BerkshelfVersion !== null) {
        contents.BerkshelfVersion = output.BerkshelfVersion;
    }
    if (output.ManageBerkshelf !== undefined && output.ManageBerkshelf !== null) {
        contents.ManageBerkshelf = output.ManageBerkshelf;
    }
    return contents;
};
const deserializeAws_json1_1CloneStackResult = (output, context) => {
    let contents = {
        __type: "CloneStackResult",
        StackId: undefined
    };
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsConfiguration = (output, context) => {
    let contents = {
        __type: "CloudWatchLogsConfiguration",
        Enabled: undefined,
        LogStreams: undefined
    };
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.LogStreams !== undefined && output.LogStreams !== null) {
        contents.LogStreams = deserializeAws_json1_1CloudWatchLogsLogStreams(output.LogStreams, context);
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsLogStream = (output, context) => {
    let contents = {
        __type: "CloudWatchLogsLogStream",
        BatchCount: undefined,
        BatchSize: undefined,
        BufferDuration: undefined,
        DatetimeFormat: undefined,
        Encoding: undefined,
        File: undefined,
        FileFingerprintLines: undefined,
        InitialPosition: undefined,
        LogGroupName: undefined,
        MultiLineStartPattern: undefined,
        TimeZone: undefined
    };
    if (output.BatchCount !== undefined && output.BatchCount !== null) {
        contents.BatchCount = output.BatchCount;
    }
    if (output.BatchSize !== undefined && output.BatchSize !== null) {
        contents.BatchSize = output.BatchSize;
    }
    if (output.BufferDuration !== undefined && output.BufferDuration !== null) {
        contents.BufferDuration = output.BufferDuration;
    }
    if (output.DatetimeFormat !== undefined && output.DatetimeFormat !== null) {
        contents.DatetimeFormat = output.DatetimeFormat;
    }
    if (output.Encoding !== undefined && output.Encoding !== null) {
        contents.Encoding = output.Encoding;
    }
    if (output.File !== undefined && output.File !== null) {
        contents.File = output.File;
    }
    if (output.FileFingerprintLines !== undefined &&
        output.FileFingerprintLines !== null) {
        contents.FileFingerprintLines = output.FileFingerprintLines;
    }
    if (output.InitialPosition !== undefined && output.InitialPosition !== null) {
        contents.InitialPosition = output.InitialPosition;
    }
    if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
        contents.LogGroupName = output.LogGroupName;
    }
    if (output.MultiLineStartPattern !== undefined &&
        output.MultiLineStartPattern !== null) {
        contents.MultiLineStartPattern = output.MultiLineStartPattern;
    }
    if (output.TimeZone !== undefined && output.TimeZone !== null) {
        contents.TimeZone = output.TimeZone;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsLogStreams = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CloudWatchLogsLogStream(entry, context));
};
const deserializeAws_json1_1Command = (output, context) => {
    let contents = {
        __type: "Command",
        AcknowledgedAt: undefined,
        CommandId: undefined,
        CompletedAt: undefined,
        CreatedAt: undefined,
        DeploymentId: undefined,
        ExitCode: undefined,
        InstanceId: undefined,
        LogUrl: undefined,
        Status: undefined,
        Type: undefined
    };
    if (output.AcknowledgedAt !== undefined && output.AcknowledgedAt !== null) {
        contents.AcknowledgedAt = output.AcknowledgedAt;
    }
    if (output.CommandId !== undefined && output.CommandId !== null) {
        contents.CommandId = output.CommandId;
    }
    if (output.CompletedAt !== undefined && output.CompletedAt !== null) {
        contents.CompletedAt = output.CompletedAt;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.DeploymentId !== undefined && output.DeploymentId !== null) {
        contents.DeploymentId = output.DeploymentId;
    }
    if (output.ExitCode !== undefined && output.ExitCode !== null) {
        contents.ExitCode = output.ExitCode;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.LogUrl !== undefined && output.LogUrl !== null) {
        contents.LogUrl = output.LogUrl;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Commands = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Command(entry, context));
};
const deserializeAws_json1_1CreateAppResult = (output, context) => {
    let contents = {
        __type: "CreateAppResult",
        AppId: undefined
    };
    if (output.AppId !== undefined && output.AppId !== null) {
        contents.AppId = output.AppId;
    }
    return contents;
};
const deserializeAws_json1_1CreateDeploymentResult = (output, context) => {
    let contents = {
        __type: "CreateDeploymentResult",
        DeploymentId: undefined
    };
    if (output.DeploymentId !== undefined && output.DeploymentId !== null) {
        contents.DeploymentId = output.DeploymentId;
    }
    return contents;
};
const deserializeAws_json1_1CreateInstanceResult = (output, context) => {
    let contents = {
        __type: "CreateInstanceResult",
        InstanceId: undefined
    };
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    return contents;
};
const deserializeAws_json1_1CreateLayerResult = (output, context) => {
    let contents = {
        __type: "CreateLayerResult",
        LayerId: undefined
    };
    if (output.LayerId !== undefined && output.LayerId !== null) {
        contents.LayerId = output.LayerId;
    }
    return contents;
};
const deserializeAws_json1_1CreateStackResult = (output, context) => {
    let contents = {
        __type: "CreateStackResult",
        StackId: undefined
    };
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1CreateUserProfileResult = (output, context) => {
    let contents = {
        __type: "CreateUserProfileResult",
        IamUserArn: undefined
    };
    if (output.IamUserArn !== undefined && output.IamUserArn !== null) {
        contents.IamUserArn = output.IamUserArn;
    }
    return contents;
};
const deserializeAws_json1_1DailyAutoScalingSchedule = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1DataSource = (output, context) => {
    let contents = {
        __type: "DataSource",
        Arn: undefined,
        DatabaseName: undefined,
        Type: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
        contents.DatabaseName = output.DatabaseName;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1DataSources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataSource(entry, context));
};
const deserializeAws_json1_1Deployment = (output, context) => {
    let contents = {
        __type: "Deployment",
        AppId: undefined,
        Command: undefined,
        Comment: undefined,
        CompletedAt: undefined,
        CreatedAt: undefined,
        CustomJson: undefined,
        DeploymentId: undefined,
        Duration: undefined,
        IamUserArn: undefined,
        InstanceIds: undefined,
        StackId: undefined,
        Status: undefined
    };
    if (output.AppId !== undefined && output.AppId !== null) {
        contents.AppId = output.AppId;
    }
    if (output.Command !== undefined && output.Command !== null) {
        contents.Command = deserializeAws_json1_1DeploymentCommand(output.Command, context);
    }
    if (output.Comment !== undefined && output.Comment !== null) {
        contents.Comment = output.Comment;
    }
    if (output.CompletedAt !== undefined && output.CompletedAt !== null) {
        contents.CompletedAt = output.CompletedAt;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.CustomJson !== undefined && output.CustomJson !== null) {
        contents.CustomJson = output.CustomJson;
    }
    if (output.DeploymentId !== undefined && output.DeploymentId !== null) {
        contents.DeploymentId = output.DeploymentId;
    }
    if (output.Duration !== undefined && output.Duration !== null) {
        contents.Duration = output.Duration;
    }
    if (output.IamUserArn !== undefined && output.IamUserArn !== null) {
        contents.IamUserArn = output.IamUserArn;
    }
    if (output.InstanceIds !== undefined && output.InstanceIds !== null) {
        contents.InstanceIds = deserializeAws_json1_1Strings(output.InstanceIds, context);
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentCommand = (output, context) => {
    let contents = {
        __type: "DeploymentCommand",
        Args: undefined,
        Name: undefined
    };
    if (output.Args !== undefined && output.Args !== null) {
        contents.Args = deserializeAws_json1_1DeploymentCommandArgs(output.Args, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentCommandArgs = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_1Strings(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_1Deployments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Deployment(entry, context));
};
const deserializeAws_json1_1DescribeAgentVersionsResult = (output, context) => {
    let contents = {
        __type: "DescribeAgentVersionsResult",
        AgentVersions: undefined
    };
    if (output.AgentVersions !== undefined && output.AgentVersions !== null) {
        contents.AgentVersions = deserializeAws_json1_1AgentVersions(output.AgentVersions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeAppsResult = (output, context) => {
    let contents = {
        __type: "DescribeAppsResult",
        Apps: undefined
    };
    if (output.Apps !== undefined && output.Apps !== null) {
        contents.Apps = deserializeAws_json1_1Apps(output.Apps, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCommandsResult = (output, context) => {
    let contents = {
        __type: "DescribeCommandsResult",
        Commands: undefined
    };
    if (output.Commands !== undefined && output.Commands !== null) {
        contents.Commands = deserializeAws_json1_1Commands(output.Commands, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDeploymentsResult = (output, context) => {
    let contents = {
        __type: "DescribeDeploymentsResult",
        Deployments: undefined
    };
    if (output.Deployments !== undefined && output.Deployments !== null) {
        contents.Deployments = deserializeAws_json1_1Deployments(output.Deployments, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEcsClustersResult = (output, context) => {
    let contents = {
        __type: "DescribeEcsClustersResult",
        EcsClusters: undefined,
        NextToken: undefined
    };
    if (output.EcsClusters !== undefined && output.EcsClusters !== null) {
        contents.EcsClusters = deserializeAws_json1_1EcsClusters(output.EcsClusters, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeElasticIpsResult = (output, context) => {
    let contents = {
        __type: "DescribeElasticIpsResult",
        ElasticIps: undefined
    };
    if (output.ElasticIps !== undefined && output.ElasticIps !== null) {
        contents.ElasticIps = deserializeAws_json1_1ElasticIps(output.ElasticIps, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeElasticLoadBalancersResult = (output, context) => {
    let contents = {
        __type: "DescribeElasticLoadBalancersResult",
        ElasticLoadBalancers: undefined
    };
    if (output.ElasticLoadBalancers !== undefined &&
        output.ElasticLoadBalancers !== null) {
        contents.ElasticLoadBalancers = deserializeAws_json1_1ElasticLoadBalancers(output.ElasticLoadBalancers, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeInstancesResult = (output, context) => {
    let contents = {
        __type: "DescribeInstancesResult",
        Instances: undefined
    };
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1Instances(output.Instances, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLayersResult = (output, context) => {
    let contents = {
        __type: "DescribeLayersResult",
        Layers: undefined
    };
    if (output.Layers !== undefined && output.Layers !== null) {
        contents.Layers = deserializeAws_json1_1Layers(output.Layers, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeLoadBasedAutoScalingResult = (output, context) => {
    let contents = {
        __type: "DescribeLoadBasedAutoScalingResult",
        LoadBasedAutoScalingConfigurations: undefined
    };
    if (output.LoadBasedAutoScalingConfigurations !== undefined &&
        output.LoadBasedAutoScalingConfigurations !== null) {
        contents.LoadBasedAutoScalingConfigurations = deserializeAws_json1_1LoadBasedAutoScalingConfigurations(output.LoadBasedAutoScalingConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeMyUserProfileResult = (output, context) => {
    let contents = {
        __type: "DescribeMyUserProfileResult",
        UserProfile: undefined
    };
    if (output.UserProfile !== undefined && output.UserProfile !== null) {
        contents.UserProfile = deserializeAws_json1_1SelfUserProfile(output.UserProfile, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeOperatingSystemsResponse = (output, context) => {
    let contents = {
        __type: "DescribeOperatingSystemsResponse",
        OperatingSystems: undefined
    };
    if (output.OperatingSystems !== undefined &&
        output.OperatingSystems !== null) {
        contents.OperatingSystems = deserializeAws_json1_1OperatingSystems(output.OperatingSystems, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribePermissionsResult = (output, context) => {
    let contents = {
        __type: "DescribePermissionsResult",
        Permissions: undefined
    };
    if (output.Permissions !== undefined && output.Permissions !== null) {
        contents.Permissions = deserializeAws_json1_1Permissions(output.Permissions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRaidArraysResult = (output, context) => {
    let contents = {
        __type: "DescribeRaidArraysResult",
        RaidArrays: undefined
    };
    if (output.RaidArrays !== undefined && output.RaidArrays !== null) {
        contents.RaidArrays = deserializeAws_json1_1RaidArrays(output.RaidArrays, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeRdsDbInstancesResult = (output, context) => {
    let contents = {
        __type: "DescribeRdsDbInstancesResult",
        RdsDbInstances: undefined
    };
    if (output.RdsDbInstances !== undefined && output.RdsDbInstances !== null) {
        contents.RdsDbInstances = deserializeAws_json1_1RdsDbInstances(output.RdsDbInstances, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeServiceErrorsResult = (output, context) => {
    let contents = {
        __type: "DescribeServiceErrorsResult",
        ServiceErrors: undefined
    };
    if (output.ServiceErrors !== undefined && output.ServiceErrors !== null) {
        contents.ServiceErrors = deserializeAws_json1_1ServiceErrors(output.ServiceErrors, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStackProvisioningParametersResult = (output, context) => {
    let contents = {
        __type: "DescribeStackProvisioningParametersResult",
        AgentInstallerUrl: undefined,
        Parameters: undefined
    };
    if (output.AgentInstallerUrl !== undefined &&
        output.AgentInstallerUrl !== null) {
        contents.AgentInstallerUrl = output.AgentInstallerUrl;
    }
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1Parameters(output.Parameters, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStackSummaryResult = (output, context) => {
    let contents = {
        __type: "DescribeStackSummaryResult",
        StackSummary: undefined
    };
    if (output.StackSummary !== undefined && output.StackSummary !== null) {
        contents.StackSummary = deserializeAws_json1_1StackSummary(output.StackSummary, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStacksResult = (output, context) => {
    let contents = {
        __type: "DescribeStacksResult",
        Stacks: undefined
    };
    if (output.Stacks !== undefined && output.Stacks !== null) {
        contents.Stacks = deserializeAws_json1_1Stacks(output.Stacks, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTimeBasedAutoScalingResult = (output, context) => {
    let contents = {
        __type: "DescribeTimeBasedAutoScalingResult",
        TimeBasedAutoScalingConfigurations: undefined
    };
    if (output.TimeBasedAutoScalingConfigurations !== undefined &&
        output.TimeBasedAutoScalingConfigurations !== null) {
        contents.TimeBasedAutoScalingConfigurations = deserializeAws_json1_1TimeBasedAutoScalingConfigurations(output.TimeBasedAutoScalingConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeUserProfilesResult = (output, context) => {
    let contents = {
        __type: "DescribeUserProfilesResult",
        UserProfiles: undefined
    };
    if (output.UserProfiles !== undefined && output.UserProfiles !== null) {
        contents.UserProfiles = deserializeAws_json1_1UserProfiles(output.UserProfiles, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeVolumesResult = (output, context) => {
    let contents = {
        __type: "DescribeVolumesResult",
        Volumes: undefined
    };
    if (output.Volumes !== undefined && output.Volumes !== null) {
        contents.Volumes = deserializeAws_json1_1Volumes(output.Volumes, context);
    }
    return contents;
};
const deserializeAws_json1_1EbsBlockDevice = (output, context) => {
    let contents = {
        __type: "EbsBlockDevice",
        DeleteOnTermination: undefined,
        Iops: undefined,
        SnapshotId: undefined,
        VolumeSize: undefined,
        VolumeType: undefined
    };
    if (output.DeleteOnTermination !== undefined &&
        output.DeleteOnTermination !== null) {
        contents.DeleteOnTermination = output.DeleteOnTermination;
    }
    if (output.Iops !== undefined && output.Iops !== null) {
        contents.Iops = output.Iops;
    }
    if (output.SnapshotId !== undefined && output.SnapshotId !== null) {
        contents.SnapshotId = output.SnapshotId;
    }
    if (output.VolumeSize !== undefined && output.VolumeSize !== null) {
        contents.VolumeSize = output.VolumeSize;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1EcsCluster = (output, context) => {
    let contents = {
        __type: "EcsCluster",
        EcsClusterArn: undefined,
        EcsClusterName: undefined,
        RegisteredAt: undefined,
        StackId: undefined
    };
    if (output.EcsClusterArn !== undefined && output.EcsClusterArn !== null) {
        contents.EcsClusterArn = output.EcsClusterArn;
    }
    if (output.EcsClusterName !== undefined && output.EcsClusterName !== null) {
        contents.EcsClusterName = output.EcsClusterName;
    }
    if (output.RegisteredAt !== undefined && output.RegisteredAt !== null) {
        contents.RegisteredAt = output.RegisteredAt;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1EcsClusters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EcsCluster(entry, context));
};
const deserializeAws_json1_1ElasticIp = (output, context) => {
    let contents = {
        __type: "ElasticIp",
        Domain: undefined,
        InstanceId: undefined,
        Ip: undefined,
        Name: undefined,
        Region: undefined
    };
    if (output.Domain !== undefined && output.Domain !== null) {
        contents.Domain = output.Domain;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Ip !== undefined && output.Ip !== null) {
        contents.Ip = output.Ip;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    return contents;
};
const deserializeAws_json1_1ElasticIps = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ElasticIp(entry, context));
};
const deserializeAws_json1_1ElasticLoadBalancer = (output, context) => {
    let contents = {
        __type: "ElasticLoadBalancer",
        AvailabilityZones: undefined,
        DnsName: undefined,
        Ec2InstanceIds: undefined,
        ElasticLoadBalancerName: undefined,
        LayerId: undefined,
        Region: undefined,
        StackId: undefined,
        SubnetIds: undefined,
        VpcId: undefined
    };
    if (output.AvailabilityZones !== undefined &&
        output.AvailabilityZones !== null) {
        contents.AvailabilityZones = deserializeAws_json1_1Strings(output.AvailabilityZones, context);
    }
    if (output.DnsName !== undefined && output.DnsName !== null) {
        contents.DnsName = output.DnsName;
    }
    if (output.Ec2InstanceIds !== undefined && output.Ec2InstanceIds !== null) {
        contents.Ec2InstanceIds = deserializeAws_json1_1Strings(output.Ec2InstanceIds, context);
    }
    if (output.ElasticLoadBalancerName !== undefined &&
        output.ElasticLoadBalancerName !== null) {
        contents.ElasticLoadBalancerName = output.ElasticLoadBalancerName;
    }
    if (output.LayerId !== undefined && output.LayerId !== null) {
        contents.LayerId = output.LayerId;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
        contents.SubnetIds = deserializeAws_json1_1Strings(output.SubnetIds, context);
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1ElasticLoadBalancers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ElasticLoadBalancer(entry, context));
};
const deserializeAws_json1_1EnvironmentVariable = (output, context) => {
    let contents = {
        __type: "EnvironmentVariable",
        Key: undefined,
        Secure: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Secure !== undefined && output.Secure !== null) {
        contents.Secure = output.Secure;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EnvironmentVariable(entry, context));
};
const deserializeAws_json1_1GetHostnameSuggestionResult = (output, context) => {
    let contents = {
        __type: "GetHostnameSuggestionResult",
        Hostname: undefined,
        LayerId: undefined
    };
    if (output.Hostname !== undefined && output.Hostname !== null) {
        contents.Hostname = output.Hostname;
    }
    if (output.LayerId !== undefined && output.LayerId !== null) {
        contents.LayerId = output.LayerId;
    }
    return contents;
};
const deserializeAws_json1_1GrantAccessResult = (output, context) => {
    let contents = {
        __type: "GrantAccessResult",
        TemporaryCredential: undefined
    };
    if (output.TemporaryCredential !== undefined &&
        output.TemporaryCredential !== null) {
        contents.TemporaryCredential = deserializeAws_json1_1TemporaryCredential(output.TemporaryCredential, context);
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        AgentVersion: undefined,
        AmiId: undefined,
        Architecture: undefined,
        Arn: undefined,
        AutoScalingType: undefined,
        AvailabilityZone: undefined,
        BlockDeviceMappings: undefined,
        CreatedAt: undefined,
        EbsOptimized: undefined,
        Ec2InstanceId: undefined,
        EcsClusterArn: undefined,
        EcsContainerInstanceArn: undefined,
        ElasticIp: undefined,
        Hostname: undefined,
        InfrastructureClass: undefined,
        InstallUpdatesOnBoot: undefined,
        InstanceId: undefined,
        InstanceProfileArn: undefined,
        InstanceType: undefined,
        LastServiceErrorId: undefined,
        LayerIds: undefined,
        Os: undefined,
        Platform: undefined,
        PrivateDns: undefined,
        PrivateIp: undefined,
        PublicDns: undefined,
        PublicIp: undefined,
        RegisteredBy: undefined,
        ReportedAgentVersion: undefined,
        ReportedOs: undefined,
        RootDeviceType: undefined,
        RootDeviceVolumeId: undefined,
        SecurityGroupIds: undefined,
        SshHostDsaKeyFingerprint: undefined,
        SshHostRsaKeyFingerprint: undefined,
        SshKeyName: undefined,
        StackId: undefined,
        Status: undefined,
        SubnetId: undefined,
        Tenancy: undefined,
        VirtualizationType: undefined
    };
    if (output.AgentVersion !== undefined && output.AgentVersion !== null) {
        contents.AgentVersion = output.AgentVersion;
    }
    if (output.AmiId !== undefined && output.AmiId !== null) {
        contents.AmiId = output.AmiId;
    }
    if (output.Architecture !== undefined && output.Architecture !== null) {
        contents.Architecture = output.Architecture;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.AutoScalingType !== undefined && output.AutoScalingType !== null) {
        contents.AutoScalingType = output.AutoScalingType;
    }
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.BlockDeviceMappings !== undefined &&
        output.BlockDeviceMappings !== null) {
        contents.BlockDeviceMappings = deserializeAws_json1_1BlockDeviceMappings(output.BlockDeviceMappings, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.EbsOptimized !== undefined && output.EbsOptimized !== null) {
        contents.EbsOptimized = output.EbsOptimized;
    }
    if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
        contents.Ec2InstanceId = output.Ec2InstanceId;
    }
    if (output.EcsClusterArn !== undefined && output.EcsClusterArn !== null) {
        contents.EcsClusterArn = output.EcsClusterArn;
    }
    if (output.EcsContainerInstanceArn !== undefined &&
        output.EcsContainerInstanceArn !== null) {
        contents.EcsContainerInstanceArn = output.EcsContainerInstanceArn;
    }
    if (output.ElasticIp !== undefined && output.ElasticIp !== null) {
        contents.ElasticIp = output.ElasticIp;
    }
    if (output.Hostname !== undefined && output.Hostname !== null) {
        contents.Hostname = output.Hostname;
    }
    if (output.InfrastructureClass !== undefined &&
        output.InfrastructureClass !== null) {
        contents.InfrastructureClass = output.InfrastructureClass;
    }
    if (output.InstallUpdatesOnBoot !== undefined &&
        output.InstallUpdatesOnBoot !== null) {
        contents.InstallUpdatesOnBoot = output.InstallUpdatesOnBoot;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.InstanceProfileArn !== undefined &&
        output.InstanceProfileArn !== null) {
        contents.InstanceProfileArn = output.InstanceProfileArn;
    }
    if (output.InstanceType !== undefined && output.InstanceType !== null) {
        contents.InstanceType = output.InstanceType;
    }
    if (output.LastServiceErrorId !== undefined &&
        output.LastServiceErrorId !== null) {
        contents.LastServiceErrorId = output.LastServiceErrorId;
    }
    if (output.LayerIds !== undefined && output.LayerIds !== null) {
        contents.LayerIds = deserializeAws_json1_1Strings(output.LayerIds, context);
    }
    if (output.Os !== undefined && output.Os !== null) {
        contents.Os = output.Os;
    }
    if (output.Platform !== undefined && output.Platform !== null) {
        contents.Platform = output.Platform;
    }
    if (output.PrivateDns !== undefined && output.PrivateDns !== null) {
        contents.PrivateDns = output.PrivateDns;
    }
    if (output.PrivateIp !== undefined && output.PrivateIp !== null) {
        contents.PrivateIp = output.PrivateIp;
    }
    if (output.PublicDns !== undefined && output.PublicDns !== null) {
        contents.PublicDns = output.PublicDns;
    }
    if (output.PublicIp !== undefined && output.PublicIp !== null) {
        contents.PublicIp = output.PublicIp;
    }
    if (output.RegisteredBy !== undefined && output.RegisteredBy !== null) {
        contents.RegisteredBy = output.RegisteredBy;
    }
    if (output.ReportedAgentVersion !== undefined &&
        output.ReportedAgentVersion !== null) {
        contents.ReportedAgentVersion = output.ReportedAgentVersion;
    }
    if (output.ReportedOs !== undefined && output.ReportedOs !== null) {
        contents.ReportedOs = deserializeAws_json1_1ReportedOs(output.ReportedOs, context);
    }
    if (output.RootDeviceType !== undefined && output.RootDeviceType !== null) {
        contents.RootDeviceType = output.RootDeviceType;
    }
    if (output.RootDeviceVolumeId !== undefined &&
        output.RootDeviceVolumeId !== null) {
        contents.RootDeviceVolumeId = output.RootDeviceVolumeId;
    }
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1Strings(output.SecurityGroupIds, context);
    }
    if (output.SshHostDsaKeyFingerprint !== undefined &&
        output.SshHostDsaKeyFingerprint !== null) {
        contents.SshHostDsaKeyFingerprint = output.SshHostDsaKeyFingerprint;
    }
    if (output.SshHostRsaKeyFingerprint !== undefined &&
        output.SshHostRsaKeyFingerprint !== null) {
        contents.SshHostRsaKeyFingerprint = output.SshHostRsaKeyFingerprint;
    }
    if (output.SshKeyName !== undefined && output.SshKeyName !== null) {
        contents.SshKeyName = output.SshKeyName;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubnetId !== undefined && output.SubnetId !== null) {
        contents.SubnetId = output.SubnetId;
    }
    if (output.Tenancy !== undefined && output.Tenancy !== null) {
        contents.Tenancy = output.Tenancy;
    }
    if (output.VirtualizationType !== undefined &&
        output.VirtualizationType !== null) {
        contents.VirtualizationType = output.VirtualizationType;
    }
    return contents;
};
const deserializeAws_json1_1Instances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Instance(entry, context));
};
const deserializeAws_json1_1InstancesCount = (output, context) => {
    let contents = {
        __type: "InstancesCount",
        Assigning: undefined,
        Booting: undefined,
        ConnectionLost: undefined,
        Deregistering: undefined,
        Online: undefined,
        Pending: undefined,
        Rebooting: undefined,
        Registered: undefined,
        Registering: undefined,
        Requested: undefined,
        RunningSetup: undefined,
        SetupFailed: undefined,
        ShuttingDown: undefined,
        StartFailed: undefined,
        StopFailed: undefined,
        Stopped: undefined,
        Stopping: undefined,
        Terminated: undefined,
        Terminating: undefined,
        Unassigning: undefined
    };
    if (output.Assigning !== undefined && output.Assigning !== null) {
        contents.Assigning = output.Assigning;
    }
    if (output.Booting !== undefined && output.Booting !== null) {
        contents.Booting = output.Booting;
    }
    if (output.ConnectionLost !== undefined && output.ConnectionLost !== null) {
        contents.ConnectionLost = output.ConnectionLost;
    }
    if (output.Deregistering !== undefined && output.Deregistering !== null) {
        contents.Deregistering = output.Deregistering;
    }
    if (output.Online !== undefined && output.Online !== null) {
        contents.Online = output.Online;
    }
    if (output.Pending !== undefined && output.Pending !== null) {
        contents.Pending = output.Pending;
    }
    if (output.Rebooting !== undefined && output.Rebooting !== null) {
        contents.Rebooting = output.Rebooting;
    }
    if (output.Registered !== undefined && output.Registered !== null) {
        contents.Registered = output.Registered;
    }
    if (output.Registering !== undefined && output.Registering !== null) {
        contents.Registering = output.Registering;
    }
    if (output.Requested !== undefined && output.Requested !== null) {
        contents.Requested = output.Requested;
    }
    if (output.RunningSetup !== undefined && output.RunningSetup !== null) {
        contents.RunningSetup = output.RunningSetup;
    }
    if (output.SetupFailed !== undefined && output.SetupFailed !== null) {
        contents.SetupFailed = output.SetupFailed;
    }
    if (output.ShuttingDown !== undefined && output.ShuttingDown !== null) {
        contents.ShuttingDown = output.ShuttingDown;
    }
    if (output.StartFailed !== undefined && output.StartFailed !== null) {
        contents.StartFailed = output.StartFailed;
    }
    if (output.StopFailed !== undefined && output.StopFailed !== null) {
        contents.StopFailed = output.StopFailed;
    }
    if (output.Stopped !== undefined && output.Stopped !== null) {
        contents.Stopped = output.Stopped;
    }
    if (output.Stopping !== undefined && output.Stopping !== null) {
        contents.Stopping = output.Stopping;
    }
    if (output.Terminated !== undefined && output.Terminated !== null) {
        contents.Terminated = output.Terminated;
    }
    if (output.Terminating !== undefined && output.Terminating !== null) {
        contents.Terminating = output.Terminating;
    }
    if (output.Unassigning !== undefined && output.Unassigning !== null) {
        contents.Unassigning = output.Unassigning;
    }
    return contents;
};
const deserializeAws_json1_1Layer = (output, context) => {
    let contents = {
        __type: "Layer",
        Arn: undefined,
        Attributes: undefined,
        AutoAssignElasticIps: undefined,
        AutoAssignPublicIps: undefined,
        CloudWatchLogsConfiguration: undefined,
        CreatedAt: undefined,
        CustomInstanceProfileArn: undefined,
        CustomJson: undefined,
        CustomRecipes: undefined,
        CustomSecurityGroupIds: undefined,
        DefaultRecipes: undefined,
        DefaultSecurityGroupNames: undefined,
        EnableAutoHealing: undefined,
        InstallUpdatesOnBoot: undefined,
        LayerId: undefined,
        LifecycleEventConfiguration: undefined,
        Name: undefined,
        Packages: undefined,
        Shortname: undefined,
        StackId: undefined,
        Type: undefined,
        UseEbsOptimizedInstances: undefined,
        VolumeConfigurations: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1LayerAttributes(output.Attributes, context);
    }
    if (output.AutoAssignElasticIps !== undefined &&
        output.AutoAssignElasticIps !== null) {
        contents.AutoAssignElasticIps = output.AutoAssignElasticIps;
    }
    if (output.AutoAssignPublicIps !== undefined &&
        output.AutoAssignPublicIps !== null) {
        contents.AutoAssignPublicIps = output.AutoAssignPublicIps;
    }
    if (output.CloudWatchLogsConfiguration !== undefined &&
        output.CloudWatchLogsConfiguration !== null) {
        contents.CloudWatchLogsConfiguration = deserializeAws_json1_1CloudWatchLogsConfiguration(output.CloudWatchLogsConfiguration, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.CustomInstanceProfileArn !== undefined &&
        output.CustomInstanceProfileArn !== null) {
        contents.CustomInstanceProfileArn = output.CustomInstanceProfileArn;
    }
    if (output.CustomJson !== undefined && output.CustomJson !== null) {
        contents.CustomJson = output.CustomJson;
    }
    if (output.CustomRecipes !== undefined && output.CustomRecipes !== null) {
        contents.CustomRecipes = deserializeAws_json1_1Recipes(output.CustomRecipes, context);
    }
    if (output.CustomSecurityGroupIds !== undefined &&
        output.CustomSecurityGroupIds !== null) {
        contents.CustomSecurityGroupIds = deserializeAws_json1_1Strings(output.CustomSecurityGroupIds, context);
    }
    if (output.DefaultRecipes !== undefined && output.DefaultRecipes !== null) {
        contents.DefaultRecipes = deserializeAws_json1_1Recipes(output.DefaultRecipes, context);
    }
    if (output.DefaultSecurityGroupNames !== undefined &&
        output.DefaultSecurityGroupNames !== null) {
        contents.DefaultSecurityGroupNames = deserializeAws_json1_1Strings(output.DefaultSecurityGroupNames, context);
    }
    if (output.EnableAutoHealing !== undefined &&
        output.EnableAutoHealing !== null) {
        contents.EnableAutoHealing = output.EnableAutoHealing;
    }
    if (output.InstallUpdatesOnBoot !== undefined &&
        output.InstallUpdatesOnBoot !== null) {
        contents.InstallUpdatesOnBoot = output.InstallUpdatesOnBoot;
    }
    if (output.LayerId !== undefined && output.LayerId !== null) {
        contents.LayerId = output.LayerId;
    }
    if (output.LifecycleEventConfiguration !== undefined &&
        output.LifecycleEventConfiguration !== null) {
        contents.LifecycleEventConfiguration = deserializeAws_json1_1LifecycleEventConfiguration(output.LifecycleEventConfiguration, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Packages !== undefined && output.Packages !== null) {
        contents.Packages = deserializeAws_json1_1Strings(output.Packages, context);
    }
    if (output.Shortname !== undefined && output.Shortname !== null) {
        contents.Shortname = output.Shortname;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.UseEbsOptimizedInstances !== undefined &&
        output.UseEbsOptimizedInstances !== null) {
        contents.UseEbsOptimizedInstances = output.UseEbsOptimizedInstances;
    }
    if (output.VolumeConfigurations !== undefined &&
        output.VolumeConfigurations !== null) {
        contents.VolumeConfigurations = deserializeAws_json1_1VolumeConfigurations(output.VolumeConfigurations, context);
    }
    return contents;
};
const deserializeAws_json1_1LayerAttributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Layers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Layer(entry, context));
};
const deserializeAws_json1_1LifecycleEventConfiguration = (output, context) => {
    let contents = {
        __type: "LifecycleEventConfiguration",
        Shutdown: undefined
    };
    if (output.Shutdown !== undefined && output.Shutdown !== null) {
        contents.Shutdown = deserializeAws_json1_1ShutdownEventConfiguration(output.Shutdown, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResult = (output, context) => {
    let contents = {
        __type: "ListTagsResult",
        NextToken: undefined,
        Tags: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1LoadBasedAutoScalingConfiguration = (output, context) => {
    let contents = {
        __type: "LoadBasedAutoScalingConfiguration",
        DownScaling: undefined,
        Enable: undefined,
        LayerId: undefined,
        UpScaling: undefined
    };
    if (output.DownScaling !== undefined && output.DownScaling !== null) {
        contents.DownScaling = deserializeAws_json1_1AutoScalingThresholds(output.DownScaling, context);
    }
    if (output.Enable !== undefined && output.Enable !== null) {
        contents.Enable = output.Enable;
    }
    if (output.LayerId !== undefined && output.LayerId !== null) {
        contents.LayerId = output.LayerId;
    }
    if (output.UpScaling !== undefined && output.UpScaling !== null) {
        contents.UpScaling = deserializeAws_json1_1AutoScalingThresholds(output.UpScaling, context);
    }
    return contents;
};
const deserializeAws_json1_1LoadBasedAutoScalingConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBasedAutoScalingConfiguration(entry, context));
};
const deserializeAws_json1_1OperatingSystem = (output, context) => {
    let contents = {
        __type: "OperatingSystem",
        ConfigurationManagers: undefined,
        Id: undefined,
        Name: undefined,
        ReportedName: undefined,
        ReportedVersion: undefined,
        Supported: undefined,
        Type: undefined
    };
    if (output.ConfigurationManagers !== undefined &&
        output.ConfigurationManagers !== null) {
        contents.ConfigurationManagers = deserializeAws_json1_1OperatingSystemConfigurationManagers(output.ConfigurationManagers, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ReportedName !== undefined && output.ReportedName !== null) {
        contents.ReportedName = output.ReportedName;
    }
    if (output.ReportedVersion !== undefined && output.ReportedVersion !== null) {
        contents.ReportedVersion = output.ReportedVersion;
    }
    if (output.Supported !== undefined && output.Supported !== null) {
        contents.Supported = output.Supported;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1OperatingSystemConfigurationManager = (output, context) => {
    let contents = {
        __type: "OperatingSystemConfigurationManager",
        Name: undefined,
        Version: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1OperatingSystemConfigurationManagers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OperatingSystemConfigurationManager(entry, context));
};
const deserializeAws_json1_1OperatingSystems = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1OperatingSystem(entry, context));
};
const deserializeAws_json1_1Parameters = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1Permission = (output, context) => {
    let contents = {
        __type: "Permission",
        AllowSsh: undefined,
        AllowSudo: undefined,
        IamUserArn: undefined,
        Level: undefined,
        StackId: undefined
    };
    if (output.AllowSsh !== undefined && output.AllowSsh !== null) {
        contents.AllowSsh = output.AllowSsh;
    }
    if (output.AllowSudo !== undefined && output.AllowSudo !== null) {
        contents.AllowSudo = output.AllowSudo;
    }
    if (output.IamUserArn !== undefined && output.IamUserArn !== null) {
        contents.IamUserArn = output.IamUserArn;
    }
    if (output.Level !== undefined && output.Level !== null) {
        contents.Level = output.Level;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1Permissions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Permission(entry, context));
};
const deserializeAws_json1_1RaidArray = (output, context) => {
    let contents = {
        __type: "RaidArray",
        AvailabilityZone: undefined,
        CreatedAt: undefined,
        Device: undefined,
        InstanceId: undefined,
        Iops: undefined,
        MountPoint: undefined,
        Name: undefined,
        NumberOfDisks: undefined,
        RaidArrayId: undefined,
        RaidLevel: undefined,
        Size: undefined,
        StackId: undefined,
        VolumeType: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = output.Device;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Iops !== undefined && output.Iops !== null) {
        contents.Iops = output.Iops;
    }
    if (output.MountPoint !== undefined && output.MountPoint !== null) {
        contents.MountPoint = output.MountPoint;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.NumberOfDisks !== undefined && output.NumberOfDisks !== null) {
        contents.NumberOfDisks = output.NumberOfDisks;
    }
    if (output.RaidArrayId !== undefined && output.RaidArrayId !== null) {
        contents.RaidArrayId = output.RaidArrayId;
    }
    if (output.RaidLevel !== undefined && output.RaidLevel !== null) {
        contents.RaidLevel = output.RaidLevel;
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1RaidArrays = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RaidArray(entry, context));
};
const deserializeAws_json1_1RdsDbInstance = (output, context) => {
    let contents = {
        __type: "RdsDbInstance",
        Address: undefined,
        DbInstanceIdentifier: undefined,
        DbPassword: undefined,
        DbUser: undefined,
        Engine: undefined,
        MissingOnRds: undefined,
        RdsDbInstanceArn: undefined,
        Region: undefined,
        StackId: undefined
    };
    if (output.Address !== undefined && output.Address !== null) {
        contents.Address = output.Address;
    }
    if (output.DbInstanceIdentifier !== undefined &&
        output.DbInstanceIdentifier !== null) {
        contents.DbInstanceIdentifier = output.DbInstanceIdentifier;
    }
    if (output.DbPassword !== undefined && output.DbPassword !== null) {
        contents.DbPassword = output.DbPassword;
    }
    if (output.DbUser !== undefined && output.DbUser !== null) {
        contents.DbUser = output.DbUser;
    }
    if (output.Engine !== undefined && output.Engine !== null) {
        contents.Engine = output.Engine;
    }
    if (output.MissingOnRds !== undefined && output.MissingOnRds !== null) {
        contents.MissingOnRds = output.MissingOnRds;
    }
    if (output.RdsDbInstanceArn !== undefined &&
        output.RdsDbInstanceArn !== null) {
        contents.RdsDbInstanceArn = output.RdsDbInstanceArn;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1RdsDbInstances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1RdsDbInstance(entry, context));
};
const deserializeAws_json1_1Recipes = (output, context) => {
    let contents = {
        __type: "Recipes",
        Configure: undefined,
        Deploy: undefined,
        Setup: undefined,
        Shutdown: undefined,
        Undeploy: undefined
    };
    if (output.Configure !== undefined && output.Configure !== null) {
        contents.Configure = deserializeAws_json1_1Strings(output.Configure, context);
    }
    if (output.Deploy !== undefined && output.Deploy !== null) {
        contents.Deploy = deserializeAws_json1_1Strings(output.Deploy, context);
    }
    if (output.Setup !== undefined && output.Setup !== null) {
        contents.Setup = deserializeAws_json1_1Strings(output.Setup, context);
    }
    if (output.Shutdown !== undefined && output.Shutdown !== null) {
        contents.Shutdown = deserializeAws_json1_1Strings(output.Shutdown, context);
    }
    if (output.Undeploy !== undefined && output.Undeploy !== null) {
        contents.Undeploy = deserializeAws_json1_1Strings(output.Undeploy, context);
    }
    return contents;
};
const deserializeAws_json1_1RegisterEcsClusterResult = (output, context) => {
    let contents = {
        __type: "RegisterEcsClusterResult",
        EcsClusterArn: undefined
    };
    if (output.EcsClusterArn !== undefined && output.EcsClusterArn !== null) {
        contents.EcsClusterArn = output.EcsClusterArn;
    }
    return contents;
};
const deserializeAws_json1_1RegisterElasticIpResult = (output, context) => {
    let contents = {
        __type: "RegisterElasticIpResult",
        ElasticIp: undefined
    };
    if (output.ElasticIp !== undefined && output.ElasticIp !== null) {
        contents.ElasticIp = output.ElasticIp;
    }
    return contents;
};
const deserializeAws_json1_1RegisterInstanceResult = (output, context) => {
    let contents = {
        __type: "RegisterInstanceResult",
        InstanceId: undefined
    };
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    return contents;
};
const deserializeAws_json1_1RegisterVolumeResult = (output, context) => {
    let contents = {
        __type: "RegisterVolumeResult",
        VolumeId: undefined
    };
    if (output.VolumeId !== undefined && output.VolumeId !== null) {
        contents.VolumeId = output.VolumeId;
    }
    return contents;
};
const deserializeAws_json1_1ReportedOs = (output, context) => {
    let contents = {
        __type: "ReportedOs",
        Family: undefined,
        Name: undefined,
        Version: undefined
    };
    if (output.Family !== undefined && output.Family !== null) {
        contents.Family = output.Family;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
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
const deserializeAws_json1_1SelfUserProfile = (output, context) => {
    let contents = {
        __type: "SelfUserProfile",
        IamUserArn: undefined,
        Name: undefined,
        SshPublicKey: undefined,
        SshUsername: undefined
    };
    if (output.IamUserArn !== undefined && output.IamUserArn !== null) {
        contents.IamUserArn = output.IamUserArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SshPublicKey !== undefined && output.SshPublicKey !== null) {
        contents.SshPublicKey = output.SshPublicKey;
    }
    if (output.SshUsername !== undefined && output.SshUsername !== null) {
        contents.SshUsername = output.SshUsername;
    }
    return contents;
};
const deserializeAws_json1_1ServiceError = (output, context) => {
    let contents = {
        __type: "ServiceError",
        CreatedAt: undefined,
        InstanceId: undefined,
        Message: undefined,
        ServiceErrorId: undefined,
        StackId: undefined,
        Type: undefined
    };
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ServiceErrorId !== undefined && output.ServiceErrorId !== null) {
        contents.ServiceErrorId = output.ServiceErrorId;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1ServiceErrors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceError(entry, context));
};
const deserializeAws_json1_1ShutdownEventConfiguration = (output, context) => {
    let contents = {
        __type: "ShutdownEventConfiguration",
        DelayUntilElbConnectionsDrained: undefined,
        ExecutionTimeout: undefined
    };
    if (output.DelayUntilElbConnectionsDrained !== undefined &&
        output.DelayUntilElbConnectionsDrained !== null) {
        contents.DelayUntilElbConnectionsDrained =
            output.DelayUntilElbConnectionsDrained;
    }
    if (output.ExecutionTimeout !== undefined &&
        output.ExecutionTimeout !== null) {
        contents.ExecutionTimeout = output.ExecutionTimeout;
    }
    return contents;
};
const deserializeAws_json1_1Source = (output, context) => {
    let contents = {
        __type: "Source",
        Password: undefined,
        Revision: undefined,
        SshKey: undefined,
        Type: undefined,
        Url: undefined,
        Username: undefined
    };
    if (output.Password !== undefined && output.Password !== null) {
        contents.Password = output.Password;
    }
    if (output.Revision !== undefined && output.Revision !== null) {
        contents.Revision = output.Revision;
    }
    if (output.SshKey !== undefined && output.SshKey !== null) {
        contents.SshKey = output.SshKey;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Url !== undefined && output.Url !== null) {
        contents.Url = output.Url;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1SslConfiguration = (output, context) => {
    let contents = {
        __type: "SslConfiguration",
        Certificate: undefined,
        Chain: undefined,
        PrivateKey: undefined
    };
    if (output.Certificate !== undefined && output.Certificate !== null) {
        contents.Certificate = output.Certificate;
    }
    if (output.Chain !== undefined && output.Chain !== null) {
        contents.Chain = output.Chain;
    }
    if (output.PrivateKey !== undefined && output.PrivateKey !== null) {
        contents.PrivateKey = output.PrivateKey;
    }
    return contents;
};
const deserializeAws_json1_1Stack = (output, context) => {
    let contents = {
        __type: "Stack",
        AgentVersion: undefined,
        Arn: undefined,
        Attributes: undefined,
        ChefConfiguration: undefined,
        ConfigurationManager: undefined,
        CreatedAt: undefined,
        CustomCookbooksSource: undefined,
        CustomJson: undefined,
        DefaultAvailabilityZone: undefined,
        DefaultInstanceProfileArn: undefined,
        DefaultOs: undefined,
        DefaultRootDeviceType: undefined,
        DefaultSshKeyName: undefined,
        DefaultSubnetId: undefined,
        HostnameTheme: undefined,
        Name: undefined,
        Region: undefined,
        ServiceRoleArn: undefined,
        StackId: undefined,
        UseCustomCookbooks: undefined,
        UseOpsworksSecurityGroups: undefined,
        VpcId: undefined
    };
    if (output.AgentVersion !== undefined && output.AgentVersion !== null) {
        contents.AgentVersion = output.AgentVersion;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.Attributes !== undefined && output.Attributes !== null) {
        contents.Attributes = deserializeAws_json1_1StackAttributes(output.Attributes, context);
    }
    if (output.ChefConfiguration !== undefined &&
        output.ChefConfiguration !== null) {
        contents.ChefConfiguration = deserializeAws_json1_1ChefConfiguration(output.ChefConfiguration, context);
    }
    if (output.ConfigurationManager !== undefined &&
        output.ConfigurationManager !== null) {
        contents.ConfigurationManager = deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context);
    }
    if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
        contents.CreatedAt = output.CreatedAt;
    }
    if (output.CustomCookbooksSource !== undefined &&
        output.CustomCookbooksSource !== null) {
        contents.CustomCookbooksSource = deserializeAws_json1_1Source(output.CustomCookbooksSource, context);
    }
    if (output.CustomJson !== undefined && output.CustomJson !== null) {
        contents.CustomJson = output.CustomJson;
    }
    if (output.DefaultAvailabilityZone !== undefined &&
        output.DefaultAvailabilityZone !== null) {
        contents.DefaultAvailabilityZone = output.DefaultAvailabilityZone;
    }
    if (output.DefaultInstanceProfileArn !== undefined &&
        output.DefaultInstanceProfileArn !== null) {
        contents.DefaultInstanceProfileArn = output.DefaultInstanceProfileArn;
    }
    if (output.DefaultOs !== undefined && output.DefaultOs !== null) {
        contents.DefaultOs = output.DefaultOs;
    }
    if (output.DefaultRootDeviceType !== undefined &&
        output.DefaultRootDeviceType !== null) {
        contents.DefaultRootDeviceType = output.DefaultRootDeviceType;
    }
    if (output.DefaultSshKeyName !== undefined &&
        output.DefaultSshKeyName !== null) {
        contents.DefaultSshKeyName = output.DefaultSshKeyName;
    }
    if (output.DefaultSubnetId !== undefined && output.DefaultSubnetId !== null) {
        contents.DefaultSubnetId = output.DefaultSubnetId;
    }
    if (output.HostnameTheme !== undefined && output.HostnameTheme !== null) {
        contents.HostnameTheme = output.HostnameTheme;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null) {
        contents.ServiceRoleArn = output.ServiceRoleArn;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    if (output.UseCustomCookbooks !== undefined &&
        output.UseCustomCookbooks !== null) {
        contents.UseCustomCookbooks = output.UseCustomCookbooks;
    }
    if (output.UseOpsworksSecurityGroups !== undefined &&
        output.UseOpsworksSecurityGroups !== null) {
        contents.UseOpsworksSecurityGroups = output.UseOpsworksSecurityGroups;
    }
    if (output.VpcId !== undefined && output.VpcId !== null) {
        contents.VpcId = output.VpcId;
    }
    return contents;
};
const deserializeAws_json1_1StackAttributes = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1StackConfigurationManager = (output, context) => {
    let contents = {
        __type: "StackConfigurationManager",
        Name: undefined,
        Version: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1StackSummary = (output, context) => {
    let contents = {
        __type: "StackSummary",
        AppsCount: undefined,
        Arn: undefined,
        InstancesCount: undefined,
        LayersCount: undefined,
        Name: undefined,
        StackId: undefined
    };
    if (output.AppsCount !== undefined && output.AppsCount !== null) {
        contents.AppsCount = output.AppsCount;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.InstancesCount !== undefined && output.InstancesCount !== null) {
        contents.InstancesCount = deserializeAws_json1_1InstancesCount(output.InstancesCount, context);
    }
    if (output.LayersCount !== undefined && output.LayersCount !== null) {
        contents.LayersCount = output.LayersCount;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.StackId !== undefined && output.StackId !== null) {
        contents.StackId = output.StackId;
    }
    return contents;
};
const deserializeAws_json1_1Stacks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Stack(entry, context));
};
const deserializeAws_json1_1Strings = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Tags = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1TemporaryCredential = (output, context) => {
    let contents = {
        __type: "TemporaryCredential",
        InstanceId: undefined,
        Password: undefined,
        Username: undefined,
        ValidForInMinutes: undefined
    };
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Password !== undefined && output.Password !== null) {
        contents.Password = output.Password;
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    if (output.ValidForInMinutes !== undefined &&
        output.ValidForInMinutes !== null) {
        contents.ValidForInMinutes = output.ValidForInMinutes;
    }
    return contents;
};
const deserializeAws_json1_1TimeBasedAutoScalingConfiguration = (output, context) => {
    let contents = {
        __type: "TimeBasedAutoScalingConfiguration",
        AutoScalingSchedule: undefined,
        InstanceId: undefined
    };
    if (output.AutoScalingSchedule !== undefined &&
        output.AutoScalingSchedule !== null) {
        contents.AutoScalingSchedule = deserializeAws_json1_1WeeklyAutoScalingSchedule(output.AutoScalingSchedule, context);
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    return contents;
};
const deserializeAws_json1_1TimeBasedAutoScalingConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TimeBasedAutoScalingConfiguration(entry, context));
};
const deserializeAws_json1_1UserProfile = (output, context) => {
    let contents = {
        __type: "UserProfile",
        AllowSelfManagement: undefined,
        IamUserArn: undefined,
        Name: undefined,
        SshPublicKey: undefined,
        SshUsername: undefined
    };
    if (output.AllowSelfManagement !== undefined &&
        output.AllowSelfManagement !== null) {
        contents.AllowSelfManagement = output.AllowSelfManagement;
    }
    if (output.IamUserArn !== undefined && output.IamUserArn !== null) {
        contents.IamUserArn = output.IamUserArn;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.SshPublicKey !== undefined && output.SshPublicKey !== null) {
        contents.SshPublicKey = output.SshPublicKey;
    }
    if (output.SshUsername !== undefined && output.SshUsername !== null) {
        contents.SshUsername = output.SshUsername;
    }
    return contents;
};
const deserializeAws_json1_1UserProfiles = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UserProfile(entry, context));
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
const deserializeAws_json1_1Volume = (output, context) => {
    let contents = {
        __type: "Volume",
        AvailabilityZone: undefined,
        Device: undefined,
        Ec2VolumeId: undefined,
        Encrypted: undefined,
        InstanceId: undefined,
        Iops: undefined,
        MountPoint: undefined,
        Name: undefined,
        RaidArrayId: undefined,
        Region: undefined,
        Size: undefined,
        Status: undefined,
        VolumeId: undefined,
        VolumeType: undefined
    };
    if (output.AvailabilityZone !== undefined &&
        output.AvailabilityZone !== null) {
        contents.AvailabilityZone = output.AvailabilityZone;
    }
    if (output.Device !== undefined && output.Device !== null) {
        contents.Device = output.Device;
    }
    if (output.Ec2VolumeId !== undefined && output.Ec2VolumeId !== null) {
        contents.Ec2VolumeId = output.Ec2VolumeId;
    }
    if (output.Encrypted !== undefined && output.Encrypted !== null) {
        contents.Encrypted = output.Encrypted;
    }
    if (output.InstanceId !== undefined && output.InstanceId !== null) {
        contents.InstanceId = output.InstanceId;
    }
    if (output.Iops !== undefined && output.Iops !== null) {
        contents.Iops = output.Iops;
    }
    if (output.MountPoint !== undefined && output.MountPoint !== null) {
        contents.MountPoint = output.MountPoint;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.RaidArrayId !== undefined && output.RaidArrayId !== null) {
        contents.RaidArrayId = output.RaidArrayId;
    }
    if (output.Region !== undefined && output.Region !== null) {
        contents.Region = output.Region;
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.VolumeId !== undefined && output.VolumeId !== null) {
        contents.VolumeId = output.VolumeId;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1VolumeConfiguration = (output, context) => {
    let contents = {
        __type: "VolumeConfiguration",
        Encrypted: undefined,
        Iops: undefined,
        MountPoint: undefined,
        NumberOfDisks: undefined,
        RaidLevel: undefined,
        Size: undefined,
        VolumeType: undefined
    };
    if (output.Encrypted !== undefined && output.Encrypted !== null) {
        contents.Encrypted = output.Encrypted;
    }
    if (output.Iops !== undefined && output.Iops !== null) {
        contents.Iops = output.Iops;
    }
    if (output.MountPoint !== undefined && output.MountPoint !== null) {
        contents.MountPoint = output.MountPoint;
    }
    if (output.NumberOfDisks !== undefined && output.NumberOfDisks !== null) {
        contents.NumberOfDisks = output.NumberOfDisks;
    }
    if (output.RaidLevel !== undefined && output.RaidLevel !== null) {
        contents.RaidLevel = output.RaidLevel;
    }
    if (output.Size !== undefined && output.Size !== null) {
        contents.Size = output.Size;
    }
    if (output.VolumeType !== undefined && output.VolumeType !== null) {
        contents.VolumeType = output.VolumeType;
    }
    return contents;
};
const deserializeAws_json1_1VolumeConfigurations = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VolumeConfiguration(entry, context));
};
const deserializeAws_json1_1Volumes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Volume(entry, context));
};
const deserializeAws_json1_1WeeklyAutoScalingSchedule = (output, context) => {
    let contents = {
        __type: "WeeklyAutoScalingSchedule",
        Friday: undefined,
        Monday: undefined,
        Saturday: undefined,
        Sunday: undefined,
        Thursday: undefined,
        Tuesday: undefined,
        Wednesday: undefined
    };
    if (output.Friday !== undefined && output.Friday !== null) {
        contents.Friday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Friday, context);
    }
    if (output.Monday !== undefined && output.Monday !== null) {
        contents.Monday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Monday, context);
    }
    if (output.Saturday !== undefined && output.Saturday !== null) {
        contents.Saturday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Saturday, context);
    }
    if (output.Sunday !== undefined && output.Sunday !== null) {
        contents.Sunday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Sunday, context);
    }
    if (output.Thursday !== undefined && output.Thursday !== null) {
        contents.Thursday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Thursday, context);
    }
    if (output.Tuesday !== undefined && output.Tuesday !== null) {
        contents.Tuesday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Tuesday, context);
    }
    if (output.Wednesday !== undefined && output.Wednesday !== null) {
        contents.Wednesday = deserializeAws_json1_1DailyAutoScalingSchedule(output.Wednesday, context);
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