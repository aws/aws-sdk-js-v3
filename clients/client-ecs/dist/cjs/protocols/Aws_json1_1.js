"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CreateCapacityProviderCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCapacityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCapacityProviderCommand = serializeAws_json1_1CreateCapacityProviderCommand;
async function serializeAws_json1_1CreateClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
async function serializeAws_json1_1CreateServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateService";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateServiceCommand = serializeAws_json1_1CreateServiceCommand;
async function serializeAws_json1_1CreateTaskSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.CreateTaskSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTaskSetCommand = serializeAws_json1_1CreateTaskSetCommand;
async function serializeAws_json1_1DeleteAccountSettingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAccountSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAccountSettingCommand = serializeAws_json1_1DeleteAccountSettingCommand;
async function serializeAws_json1_1DeleteAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DeleteAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAttributesCommand = serializeAws_json1_1DeleteAttributesCommand;
async function serializeAws_json1_1DeleteClusterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteCluster";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteClusterCommand = serializeAws_json1_1DeleteClusterCommand;
async function serializeAws_json1_1DeleteServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteService";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteServiceCommand = serializeAws_json1_1DeleteServiceCommand;
async function serializeAws_json1_1DeleteTaskSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTaskSetCommand = serializeAws_json1_1DeleteTaskSetCommand;
async function serializeAws_json1_1DeregisterContainerInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterContainerInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterContainerInstanceCommand = serializeAws_json1_1DeregisterContainerInstanceCommand;
async function serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeregisterTaskDefinitionCommand = serializeAws_json1_1DeregisterTaskDefinitionCommand;
async function serializeAws_json1_1DescribeCapacityProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCapacityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCapacityProvidersCommand = serializeAws_json1_1DescribeCapacityProvidersCommand;
async function serializeAws_json1_1DescribeClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeClustersCommand = serializeAws_json1_1DescribeClustersCommand;
async function serializeAws_json1_1DescribeContainerInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeContainerInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeContainerInstancesCommand = serializeAws_json1_1DescribeContainerInstancesCommand;
async function serializeAws_json1_1DescribeServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeServicesCommand = serializeAws_json1_1DescribeServicesCommand;
async function serializeAws_json1_1DescribeTaskDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTaskDefinitionCommand = serializeAws_json1_1DescribeTaskDefinitionCommand;
async function serializeAws_json1_1DescribeTaskSetsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DescribeTaskSets";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTaskSetsCommand = serializeAws_json1_1DescribeTaskSetsCommand;
async function serializeAws_json1_1DescribeTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.DescribeTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTasksCommand = serializeAws_json1_1DescribeTasksCommand;
async function serializeAws_json1_1DiscoverPollEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverPollEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DiscoverPollEndpointCommand = serializeAws_json1_1DiscoverPollEndpointCommand;
async function serializeAws_json1_1ListAccountSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.ListAccountSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAccountSettingsCommand = serializeAws_json1_1ListAccountSettingsCommand;
async function serializeAws_json1_1ListAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAttributesCommand = serializeAws_json1_1ListAttributesCommand;
async function serializeAws_json1_1ListClustersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListClusters";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
async function serializeAws_json1_1ListContainerInstancesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.ListContainerInstances";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContainerInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListContainerInstancesCommand = serializeAws_json1_1ListContainerInstancesCommand;
async function serializeAws_json1_1ListServicesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListServices";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTaskDefinitionFamiliesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTaskDefinitionFamiliesCommand = serializeAws_json1_1ListTaskDefinitionFamiliesCommand;
async function serializeAws_json1_1ListTaskDefinitionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTaskDefinitionsCommand = serializeAws_json1_1ListTaskDefinitionsCommand;
async function serializeAws_json1_1ListTasksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.ListTasks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTasksCommand = serializeAws_json1_1ListTasksCommand;
async function serializeAws_json1_1PutAccountSettingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.PutAccountSetting";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAccountSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAccountSettingCommand = serializeAws_json1_1PutAccountSettingCommand;
async function serializeAws_json1_1PutAccountSettingDefaultCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAccountSettingDefaultRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAccountSettingDefaultCommand = serializeAws_json1_1PutAccountSettingDefaultCommand;
async function serializeAws_json1_1PutAttributesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.PutAttributes";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutAttributesCommand = serializeAws_json1_1PutAttributesCommand;
async function serializeAws_json1_1PutClusterCapacityProvidersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutClusterCapacityProvidersCommand = serializeAws_json1_1PutClusterCapacityProvidersCommand;
async function serializeAws_json1_1RegisterContainerInstanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterContainerInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterContainerInstanceCommand = serializeAws_json1_1RegisterContainerInstanceCommand;
async function serializeAws_json1_1RegisterTaskDefinitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition";
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RegisterTaskDefinitionCommand = serializeAws_json1_1RegisterTaskDefinitionCommand;
async function serializeAws_json1_1RunTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.RunTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1RunTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RunTaskCommand = serializeAws_json1_1RunTaskCommand;
async function serializeAws_json1_1StartTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.StartTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTaskCommand = serializeAws_json1_1StartTaskCommand;
async function serializeAws_json1_1StopTaskCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.StopTask";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTaskCommand = serializeAws_json1_1StopTaskCommand;
async function serializeAws_json1_1SubmitAttachmentStateChangesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubmitAttachmentStateChangesCommand = serializeAws_json1_1SubmitAttachmentStateChangesCommand;
async function serializeAws_json1_1SubmitContainerStateChangeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitContainerStateChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubmitContainerStateChangeCommand = serializeAws_json1_1SubmitContainerStateChangeCommand;
async function serializeAws_json1_1SubmitTaskStateChangeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange";
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitTaskStateChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SubmitTaskStateChangeCommand = serializeAws_json1_1SubmitTaskStateChangeCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateClusterSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateClusterSettingsCommand = serializeAws_json1_1UpdateClusterSettingsCommand;
async function serializeAws_json1_1UpdateContainerAgentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContainerAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateContainerAgentCommand = serializeAws_json1_1UpdateContainerAgentCommand;
async function serializeAws_json1_1UpdateContainerInstancesStateCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateContainerInstancesStateCommand = serializeAws_json1_1UpdateContainerInstancesStateCommand;
async function serializeAws_json1_1UpdateServiceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UpdateService";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServiceCommand = serializeAws_json1_1UpdateServiceCommand;
async function serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = serializeAws_json1_1UpdateServicePrimaryTaskSetCommand;
async function serializeAws_json1_1UpdateTaskSetCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTaskSetCommand = serializeAws_json1_1UpdateTaskSetCommand;
async function deserializeAws_json1_1CreateCapacityProviderCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCapacityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCapacityProviderResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCapacityProviderResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCapacityProviderCommand = deserializeAws_json1_1CreateCapacityProviderCommand;
async function deserializeAws_json1_1CreateCapacityProviderCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.madison.frontend#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateClusterCommand = deserializeAws_json1_1CreateClusterCommand;
async function deserializeAws_json1_1CreateClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1CreateServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateServiceCommand = deserializeAws_json1_1CreateServiceCommand;
async function deserializeAws_json1_1CreateServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.madison.frontend#PlatformUnknownException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1CreateTaskSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTaskSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTaskSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTaskSetCommand = deserializeAws_json1_1CreateTaskSetCommand;
async function deserializeAws_json1_1CreateTaskSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.madison.frontend#PlatformUnknownException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1DeleteAccountSettingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAccountSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAccountSettingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAccountSettingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAccountSettingCommand = deserializeAws_json1_1DeleteAccountSettingCommand;
async function deserializeAws_json1_1DeleteAccountSettingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAttributesCommand = deserializeAws_json1_1DeleteAttributesCommand;
async function deserializeAws_json1_1DeleteAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.madison.frontend#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteClusterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteClusterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteClusterCommand = deserializeAws_json1_1DeleteClusterCommand;
async function deserializeAws_json1_1DeleteClusterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterContainsContainerInstancesException":
        case "com.amazonaws.madison.frontend#ClusterContainsContainerInstancesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterContainsServicesException":
        case "com.amazonaws.madison.frontend#ClusterContainsServicesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterContainsServicesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterContainsTasksException":
        case "com.amazonaws.madison.frontend#ClusterContainsTasksException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterContainsTasksExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.madison.frontend#UpdateInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteServiceCommand = deserializeAws_json1_1DeleteServiceCommand;
async function deserializeAws_json1_1DeleteServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeleteTaskSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTaskSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTaskSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTaskSetCommand = deserializeAws_json1_1DeleteTaskSetCommand;
async function deserializeAws_json1_1DeleteTaskSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1DeregisterContainerInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterContainerInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterContainerInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterContainerInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterContainerInstanceCommand = deserializeAws_json1_1DeregisterContainerInstanceCommand;
async function deserializeAws_json1_1DeregisterContainerInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeregisterTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTaskDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeregisterTaskDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeregisterTaskDefinitionCommand = deserializeAws_json1_1DeregisterTaskDefinitionCommand;
async function deserializeAws_json1_1DeregisterTaskDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeCapacityProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCapacityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCapacityProvidersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCapacityProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCapacityProvidersCommand = deserializeAws_json1_1DescribeCapacityProvidersCommand;
async function deserializeAws_json1_1DescribeCapacityProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeClustersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeClustersCommand = deserializeAws_json1_1DescribeClustersCommand;
async function deserializeAws_json1_1DescribeClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeContainerInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeContainerInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeContainerInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeContainerInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeContainerInstancesCommand = deserializeAws_json1_1DescribeContainerInstancesCommand;
async function deserializeAws_json1_1DescribeContainerInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeServicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeServicesCommand = deserializeAws_json1_1DescribeServicesCommand;
async function deserializeAws_json1_1DescribeServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTaskDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTaskDefinitionCommand = deserializeAws_json1_1DescribeTaskDefinitionCommand;
async function deserializeAws_json1_1DescribeTaskDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DescribeTaskSetsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTaskSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskSetsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTaskSetsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTaskSetsCommand = deserializeAws_json1_1DescribeTaskSetsCommand;
async function deserializeAws_json1_1DescribeTaskSetsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1DescribeTasksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTasksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTasksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTasksCommand = deserializeAws_json1_1DescribeTasksCommand;
async function deserializeAws_json1_1DescribeTasksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1DiscoverPollEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DiscoverPollEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverPollEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DiscoverPollEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DiscoverPollEndpointCommand = deserializeAws_json1_1DiscoverPollEndpointCommand;
async function deserializeAws_json1_1DiscoverPollEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAccountSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAccountSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAccountSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAccountSettingsCommand = deserializeAws_json1_1ListAccountSettingsCommand;
async function deserializeAws_json1_1ListAccountSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAttributesCommand = deserializeAws_json1_1ListAttributesCommand;
async function deserializeAws_json1_1ListAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListClustersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClustersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListClustersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListClustersCommand = deserializeAws_json1_1ListClustersCommand;
async function deserializeAws_json1_1ListClustersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListContainerInstancesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListContainerInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContainerInstancesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListContainerInstancesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListContainerInstancesCommand = deserializeAws_json1_1ListContainerInstancesCommand;
async function deserializeAws_json1_1ListContainerInstancesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListServicesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServicesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListServicesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListServicesCommand = deserializeAws_json1_1ListServicesCommand;
async function deserializeAws_json1_1ListServicesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTaskDefinitionFamiliesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskDefinitionFamiliesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTaskDefinitionFamiliesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = deserializeAws_json1_1ListTaskDefinitionFamiliesCommand;
async function deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1ListTaskDefinitionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTaskDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskDefinitionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTaskDefinitionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTaskDefinitionsCommand = deserializeAws_json1_1ListTaskDefinitionsCommand;
async function deserializeAws_json1_1ListTaskDefinitionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutAccountSettingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAccountSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAccountSettingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAccountSettingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAccountSettingCommand = deserializeAws_json1_1PutAccountSettingCommand;
async function deserializeAws_json1_1PutAccountSettingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutAccountSettingDefaultCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAccountSettingDefaultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAccountSettingDefaultResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAccountSettingDefaultResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAccountSettingDefaultCommand = deserializeAws_json1_1PutAccountSettingDefaultCommand;
async function deserializeAws_json1_1PutAccountSettingDefaultCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutAttributesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAttributesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutAttributesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutAttributesCommand = deserializeAws_json1_1PutAttributesCommand;
async function deserializeAws_json1_1PutAttributesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AttributeLimitExceededException":
        case "com.amazonaws.madison.frontend#AttributeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AttributeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.madison.frontend#TargetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1PutClusterCapacityProvidersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutClusterCapacityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutClusterCapacityProvidersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutClusterCapacityProvidersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutClusterCapacityProvidersCommand = deserializeAws_json1_1PutClusterCapacityProvidersCommand;
async function deserializeAws_json1_1PutClusterCapacityProvidersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.madison.frontend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.madison.frontend#UpdateInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterContainerInstanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterContainerInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterContainerInstanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterContainerInstanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterContainerInstanceCommand = deserializeAws_json1_1RegisterContainerInstanceCommand;
async function deserializeAws_json1_1RegisterContainerInstanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RegisterTaskDefinitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RegisterTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTaskDefinitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RegisterTaskDefinitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RegisterTaskDefinitionCommand = deserializeAws_json1_1RegisterTaskDefinitionCommand;
async function deserializeAws_json1_1RegisterTaskDefinitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1RunTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RunTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RunTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RunTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RunTaskCommand = deserializeAws_json1_1RunTaskCommand;
async function deserializeAws_json1_1RunTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "BlockedException":
        case "com.amazonaws.madison.frontend#BlockedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BlockedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.madison.frontend#PlatformUnknownException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1StartTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTaskCommand = deserializeAws_json1_1StartTaskCommand;
async function deserializeAws_json1_1StartTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1StopTaskCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTaskResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopTaskResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTaskCommand = deserializeAws_json1_1StopTaskCommand;
async function deserializeAws_json1_1StopTaskCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SubmitAttachmentStateChangesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitAttachmentStateChangesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SubmitAttachmentStateChangesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubmitAttachmentStateChangesCommand = deserializeAws_json1_1SubmitAttachmentStateChangesCommand;
async function deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SubmitContainerStateChangeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubmitContainerStateChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitContainerStateChangeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SubmitContainerStateChangeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubmitContainerStateChangeCommand = deserializeAws_json1_1SubmitContainerStateChangeCommand;
async function deserializeAws_json1_1SubmitContainerStateChangeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1SubmitTaskStateChangeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SubmitTaskStateChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitTaskStateChangeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SubmitTaskStateChangeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SubmitTaskStateChangeCommand = deserializeAws_json1_1SubmitTaskStateChangeCommand;
async function deserializeAws_json1_1SubmitTaskStateChangeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.madison.frontend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
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
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.madison.frontend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateClusterSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateClusterSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClusterSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateClusterSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateClusterSettingsCommand = deserializeAws_json1_1UpdateClusterSettingsCommand;
async function deserializeAws_json1_1UpdateClusterSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateContainerAgentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateContainerAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContainerAgentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateContainerAgentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateContainerAgentCommand = deserializeAws_json1_1UpdateContainerAgentCommand;
async function deserializeAws_json1_1UpdateContainerAgentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MissingVersionException":
        case "com.amazonaws.madison.frontend#MissingVersionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MissingVersionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NoUpdateAvailableException":
        case "com.amazonaws.madison.frontend#NoUpdateAvailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NoUpdateAvailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.madison.frontend#UpdateInProgressException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateContainerInstancesStateCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateContainerInstancesStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContainerInstancesStateResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateContainerInstancesStateResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateContainerInstancesStateCommand = deserializeAws_json1_1UpdateContainerInstancesStateCommand;
