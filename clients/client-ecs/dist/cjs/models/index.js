"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AgentUpdateStatus;
(function (AgentUpdateStatus) {
    AgentUpdateStatus["FAILED"] = "FAILED";
    AgentUpdateStatus["PENDING"] = "PENDING";
    AgentUpdateStatus["STAGED"] = "STAGED";
    AgentUpdateStatus["STAGING"] = "STAGING";
    AgentUpdateStatus["UPDATED"] = "UPDATED";
    AgentUpdateStatus["UPDATING"] = "UPDATING";
})(AgentUpdateStatus = exports.AgentUpdateStatus || (exports.AgentUpdateStatus = {}));
var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp = exports.AssignPublicIp || (exports.AssignPublicIp = {}));
var Attachment;
(function (Attachment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attachment");
    }
    Attachment.isa = isa;
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var AttachmentStateChange;
(function (AttachmentStateChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentStateChange");
    }
    AttachmentStateChange.isa = isa;
})(AttachmentStateChange = exports.AttachmentStateChange || (exports.AttachmentStateChange = {}));
var Attribute;
(function (Attribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attribute");
    }
    Attribute.isa = isa;
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AttributeLimitExceededException;
(function (AttributeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeLimitExceededException");
    }
    AttributeLimitExceededException.isa = isa;
})(AttributeLimitExceededException = exports.AttributeLimitExceededException || (exports.AttributeLimitExceededException = {}));
var AutoScalingGroupProvider;
(function (AutoScalingGroupProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingGroupProvider");
    }
    AutoScalingGroupProvider.isa = isa;
})(AutoScalingGroupProvider = exports.AutoScalingGroupProvider || (exports.AutoScalingGroupProvider = {}));
var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AwsVpcConfiguration");
    }
    AwsVpcConfiguration.isa = isa;
})(AwsVpcConfiguration = exports.AwsVpcConfiguration || (exports.AwsVpcConfiguration = {}));
var BlockedException;
(function (BlockedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlockedException");
    }
    BlockedException.isa = isa;
})(BlockedException = exports.BlockedException || (exports.BlockedException = {}));
var CapacityProvider;
(function (CapacityProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "CapacityProvider");
    }
    CapacityProvider.isa = isa;
})(CapacityProvider = exports.CapacityProvider || (exports.CapacityProvider = {}));
var CapacityProviderField;
(function (CapacityProviderField) {
    CapacityProviderField["TAGS"] = "TAGS";
})(CapacityProviderField = exports.CapacityProviderField || (exports.CapacityProviderField = {}));
var CapacityProviderStatus;
(function (CapacityProviderStatus) {
    CapacityProviderStatus["ACTIVE"] = "ACTIVE";
})(CapacityProviderStatus = exports.CapacityProviderStatus || (exports.CapacityProviderStatus = {}));
var CapacityProviderStrategyItem;
(function (CapacityProviderStrategyItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "CapacityProviderStrategyItem");
    }
    CapacityProviderStrategyItem.isa = isa;
})(CapacityProviderStrategyItem = exports.CapacityProviderStrategyItem || (exports.CapacityProviderStrategyItem = {}));
var ClientException;
(function (ClientException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClientException");
    }
    ClientException.isa = isa;
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var Cluster;
(function (Cluster) {
    function isa(o) {
        return smithy_client_1.isa(o, "Cluster");
    }
    Cluster.isa = isa;
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var ClusterContainsContainerInstancesException;
(function (ClusterContainsContainerInstancesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterContainsContainerInstancesException");
    }
    ClusterContainsContainerInstancesException.isa = isa;
})(ClusterContainsContainerInstancesException = exports.ClusterContainsContainerInstancesException || (exports.ClusterContainsContainerInstancesException = {}));
var ClusterContainsServicesException;
(function (ClusterContainsServicesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterContainsServicesException");
    }
    ClusterContainsServicesException.isa = isa;
})(ClusterContainsServicesException = exports.ClusterContainsServicesException || (exports.ClusterContainsServicesException = {}));
var ClusterContainsTasksException;
(function (ClusterContainsTasksException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterContainsTasksException");
    }
    ClusterContainsTasksException.isa = isa;
})(ClusterContainsTasksException = exports.ClusterContainsTasksException || (exports.ClusterContainsTasksException = {}));
var ClusterField;
(function (ClusterField) {
    ClusterField["ATTACHMENTS"] = "ATTACHMENTS";
    ClusterField["SETTINGS"] = "SETTINGS";
    ClusterField["STATISTICS"] = "STATISTICS";
    ClusterField["TAGS"] = "TAGS";
})(ClusterField = exports.ClusterField || (exports.ClusterField = {}));
var ClusterNotFoundException;
(function (ClusterNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterNotFoundException");
    }
    ClusterNotFoundException.isa = isa;
})(ClusterNotFoundException = exports.ClusterNotFoundException || (exports.ClusterNotFoundException = {}));
var ClusterSetting;
(function (ClusterSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterSetting");
    }
    ClusterSetting.isa = isa;
})(ClusterSetting = exports.ClusterSetting || (exports.ClusterSetting = {}));
var ClusterSettingName;
(function (ClusterSettingName) {
    ClusterSettingName["CONTAINER_INSIGHTS"] = "containerInsights";
})(ClusterSettingName = exports.ClusterSettingName || (exports.ClusterSettingName = {}));
var Compatibility;
(function (Compatibility) {
    Compatibility["EC2"] = "EC2";
    Compatibility["FARGATE"] = "FARGATE";
})(Compatibility = exports.Compatibility || (exports.Compatibility = {}));
var Connectivity;
(function (Connectivity) {
    Connectivity["CONNECTED"] = "CONNECTED";
    Connectivity["DISCONNECTED"] = "DISCONNECTED";
})(Connectivity = exports.Connectivity || (exports.Connectivity = {}));
var Container;
(function (Container) {
    function isa(o) {
        return smithy_client_1.isa(o, "Container");
    }
    Container.isa = isa;
})(Container = exports.Container || (exports.Container = {}));
var ContainerCondition;
(function (ContainerCondition) {
    ContainerCondition["COMPLETE"] = "COMPLETE";
    ContainerCondition["HEALTHY"] = "HEALTHY";
    ContainerCondition["START"] = "START";
    ContainerCondition["SUCCESS"] = "SUCCESS";
})(ContainerCondition = exports.ContainerCondition || (exports.ContainerCondition = {}));
var ContainerDefinition;
(function (ContainerDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerDefinition");
    }
    ContainerDefinition.isa = isa;
})(ContainerDefinition = exports.ContainerDefinition || (exports.ContainerDefinition = {}));
var ContainerDependency;
(function (ContainerDependency) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerDependency");
    }
    ContainerDependency.isa = isa;
})(ContainerDependency = exports.ContainerDependency || (exports.ContainerDependency = {}));
var ContainerInstance;
(function (ContainerInstance) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerInstance");
    }
    ContainerInstance.isa = isa;
})(ContainerInstance = exports.ContainerInstance || (exports.ContainerInstance = {}));
var ContainerInstanceField;
(function (ContainerInstanceField) {
    ContainerInstanceField["TAGS"] = "TAGS";
})(ContainerInstanceField = exports.ContainerInstanceField || (exports.ContainerInstanceField = {}));
var ContainerInstanceStatus;
(function (ContainerInstanceStatus) {
    ContainerInstanceStatus["ACTIVE"] = "ACTIVE";
    ContainerInstanceStatus["DEREGISTERING"] = "DEREGISTERING";
    ContainerInstanceStatus["DRAINING"] = "DRAINING";
    ContainerInstanceStatus["REGISTERING"] = "REGISTERING";
    ContainerInstanceStatus["REGISTRATION_FAILED"] = "REGISTRATION_FAILED";
})(ContainerInstanceStatus = exports.ContainerInstanceStatus || (exports.ContainerInstanceStatus = {}));
var ContainerOverride;
(function (ContainerOverride) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerOverride");
    }
    ContainerOverride.isa = isa;
})(ContainerOverride = exports.ContainerOverride || (exports.ContainerOverride = {}));
var ContainerStateChange;
(function (ContainerStateChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerStateChange");
    }
    ContainerStateChange.isa = isa;
})(ContainerStateChange = exports.ContainerStateChange || (exports.ContainerStateChange = {}));
var CreateCapacityProviderRequest;
(function (CreateCapacityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCapacityProviderRequest");
    }
    CreateCapacityProviderRequest.isa = isa;
})(CreateCapacityProviderRequest = exports.CreateCapacityProviderRequest || (exports.CreateCapacityProviderRequest = {}));
var CreateCapacityProviderResponse;
(function (CreateCapacityProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCapacityProviderResponse");
    }
    CreateCapacityProviderResponse.isa = isa;
})(CreateCapacityProviderResponse = exports.CreateCapacityProviderResponse || (exports.CreateCapacityProviderResponse = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterRequest");
    }
    CreateClusterRequest.isa = isa;
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterResponse");
    }
    CreateClusterResponse.isa = isa;
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var CreateServiceRequest;
(function (CreateServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceRequest");
    }
    CreateServiceRequest.isa = isa;
})(CreateServiceRequest = exports.CreateServiceRequest || (exports.CreateServiceRequest = {}));
var CreateServiceResponse;
(function (CreateServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceResponse");
    }
    CreateServiceResponse.isa = isa;
})(CreateServiceResponse = exports.CreateServiceResponse || (exports.CreateServiceResponse = {}));
var CreateTaskSetRequest;
(function (CreateTaskSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTaskSetRequest");
    }
    CreateTaskSetRequest.isa = isa;
})(CreateTaskSetRequest = exports.CreateTaskSetRequest || (exports.CreateTaskSetRequest = {}));
var CreateTaskSetResponse;
(function (CreateTaskSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTaskSetResponse");
    }
    CreateTaskSetResponse.isa = isa;
})(CreateTaskSetResponse = exports.CreateTaskSetResponse || (exports.CreateTaskSetResponse = {}));
var DeleteAccountSettingRequest;
(function (DeleteAccountSettingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccountSettingRequest");
    }
    DeleteAccountSettingRequest.isa = isa;
})(DeleteAccountSettingRequest = exports.DeleteAccountSettingRequest || (exports.DeleteAccountSettingRequest = {}));
var DeleteAccountSettingResponse;
(function (DeleteAccountSettingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccountSettingResponse");
    }
    DeleteAccountSettingResponse.isa = isa;
})(DeleteAccountSettingResponse = exports.DeleteAccountSettingResponse || (exports.DeleteAccountSettingResponse = {}));
var DeleteAttributesRequest;
(function (DeleteAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAttributesRequest");
    }
    DeleteAttributesRequest.isa = isa;
})(DeleteAttributesRequest = exports.DeleteAttributesRequest || (exports.DeleteAttributesRequest = {}));
var DeleteAttributesResponse;
(function (DeleteAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAttributesResponse");
    }
    DeleteAttributesResponse.isa = isa;
})(DeleteAttributesResponse = exports.DeleteAttributesResponse || (exports.DeleteAttributesResponse = {}));
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClusterRequest");
    }
    DeleteClusterRequest.isa = isa;
})(DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {}));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClusterResponse");
    }
    DeleteClusterResponse.isa = isa;
})(DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {}));
var DeleteServiceRequest;
(function (DeleteServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceRequest");
    }
    DeleteServiceRequest.isa = isa;
})(DeleteServiceRequest = exports.DeleteServiceRequest || (exports.DeleteServiceRequest = {}));
var DeleteServiceResponse;
(function (DeleteServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceResponse");
    }
    DeleteServiceResponse.isa = isa;
})(DeleteServiceResponse = exports.DeleteServiceResponse || (exports.DeleteServiceResponse = {}));
var DeleteTaskSetRequest;
(function (DeleteTaskSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTaskSetRequest");
    }
    DeleteTaskSetRequest.isa = isa;
})(DeleteTaskSetRequest = exports.DeleteTaskSetRequest || (exports.DeleteTaskSetRequest = {}));
var DeleteTaskSetResponse;
(function (DeleteTaskSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTaskSetResponse");
    }
    DeleteTaskSetResponse.isa = isa;
})(DeleteTaskSetResponse = exports.DeleteTaskSetResponse || (exports.DeleteTaskSetResponse = {}));
var Deployment;
(function (Deployment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Deployment");
    }
    Deployment.isa = isa;
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var DeploymentConfiguration;
(function (DeploymentConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentConfiguration");
    }
    DeploymentConfiguration.isa = isa;
})(DeploymentConfiguration = exports.DeploymentConfiguration || (exports.DeploymentConfiguration = {}));
var DeploymentController;
(function (DeploymentController) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeploymentController");
    }
    DeploymentController.isa = isa;
})(DeploymentController = exports.DeploymentController || (exports.DeploymentController = {}));
var DeploymentControllerType;
(function (DeploymentControllerType) {
    DeploymentControllerType["CODE_DEPLOY"] = "CODE_DEPLOY";
    DeploymentControllerType["ECS"] = "ECS";
    DeploymentControllerType["EXTERNAL"] = "EXTERNAL";
})(DeploymentControllerType = exports.DeploymentControllerType || (exports.DeploymentControllerType = {}));
var DeregisterContainerInstanceRequest;
(function (DeregisterContainerInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterContainerInstanceRequest");
    }
    DeregisterContainerInstanceRequest.isa = isa;
})(DeregisterContainerInstanceRequest = exports.DeregisterContainerInstanceRequest || (exports.DeregisterContainerInstanceRequest = {}));
var DeregisterContainerInstanceResponse;
(function (DeregisterContainerInstanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterContainerInstanceResponse");
    }
    DeregisterContainerInstanceResponse.isa = isa;
})(DeregisterContainerInstanceResponse = exports.DeregisterContainerInstanceResponse || (exports.DeregisterContainerInstanceResponse = {}));
var DeregisterTaskDefinitionRequest;
(function (DeregisterTaskDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTaskDefinitionRequest");
    }
    DeregisterTaskDefinitionRequest.isa = isa;
})(DeregisterTaskDefinitionRequest = exports.DeregisterTaskDefinitionRequest || (exports.DeregisterTaskDefinitionRequest = {}));
var DeregisterTaskDefinitionResponse;
(function (DeregisterTaskDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterTaskDefinitionResponse");
    }
    DeregisterTaskDefinitionResponse.isa = isa;
})(DeregisterTaskDefinitionResponse = exports.DeregisterTaskDefinitionResponse || (exports.DeregisterTaskDefinitionResponse = {}));
var DescribeCapacityProvidersRequest;
(function (DescribeCapacityProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCapacityProvidersRequest");
    }
    DescribeCapacityProvidersRequest.isa = isa;
})(DescribeCapacityProvidersRequest = exports.DescribeCapacityProvidersRequest || (exports.DescribeCapacityProvidersRequest = {}));
var DescribeCapacityProvidersResponse;
(function (DescribeCapacityProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCapacityProvidersResponse");
    }
    DescribeCapacityProvidersResponse.isa = isa;
})(DescribeCapacityProvidersResponse = exports.DescribeCapacityProvidersResponse || (exports.DescribeCapacityProvidersResponse = {}));
var DescribeClustersRequest;
(function (DescribeClustersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClustersRequest");
    }
    DescribeClustersRequest.isa = isa;
})(DescribeClustersRequest = exports.DescribeClustersRequest || (exports.DescribeClustersRequest = {}));
var DescribeClustersResponse;
(function (DescribeClustersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClustersResponse");
    }
    DescribeClustersResponse.isa = isa;
})(DescribeClustersResponse = exports.DescribeClustersResponse || (exports.DescribeClustersResponse = {}));
var DescribeContainerInstancesRequest;
(function (DescribeContainerInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContainerInstancesRequest");
    }
    DescribeContainerInstancesRequest.isa = isa;
})(DescribeContainerInstancesRequest = exports.DescribeContainerInstancesRequest || (exports.DescribeContainerInstancesRequest = {}));
var DescribeContainerInstancesResponse;
(function (DescribeContainerInstancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContainerInstancesResponse");
    }
    DescribeContainerInstancesResponse.isa = isa;
})(DescribeContainerInstancesResponse = exports.DescribeContainerInstancesResponse || (exports.DescribeContainerInstancesResponse = {}));
var DescribeServicesRequest;
(function (DescribeServicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServicesRequest");
    }
    DescribeServicesRequest.isa = isa;
})(DescribeServicesRequest = exports.DescribeServicesRequest || (exports.DescribeServicesRequest = {}));
var DescribeServicesResponse;
(function (DescribeServicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServicesResponse");
    }
    DescribeServicesResponse.isa = isa;
})(DescribeServicesResponse = exports.DescribeServicesResponse || (exports.DescribeServicesResponse = {}));
var DescribeTaskDefinitionRequest;
(function (DescribeTaskDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskDefinitionRequest");
    }
    DescribeTaskDefinitionRequest.isa = isa;
})(DescribeTaskDefinitionRequest = exports.DescribeTaskDefinitionRequest || (exports.DescribeTaskDefinitionRequest = {}));
var DescribeTaskDefinitionResponse;
(function (DescribeTaskDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskDefinitionResponse");
    }
    DescribeTaskDefinitionResponse.isa = isa;
})(DescribeTaskDefinitionResponse = exports.DescribeTaskDefinitionResponse || (exports.DescribeTaskDefinitionResponse = {}));
var DescribeTaskSetsRequest;
(function (DescribeTaskSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskSetsRequest");
    }
    DescribeTaskSetsRequest.isa = isa;
})(DescribeTaskSetsRequest = exports.DescribeTaskSetsRequest || (exports.DescribeTaskSetsRequest = {}));
var DescribeTaskSetsResponse;
(function (DescribeTaskSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskSetsResponse");
    }
    DescribeTaskSetsResponse.isa = isa;
})(DescribeTaskSetsResponse = exports.DescribeTaskSetsResponse || (exports.DescribeTaskSetsResponse = {}));
var DescribeTasksRequest;
(function (DescribeTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTasksRequest");
    }
    DescribeTasksRequest.isa = isa;
})(DescribeTasksRequest = exports.DescribeTasksRequest || (exports.DescribeTasksRequest = {}));
var DescribeTasksResponse;
(function (DescribeTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTasksResponse");
    }
    DescribeTasksResponse.isa = isa;
})(DescribeTasksResponse = exports.DescribeTasksResponse || (exports.DescribeTasksResponse = {}));
var DesiredStatus;
(function (DesiredStatus) {
    DesiredStatus["PENDING"] = "PENDING";
    DesiredStatus["RUNNING"] = "RUNNING";
    DesiredStatus["STOPPED"] = "STOPPED";
})(DesiredStatus = exports.DesiredStatus || (exports.DesiredStatus = {}));
var Device;
(function (Device) {
    function isa(o) {
        return smithy_client_1.isa(o, "Device");
    }
    Device.isa = isa;
})(Device = exports.Device || (exports.Device = {}));
var DeviceCgroupPermission;
(function (DeviceCgroupPermission) {
    DeviceCgroupPermission["MKNOD"] = "mknod";
    DeviceCgroupPermission["READ"] = "read";
    DeviceCgroupPermission["WRITE"] = "write";
})(DeviceCgroupPermission = exports.DeviceCgroupPermission || (exports.DeviceCgroupPermission = {}));
var DiscoverPollEndpointRequest;
(function (DiscoverPollEndpointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverPollEndpointRequest");
    }
    DiscoverPollEndpointRequest.isa = isa;
})(DiscoverPollEndpointRequest = exports.DiscoverPollEndpointRequest || (exports.DiscoverPollEndpointRequest = {}));
var DiscoverPollEndpointResponse;
(function (DiscoverPollEndpointResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverPollEndpointResponse");
    }
    DiscoverPollEndpointResponse.isa = isa;
})(DiscoverPollEndpointResponse = exports.DiscoverPollEndpointResponse || (exports.DiscoverPollEndpointResponse = {}));
var DockerVolumeConfiguration;
(function (DockerVolumeConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DockerVolumeConfiguration");
    }
    DockerVolumeConfiguration.isa = isa;
})(DockerVolumeConfiguration = exports.DockerVolumeConfiguration || (exports.DockerVolumeConfiguration = {}));
var EFSVolumeConfiguration;
(function (EFSVolumeConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "EFSVolumeConfiguration");
    }
    EFSVolumeConfiguration.isa = isa;
})(EFSVolumeConfiguration = exports.EFSVolumeConfiguration || (exports.EFSVolumeConfiguration = {}));
var Failure;
(function (Failure) {
    function isa(o) {
        return smithy_client_1.isa(o, "Failure");
    }
    Failure.isa = isa;
})(Failure = exports.Failure || (exports.Failure = {}));
var FirelensConfiguration;
(function (FirelensConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "FirelensConfiguration");
    }
    FirelensConfiguration.isa = isa;
})(FirelensConfiguration = exports.FirelensConfiguration || (exports.FirelensConfiguration = {}));
var FirelensConfigurationType;
(function (FirelensConfigurationType) {
    FirelensConfigurationType["FLUENTBIT"] = "fluentbit";
    FirelensConfigurationType["FLUENTD"] = "fluentd";
})(FirelensConfigurationType = exports.FirelensConfigurationType || (exports.FirelensConfigurationType = {}));
var HealthCheck;
(function (HealthCheck) {
    function isa(o) {
        return smithy_client_1.isa(o, "HealthCheck");
    }
    HealthCheck.isa = isa;
})(HealthCheck = exports.HealthCheck || (exports.HealthCheck = {}));
var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "HEALTHY";
    HealthStatus["UNHEALTHY"] = "UNHEALTHY";
    HealthStatus["UNKNOWN"] = "UNKNOWN";
})(HealthStatus = exports.HealthStatus || (exports.HealthStatus = {}));
var HostEntry;
(function (HostEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "HostEntry");
    }
    HostEntry.isa = isa;
})(HostEntry = exports.HostEntry || (exports.HostEntry = {}));
var HostVolumeProperties;
(function (HostVolumeProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "HostVolumeProperties");
    }
    HostVolumeProperties.isa = isa;
})(HostVolumeProperties = exports.HostVolumeProperties || (exports.HostVolumeProperties = {}));
var InferenceAccelerator;
(function (InferenceAccelerator) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferenceAccelerator");
    }
    InferenceAccelerator.isa = isa;
})(InferenceAccelerator = exports.InferenceAccelerator || (exports.InferenceAccelerator = {}));
var InferenceAcceleratorOverride;
(function (InferenceAcceleratorOverride) {
    function isa(o) {
        return smithy_client_1.isa(o, "InferenceAcceleratorOverride");
    }
    InferenceAcceleratorOverride.isa = isa;
})(InferenceAcceleratorOverride = exports.InferenceAcceleratorOverride || (exports.InferenceAcceleratorOverride = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var IpcMode;
(function (IpcMode) {
    IpcMode["HOST"] = "host";
    IpcMode["NONE"] = "none";
    IpcMode["TASK"] = "task";
})(IpcMode = exports.IpcMode || (exports.IpcMode = {}));
var KernelCapabilities;
(function (KernelCapabilities) {
    function isa(o) {
        return smithy_client_1.isa(o, "KernelCapabilities");
    }
    KernelCapabilities.isa = isa;
})(KernelCapabilities = exports.KernelCapabilities || (exports.KernelCapabilities = {}));
var KeyValuePair;
(function (KeyValuePair) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyValuePair");
    }
    KeyValuePair.isa = isa;
})(KeyValuePair = exports.KeyValuePair || (exports.KeyValuePair = {}));
var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType = exports.LaunchType || (exports.LaunchType = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var LinuxParameters;
(function (LinuxParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "LinuxParameters");
    }
    LinuxParameters.isa = isa;
})(LinuxParameters = exports.LinuxParameters || (exports.LinuxParameters = {}));
var ListAccountSettingsRequest;
(function (ListAccountSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountSettingsRequest");
    }
    ListAccountSettingsRequest.isa = isa;
})(ListAccountSettingsRequest = exports.ListAccountSettingsRequest || (exports.ListAccountSettingsRequest = {}));
var ListAccountSettingsResponse;
(function (ListAccountSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountSettingsResponse");
    }
    ListAccountSettingsResponse.isa = isa;
})(ListAccountSettingsResponse = exports.ListAccountSettingsResponse || (exports.ListAccountSettingsResponse = {}));
var ListAttributesRequest;
(function (ListAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttributesRequest");
    }
    ListAttributesRequest.isa = isa;
})(ListAttributesRequest = exports.ListAttributesRequest || (exports.ListAttributesRequest = {}));
var ListAttributesResponse;
(function (ListAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttributesResponse");
    }
    ListAttributesResponse.isa = isa;
})(ListAttributesResponse = exports.ListAttributesResponse || (exports.ListAttributesResponse = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersRequest");
    }
    ListClustersRequest.isa = isa;
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ListClustersResponse;
(function (ListClustersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersResponse");
    }
    ListClustersResponse.isa = isa;
})(ListClustersResponse = exports.ListClustersResponse || (exports.ListClustersResponse = {}));
var ListContainerInstancesRequest;
(function (ListContainerInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContainerInstancesRequest");
    }
    ListContainerInstancesRequest.isa = isa;
})(ListContainerInstancesRequest = exports.ListContainerInstancesRequest || (exports.ListContainerInstancesRequest = {}));
var ListContainerInstancesResponse;
(function (ListContainerInstancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContainerInstancesResponse");
    }
    ListContainerInstancesResponse.isa = isa;
})(ListContainerInstancesResponse = exports.ListContainerInstancesResponse || (exports.ListContainerInstancesResponse = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesRequest");
    }
    ListServicesRequest.isa = isa;
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesResponse");
    }
    ListServicesResponse.isa = isa;
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListTaskDefinitionFamiliesRequest;
(function (ListTaskDefinitionFamiliesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskDefinitionFamiliesRequest");
    }
    ListTaskDefinitionFamiliesRequest.isa = isa;
})(ListTaskDefinitionFamiliesRequest = exports.ListTaskDefinitionFamiliesRequest || (exports.ListTaskDefinitionFamiliesRequest = {}));
var ListTaskDefinitionFamiliesResponse;
(function (ListTaskDefinitionFamiliesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskDefinitionFamiliesResponse");
    }
    ListTaskDefinitionFamiliesResponse.isa = isa;
})(ListTaskDefinitionFamiliesResponse = exports.ListTaskDefinitionFamiliesResponse || (exports.ListTaskDefinitionFamiliesResponse = {}));
var ListTaskDefinitionsRequest;
(function (ListTaskDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskDefinitionsRequest");
    }
    ListTaskDefinitionsRequest.isa = isa;
})(ListTaskDefinitionsRequest = exports.ListTaskDefinitionsRequest || (exports.ListTaskDefinitionsRequest = {}));
var ListTaskDefinitionsResponse;
(function (ListTaskDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskDefinitionsResponse");
    }
    ListTaskDefinitionsResponse.isa = isa;
})(ListTaskDefinitionsResponse = exports.ListTaskDefinitionsResponse || (exports.ListTaskDefinitionsResponse = {}));
var ListTasksRequest;
(function (ListTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTasksRequest");
    }
    ListTasksRequest.isa = isa;
})(ListTasksRequest = exports.ListTasksRequest || (exports.ListTasksRequest = {}));
var ListTasksResponse;
(function (ListTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTasksResponse");
    }
    ListTasksResponse.isa = isa;
})(ListTasksResponse = exports.ListTasksResponse || (exports.ListTasksResponse = {}));
var LoadBalancer;
(function (LoadBalancer) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancer");
    }
    LoadBalancer.isa = isa;
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var LogConfiguration;
(function (LogConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogConfiguration");
    }
    LogConfiguration.isa = isa;
})(LogConfiguration = exports.LogConfiguration || (exports.LogConfiguration = {}));
var LogDriver;
(function (LogDriver) {
    LogDriver["AWSFIRELENS"] = "awsfirelens";
    LogDriver["AWSLOGS"] = "awslogs";
    LogDriver["FLUENTD"] = "fluentd";
    LogDriver["GELF"] = "gelf";
    LogDriver["JOURNALD"] = "journald";
    LogDriver["JSON_FILE"] = "json-file";
    LogDriver["SPLUNK"] = "splunk";
    LogDriver["SYSLOG"] = "syslog";
})(LogDriver = exports.LogDriver || (exports.LogDriver = {}));
var ManagedScaling;
(function (ManagedScaling) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedScaling");
    }
    ManagedScaling.isa = isa;
})(ManagedScaling = exports.ManagedScaling || (exports.ManagedScaling = {}));
var ManagedScalingStatus;
(function (ManagedScalingStatus) {
    ManagedScalingStatus["DISABLED"] = "DISABLED";
    ManagedScalingStatus["ENABLED"] = "ENABLED";
})(ManagedScalingStatus = exports.ManagedScalingStatus || (exports.ManagedScalingStatus = {}));
var ManagedTerminationProtection;
(function (ManagedTerminationProtection) {
    ManagedTerminationProtection["DISABLED"] = "DISABLED";
    ManagedTerminationProtection["ENABLED"] = "ENABLED";
})(ManagedTerminationProtection = exports.ManagedTerminationProtection || (exports.ManagedTerminationProtection = {}));
var MissingVersionException;
(function (MissingVersionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingVersionException");
    }
    MissingVersionException.isa = isa;
})(MissingVersionException = exports.MissingVersionException || (exports.MissingVersionException = {}));
var MountPoint;
(function (MountPoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "MountPoint");
    }
    MountPoint.isa = isa;
})(MountPoint = exports.MountPoint || (exports.MountPoint = {}));
var NetworkBinding;
(function (NetworkBinding) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkBinding");
    }
    NetworkBinding.isa = isa;
})(NetworkBinding = exports.NetworkBinding || (exports.NetworkBinding = {}));
var NetworkConfiguration;
(function (NetworkConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkConfiguration");
    }
    NetworkConfiguration.isa = isa;
})(NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {}));
var NetworkInterface;
(function (NetworkInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkInterface");
    }
    NetworkInterface.isa = isa;
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var NetworkMode;
(function (NetworkMode) {
    NetworkMode["AWSVPC"] = "awsvpc";
    NetworkMode["BRIDGE"] = "bridge";
    NetworkMode["HOST"] = "host";
    NetworkMode["NONE"] = "none";
})(NetworkMode = exports.NetworkMode || (exports.NetworkMode = {}));
var NoUpdateAvailableException;
(function (NoUpdateAvailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoUpdateAvailableException");
    }
    NoUpdateAvailableException.isa = isa;
})(NoUpdateAvailableException = exports.NoUpdateAvailableException || (exports.NoUpdateAvailableException = {}));
var PidMode;
(function (PidMode) {
    PidMode["HOST"] = "host";
    PidMode["TASK"] = "task";
})(PidMode = exports.PidMode || (exports.PidMode = {}));
var PlacementConstraint;
(function (PlacementConstraint) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlacementConstraint");
    }
    PlacementConstraint.isa = isa;
})(PlacementConstraint = exports.PlacementConstraint || (exports.PlacementConstraint = {}));
var PlacementConstraintType;
(function (PlacementConstraintType) {
    PlacementConstraintType["DISTINCT_INSTANCE"] = "distinctInstance";
    PlacementConstraintType["MEMBER_OF"] = "memberOf";
})(PlacementConstraintType = exports.PlacementConstraintType || (exports.PlacementConstraintType = {}));
var PlacementStrategy;
(function (PlacementStrategy) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlacementStrategy");
    }
    PlacementStrategy.isa = isa;
})(PlacementStrategy = exports.PlacementStrategy || (exports.PlacementStrategy = {}));
var PlacementStrategyType;
(function (PlacementStrategyType) {
    PlacementStrategyType["BINPACK"] = "binpack";
    PlacementStrategyType["RANDOM"] = "random";
    PlacementStrategyType["SPREAD"] = "spread";
})(PlacementStrategyType = exports.PlacementStrategyType || (exports.PlacementStrategyType = {}));
var PlatformDevice;
(function (PlatformDevice) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlatformDevice");
    }
    PlatformDevice.isa = isa;
})(PlatformDevice = exports.PlatformDevice || (exports.PlatformDevice = {}));
var PlatformDeviceType;
(function (PlatformDeviceType) {
    PlatformDeviceType["GPU"] = "GPU";
})(PlatformDeviceType = exports.PlatformDeviceType || (exports.PlatformDeviceType = {}));
var PlatformTaskDefinitionIncompatibilityException;
(function (PlatformTaskDefinitionIncompatibilityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlatformTaskDefinitionIncompatibilityException");
    }
    PlatformTaskDefinitionIncompatibilityException.isa = isa;
})(PlatformTaskDefinitionIncompatibilityException = exports.PlatformTaskDefinitionIncompatibilityException || (exports.PlatformTaskDefinitionIncompatibilityException = {}));
var PlatformUnknownException;
(function (PlatformUnknownException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PlatformUnknownException");
    }
    PlatformUnknownException.isa = isa;
})(PlatformUnknownException = exports.PlatformUnknownException || (exports.PlatformUnknownException = {}));
var PortMapping;
(function (PortMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "PortMapping");
    }
    PortMapping.isa = isa;
})(PortMapping = exports.PortMapping || (exports.PortMapping = {}));
var PropagateTags;
(function (PropagateTags) {
    PropagateTags["SERVICE"] = "SERVICE";
    PropagateTags["TASK_DEFINITION"] = "TASK_DEFINITION";
})(PropagateTags = exports.PropagateTags || (exports.PropagateTags = {}));
var ProxyConfiguration;
(function (ProxyConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProxyConfiguration");
    }
    ProxyConfiguration.isa = isa;
})(ProxyConfiguration = exports.ProxyConfiguration || (exports.ProxyConfiguration = {}));
var ProxyConfigurationType;
(function (ProxyConfigurationType) {
    ProxyConfigurationType["APPMESH"] = "APPMESH";
})(ProxyConfigurationType = exports.ProxyConfigurationType || (exports.ProxyConfigurationType = {}));
var PutAccountSettingDefaultRequest;
(function (PutAccountSettingDefaultRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAccountSettingDefaultRequest");
    }
    PutAccountSettingDefaultRequest.isa = isa;
})(PutAccountSettingDefaultRequest = exports.PutAccountSettingDefaultRequest || (exports.PutAccountSettingDefaultRequest = {}));
var PutAccountSettingDefaultResponse;
(function (PutAccountSettingDefaultResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAccountSettingDefaultResponse");
    }
    PutAccountSettingDefaultResponse.isa = isa;
})(PutAccountSettingDefaultResponse = exports.PutAccountSettingDefaultResponse || (exports.PutAccountSettingDefaultResponse = {}));
var PutAccountSettingRequest;
(function (PutAccountSettingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAccountSettingRequest");
    }
    PutAccountSettingRequest.isa = isa;
})(PutAccountSettingRequest = exports.PutAccountSettingRequest || (exports.PutAccountSettingRequest = {}));
var PutAccountSettingResponse;
(function (PutAccountSettingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAccountSettingResponse");
    }
    PutAccountSettingResponse.isa = isa;
})(PutAccountSettingResponse = exports.PutAccountSettingResponse || (exports.PutAccountSettingResponse = {}));
var PutAttributesRequest;
(function (PutAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAttributesRequest");
    }
    PutAttributesRequest.isa = isa;
})(PutAttributesRequest = exports.PutAttributesRequest || (exports.PutAttributesRequest = {}));
var PutAttributesResponse;
(function (PutAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAttributesResponse");
    }
    PutAttributesResponse.isa = isa;
})(PutAttributesResponse = exports.PutAttributesResponse || (exports.PutAttributesResponse = {}));
var PutClusterCapacityProvidersRequest;
(function (PutClusterCapacityProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutClusterCapacityProvidersRequest");
    }
    PutClusterCapacityProvidersRequest.isa = isa;
})(PutClusterCapacityProvidersRequest = exports.PutClusterCapacityProvidersRequest || (exports.PutClusterCapacityProvidersRequest = {}));
var PutClusterCapacityProvidersResponse;
(function (PutClusterCapacityProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutClusterCapacityProvidersResponse");
    }
    PutClusterCapacityProvidersResponse.isa = isa;
})(PutClusterCapacityProvidersResponse = exports.PutClusterCapacityProvidersResponse || (exports.PutClusterCapacityProvidersResponse = {}));
var RegisterContainerInstanceRequest;
(function (RegisterContainerInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterContainerInstanceRequest");
    }
    RegisterContainerInstanceRequest.isa = isa;
})(RegisterContainerInstanceRequest = exports.RegisterContainerInstanceRequest || (exports.RegisterContainerInstanceRequest = {}));
var RegisterContainerInstanceResponse;
(function (RegisterContainerInstanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterContainerInstanceResponse");
    }
    RegisterContainerInstanceResponse.isa = isa;
})(RegisterContainerInstanceResponse = exports.RegisterContainerInstanceResponse || (exports.RegisterContainerInstanceResponse = {}));
var RegisterTaskDefinitionRequest;
(function (RegisterTaskDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTaskDefinitionRequest");
    }
    RegisterTaskDefinitionRequest.isa = isa;
})(RegisterTaskDefinitionRequest = exports.RegisterTaskDefinitionRequest || (exports.RegisterTaskDefinitionRequest = {}));
var RegisterTaskDefinitionResponse;
(function (RegisterTaskDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterTaskDefinitionResponse");
    }
    RegisterTaskDefinitionResponse.isa = isa;
})(RegisterTaskDefinitionResponse = exports.RegisterTaskDefinitionResponse || (exports.RegisterTaskDefinitionResponse = {}));
var RepositoryCredentials;
(function (RepositoryCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "RepositoryCredentials");
    }
    RepositoryCredentials.isa = isa;
})(RepositoryCredentials = exports.RepositoryCredentials || (exports.RepositoryCredentials = {}));
var Resource;
(function (Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "Resource");
    }
    Resource.isa = isa;
})(Resource = exports.Resource || (exports.Resource = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceRequirement;
(function (ResourceRequirement) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceRequirement");
    }
    ResourceRequirement.isa = isa;
})(ResourceRequirement = exports.ResourceRequirement || (exports.ResourceRequirement = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["GPU"] = "GPU";
    ResourceType["INFERENCE_ACCELERATOR"] = "InferenceAccelerator";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var RunTaskRequest;
(function (RunTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunTaskRequest");
    }
    RunTaskRequest.isa = isa;
})(RunTaskRequest = exports.RunTaskRequest || (exports.RunTaskRequest = {}));
var RunTaskResponse;
(function (RunTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunTaskResponse");
    }
    RunTaskResponse.isa = isa;
})(RunTaskResponse = exports.RunTaskResponse || (exports.RunTaskResponse = {}));
var Scale;
(function (Scale) {
    function isa(o) {
        return smithy_client_1.isa(o, "Scale");
    }
    Scale.isa = isa;
})(Scale = exports.Scale || (exports.Scale = {}));
var ScaleUnit;
(function (ScaleUnit) {
    ScaleUnit["PERCENT"] = "PERCENT";
})(ScaleUnit = exports.ScaleUnit || (exports.ScaleUnit = {}));
var SchedulingStrategy;
(function (SchedulingStrategy) {
    SchedulingStrategy["DAEMON"] = "DAEMON";
    SchedulingStrategy["REPLICA"] = "REPLICA";
})(SchedulingStrategy = exports.SchedulingStrategy || (exports.SchedulingStrategy = {}));
var Scope;
(function (Scope) {
    Scope["SHARED"] = "shared";
    Scope["TASK"] = "task";
})(Scope = exports.Scope || (exports.Scope = {}));
var Secret;
(function (Secret) {
    function isa(o) {
        return smithy_client_1.isa(o, "Secret");
    }
    Secret.isa = isa;
})(Secret = exports.Secret || (exports.Secret = {}));
var ServerException;
(function (ServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerException");
    }
    ServerException.isa = isa;
})(ServerException = exports.ServerException || (exports.ServerException = {}));
var Service;
(function (Service) {
    function isa(o) {
        return smithy_client_1.isa(o, "Service");
    }
    Service.isa = isa;
})(Service = exports.Service || (exports.Service = {}));
var ServiceEvent;
(function (ServiceEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceEvent");
    }
    ServiceEvent.isa = isa;
})(ServiceEvent = exports.ServiceEvent || (exports.ServiceEvent = {}));
var ServiceField;
(function (ServiceField) {
    ServiceField["TAGS"] = "TAGS";
})(ServiceField = exports.ServiceField || (exports.ServiceField = {}));
var ServiceNotActiveException;
(function (ServiceNotActiveException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceNotActiveException");
    }
    ServiceNotActiveException.isa = isa;
})(ServiceNotActiveException = exports.ServiceNotActiveException || (exports.ServiceNotActiveException = {}));
var ServiceNotFoundException;
(function (ServiceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceNotFoundException");
    }
    ServiceNotFoundException.isa = isa;
})(ServiceNotFoundException = exports.ServiceNotFoundException || (exports.ServiceNotFoundException = {}));
var ServiceRegistry;
(function (ServiceRegistry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceRegistry");
    }
    ServiceRegistry.isa = isa;
})(ServiceRegistry = exports.ServiceRegistry || (exports.ServiceRegistry = {}));
var Setting;
(function (Setting) {
    function isa(o) {
        return smithy_client_1.isa(o, "Setting");
    }
    Setting.isa = isa;
})(Setting = exports.Setting || (exports.Setting = {}));
var SettingName;
(function (SettingName) {
    SettingName["AWSVPC_TRUNKING"] = "awsvpcTrunking";
    SettingName["CONTAINER_INSIGHTS"] = "containerInsights";
    SettingName["CONTAINER_INSTANCE_LONG_ARN_FORMAT"] = "containerInstanceLongArnFormat";
    SettingName["SERVICE_LONG_ARN_FORMAT"] = "serviceLongArnFormat";
    SettingName["TASK_LONG_ARN_FORMAT"] = "taskLongArnFormat";
})(SettingName = exports.SettingName || (exports.SettingName = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var StabilityStatus;
(function (StabilityStatus) {
    StabilityStatus["STABILIZING"] = "STABILIZING";
    StabilityStatus["STEADY_STATE"] = "STEADY_STATE";
})(StabilityStatus = exports.StabilityStatus || (exports.StabilityStatus = {}));
var StartTaskRequest;
(function (StartTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTaskRequest");
    }
    StartTaskRequest.isa = isa;
})(StartTaskRequest = exports.StartTaskRequest || (exports.StartTaskRequest = {}));
var StartTaskResponse;
(function (StartTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTaskResponse");
    }
    StartTaskResponse.isa = isa;
})(StartTaskResponse = exports.StartTaskResponse || (exports.StartTaskResponse = {}));
var StopTaskRequest;
(function (StopTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTaskRequest");
    }
    StopTaskRequest.isa = isa;
})(StopTaskRequest = exports.StopTaskRequest || (exports.StopTaskRequest = {}));
var StopTaskResponse;
(function (StopTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTaskResponse");
    }
    StopTaskResponse.isa = isa;
})(StopTaskResponse = exports.StopTaskResponse || (exports.StopTaskResponse = {}));
var SubmitAttachmentStateChangesRequest;
(function (SubmitAttachmentStateChangesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitAttachmentStateChangesRequest");
    }
    SubmitAttachmentStateChangesRequest.isa = isa;
})(SubmitAttachmentStateChangesRequest = exports.SubmitAttachmentStateChangesRequest || (exports.SubmitAttachmentStateChangesRequest = {}));
var SubmitAttachmentStateChangesResponse;
(function (SubmitAttachmentStateChangesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitAttachmentStateChangesResponse");
    }
    SubmitAttachmentStateChangesResponse.isa = isa;
})(SubmitAttachmentStateChangesResponse = exports.SubmitAttachmentStateChangesResponse || (exports.SubmitAttachmentStateChangesResponse = {}));
var SubmitContainerStateChangeRequest;
(function (SubmitContainerStateChangeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitContainerStateChangeRequest");
    }
    SubmitContainerStateChangeRequest.isa = isa;
})(SubmitContainerStateChangeRequest = exports.SubmitContainerStateChangeRequest || (exports.SubmitContainerStateChangeRequest = {}));
var SubmitContainerStateChangeResponse;
(function (SubmitContainerStateChangeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitContainerStateChangeResponse");
    }
    SubmitContainerStateChangeResponse.isa = isa;
})(SubmitContainerStateChangeResponse = exports.SubmitContainerStateChangeResponse || (exports.SubmitContainerStateChangeResponse = {}));
var SubmitTaskStateChangeRequest;
(function (SubmitTaskStateChangeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitTaskStateChangeRequest");
    }
    SubmitTaskStateChangeRequest.isa = isa;
})(SubmitTaskStateChangeRequest = exports.SubmitTaskStateChangeRequest || (exports.SubmitTaskStateChangeRequest = {}));
var SubmitTaskStateChangeResponse;
(function (SubmitTaskStateChangeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubmitTaskStateChangeResponse");
    }
    SubmitTaskStateChangeResponse.isa = isa;
})(SubmitTaskStateChangeResponse = exports.SubmitTaskStateChangeResponse || (exports.SubmitTaskStateChangeResponse = {}));
var SystemControl;
(function (SystemControl) {
    function isa(o) {
        return smithy_client_1.isa(o, "SystemControl");
    }
    SystemControl.isa = isa;
})(SystemControl = exports.SystemControl || (exports.SystemControl = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TargetNotFoundException;
(function (TargetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetNotFoundException");
    }
    TargetNotFoundException.isa = isa;
})(TargetNotFoundException = exports.TargetNotFoundException || (exports.TargetNotFoundException = {}));
var TargetType;
(function (TargetType) {
    TargetType["CONTAINER_INSTANCE"] = "container-instance";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var Task;
(function (Task) {
    function isa(o) {
        return smithy_client_1.isa(o, "Task");
    }
    Task.isa = isa;
})(Task = exports.Task || (exports.Task = {}));
var TaskDefinition;
(function (TaskDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskDefinition");
    }
    TaskDefinition.isa = isa;
})(TaskDefinition = exports.TaskDefinition || (exports.TaskDefinition = {}));
var TaskDefinitionFamilyStatus;
(function (TaskDefinitionFamilyStatus) {
    TaskDefinitionFamilyStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionFamilyStatus["ALL"] = "ALL";
    TaskDefinitionFamilyStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionFamilyStatus = exports.TaskDefinitionFamilyStatus || (exports.TaskDefinitionFamilyStatus = {}));
var TaskDefinitionField;
(function (TaskDefinitionField) {
    TaskDefinitionField["TAGS"] = "TAGS";
})(TaskDefinitionField = exports.TaskDefinitionField || (exports.TaskDefinitionField = {}));
var TaskDefinitionPlacementConstraint;
(function (TaskDefinitionPlacementConstraint) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskDefinitionPlacementConstraint");
    }
    TaskDefinitionPlacementConstraint.isa = isa;
})(TaskDefinitionPlacementConstraint = exports.TaskDefinitionPlacementConstraint || (exports.TaskDefinitionPlacementConstraint = {}));
var TaskDefinitionPlacementConstraintType;
(function (TaskDefinitionPlacementConstraintType) {
    TaskDefinitionPlacementConstraintType["MEMBER_OF"] = "memberOf";
})(TaskDefinitionPlacementConstraintType = exports.TaskDefinitionPlacementConstraintType || (exports.TaskDefinitionPlacementConstraintType = {}));
var TaskDefinitionStatus;
(function (TaskDefinitionStatus) {
    TaskDefinitionStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionStatus = exports.TaskDefinitionStatus || (exports.TaskDefinitionStatus = {}));
var TaskField;
(function (TaskField) {
    TaskField["TAGS"] = "TAGS";
})(TaskField = exports.TaskField || (exports.TaskField = {}));
var TaskOverride;
(function (TaskOverride) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskOverride");
    }
    TaskOverride.isa = isa;
})(TaskOverride = exports.TaskOverride || (exports.TaskOverride = {}));
var TaskSet;
(function (TaskSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskSet");
    }
    TaskSet.isa = isa;
})(TaskSet = exports.TaskSet || (exports.TaskSet = {}));
var TaskSetNotFoundException;
(function (TaskSetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskSetNotFoundException");
    }
    TaskSetNotFoundException.isa = isa;
})(TaskSetNotFoundException = exports.TaskSetNotFoundException || (exports.TaskSetNotFoundException = {}));
var TaskStopCode;
(function (TaskStopCode) {
    TaskStopCode["ESSENTIAL_CONTAINER_EXITED"] = "EssentialContainerExited";
    TaskStopCode["TASK_FAILED_TO_START"] = "TaskFailedToStart";
    TaskStopCode["USER_INITIATED"] = "UserInitiated";
})(TaskStopCode = exports.TaskStopCode || (exports.TaskStopCode = {}));
var Tmpfs;
(function (Tmpfs) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tmpfs");
    }
    Tmpfs.isa = isa;
})(Tmpfs = exports.Tmpfs || (exports.Tmpfs = {}));
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["TCP"] = "tcp";
    TransportProtocol["UDP"] = "udp";
})(TransportProtocol = exports.TransportProtocol || (exports.TransportProtocol = {}));
var Ulimit;
(function (Ulimit) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ulimit");
    }
    Ulimit.isa = isa;
})(Ulimit = exports.Ulimit || (exports.Ulimit = {}));
var UlimitName;
(function (UlimitName) {
    UlimitName["CORE"] = "core";
    UlimitName["CPU"] = "cpu";
    UlimitName["DATA"] = "data";
    UlimitName["FSIZE"] = "fsize";
    UlimitName["LOCKS"] = "locks";
    UlimitName["MEMLOCK"] = "memlock";
    UlimitName["MSGQUEUE"] = "msgqueue";
    UlimitName["NICE"] = "nice";
    UlimitName["NOFILE"] = "nofile";
    UlimitName["NPROC"] = "nproc";
    UlimitName["RSS"] = "rss";
    UlimitName["RTPRIO"] = "rtprio";
    UlimitName["RTTIME"] = "rttime";
    UlimitName["SIGPENDING"] = "sigpending";
    UlimitName["STACK"] = "stack";
})(UlimitName = exports.UlimitName || (exports.UlimitName = {}));
var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedFeatureException");
    }
    UnsupportedFeatureException.isa = isa;
})(UnsupportedFeatureException = exports.UnsupportedFeatureException || (exports.UnsupportedFeatureException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateClusterSettingsRequest;
(function (UpdateClusterSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClusterSettingsRequest");
    }
    UpdateClusterSettingsRequest.isa = isa;
})(UpdateClusterSettingsRequest = exports.UpdateClusterSettingsRequest || (exports.UpdateClusterSettingsRequest = {}));
var UpdateClusterSettingsResponse;
(function (UpdateClusterSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClusterSettingsResponse");
    }
    UpdateClusterSettingsResponse.isa = isa;
})(UpdateClusterSettingsResponse = exports.UpdateClusterSettingsResponse || (exports.UpdateClusterSettingsResponse = {}));
var UpdateContainerAgentRequest;
(function (UpdateContainerAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContainerAgentRequest");
    }
    UpdateContainerAgentRequest.isa = isa;
})(UpdateContainerAgentRequest = exports.UpdateContainerAgentRequest || (exports.UpdateContainerAgentRequest = {}));
var UpdateContainerAgentResponse;
(function (UpdateContainerAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContainerAgentResponse");
    }
    UpdateContainerAgentResponse.isa = isa;
})(UpdateContainerAgentResponse = exports.UpdateContainerAgentResponse || (exports.UpdateContainerAgentResponse = {}));
var UpdateContainerInstancesStateRequest;
(function (UpdateContainerInstancesStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContainerInstancesStateRequest");
    }
    UpdateContainerInstancesStateRequest.isa = isa;
})(UpdateContainerInstancesStateRequest = exports.UpdateContainerInstancesStateRequest || (exports.UpdateContainerInstancesStateRequest = {}));
var UpdateContainerInstancesStateResponse;
(function (UpdateContainerInstancesStateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateContainerInstancesStateResponse");
    }
    UpdateContainerInstancesStateResponse.isa = isa;
})(UpdateContainerInstancesStateResponse = exports.UpdateContainerInstancesStateResponse || (exports.UpdateContainerInstancesStateResponse = {}));
var UpdateInProgressException;
(function (UpdateInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateInProgressException");
    }
    UpdateInProgressException.isa = isa;
})(UpdateInProgressException = exports.UpdateInProgressException || (exports.UpdateInProgressException = {}));
var UpdateServicePrimaryTaskSetRequest;
(function (UpdateServicePrimaryTaskSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServicePrimaryTaskSetRequest");
    }
    UpdateServicePrimaryTaskSetRequest.isa = isa;
})(UpdateServicePrimaryTaskSetRequest = exports.UpdateServicePrimaryTaskSetRequest || (exports.UpdateServicePrimaryTaskSetRequest = {}));
var UpdateServicePrimaryTaskSetResponse;
(function (UpdateServicePrimaryTaskSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServicePrimaryTaskSetResponse");
    }
    UpdateServicePrimaryTaskSetResponse.isa = isa;
})(UpdateServicePrimaryTaskSetResponse = exports.UpdateServicePrimaryTaskSetResponse || (exports.UpdateServicePrimaryTaskSetResponse = {}));
var UpdateServiceRequest;
(function (UpdateServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceRequest");
    }
    UpdateServiceRequest.isa = isa;
})(UpdateServiceRequest = exports.UpdateServiceRequest || (exports.UpdateServiceRequest = {}));
var UpdateServiceResponse;
(function (UpdateServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceResponse");
    }
    UpdateServiceResponse.isa = isa;
})(UpdateServiceResponse = exports.UpdateServiceResponse || (exports.UpdateServiceResponse = {}));
var UpdateTaskSetRequest;
(function (UpdateTaskSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTaskSetRequest");
    }
    UpdateTaskSetRequest.isa = isa;
})(UpdateTaskSetRequest = exports.UpdateTaskSetRequest || (exports.UpdateTaskSetRequest = {}));
var UpdateTaskSetResponse;
(function (UpdateTaskSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTaskSetResponse");
    }
    UpdateTaskSetResponse.isa = isa;
})(UpdateTaskSetResponse = exports.UpdateTaskSetResponse || (exports.UpdateTaskSetResponse = {}));
var VersionInfo;
(function (VersionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "VersionInfo");
    }
    VersionInfo.isa = isa;
})(VersionInfo = exports.VersionInfo || (exports.VersionInfo = {}));
var Volume;
(function (Volume) {
    function isa(o) {
        return smithy_client_1.isa(o, "Volume");
    }
    Volume.isa = isa;
})(Volume = exports.Volume || (exports.Volume = {}));
var VolumeFrom;
(function (VolumeFrom) {
    function isa(o) {
        return smithy_client_1.isa(o, "VolumeFrom");
    }
    VolumeFrom.isa = isa;
})(VolumeFrom = exports.VolumeFrom || (exports.VolumeFrom = {}));
//# sourceMappingURL=index.js.map