async function deserializeAws_json1_1UpdateContainerInstancesStateCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateServiceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServiceCommand = deserializeAws_json1_1UpdateServiceCommand;
async function deserializeAws_json1_1UpdateServiceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.madison.frontend#PlatformTaskDefinitionIncompatibilityException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.madison.frontend#PlatformUnknownException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServicePrimaryTaskSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand;
async function deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
async function deserializeAws_json1_1UpdateTaskSetCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTaskSetResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTaskSetResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTaskSetCommand = deserializeAws_json1_1UpdateTaskSetCommand;
async function deserializeAws_json1_1UpdateTaskSetCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.madison.frontend#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClientException":
        case "com.amazonaws.madison.frontend#ClientException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.madison.frontend#ClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.madison.frontend#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServerException":
        case "com.amazonaws.madison.frontend#ServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.madison.frontend#ServiceNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.madison.frontend#ServiceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.madison.frontend#TaskSetNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.madison.frontend#UnsupportedFeatureException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1AttributeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttributeLimitExceededException(body, context);
    const contents = Object.assign({ name: "AttributeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1BlockedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlockedException(body, context);
    const contents = Object.assign({ name: "BlockedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientException(body, context);
    const contents = Object.assign({ name: "ClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsContainerInstancesException(body, context);
    const contents = Object.assign({ name: "ClusterContainsContainerInstancesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterContainsServicesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsServicesException(body, context);
    const contents = Object.assign({ name: "ClusterContainsServicesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterContainsTasksExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsTasksException(body, context);
    const contents = Object.assign({ name: "ClusterContainsTasksException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterNotFoundException(body, context);
    const contents = Object.assign({ name: "ClusterNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MissingVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingVersionException(body, context);
    const contents = Object.assign({ name: "MissingVersionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NoUpdateAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoUpdateAvailableException(body, context);
    const contents = Object.assign({ name: "NoUpdateAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException(body, context);
    const contents = Object.assign({ name: "PlatformTaskDefinitionIncompatibilityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1PlatformUnknownExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformUnknownException(body, context);
    const contents = Object.assign({ name: "PlatformUnknownException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerException(body, context);
    const contents = Object.assign({ name: "ServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceNotActiveExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotActiveException(body, context);
    const contents = Object.assign({ name: "ServiceNotActiveException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotFoundException(body, context);
    const contents = Object.assign({ name: "ServiceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotFoundException(body, context);
    const contents = Object.assign({ name: "TargetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TaskSetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaskSetNotFoundException(body, context);
    const contents = Object.assign({ name: "TaskSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureException(body, context);
    const contents = Object.assign({ name: "UnsupportedFeatureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UpdateInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UpdateInProgressException(body, context);
    const contents = Object.assign({ name: "UpdateInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AttachmentStateChange = (input, context) => {
    const bodyParams = {};
    if (input.attachmentArn !== undefined) {
        bodyParams["attachmentArn"] = input.attachmentArn;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1AttachmentStateChanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1AttachmentStateChange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Attribute = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.targetId !== undefined) {
        bodyParams["targetId"] = input.targetId;
    }
    if (input.targetType !== undefined) {
        bodyParams["targetType"] = input.targetType;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1Attributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Attribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1AutoScalingGroupProvider = (input, context) => {
    const bodyParams = {};
    if (input.autoScalingGroupArn !== undefined) {
        bodyParams["autoScalingGroupArn"] = input.autoScalingGroupArn;
    }
    if (input.managedScaling !== undefined) {
        bodyParams["managedScaling"] = serializeAws_json1_1ManagedScaling(input.managedScaling, context);
    }
    if (input.managedTerminationProtection !== undefined) {
        bodyParams["managedTerminationProtection"] =
            input.managedTerminationProtection;
    }
    return bodyParams;
};
const serializeAws_json1_1AwsVpcConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.assignPublicIp !== undefined) {
        bodyParams["assignPublicIp"] = input.assignPublicIp;
    }
    if (input.securityGroups !== undefined) {
        bodyParams["securityGroups"] = serializeAws_json1_1StringList(input.securityGroups, context);
    }
    if (input.subnets !== undefined) {
        bodyParams["subnets"] = serializeAws_json1_1StringList(input.subnets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CapacityProviderFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CapacityProviderStrategy = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1CapacityProviderStrategyItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CapacityProviderStrategyItem = (input, context) => {
    const bodyParams = {};
    if (input.base !== undefined) {
        bodyParams["base"] = input.base;
    }
    if (input.capacityProvider !== undefined) {
        bodyParams["capacityProvider"] = input.capacityProvider;
    }
    if (input.weight !== undefined) {
        bodyParams["weight"] = input.weight;
    }
    return bodyParams;
};
const serializeAws_json1_1ClusterFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ClusterSetting = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1ClusterSettings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ClusterSetting(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CompatibilityList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContainerDefinition = (input, context) => {
    const bodyParams = {};
    if (input.command !== undefined) {
        bodyParams["command"] = serializeAws_json1_1StringList(input.command, context);
    }
    if (input.cpu !== undefined) {
        bodyParams["cpu"] = input.cpu;
    }
    if (input.dependsOn !== undefined) {
        bodyParams["dependsOn"] = serializeAws_json1_1ContainerDependencies(input.dependsOn, context);
    }
    if (input.disableNetworking !== undefined) {
        bodyParams["disableNetworking"] = input.disableNetworking;
    }
    if (input.dnsSearchDomains !== undefined) {
        bodyParams["dnsSearchDomains"] = serializeAws_json1_1StringList(input.dnsSearchDomains, context);
    }
    if (input.dnsServers !== undefined) {
        bodyParams["dnsServers"] = serializeAws_json1_1StringList(input.dnsServers, context);
    }
    if (input.dockerLabels !== undefined) {
        bodyParams["dockerLabels"] = serializeAws_json1_1DockerLabelsMap(input.dockerLabels, context);
    }
    if (input.dockerSecurityOptions !== undefined) {
        bodyParams["dockerSecurityOptions"] = serializeAws_json1_1StringList(input.dockerSecurityOptions, context);
    }
    if (input.entryPoint !== undefined) {
        bodyParams["entryPoint"] = serializeAws_json1_1StringList(input.entryPoint, context);
    }
    if (input.environment !== undefined) {
        bodyParams["environment"] = serializeAws_json1_1EnvironmentVariables(input.environment, context);
    }
    if (input.essential !== undefined) {
        bodyParams["essential"] = input.essential;
    }
    if (input.extraHosts !== undefined) {
        bodyParams["extraHosts"] = serializeAws_json1_1HostEntryList(input.extraHosts, context);
    }
    if (input.firelensConfiguration !== undefined) {
        bodyParams["firelensConfiguration"] = serializeAws_json1_1FirelensConfiguration(input.firelensConfiguration, context);
    }
    if (input.healthCheck !== undefined) {
        bodyParams["healthCheck"] = serializeAws_json1_1HealthCheck(input.healthCheck, context);
    }
    if (input.hostname !== undefined) {
        bodyParams["hostname"] = input.hostname;
    }
    if (input.image !== undefined) {
        bodyParams["image"] = input.image;
    }
    if (input.interactive !== undefined) {
        bodyParams["interactive"] = input.interactive;
    }
    if (input.links !== undefined) {
        bodyParams["links"] = serializeAws_json1_1StringList(input.links, context);
    }
    if (input.linuxParameters !== undefined) {
        bodyParams["linuxParameters"] = serializeAws_json1_1LinuxParameters(input.linuxParameters, context);
    }
    if (input.logConfiguration !== undefined) {
        bodyParams["logConfiguration"] = serializeAws_json1_1LogConfiguration(input.logConfiguration, context);
    }
    if (input.memory !== undefined) {
        bodyParams["memory"] = input.memory;
    }
    if (input.memoryReservation !== undefined) {
        bodyParams["memoryReservation"] = input.memoryReservation;
    }
    if (input.mountPoints !== undefined) {
        bodyParams["mountPoints"] = serializeAws_json1_1MountPointList(input.mountPoints, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.portMappings !== undefined) {
        bodyParams["portMappings"] = serializeAws_json1_1PortMappingList(input.portMappings, context);
    }
    if (input.privileged !== undefined) {
        bodyParams["privileged"] = input.privileged;
    }
    if (input.pseudoTerminal !== undefined) {
        bodyParams["pseudoTerminal"] = input.pseudoTerminal;
    }
    if (input.readonlyRootFilesystem !== undefined) {
        bodyParams["readonlyRootFilesystem"] = input.readonlyRootFilesystem;
    }
    if (input.repositoryCredentials !== undefined) {
        bodyParams["repositoryCredentials"] = serializeAws_json1_1RepositoryCredentials(input.repositoryCredentials, context);
    }
    if (input.resourceRequirements !== undefined) {
        bodyParams["resourceRequirements"] = serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context);
    }
    if (input.secrets !== undefined) {
        bodyParams["secrets"] = serializeAws_json1_1SecretList(input.secrets, context);
    }
    if (input.startTimeout !== undefined) {
        bodyParams["startTimeout"] = input.startTimeout;
    }
    if (input.stopTimeout !== undefined) {
        bodyParams["stopTimeout"] = input.stopTimeout;
    }
    if (input.systemControls !== undefined) {
        bodyParams["systemControls"] = serializeAws_json1_1SystemControls(input.systemControls, context);
    }
    if (input.ulimits !== undefined) {
        bodyParams["ulimits"] = serializeAws_json1_1UlimitList(input.ulimits, context);
    }
    if (input.user !== undefined) {
        bodyParams["user"] = input.user;
    }
    if (input.volumesFrom !== undefined) {
        bodyParams["volumesFrom"] = serializeAws_json1_1VolumeFromList(input.volumesFrom, context);
    }
    if (input.workingDirectory !== undefined) {
        bodyParams["workingDirectory"] = input.workingDirectory;
    }
    return bodyParams;
};
const serializeAws_json1_1ContainerDefinitions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContainerDefinition(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ContainerDependencies = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContainerDependency(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ContainerDependency = (input, context) => {
    const bodyParams = {};
    if (input.condition !== undefined) {
        bodyParams["condition"] = input.condition;
    }
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    return bodyParams;
};
const serializeAws_json1_1ContainerInstanceFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ContainerOverride = (input, context) => {
    const bodyParams = {};
    if (input.command !== undefined) {
        bodyParams["command"] = serializeAws_json1_1StringList(input.command, context);
    }
    if (input.cpu !== undefined) {
        bodyParams["cpu"] = input.cpu;
    }
    if (input.environment !== undefined) {
        bodyParams["environment"] = serializeAws_json1_1EnvironmentVariables(input.environment, context);
    }
    if (input.memory !== undefined) {
        bodyParams["memory"] = input.memory;
    }
    if (input.memoryReservation !== undefined) {
        bodyParams["memoryReservation"] = input.memoryReservation;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.resourceRequirements !== undefined) {
        bodyParams["resourceRequirements"] = serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ContainerOverrides = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContainerOverride(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ContainerStateChange = (input, context) => {
    const bodyParams = {};
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    if (input.exitCode !== undefined) {
        bodyParams["exitCode"] = input.exitCode;
    }
    if (input.imageDigest !== undefined) {
        bodyParams["imageDigest"] = input.imageDigest;
    }
    if (input.networkBindings !== undefined) {
        bodyParams["networkBindings"] = serializeAws_json1_1NetworkBindings(input.networkBindings, context);
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.runtimeId !== undefined) {
        bodyParams["runtimeId"] = input.runtimeId;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ContainerStateChanges = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ContainerStateChange(entry, context));
    }
    return contents;
};
const serializeAws_json1_1CreateCapacityProviderRequest = (input, context) => {
    const bodyParams = {};
    if (input.autoScalingGroupProvider !== undefined) {
        bodyParams["autoScalingGroupProvider"] = serializeAws_json1_1AutoScalingGroupProvider(input.autoScalingGroupProvider, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviders !== undefined) {
        bodyParams["capacityProviders"] = serializeAws_json1_1StringList(input.capacityProviders, context);
    }
    if (input.clusterName !== undefined) {
        bodyParams["clusterName"] = input.clusterName;
    }
    if (input.defaultCapacityProviderStrategy !== undefined) {
        bodyParams["defaultCapacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context);
    }
    if (input.settings !== undefined) {
        bodyParams["settings"] = serializeAws_json1_1ClusterSettings(input.settings, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviderStrategy !== undefined) {
        bodyParams["capacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context);
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.deploymentConfiguration !== undefined) {
        bodyParams["deploymentConfiguration"] = serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context);
    }
    if (input.deploymentController !== undefined) {
        bodyParams["deploymentController"] = serializeAws_json1_1DeploymentController(input.deploymentController, context);
    }
    if (input.desiredCount !== undefined) {
        bodyParams["desiredCount"] = input.desiredCount;
    }
    if (input.enableECSManagedTags !== undefined) {
        bodyParams["enableECSManagedTags"] = input.enableECSManagedTags;
    }
    if (input.healthCheckGracePeriodSeconds !== undefined) {
        bodyParams["healthCheckGracePeriodSeconds"] =
            input.healthCheckGracePeriodSeconds;
    }
    if (input.launchType !== undefined) {
        bodyParams["launchType"] = input.launchType;
    }
    if (input.loadBalancers !== undefined) {
        bodyParams["loadBalancers"] = serializeAws_json1_1LoadBalancers(input.loadBalancers, context);
    }
    if (input.networkConfiguration !== undefined) {
        bodyParams["networkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context);
    }
    if (input.placementConstraints !== undefined) {
        bodyParams["placementConstraints"] = serializeAws_json1_1PlacementConstraints(input.placementConstraints, context);
    }
    if (input.placementStrategy !== undefined) {
        bodyParams["placementStrategy"] = serializeAws_json1_1PlacementStrategies(input.placementStrategy, context);
    }
    if (input.platformVersion !== undefined) {
        bodyParams["platformVersion"] = input.platformVersion;
    }
    if (input.propagateTags !== undefined) {
        bodyParams["propagateTags"] = input.propagateTags;
    }
    if (input.role !== undefined) {
        bodyParams["role"] = input.role;
    }
    if (input.schedulingStrategy !== undefined) {
        bodyParams["schedulingStrategy"] = input.schedulingStrategy;
    }
    if (input.serviceName !== undefined) {
        bodyParams["serviceName"] = input.serviceName;
    }
    if (input.serviceRegistries !== undefined) {
        bodyParams["serviceRegistries"] = serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTaskSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviderStrategy !== undefined) {
        bodyParams["capacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context);
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.externalId !== undefined) {
        bodyParams["externalId"] = input.externalId;
    }
    if (input.launchType !== undefined) {
        bodyParams["launchType"] = input.launchType;
    }
    if (input.loadBalancers !== undefined) {
        bodyParams["loadBalancers"] = serializeAws_json1_1LoadBalancers(input.loadBalancers, context);
    }
    if (input.networkConfiguration !== undefined) {
        bodyParams["networkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context);
    }
    if (input.platformVersion !== undefined) {
        bodyParams["platformVersion"] = input.platformVersion;
    }
    if (input.scale !== undefined) {
        bodyParams["scale"] = serializeAws_json1_1Scale(input.scale, context);
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    if (input.serviceRegistries !== undefined) {
        bodyParams["serviceRegistries"] = serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context);
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAccountSettingRequest = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.principalArn !== undefined) {
        bodyParams["principalArn"] = input.principalArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1Attributes(input.attributes, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteClusterRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteTaskSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    if (input.taskSet !== undefined) {
        bodyParams["taskSet"] = input.taskSet;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.maximumPercent !== undefined) {
        bodyParams["maximumPercent"] = input.maximumPercent;
    }
    if (input.minimumHealthyPercent !== undefined) {
        bodyParams["minimumHealthyPercent"] = input.minimumHealthyPercent;
    }
    return bodyParams;
};
const serializeAws_json1_1DeploymentController = (input, context) => {
    const bodyParams = {};
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterContainerInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstance !== undefined) {
        bodyParams["containerInstance"] = input.containerInstance;
    }
    if (input.force !== undefined) {
        bodyParams["force"] = input.force;
    }
    return bodyParams;
};
const serializeAws_json1_1DeregisterTaskDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCapacityProvidersRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviders !== undefined) {
        bodyParams["capacityProviders"] = serializeAws_json1_1StringList(input.capacityProviders, context);
    }
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1CapacityProviderFieldList(input.include, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.clusters !== undefined) {
        bodyParams["clusters"] = serializeAws_json1_1StringList(input.clusters, context);
    }
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1ClusterFieldList(input.include, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeContainerInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstances !== undefined) {
        bodyParams["containerInstances"] = serializeAws_json1_1StringList(input.containerInstances, context);
    }
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1ContainerInstanceFieldList(input.include, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1ServiceFieldList(input.include, context);
    }
    if (input.services !== undefined) {
        bodyParams["services"] = serializeAws_json1_1StringList(input.services, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTaskDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1TaskDefinitionFieldList(input.include, context);
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTaskSetsRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    if (input.taskSets !== undefined) {
        bodyParams["taskSets"] = serializeAws_json1_1StringList(input.taskSets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.include !== undefined) {
        bodyParams["include"] = serializeAws_json1_1TaskFieldList(input.include, context);
    }
    if (input.tasks !== undefined) {
        bodyParams["tasks"] = serializeAws_json1_1StringList(input.tasks, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Device = (input, context) => {
    const bodyParams = {};
    if (input.containerPath !== undefined) {
        bodyParams["containerPath"] = input.containerPath;
    }
    if (input.hostPath !== undefined) {
        bodyParams["hostPath"] = input.hostPath;
    }
    if (input.permissions !== undefined) {
        bodyParams["permissions"] = serializeAws_json1_1DeviceCgroupPermissions(input.permissions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeviceCgroupPermissions = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DevicesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Device(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DiscoverPollEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstance !== undefined) {
        bodyParams["containerInstance"] = input.containerInstance;
    }
    return bodyParams;
};
const serializeAws_json1_1DockerLabelsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1DockerVolumeConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.autoprovision !== undefined) {
        bodyParams["autoprovision"] = input.autoprovision;
    }
    if (input.driver !== undefined) {
        bodyParams["driver"] = input.driver;
    }
    if (input.driverOpts !== undefined) {
        bodyParams["driverOpts"] = serializeAws_json1_1StringMap(input.driverOpts, context);
    }
    if (input.labels !== undefined) {
        bodyParams["labels"] = serializeAws_json1_1StringMap(input.labels, context);
    }
    if (input.scope !== undefined) {
        bodyParams["scope"] = input.scope;
    }
    return bodyParams;
};
const serializeAws_json1_1EFSVolumeConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.fileSystemId !== undefined) {
        bodyParams["fileSystemId"] = input.fileSystemId;
    }
    if (input.rootDirectory !== undefined) {
        bodyParams["rootDirectory"] = input.rootDirectory;
    }
    return bodyParams;
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1KeyValuePair(entry, context));
    }
    return contents;
};
const serializeAws_json1_1FirelensConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.options !== undefined) {
        bodyParams["options"] = serializeAws_json1_1FirelensConfigurationOptionsMap(input.options, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1FirelensConfigurationOptionsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1HealthCheck = (input, context) => {
    const bodyParams = {};
    if (input.command !== undefined) {
        bodyParams["command"] = serializeAws_json1_1StringList(input.command, context);
    }
    if (input.interval !== undefined) {
        bodyParams["interval"] = input.interval;
    }
    if (input.retries !== undefined) {
        bodyParams["retries"] = input.retries;
    }
    if (input.startPeriod !== undefined) {
        bodyParams["startPeriod"] = input.startPeriod;
    }
    if (input.timeout !== undefined) {
        bodyParams["timeout"] = input.timeout;
    }
    return bodyParams;
};
const serializeAws_json1_1HostEntry = (input, context) => {
    const bodyParams = {};
    if (input.hostname !== undefined) {
        bodyParams["hostname"] = input.hostname;
    }
    if (input.ipAddress !== undefined) {
        bodyParams["ipAddress"] = input.ipAddress;
    }
    return bodyParams;
};
const serializeAws_json1_1HostEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HostEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1HostVolumeProperties = (input, context) => {
    const bodyParams = {};
    if (input.sourcePath !== undefined) {
        bodyParams["sourcePath"] = input.sourcePath;
    }
    return bodyParams;
};
const serializeAws_json1_1InferenceAccelerator = (input, context) => {
    const bodyParams = {};
    if (input.deviceName !== undefined) {
        bodyParams["deviceName"] = input.deviceName;
    }
    if (input.deviceType !== undefined) {
        bodyParams["deviceType"] = input.deviceType;
    }
    return bodyParams;
};
const serializeAws_json1_1InferenceAcceleratorOverride = (input, context) => {
    const bodyParams = {};
    if (input.deviceName !== undefined) {
        bodyParams["deviceName"] = input.deviceName;
    }
    if (input.deviceType !== undefined) {
        bodyParams["deviceType"] = input.deviceType;
    }
    return bodyParams;
};
const serializeAws_json1_1InferenceAcceleratorOverrides = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InferenceAcceleratorOverride(entry, context));
    }
    return contents;
};
const serializeAws_json1_1InferenceAccelerators = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InferenceAccelerator(entry, context));
    }
    return contents;
};
const serializeAws_json1_1KernelCapabilities = (input, context) => {
    const bodyParams = {};
    if (input.add !== undefined) {
        bodyParams["add"] = serializeAws_json1_1StringList(input.add, context);
    }
    if (input.drop !== undefined) {
        bodyParams["drop"] = serializeAws_json1_1StringList(input.drop, context);
    }
    return bodyParams;
};
const serializeAws_json1_1KeyValuePair = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1LinuxParameters = (input, context) => {
    const bodyParams = {};
    if (input.capabilities !== undefined) {
        bodyParams["capabilities"] = serializeAws_json1_1KernelCapabilities(input.capabilities, context);
    }
    if (input.devices !== undefined) {
        bodyParams["devices"] = serializeAws_json1_1DevicesList(input.devices, context);
    }
    if (input.initProcessEnabled !== undefined) {
        bodyParams["initProcessEnabled"] = input.initProcessEnabled;
    }
    if (input.maxSwap !== undefined) {
        bodyParams["maxSwap"] = input.maxSwap;
    }
    if (input.sharedMemorySize !== undefined) {
        bodyParams["sharedMemorySize"] = input.sharedMemorySize;
    }
    if (input.swappiness !== undefined) {
        bodyParams["swappiness"] = input.swappiness;
    }
    if (input.tmpfs !== undefined) {
        bodyParams["tmpfs"] = serializeAws_json1_1TmpfsList(input.tmpfs, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListAccountSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.effectiveSettings !== undefined) {
        bodyParams["effectiveSettings"] = input.effectiveSettings;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.principalArn !== undefined) {
        bodyParams["principalArn"] = input.principalArn;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1ListAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributeName !== undefined) {
        bodyParams["attributeName"] = input.attributeName;
    }
    if (input.attributeValue !== undefined) {
        bodyParams["attributeValue"] = input.attributeValue;
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.targetType !== undefined) {
        bodyParams["targetType"] = input.targetType;
    }
    return bodyParams;
};
const serializeAws_json1_1ListClustersRequest = (input, context) => {
    const bodyParams = {};
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListContainerInstancesRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = input.filter;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.launchType !== undefined) {
        bodyParams["launchType"] = input.launchType;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.schedulingStrategy !== undefined) {
        bodyParams["schedulingStrategy"] = input.schedulingStrategy;
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
const serializeAws_json1_1ListTaskDefinitionFamiliesRequest = (input, context) => {
    const bodyParams = {};
    if (input.familyPrefix !== undefined) {
        bodyParams["familyPrefix"] = input.familyPrefix;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTaskDefinitionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.familyPrefix !== undefined) {
        bodyParams["familyPrefix"] = input.familyPrefix;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sort !== undefined) {
        bodyParams["sort"] = input.sort;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTasksRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstance !== undefined) {
        bodyParams["containerInstance"] = input.containerInstance;
    }
    if (input.desiredStatus !== undefined) {
        bodyParams["desiredStatus"] = input.desiredStatus;
    }
    if (input.family !== undefined) {
        bodyParams["family"] = input.family;
    }
    if (input.launchType !== undefined) {
        bodyParams["launchType"] = input.launchType;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.serviceName !== undefined) {
        bodyParams["serviceName"] = input.serviceName;
    }
    if (input.startedBy !== undefined) {
        bodyParams["startedBy"] = input.startedBy;
    }
    return bodyParams;
};
const serializeAws_json1_1LoadBalancer = (input, context) => {
    const bodyParams = {};
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    if (input.containerPort !== undefined) {
        bodyParams["containerPort"] = input.containerPort;
    }
    if (input.loadBalancerName !== undefined) {
        bodyParams["loadBalancerName"] = input.loadBalancerName;
    }
    if (input.targetGroupArn !== undefined) {
        bodyParams["targetGroupArn"] = input.targetGroupArn;
    }
    return bodyParams;
};
const serializeAws_json1_1LoadBalancers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1LoadBalancer(entry, context));
    }
    return contents;
};
const serializeAws_json1_1LogConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.logDriver !== undefined) {
        bodyParams["logDriver"] = input.logDriver;
    }
    if (input.options !== undefined) {
        bodyParams["options"] = serializeAws_json1_1LogConfigurationOptionsMap(input.options, context);
    }
    if (input.secretOptions !== undefined) {
        bodyParams["secretOptions"] = serializeAws_json1_1SecretList(input.secretOptions, context);
    }
    return bodyParams;
};
const serializeAws_json1_1LogConfigurationOptionsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1ManagedScaling = (input, context) => {
    const bodyParams = {};
    if (input.maximumScalingStepSize !== undefined) {
        bodyParams["maximumScalingStepSize"] = input.maximumScalingStepSize;
    }
    if (input.minimumScalingStepSize !== undefined) {
        bodyParams["minimumScalingStepSize"] = input.minimumScalingStepSize;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    if (input.targetCapacity !== undefined) {
        bodyParams["targetCapacity"] = input.targetCapacity;
    }
    return bodyParams;
};
const serializeAws_json1_1MountPoint = (input, context) => {
    const bodyParams = {};
    if (input.containerPath !== undefined) {
        bodyParams["containerPath"] = input.containerPath;
    }
    if (input.readOnly !== undefined) {
        bodyParams["readOnly"] = input.readOnly;
    }
    if (input.sourceVolume !== undefined) {
        bodyParams["sourceVolume"] = input.sourceVolume;
    }
    return bodyParams;
};
const serializeAws_json1_1MountPointList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MountPoint(entry, context));
    }
    return contents;
};
const serializeAws_json1_1NetworkBinding = (input, context) => {
    const bodyParams = {};
    if (input.bindIP !== undefined) {
        bodyParams["bindIP"] = input.bindIP;
    }
    if (input.containerPort !== undefined) {
        bodyParams["containerPort"] = input.containerPort;
    }
    if (input.hostPort !== undefined) {
        bodyParams["hostPort"] = input.hostPort;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    return bodyParams;
};
const serializeAws_json1_1NetworkBindings = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1NetworkBinding(entry, context));
    }
    return contents;
};
const serializeAws_json1_1NetworkConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.awsvpcConfiguration !== undefined) {
        bodyParams["awsvpcConfiguration"] = serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PlacementConstraint = (input, context) => {
    const bodyParams = {};
    if (input.expression !== undefined) {
        bodyParams["expression"] = input.expression;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1PlacementConstraints = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PlacementConstraint(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlacementStrategies = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PlacementStrategy(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PlacementStrategy = (input, context) => {
    const bodyParams = {};
    if (input.field !== undefined) {
        bodyParams["field"] = input.field;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1PlatformDevice = (input, context) => {
    const bodyParams = {};
    if (input.id !== undefined) {
        bodyParams["id"] = input.id;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1PlatformDevices = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PlatformDevice(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PortMapping = (input, context) => {
    const bodyParams = {};
    if (input.containerPort !== undefined) {
        bodyParams["containerPort"] = input.containerPort;
    }
    if (input.hostPort !== undefined) {
        bodyParams["hostPort"] = input.hostPort;
    }
    if (input.protocol !== undefined) {
        bodyParams["protocol"] = input.protocol;
    }
    return bodyParams;
};
const serializeAws_json1_1PortMappingList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PortMapping(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ProxyConfiguration = (input, context) => {
    const bodyParams = {};
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    if (input.properties !== undefined) {
        bodyParams["properties"] = serializeAws_json1_1ProxyConfigurationProperties(input.properties, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ProxyConfigurationProperties = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1KeyValuePair(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PutAccountSettingDefaultRequest = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1PutAccountSettingRequest = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.principalArn !== undefined) {
        bodyParams["principalArn"] = input.principalArn;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1PutAttributesRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1Attributes(input.attributes, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    return bodyParams;
};
const serializeAws_json1_1PutClusterCapacityProvidersRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviders !== undefined) {
        bodyParams["capacityProviders"] = serializeAws_json1_1StringList(input.capacityProviders, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.defaultCapacityProviderStrategy !== undefined) {
        bodyParams["defaultCapacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterContainerInstanceRequest = (input, context) => {
    const bodyParams = {};
    if (input.attributes !== undefined) {
        bodyParams["attributes"] = serializeAws_json1_1Attributes(input.attributes, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstanceArn !== undefined) {
        bodyParams["containerInstanceArn"] = input.containerInstanceArn;
    }
    if (input.instanceIdentityDocument !== undefined) {
        bodyParams["instanceIdentityDocument"] = input.instanceIdentityDocument;
    }
    if (input.instanceIdentityDocumentSignature !== undefined) {
        bodyParams["instanceIdentityDocumentSignature"] =
            input.instanceIdentityDocumentSignature;
    }
    if (input.platformDevices !== undefined) {
        bodyParams["platformDevices"] = serializeAws_json1_1PlatformDevices(input.platformDevices, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.totalResources !== undefined) {
        bodyParams["totalResources"] = serializeAws_json1_1Resources(input.totalResources, context);
    }
    if (input.versionInfo !== undefined) {
        bodyParams["versionInfo"] = serializeAws_json1_1VersionInfo(input.versionInfo, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RegisterTaskDefinitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.containerDefinitions !== undefined) {
        bodyParams["containerDefinitions"] = serializeAws_json1_1ContainerDefinitions(input.containerDefinitions, context);
    }
    if (input.cpu !== undefined) {
        bodyParams["cpu"] = input.cpu;
    }
    if (input.executionRoleArn !== undefined) {
        bodyParams["executionRoleArn"] = input.executionRoleArn;
    }
    if (input.family !== undefined) {
        bodyParams["family"] = input.family;
    }
    if (input.inferenceAccelerators !== undefined) {
        bodyParams["inferenceAccelerators"] = serializeAws_json1_1InferenceAccelerators(input.inferenceAccelerators, context);
    }
    if (input.ipcMode !== undefined) {
        bodyParams["ipcMode"] = input.ipcMode;
    }
    if (input.memory !== undefined) {
        bodyParams["memory"] = input.memory;
    }
    if (input.networkMode !== undefined) {
        bodyParams["networkMode"] = input.networkMode;
    }
    if (input.pidMode !== undefined) {
        bodyParams["pidMode"] = input.pidMode;
    }
    if (input.placementConstraints !== undefined) {
        bodyParams["placementConstraints"] = serializeAws_json1_1TaskDefinitionPlacementConstraints(input.placementConstraints, context);
    }
    if (input.proxyConfiguration !== undefined) {
        bodyParams["proxyConfiguration"] = serializeAws_json1_1ProxyConfiguration(input.proxyConfiguration, context);
    }
    if (input.requiresCompatibilities !== undefined) {
        bodyParams["requiresCompatibilities"] = serializeAws_json1_1CompatibilityList(input.requiresCompatibilities, context);
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.taskRoleArn !== undefined) {
        bodyParams["taskRoleArn"] = input.taskRoleArn;
    }
    if (input.volumes !== undefined) {
        bodyParams["volumes"] = serializeAws_json1_1VolumeList(input.volumes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1RepositoryCredentials = (input, context) => {
    const bodyParams = {};
    if (input.credentialsParameter !== undefined) {
        bodyParams["credentialsParameter"] = input.credentialsParameter;
    }
    return bodyParams;
};
const serializeAws_json1_1Resource = (input, context) => {
    const bodyParams = {};
    if (input.doubleValue !== undefined) {
        bodyParams["doubleValue"] = input.doubleValue;
    }
    if (input.integerValue !== undefined) {
        bodyParams["integerValue"] = input.integerValue;
    }
    if (input.longValue !== undefined) {
        bodyParams["longValue"] = input.longValue;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.stringSetValue !== undefined) {
        bodyParams["stringSetValue"] = serializeAws_json1_1StringList(input.stringSetValue, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceRequirement = (input, context) => {
    const bodyParams = {};
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceRequirements = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ResourceRequirement(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Resources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Resource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RunTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviderStrategy !== undefined) {
        bodyParams["capacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.count !== undefined) {
        bodyParams["count"] = input.count;
    }
    if (input.enableECSManagedTags !== undefined) {
        bodyParams["enableECSManagedTags"] = input.enableECSManagedTags;
    }
    if (input.group !== undefined) {
        bodyParams["group"] = input.group;
    }
    if (input.launchType !== undefined) {
        bodyParams["launchType"] = input.launchType;
    }
    if (input.networkConfiguration !== undefined) {
        bodyParams["networkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context);
    }
    if (input.overrides !== undefined) {
        bodyParams["overrides"] = serializeAws_json1_1TaskOverride(input.overrides, context);
    }
    if (input.placementConstraints !== undefined) {
        bodyParams["placementConstraints"] = serializeAws_json1_1PlacementConstraints(input.placementConstraints, context);
    }
    if (input.placementStrategy !== undefined) {
        bodyParams["placementStrategy"] = serializeAws_json1_1PlacementStrategies(input.placementStrategy, context);
    }
    if (input.platformVersion !== undefined) {
        bodyParams["platformVersion"] = input.platformVersion;
    }
    if (input.propagateTags !== undefined) {
        bodyParams["propagateTags"] = input.propagateTags;
    }
    if (input.referenceId !== undefined) {
        bodyParams["referenceId"] = input.referenceId;
    }
    if (input.startedBy !== undefined) {
        bodyParams["startedBy"] = input.startedBy;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1Scale = (input, context) => {
    const bodyParams = {};
    if (input.unit !== undefined) {
        bodyParams["unit"] = input.unit;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1Secret = (input, context) => {
    const bodyParams = {};
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.valueFrom !== undefined) {
        bodyParams["valueFrom"] = input.valueFrom;
    }
    return bodyParams;
};
const serializeAws_json1_1SecretList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Secret(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServiceFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ServiceRegistries = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ServiceRegistry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ServiceRegistry = (input, context) => {
    const bodyParams = {};
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    if (input.containerPort !== undefined) {
        bodyParams["containerPort"] = input.containerPort;
    }
    if (input.port !== undefined) {
        bodyParams["port"] = input.port;
    }
    if (input.registryArn !== undefined) {
        bodyParams["registryArn"] = input.registryArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstances !== undefined) {
        bodyParams["containerInstances"] = serializeAws_json1_1StringList(input.containerInstances, context);
    }
    if (input.enableECSManagedTags !== undefined) {
        bodyParams["enableECSManagedTags"] = input.enableECSManagedTags;
    }
    if (input.group !== undefined) {
        bodyParams["group"] = input.group;
    }
    if (input.networkConfiguration !== undefined) {
        bodyParams["networkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context);
    }
    if (input.overrides !== undefined) {
        bodyParams["overrides"] = serializeAws_json1_1TaskOverride(input.overrides, context);
    }
    if (input.propagateTags !== undefined) {
        bodyParams["propagateTags"] = input.propagateTags;
    }
    if (input.referenceId !== undefined) {
        bodyParams["referenceId"] = input.referenceId;
    }
    if (input.startedBy !== undefined) {
        bodyParams["startedBy"] = input.startedBy;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTaskRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.task !== undefined) {
        bodyParams["task"] = input.task;
    }
    return bodyParams;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StringMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1SubmitAttachmentStateChangesRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachments !== undefined) {
        bodyParams["attachments"] = serializeAws_json1_1AttachmentStateChanges(input.attachments, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    return bodyParams;
};
const serializeAws_json1_1SubmitContainerStateChangeRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerName !== undefined) {
        bodyParams["containerName"] = input.containerName;
    }
    if (input.exitCode !== undefined) {
        bodyParams["exitCode"] = input.exitCode;
    }
    if (input.networkBindings !== undefined) {
        bodyParams["networkBindings"] = serializeAws_json1_1NetworkBindings(input.networkBindings, context);
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.runtimeId !== undefined) {
        bodyParams["runtimeId"] = input.runtimeId;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    if (input.task !== undefined) {
        bodyParams["task"] = input.task;
    }
    return bodyParams;
};
const serializeAws_json1_1SubmitTaskStateChangeRequest = (input, context) => {
    const bodyParams = {};
    if (input.attachments !== undefined) {
        bodyParams["attachments"] = serializeAws_json1_1AttachmentStateChanges(input.attachments, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containers !== undefined) {
        bodyParams["containers"] = serializeAws_json1_1ContainerStateChanges(input.containers, context);
    }
    if (input.executionStoppedAt !== undefined) {
        bodyParams["executionStoppedAt"] = Math.round(input.executionStoppedAt.getTime() / 1000);
    }
    if (input.pullStartedAt !== undefined) {
        bodyParams["pullStartedAt"] = Math.round(input.pullStartedAt.getTime() / 1000);
    }
    if (input.pullStoppedAt !== undefined) {
        bodyParams["pullStoppedAt"] = Math.round(input.pullStoppedAt.getTime() / 1000);
    }
    if (input.reason !== undefined) {
        bodyParams["reason"] = input.reason;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    if (input.task !== undefined) {
        bodyParams["task"] = input.task;
    }
    return bodyParams;
};
const serializeAws_json1_1SystemControl = (input, context) => {
    const bodyParams = {};
    if (input.namespace !== undefined) {
        bodyParams["namespace"] = input.namespace;
    }
    if (input.value !== undefined) {
        bodyParams["value"] = input.value;
    }
    return bodyParams;
};
const serializeAws_json1_1SystemControls = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1SystemControl(entry, context));
    }
    return contents;
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
const serializeAws_json1_1TagKeys = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Tags = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TaskDefinitionFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TaskDefinitionPlacementConstraint = (input, context) => {
    const bodyParams = {};
    if (input.expression !== undefined) {
        bodyParams["expression"] = input.expression;
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    return bodyParams;
};
const serializeAws_json1_1TaskDefinitionPlacementConstraints = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TaskFieldList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TaskOverride = (input, context) => {
    const bodyParams = {};
    if (input.containerOverrides !== undefined) {
        bodyParams["containerOverrides"] = serializeAws_json1_1ContainerOverrides(input.containerOverrides, context);
    }
    if (input.cpu !== undefined) {
        bodyParams["cpu"] = input.cpu;
    }
    if (input.executionRoleArn !== undefined) {
        bodyParams["executionRoleArn"] = input.executionRoleArn;
    }
    if (input.inferenceAcceleratorOverrides !== undefined) {
        bodyParams["inferenceAcceleratorOverrides"] = serializeAws_json1_1InferenceAcceleratorOverrides(input.inferenceAcceleratorOverrides, context);
    }
    if (input.memory !== undefined) {
        bodyParams["memory"] = input.memory;
    }
    if (input.taskRoleArn !== undefined) {
        bodyParams["taskRoleArn"] = input.taskRoleArn;
    }
    return bodyParams;
};
const serializeAws_json1_1Tmpfs = (input, context) => {
    const bodyParams = {};
    if (input.containerPath !== undefined) {
        bodyParams["containerPath"] = input.containerPath;
    }
    if (input.mountOptions !== undefined) {
        bodyParams["mountOptions"] = serializeAws_json1_1StringList(input.mountOptions, context);
    }
    if (input.size !== undefined) {
        bodyParams["size"] = input.size;
    }
    return bodyParams;
};
const serializeAws_json1_1TmpfsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tmpfs(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Ulimit = (input, context) => {
    const bodyParams = {};
    if (input.hardLimit !== undefined) {
        bodyParams["hardLimit"] = input.hardLimit;
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    if (input.softLimit !== undefined) {
        bodyParams["softLimit"] = input.softLimit;
    }
    return bodyParams;
};
const serializeAws_json1_1UlimitList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Ulimit(entry, context));
    }
    return contents;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.tagKeys !== undefined) {
        bodyParams["tagKeys"] = serializeAws_json1_1TagKeys(input.tagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateClusterSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.settings !== undefined) {
        bodyParams["settings"] = serializeAws_json1_1ClusterSettings(input.settings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateContainerAgentRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstance !== undefined) {
        bodyParams["containerInstance"] = input.containerInstance;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateContainerInstancesStateRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.containerInstances !== undefined) {
        bodyParams["containerInstances"] = serializeAws_json1_1StringList(input.containerInstances, context);
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.primaryTaskSet !== undefined) {
        bodyParams["primaryTaskSet"] = input.primaryTaskSet;
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateServiceRequest = (input, context) => {
    const bodyParams = {};
    if (input.capacityProviderStrategy !== undefined) {
        bodyParams["capacityProviderStrategy"] = serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context);
    }
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.deploymentConfiguration !== undefined) {
        bodyParams["deploymentConfiguration"] = serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context);
    }
    if (input.desiredCount !== undefined) {
        bodyParams["desiredCount"] = input.desiredCount;
    }
    if (input.forceNewDeployment !== undefined) {
        bodyParams["forceNewDeployment"] = input.forceNewDeployment;
    }
    if (input.healthCheckGracePeriodSeconds !== undefined) {
        bodyParams["healthCheckGracePeriodSeconds"] =
            input.healthCheckGracePeriodSeconds;
    }
    if (input.networkConfiguration !== undefined) {
        bodyParams["networkConfiguration"] = serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context);
    }
    if (input.platformVersion !== undefined) {
        bodyParams["platformVersion"] = input.platformVersion;
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    if (input.taskDefinition !== undefined) {
        bodyParams["taskDefinition"] = input.taskDefinition;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateTaskSetRequest = (input, context) => {
    const bodyParams = {};
    if (input.cluster !== undefined) {
        bodyParams["cluster"] = input.cluster;
    }
    if (input.scale !== undefined) {
        bodyParams["scale"] = serializeAws_json1_1Scale(input.scale, context);
    }
    if (input.service !== undefined) {
        bodyParams["service"] = input.service;
    }
    if (input.taskSet !== undefined) {
        bodyParams["taskSet"] = input.taskSet;
    }
    return bodyParams;
};
const serializeAws_json1_1VersionInfo = (input, context) => {
    const bodyParams = {};
    if (input.agentHash !== undefined) {
        bodyParams["agentHash"] = input.agentHash;
    }
    if (input.agentVersion !== undefined) {
        bodyParams["agentVersion"] = input.agentVersion;
    }
    if (input.dockerVersion !== undefined) {
        bodyParams["dockerVersion"] = input.dockerVersion;
    }
    return bodyParams;
};
const serializeAws_json1_1Volume = (input, context) => {
    const bodyParams = {};
    if (input.dockerVolumeConfiguration !== undefined) {
        bodyParams["dockerVolumeConfiguration"] = serializeAws_json1_1DockerVolumeConfiguration(input.dockerVolumeConfiguration, context);
    }
    if (input.efsVolumeConfiguration !== undefined) {
        bodyParams["efsVolumeConfiguration"] = serializeAws_json1_1EFSVolumeConfiguration(input.efsVolumeConfiguration, context);
    }
    if (input.host !== undefined) {
        bodyParams["host"] = serializeAws_json1_1HostVolumeProperties(input.host, context);
    }
    if (input.name !== undefined) {
        bodyParams["name"] = input.name;
    }
    return bodyParams;
};
const serializeAws_json1_1VolumeFrom = (input, context) => {
    const bodyParams = {};
    if (input.readOnly !== undefined) {
        bodyParams["readOnly"] = input.readOnly;
    }
    if (input.sourceContainer !== undefined) {
        bodyParams["sourceContainer"] = input.sourceContainer;
    }
    return bodyParams;
};
const serializeAws_json1_1VolumeFromList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1VolumeFrom(entry, context));
    }
    return contents;
};
const serializeAws_json1_1VolumeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Volume(entry, context));
    }
    return contents;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Attachment = (output, context) => {
    let contents = {
        __type: "Attachment",
        details: undefined,
        id: undefined,
        status: undefined,
        type: undefined
    };
    if (output.details !== undefined && output.details !== null) {
        contents.details = deserializeAws_json1_1AttachmentDetails(output.details, context);
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1AttachmentDetails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyValuePair(entry, context));
};
const deserializeAws_json1_1Attachments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attachment(entry, context));
};
const deserializeAws_json1_1Attribute = (output, context) => {
    let contents = {
        __type: "Attribute",
        name: undefined,
        targetId: undefined,
        targetType: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.targetId !== undefined && output.targetId !== null) {
        contents.targetId = output.targetId;
    }
    if (output.targetType !== undefined && output.targetType !== null) {
        contents.targetType = output.targetType;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1AttributeLimitExceededException = (output, context) => {
    let contents = {
        __type: "AttributeLimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Attributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1AutoScalingGroupProvider = (output, context) => {
    let contents = {
        __type: "AutoScalingGroupProvider",
        autoScalingGroupArn: undefined,
        managedScaling: undefined,
        managedTerminationProtection: undefined
    };
    if (output.autoScalingGroupArn !== undefined &&
        output.autoScalingGroupArn !== null) {
        contents.autoScalingGroupArn = output.autoScalingGroupArn;
    }
    if (output.managedScaling !== undefined && output.managedScaling !== null) {
        contents.managedScaling = deserializeAws_json1_1ManagedScaling(output.managedScaling, context);
    }
    if (output.managedTerminationProtection !== undefined &&
        output.managedTerminationProtection !== null) {
        contents.managedTerminationProtection = output.managedTerminationProtection;
    }
    return contents;
};
const deserializeAws_json1_1AwsVpcConfiguration = (output, context) => {
    let contents = {
        __type: "AwsVpcConfiguration",
        assignPublicIp: undefined,
        securityGroups: undefined,
        subnets: undefined
    };
    if (output.assignPublicIp !== undefined && output.assignPublicIp !== null) {
        contents.assignPublicIp = output.assignPublicIp;
    }
    if (output.securityGroups !== undefined && output.securityGroups !== null) {
        contents.securityGroups = deserializeAws_json1_1StringList(output.securityGroups, context);
    }
    if (output.subnets !== undefined && output.subnets !== null) {
        contents.subnets = deserializeAws_json1_1StringList(output.subnets, context);
    }
    return contents;
};
const deserializeAws_json1_1BlockedException = (output, context) => {
    let contents = {
        __type: "BlockedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CapacityProvider = (output, context) => {
    let contents = {
        __type: "CapacityProvider",
        autoScalingGroupProvider: undefined,
        capacityProviderArn: undefined,
        name: undefined,
        status: undefined,
        tags: undefined
    };
    if (output.autoScalingGroupProvider !== undefined &&
        output.autoScalingGroupProvider !== null) {
        contents.autoScalingGroupProvider = deserializeAws_json1_1AutoScalingGroupProvider(output.autoScalingGroupProvider, context);
    }
    if (output.capacityProviderArn !== undefined &&
        output.capacityProviderArn !== null) {
        contents.capacityProviderArn = output.capacityProviderArn;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1CapacityProviderStrategy = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CapacityProviderStrategyItem(entry, context));
};
const deserializeAws_json1_1CapacityProviderStrategyItem = (output, context) => {
    let contents = {
        __type: "CapacityProviderStrategyItem",
        base: undefined,
        capacityProvider: undefined,
        weight: undefined
    };
    if (output.base !== undefined && output.base !== null) {
        contents.base = output.base;
    }
    if (output.capacityProvider !== undefined &&
        output.capacityProvider !== null) {
        contents.capacityProvider = output.capacityProvider;
    }
    if (output.weight !== undefined && output.weight !== null) {
        contents.weight = output.weight;
    }
    return contents;
};
const deserializeAws_json1_1CapacityProviders = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CapacityProvider(entry, context));
};
const deserializeAws_json1_1ClientException = (output, context) => {
    let contents = {
        __type: "ClientException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Cluster = (output, context) => {
    let contents = {
        __type: "Cluster",
        activeServicesCount: undefined,
        attachments: undefined,
        attachmentsStatus: undefined,
        capacityProviders: undefined,
        clusterArn: undefined,
        clusterName: undefined,
        defaultCapacityProviderStrategy: undefined,
        pendingTasksCount: undefined,
        registeredContainerInstancesCount: undefined,
        runningTasksCount: undefined,
        settings: undefined,
        statistics: undefined,
        status: undefined,
        tags: undefined
    };
    if (output.activeServicesCount !== undefined &&
        output.activeServicesCount !== null) {
        contents.activeServicesCount = output.activeServicesCount;
    }
    if (output.attachments !== undefined && output.attachments !== null) {
        contents.attachments = deserializeAws_json1_1Attachments(output.attachments, context);
    }
    if (output.attachmentsStatus !== undefined &&
        output.attachmentsStatus !== null) {
        contents.attachmentsStatus = output.attachmentsStatus;
    }
    if (output.capacityProviders !== undefined &&
        output.capacityProviders !== null) {
        contents.capacityProviders = deserializeAws_json1_1StringList(output.capacityProviders, context);
    }
    if (output.clusterArn !== undefined && output.clusterArn !== null) {
        contents.clusterArn = output.clusterArn;
    }
    if (output.clusterName !== undefined && output.clusterName !== null) {
        contents.clusterName = output.clusterName;
    }
    if (output.defaultCapacityProviderStrategy !== undefined &&
        output.defaultCapacityProviderStrategy !== null) {
        contents.defaultCapacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(output.defaultCapacityProviderStrategy, context);
    }
    if (output.pendingTasksCount !== undefined &&
        output.pendingTasksCount !== null) {
        contents.pendingTasksCount = output.pendingTasksCount;
    }
    if (output.registeredContainerInstancesCount !== undefined &&
        output.registeredContainerInstancesCount !== null) {
        contents.registeredContainerInstancesCount =
            output.registeredContainerInstancesCount;
    }
    if (output.runningTasksCount !== undefined &&
        output.runningTasksCount !== null) {
        contents.runningTasksCount = output.runningTasksCount;
    }
    if (output.settings !== undefined && output.settings !== null) {
        contents.settings = deserializeAws_json1_1ClusterSettings(output.settings, context);
    }
    if (output.statistics !== undefined && output.statistics !== null) {
        contents.statistics = deserializeAws_json1_1Statistics(output.statistics, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ClusterContainsContainerInstancesException = (output, context) => {
    let contents = {
        __type: "ClusterContainsContainerInstancesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterContainsServicesException = (output, context) => {
    let contents = {
        __type: "ClusterContainsServicesException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterContainsTasksException = (output, context) => {
    let contents = {
        __type: "ClusterContainsTasksException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundException = (output, context) => {
    let contents = {
        __type: "ClusterNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ClusterSetting = (output, context) => {
    let contents = {
        __type: "ClusterSetting",
        name: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1ClusterSettings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ClusterSetting(entry, context));
};
const deserializeAws_json1_1Clusters = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Cluster(entry, context));
};
const deserializeAws_json1_1CompatibilityList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Container = (output, context) => {
    let contents = {
        __type: "Container",
        containerArn: undefined,
        cpu: undefined,
        exitCode: undefined,
        gpuIds: undefined,
        healthStatus: undefined,
        image: undefined,
        imageDigest: undefined,
        lastStatus: undefined,
        memory: undefined,
        memoryReservation: undefined,
        name: undefined,
        networkBindings: undefined,
        networkInterfaces: undefined,
        reason: undefined,
        runtimeId: undefined,
        taskArn: undefined
    };
    if (output.containerArn !== undefined && output.containerArn !== null) {
        contents.containerArn = output.containerArn;
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.exitCode !== undefined && output.exitCode !== null) {
        contents.exitCode = output.exitCode;
    }
    if (output.gpuIds !== undefined && output.gpuIds !== null) {
        contents.gpuIds = deserializeAws_json1_1GpuIds(output.gpuIds, context);
    }
    if (output.healthStatus !== undefined && output.healthStatus !== null) {
        contents.healthStatus = output.healthStatus;
    }
    if (output.image !== undefined && output.image !== null) {
        contents.image = output.image;
    }
    if (output.imageDigest !== undefined && output.imageDigest !== null) {
        contents.imageDigest = output.imageDigest;
    }
    if (output.lastStatus !== undefined && output.lastStatus !== null) {
        contents.lastStatus = output.lastStatus;
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.memoryReservation !== undefined &&
        output.memoryReservation !== null) {
        contents.memoryReservation = output.memoryReservation;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.networkBindings !== undefined && output.networkBindings !== null) {
        contents.networkBindings = deserializeAws_json1_1NetworkBindings(output.networkBindings, context);
    }
    if (output.networkInterfaces !== undefined &&
        output.networkInterfaces !== null) {
        contents.networkInterfaces = deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context);
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    if (output.runtimeId !== undefined && output.runtimeId !== null) {
        contents.runtimeId = output.runtimeId;
    }
    if (output.taskArn !== undefined && output.taskArn !== null) {
        contents.taskArn = output.taskArn;
    }
    return contents;
};
const deserializeAws_json1_1ContainerDefinition = (output, context) => {
    let contents = {
        __type: "ContainerDefinition",
        command: undefined,
        cpu: undefined,
        dependsOn: undefined,
        disableNetworking: undefined,
        dnsSearchDomains: undefined,
        dnsServers: undefined,
        dockerLabels: undefined,
        dockerSecurityOptions: undefined,
        entryPoint: undefined,
        environment: undefined,
        essential: undefined,
        extraHosts: undefined,
        firelensConfiguration: undefined,
        healthCheck: undefined,
        hostname: undefined,
        image: undefined,
        interactive: undefined,
        links: undefined,
        linuxParameters: undefined,
        logConfiguration: undefined,
        memory: undefined,
        memoryReservation: undefined,
        mountPoints: undefined,
        name: undefined,
        portMappings: undefined,
        privileged: undefined,
        pseudoTerminal: undefined,
        readonlyRootFilesystem: undefined,
        repositoryCredentials: undefined,
        resourceRequirements: undefined,
        secrets: undefined,
        startTimeout: undefined,
        stopTimeout: undefined,
        systemControls: undefined,
        ulimits: undefined,
        user: undefined,
        volumesFrom: undefined,
        workingDirectory: undefined
    };
    if (output.command !== undefined && output.command !== null) {
        contents.command = deserializeAws_json1_1StringList(output.command, context);
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.dependsOn !== undefined && output.dependsOn !== null) {
        contents.dependsOn = deserializeAws_json1_1ContainerDependencies(output.dependsOn, context);
    }
    if (output.disableNetworking !== undefined &&
        output.disableNetworking !== null) {
        contents.disableNetworking = output.disableNetworking;
    }
    if (output.dnsSearchDomains !== undefined &&
        output.dnsSearchDomains !== null) {
        contents.dnsSearchDomains = deserializeAws_json1_1StringList(output.dnsSearchDomains, context);
    }
    if (output.dnsServers !== undefined && output.dnsServers !== null) {
        contents.dnsServers = deserializeAws_json1_1StringList(output.dnsServers, context);
    }
    if (output.dockerLabels !== undefined && output.dockerLabels !== null) {
        contents.dockerLabels = deserializeAws_json1_1DockerLabelsMap(output.dockerLabels, context);
    }
    if (output.dockerSecurityOptions !== undefined &&
        output.dockerSecurityOptions !== null) {
        contents.dockerSecurityOptions = deserializeAws_json1_1StringList(output.dockerSecurityOptions, context);
    }
    if (output.entryPoint !== undefined && output.entryPoint !== null) {
        contents.entryPoint = deserializeAws_json1_1StringList(output.entryPoint, context);
    }
    if (output.environment !== undefined && output.environment !== null) {
        contents.environment = deserializeAws_json1_1EnvironmentVariables(output.environment, context);
    }
    if (output.essential !== undefined && output.essential !== null) {
        contents.essential = output.essential;
    }
    if (output.extraHosts !== undefined && output.extraHosts !== null) {
        contents.extraHosts = deserializeAws_json1_1HostEntryList(output.extraHosts, context);
    }
    if (output.firelensConfiguration !== undefined &&
        output.firelensConfiguration !== null) {
        contents.firelensConfiguration = deserializeAws_json1_1FirelensConfiguration(output.firelensConfiguration, context);
    }
    if (output.healthCheck !== undefined && output.healthCheck !== null) {
        contents.healthCheck = deserializeAws_json1_1HealthCheck(output.healthCheck, context);
    }
    if (output.hostname !== undefined && output.hostname !== null) {
        contents.hostname = output.hostname;
    }
    if (output.image !== undefined && output.image !== null) {
        contents.image = output.image;
    }
    if (output.interactive !== undefined && output.interactive !== null) {
        contents.interactive = output.interactive;
    }
    if (output.links !== undefined && output.links !== null) {
        contents.links = deserializeAws_json1_1StringList(output.links, context);
    }
    if (output.linuxParameters !== undefined && output.linuxParameters !== null) {
        contents.linuxParameters = deserializeAws_json1_1LinuxParameters(output.linuxParameters, context);
    }
    if (output.logConfiguration !== undefined &&
        output.logConfiguration !== null) {
        contents.logConfiguration = deserializeAws_json1_1LogConfiguration(output.logConfiguration, context);
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.memoryReservation !== undefined &&
        output.memoryReservation !== null) {
        contents.memoryReservation = output.memoryReservation;
    }
    if (output.mountPoints !== undefined && output.mountPoints !== null) {
        contents.mountPoints = deserializeAws_json1_1MountPointList(output.mountPoints, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.portMappings !== undefined && output.portMappings !== null) {
        contents.portMappings = deserializeAws_json1_1PortMappingList(output.portMappings, context);
    }
    if (output.privileged !== undefined && output.privileged !== null) {
        contents.privileged = output.privileged;
    }
    if (output.pseudoTerminal !== undefined && output.pseudoTerminal !== null) {
        contents.pseudoTerminal = output.pseudoTerminal;
    }
    if (output.readonlyRootFilesystem !== undefined &&
        output.readonlyRootFilesystem !== null) {
        contents.readonlyRootFilesystem = output.readonlyRootFilesystem;
    }
    if (output.repositoryCredentials !== undefined &&
        output.repositoryCredentials !== null) {
        contents.repositoryCredentials = deserializeAws_json1_1RepositoryCredentials(output.repositoryCredentials, context);
    }
    if (output.resourceRequirements !== undefined &&
        output.resourceRequirements !== null) {
        contents.resourceRequirements = deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context);
    }
    if (output.secrets !== undefined && output.secrets !== null) {
        contents.secrets = deserializeAws_json1_1SecretList(output.secrets, context);
    }
    if (output.startTimeout !== undefined && output.startTimeout !== null) {
        contents.startTimeout = output.startTimeout;
    }
    if (output.stopTimeout !== undefined && output.stopTimeout !== null) {
        contents.stopTimeout = output.stopTimeout;
    }
    if (output.systemControls !== undefined && output.systemControls !== null) {
        contents.systemControls = deserializeAws_json1_1SystemControls(output.systemControls, context);
    }
    if (output.ulimits !== undefined && output.ulimits !== null) {
        contents.ulimits = deserializeAws_json1_1UlimitList(output.ulimits, context);
    }
    if (output.user !== undefined && output.user !== null) {
        contents.user = output.user;
    }
    if (output.volumesFrom !== undefined && output.volumesFrom !== null) {
        contents.volumesFrom = deserializeAws_json1_1VolumeFromList(output.volumesFrom, context);
    }
    if (output.workingDirectory !== undefined &&
        output.workingDirectory !== null) {
        contents.workingDirectory = output.workingDirectory;
    }
    return contents;
};
const deserializeAws_json1_1ContainerDefinitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContainerDefinition(entry, context));
};
const deserializeAws_json1_1ContainerDependencies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContainerDependency(entry, context));
};
const deserializeAws_json1_1ContainerDependency = (output, context) => {
    let contents = {
        __type: "ContainerDependency",
        condition: undefined,
        containerName: undefined
    };
    if (output.condition !== undefined && output.condition !== null) {
        contents.condition = output.condition;
    }
    if (output.containerName !== undefined && output.containerName !== null) {
        contents.containerName = output.containerName;
    }
    return contents;
};
const deserializeAws_json1_1ContainerInstance = (output, context) => {
    let contents = {
        __type: "ContainerInstance",
        agentConnected: undefined,
        agentUpdateStatus: undefined,
        attachments: undefined,
        attributes: undefined,
        capacityProviderName: undefined,
        containerInstanceArn: undefined,
        ec2InstanceId: undefined,
        pendingTasksCount: undefined,
        registeredAt: undefined,
        registeredResources: undefined,
        remainingResources: undefined,
        runningTasksCount: undefined,
        status: undefined,
        statusReason: undefined,
        tags: undefined,
        version: undefined,
        versionInfo: undefined
    };
    if (output.agentConnected !== undefined && output.agentConnected !== null) {
        contents.agentConnected = output.agentConnected;
    }
    if (output.agentUpdateStatus !== undefined &&
        output.agentUpdateStatus !== null) {
        contents.agentUpdateStatus = output.agentUpdateStatus;
    }
    if (output.attachments !== undefined && output.attachments !== null) {
        contents.attachments = deserializeAws_json1_1Attachments(output.attachments, context);
    }
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1Attributes(output.attributes, context);
    }
    if (output.capacityProviderName !== undefined &&
        output.capacityProviderName !== null) {
        contents.capacityProviderName = output.capacityProviderName;
    }
    if (output.containerInstanceArn !== undefined &&
        output.containerInstanceArn !== null) {
        contents.containerInstanceArn = output.containerInstanceArn;
    }
    if (output.ec2InstanceId !== undefined && output.ec2InstanceId !== null) {
        contents.ec2InstanceId = output.ec2InstanceId;
    }
    if (output.pendingTasksCount !== undefined &&
        output.pendingTasksCount !== null) {
        contents.pendingTasksCount = output.pendingTasksCount;
    }
    if (output.registeredAt !== undefined && output.registeredAt !== null) {
        contents.registeredAt = new Date(Math.round(output.registeredAt * 1000));
    }
    if (output.registeredResources !== undefined &&
        output.registeredResources !== null) {
        contents.registeredResources = deserializeAws_json1_1Resources(output.registeredResources, context);
    }
    if (output.remainingResources !== undefined &&
        output.remainingResources !== null) {
        contents.remainingResources = deserializeAws_json1_1Resources(output.remainingResources, context);
    }
    if (output.runningTasksCount !== undefined &&
        output.runningTasksCount !== null) {
        contents.runningTasksCount = output.runningTasksCount;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.statusReason !== undefined && output.statusReason !== null) {
        contents.statusReason = output.statusReason;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    if (output.versionInfo !== undefined && output.versionInfo !== null) {
        contents.versionInfo = deserializeAws_json1_1VersionInfo(output.versionInfo, context);
    }
    return contents;
};
const deserializeAws_json1_1ContainerInstances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContainerInstance(entry, context));
};
const deserializeAws_json1_1ContainerOverride = (output, context) => {
    let contents = {
        __type: "ContainerOverride",
        command: undefined,
        cpu: undefined,
        environment: undefined,
        memory: undefined,
        memoryReservation: undefined,
        name: undefined,
        resourceRequirements: undefined
    };
    if (output.command !== undefined && output.command !== null) {
        contents.command = deserializeAws_json1_1StringList(output.command, context);
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.environment !== undefined && output.environment !== null) {
        contents.environment = deserializeAws_json1_1EnvironmentVariables(output.environment, context);
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.memoryReservation !== undefined &&
        output.memoryReservation !== null) {
        contents.memoryReservation = output.memoryReservation;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.resourceRequirements !== undefined &&
        output.resourceRequirements !== null) {
        contents.resourceRequirements = deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context);
    }
    return contents;
};
const deserializeAws_json1_1ContainerOverrides = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContainerOverride(entry, context));
};
const deserializeAws_json1_1Containers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Container(entry, context));
};
const deserializeAws_json1_1CreateCapacityProviderResponse = (output, context) => {
    let contents = {
        __type: "CreateCapacityProviderResponse",
        capacityProvider: undefined
    };
    if (output.capacityProvider !== undefined &&
        output.capacityProvider !== null) {
        contents.capacityProvider = deserializeAws_json1_1CapacityProvider(output.capacityProvider, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateClusterResponse = (output, context) => {
    let contents = {
        __type: "CreateClusterResponse",
        cluster: undefined
    };
    if (output.cluster !== undefined && output.cluster !== null) {
        contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateServiceResponse = (output, context) => {
    let contents = {
        __type: "CreateServiceResponse",
        service: undefined
    };
    if (output.service !== undefined && output.service !== null) {
        contents.service = deserializeAws_json1_1Service(output.service, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateTaskSetResponse = (output, context) => {
    let contents = {
        __type: "CreateTaskSetResponse",
        taskSet: undefined
    };
    if (output.taskSet !== undefined && output.taskSet !== null) {
        contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteAccountSettingResponse = (output, context) => {
    let contents = {
        __type: "DeleteAccountSettingResponse",
        setting: undefined
    };
    if (output.setting !== undefined && output.setting !== null) {
        contents.setting = deserializeAws_json1_1Setting(output.setting, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteAttributesResponse = (output, context) => {
    let contents = {
        __type: "DeleteAttributesResponse",
        attributes: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1Attributes(output.attributes, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteClusterResponse = (output, context) => {
    let contents = {
        __type: "DeleteClusterResponse",
        cluster: undefined
    };
    if (output.cluster !== undefined && output.cluster !== null) {
        contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteServiceResponse = (output, context) => {
    let contents = {
        __type: "DeleteServiceResponse",
        service: undefined
    };
    if (output.service !== undefined && output.service !== null) {
        contents.service = deserializeAws_json1_1Service(output.service, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteTaskSetResponse = (output, context) => {
    let contents = {
        __type: "DeleteTaskSetResponse",
        taskSet: undefined
    };
    if (output.taskSet !== undefined && output.taskSet !== null) {
        contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
    }
    return contents;
};
const deserializeAws_json1_1Deployment = (output, context) => {
    let contents = {
        __type: "Deployment",
        capacityProviderStrategy: undefined,
        createdAt: undefined,
        desiredCount: undefined,
        id: undefined,
        launchType: undefined,
        networkConfiguration: undefined,
        pendingCount: undefined,
        platformVersion: undefined,
        runningCount: undefined,
        status: undefined,
        taskDefinition: undefined,
        updatedAt: undefined
    };
    if (output.capacityProviderStrategy !== undefined &&
        output.capacityProviderStrategy !== null) {
        contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context);
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.desiredCount !== undefined && output.desiredCount !== null) {
        contents.desiredCount = output.desiredCount;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.launchType !== undefined && output.launchType !== null) {
        contents.launchType = output.launchType;
    }
    if (output.networkConfiguration !== undefined &&
        output.networkConfiguration !== null) {
        contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context);
    }
    if (output.pendingCount !== undefined && output.pendingCount !== null) {
        contents.pendingCount = output.pendingCount;
    }
    if (output.platformVersion !== undefined && output.platformVersion !== null) {
        contents.platformVersion = output.platformVersion;
    }
    if (output.runningCount !== undefined && output.runningCount !== null) {
        contents.runningCount = output.runningCount;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = output.taskDefinition;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1DeploymentConfiguration = (output, context) => {
    let contents = {
        __type: "DeploymentConfiguration",
        maximumPercent: undefined,
        minimumHealthyPercent: undefined
    };
    if (output.maximumPercent !== undefined && output.maximumPercent !== null) {
        contents.maximumPercent = output.maximumPercent;
    }
    if (output.minimumHealthyPercent !== undefined &&
        output.minimumHealthyPercent !== null) {
        contents.minimumHealthyPercent = output.minimumHealthyPercent;
    }
    return contents;
};
const deserializeAws_json1_1DeploymentController = (output, context) => {
    let contents = {
        __type: "DeploymentController",
        type: undefined
    };
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1Deployments = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Deployment(entry, context));
};
const deserializeAws_json1_1DeregisterContainerInstanceResponse = (output, context) => {
    let contents = {
        __type: "DeregisterContainerInstanceResponse",
        containerInstance: undefined
    };
    if (output.containerInstance !== undefined &&
        output.containerInstance !== null) {
        contents.containerInstance = deserializeAws_json1_1ContainerInstance(output.containerInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1DeregisterTaskDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DeregisterTaskDefinitionResponse",
        taskDefinition: undefined
    };
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = deserializeAws_json1_1TaskDefinition(output.taskDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeCapacityProvidersResponse = (output, context) => {
    let contents = {
        __type: "DescribeCapacityProvidersResponse",
        capacityProviders: undefined,
        failures: undefined,
        nextToken: undefined
    };
    if (output.capacityProviders !== undefined &&
        output.capacityProviders !== null) {
        contents.capacityProviders = deserializeAws_json1_1CapacityProviders(output.capacityProviders, context);
    }
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1DescribeClustersResponse = (output, context) => {
    let contents = {
        __type: "DescribeClustersResponse",
        clusters: undefined,
        failures: undefined
    };
    if (output.clusters !== undefined && output.clusters !== null) {
        contents.clusters = deserializeAws_json1_1Clusters(output.clusters, context);
    }
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeContainerInstancesResponse = (output, context) => {
    let contents = {
        __type: "DescribeContainerInstancesResponse",
        containerInstances: undefined,
        failures: undefined
    };
    if (output.containerInstances !== undefined &&
        output.containerInstances !== null) {
        contents.containerInstances = deserializeAws_json1_1ContainerInstances(output.containerInstances, context);
    }
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeServicesResponse = (output, context) => {
    let contents = {
        __type: "DescribeServicesResponse",
        failures: undefined,
        services: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.services !== undefined && output.services !== null) {
        contents.services = deserializeAws_json1_1Services(output.services, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTaskDefinitionResponse = (output, context) => {
    let contents = {
        __type: "DescribeTaskDefinitionResponse",
        tags: undefined,
        taskDefinition: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = deserializeAws_json1_1TaskDefinition(output.taskDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTaskSetsResponse = (output, context) => {
    let contents = {
        __type: "DescribeTaskSetsResponse",
        failures: undefined,
        taskSets: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.taskSets !== undefined && output.taskSets !== null) {
        contents.taskSets = deserializeAws_json1_1TaskSets(output.taskSets, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTasksResponse = (output, context) => {
    let contents = {
        __type: "DescribeTasksResponse",
        failures: undefined,
        tasks: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.tasks !== undefined && output.tasks !== null) {
        contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1Device = (output, context) => {
    let contents = {
        __type: "Device",
        containerPath: undefined,
        hostPath: undefined,
        permissions: undefined
    };
    if (output.containerPath !== undefined && output.containerPath !== null) {
        contents.containerPath = output.containerPath;
    }
    if (output.hostPath !== undefined && output.hostPath !== null) {
        contents.hostPath = output.hostPath;
    }
    if (output.permissions !== undefined && output.permissions !== null) {
        contents.permissions = deserializeAws_json1_1DeviceCgroupPermissions(output.permissions, context);
    }
    return contents;
};
const deserializeAws_json1_1DeviceCgroupPermissions = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DevicesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Device(entry, context));
};
const deserializeAws_json1_1DiscoverPollEndpointResponse = (output, context) => {
    let contents = {
        __type: "DiscoverPollEndpointResponse",
        endpoint: undefined,
        telemetryEndpoint: undefined
    };
    if (output.endpoint !== undefined && output.endpoint !== null) {
        contents.endpoint = output.endpoint;
    }
    if (output.telemetryEndpoint !== undefined &&
        output.telemetryEndpoint !== null) {
        contents.telemetryEndpoint = output.telemetryEndpoint;
    }
    return contents;
};
const deserializeAws_json1_1DockerLabelsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1DockerVolumeConfiguration = (output, context) => {
    let contents = {
        __type: "DockerVolumeConfiguration",
        autoprovision: undefined,
        driver: undefined,
        driverOpts: undefined,
        labels: undefined,
        scope: undefined
    };
    if (output.autoprovision !== undefined && output.autoprovision !== null) {
        contents.autoprovision = output.autoprovision;
    }
    if (output.driver !== undefined && output.driver !== null) {
        contents.driver = output.driver;
    }
    if (output.driverOpts !== undefined && output.driverOpts !== null) {
        contents.driverOpts = deserializeAws_json1_1StringMap(output.driverOpts, context);
    }
    if (output.labels !== undefined && output.labels !== null) {
        contents.labels = deserializeAws_json1_1StringMap(output.labels, context);
    }
    if (output.scope !== undefined && output.scope !== null) {
        contents.scope = output.scope;
    }
    return contents;
};
const deserializeAws_json1_1EFSVolumeConfiguration = (output, context) => {
    let contents = {
        __type: "EFSVolumeConfiguration",
        fileSystemId: undefined,
        rootDirectory: undefined
    };
    if (output.fileSystemId !== undefined && output.fileSystemId !== null) {
        contents.fileSystemId = output.fileSystemId;
    }
    if (output.rootDirectory !== undefined && output.rootDirectory !== null) {
        contents.rootDirectory = output.rootDirectory;
    }
    return contents;
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyValuePair(entry, context));
};
const deserializeAws_json1_1Failure = (output, context) => {
    let contents = {
        __type: "Failure",
        arn: undefined,
        detail: undefined,
        reason: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.detail !== undefined && output.detail !== null) {
        contents.detail = output.detail;
    }
    if (output.reason !== undefined && output.reason !== null) {
        contents.reason = output.reason;
    }
    return contents;
};
const deserializeAws_json1_1Failures = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Failure(entry, context));
};
const deserializeAws_json1_1FirelensConfiguration = (output, context) => {
    let contents = {
        __type: "FirelensConfiguration",
        options: undefined,
        type: undefined
    };
    if (output.options !== undefined && output.options !== null) {
        contents.options = deserializeAws_json1_1FirelensConfigurationOptionsMap(output.options, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1FirelensConfigurationOptionsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1GpuIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1HealthCheck = (output, context) => {
    let contents = {
        __type: "HealthCheck",
        command: undefined,
        interval: undefined,
        retries: undefined,
        startPeriod: undefined,
        timeout: undefined
    };
    if (output.command !== undefined && output.command !== null) {
        contents.command = deserializeAws_json1_1StringList(output.command, context);
    }
    if (output.interval !== undefined && output.interval !== null) {
        contents.interval = output.interval;
    }
    if (output.retries !== undefined && output.retries !== null) {
        contents.retries = output.retries;
    }
    if (output.startPeriod !== undefined && output.startPeriod !== null) {
        contents.startPeriod = output.startPeriod;
    }
    if (output.timeout !== undefined && output.timeout !== null) {
        contents.timeout = output.timeout;
    }
    return contents;
};
const deserializeAws_json1_1HostEntry = (output, context) => {
    let contents = {
        __type: "HostEntry",
        hostname: undefined,
        ipAddress: undefined
    };
    if (output.hostname !== undefined && output.hostname !== null) {
        contents.hostname = output.hostname;
    }
    if (output.ipAddress !== undefined && output.ipAddress !== null) {
        contents.ipAddress = output.ipAddress;
    }
    return contents;
};
const deserializeAws_json1_1HostEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HostEntry(entry, context));
};
const deserializeAws_json1_1HostVolumeProperties = (output, context) => {
    let contents = {
        __type: "HostVolumeProperties",
        sourcePath: undefined
    };
    if (output.sourcePath !== undefined && output.sourcePath !== null) {
        contents.sourcePath = output.sourcePath;
    }
    return contents;
};
const deserializeAws_json1_1InferenceAccelerator = (output, context) => {
    let contents = {
        __type: "InferenceAccelerator",
        deviceName: undefined,
        deviceType: undefined
    };
    if (output.deviceName !== undefined && output.deviceName !== null) {
        contents.deviceName = output.deviceName;
    }
    if (output.deviceType !== undefined && output.deviceType !== null) {
        contents.deviceType = output.deviceType;
    }
    return contents;
};
const deserializeAws_json1_1InferenceAcceleratorOverride = (output, context) => {
    let contents = {
        __type: "InferenceAcceleratorOverride",
        deviceName: undefined,
        deviceType: undefined
    };
    if (output.deviceName !== undefined && output.deviceName !== null) {
        contents.deviceName = output.deviceName;
    }
    if (output.deviceType !== undefined && output.deviceType !== null) {
        contents.deviceType = output.deviceType;
    }
    return contents;
};
const deserializeAws_json1_1InferenceAcceleratorOverrides = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InferenceAcceleratorOverride(entry, context));
};
const deserializeAws_json1_1InferenceAccelerators = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InferenceAccelerator(entry, context));
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KernelCapabilities = (output, context) => {
    let contents = {
        __type: "KernelCapabilities",
        add: undefined,
        drop: undefined
    };
    if (output.add !== undefined && output.add !== null) {
        contents.add = deserializeAws_json1_1StringList(output.add, context);
    }
    if (output.drop !== undefined && output.drop !== null) {
        contents.drop = deserializeAws_json1_1StringList(output.drop, context);
    }
    return contents;
};
const deserializeAws_json1_1KeyValuePair = (output, context) => {
    let contents = {
        __type: "KeyValuePair",
        name: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
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
const deserializeAws_json1_1LinuxParameters = (output, context) => {
    let contents = {
        __type: "LinuxParameters",
        capabilities: undefined,
        devices: undefined,
        initProcessEnabled: undefined,
        maxSwap: undefined,
        sharedMemorySize: undefined,
        swappiness: undefined,
        tmpfs: undefined
    };
    if (output.capabilities !== undefined && output.capabilities !== null) {
        contents.capabilities = deserializeAws_json1_1KernelCapabilities(output.capabilities, context);
    }
    if (output.devices !== undefined && output.devices !== null) {
        contents.devices = deserializeAws_json1_1DevicesList(output.devices, context);
    }
    if (output.initProcessEnabled !== undefined &&
        output.initProcessEnabled !== null) {
        contents.initProcessEnabled = output.initProcessEnabled;
    }
    if (output.maxSwap !== undefined && output.maxSwap !== null) {
        contents.maxSwap = output.maxSwap;
    }
    if (output.sharedMemorySize !== undefined &&
        output.sharedMemorySize !== null) {
        contents.sharedMemorySize = output.sharedMemorySize;
    }
    if (output.swappiness !== undefined && output.swappiness !== null) {
        contents.swappiness = output.swappiness;
    }
    if (output.tmpfs !== undefined && output.tmpfs !== null) {
        contents.tmpfs = deserializeAws_json1_1TmpfsList(output.tmpfs, context);
    }
    return contents;
};
const deserializeAws_json1_1ListAccountSettingsResponse = (output, context) => {
    let contents = {
        __type: "ListAccountSettingsResponse",
        nextToken: undefined,
        settings: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.settings !== undefined && output.settings !== null) {
        contents.settings = deserializeAws_json1_1Settings(output.settings, context);
    }
    return contents;
};
const deserializeAws_json1_1ListAttributesResponse = (output, context) => {
    let contents = {
        __type: "ListAttributesResponse",
        attributes: undefined,
        nextToken: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1Attributes(output.attributes, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListClustersResponse = (output, context) => {
    let contents = {
        __type: "ListClustersResponse",
        clusterArns: undefined,
        nextToken: undefined
    };
    if (output.clusterArns !== undefined && output.clusterArns !== null) {
        contents.clusterArns = deserializeAws_json1_1StringList(output.clusterArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListContainerInstancesResponse = (output, context) => {
    let contents = {
        __type: "ListContainerInstancesResponse",
        containerInstanceArns: undefined,
        nextToken: undefined
    };
    if (output.containerInstanceArns !== undefined &&
        output.containerInstanceArns !== null) {
        contents.containerInstanceArns = deserializeAws_json1_1StringList(output.containerInstanceArns, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListServicesResponse = (output, context) => {
    let contents = {
        __type: "ListServicesResponse",
        nextToken: undefined,
        serviceArns: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.serviceArns !== undefined && output.serviceArns !== null) {
        contents.serviceArns = deserializeAws_json1_1StringList(output.serviceArns, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = (output, context) => {
    let contents = {
        __type: "ListTaskDefinitionFamiliesResponse",
        families: undefined,
        nextToken: undefined
    };
    if (output.families !== undefined && output.families !== null) {
        contents.families = deserializeAws_json1_1StringList(output.families, context);
    }
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListTaskDefinitionsResponse = (output, context) => {
    let contents = {
        __type: "ListTaskDefinitionsResponse",
        nextToken: undefined,
        taskDefinitionArns: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.taskDefinitionArns !== undefined &&
        output.taskDefinitionArns !== null) {
        contents.taskDefinitionArns = deserializeAws_json1_1StringList(output.taskDefinitionArns, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTasksResponse = (output, context) => {
    let contents = {
        __type: "ListTasksResponse",
        nextToken: undefined,
        taskArns: undefined
    };
    if (output.nextToken !== undefined && output.nextToken !== null) {
        contents.nextToken = output.nextToken;
    }
    if (output.taskArns !== undefined && output.taskArns !== null) {
        contents.taskArns = deserializeAws_json1_1StringList(output.taskArns, context);
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancer = (output, context) => {
    let contents = {
        __type: "LoadBalancer",
        containerName: undefined,
        containerPort: undefined,
        loadBalancerName: undefined,
        targetGroupArn: undefined
    };
    if (output.containerName !== undefined && output.containerName !== null) {
        contents.containerName = output.containerName;
    }
    if (output.containerPort !== undefined && output.containerPort !== null) {
        contents.containerPort = output.containerPort;
    }
    if (output.loadBalancerName !== undefined &&
        output.loadBalancerName !== null) {
        contents.loadBalancerName = output.loadBalancerName;
    }
    if (output.targetGroupArn !== undefined && output.targetGroupArn !== null) {
        contents.targetGroupArn = output.targetGroupArn;
    }
    return contents;
};
const deserializeAws_json1_1LoadBalancers = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LoadBalancer(entry, context));
};
const deserializeAws_json1_1LogConfiguration = (output, context) => {
    let contents = {
        __type: "LogConfiguration",
        logDriver: undefined,
        options: undefined,
        secretOptions: undefined
    };
    if (output.logDriver !== undefined && output.logDriver !== null) {
        contents.logDriver = output.logDriver;
    }
    if (output.options !== undefined && output.options !== null) {
        contents.options = deserializeAws_json1_1LogConfigurationOptionsMap(output.options, context);
    }
    if (output.secretOptions !== undefined && output.secretOptions !== null) {
        contents.secretOptions = deserializeAws_json1_1SecretList(output.secretOptions, context);
    }
    return contents;
};
const deserializeAws_json1_1LogConfigurationOptionsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ManagedScaling = (output, context) => {
    let contents = {
        __type: "ManagedScaling",
        maximumScalingStepSize: undefined,
        minimumScalingStepSize: undefined,
        status: undefined,
        targetCapacity: undefined
    };
    if (output.maximumScalingStepSize !== undefined &&
        output.maximumScalingStepSize !== null) {
        contents.maximumScalingStepSize = output.maximumScalingStepSize;
    }
    if (output.minimumScalingStepSize !== undefined &&
        output.minimumScalingStepSize !== null) {
        contents.minimumScalingStepSize = output.minimumScalingStepSize;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.targetCapacity !== undefined && output.targetCapacity !== null) {
        contents.targetCapacity = output.targetCapacity;
    }
    return contents;
};
const deserializeAws_json1_1MissingVersionException = (output, context) => {
    let contents = {
        __type: "MissingVersionException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1MountPoint = (output, context) => {
    let contents = {
        __type: "MountPoint",
        containerPath: undefined,
        readOnly: undefined,
        sourceVolume: undefined
    };
    if (output.containerPath !== undefined && output.containerPath !== null) {
        contents.containerPath = output.containerPath;
    }
    if (output.readOnly !== undefined && output.readOnly !== null) {
        contents.readOnly = output.readOnly;
    }
    if (output.sourceVolume !== undefined && output.sourceVolume !== null) {
        contents.sourceVolume = output.sourceVolume;
    }
    return contents;
};
const deserializeAws_json1_1MountPointList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MountPoint(entry, context));
};
const deserializeAws_json1_1NetworkBinding = (output, context) => {
    let contents = {
        __type: "NetworkBinding",
        bindIP: undefined,
        containerPort: undefined,
        hostPort: undefined,
        protocol: undefined
    };
    if (output.bindIP !== undefined && output.bindIP !== null) {
        contents.bindIP = output.bindIP;
    }
    if (output.containerPort !== undefined && output.containerPort !== null) {
        contents.containerPort = output.containerPort;
    }
    if (output.hostPort !== undefined && output.hostPort !== null) {
        contents.hostPort = output.hostPort;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    return contents;
};
const deserializeAws_json1_1NetworkBindings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkBinding(entry, context));
};
const deserializeAws_json1_1NetworkConfiguration = (output, context) => {
    let contents = {
        __type: "NetworkConfiguration",
        awsvpcConfiguration: undefined
    };
    if (output.awsvpcConfiguration !== undefined &&
        output.awsvpcConfiguration !== null) {
        contents.awsvpcConfiguration = deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context);
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    let contents = {
        __type: "NetworkInterface",
        attachmentId: undefined,
        ipv6Address: undefined,
        privateIpv4Address: undefined
    };
    if (output.attachmentId !== undefined && output.attachmentId !== null) {
        contents.attachmentId = output.attachmentId;
    }
    if (output.ipv6Address !== undefined && output.ipv6Address !== null) {
        contents.ipv6Address = output.ipv6Address;
    }
    if (output.privateIpv4Address !== undefined &&
        output.privateIpv4Address !== null) {
        contents.privateIpv4Address = output.privateIpv4Address;
    }
    return contents;
};
const deserializeAws_json1_1NetworkInterfaces = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NetworkInterface(entry, context));
};
const deserializeAws_json1_1NoUpdateAvailableException = (output, context) => {
    let contents = {
        __type: "NoUpdateAvailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PlacementConstraint = (output, context) => {
    let contents = {
        __type: "PlacementConstraint",
        expression: undefined,
        type: undefined
    };
    if (output.expression !== undefined && output.expression !== null) {
        contents.expression = output.expression;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1PlacementConstraints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlacementConstraint(entry, context));
};
const deserializeAws_json1_1PlacementStrategies = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PlacementStrategy(entry, context));
};
const deserializeAws_json1_1PlacementStrategy = (output, context) => {
    let contents = {
        __type: "PlacementStrategy",
        field: undefined,
        type: undefined
    };
    if (output.field !== undefined && output.field !== null) {
        contents.field = output.field;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = (output, context) => {
    let contents = {
        __type: "PlatformTaskDefinitionIncompatibilityException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PlatformUnknownException = (output, context) => {
    let contents = {
        __type: "PlatformUnknownException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PortMapping = (output, context) => {
    let contents = {
        __type: "PortMapping",
        containerPort: undefined,
        hostPort: undefined,
        protocol: undefined
    };
    if (output.containerPort !== undefined && output.containerPort !== null) {
        contents.containerPort = output.containerPort;
    }
    if (output.hostPort !== undefined && output.hostPort !== null) {
        contents.hostPort = output.hostPort;
    }
    if (output.protocol !== undefined && output.protocol !== null) {
        contents.protocol = output.protocol;
    }
    return contents;
};
const deserializeAws_json1_1PortMappingList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PortMapping(entry, context));
};
const deserializeAws_json1_1ProxyConfiguration = (output, context) => {
    let contents = {
        __type: "ProxyConfiguration",
        containerName: undefined,
        properties: undefined,
        type: undefined
    };
    if (output.containerName !== undefined && output.containerName !== null) {
        contents.containerName = output.containerName;
    }
    if (output.properties !== undefined && output.properties !== null) {
        contents.properties = deserializeAws_json1_1ProxyConfigurationProperties(output.properties, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ProxyConfigurationProperties = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyValuePair(entry, context));
};
const deserializeAws_json1_1PutAccountSettingDefaultResponse = (output, context) => {
    let contents = {
        __type: "PutAccountSettingDefaultResponse",
        setting: undefined
    };
    if (output.setting !== undefined && output.setting !== null) {
        contents.setting = deserializeAws_json1_1Setting(output.setting, context);
    }
    return contents;
};
const deserializeAws_json1_1PutAccountSettingResponse = (output, context) => {
    let contents = {
        __type: "PutAccountSettingResponse",
        setting: undefined
    };
    if (output.setting !== undefined && output.setting !== null) {
        contents.setting = deserializeAws_json1_1Setting(output.setting, context);
    }
    return contents;
};
const deserializeAws_json1_1PutAttributesResponse = (output, context) => {
    let contents = {
        __type: "PutAttributesResponse",
        attributes: undefined
    };
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1Attributes(output.attributes, context);
    }
    return contents;
};
const deserializeAws_json1_1PutClusterCapacityProvidersResponse = (output, context) => {
    let contents = {
        __type: "PutClusterCapacityProvidersResponse",
        cluster: undefined
    };
    if (output.cluster !== undefined && output.cluster !== null) {
        contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1RegisterContainerInstanceResponse = (output, context) => {
    let contents = {
        __type: "RegisterContainerInstanceResponse",
        containerInstance: undefined
    };
    if (output.containerInstance !== undefined &&
        output.containerInstance !== null) {
        contents.containerInstance = deserializeAws_json1_1ContainerInstance(output.containerInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1RegisterTaskDefinitionResponse = (output, context) => {
    let contents = {
        __type: "RegisterTaskDefinitionResponse",
        tags: undefined,
        taskDefinition: undefined
    };
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = deserializeAws_json1_1TaskDefinition(output.taskDefinition, context);
    }
    return contents;
};
const deserializeAws_json1_1RepositoryCredentials = (output, context) => {
    let contents = {
        __type: "RepositoryCredentials",
        credentialsParameter: undefined
    };
    if (output.credentialsParameter !== undefined &&
        output.credentialsParameter !== null) {
        contents.credentialsParameter = output.credentialsParameter;
    }
    return contents;
};
const deserializeAws_json1_1RequiresAttributes = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Attribute(entry, context));
};
const deserializeAws_json1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        doubleValue: undefined,
        integerValue: undefined,
        longValue: undefined,
        name: undefined,
        stringSetValue: undefined,
        type: undefined
    };
    if (output.doubleValue !== undefined && output.doubleValue !== null) {
        contents.doubleValue = output.doubleValue;
    }
    if (output.integerValue !== undefined && output.integerValue !== null) {
        contents.integerValue = output.integerValue;
    }
    if (output.longValue !== undefined && output.longValue !== null) {
        contents.longValue = output.longValue;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.stringSetValue !== undefined && output.stringSetValue !== null) {
        contents.stringSetValue = deserializeAws_json1_1StringList(output.stringSetValue, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
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
const deserializeAws_json1_1ResourceRequirement = (output, context) => {
    let contents = {
        __type: "ResourceRequirement",
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
const deserializeAws_json1_1ResourceRequirements = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceRequirement(entry, context));
};
const deserializeAws_json1_1Resources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Resource(entry, context));
};
const deserializeAws_json1_1RunTaskResponse = (output, context) => {
    let contents = {
        __type: "RunTaskResponse",
        failures: undefined,
        tasks: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.tasks !== undefined && output.tasks !== null) {
        contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1Scale = (output, context) => {
    let contents = {
        __type: "Scale",
        unit: undefined,
        value: undefined
    };
    if (output.unit !== undefined && output.unit !== null) {
        contents.unit = output.unit;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1Secret = (output, context) => {
    let contents = {
        __type: "Secret",
        name: undefined,
        valueFrom: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.valueFrom !== undefined && output.valueFrom !== null) {
        contents.valueFrom = output.valueFrom;
    }
    return contents;
};
const deserializeAws_json1_1SecretList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Secret(entry, context));
};
const deserializeAws_json1_1ServerException = (output, context) => {
    let contents = {
        __type: "ServerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Service = (output, context) => {
    let contents = {
        __type: "Service",
        capacityProviderStrategy: undefined,
        clusterArn: undefined,
        createdAt: undefined,
        createdBy: undefined,
        deploymentConfiguration: undefined,
        deploymentController: undefined,
        deployments: undefined,
        desiredCount: undefined,
        enableECSManagedTags: undefined,
        events: undefined,
        healthCheckGracePeriodSeconds: undefined,
        launchType: undefined,
        loadBalancers: undefined,
        networkConfiguration: undefined,
        pendingCount: undefined,
        placementConstraints: undefined,
        placementStrategy: undefined,
        platformVersion: undefined,
        propagateTags: undefined,
        roleArn: undefined,
        runningCount: undefined,
        schedulingStrategy: undefined,
        serviceArn: undefined,
        serviceName: undefined,
        serviceRegistries: undefined,
        status: undefined,
        tags: undefined,
        taskDefinition: undefined,
        taskSets: undefined
    };
    if (output.capacityProviderStrategy !== undefined &&
        output.capacityProviderStrategy !== null) {
        contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context);
    }
    if (output.clusterArn !== undefined && output.clusterArn !== null) {
        contents.clusterArn = output.clusterArn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.createdBy !== undefined && output.createdBy !== null) {
        contents.createdBy = output.createdBy;
    }
    if (output.deploymentConfiguration !== undefined &&
        output.deploymentConfiguration !== null) {
        contents.deploymentConfiguration = deserializeAws_json1_1DeploymentConfiguration(output.deploymentConfiguration, context);
    }
    if (output.deploymentController !== undefined &&
        output.deploymentController !== null) {
        contents.deploymentController = deserializeAws_json1_1DeploymentController(output.deploymentController, context);
    }
    if (output.deployments !== undefined && output.deployments !== null) {
        contents.deployments = deserializeAws_json1_1Deployments(output.deployments, context);
    }
    if (output.desiredCount !== undefined && output.desiredCount !== null) {
        contents.desiredCount = output.desiredCount;
    }
    if (output.enableECSManagedTags !== undefined &&
        output.enableECSManagedTags !== null) {
        contents.enableECSManagedTags = output.enableECSManagedTags;
    }
    if (output.events !== undefined && output.events !== null) {
        contents.events = deserializeAws_json1_1ServiceEvents(output.events, context);
    }
    if (output.healthCheckGracePeriodSeconds !== undefined &&
        output.healthCheckGracePeriodSeconds !== null) {
        contents.healthCheckGracePeriodSeconds =
            output.healthCheckGracePeriodSeconds;
    }
    if (output.launchType !== undefined && output.launchType !== null) {
        contents.launchType = output.launchType;
    }
    if (output.loadBalancers !== undefined && output.loadBalancers !== null) {
        contents.loadBalancers = deserializeAws_json1_1LoadBalancers(output.loadBalancers, context);
    }
    if (output.networkConfiguration !== undefined &&
        output.networkConfiguration !== null) {
        contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context);
    }
    if (output.pendingCount !== undefined && output.pendingCount !== null) {
        contents.pendingCount = output.pendingCount;
    }
    if (output.placementConstraints !== undefined &&
        output.placementConstraints !== null) {
        contents.placementConstraints = deserializeAws_json1_1PlacementConstraints(output.placementConstraints, context);
    }
    if (output.placementStrategy !== undefined &&
        output.placementStrategy !== null) {
        contents.placementStrategy = deserializeAws_json1_1PlacementStrategies(output.placementStrategy, context);
    }
    if (output.platformVersion !== undefined && output.platformVersion !== null) {
        contents.platformVersion = output.platformVersion;
    }
    if (output.propagateTags !== undefined && output.propagateTags !== null) {
        contents.propagateTags = output.propagateTags;
    }
    if (output.roleArn !== undefined && output.roleArn !== null) {
        contents.roleArn = output.roleArn;
    }
    if (output.runningCount !== undefined && output.runningCount !== null) {
        contents.runningCount = output.runningCount;
    }
    if (output.schedulingStrategy !== undefined &&
        output.schedulingStrategy !== null) {
        contents.schedulingStrategy = output.schedulingStrategy;
    }
    if (output.serviceArn !== undefined && output.serviceArn !== null) {
        contents.serviceArn = output.serviceArn;
    }
    if (output.serviceName !== undefined && output.serviceName !== null) {
        contents.serviceName = output.serviceName;
    }
    if (output.serviceRegistries !== undefined &&
        output.serviceRegistries !== null) {
        contents.serviceRegistries = deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = output.taskDefinition;
    }
    if (output.taskSets !== undefined && output.taskSets !== null) {
        contents.taskSets = deserializeAws_json1_1TaskSets(output.taskSets, context);
    }
    return contents;
};
const deserializeAws_json1_1ServiceEvent = (output, context) => {
    let contents = {
        __type: "ServiceEvent",
        createdAt: undefined,
        id: undefined,
        message: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceEvents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceEvent(entry, context));
};
const deserializeAws_json1_1ServiceNotActiveException = (output, context) => {
    let contents = {
        __type: "ServiceNotActiveException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceNotFoundException = (output, context) => {
    let contents = {
        __type: "ServiceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ServiceRegistries = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ServiceRegistry(entry, context));
};
const deserializeAws_json1_1ServiceRegistry = (output, context) => {
    let contents = {
        __type: "ServiceRegistry",
        containerName: undefined,
        containerPort: undefined,
        port: undefined,
        registryArn: undefined
    };
    if (output.containerName !== undefined && output.containerName !== null) {
        contents.containerName = output.containerName;
    }
    if (output.containerPort !== undefined && output.containerPort !== null) {
        contents.containerPort = output.containerPort;
    }
    if (output.port !== undefined && output.port !== null) {
        contents.port = output.port;
    }
    if (output.registryArn !== undefined && output.registryArn !== null) {
        contents.registryArn = output.registryArn;
    }
    return contents;
};
const deserializeAws_json1_1Services = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Service(entry, context));
};
const deserializeAws_json1_1Setting = (output, context) => {
    let contents = {
        __type: "Setting",
        name: undefined,
        principalArn: undefined,
        value: undefined
    };
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.principalArn !== undefined && output.principalArn !== null) {
        contents.principalArn = output.principalArn;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1Settings = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Setting(entry, context));
};
const deserializeAws_json1_1StartTaskResponse = (output, context) => {
    let contents = {
        __type: "StartTaskResponse",
        failures: undefined,
        tasks: undefined
    };
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    if (output.tasks !== undefined && output.tasks !== null) {
        contents.tasks = deserializeAws_json1_1Tasks(output.tasks, context);
    }
    return contents;
};
const deserializeAws_json1_1Statistics = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyValuePair(entry, context));
};
const deserializeAws_json1_1StopTaskResponse = (output, context) => {
    let contents = {
        __type: "StopTaskResponse",
        task: undefined
    };
    if (output.task !== undefined && output.task !== null) {
        contents.task = deserializeAws_json1_1Task(output.task, context);
    }
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1StringMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1SubmitAttachmentStateChangesResponse = (output, context) => {
    let contents = {
        __type: "SubmitAttachmentStateChangesResponse",
        acknowledgment: undefined
    };
    if (output.acknowledgment !== undefined && output.acknowledgment !== null) {
        contents.acknowledgment = output.acknowledgment;
    }
    return contents;
};
const deserializeAws_json1_1SubmitContainerStateChangeResponse = (output, context) => {
    let contents = {
        __type: "SubmitContainerStateChangeResponse",
        acknowledgment: undefined
    };
    if (output.acknowledgment !== undefined && output.acknowledgment !== null) {
        contents.acknowledgment = output.acknowledgment;
    }
    return contents;
};
const deserializeAws_json1_1SubmitTaskStateChangeResponse = (output, context) => {
    let contents = {
        __type: "SubmitTaskStateChangeResponse",
        acknowledgment: undefined
    };
    if (output.acknowledgment !== undefined && output.acknowledgment !== null) {
        contents.acknowledgment = output.acknowledgment;
    }
    return contents;
};
const deserializeAws_json1_1SystemControl = (output, context) => {
    let contents = {
        __type: "SystemControl",
        namespace: undefined,
        value: undefined
    };
    if (output.namespace !== undefined && output.namespace !== null) {
        contents.namespace = output.namespace;
    }
    if (output.value !== undefined && output.value !== null) {
        contents.value = output.value;
    }
    return contents;
};
const deserializeAws_json1_1SystemControls = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SystemControl(entry, context));
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TargetNotFoundException = (output, context) => {
    let contents = {
        __type: "TargetNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1Task = (output, context) => {
    let contents = {
        __type: "Task",
        attachments: undefined,
        attributes: undefined,
        availabilityZone: undefined,
        capacityProviderName: undefined,
        clusterArn: undefined,
        connectivity: undefined,
        connectivityAt: undefined,
        containerInstanceArn: undefined,
        containers: undefined,
        cpu: undefined,
        createdAt: undefined,
        desiredStatus: undefined,
        executionStoppedAt: undefined,
        group: undefined,
        healthStatus: undefined,
        inferenceAccelerators: undefined,
        lastStatus: undefined,
        launchType: undefined,
        memory: undefined,
        overrides: undefined,
        platformVersion: undefined,
        pullStartedAt: undefined,
        pullStoppedAt: undefined,
        startedAt: undefined,
        startedBy: undefined,
        stopCode: undefined,
        stoppedAt: undefined,
        stoppedReason: undefined,
        stoppingAt: undefined,
        tags: undefined,
        taskArn: undefined,
        taskDefinitionArn: undefined,
        version: undefined
    };
    if (output.attachments !== undefined && output.attachments !== null) {
        contents.attachments = deserializeAws_json1_1Attachments(output.attachments, context);
    }
    if (output.attributes !== undefined && output.attributes !== null) {
        contents.attributes = deserializeAws_json1_1Attributes(output.attributes, context);
    }
    if (output.availabilityZone !== undefined &&
        output.availabilityZone !== null) {
        contents.availabilityZone = output.availabilityZone;
    }
    if (output.capacityProviderName !== undefined &&
        output.capacityProviderName !== null) {
        contents.capacityProviderName = output.capacityProviderName;
    }
    if (output.clusterArn !== undefined && output.clusterArn !== null) {
        contents.clusterArn = output.clusterArn;
    }
    if (output.connectivity !== undefined && output.connectivity !== null) {
        contents.connectivity = output.connectivity;
    }
    if (output.connectivityAt !== undefined && output.connectivityAt !== null) {
        contents.connectivityAt = new Date(Math.round(output.connectivityAt * 1000));
    }
    if (output.containerInstanceArn !== undefined &&
        output.containerInstanceArn !== null) {
        contents.containerInstanceArn = output.containerInstanceArn;
    }
    if (output.containers !== undefined && output.containers !== null) {
        contents.containers = deserializeAws_json1_1Containers(output.containers, context);
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.desiredStatus !== undefined && output.desiredStatus !== null) {
        contents.desiredStatus = output.desiredStatus;
    }
    if (output.executionStoppedAt !== undefined &&
        output.executionStoppedAt !== null) {
        contents.executionStoppedAt = new Date(Math.round(output.executionStoppedAt * 1000));
    }
    if (output.group !== undefined && output.group !== null) {
        contents.group = output.group;
    }
    if (output.healthStatus !== undefined && output.healthStatus !== null) {
        contents.healthStatus = output.healthStatus;
    }
    if (output.inferenceAccelerators !== undefined &&
        output.inferenceAccelerators !== null) {
        contents.inferenceAccelerators = deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context);
    }
    if (output.lastStatus !== undefined && output.lastStatus !== null) {
        contents.lastStatus = output.lastStatus;
    }
    if (output.launchType !== undefined && output.launchType !== null) {
        contents.launchType = output.launchType;
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.overrides !== undefined && output.overrides !== null) {
        contents.overrides = deserializeAws_json1_1TaskOverride(output.overrides, context);
    }
    if (output.platformVersion !== undefined && output.platformVersion !== null) {
        contents.platformVersion = output.platformVersion;
    }
    if (output.pullStartedAt !== undefined && output.pullStartedAt !== null) {
        contents.pullStartedAt = new Date(Math.round(output.pullStartedAt * 1000));
    }
    if (output.pullStoppedAt !== undefined && output.pullStoppedAt !== null) {
        contents.pullStoppedAt = new Date(Math.round(output.pullStoppedAt * 1000));
    }
    if (output.startedAt !== undefined && output.startedAt !== null) {
        contents.startedAt = new Date(Math.round(output.startedAt * 1000));
    }
    if (output.startedBy !== undefined && output.startedBy !== null) {
        contents.startedBy = output.startedBy;
    }
    if (output.stopCode !== undefined && output.stopCode !== null) {
        contents.stopCode = output.stopCode;
    }
    if (output.stoppedAt !== undefined && output.stoppedAt !== null) {
        contents.stoppedAt = new Date(Math.round(output.stoppedAt * 1000));
    }
    if (output.stoppedReason !== undefined && output.stoppedReason !== null) {
        contents.stoppedReason = output.stoppedReason;
    }
    if (output.stoppingAt !== undefined && output.stoppingAt !== null) {
        contents.stoppingAt = new Date(Math.round(output.stoppingAt * 1000));
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_json1_1Tags(output.tags, context);
    }
    if (output.taskArn !== undefined && output.taskArn !== null) {
        contents.taskArn = output.taskArn;
    }
    if (output.taskDefinitionArn !== undefined &&
        output.taskDefinitionArn !== null) {
        contents.taskDefinitionArn = output.taskDefinitionArn;
    }
    if (output.version !== undefined && output.version !== null) {
        contents.version = output.version;
    }
    return contents;
};
const deserializeAws_json1_1TaskDefinition = (output, context) => {
    let contents = {
        __type: "TaskDefinition",
        compatibilities: undefined,
        containerDefinitions: undefined,
        cpu: undefined,
        executionRoleArn: undefined,
        family: undefined,
        inferenceAccelerators: undefined,
        ipcMode: undefined,
        memory: undefined,
        networkMode: undefined,
        pidMode: undefined,
        placementConstraints: undefined,
        proxyConfiguration: undefined,
        requiresAttributes: undefined,
        requiresCompatibilities: undefined,
        revision: undefined,
        status: undefined,
        taskDefinitionArn: undefined,
        taskRoleArn: undefined,
        volumes: undefined
    };
    if (output.compatibilities !== undefined && output.compatibilities !== null) {
        contents.compatibilities = deserializeAws_json1_1CompatibilityList(output.compatibilities, context);
    }
    if (output.containerDefinitions !== undefined &&
        output.containerDefinitions !== null) {
        contents.containerDefinitions = deserializeAws_json1_1ContainerDefinitions(output.containerDefinitions, context);
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.executionRoleArn !== undefined &&
        output.executionRoleArn !== null) {
        contents.executionRoleArn = output.executionRoleArn;
    }
    if (output.family !== undefined && output.family !== null) {
        contents.family = output.family;
    }
    if (output.inferenceAccelerators !== undefined &&
        output.inferenceAccelerators !== null) {
        contents.inferenceAccelerators = deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context);
    }
    if (output.ipcMode !== undefined && output.ipcMode !== null) {
        contents.ipcMode = output.ipcMode;
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.networkMode !== undefined && output.networkMode !== null) {
        contents.networkMode = output.networkMode;
    }
    if (output.pidMode !== undefined && output.pidMode !== null) {
        contents.pidMode = output.pidMode;
    }
    if (output.placementConstraints !== undefined &&
        output.placementConstraints !== null) {
        contents.placementConstraints = deserializeAws_json1_1TaskDefinitionPlacementConstraints(output.placementConstraints, context);
    }
    if (output.proxyConfiguration !== undefined &&
        output.proxyConfiguration !== null) {
        contents.proxyConfiguration = deserializeAws_json1_1ProxyConfiguration(output.proxyConfiguration, context);
    }
    if (output.requiresAttributes !== undefined &&
        output.requiresAttributes !== null) {
        contents.requiresAttributes = deserializeAws_json1_1RequiresAttributes(output.requiresAttributes, context);
    }
    if (output.requiresCompatibilities !== undefined &&
        output.requiresCompatibilities !== null) {
        contents.requiresCompatibilities = deserializeAws_json1_1CompatibilityList(output.requiresCompatibilities, context);
    }
    if (output.revision !== undefined && output.revision !== null) {
        contents.revision = output.revision;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.taskDefinitionArn !== undefined &&
        output.taskDefinitionArn !== null) {
        contents.taskDefinitionArn = output.taskDefinitionArn;
    }
    if (output.taskRoleArn !== undefined && output.taskRoleArn !== null) {
        contents.taskRoleArn = output.taskRoleArn;
    }
    if (output.volumes !== undefined && output.volumes !== null) {
        contents.volumes = deserializeAws_json1_1VolumeList(output.volumes, context);
    }
    return contents;
};
const deserializeAws_json1_1TaskDefinitionPlacementConstraint = (output, context) => {
    let contents = {
        __type: "TaskDefinitionPlacementConstraint",
        expression: undefined,
        type: undefined
    };
    if (output.expression !== undefined && output.expression !== null) {
        contents.expression = output.expression;
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_json1_1TaskDefinitionPlacementConstraints = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context));
};
const deserializeAws_json1_1TaskOverride = (output, context) => {
    let contents = {
        __type: "TaskOverride",
        containerOverrides: undefined,
        cpu: undefined,
        executionRoleArn: undefined,
        inferenceAcceleratorOverrides: undefined,
        memory: undefined,
        taskRoleArn: undefined
    };
    if (output.containerOverrides !== undefined &&
        output.containerOverrides !== null) {
        contents.containerOverrides = deserializeAws_json1_1ContainerOverrides(output.containerOverrides, context);
    }
    if (output.cpu !== undefined && output.cpu !== null) {
        contents.cpu = output.cpu;
    }
    if (output.executionRoleArn !== undefined &&
        output.executionRoleArn !== null) {
        contents.executionRoleArn = output.executionRoleArn;
    }
    if (output.inferenceAcceleratorOverrides !== undefined &&
        output.inferenceAcceleratorOverrides !== null) {
        contents.inferenceAcceleratorOverrides = deserializeAws_json1_1InferenceAcceleratorOverrides(output.inferenceAcceleratorOverrides, context);
    }
    if (output.memory !== undefined && output.memory !== null) {
        contents.memory = output.memory;
    }
    if (output.taskRoleArn !== undefined && output.taskRoleArn !== null) {
        contents.taskRoleArn = output.taskRoleArn;
    }
    return contents;
};
const deserializeAws_json1_1TaskSet = (output, context) => {
    let contents = {
        __type: "TaskSet",
        capacityProviderStrategy: undefined,
        clusterArn: undefined,
        computedDesiredCount: undefined,
        createdAt: undefined,
        externalId: undefined,
        id: undefined,
        launchType: undefined,
        loadBalancers: undefined,
        networkConfiguration: undefined,
        pendingCount: undefined,
        platformVersion: undefined,
        runningCount: undefined,
        scale: undefined,
        serviceArn: undefined,
        serviceRegistries: undefined,
        stabilityStatus: undefined,
        stabilityStatusAt: undefined,
        startedBy: undefined,
        status: undefined,
        taskDefinition: undefined,
        taskSetArn: undefined,
        updatedAt: undefined
    };
    if (output.capacityProviderStrategy !== undefined &&
        output.capacityProviderStrategy !== null) {
        contents.capacityProviderStrategy = deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context);
    }
    if (output.clusterArn !== undefined && output.clusterArn !== null) {
        contents.clusterArn = output.clusterArn;
    }
    if (output.computedDesiredCount !== undefined &&
        output.computedDesiredCount !== null) {
        contents.computedDesiredCount = output.computedDesiredCount;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(Math.round(output.createdAt * 1000));
    }
    if (output.externalId !== undefined && output.externalId !== null) {
        contents.externalId = output.externalId;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.launchType !== undefined && output.launchType !== null) {
        contents.launchType = output.launchType;
    }
    if (output.loadBalancers !== undefined && output.loadBalancers !== null) {
        contents.loadBalancers = deserializeAws_json1_1LoadBalancers(output.loadBalancers, context);
    }
    if (output.networkConfiguration !== undefined &&
        output.networkConfiguration !== null) {
        contents.networkConfiguration = deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context);
    }
    if (output.pendingCount !== undefined && output.pendingCount !== null) {
        contents.pendingCount = output.pendingCount;
    }
    if (output.platformVersion !== undefined && output.platformVersion !== null) {
        contents.platformVersion = output.platformVersion;
    }
    if (output.runningCount !== undefined && output.runningCount !== null) {
        contents.runningCount = output.runningCount;
    }
    if (output.scale !== undefined && output.scale !== null) {
        contents.scale = deserializeAws_json1_1Scale(output.scale, context);
    }
    if (output.serviceArn !== undefined && output.serviceArn !== null) {
        contents.serviceArn = output.serviceArn;
    }
    if (output.serviceRegistries !== undefined &&
        output.serviceRegistries !== null) {
        contents.serviceRegistries = deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context);
    }
    if (output.stabilityStatus !== undefined && output.stabilityStatus !== null) {
        contents.stabilityStatus = output.stabilityStatus;
    }
    if (output.stabilityStatusAt !== undefined &&
        output.stabilityStatusAt !== null) {
        contents.stabilityStatusAt = new Date(Math.round(output.stabilityStatusAt * 1000));
    }
    if (output.startedBy !== undefined && output.startedBy !== null) {
        contents.startedBy = output.startedBy;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.taskDefinition !== undefined && output.taskDefinition !== null) {
        contents.taskDefinition = output.taskDefinition;
    }
    if (output.taskSetArn !== undefined && output.taskSetArn !== null) {
        contents.taskSetArn = output.taskSetArn;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
    }
    return contents;
};
const deserializeAws_json1_1TaskSetNotFoundException = (output, context) => {
    let contents = {
        __type: "TaskSetNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TaskSets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TaskSet(entry, context));
};
const deserializeAws_json1_1Tasks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Task(entry, context));
};
const deserializeAws_json1_1Tmpfs = (output, context) => {
    let contents = {
        __type: "Tmpfs",
        containerPath: undefined,
        mountOptions: undefined,
        size: undefined
    };
    if (output.containerPath !== undefined && output.containerPath !== null) {
        contents.containerPath = output.containerPath;
    }
    if (output.mountOptions !== undefined && output.mountOptions !== null) {
        contents.mountOptions = deserializeAws_json1_1StringList(output.mountOptions, context);
    }
    if (output.size !== undefined && output.size !== null) {
        contents.size = output.size;
    }
    return contents;
};
const deserializeAws_json1_1TmpfsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tmpfs(entry, context));
};
const deserializeAws_json1_1Ulimit = (output, context) => {
    let contents = {
        __type: "Ulimit",
        hardLimit: undefined,
        name: undefined,
        softLimit: undefined
    };
    if (output.hardLimit !== undefined && output.hardLimit !== null) {
        contents.hardLimit = output.hardLimit;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.softLimit !== undefined && output.softLimit !== null) {
        contents.softLimit = output.softLimit;
    }
    return contents;
};
const deserializeAws_json1_1UlimitList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Ulimit(entry, context));
};
const deserializeAws_json1_1UnsupportedFeatureException = (output, context) => {
    let contents = {
        __type: "UnsupportedFeatureException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateClusterSettingsResponse = (output, context) => {
    let contents = {
        __type: "UpdateClusterSettingsResponse",
        cluster: undefined
    };
    if (output.cluster !== undefined && output.cluster !== null) {
        contents.cluster = deserializeAws_json1_1Cluster(output.cluster, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateContainerAgentResponse = (output, context) => {
    let contents = {
        __type: "UpdateContainerAgentResponse",
        containerInstance: undefined
    };
    if (output.containerInstance !== undefined &&
        output.containerInstance !== null) {
        contents.containerInstance = deserializeAws_json1_1ContainerInstance(output.containerInstance, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateContainerInstancesStateResponse = (output, context) => {
    let contents = {
        __type: "UpdateContainerInstancesStateResponse",
        containerInstances: undefined,
        failures: undefined
    };
    if (output.containerInstances !== undefined &&
        output.containerInstances !== null) {
        contents.containerInstances = deserializeAws_json1_1ContainerInstances(output.containerInstances, context);
    }
    if (output.failures !== undefined && output.failures !== null) {
        contents.failures = deserializeAws_json1_1Failures(output.failures, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateInProgressException = (output, context) => {
    let contents = {
        __type: "UpdateInProgressException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateServicePrimaryTaskSetResponse",
        taskSet: undefined
    };
    if (output.taskSet !== undefined && output.taskSet !== null) {
        contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateServiceResponse = (output, context) => {
    let contents = {
        __type: "UpdateServiceResponse",
        service: undefined
    };
    if (output.service !== undefined && output.service !== null) {
        contents.service = deserializeAws_json1_1Service(output.service, context);
    }
    return contents;
};
const deserializeAws_json1_1UpdateTaskSetResponse = (output, context) => {
    let contents = {
        __type: "UpdateTaskSetResponse",
        taskSet: undefined
    };
    if (output.taskSet !== undefined && output.taskSet !== null) {
        contents.taskSet = deserializeAws_json1_1TaskSet(output.taskSet, context);
    }
    return contents;
};
const deserializeAws_json1_1VersionInfo = (output, context) => {
    let contents = {
        __type: "VersionInfo",
        agentHash: undefined,
        agentVersion: undefined,
        dockerVersion: undefined
    };
    if (output.agentHash !== undefined && output.agentHash !== null) {
        contents.agentHash = output.agentHash;
    }
    if (output.agentVersion !== undefined && output.agentVersion !== null) {
        contents.agentVersion = output.agentVersion;
    }
    if (output.dockerVersion !== undefined && output.dockerVersion !== null) {
        contents.dockerVersion = output.dockerVersion;
    }
    return contents;
};
const deserializeAws_json1_1Volume = (output, context) => {
    let contents = {
        __type: "Volume",
        dockerVolumeConfiguration: undefined,
        efsVolumeConfiguration: undefined,
        host: undefined,
        name: undefined
    };
    if (output.dockerVolumeConfiguration !== undefined &&
        output.dockerVolumeConfiguration !== null) {
        contents.dockerVolumeConfiguration = deserializeAws_json1_1DockerVolumeConfiguration(output.dockerVolumeConfiguration, context);
    }
    if (output.efsVolumeConfiguration !== undefined &&
        output.efsVolumeConfiguration !== null) {
        contents.efsVolumeConfiguration = deserializeAws_json1_1EFSVolumeConfiguration(output.efsVolumeConfiguration, context);
    }
    if (output.host !== undefined && output.host !== null) {
        contents.host = deserializeAws_json1_1HostVolumeProperties(output.host, context);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_json1_1VolumeFrom = (output, context) => {
    let contents = {
        __type: "VolumeFrom",
        readOnly: undefined,
        sourceContainer: undefined
    };
    if (output.readOnly !== undefined && output.readOnly !== null) {
        contents.readOnly = output.readOnly;
    }
    if (output.sourceContainer !== undefined && output.sourceContainer !== null) {
        contents.sourceContainer = output.sourceContainer;
    }
    return contents;
};
const deserializeAws_json1_1VolumeFromList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1VolumeFrom(entry, context));
};
const deserializeAws_json1_1VolumeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Volume(entry, context));
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